use crate::{
    common::{Bounds, Sealed},
    table::TableImporter,
    transaction::{DbTx, DbTxMut},
    DatabaseError,
};
use std::sync::Arc;

/// Implements the GAT method from:
/// <https://sabrinajewson.org/blog/the-better-alternative-to-lifetime-gats#the-better-gats>.
///
/// Sealed trait which cannot be implemented by 3rd parties, exposed only for implementers
pub trait DatabaseGAT<'a, __ImplicitBounds: Sealed = Bounds<&'a Self>>: Send + Sync {
    /// RO database transaction
    type TX: DbTx<'a> + Send + Sync;
    /// RW database transaction
    type TXMut: DbTxMut<'a> + DbTx<'a> + TableImporter<'a> + Send + Sync;
}

/// Main Database trait that spawns transactions to be executed.
pub trait Database: for<'a> DatabaseGAT<'a> {
    /// Create read only transaction.
    fn tx(&self) -> Result<<Self as DatabaseGAT<'_>>::TX, DatabaseError>;

    /// Create read write transaction only possible if database is open with write access.
    fn tx_mut(&self) -> Result<<Self as DatabaseGAT<'_>>::TXMut, DatabaseError>;

    /// Takes a function and passes a read-only transaction into it, making sure it's closed in the
    /// end of the execution.
    fn view<T, F>(&self, f: F) -> Result<T, DatabaseError>
    where
        F: FnOnce(&<Self as DatabaseGAT<'_>>::TX) -> T,
    {
        let tx = self.tx()?;

        let res = f(&tx);
        tx.commit()?;

        Ok(res)
    }

    /// Takes a function and passes a write-read transaction into it, making sure it's committed in
    /// the end of the execution.
    fn update<T, F>(&self, f: F) -> Result<T, DatabaseError>
    where
        F: FnOnce(&<Self as DatabaseGAT<'_>>::TXMut) -> T,
    {
        let tx = self.tx_mut()?;

        let res = f(&tx);
        tx.commit()?;

        Ok(res)
    }
}

// Generic over Arc
impl<'a, DB: Database> DatabaseGAT<'a> for Arc<DB> {
    type TX = <DB as DatabaseGAT<'a>>::TX;
    type TXMut = <DB as DatabaseGAT<'a>>::TXMut;
}

impl<DB: Database> Database for Arc<DB> {
    fn tx(&self) -> Result<<Self as DatabaseGAT<'_>>::TX, DatabaseError> {
        <DB as Database>::tx(self)
    }

    fn tx_mut(&self) -> Result<<Self as DatabaseGAT<'_>>::TXMut, DatabaseError> {
        <DB as Database>::tx_mut(self)
    }
}

// Generic over reference
impl<'a, DB: Database> DatabaseGAT<'a> for &DB {
    type TX = <DB as DatabaseGAT<'a>>::TX;
    type TXMut = <DB as DatabaseGAT<'a>>::TXMut;
}

impl<DB: Database> Database for &DB {
    fn tx(&self) -> Result<<Self as DatabaseGAT<'_>>::TX, DatabaseError> {
        <DB as Database>::tx(self)
    }

    fn tx_mut(&self) -> Result<<Self as DatabaseGAT<'_>>::TXMut, DatabaseError> {
        <DB as Database>::tx_mut(self)
    }
}

#[cfg(test)]
mod tests {
    use super::{super::mock::*, *};

    async fn f2<'a, DB>(b: &mut <DB as DatabaseGAT<'a>>::TXMut) -> Option<u8>
    where
        DB: Database,
        <DB as DatabaseGAT<'a>>::TXMut: Send,
    {
        Some(1)
    }

    async fn f1<'a, DB>(b: &mut <DB as DatabaseGAT<'a>>::TXMut) -> Option<u8>
    where
        DB: Database,
        <DB as DatabaseGAT<'a>>::TXMut: Send,
    {
        f2::<DB>(b).await
    }

    #[tokio::test]
    async fn high_level_failure() {
        let db = DatabaseMock::default();

        let mut tx = db.tx_mut().unwrap();

        // removing `tokio::spawn` OR `f2 call inside f1` lets it compile
        tokio::spawn(async move {
            f1::<DatabaseMock>(&mut tx).await;
        });
    }
}
