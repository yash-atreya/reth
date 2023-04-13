use crate::BeaconEngineResult;
use reth_interfaces::consensus::ForkchoiceState;
use reth_rpc_types::engine::{
    EngineRpcError, ExecutionPayload, ExecutionPayloadEnvelope, ForkchoiceUpdated,
    PayloadAttributes, PayloadId, PayloadStatus,
};
use tokio::sync::oneshot;

/// Beacon engine sender.
pub type BeaconEngineSender<Ok> = oneshot::Sender<BeaconEngineResult<Ok>>;

/// A message for the beacon engine from other components of the node.
#[derive(Debug)]
pub enum BeaconEngineMessage {
    /// Message with new payload.
    NewPayload {
        /// The execution payload received by Engine API.
        payload: ExecutionPayload,
        /// The sender for returning payload status result.
        ///
        /// The inner `EngineRpcError` is intended to be returned from the engine API, whereas the
        /// Err variant of the outer `BeaconEngineResult` is considered to be an internal error.
        tx: BeaconEngineSender<Result<PayloadStatus, EngineRpcError>>,
    },
    /// Message with updated forkchoice state.
    ForkchoiceUpdated {
        /// The updated forkchoice state.
        state: ForkchoiceState,
        /// The payload attributes for block building.
        payload_attrs: Option<PayloadAttributes>,
        /// The sender for returning forkchoice updated result.
        ///
        /// The inner `EngineRpcError` is intended to be returned from the engine API, whereas the
        /// Err variant of the outer `BeaconEngineResult` is considered to be an internal error.
        tx: BeaconEngineSender<Result<ForkchoiceUpdated, EngineRpcError>>,
    },
    /// Message with get payload parameters.
    GetPayload {
        /// The payload id.
        payload_id: PayloadId,
        /// The sender for returning payload result.
        ///
        /// The inner `EngineRpcError` is intended to be returned from the engine API, whereas the
        /// Err variant of the outer `BeaconEngineResult` is considered to be an internal error.
        tx: BeaconEngineSender<Result<ExecutionPayloadEnvelope, EngineRpcError>>,
    },
}
