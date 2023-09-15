//! Wrapper around revms state.
use rayon::slice::ParallelSliceMut;
use reth_db::{
    cursor::{DbCursorRO, DbCursorRW, DbDupCursorRO, DbDupCursorRW},
    models::{AccountBeforeTx, BlockNumberAddress},
    tables,
    transaction::{DbTx, DbTxMut},
};
use reth_interfaces::db::DatabaseError;
use reth_primitives::{
    bloom::logs_bloom, keccak256, proofs::calculate_receipt_root_ref, Account, Address,
    BlockNumber, Bloom, Bytecode, Log, Receipt, StorageEntry, H256, U256,
};
use reth_revm_primitives::{
    db::states::{
        BundleState, PlainStateReverts, PlainStorageChangeset, PlainStorageRevert, RevertToSlot,
        StateChangeset,
    },
    into_reth_acc, into_revm_acc,
    primitives::AccountInfo,
};
use reth_trie::{
    hashed_cursor::{HashedPostState, HashedPostStateCursorFactory, HashedStorage},
    StateRoot, StateRootError,
};
use std::{collections::HashMap, iter::Peekable};

pub use reth_revm_primitives::db::states::OriginalValuesKnown;

/// Bundle state of post execution changes and reverts
#[derive(Default, Debug, Clone, PartialEq, Eq)]
pub struct BundleStateWithReceipts {
    /// Bundle state with reverts.
    bundle: BundleState,
    /// Receipts.
    receipts: Vec<Vec<Option<Receipt>>>,
    /// First block of bundle state.
    first_block: BlockNumber,
}

/// Type used to initialize revms bundle state.
pub type BundleStateInit =
    HashMap<Address, (Option<Account>, Option<Account>, HashMap<H256, (U256, U256)>)>;

/// Types used inside RevertsInit to initialize revms reverts.
pub type AccountRevertInit = (Option<Option<Account>>, Vec<StorageEntry>);

/// Type used to initialize revms reverts.
pub type RevertsInit = HashMap<BlockNumber, HashMap<Address, AccountRevertInit>>;

impl BundleStateWithReceipts {
    /// Create Bundle State.
    pub fn new(
        bundle: BundleState,
        receipts: Vec<Vec<Option<Receipt>>>,
        first_block: BlockNumber,
    ) -> Self {
        Self { bundle, receipts, first_block }
    }

    /// Create new bundle state with receipts.
    pub fn new_init(
        state_init: BundleStateInit,
        revert_init: RevertsInit,
        contracts_init: Vec<(H256, Bytecode)>,
        receipts: Vec<Vec<Option<Receipt>>>,
        first_block: BlockNumber,
    ) -> Self {
        // sort reverts by block number
        let mut reverts = revert_init.into_iter().collect::<Vec<_>>();
        reverts.sort_unstable_by_key(|a| a.0);

        // initialize revm bundle
        let bundle = BundleState::new(
            state_init.into_iter().map(|(address, (original, present, storage))| {
                (
                    address,
                    original.map(into_revm_acc),
                    present.map(into_revm_acc),
                    storage.into_iter().map(|(k, s)| (k.into(), s)).collect(),
                )
            }),
            reverts.into_iter().map(|(_, reverts)| {
                // does not needs to be sorted, it is done when taking reverts.
                reverts.into_iter().map(|(address, (original, storage))| {
                    (
                        address,
                        original.map(|i| i.map(into_revm_acc)),
                        storage.into_iter().map(|entry| (entry.key.into(), entry.value)),
                    )
                })
            }),
            contracts_init.into_iter().map(|(code_hash, bytecode)| (code_hash, bytecode.0)),
        );

        Self { bundle, receipts, first_block }
    }

    /// Return revm bundle state.
    pub fn state(&self) -> &BundleState {
        &self.bundle
    }

    /// Set first block.
    pub fn set_first_block(&mut self, first_block: BlockNumber) {
        self.first_block = first_block;
    }

    /// Return iterator over all accounts
    pub fn accounts_iter(&self) -> impl Iterator<Item = (Address, Option<&AccountInfo>)> {
        self.bundle.state().iter().map(|(a, acc)| (*a, acc.info.as_ref()))
    }

    /// Get account if account is known.
    pub fn account(&self, address: &Address) -> Option<Option<Account>> {
        self.bundle.account(address).map(|a| a.info.clone().map(into_reth_acc))
    }

    /// Get storage if value is known.
    ///
    /// This means that depending on status we can potentially return U256::ZERO.
    pub fn storage(&self, address: &Address, storage_key: U256) -> Option<U256> {
        self.bundle.account(address).and_then(|a| a.storage_slot(storage_key))
    }

    /// Return bytecode if known.
    pub fn bytecode(&self, code_hash: &H256) -> Option<Bytecode> {
        self.bundle.bytecode(code_hash).map(Bytecode)
    }

    /// Hash all changed accounts and storage entries that are currently stored in the post state.
    ///
    /// # Returns
    ///
    /// The hashed post state.
    pub fn hash_state_slow(&self) -> HashedPostState {
        //let mut storages = BTreeMap::default();
        let mut hashed_state = HashedPostState::default();

        for (address, account) in self.bundle.state() {
            let hashed_address = keccak256(address);
            if let Some(account) = &account.info {
                hashed_state.insert_account(hashed_address, into_reth_acc(account.clone()))
            } else {
                hashed_state.insert_cleared_account(hashed_address);
            }

            // insert storage.
            let mut hashed_storage = HashedStorage::new(account.status.was_destroyed());

            for (key, value) in account.storage.iter() {
                let hashed_key = keccak256(H256(key.to_be_bytes()));
                if value.present_value == U256::ZERO {
                    hashed_storage.insert_zero_valued_slot(hashed_key);
                } else {
                    hashed_storage.insert_non_zero_valued_storage(hashed_key, value.present_value);
                }
            }
            hashed_state.insert_hashed_storage(hashed_address, hashed_storage)
        }
        hashed_state.sorted()
    }

