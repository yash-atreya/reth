//! Capability messaging
//!
//! An RLPx stream is multiplexed via the prepended message-id of a framed message.
//! Capabilities are exchanged via the RLPx `Hello` message as pairs of `(id, version)`, <https://github.com/ethereum/devp2p/blob/master/rlpx.md#capability-messaging>

use futures::FutureExt;
use reth_eth_wire::{
    capability::RawCapabilityMessage, message::RequestPair, BlockBodies, EthMessage,
    GetBlockBodies, GetBlockHeaders, GetNodeData, GetPooledTransactions, GetReceipts, NewBlock,
    NewBlockHashes, NewPooledTransactionHashes, NodeData, PooledTransactions, Receipts,
    SharedTransactions, Transactions,
};
use reth_interfaces::p2p::error::{RequestError, RequestResult};
use reth_primitives::{
    BlockBody, Bytes, Headers, PeerId, PooledTransactionsElement, ReceiptWithBloom, B256,
};
use std::{
    fmt,
    sync::Arc,
    task::{ready, Context, Poll},
};
use tokio::sync::{mpsc, mpsc::error::TrySendError, oneshot};

/// Internal form of a `NewBlock` message
#[derive(Debug, Clone)]
pub struct NewBlockMessage {
    /// Hash of the block
    pub hash: B256,
    /// Raw received message
    pub block: Arc<NewBlock>,
}

// === impl NewBlockMessage ===

impl NewBlockMessage {
    /// Returns the block number of the block
    pub fn number(&self) -> u64 {
        self.block.block.header.number
    }
}

/// All Bi-directional eth-message variants that can be sent to a session or received from a
/// session.
#[derive(Debug)]
pub enum PeerMessage {
    /// Announce new block hashes
    NewBlockHashes(NewBlockHashes),
    /// Broadcast new block.
    NewBlock(NewBlockMessage),
    /// Received transactions _from_ the peer
    ReceivedTransaction(Transactions),
    /// Broadcast transactions _from_ local _to_ a peer.
    SendTransactions(SharedTransactions),
    /// Send new pooled transactions
    PooledTransactions(NewPooledTransactionHashes),
    /// All `eth` request variants.
    EthRequest(PeerRequest),
    /// Other than eth namespace message
    Other(RawCapabilityMessage),
}

/// Request Variants that only target block related data.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum BlockRequest {
    /// Requests block headers from the peer.
    ///
    /// The response should be sent through the channel.
    GetBlockHeaders(GetBlockHeaders),

    /// Requests block bodies from the peer.
    ///
    /// The response should be sent through the channel.
    GetBlockBodies(GetBlockBodies),
}

/// Protocol related request messages that expect a response
#[derive(Debug)]
pub enum PeerRequest {
    /// Requests block headers from the peer.
    ///
    /// The response should be sent through the channel.
    GetBlockHeaders {
        /// The request for block headers.
        request: GetBlockHeaders,
        /// The channel to send the response for block headers.
        response: oneshot::Sender<RequestResult<Headers>>,
    },
    /// Requests block bodies from the peer.
    ///
    /// The response should be sent through the channel.
    GetBlockBodies {
        /// The request for block bodies.
        request: GetBlockBodies,
        /// The channel to send the response for block bodies.
        response: oneshot::Sender<RequestResult<BlockBodies>>,
    },
    /// Requests pooled transactions from the peer.
    ///
    /// The response should be sent through the channel.
    GetPooledTransactions {
        /// The request for pooled transactions.
        request: GetPooledTransactions,
        /// The channel to send the response for pooled transactions.
        response: oneshot::Sender<RequestResult<PooledTransactions>>,
    },
    /// Requests NodeData from the peer.
    ///
    /// The response should be sent through the channel.
    GetNodeData {
        /// The request for NodeData.
        request: GetNodeData,
        /// The channel to send the response for NodeData.
        response: oneshot::Sender<RequestResult<NodeData>>,
    },
    /// Requests receipts from the peer.
    ///
    /// The response should be sent through the channel.
    GetReceipts {
        /// The request for receipts.
        request: GetReceipts,
        /// The channel to send the response for receipts.
        response: oneshot::Sender<RequestResult<Receipts>>,
    },
}

