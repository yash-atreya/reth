import{f as s,j as e}from"./index-xNsX7Ar1.js";const h={description:"How Execution Extensions (ExExes) work in Reth.",title:"How do ExExes work?"};function i(t){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"how-do-exexes-work",children:["How do ExExes work?",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-do-exexes-work",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.p,{children:["ExExes are just ",e.jsx(n.a,{href:"https://doc.rust-lang.org/std/future/trait.Future.html",children:"Futures"}),` that run indefinitely alongside Reth
– as simple as that.`]}),`
`,e.jsx(n.p,{children:"An ExEx is usually driven by and acts on new notifications about chain commits, reverts, and reorgs, but it can span beyond that."}),`
`,e.jsxs(n.p,{children:["They are installed into the node by using the ",e.jsx(n.a,{href:"https://reth.rs/docs/reth/builder/struct.NodeBuilder.html",children:"node builder"}),`.
Reth manages the lifecycle of all ExExes, including:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Polling ExEx futures"}),`
`,e.jsxs(n.li,{children:["Sending ",e.jsx(n.a,{href:"https://reth.rs/docs/reth_exex/enum.ExExNotification.html",children:"notifications"}),` about new chain, reverts,
and reorgs from historical and live sync`]}),`
`,e.jsxs(n.li,{children:["Processing ",e.jsx(n.a,{href:"https://reth.rs/docs/reth_exex/enum.ExExEvent.html",children:"events"})," emitted by ExExes"]}),`
`,e.jsx(n.li,{children:"Pruning (in case of a full or pruned node) only the data that has been processed by all ExExes"}),`
`,e.jsx(n.li,{children:"Shutting ExExes down when the node is shut down"}),`
`]}),`
`,e.jsxs(n.h2,{id:"pruning",children:["Pruning",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pruning",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Pruning deserves a special mention here."}),`
`,e.jsxs(n.p,{children:["ExExes ",e.jsx(n.strong,{children:"SHOULD"})," emit an ",e.jsx(n.a,{href:"https://reth.rs/docs/reth_exex/enum.ExExEvent.html#variant.FinishedHeight",children:e.jsx(n.code,{children:"ExExEvent::FinishedHeight"})}),`
event to signify what blocks have been processed. This event is used by Reth to determine what state can be pruned.`]}),`
`,e.jsxs(n.p,{children:["An ExEx will only receive notifications for block numbers greater than the block in the most recently emitted ",e.jsx(n.code,{children:"FinishedHeight"})," event."]}),`
`,e.jsxs(n.p,{children:["To clarify: if an ExEx emits ",e.jsx(n.code,{children:"ExExEvent::FinishedHeight"})," for ",e.jsx(n.code,{children:"block #0"})," it will receive notifications for any ",e.jsx(n.code,{children:"block_number > 0"}),"."]})]})}function o(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{o as default,h as frontmatter};