    /// Calculate the state root for this [BundleState].
    /// Internally, function calls [Self::hash_state_slow] to obtain the [HashedPostState].
    /// Afterwards, it retrieves the prefixsets from the [HashedPostState] and uses them to
    /// calculate the incremental state root.
    ///
    /// # Example
    ///
    /// ```
    /// use reth_primitives::{Account, U256};
    /// use reth_provider::BundleStateWithReceipts;
    /// use reth_db::{test_utils::create_test_rw_db, database::Database};
    /// use std::collections::HashMap;
    ///
    /// // Initialize the database
    /// let db = create_test_rw_db();
    ///
    /// // Initialize the bundle state
    /// let bundle = BundleStateWithReceipts::new_init(
    ///     HashMap::from([(
    ///         [0x11;20].into(),
    ///         (
    ///             None,
    ///             Some(Account { nonce: 1, balance: U256::from(10), bytecode_hash: None }),
    ///             HashMap::from([]),
    ///         ),
    ///     )]),
    ///     HashMap::from([]),
    ///     vec![],
    ///     vec![],
    ///     0,
    /// );
    ///
    /// // Calculate the state root
    /// let tx = db.tx().expect("failed to create transaction");
    /// let state_root = bundle.state_root_slow(&tx);
    /// ```
    ///
    /// # Returns
    ///
    /// The state root for this [BundleState].
    pub fn state_root_slow<'a, 'tx, TX: DbTx<'tx>>(
        &self,
        tx: &'a TX,
    ) -> Result<H256, StateRootError> {
        let hashed_post_state = self.hash_state_slow();
        let (account_prefix_set, storage_prefix_set) = hashed_post_state.construct_prefix_sets();
        let hashed_cursor_factory = HashedPostStateCursorFactory::new(tx, &hashed_post_state);
        StateRoot::new(tx)
            .with_hashed_cursor_factory(&hashed_cursor_factory)
            .with_changed_account_prefixes(account_prefix_set)
            .with_changed_storage_prefixes(storage_prefix_set)
            .root()
    }

    /// Transform block number to the index of block.
    fn block_number_to_index(&self, block_number: BlockNumber) -> Option<usize> {
        if self.first_block > block_number {
            return None
        }
        let index = block_number - self.first_block;
        if index >= self.receipts.len() as u64 {
            return None
        }
        Some(index as usize)
    }

    /// Returns an iterator over all block logs.
    pub fn logs(&self, block_number: BlockNumber) -> Option<impl Iterator<Item = &Log>> {
        let index = self.block_number_to_index(block_number)?;
        Some(self.receipts[index].iter().filter_map(|r| Some(r.as_ref()?.logs.iter())).flatten())
    }

    /// Return blocks logs bloom
    pub fn block_logs_bloom(&self, block_number: BlockNumber) -> Option<Bloom> {
        Some(logs_bloom(self.logs(block_number)?))
    }

    /// Returns the receipt root for all recorded receipts.
    /// Note: this function calculated Bloom filters for every receipt and created merkle trees
    /// of receipt. This is a expensive operation.
    pub fn receipts_root_slow(&self, block_number: BlockNumber) -> Option<H256> {
        let index = self.block_number_to_index(block_number)?;
        let block_receipts =
            self.receipts[index].iter().map(Option::as_ref).collect::<Option<Vec<_>>>()?;
        Some(calculate_receipt_root_ref(&block_receipts))
    }

    /// Return reference to receipts.
    pub fn receipts(&self) -> &Vec<Vec<Option<Receipt>>> {
        &self.receipts
    }

    /// Return all block receipts
    pub fn receipts_by_block(&self, block_number: BlockNumber) -> &[Option<Receipt>] {
        let Some(index) = self.block_number_to_index(block_number) else { return &[] };
        &self.receipts[index]
    }

    /// Is bundle state empty of blocks.
    pub fn is_empty(&self) -> bool {
        self.len() == 0
    }

    /// Number of blocks in bundle state.
    pub fn len(&self) -> usize {
        self.receipts.len()
    }

    /// Return first block of the bundle
    pub fn first_block(&self) -> BlockNumber {
        self.first_block
    }

    /// Return last block of the bundle.
    pub fn last_block(&self) -> BlockNumber {
        self.first_block + self.len() as BlockNumber
    }

    /// Revert to given block number.
    ///
    /// If number is in future, or in the past return false
    ///
    /// Note: Given Block number will stay inside the bundle state.
    pub fn revert_to(&mut self, block_number: BlockNumber) -> bool {
        let Some(index) = self.block_number_to_index(block_number) else { return false };

        // +1 is for number of blocks that we have as index is included.
        let new_len = index + 1;
        let rm_trx: usize = self.len() - new_len;

        // remove receipts
        self.receipts.truncate(new_len);
        // Revert last n reverts.
        self.bundle.revert(rm_trx);

        true
    }

    /// This will detach lower part of the chain and return it back.
    /// Specified block number will be included in detachment
    ///
    /// This plain state will contains some additional information that
    /// are is a artifacts of the lower part state.
    ///
    /// If block number is in future, return None.
    pub fn split_at(&mut self, block_number: BlockNumber) -> Option<Self> {
        let last_block = self.last_block();
        let first_block = self.first_block;
        if block_number >= last_block {
            return None
        }
        if block_number < first_block {
            return Some(Self::default())
        }

        // detached number should be included so we are adding +1 to it.
        // for example if block number is same as first_block then
        // number of detached block shoud be 1.
        let num_of_detached_block = (block_number - first_block) + 1;

        let mut detached_bundle_state: BundleStateWithReceipts = self.clone();
        detached_bundle_state.revert_to(block_number);

        // split is done as [0, num) and [num, len]
        let (_, this) = self.receipts.split_at(num_of_detached_block as usize);

        self.receipts = this.to_vec().clone();
        self.bundle.take_n_reverts(num_of_detached_block as usize);

        self.first_block = block_number + 1;

        Some(detached_bundle_state)
    }

    /// Extend one state from another
    ///
    /// For state this is very sensitive opperation and should be used only when
    /// we know that other state was build on top of this one.
    /// In most cases this would be true.
    pub fn extend(&mut self, other: Self) {
        self.bundle.extend(other.bundle);
        self.receipts.extend(other.receipts);
    }

    /// Write bundle state to database.
    ///
    /// `omit_changed_check` should be set to true of bundle has some of it data
    /// detached, This would make some original values not known.
    pub fn write_to_db<'a, TX: DbTxMut<'a> + DbTx<'a>>(
        self,
        tx: &TX,
        is_value_known: OriginalValuesKnown,
    ) -> Result<(), DatabaseError> {
        let (plain_state, reverts) = self.bundle.into_plain_state_and_reverts(is_value_known);

        StateReverts(reverts).write_to_db(tx, self.first_block)?;

        // write receipts
        let mut bodies_cursor = tx.cursor_read::<tables::BlockBodyIndices>()?;
        let mut receipts_cursor = tx.cursor_write::<tables::Receipts>()?;

        for (idx, receipts) in self.receipts.into_iter().enumerate() {
            if !receipts.is_empty() {
                let (_, body_indices) = bodies_cursor
                    .seek_exact(self.first_block + idx as u64)?
                    .expect("body indices exist");

                let first_tx_index = body_indices.first_tx_num();
                for (tx_idx, receipt) in receipts.into_iter().enumerate() {
                    if let Some(receipt) = receipt {
                        receipts_cursor.append(first_tx_index + tx_idx as u64, receipt)?;
                    }
                }
            }
        }

        StateChange(plain_state).write_to_db(tx)?;

        Ok(())
    }
}