// === impl PeerRequest ===

impl PeerRequest {
    /// Invoked if we received a response which does not match the request
    pub(crate) fn send_bad_response(self) {
        self.send_err_response(RequestError::BadResponse)
    }

    /// Send an error back to the receiver.
    pub(crate) fn send_err_response(self, err: RequestError) {
        let _ = match self {
            PeerRequest::GetBlockHeaders { response, .. } => response.send(Err(err)).ok(),
            PeerRequest::GetBlockBodies { response, .. } => response.send(Err(err)).ok(),
            PeerRequest::GetPooledTransactions { response, .. } => response.send(Err(err)).ok(),
            PeerRequest::GetNodeData { response, .. } => response.send(Err(err)).ok(),
            PeerRequest::GetReceipts { response, .. } => response.send(Err(err)).ok(),
        };
    }

    /// Returns the [`EthMessage`] for this type
    pub fn create_request_message(&self, request_id: u64) -> EthMessage {
        match self {
            PeerRequest::GetBlockHeaders { request, .. } => {
                EthMessage::GetBlockHeaders(RequestPair { request_id, message: *request })
            }
            PeerRequest::GetBlockBodies { request, .. } => {
                EthMessage::GetBlockBodies(RequestPair { request_id, message: request.clone() })
            }
            PeerRequest::GetPooledTransactions { request, .. } => {
                EthMessage::GetPooledTransactions(RequestPair {
                    request_id,
                    message: request.clone(),
                })
            }
            PeerRequest::GetNodeData { request, .. } => {
                EthMessage::GetNodeData(RequestPair { request_id, message: request.clone() })
            }
            PeerRequest::GetReceipts { request, .. } => {
                EthMessage::GetReceipts(RequestPair { request_id, message: request.clone() })
            }
        }
    }

    /// Consumes the type and returns the inner [`GetPooledTransactions`] variant.
    pub fn into_get_pooled_transactions(self) -> Option<GetPooledTransactions> {
        match self {
            PeerRequest::GetPooledTransactions { request, .. } => Some(request),
            _ => None,
        }
    }
}

/// Corresponding variant for [`PeerRequest`].
#[derive(Debug)]
pub enum PeerResponse {
    /// Represents a response to a request for block headers.
    Headers {
        /// The receiver channel for the response to a block headers request.
        response: oneshot::Receiver<RequestResult<Headers>>,
    },
    /// Represents a response to a request for block bodies.
    BlockBodies {
        /// The receiver channel for the response to a block bodies request.
        response: oneshot::Receiver<RequestResult<BlockBodies>>,
    },
    /// Represents a response to a request for pooled transactions.
    PooledTransactions {
        /// The receiver channel for the response to a pooled transactions request.
        response: oneshot::Receiver<RequestResult<PooledTransactions>>,
    },
    /// Represents a response to a request for NodeData.
    NodeData {
        /// The receiver channel for the response to a NodeData request.
        response: oneshot::Receiver<RequestResult<NodeData>>,
    },
    /// Represents a response to a request for receipts.
    Receipts {
        /// The receiver channel for the response to a receipts request.
        response: oneshot::Receiver<RequestResult<Receipts>>,
    },
}

// === impl PeerResponse ===

impl PeerResponse {
    /// Polls the type to completion.
    pub(crate) fn poll(&mut self, cx: &mut Context<'_>) -> Poll<PeerResponseResult> {
        macro_rules! poll_request {
            ($response:ident, $item:ident, $cx:ident) => {
                match ready!($response.poll_unpin($cx)) {
                    Ok(res) => PeerResponseResult::$item(res.map(|item| item.0.into())),
                    Err(err) => PeerResponseResult::$item(Err(err.into())),
                }
            };
        }

        let res = match self {
            PeerResponse::Headers { response } => {
                poll_request!(response, Headers, cx)
            }
            PeerResponse::BlockBodies { response } => {
                poll_request!(response, BlockBodies, cx)
            }
            PeerResponse::PooledTransactions { response } => {
                poll_request!(response, PooledTransactions, cx)
            }
            PeerResponse::NodeData { response } => {
                poll_request!(response, NodeData, cx)
            }
            PeerResponse::Receipts { response } => {
                poll_request!(response, Receipts, cx)
            }
        };
        Poll::Ready(res)
    }
}

