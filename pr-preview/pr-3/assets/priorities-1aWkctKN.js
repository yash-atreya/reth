import{f as r,j as e}from"./index-xNsX7Ar1.js";const d={description:"Explains Reth update priorities for user classes such as payload builders and non-payload builders.",title:"Update Priorities"};function s(t){const i={a:"a",div:"div",em:"em",h1:"h1",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"update-priorities",children:["Update Priorities",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#update-priorities",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:'When publishing releases, reth will include an "Update Priority" section in the release notes, in the same manner Lighthouse does.'}),`
`,e.jsx(i.p,{children:'The "Update Priority" section will include a table which may appear like so:'}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"User Class"}),e.jsx(i.th,{children:"Priority"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Payload Builders"}),e.jsx(i.td,{children:"Medium Priority"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:"Non-Payload Builders"}),e.jsx(i.td,{children:"Low Priority"})]})]})]}),`
`,e.jsx(i.p,{children:"To understand this table, the following terms are important:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"Payload builders"})," are those who use reth to build and validate payloads."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"Non-payload builders"})," are those who run reth for other purposes (e.g., data analysis, RPC or applications)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"High priority"})," updates should be completed as soon as possible (e.g., hours or days)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"Medium priority"})," updates should be completed at the next convenience (e.g., days or a week)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"Low priority"})," updates should be completed in the next routine update cycle (e.g., two weeks)."]}),`
`]})]})}function l(t={}){const{wrapper:i}={...r(),...t.components};return i?e.jsx(i,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default,d as frontmatter};