/// Revert of the state.
#[derive(Default)]
pub struct StateReverts(pub PlainStateReverts);

impl From<PlainStateReverts> for StateReverts {
    fn from(revm: PlainStateReverts) -> Self {
        Self(revm)
    }
}

impl StateReverts {
    /// Write reverts to database.
    ///
    /// Note:: Reverts will delete all wiped storage from plain state.
    pub fn write_to_db<'a, TX: DbTxMut<'a> + DbTx<'a>>(
        self,
        tx: &TX,
        first_block: BlockNumber,
    ) -> Result<(), DatabaseError> {
        // Write storage changes
        tracing::trace!(target: "provider::reverts", "Writing storage changes");
        let mut storages_cursor = tx.cursor_dup_write::<tables::PlainStorageState>()?;
        let mut storage_changeset_cursor = tx.cursor_dup_write::<tables::StorageChangeSet>()?;
        for (block_index, mut storage_changes) in self.0.storage.into_iter().enumerate() {
            let block_number = first_block + block_index as BlockNumber;

            tracing::trace!(target: "provider::reverts", block_number, "Writing block change");
            // sort changes by address.
            storage_changes.par_sort_unstable_by_key(|a| a.address);
            for PlainStorageRevert { address, wiped, storage_revert } in storage_changes.into_iter()
            {
                let storage_id = BlockNumberAddress((block_number, address));

                let mut storage = storage_revert
                    .into_iter()
                    .map(|(k, v)| (H256(k.to_be_bytes()), v))
                    .collect::<Vec<_>>();
                // sort storage slots by key.
                storage.par_sort_unstable_by_key(|a| a.0);

                // If we are writing the primary storage wipe transition, the pre-existing plain
                // storage state has to be taken from the database and written to storage history.
                // See [StorageWipe::Primary] for more details.
                let mut wiped_storage = Vec::new();
                if wiped {
                    tracing::trace!(target: "provider::reverts", ?address, "Wiping storage");
                    if let Some((_, entry)) = storages_cursor.seek_exact(address)? {
                        wiped_storage.push((entry.key, entry.value));
                        while let Some(entry) = storages_cursor.next_dup_val()? {
                            wiped_storage.push((entry.key, entry.value))
                        }
                    }
                }

                tracing::trace!(target: "provider::reverts", ?address, ?storage, "Writing storage reverts");
                for (key, value) in StorageRevertsIter::new(storage, wiped_storage) {
                    storage_changeset_cursor.append_dup(storage_id, StorageEntry { key, value })?;
                }
            }
        }

        // Write account changes
        tracing::trace!(target: "provider::reverts", "Writing account changes");
        let mut account_changeset_cursor = tx.cursor_dup_write::<tables::AccountChangeSet>()?;
        for (block_index, mut account_block_reverts) in self.0.accounts.into_iter().enumerate() {
            let block_number = first_block + block_index as BlockNumber;
            // Sort accounts by address.
            account_block_reverts.par_sort_by_key(|a| a.0);
            for (address, info) in account_block_reverts {
                account_changeset_cursor.append_dup(
                    block_number,
                    AccountBeforeTx { address, info: info.map(into_reth_acc) },
                )?;
            }
        }

        Ok(())
    }
}

/// Iterator over storage reverts.
/// See [StorageRevertsIter::next] for more details.
struct StorageRevertsIter<R: Iterator, W: Iterator> {
    reverts: Peekable<R>,
    wiped: Peekable<W>,
}