/// All response variants for [`PeerResponse`]
#[derive(Debug)]
pub enum PeerResponseResult {
    /// Represents a result containing block headers or an error.
    Headers(RequestResult<Headers>),
    /// Represents a result containing block bodies or an error.
    BlockBodies(RequestResult<Vec<BlockBody>>),
    /// Represents a result containing pooled transactions or an error.
    PooledTransactions(RequestResult<Vec<PooledTransactionsElement>>),
    /// Represents a result containing node data or an error.
    NodeData(RequestResult<Vec<Bytes>>),
    /// Represents a result containing receipts or an error.
    Receipts(RequestResult<Vec<Vec<ReceiptWithBloom>>>),
}

// === impl PeerResponseResult ===

impl PeerResponseResult {
    /// Converts this response into an [`EthMessage`]
    pub fn try_into_message(self, id: u64) -> RequestResult<EthMessage> {
        macro_rules! to_message {
            ($response:ident, $item:ident, $request_id:ident) => {
                match $response {
                    Ok(res) => {
                        let request =
                            RequestPair { request_id: $request_id, message: $item(res.to_vec()) };
                        Ok(EthMessage::$item(request))
                    }
                    Err(err) => Err(err),
                }
            };
        }
        match self {
            PeerResponseResult::Headers(resp) => {
                to_message!(resp, Headers, id)
            }
            PeerResponseResult::BlockBodies(resp) => {
                to_message!(resp, BlockBodies, id)
            }
            PeerResponseResult::PooledTransactions(resp) => {
                to_message!(resp, PooledTransactions, id)
            }
            PeerResponseResult::NodeData(resp) => {
                to_message!(resp, NodeData, id)
            }
            PeerResponseResult::Receipts(resp) => {
                to_message!(resp, Receipts, id)
            }
        }
    }

    /// Returns the `Err` value if the result is an error.
    pub fn err(&self) -> Option<&RequestError> {
        match self {
            PeerResponseResult::Headers(res) => res.as_ref().err(),
            PeerResponseResult::BlockBodies(res) => res.as_ref().err(),
            PeerResponseResult::PooledTransactions(res) => res.as_ref().err(),
            PeerResponseResult::NodeData(res) => res.as_ref().err(),
            PeerResponseResult::Receipts(res) => res.as_ref().err(),
        }
    }

    /// Returns whether this result is an error.
    pub fn is_err(&self) -> bool {
        self.err().is_some()
    }
}

/// A Cloneable connection for sending _requests_ directly to the session of a peer.
#[derive(Clone)]
pub struct PeerRequestSender {
    /// id of the remote node.
    pub(crate) peer_id: PeerId,
    /// The Sender half connected to a session.
    pub(crate) to_session_tx: mpsc::Sender<PeerRequest>,
}

// === impl PeerRequestSender ===

impl PeerRequestSender {
    /// Constructs a new sender instance that's wired to a session
    pub(crate) fn new(peer_id: PeerId, to_session_tx: mpsc::Sender<PeerRequest>) -> Self {
        Self { peer_id, to_session_tx }
    }

    /// Attempts to immediately send a message on this Sender
    pub fn try_send(&self, req: PeerRequest) -> Result<(), TrySendError<PeerRequest>> {
        self.to_session_tx.try_send(req)
    }

    /// Returns the peer id of the remote peer.
    pub fn peer_id(&self) -> &PeerId {
        &self.peer_id
    }
}

impl fmt::Debug for PeerRequestSender {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("PeerRequestSender").field("peer_id", &self.peer_id).finish_non_exhaustive()
    }
}
