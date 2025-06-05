import{f as t,j as e}from"./index-xNsX7Ar1.js";const r={description:"Overview of Ethereum transaction types in Reth.",title:"Transaction types"};function i(s){const n={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"transaction-types",children:["Transaction types",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transaction-types",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"Over time, the Ethereum network has undergone various upgrades and improvements to enhance transaction efficiency, security, and user experience. Four significant transaction types that have evolved are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Legacy Transactions,"}),`
`,e.jsx(n.li,{children:"EIP-2930 Transactions,"}),`
`,e.jsx(n.li,{children:"EIP-1559 Transactions,"}),`
`,e.jsx(n.li,{children:"EIP-4844 Transactions"}),`
`]}),`
`,e.jsx(n.p,{children:"Each of these transaction types brings unique features and improvements to the Ethereum network."}),`
`,e.jsxs(n.h2,{id:"legacy-transactions",children:["Legacy Transactions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#legacy-transactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Legacy Transactions (type ",e.jsx(n.code,{children:"0x0"}),"), the traditional Ethereum transactions in use since the network's inception, include the following parameters:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nonce"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gasPrice"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gasLimit"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"to"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"v"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"r"}),","]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"s"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"These transactions do not utilize access lists, which specify the addresses and storage keys to be accessed, nor do they incorporate EIP-1559 fee market changes."}),`
`,e.jsxs(n.h2,{id:"eip-2930-transactions",children:["EIP-2930 Transactions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eip-2930-transactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Introduced in ",e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-2930",children:"EIP-2930"}),", transactions with type ",e.jsx(n.code,{children:"0x1"})," incorporate an ",e.jsx(n.code,{children:"accessList"})," parameter alongside legacy parameters. This ",e.jsx(n.code,{children:"accessList"})," specifies an array of addresses and storage keys that the transaction plans to access, enabling gas savings on cross-contract calls by pre-declaring the accessed contract and storage slots. They do not include EIP-1559 fee market changes."]}),`
`,e.jsxs(n.h2,{id:"eip-1559-transactions",children:["EIP-1559 Transactions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eip-1559-transactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1559",children:"EIP-1559"})," transactions (type ",e.jsx(n.code,{children:"0x2"}),") were introduced in Ethereum's London fork to address network congestion and transaction fee overpricing caused by the historical fee market. Unlike traditional transactions, EIP-1559 transactions don't specify a gas price (",e.jsx(n.code,{children:"gasPrice"}),"). Instead, they use an in-protocol, dynamically changing base fee per gas, adjusted at each block to manage network congestion."]}),`
`,e.jsxs(n.p,{children:["Alongside the ",e.jsx(n.code,{children:"accessList"})," parameter and legacy parameters (except ",e.jsx(n.code,{children:"gasPrice"}),"), EIP-1559 transactions include:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxPriorityFeePerGas"}),", specifying the maximum fee above the base fee the sender is willing to pay,"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"maxFeePerGas"}),", setting the maximum total fee the sender is willing to pay."]}),`
`]}),`
`,e.jsx(n.p,{children:"The base fee is burned, while the priority fee is paid to the miner who includes the transaction, incentivizing miners to include transactions with higher priority fees per gas."}),`
`,e.jsxs(n.h2,{id:"eip-4844-transactions",children:["EIP-4844 Transactions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eip-4844-transactions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4844",children:"EIP-4844"})," transactions (type ",e.jsx(n.code,{children:"0x3"}),") was introduced in Ethereum's Dencun fork. This provides a temporary but significant scaling relief for rollups by allowing them to initially scale to 0.375 MB per slot, with a separate fee market allowing fees to be very low while usage of this system is limited."]}),`
`,e.jsx(n.p,{children:"Alongside the legacy parameters & parameters from EIP-1559, the EIP-4844 transactions include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"max_fee_per_blob_gas"}),", The maximum total fee per gas the sender is willing to pay for blob gas in wei"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"blob_versioned_hashes"}),", List of versioned blob hashes associated with the transaction's EIP-4844 data blobs."]}),`
`]}),`
`,e.jsx(n.p,{children:"The actual blob fee is deducted from the sender balance before transaction execution and burned, and is not refunded in case of transaction failure."})]})}function c(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default,r as frontmatter};