impl<R: Iterator, W: Iterator> StorageRevertsIter<R, W>
where
    R: Iterator<Item = (H256, RevertToSlot)>,
    W: Iterator<Item = (H256, U256)>,
{
    fn new(
        reverts: impl IntoIterator<IntoIter = R>,
        wiped: impl IntoIterator<IntoIter = W>,
    ) -> Self {
        Self { reverts: reverts.into_iter().peekable(), wiped: wiped.into_iter().peekable() }
    }

    /// Consume next revert and return it.
    fn next_revert(&mut self) -> Option<(H256, U256)> {
        self.reverts.next().map(|(key, revert)| (key, revert.to_previous_value()))
    }

    /// Consume next wiped storage and return it.
    fn next_wiped(&mut self) -> Option<(H256, U256)> {
        self.wiped.next()
    }
}

impl<R, W> Iterator for StorageRevertsIter<R, W>
where
    R: Iterator<Item = (H256, RevertToSlot)>,
    W: Iterator<Item = (H256, U256)>,
{
    type Item = (H256, U256);

    /// Iterate over storage reverts and wiped entries and return items in the sorted order.
    /// NOTE: The implementation assumes that inner iterators are already sorted.
    fn next(&mut self) -> Option<Self::Item> {
        match (self.reverts.peek(), self.wiped.peek()) {
            (Some(revert), Some(wiped)) => {
                // Compare the keys and return the lesser.
                use std::cmp::Ordering;
                match revert.0.cmp(&wiped.0) {
                    Ordering::Less => self.next_revert(),
                    Ordering::Greater => self.next_wiped(),
                    Ordering::Equal => {
                        // Keys are the same, decide which one to return.
                        let (key, revert_to) = *revert;

                        let value = match revert_to {
                            // If the slot is some, prefer the revert value.
                            RevertToSlot::Some(value) => value,
                            // If the slot was destroyed, prefer the database value.
                            RevertToSlot::Destroyed => wiped.1,
                        };

                        // Consume both values from inner iterators.
                        self.next_revert();
                        self.next_wiped();

                        Some((key, value))
                    }
                }
            }
            (Some(_revert), None) => self.next_revert(),
            (None, Some(_wiped)) => self.next_wiped(),
            (None, None) => None,
        }
    }
}

/// A change to the state of the world.
#[derive(Default)]
pub struct StateChange(pub StateChangeset);

impl From<StateChangeset> for StateChange {
    fn from(revm: StateChangeset) -> Self {
        Self(revm)
    }
}

