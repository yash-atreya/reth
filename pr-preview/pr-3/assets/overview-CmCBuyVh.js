import{f as s,j as e}from"./index-xNsX7Ar1.js";const a={title:"Reth",description:"Documentation for Reth users and developers"};function i(n){const t={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.header,{children:[e.jsxs(t.h1,{id:"reth",children:["Reth",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#reth",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),e.jsx(t.div,{role:"doc-subtitle",children:"Documentation for Reth users and developers"})]}),`
`,e.jsxs(t.p,{children:["Reth (short for Rust Ethereum, ",e.jsx(t.a,{href:"https://twitter.com/kelvinfichter/status/1597653609411268608",children:"pronunciation"}),") is an ",e.jsx(t.strong,{children:"Ethereum full node implementation that is focused on being user-friendly, highly modular, as well as being fast and efficient."})]}),`
`,e.jsx(t.p,{children:"Reth is production ready, and suitable for usage in mission-critical environments such as staking or high-uptime services. We also actively recommend professional node operators to switch to Reth in production for performance and cost reasons in use cases where high performance with great margins is required such as RPC, MEV, Indexing, Simulations, and P2P activities."}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{src:"https://raw.githubusercontent.com/paradigmxyz/reth/main/assets/reth-prod.png",alt:"Reth"})}),`
`,e.jsxs(t.h2,{id:"what-is-this-about",children:["What is this about?",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-this-about",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://github.com/paradigmxyz/reth/",children:"Reth"})," is an execution layer (EL) implementation that is compatible with all Ethereum consensus layer (CL) implementations that support the ",e.jsx(t.a,{href:"https://github.com/ethereum/execution-apis/tree/59e3a719021f48c1ef5653840e3ea5750e6af693/src/engine",children:"Engine API"}),"."]}),`
`,e.jsxs(t.p,{children:["It is originally built and driven forward by ",e.jsx(t.a,{href:"https://paradigm.xyz/",children:"Paradigm"}),", and is licensed under the Apache and MIT licenses."]}),`
`,e.jsx(t.p,{children:"As a full Ethereum node, Reth allows users to connect to the Ethereum network and interact with the Ethereum blockchain."}),`
`,e.jsx(t.p,{children:"This includes sending and receiving transactions, querying logs and traces, as well as accessing and interacting with smart contracts."}),`
`,e.jsx(t.p,{children:"Building a successful Ethereum node requires creating a high-quality implementation that is both secure and efficient, as well as being easy to use on consumer hardware. It also requires building a strong community of contributors who can help support and improve the software."}),`
`,e.jsxs(t.h2,{id:"what-are-the-goals-of-reth",children:["What are the goals of Reth?",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-are-the-goals-of-reth",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.strong,{children:"1. Modularity"}),`
`,e.jsx(t.p,{children:"Every component of Reth is built to be used as a library: well-tested, heavily documented and benchmarked. We envision that developers will import the node's crates, mix and match, and innovate on top of them."}),`
`,e.jsx(t.p,{children:`Examples of such usage include, but are not limited to, spinning up standalone P2P networks, talking directly to a node's database, or "unbundling" the node into the components you need.`}),`
`,e.jsx(t.p,{children:"To achieve that, we are licensing Reth under the Apache/MIT permissive license."}),`
`,e.jsx(t.strong,{children:"2. Performance"}),`
`,e.jsxs(t.p,{children:["Reth aims to be fast, so we used Rust and the ",e.jsx(t.a,{href:"https://erigon.substack.com/p/erigon-stage-sync-and-control-flows",children:"Erigon staged-sync"})," node architecture."]}),`
`,e.jsxs(t.p,{children:["We also use our Ethereum libraries (including ",e.jsx(t.a,{href:"https://github.com/alloy-rs/alloy/",children:"Alloy"})," and ",e.jsx(t.a,{href:"https://github.com/bluealloy/revm/",children:"revm"}),") which we’ve battle-tested and optimized via ",e.jsx(t.a,{href:"https://github.com/foundry-rs/foundry/",children:"Foundry"}),"."]}),`
`,e.jsx(t.strong,{children:"3. Free for anyone to use any way they want"}),`
`,e.jsx(t.p,{children:"Reth is free open-source software, built for the community, by the community."}),`
`,e.jsx(t.p,{children:"By licensing the software under the Apache/MIT license, we want developers to use it without being bound by business licenses, or having to think about the implications of GPL-like licenses."}),`
`,e.jsx(t.strong,{children:"4. Client Diversity"}),`
`,e.jsx(t.p,{children:"The Ethereum protocol becomes more antifragile when no node implementation dominates. This ensures that if there's a software bug, the network does not finalize a bad block. By building a new client, we hope to contribute to Ethereum's antifragility."}),`
`,e.jsx(t.strong,{children:"5. Used by a wide demographic"}),`
`,e.jsx(t.p,{children:"We want to solve for node operators that care about fast historical queries, but also for hobbyists who cannot operate on large hardware."}),`
`,e.jsx(t.p,{children:'We also want to support teams and individuals who want both sync from genesis and via "fast sync".'}),`
`,e.jsx(t.p,{children:"We envision that Reth will be configurable enough for the tradeoffs that each team faces."}),`
`,e.jsxs(t.h2,{id:"who-is-this-for",children:["Who is this for?",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#who-is-this-for",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Reth is a new Ethereum full node that allows users to sync and interact with the entire blockchain, including its historical state if in archive mode."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Full node: It can be used as a full node, which stores and processes the entire blockchain, validates blocks and transactions, and participates in the consensus process."}),`
`,e.jsx(t.li,{children:"Archive node: It can also be used as an archive node, which stores the entire history of the blockchain and is useful for applications that need access to historical data."}),`
`]}),`
`,e.jsx(t.p,{children:"As a data engineer/analyst, or as a data indexer, you'll want to use Archive mode. For all other use cases where historical access is not needed, you can use Full mode."}),`
`,e.jsxs(t.h2,{id:"is-this-secure",children:["Is this secure?",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#is-this-secure",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Reth implements the specification of Ethereum as defined in the ",e.jsx(t.a,{href:"https://github.com/ethereum/execution-specs/",children:"ethereum/execution-specs"})," repository. To make sure the node is built securely, we run the following tests:"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["EVM state tests are run on every ",e.jsx(t.a,{href:"https://github.com/bluealloy/revm/blob/main/.github/workflows/ethereum-tests.yml",children:"Revm Pull Request"})]}),`
`,e.jsxs(t.li,{children:["Hive tests are ",e.jsx(t.a,{href:"https://github.com/paradigmxyz/reth/blob/main/.github/workflows/hive.yml",children:"run every 24 hours"})," in the main Reth repository."]}),`
`,e.jsx(t.li,{children:"We regularly resync multiple nodes from scratch."}),`
`,e.jsx(t.li,{children:"We operate multiple nodes at the tip of the Ethereum mainnet and various testnets."}),`
`,e.jsx(t.li,{children:"We extensively unit test, fuzz test and document all our code, while also restricting PRs with aggressive lint rules."}),`
`]}),`
`,e.jsxs(t.p,{children:["We have completed an audit of the ",e.jsx(t.a,{href:"https://github.com/paradigmxyz/reth/releases/tag/v1.0.0-rc.2",children:"Reth v1.0.0-rc.2"})," with ",e.jsx(t.a,{href:"https://sigmaprime.io/",children:"Sigma Prime"}),", the developers of ",e.jsx(t.a,{href:"https://github.com/sigp/lighthouse",children:"Lighthouse"}),", the Rust Consensus Layer implementation. Find it ",e.jsx(t.a,{href:"https://github.com/paradigmxyz/reth/blob/main/audit/sigma_prime_audit_v2.pdf",children:"here"}),"."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://github.com/bluealloy/revm",children:"Revm"})," (the EVM used in Reth) underwent an audit with ",e.jsx(t.a,{href:"https://twitter.com/guidovranken",children:"Guido Vranken"})," (#1 ",e.jsx(t.a,{href:"https://ethereum.org/en/bug-bounty",children:"Ethereum Bug Bounty"}),"). We will publish the results soon."]}),`
`,e.jsxs(t.h2,{id:"sections",children:["Sections",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sections",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t.p,{children:"Here are some useful sections to jump to:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Install Reth by following the ",e.jsx(t.a,{href:"/installation/overview",children:"guide"}),"."]}),`
`,e.jsxs(t.li,{children:["Sync your node on any ",e.jsx(t.a,{href:"/run/run-a-node",children:"official network"}),"."]}),`
`,e.jsxs(t.li,{children:["View ",e.jsx(t.a,{href:"/run/observability",children:"statistics and metrics"})," about your node."]}),`
`,e.jsxs(t.li,{children:["Query the ",e.jsx(t.a,{href:"/jsonrpc/intro",children:"JSON-RPC"})," using Foundry's ",e.jsx(t.code,{children:"cast"})," or ",e.jsx(t.code,{children:"curl"}),"."]}),`
`,e.jsxs(t.li,{children:["Set up your ",e.jsx(t.a,{href:"/developers/contribute",children:"development environment and contribute"}),"!"]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["📖 ",e.jsx(t.strong,{children:"About this book"})]}),`
`,e.jsxs(t.p,{children:["The book is continuously rendered ",e.jsx(t.a,{href:"https://paradigmxyz.github.io/reth/",children:"here"}),`!
You can contribute to this book on `,e.jsx(t.a,{href:"https://github.com/paradigmxyz/reth/tree/main/book",children:"GitHub"}),"."]}),`
`]})]})}function o(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{o as default,a as frontmatter};
