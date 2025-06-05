import{f as r,j as e}from"./index-xNsX7Ar1.js";const o={description:"Ports used by Reth.",title:"Ports"};function t(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"ports",children:["Ports",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ports",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"This section provides essential information about the ports used by the system, their primary purposes, and recommendations for exposure settings."}),`
`,e.jsxs(n.h2,{id:"peering-ports",children:["Peering Ports",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#peering-ports",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Port:"})," ",e.jsx(n.code,{children:"30303"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Protocol:"})," TCP and UDP"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Purpose:"})," Peering with other nodes for synchronization of blockchain data. Nodes communicate through this port to maintain network consensus and share updated information."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exposure Recommendation:"})," This port should be exposed to enable seamless interaction and synchronization with other nodes in the network."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"metrics-port",children:["Metrics Port",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#metrics-port",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Port:"})," ",e.jsx(n.code,{children:"9001"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Protocol:"})," TCP"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Purpose:"})," This port is designated for serving metrics related to the system's performance and operation. It allows internal monitoring and data collection for analysis."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exposure Recommendation:"})," By default, this port should not be exposed to the public. It is intended for internal monitoring and analysis purposes."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"http-rpc-port",children:["HTTP RPC Port",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#http-rpc-port",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Port:"})," ",e.jsx(n.code,{children:"8545"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Protocol:"})," TCP"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Purpose:"})," Port 8545 provides an HTTP-based Remote Procedure Call (RPC) interface. It enables external applications to interact with the blockchain by sending requests over HTTP."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exposure Recommendation:"})," Similar to the metrics port, exposing this port to the public is not recommended by default due to security considerations."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"ws-rpc-port",children:["WS RPC Port",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ws-rpc-port",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Port:"})," ",e.jsx(n.code,{children:"8546"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Protocol:"})," TCP"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Purpose:"})," Port 8546 offers a WebSocket-based Remote Procedure Call (RPC) interface. It allows real-time communication between external applications and the blockchain."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exposure Recommendation:"})," As with the HTTP RPC port, the WS RPC port should not be exposed by default for security reasons."]}),`
`]}),`
`,e.jsxs(n.h2,{id:"engine-api-port",children:["Engine API Port",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#engine-api-port",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Port:"})," ",e.jsx(n.code,{children:"8551"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Protocol:"})," TCP"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Purpose:"}),' Port 8551 facilitates communication between specific components, such as "reth" and "CL" (assuming their definitions are understood within the context of the system). It enables essential internal processes.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exposure Recommendation:"})," This port is not meant to be exposed to the public by default. It should be reserved for internal communication between vital components of the system."]}),`
`]})]})}function d(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{d as default,o as frontmatter};