impl StateChange {
    /// Write the post state to the database.
    pub fn write_to_db<'a, TX: DbTxMut<'a> + DbTx<'a>>(
        mut self,
        tx: &TX,
    ) -> Result<(), DatabaseError> {
        // sort all entries so they can be written to database in more performant way.
        // and take smaller memory footprint.
        self.0.accounts.par_sort_by_key(|a| a.0);
        self.0.storage.par_sort_by_key(|a| a.address);
        self.0.contracts.par_sort_by_key(|a| a.0);

        // Write new account state
        tracing::trace!(target: "provider::post_state", len = self.0.accounts.len(), "Writing new account state");
        let mut accounts_cursor = tx.cursor_write::<tables::PlainAccountState>()?;
        // write account to database.
        for (address, account) in self.0.accounts.into_iter() {
            if let Some(account) = account {
                tracing::trace!(target: "provider::post_state", ?address, "Updating plain state account");
                accounts_cursor.upsert(address, into_reth_acc(account))?;
            } else if accounts_cursor.seek_exact(address)?.is_some() {
                tracing::trace!(target: "provider::post_state", ?address, "Deleting plain state account");
                accounts_cursor.delete_current()?;
            }
        }

        // Write bytecode
        tracing::trace!(target: "provider::post_state", len = self.0.contracts.len(), "Writing bytecodes");
        let mut bytecodes_cursor = tx.cursor_write::<tables::Bytecodes>()?;
        for (hash, bytecode) in self.0.contracts.into_iter() {
            bytecodes_cursor.upsert(hash, Bytecode(bytecode))?;
        }

        // Write new storage state and wipe storage if needed.
        tracing::trace!(target: "provider::post_state", len = self.0.storage.len(), "Writing new storage state");
        let mut storages_cursor = tx.cursor_dup_write::<tables::PlainStorageState>()?;
        for PlainStorageChangeset { address, wipe_storage, storage } in self.0.storage.into_iter() {
            // Wiping of storage.
            if wipe_storage && storages_cursor.seek_exact(address)?.is_some() {
                storages_cursor.delete_current_duplicates()?;
            }
            // cast storages to H256.
            let mut storage = storage
                .into_iter()
                .map(|(k, value)| StorageEntry { key: k.into(), value })
                .collect::<Vec<_>>();
            // sort storage slots by key.
            storage.par_sort_unstable_by_key(|a| a.key);

            for entry in storage.into_iter() {
                tracing::trace!(target: "provider::post_state", ?address, ?entry.key, "Updating plain state storage");
                if let Some(db_entry) = storages_cursor.seek_by_key_subkey(address, entry.key)? {
                    if db_entry.key == entry.key {
                        storages_cursor.delete_current()?;
                    }
                }

                if entry.value != U256::ZERO {
                    storages_cursor.upsert(address, entry)?;
                }
            }
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::{StateChange, StateReverts};
    use crate::{AccountReader, BundleStateWithReceipts, ProviderFactory};
    use reth_db::{
        cursor::{DbCursorRO, DbDupCursorRO},
        models::{AccountBeforeTx, BlockNumberAddress},
        tables,
        test_utils::create_test_rw_db,
        transaction::DbTx,
        DatabaseEnv,
    };
    use reth_primitives::{Address, Receipt, StorageEntry, H256, MAINNET, U256};
    use reth_revm_primitives::{into_reth_acc, primitives::HashMap};
    use revm::{
        db::{
            states::{
                bundle_state::{BundleRetention, OriginalValuesKnown},
                changes::PlainStorageRevert,
                PlainStorageChangeset,
            },
            BundleState,
        },
        primitives::{Account, AccountInfo as RevmAccountInfo, AccountStatus, StorageSlot},
        CacheState, DatabaseCommit, State,
    };
    use std::sync::Arc;

    #[test]
    fn write_to_db_account_info() {
        let db: Arc<DatabaseEnv> = create_test_rw_db();
        let factory = ProviderFactory::new(db, MAINNET.clone());
        let provider = factory.provider_rw().unwrap();

        let address_a = Address::zero();
        let address_b = Address::repeat_byte(0xff);

        let account_a = RevmAccountInfo { balance: U256::from(1), nonce: 1, ..Default::default() };
        let account_b = RevmAccountInfo { balance: U256::from(2), nonce: 2, ..Default::default() };
        let account_b_changed =
            RevmAccountInfo { balance: U256::from(3), nonce: 3, ..Default::default() };

        let mut cache_state = CacheState::new(true);
        cache_state.insert_not_existing(address_a);
        cache_state.insert_account(address_b, account_b.clone());
        let mut state =
            State::builder().with_cached_prestate(cache_state).with_bundle_update().build();

        // 0x00.. is created
        state.commit(HashMap::from([(
            address_a,
            Account {
                info: account_a.clone(),
                status: AccountStatus::Touched | AccountStatus::Created,
                storage: HashMap::default(),
            },
        )]));

        // 0xff.. is changed (balance + 1, nonce + 1)
        state.commit(HashMap::from([(
            address_b,
            Account {
                info: account_b_changed.clone(),
                status: AccountStatus::Touched,
                storage: HashMap::default(),
            },
        )]));

        state.merge_transitions(BundleRetention::Reverts);
        let mut revm_bundle_state = state.take_bundle();

        // Write plain state and reverts separately.
        let reverts = revm_bundle_state.take_all_reverts().into_plain_state_reverts();
        let plain_state = revm_bundle_state.into_plain_state(OriginalValuesKnown::Yes);
        assert!(plain_state.storage.is_empty());
        assert!(plain_state.contracts.is_empty());
        StateChange(plain_state)
            .write_to_db(provider.tx_ref())
            .expect("Could not write plain state to DB");

        assert_eq!(reverts.storage, [[]]);
        StateReverts(reverts)
            .write_to_db(provider.tx_ref(), 1)
            .expect("Could not write reverts to DB");

        let reth_account_a = into_reth_acc(account_a);
        let reth_account_b = into_reth_acc(account_b);
        let reth_account_b_changed = into_reth_acc(account_b_changed.clone());

        // Check plain state
        assert_eq!(
            provider.basic_account(address_a).expect("Could not read account state"),
            Some(reth_account_a),
            "Account A state is wrong"
        );
        assert_eq!(
            provider.basic_account(address_b).expect("Could not read account state"),
            Some(reth_account_b_changed),
            "Account B state is wrong"
        );

        // Check change set
        let mut changeset_cursor = provider
            .tx_ref()
            .cursor_dup_read::<tables::AccountChangeSet>()
            .expect("Could not open changeset cursor");
        assert_eq!(
            changeset_cursor.seek_exact(1).expect("Could not read account change set"),
            Some((1, AccountBeforeTx { address: address_a, info: None })),
            "Account A changeset is wrong"
        );
        assert_eq!(
            changeset_cursor.next_dup().expect("Changeset table is malformed"),
            Some((1, AccountBeforeTx { address: address_b, info: Some(reth_account_b) })),
            "Account B changeset is wrong"
        );

        let mut cache_state = CacheState::new(true);
        cache_state.insert_account(address_b, account_b_changed.clone());
        let mut state =
            State::builder().with_cached_prestate(cache_state).with_bundle_update().build();

        // 0xff.. is destroyed
        state.commit(HashMap::from([(
            address_b,
            Account {
                status: AccountStatus::Touched | AccountStatus::SelfDestructed,
                info: account_b_changed,
                storage: HashMap::default(),
            },
        )]));

        state.merge_transitions(BundleRetention::Reverts);
        let mut revm_bundle_state = state.take_bundle();

        // Write plain state and reverts separately.
        let reverts = revm_bundle_state.take_all_reverts().into_plain_state_reverts();
        let plain_state = revm_bundle_state.into_plain_state(OriginalValuesKnown::Yes);
        // Account B selfdestructed so flag for it should be present.
        assert_eq!(
            plain_state.storage,
            [PlainStorageChangeset { address: address_b, wipe_storage: true, storage: vec![] }]
        );
        assert!(plain_state.contracts.is_empty());
        StateChange(plain_state)
            .write_to_db(provider.tx_ref())
            .expect("Could not write plain state to DB");

        assert_eq!(
            reverts.storage,
            [[PlainStorageRevert { address: address_b, wiped: true, storage_revert: vec![] }]]
        );
        StateReverts(reverts)
            .write_to_db(provider.tx_ref(), 2)
            .expect("Could not write reverts to DB");

        // Check new plain state for account B
        assert_eq!(
            provider.basic_account(address_b).expect("Could not read account state"),
            None,
            "Account B should be deleted"
        );

        // Check change set
        assert_eq!(
            changeset_cursor.seek_exact(2).expect("Could not read account change set"),
            Some((2, AccountBeforeTx { address: address_b, info: Some(reth_account_b_changed) })),
            "Account B changeset is wrong after deletion"
        );
    }

    #[test]
    fn write_to_db_storage() {
        let db: Arc<DatabaseEnv> = create_test_rw_db();
        let factory = ProviderFactory::new(db, MAINNET.clone());
        let provider = factory.provider_rw().unwrap();

        let address_a = Address::zero();
        let address_b = Address::repeat_byte(0xff);

        let account_b = RevmAccountInfo { balance: U256::from(2), nonce: 2, ..Default::default() };

        let mut cache_state = CacheState::new(true);
        cache_state.insert_not_existing(address_a);
        cache_state.insert_account_with_storage(
            address_b,
            account_b.clone(),
            HashMap::from([(U256::from(1), U256::from(1))]),
        );
        let mut state =
            State::builder().with_cached_prestate(cache_state).with_bundle_update().build();

        state.commit(HashMap::from([
            (
                address_a,
                Account {
                    status: AccountStatus::Touched | AccountStatus::Created,
                    info: RevmAccountInfo::default(),
                    // 0x00 => 0 => 1
                    // 0x01 => 0 => 2
                    storage: HashMap::from([
                        (
                            U256::from(0),
                            StorageSlot { present_value: U256::from(1), ..Default::default() },
                        ),
                        (
                            U256::from(1),
                            StorageSlot { present_value: U256::from(2), ..Default::default() },
                        ),
                    ]),
                },
            ),
            (
                address_b,
                Account {
                    status: AccountStatus::Touched,
                    info: account_b,
                    // 0x01 => 1 => 2
                    storage: HashMap::from([(
                        U256::from(1),
                        StorageSlot {
                            present_value: U256::from(2),
                            previous_or_original_value: U256::from(1),
                        },
                    )]),
                },
            ),
        ]));

        state.merge_transitions(BundleRetention::Reverts);

        BundleStateWithReceipts::new(state.take_bundle(), Vec::new(), 1)
            .write_to_db(provider.tx_ref(), OriginalValuesKnown::Yes)
            .expect("Could not write bundle state to DB");

        // Check plain storage state
        let mut storage_cursor = provider
            .tx_ref()
            .cursor_dup_read::<tables::PlainStorageState>()
            .expect("Could not open plain storage state cursor");

        assert_eq!(
            storage_cursor.seek_exact(address_a).unwrap(),
            Some((address_a, StorageEntry { key: H256::zero(), value: U256::from(1) })),
            "Slot 0 for account A should be 1"
        );
        assert_eq!(
            storage_cursor.next_dup().unwrap(),
            Some((
                address_a,
                StorageEntry { key: H256::from(U256::from(1).to_be_bytes()), value: U256::from(2) }
            )),
            "Slot 1 for account A should be 2"
        );
        assert_eq!(
            storage_cursor.next_dup().unwrap(),
            None,
            "Account A should only have 2 storage slots"
        );

        assert_eq!(
            storage_cursor.seek_exact(address_b).unwrap(),
            Some((
                address_b,
                StorageEntry { key: H256::from(U256::from(1).to_be_bytes()), value: U256::from(2) }
            )),
            "Slot 1 for account B should be 2"
        );
        assert_eq!(
            storage_cursor.next_dup().unwrap(),
            None,
            "Account B should only have 1 storage slot"
        );

        // Check change set
        let mut changeset_cursor = provider
            .tx_ref()
            .cursor_dup_read::<tables::StorageChangeSet>()
            .expect("Could not open storage changeset cursor");
        assert_eq!(
            changeset_cursor.seek_exact(BlockNumberAddress((1, address_a))).unwrap(),
            Some((
                BlockNumberAddress((1, address_a)),
                StorageEntry { key: H256::zero(), value: U256::from(0) }
            )),
            "Slot 0 for account A should have changed from 0"
        );
        assert_eq!(
            changeset_cursor.next_dup().unwrap(),
            Some((
                BlockNumberAddress((1, address_a)),
                StorageEntry { key: H256::from(U256::from(1).to_be_bytes()), value: U256::from(0) }
            )),
            "Slot 1 for account A should have changed from 0"
        );
        assert_eq!(
            changeset_cursor.next_dup().unwrap(),
            None,
            "Account A should only be in the changeset 2 times"
        );

        assert_eq!(
            changeset_cursor.seek_exact(BlockNumberAddress((1, address_b))).unwrap(),
            Some((
                BlockNumberAddress((1, address_b)),
                StorageEntry { key: H256::from(U256::from(1).to_be_bytes()), value: U256::from(1) }
            )),
            "Slot 1 for account B should have changed from 1"
        );
        assert_eq!(
            changeset_cursor.next_dup().unwrap(),
            None,
            "Account B should only be in the changeset 1 time"
        );

        // Delete account A
        let mut cache_state = CacheState::new(true);
        cache_state.insert_account(address_a, RevmAccountInfo::default());
        let mut state =
            State::builder().with_cached_prestate(cache_state).with_bundle_update().build();

        state.commit(HashMap::from([(
            address_a,
            Account {
                status: AccountStatus::Touched | AccountStatus::SelfDestructed,
                info: RevmAccountInfo::default(),
                storage: HashMap::default(),
            },
        )]));

        state.merge_transitions(BundleRetention::Reverts);
        BundleStateWithReceipts::new(state.take_bundle(), Vec::new(), 2)
            .write_to_db(provider.tx_ref(), OriginalValuesKnown::Yes)
            .expect("Could not write bundle state to DB");

        assert_eq!(
            storage_cursor.seek_exact(address_a).unwrap(),
            None,
            "Account A should have no storage slots after deletion"
        );

        assert_eq!(
            changeset_cursor.seek_exact(BlockNumberAddress((2, address_a))).unwrap(),
            Some((
                BlockNumberAddress((2, address_a)),
                StorageEntry { key: H256::zero(), value: U256::from(1) }
            )),
            "Slot 0 for account A should have changed from 1 on deletion"
        );
        assert_eq!(
            changeset_cursor.next_dup().unwrap(),
            Some((
                BlockNumberAddress((2, address_a)),
                StorageEntry { key: H256::from(U256::from(1).to_be_bytes()), value: U256::from(2) }
            )),
            "Slot 1 for account A should have changed from 2 on deletion"
        );
        assert_eq!(
            changeset_cursor.next_dup().unwrap(),
            None,
            "Account A should only be in the changeset 2 times on deletion"
        );
    }

    #[test]
    fn write_to_db_multiple_selfdestructs() {
        let db: Arc<DatabaseEnv> = create_test_rw_db();
        let factory = ProviderFactory::new(db, MAINNET.clone());
        let provider = factory.provider_rw().unwrap();

        let address1 = Address::random();
        let account_info = RevmAccountInfo { nonce: 1, ..Default::default() };

        // Block #0: initial state.
        let mut cache_state = CacheState::new(true);
        cache_state.insert_not_existing(address1);
        let mut init_state =
            State::builder().with_cached_prestate(cache_state).with_bundle_update().build();
        init_state.commit(HashMap::from([(
            address1,
            Account {
                info: account_info.clone(),
                status: AccountStatus::Touched | AccountStatus::Created,
                // 0x00 => 0 => 1
                // 0x01 => 0 => 2
                storage: HashMap::from([
                    (
                        U256::ZERO,
                        StorageSlot { present_value: U256::from(1), ..Default::default() },
                    ),
                    (
                        U256::from(1),
                        StorageSlot { present_value: U256::from(2), ..Default::default() },
                    ),
                ]),
            },
        )]));
        init_state.merge_transitions(BundleRetention::Reverts);
        BundleStateWithReceipts::new(init_state.take_bundle(), Vec::new(), 0)
            .write_to_db(provider.tx_ref(), OriginalValuesKnown::Yes)
            .expect("Could not write init bundle state to DB");

        let mut cache_state = CacheState::new(true);
        cache_state.insert_account_with_storage(
            address1,
            account_info.clone(),
            HashMap::from([(U256::ZERO, U256::from(1)), (U256::from(1), U256::from(2))]),
        );
        let mut state =
            State::builder().with_cached_prestate(cache_state).with_bundle_update().build();

        // Block #1: change storage.
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched,
                info: account_info.clone(),
                // 0x00 => 1 => 2
                storage: HashMap::from([(
                    U256::ZERO,
                    StorageSlot {
                        previous_or_original_value: U256::from(1),
                        present_value: U256::from(2),
                    },
                )]),
            },
        )]));
        state.merge_transitions(BundleRetention::Reverts);

        // Block #2: destroy account.
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched | AccountStatus::SelfDestructed,
                info: account_info.clone(),
                storage: HashMap::default(),
            },
        )]));
        state.merge_transitions(BundleRetention::Reverts);

        // Block #3: re-create account and change storage.
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched | AccountStatus::Created,
                info: account_info.clone(),
                storage: HashMap::default(),
            },
        )]));
        state.merge_transitions(BundleRetention::Reverts);

        // Block #4: change storage.
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched,
                info: account_info.clone(),
                // 0x00 => 0 => 2
                // 0x02 => 0 => 4
                // 0x06 => 0 => 6
                storage: HashMap::from([
                    (
                        U256::ZERO,
                        StorageSlot { present_value: U256::from(2), ..Default::default() },
                    ),
                    (
                        U256::from(2),
                        StorageSlot { present_value: U256::from(4), ..Default::default() },
                    ),
                    (
                        U256::from(6),
                        StorageSlot { present_value: U256::from(6), ..Default::default() },
                    ),
                ]),
            },
        )]));
        state.merge_transitions(BundleRetention::Reverts);

        // Block #5: Destroy account again.
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched | AccountStatus::SelfDestructed,
                info: account_info.clone(),
                storage: HashMap::default(),
            },
        )]));
        state.merge_transitions(BundleRetention::Reverts);

        // Block #6: Create, change, destroy and re-create in the same block.
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched | AccountStatus::Created,
                info: account_info.clone(),
                storage: HashMap::default(),
            },
        )]));
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched,
                info: account_info.clone(),
                // 0x00 => 0 => 2
                storage: HashMap::from([(
                    U256::ZERO,
                    StorageSlot { present_value: U256::from(2), ..Default::default() },
                )]),
            },
        )]));
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched | AccountStatus::SelfDestructed,
                info: account_info.clone(),
                storage: HashMap::default(),
            },
        )]));
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched | AccountStatus::Created,
                info: account_info.clone(),
                storage: HashMap::default(),
            },
        )]));
        state.merge_transitions(BundleRetention::Reverts);

        // Block #7: Change storage.
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched,
                info: account_info.clone(),
                // 0x00 => 0 => 9
                storage: HashMap::from([(
                    U256::ZERO,
                    StorageSlot { present_value: U256::from(9), ..Default::default() },
                )]),
            },
        )]));
        state.merge_transitions(BundleRetention::Reverts);

        let bundle = state.take_bundle();

        BundleStateWithReceipts::new(bundle, Vec::new(), 1)
            .write_to_db(provider.tx_ref(), OriginalValuesKnown::Yes)
            .expect("Could not write bundle state to DB");

        let mut storage_changeset_cursor = provider
            .tx_ref()
            .cursor_dup_read::<tables::StorageChangeSet>()
            .expect("Could not open plain storage state cursor");
        let mut storage_changes = storage_changeset_cursor.walk_range(..).unwrap();

        // Iterate through all storage changes

        // Block <number>
        // <slot>: <expected value before>
        // ...

        // Block #0
        // 0x00: 0
        // 0x01: 0
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((0, address1)),
                StorageEntry { key: H256::from_low_u64_be(0), value: U256::ZERO }
            )))
        );
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((0, address1)),
                StorageEntry { key: H256::from_low_u64_be(1), value: U256::ZERO }
            )))
        );

        // Block #1
        // 0x00: 1
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((1, address1)),
                StorageEntry { key: H256::from_low_u64_be(0), value: U256::from(1) }
            )))
        );

        // Block #2 (destroyed)
        // 0x00: 2
        // 0x01: 2
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((2, address1)),
                StorageEntry { key: H256::from_low_u64_be(0), value: U256::from(2) }
            )))
        );
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((2, address1)),
                StorageEntry { key: H256::from_low_u64_be(1), value: U256::from(2) }
            )))
        );

        // Block #3
        // no storage changes

        // Block #4
        // 0x00: 0
        // 0x02: 0
        // 0x06: 0
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((4, address1)),
                StorageEntry { key: H256::from_low_u64_be(0), value: U256::ZERO }
            )))
        );
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((4, address1)),
                StorageEntry { key: H256::from_low_u64_be(2), value: U256::ZERO }
            )))
        );
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((4, address1)),
                StorageEntry { key: H256::from_low_u64_be(6), value: U256::ZERO }
            )))
        );

        // Block #5 (destroyed)
        // 0x00: 2
        // 0x02: 4
        // 0x06: 6
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((5, address1)),
                StorageEntry { key: H256::from_low_u64_be(0), value: U256::from(2) }
            )))
        );
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((5, address1)),
                StorageEntry { key: H256::from_low_u64_be(2), value: U256::from(4) }
            )))
        );
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((5, address1)),
                StorageEntry { key: H256::from_low_u64_be(6), value: U256::from(6) }
            )))
        );

        // Block #6
        // no storage changes (only inter block changes)

        // Block #7
        // 0x00: 0
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((7, address1)),
                StorageEntry { key: H256::from_low_u64_be(0), value: U256::ZERO }
            )))
        );
        assert_eq!(storage_changes.next(), None);
    }

    #[test]
    fn storage_change_after_selfdestruct_within_block() {
        let db: Arc<DatabaseEnv> = create_test_rw_db();
        let factory = ProviderFactory::new(db, MAINNET.clone());
        let provider = factory.provider_rw().unwrap();

        let address1 = Address::random();
        let account1 = RevmAccountInfo { nonce: 1, ..Default::default() };

        // Block #0: initial state.
        let mut cache_state = CacheState::new(true);
        cache_state.insert_not_existing(address1);
        let mut init_state =
            State::builder().with_cached_prestate(cache_state).with_bundle_update().build();
        init_state.commit(HashMap::from([(
            address1,
            Account {
                info: account1.clone(),
                status: AccountStatus::Touched | AccountStatus::Created,
                // 0x00 => 0 => 1
                // 0x01 => 0 => 2
                storage: HashMap::from([
                    (
                        U256::ZERO,
                        StorageSlot { present_value: U256::from(1), ..Default::default() },
                    ),
                    (
                        U256::from(1),
                        StorageSlot { present_value: U256::from(2), ..Default::default() },
                    ),
                ]),
            },
        )]));
        init_state.merge_transitions(BundleRetention::Reverts);
        BundleStateWithReceipts::new(init_state.take_bundle(), Vec::new(), 0)
            .write_to_db(provider.tx_ref(), OriginalValuesKnown::Yes)
            .expect("Could not write init bundle state to DB");

        let mut cache_state = CacheState::new(true);
        cache_state.insert_account_with_storage(
            address1,
            account1.clone(),
            HashMap::from([(U256::ZERO, U256::from(1)), (U256::from(1), U256::from(2))]),
        );
        let mut state =
            State::builder().with_cached_prestate(cache_state).with_bundle_update().build();

        // Block #1: Destroy, re-create, change storage.
        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched | AccountStatus::SelfDestructed,
                info: account1.clone(),
                storage: HashMap::default(),
            },
        )]));

        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched | AccountStatus::Created,
                info: account1.clone(),
                storage: HashMap::default(),
            },
        )]));

        state.commit(HashMap::from([(
            address1,
            Account {
                status: AccountStatus::Touched,
                info: account1.clone(),
                // 0x01 => 0 => 5
                storage: HashMap::from([(
                    U256::from(1),
                    StorageSlot { present_value: U256::from(5), ..Default::default() },
                )]),
            },
        )]));

        // Commit block #1 changes to the database.
        state.merge_transitions(BundleRetention::Reverts);
        BundleStateWithReceipts::new(state.take_bundle(), Vec::new(), 1)
            .write_to_db(provider.tx_ref(), OriginalValuesKnown::Yes)
            .expect("Could not write bundle state to DB");

        let mut storage_changeset_cursor = provider
            .tx_ref()
            .cursor_dup_read::<tables::StorageChangeSet>()
            .expect("Could not open plain storage state cursor");
        let range = BlockNumberAddress::range(1..=1);
        let mut storage_changes = storage_changeset_cursor.walk_range(range).unwrap();

        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((1, address1)),
                StorageEntry { key: H256::from_low_u64_be(0), value: U256::from(1) }
            )))
        );
        assert_eq!(
            storage_changes.next(),
            Some(Ok((
                BlockNumberAddress((1, address1)),
                StorageEntry { key: H256::from_low_u64_be(1), value: U256::from(2) }
            )))
        );
        assert_eq!(storage_changes.next(), None);
    }

    #[test]
    fn revert_to_indices() {
        let base = BundleStateWithReceipts {
            bundle: BundleState::default(),
            receipts: vec![vec![Some(Receipt::default()); 2]; 7],
            first_block: 10,
        };

        let mut this = base.clone();
        assert!(this.revert_to(10));
        assert_eq!(this.receipts.len(), 1);

        let mut this = base.clone();
        assert!(!this.revert_to(9));
        assert_eq!(this.receipts.len(), 7);

        let mut this = base.clone();
        assert!(this.revert_to(15));
        assert_eq!(this.receipts.len(), 6);

        let mut this = base.clone();
        assert!(this.revert_to(16));
        assert_eq!(this.receipts.len(), 7);

        let mut this = base.clone();
        assert!(!this.revert_to(17));
        assert_eq!(this.receipts.len(), 7);
    }
}
