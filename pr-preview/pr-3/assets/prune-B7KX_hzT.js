import{f as l,j as s}from"./index-xNsX7Ar1.js";const c={title:"reth prune",description:"undefined"};function a(e){const n={a:"a",code:"code",div:"div",h1:"h1",header:"header",p:"p",pre:"pre",span:"span",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.header,{children:s.jsxs(n.h1,{id:"reth-prune",children:["reth prune",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reth-prune",children:s.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,s.jsx(n.p,{children:"Prune according to the configuration without any limits"}),`
`,s.jsx(s.Fragment,{children:s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(n.code,{children:s.jsxs(n.span,{className:"line",children:[s.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"$"}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" reth"}),s.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" prune"}),s.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --help"})]})})})}),`
`,s.jsx(s.Fragment,{children:s.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(n.code,{children:[s.jsx(n.span,{className:"line",children:s.jsx(n.span,{children:"Usage: reth prune [OPTIONS]"})}),`
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
