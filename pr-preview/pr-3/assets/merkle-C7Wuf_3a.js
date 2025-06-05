import{f as l,j as s}from"./index-xNsX7Ar1.js";const c={title:"reth debug merkle",description:"undefined"};function a(e){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"reth-debug-merkle",children:["reth debug merkle",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reth-debug-merkle",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(n.p,{children:"Debug the clean & incremental state root calculations"}),`
`,s.jsx(s.Fragment,{children:s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(n.code,{children:s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"$"}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" reth"}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" debug"}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" merkle"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --help"})]})})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Usage: reth debug merkle [OPTIONS] --to <TO>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Options:"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"  -h, --help"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          Print help (see a summary with '-h')"})}),`
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
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --config <FILE>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The path to the configuration file to use"})}),`
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
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --retries <RETRIES>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The number of retries per request"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          [default: 5]"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --to <TO>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The height to finish at"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"      --skip-node-depth <SKIP_NODE_DEPTH>"})}),`
`,s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"          The depth after which we should start comparing branch nodes"})}),`
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
