import{f as l,j as s}from"./index-xNsX7Ar1.js";const c={title:"reth node",description:"undefined"};function a(e){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"reth-node",children:["reth node",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reth-node",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(n.p,{children:"Start the node"}),`
`,s.jsx(s.Fragment,{children:s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(n.code,{children:s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"$"}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" reth"}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" node"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --help"})]})})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Usage: reth node [OPTIONS]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Options:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --config <FILE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The path to the configuration file to use."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --chain <CHAIN_OR_PATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The chain this node is running."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Possible values are either a built-in chain or the path to a chain specification file."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Built-in chains:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"              mainnet, sepolia, holesky, hoodi, dev"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: mainnet]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --instance <INSTANCE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Add a new instance of a node."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Configures the ports of the node to avoid conflicts with the defaults. This is useful for running multiple nodes on the same machine."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of instances is 200. It is chosen in a way so that it's not possible to have port numbers that conflict with each other."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Changes to the following port numbers: - `DISCOVERY_PORT`: default + `instance` - 1 - `AUTH_PORT`: default + `instance` * 100 - 100 - `HTTP_RPC_PORT`: default - `instance` + 1 - `WS_RPC_PORT`: default + `instance` * 2 - 2 - `IPC_PATH`: default + `-instance`"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --with-unused-ports"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Sets all ports to unused, allowing the OS to choose random unused ports when sockets are bound."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Mutually exclusive with `--instance`."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"  -h, --help"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Print help (see a summary with '-h')"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Metrics:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --metrics <SOCKET>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable Prometheus metrics."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The metrics will be served at the given interface and port."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Datadir:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --datadir <DATA_DIR>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The path to the data dir for all reth files and subdirectories."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Defaults to the OS-specific data directory:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - Linux: `$XDG_DATA_HOME/reth/` or `$HOME/.local/share/reth/`"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - Windows: `{FOLDERID_RoamingAppData}/reth/`"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - macOS: `$HOME/Library/Application Support/reth/`"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: default]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --datadir.static-files <PATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The absolute path to store static files in."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Networking:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"  -d, --disable-discovery"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Disable the discovery service"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --disable-dns-discovery"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Disable the DNS discovery"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --disable-discv4-discovery"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Disable Discv4 discovery"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --enable-discv5-discovery"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable Discv5 discovery"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --disable-nat"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Disable Nat discovery"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --discovery.addr <DISCOVERY_ADDR>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The UDP address to use for devp2p peer discovery version 4"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 0.0.0.0]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --discovery.port <DISCOVERY_PORT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The UDP port to use for devp2p peer discovery version 4"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 30303]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --discovery.v5.addr <DISCOVERY_V5_ADDR>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The UDP IPv4 address to use for devp2p peer discovery version 5. Overwritten by `RLPx` address, if it's also IPv4"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --discovery.v5.addr.ipv6 <DISCOVERY_V5_ADDR_IPV6>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The UDP IPv6 address to use for devp2p peer discovery version 5. Overwritten by `RLPx` address, if it's also IPv6"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --discovery.v5.port <DISCOVERY_V5_PORT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The UDP IPv4 port to use for devp2p peer discovery version 5. Not used unless `--addr` is IPv4, or `--discovery.v5.addr` is set"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 9200]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --discovery.v5.port.ipv6 <DISCOVERY_V5_PORT_IPV6>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The UDP IPv6 port to use for devp2p peer discovery version 5. Not used unless `--addr` is IPv6, or `--discovery.addr.ipv6` is set"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 9200]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --discovery.v5.lookup-interval <DISCOVERY_V5_LOOKUP_INTERVAL>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The interval in seconds at which to carry out periodic lookup queries, for the whole run of the program"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 20]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --discovery.v5.bootstrap.lookup-interval <DISCOVERY_V5_BOOTSTRAP_LOOKUP_INTERVAL>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The interval in seconds at which to carry out boost lookup queries, for a fixed number of times, at bootstrap"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 5]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --discovery.v5.bootstrap.lookup-countdown <DISCOVERY_V5_BOOTSTRAP_LOOKUP_COUNTDOWN>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The number of times to carry out boost lookup queries at bootstrap"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 200]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --trusted-peers <TRUSTED_PEERS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Comma separated enode URLs of trusted peers for P2P connections."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          --trusted-peers enode://abcd@192.168.0.1:30303"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --trusted-only"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Connect to or accept from trusted peers only"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --bootnodes <BOOTNODES>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Comma separated enode URLs for P2P discovery bootstrap."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Will fall back to a network-specific default if not specified."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --dns-retries <DNS_RETRIES>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Amount of DNS resolution requests retries to perform when peering"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 0]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --peers-file <FILE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The path to the known peers file. Connected peers are dumped to this file on nodes"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          shutdown, and read on startup. Cannot be used with `--no-persist-peers`."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --identity <IDENTITY>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Custom node identity"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: reth/<VERSION>-<SHA>/<ARCH>]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --p2p-secret-key <PATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Secret key to use for this node."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          This will also deterministically set the peer ID. If not specified, it will be set in the data dir for the chain being used."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --no-persist-peers"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Do not persist peers."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --nat <NAT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          NAT resolution method (any|none|upnp|publicip|extip:\\<IP\\>)"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: any]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --addr <ADDR>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Network listening address"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 0.0.0.0]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --port <PORT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Network listening port"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 30303]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --max-outbound-peers <MAX_OUTBOUND_PEERS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of outbound requests. default: 100"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --max-inbound-peers <MAX_INBOUND_PEERS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of inbound requests. default: 30"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --max-tx-reqs <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max concurrent `GetPooledTransactions` requests."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 130]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --max-tx-reqs-peer <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max concurrent `GetPooledTransactions` requests per peer."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 1]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --max-seen-tx-history <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of seen transactions to remember per peer."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Default is 320 transaction hashes."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 320]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --max-pending-imports <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of transactions to import concurrently."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 4096]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --pooled-tx-response-soft-limit <BYTES>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Experimental, for usage in research. Sets the max accumulated byte size of transactions"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          to pack in one response."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Spec'd at 2MiB."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 2097152]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --pooled-tx-pack-soft-limit <BYTES>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Experimental, for usage in research. Sets the max accumulated byte size of transactions to"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          request in one request."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Since `RLPx` protocol version 68, the byte size of a transaction is shared as metadata in a"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          transaction announcement (see `RLPx` specs). This allows a node to request a specific size"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          response."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          By default, nodes request only 128 KiB worth of transactions, but should a peer request"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          more, up to 2 MiB, a node will answer with more than 128 KiB."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Default is 128 KiB."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 131072]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --max-tx-pending-fetch <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max capacity of cache of hashes for transactions pending fetch."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 25600]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --net-if.experimental <IF_NAME>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Name of network interface used to communicate with peers."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          If flag is set, but no value is passed, the default interface for docker `eth0` is tried."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --tx-propagation-policy <TX_PROPAGATION_POLICY>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Transaction Propagation Policy"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The policy determines which peers transactions are gossiped to."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: All]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"RPC:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --http"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable the HTTP-RPC server"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --http.addr <HTTP_ADDR>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Http server address to listen on"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 127.0.0.1]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --http.port <HTTP_PORT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Http server port to listen on"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 8545]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --http.disable-compression"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Disable compression for HTTP responses"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --http.api <HTTP_API>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Rpc Modules to be configured for the HTTP server"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [possible values: admin, debug, eth, net, trace, txpool, web3, rpc, reth, ots, flashbots, miner, mev]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --http.corsdomain <HTTP_CORSDOMAIN>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Http Corsdomain to allow request from"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ws"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable the WS-RPC server"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ws.addr <WS_ADDR>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Ws server address to listen on"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 127.0.0.1]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ws.port <WS_PORT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Ws server port to listen on"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 8546]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ws.origins <ws.origins>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Origins from which to accept `WebSocket` requests"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ws.api <WS_API>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Rpc Modules to be configured for the WS server"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [possible values: admin, debug, eth, net, trace, txpool, web3, rpc, reth, ots, flashbots, miner, mev]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ipcdisable"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Disable the IPC-RPC server"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ipcpath <IPCPATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Filename for IPC socket/pipe within the datadir"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: <CACHE_DIR>.ipc]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --authrpc.addr <AUTH_ADDR>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Auth server address to listen on"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 127.0.0.1]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --authrpc.port <AUTH_PORT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Auth server port to listen on"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 8551]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --authrpc.jwtsecret <PATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Path to a JWT secret to use for the authenticated engine-API RPC server."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          This will enforce JWT authentication for all requests coming from the consensus layer."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          If no path is provided, a secret will be generated and stored in the datadir under `<DIR>/<CHAIN_ID>/jwt.hex`. For mainnet this would be `~/.reth/mainnet/jwt.hex` by default."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --auth-ipc"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable auth engine API over IPC"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --auth-ipc.path <AUTH_IPC_PATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Filename for auth IPC socket/pipe within the datadir"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: <CACHE_DIR>_engine_api.ipc]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.jwtsecret <HEX>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Hex encoded JWT secret to authenticate the regular RPC server(s), see `--http.api` and `--ws.api`."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          This is __not__ used for the authenticated engine-API RPC server, see `--authrpc.jwtsecret`."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.max-request-size <RPC_MAX_REQUEST_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Set the maximum RPC request payload size for both HTTP and WS in megabytes"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 15]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.max-response-size <RPC_MAX_RESPONSE_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Set the maximum RPC response payload size for both HTTP and WS in megabytes"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 160]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [aliases: --rpc.returndata.limit]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.max-subscriptions-per-connection <RPC_MAX_SUBSCRIPTIONS_PER_CONNECTION>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Set the maximum concurrent subscriptions per connection"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 1024]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.max-connections <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of RPC server connections"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 500]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.max-tracing-requests <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of concurrent tracing requests."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          By default this chooses a sensible value based on the number of available cores. Tracing requests are generally CPU bound. Choosing a value that is higher than the available CPU cores can have a negative impact on the performance of the node and affect the node's ability to maintain sync."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: <NUM CPU CORES-2>]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.max-trace-filter-blocks <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of blocks for `trace_filter` requests"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 100]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.max-blocks-per-filter <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of blocks that could be scanned per filter request. (0 = entire chain)"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 100000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.max-logs-per-response <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of logs that can be returned in a single response. (0 = no limit)"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 20000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.gascap <GAS_CAP>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum gas limit for `eth_call` and call tracing RPC methods"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 50000000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.txfeecap <TX_FEE_CAP>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum eth transaction fee (in ether) that can be sent via the RPC APIs (0 = no cap)"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 1.0]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.max-simulate-blocks <BLOCKS_COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of blocks for `eth_simulateV1` call"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 256]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.eth-proof-window <RPC_ETH_PROOF_WINDOW>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The maximum proof window for historical proof generation. This value allows for generating historical proofs up to configured number of blocks from current tip (up to `tip - window`)"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 0]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc.proof-permits <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of concurrent getproof requests"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 25]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --builder.disallow <PATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Path to file containing disallowed addresses, json-encoded list of strings. Block validation API will reject blocks containing transactions from these addresses"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"RPC State Cache:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc-cache.max-blocks <MAX_BLOCKS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of blocks in cache"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 5000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc-cache.max-receipts <MAX_RECEIPTS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number receipts in cache"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 2000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc-cache.max-headers <MAX_HEADERS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of headers in cache"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 1000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --rpc-cache.max-concurrent-db-requests <MAX_CONCURRENT_DB_REQUESTS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of concurrent database requests"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 512]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Gas Price Oracle:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --gpo.blocks <BLOCKS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Number of recent blocks to check for gas price"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 20]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --gpo.ignoreprice <IGNORE_PRICE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Gas Price below which gpo will ignore transactions"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 2]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --gpo.maxprice <MAX_PRICE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum transaction priority fee(or gasprice before London Fork) to be recommended by gpo"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 500000000000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --gpo.percentile <PERCENTILE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The percentile of gas prices to use for the estimate"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 60]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"TxPool:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.pending-max-count <PENDING_MAX_COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of transaction in the pending sub-pool"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 10000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.pending-max-size <PENDING_MAX_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max size of the pending sub-pool in megabytes"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 20]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.basefee-max-count <BASEFEE_MAX_COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of transaction in the basefee sub-pool"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 10000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.basefee-max-size <BASEFEE_MAX_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max size of the basefee sub-pool in megabytes"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 20]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.queued-max-count <QUEUED_MAX_COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of transaction in the queued sub-pool"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 10000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.queued-max-size <QUEUED_MAX_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max size of the queued sub-pool in megabytes"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 20]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.blobpool-max-count <BLOBPOOL_MAX_COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of transaction in the blobpool"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 10000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.blobpool-max-size <BLOBPOOL_MAX_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max size of the blobpool in megabytes"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 20]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.blob-cache-size <BLOB_CACHE_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of entries for the in memory cache of the blob store"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.max-account-slots <MAX_ACCOUNT_SLOTS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max number of executable transaction slots guaranteed per account"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 16]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.pricebump <PRICE_BUMP>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Price bump (in %) for the transaction pool underpriced check"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 10]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.minimal-protocol-fee <MINIMAL_PROTOCOL_BASEFEE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Minimum base fee required by the protocol"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 7]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.gas-limit <ENFORCED_GAS_LIMIT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The default enforced gas limit for transactions entering the pool"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 30000000]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --blobpool.pricebump <BLOB_TRANSACTION_PRICE_BUMP>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Price bump percentage to replace an already existing blob transaction"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 100]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.max-tx-input-bytes <MAX_TX_INPUT_BYTES>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Max size in bytes of a single transaction allowed to enter the pool"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 131072]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.max-cached-entries <MAX_CACHED_ENTRIES>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The maximum number of blobs to keep in the in memory blob cache"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 100]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.nolocals"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Flag to disable local transaction exemptions"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.locals <LOCALS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Flag to allow certain addresses as local"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.no-local-transactions-propagation"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Flag to toggle local transaction propagation"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.additional-validation-tasks <ADDITIONAL_VALIDATION_TASKS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Number of additional transaction validation tasks to spawn"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 1]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.max-pending-txns <PENDING_TX_LISTENER_BUFFER_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of pending transactions from the network to buffer"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 2048]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.max-new-txns <NEW_TX_LISTENER_BUFFER_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of new transactions to buffer"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 1024]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.max-new-pending-txs-notifications <MAX_NEW_PENDING_TXS_NOTIFICATIONS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          How many new pending transactions to buffer and send to in progress pending transaction iterators"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 200]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.lifetime <DURATION>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum amount of time non-executable transaction are queued"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 10800]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.transactions-backup <PATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Path to store the local transaction backup at, to survive node restarts"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --txpool.disable-transactions-backup"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Disables transaction backup to disk on node shutdown"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Builder:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --builder.extradata <EXTRA_DATA>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Block extra data set by the payload builder"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: reth/<VERSION>/<OS>]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --builder.gaslimit <GAS_LIMIT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Target gas limit for built blocks"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --builder.interval <DURATION>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The interval at which the job should build a new payload after the last."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Interval is specified in seconds or in milliseconds if the value ends with `ms`: * `50ms` -> 50 milliseconds * `1` -> 1 second"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 1]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --builder.deadline <SECONDS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The deadline for when the payload builder job should resolve"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 12]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --builder.max-tasks <MAX_PAYLOAD_TASKS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum number of tasks to spawn for building a payload"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 3]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Debug:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.terminate"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Flag indicating whether the node should be terminated after the pipeline sync"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.tip <TIP>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Set the chain tip manually for testing purposes."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          NOTE: This is a temporary flag"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.max-block <MAX_BLOCK>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Runs the sync only up to the specified block"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.etherscan [<ETHERSCAN_API_URL>]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Runs a fake consensus client that advances the chain using recent block hashes on Etherscan. If specified, requires an `ETHERSCAN_API_KEY` environment variable"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.rpc-consensus-ws <RPC_CONSENSUS_WS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Runs a fake consensus client using blocks fetched from an RPC `WebSocket` endpoint"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.skip-fcu <SKIP_FCU>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          If provided, the engine will skip `n` consecutive FCUs"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.skip-new-payload <SKIP_NEW_PAYLOAD>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          If provided, the engine will skip `n` consecutive new payloads"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.reorg-frequency <REORG_FREQUENCY>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          If provided, the chain will be reorged at specified frequency"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.reorg-depth <REORG_DEPTH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The reorg depth for chain reorgs"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.engine-api-store <PATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The path to store engine API messages at. If specified, all of the intercepted engine API messages will be written to specified location"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.invalid-block-hook <INVALID_BLOCK_HOOK>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Determines which type of invalid block hook to install"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Example: `witness,prestate`"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: witness]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [possible values: witness, pre-state, opcode]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --debug.healthy-node-rpc-url <URL>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The RPC URL of a healthy node to use for comparing invalid block hook results against."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Database:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --db.log-level <LOG_LEVEL>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'          Database logging level. Levels higher than "notice" require a debug build'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Possible values:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - fatal:   Enables logging for critical conditions, i.e. assertion failures"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - error:   Enables logging for error conditions"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - warn:    Enables logging for warning conditions"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - notice:  Enables logging for normal but significant condition"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - verbose: Enables logging for verbose informational"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - debug:   Enables logging for debug-level messages"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - trace:   Enables logging for trace debug-level messages"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - extra:   Enables logging for extra debug-level messages"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --db.exclusive <EXCLUSIVE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Open environment in exclusive/monopolistic mode. Makes it possible to open a database on an NFS volume"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [possible values: true, false]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --db.max-size <MAX_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Maximum database size (e.g., 4TB, 8MB)"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --db.growth-step <GROWTH_STEP>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Database growth step (e.g., 4GB, 4KB)"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --db.read-transaction-timeout <READ_TRANSACTION_TIMEOUT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Read transaction timeout in seconds, 0 means no timeout"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Dev testnet:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --dev"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Start the node in dev mode"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          This mode uses a local proof-of-authority consensus engine with either fixed block times"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          or automatically mined blocks."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Disables network discovery and enables local http server."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'          Prefunds 20 accounts derived by mnemonic "test test test test test test test test test test'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:'          test junk" with 10 000 ETH each.'})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --dev.block-max-transactions <BLOCK_MAX_TRANSACTIONS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          How many transactions to mine per block"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --dev.block-time <BLOCK_TIME>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Interval between blocks."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Parses strings using [`humantime::parse_duration`]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          --dev.block-time 12s"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Pruning:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --full"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Run full node. Only the most recent [`MINIMUM_PRUNING_DISTANCE`] block states are stored"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --block-interval <BLOCK_INTERVAL>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Minimum pruning interval measured in blocks"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.senderrecovery.full"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prunes all sender recovery data"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.senderrecovery.distance <BLOCKS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune sender recovery data before the `head-N` block number. In other words, keep last N + 1 blocks"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.senderrecovery.before <BLOCK_NUMBER>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune sender recovery data before the specified block number. The specified block number is not pruned"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.transactionlookup.full"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prunes all transaction lookup data"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.transactionlookup.distance <BLOCKS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune transaction lookup data before the `head-N` block number. In other words, keep last N + 1 blocks"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.transactionlookup.before <BLOCK_NUMBER>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune transaction lookup data before the specified block number. The specified block number is not pruned"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.receipts.full"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prunes all receipt data"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.receipts.distance <BLOCKS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune receipts before the `head-N` block number. In other words, keep last N + 1 blocks"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.receipts.before <BLOCK_NUMBER>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune receipts before the specified block number. The specified block number is not pruned"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.receiptslogfilter <FILTER_CONFIG>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Configure receipts log filter. Format: <`address`>:<`prune_mode`>[,<`address`>:<`prune_mode`>...] Where <`prune_mode`> can be 'full', 'distance:<`blocks`>', or 'before:<`block_number`>'"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.accounthistory.full"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prunes all account history"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.accounthistory.distance <BLOCKS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune account before the `head-N` block number. In other words, keep last N + 1 blocks"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.accounthistory.before <BLOCK_NUMBER>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune account history before the specified block number. The specified block number is not pruned"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.storagehistory.full"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prunes all storage history data"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.storagehistory.distance <BLOCKS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune storage history before the `head-N` block number. In other words, keep last N + 1 blocks"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --prune.storagehistory.before <BLOCK_NUMBER>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Prune storage history before the specified block number. The specified block number is not pruned"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Engine:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.persistence-threshold <PERSISTENCE_THRESHOLD>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Configure persistence threshold for engine experimental"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 2]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.memory-block-buffer-target <MEMORY_BLOCK_BUFFER_TARGET>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Configure the target number of blocks to keep in memory"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 2]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.legacy-state-root"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable legacy state root"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.caching-and-prewarming"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          CAUTION: This CLI flag has no effect anymore, use --engine.disable-caching-and-prewarming if you want to disable caching and prewarming"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.disable-caching-and-prewarming"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Disable cross-block caching and parallel prewarming"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.state-provider-metrics"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable state provider latency metrics. This allows the engine to collect and report stats about how long state provider calls took during execution, but this does introduce slight overhead to state provider calls"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.cross-block-cache-size <CROSS_BLOCK_CACHE_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Configure the size of cross-block cache in megabytes"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 4096]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.state-root-task-compare-updates"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable comparing trie updates from the state root task to the trie updates from the regular state root calculation"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.accept-execution-requests-hash"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enables accepting requests hash instead of an array of requests in `engine_newPayloadV4`"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.max-proof-task-concurrency <MAX_PROOF_TASK_CONCURRENCY>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Configure the maximum number of concurrent proof tasks"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 256]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.reserved-cpu-cores <RESERVED_CPU_CORES>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Configure the number of reserved CPU cores for non-reth processes"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 1]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.precompile-cache"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable precompile cache"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --engine.state-root-fallback"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable state root fallback, useful for testing"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Ress:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ress.enable"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Enable support for `ress` subprotocol"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ress.max-active-connections <MAX_ACTIVE_CONNECTIONS>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The maximum number of active connections for `ress` subprotocol"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 5]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ress.max-witness-window <MAX_WITNESS_WINDOW>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The maximum witness lookback window"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 1024]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ress.witness-max-parallel <WITNESS_MAX_PARALLEL>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The maximum number of witnesses to generate in parallel"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 5]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --ress.witness-cache-size <WITNESS_CACHE_SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Witness cache size"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 10]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Logging:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --log.stdout.format <FORMAT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The format to use for logs written to stdout"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: terminal]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Possible values:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - json:     Represents JSON formatting for logs. This format outputs log records as JSON objects, making it suitable for structured logging"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - log-fmt:  Represents logfmt (key=value) formatting for logs. This format is concise and human-readable, typically used in command-line applications"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - terminal: Represents terminal-friendly formatting for logs"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --log.stdout.filter <FILTER>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The filter to use for logs written to stdout"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: ]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --log.file.format <FORMAT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The format to use for logs written to the log file"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: terminal]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Possible values:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - json:     Represents JSON formatting for logs. This format outputs log records as JSON objects, making it suitable for structured logging"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - log-fmt:  Represents logfmt (key=value) formatting for logs. This format is concise and human-readable, typically used in command-line applications"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - terminal: Represents terminal-friendly formatting for logs"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --log.file.filter <FILTER>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The filter to use for logs written to the log file"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: debug]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --log.file.directory <PATH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The path to put log files in"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: <CACHE_DIR>/logs]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --log.file.max-size <SIZE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The maximum size (in MB) of one log file"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 200]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --log.file.max-files <COUNT>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The maximum amount of log files that will be stored. If set to 0, background file logging is disabled"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 5]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --log.journald"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Write logs to journald"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --log.journald.filter <FILTER>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The filter to use for logs written to journald"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: error]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --color <COLOR>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Sets whether or not the formatter emits ANSI terminal escape codes for colors and other text formatting"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: always]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Possible values:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - always: Colors on"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - auto:   Colors on"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          - never:  Colors off"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Display:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"  -v, --verbosity..."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Set the minimum log level."})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          -v      Errors"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          -vv     Warnings"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          -vvv    Info"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          -vvvv   Debug"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          -vvvvv  Traces (warning: very verbose!)"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"  -q, --quiet"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Silence all log output"})})]})})})]})}function r(e={}){const{wrapper:n}={...l(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(a,{...e})}):a(e)}export{r as default,c as frontmatter};
