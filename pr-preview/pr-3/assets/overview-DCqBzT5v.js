import{f as o,j as e}from"./index-xNsX7Ar1.js";const r={description:"Introduction to Execution Extensions (ExEx) in Reth.",title:"Execution Extensions (ExEx)"};function i(t){const n={a:"a",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"execution-extensions-exex",children:["Execution Extensions (ExEx)",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execution-extensions-exex",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"what-are-execution-extensions",children:["What are Execution Extensions?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-are-execution-extensions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[`Execution Extensions (or ExExes, for short) allow developers to build their own infrastructure that relies on Reth
as a base for driving the chain (be it `,e.jsx(n.a,{href:"/home/runner/work/reth/reth/book/vocs/docs/pages/run/mainnet",children:"Ethereum"})," or ",e.jsx(n.a,{href:"/home/runner/work/reth/reth/book/vocs/docs/pages/run/optimism",children:"OP Stack"}),") forward."]}),`
`,e.jsx(n.p,{children:`An Execution Extension is a task that derives its state from changes in Reth's state.
Some examples of such state derivations are rollups, bridges, and indexers.`}),`
`,e.jsx(n.p,{children:`They are called Execution Extensions because the main trigger for them is the execution of new blocks (or reorgs of old blocks)
initiated by Reth.`}),`
`,e.jsxs(n.p,{children:["Read more about things you can build with Execution Extensions in the ",e.jsx(n.a,{href:"https://www.paradigm.xyz/2024/05/reth-exex",children:"Paradigm blog"}),"."]}),`
`,e.jsxs(n.h2,{id:"what-execution-extensions-are-not",children:["What Execution Extensions are not",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-execution-extensions-are-not",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`Execution Extensions are not separate processes that connect to the main Reth node process.
Instead, ExExes are compiled into the same binary as Reth, and run alongside it, using shared memory for communication.`}),`
`,e.jsxs(n.p,{children:["If you want to build an Execution Extension that sends data into a separate process, check out the ",e.jsx(n.a,{href:"/remote",children:"Remote"})," chapter."]}),`
`,e.jsxs(n.h2,{id:"how-do-i-build-an-execution-extension",children:["How do I build an Execution Extension?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-do-i-build-an-execution-extension",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`Let's dive into how to build our own ExEx from scratch, add tests for it,
and run it on the Holesky testnet.`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/how-it-works",children:"How do ExExes work?"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/hello-world",children:"Hello World"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/tracking-state",children:"Tracking State"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"/remote",children:"Remote"})}),`
`]})]})}function a(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{a as default,r as frontmatter};
