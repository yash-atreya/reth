use crate::{
    compression::{Compression, Zstd},
    Filter, NippyJar, NippyJarError, PerfectHashingFunction, Row,
};
use memmap2::Mmap;
use std::{clone::Clone, fs::File, sync::Mutex};
use sucds::int_vectors::Access;
use zstd::bulk::Decompressor;

/// Simple cursor implementation to retrieve data from [`NippyJar`].
pub struct NippyJarCursor<'a> {
    /// [`NippyJar`] which holds most of the required configuration to read from the file.
    jar: &'a NippyJar,
    /// Optional dictionary decompressors.
    zstd_decompressors: Option<Mutex<Vec<Decompressor<'a>>>>,
    /// Data file.
    #[allow(unused)]
    file_handle: File,
    /// Data file.
    mmap_handle: Mmap,
    /// Temporary buffer to unload data to (if necessary), without reallocating memory on each
    /// retrieval.
    tmp_buf: Vec<u8>,
    /// Cursor row position.
    row: u64,
}

impl<'a> std::fmt::Debug for NippyJarCursor<'a> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("NippyJarCursor").field("config", &self.jar).finish_non_exhaustive()
    }
}

impl<'a> NippyJarCursor<'a> {
    pub fn new(
        config: &'a NippyJar,
        zstd_decompressors: Option<Mutex<Vec<Decompressor<'a>>>>,
    ) -> Result<Self, NippyJarError> {
        let file = File::open(config.data_path())?;
        let mmap = unsafe { Mmap::map(&file)? };
        Ok(NippyJarCursor {
            jar: config,
            zstd_decompressors,
            file_handle: file,
            mmap_handle: mmap,
            tmp_buf: vec![],
            row: 0,
        })
    }

    /// Resets cursor to the beginning.
    pub fn reset(&mut self) {
        self.row = 0;
    }

    /// Returns a row, searching it by an entry used during [`NippyJar::prepare_index`].
    ///
    /// **May return false positives.**
    ///
    /// Example usage would be querying a transactions file with a transaction hash which is **NOT**
    /// stored in file.
    pub fn row_by_filter(&mut self, value: &[u8]) -> Result<Option<Row>, NippyJarError> {
        if let (Some(filter), Some(phf)) = (&self.jar.filter, &self.jar.phf) {
            // TODO: is it worth to parallize both?

            // May have false positives
            if filter.contains(value)? {
                // May have false positives
                if let Some(row_index) = phf.get_index(value)? {
                    self.row =
                        self.jar.offsets_index.access(row_index as usize).expect("built from same")
                            as u64;
                    return self.next_row()
                }
            }
        }

        Err(NippyJarError::UnsupportedFilterQuery)
    }

    /// Returns a row by its number.
    pub fn row_by_number(&mut self, row: usize) -> Result<Option<Row>, NippyJarError> {
        self.row = row as u64;
        self.next_row()
    }

    /// Returns the current value and advances the row.
    pub fn next_row(&mut self) -> Result<Option<Row>, NippyJarError> {
        if self.row as usize * self.jar.columns >= self.jar.offsets.len() {
            // Has reached the end
            return Ok(None)
        }

        let mut row = Vec::with_capacity(self.jar.columns);

        // Retrieve all column values from the row
        for column in 0..self.jar.columns {
            self.read_value(column, &mut row)?;
        }

        self.row += 1;

        Ok(Some(row))
    }

    /// Returns a row, searching it by an entry used during [`NippyJar::prepare_index`]  by using a
    /// `MASK` to only read certain columns from the row.
    ///
    /// **May return false positives.**
    ///
    /// Example usage would be querying a transactions file with a transaction hash which is **NOT**
    /// stored in file.
    pub fn row_by_filter_with_cols<const MASK: usize, const COLUMNS: usize>(
        &mut self,
        value: &[u8],
    ) -> Result<Option<Row>, NippyJarError> {
        if let (Some(filter), Some(phf)) = (&self.jar.filter, &self.jar.phf) {
            // TODO: is it worth to parallize both?

            // May have false positives
            if filter.contains(value)? {
                // May have false positives
                if let Some(row_index) = phf.get_index(value)? {
                    self.row =
                        self.jar.offsets_index.access(row_index as usize).expect("built from same")
                            as u64;
                    return self.next_row_with_cols::<MASK, COLUMNS>()
                }
            }
        }

        Err(NippyJarError::UnsupportedFilterQuery)
    }

    /// Returns a row by its number by using a `MASK` to only read certain columns from the row.
    pub fn row_by_number_with_cols<const MASK: usize, const COLUMNS: usize>(
        &mut self,
        row: usize,
    ) -> Result<Option<Row>, NippyJarError> {
        self.row = row as u64;
        self.next_row_with_cols::<MASK, COLUMNS>()
    }

    /// Returns the current value and advances the row.
    ///
    /// Uses a `MASK` to only read certain columns from the row.
    pub fn next_row_with_cols<const MASK: usize, const COLUMNS: usize>(
        &mut self,
    ) -> Result<Option<Row>, NippyJarError> {
        debug_assert!(COLUMNS == self.jar.columns);

        if self.row as usize * self.jar.columns >= self.jar.offsets.len() {
            // Has reached the end
            return Ok(None)
        }

        let mut row = Vec::with_capacity(COLUMNS);

        for column in 0..COLUMNS {
            if MASK & (1 << column) != 0 {
                self.read_value(column, &mut row)?
            }
        }

        self.row += 1;

        Ok(Some(row))
    }

    /// Takes the column index and reads the value for the corresponding column.
    fn read_value(&mut self, column: usize, row: &mut Row) -> Result<(), NippyJarError> {
        // Find out the offset of the column value
        let offset_pos = self.row as usize * self.jar.columns + column;
        let value_offset = self.jar.offsets.select(offset_pos).expect("should exist");

        let column_value = if self.jar.offsets.len() == (offset_pos + 1) {
            // It's the last column of the last row
            &self.mmap_handle[value_offset..]
        } else {
            let next_value_offset = self.jar.offsets.select(offset_pos + 1).expect("should exist");
            &self.mmap_handle[value_offset..next_value_offset]
        };

        if let Some(zstd_dict_decompressors) = &self.zstd_decompressors {
            self.tmp_buf.clear();

            if let Some(decompressor) = zstd_dict_decompressors.lock().unwrap().get_mut(column) {
                Zstd::decompress_with_dictionary(column_value, &mut self.tmp_buf, decompressor)?;
            }

            debug_assert!(!self.tmp_buf.is_empty());

            row.push(self.tmp_buf.clone());
        } else if let Some(compression) = &self.jar.compressor {
            // Uses the chosen default decompressor
            row.push(compression.decompress(column_value)?);
        } else {
            // Not compressed
            // TODO: return Cow<&> instead of copying if there's no compression
            row.push(column_value.to_vec())
        }

        Ok(())
    }
}
