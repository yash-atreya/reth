import{f as s,j as e}from"./index-xNsX7Ar1.js";const a={description:"Building and troubleshooting Reth on ARM devices.",title:"Building for ARM devices"};function r(n){const i={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.header,{children:e.jsxs(i.h1,{id:"building-for-arm-devices",children:["Building for ARM devices",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#building-for-arm-devices",children:e.jsx(i.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(i.p,{children:"Reth can be built for and run on ARM devices, but there are a few things to take into consideration before."}),`
`,e.jsxs(i.h2,{id:"cpu-architecture",children:["CPU Architecture",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cpu-architecture",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"First, you must have a 64-bit CPU and Operating System, otherwise some of the project dependencies will not be able to compile or be executed."}),`
`,e.jsxs(i.h2,{id:"memory-layout-on-aarch64",children:["Memory Layout on AArch64",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#memory-layout-on-aarch64",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[`Then, you must set up the virtual memory layout in such that the user space is sufficiently large.
From `,e.jsx(i.a,{href:"https://www.kernel.org/doc/html/v5.3/arm64/memory.html#:~:text=AArch64%20Linux%20uses%20either%203,for%20both%20user%20and%20kernel.",children:"the Linux Kernel documentation"}),", you can see that the memory layout with 4KB pages and a level-3 translation table limits the user space to 512GB, which is too low for Reth to sync on Ethereum mainnet."]}),`
`,e.jsxs(i.h2,{id:"arm-board-virtual-memory-limitation",children:["ARM Board Virtual Memory Limitation",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#arm-board-virtual-memory-limitation",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"issue-description",children:["Issue Description",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#issue-description",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:'Some ARM boards are equipped with only 3-level paging, which imposes a virtual memory limitation of 256GB for user space on Linux. This limitation can be a challenge for running applications like "reth", as the MDBX (Memory-mapped Database eXtreme) library requires a larger virtual memory allocation by design.'}),`
`,e.jsxs(i.h3,{id:"understanding-the-limitation",children:["Understanding the Limitation",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#understanding-the-limitation",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"To determine if a specific ARM board is affected by this virtual memory limitation:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Check Specifications:"})," When considering an ARM board, review its specifications for information on paging levels. Boards with 3-level paging may have a 256GB virtual memory limit."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Manufacturer Documentation:"})," Consult the official ARM board documentation for details on supported paging levels."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Community Discussions:"})," Search online ARM and Linux forums for insights into virtual memory limitations of specific boards."]}),`
`]}),`
`]}),`
`,e.jsxs(i.h3,{id:"additional-context",children:["Additional Context",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-context",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:'According to MDBX documentation, changing this upper bound, which dictates the maximum size the database can reach, is a costly operation. Therefore, a reasonably large value was chosen. Given that the upper bound is currently set to 4TB, the assumption was that growth to 3TB might occur relatively soon. If the upper bound size is set to only 342GB, then "reth" cannot store more than 342GB of data, which is insufficient for a full sync.'}),`
`,e.jsx(i.p,{children:"It's worth noting that on x86_64 architecture, there is a 48-bit address space divided in half between user space and the kernel, providing each with 128TB of address space. In contrast, AArch64 architecture features a user space address space of 512GB and a kernel address space of 256TB."}),`
`,e.jsx(i.p,{children:"Some newer versions of ARM architecture offer support for Large Virtual Address space, but enabling this requires running with a 64KB page size. The specifics of how to enable this functionality might vary."}),`
`,e.jsxs(i.h3,{id:"additional-resources",children:["Additional Resources",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-resources",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://developer.arm.com/documentation/ddi0406/cb/Appendixes/ARMv4-and-ARMv5-Differences/System-level-memory-model/Virtual-memory-support",children:"ARM developer documentation"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://community.arm.com",children:"ARM Community Forums"})}),`
`]}),`
`,e.jsxs(i.h2,{id:"build-reth",children:["Build Reth",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#build-reth",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["If both your CPU architecture and the memory layout are valid, the instructions for building Reth will not differ from ",e.jsx(i.a,{href:"https://paradigmxyz.github.io/reth/installation/source.html",children:"the standard process"}),"."]}),`
`,e.jsxs(i.h2,{id:"troubleshooting",children:["Troubleshooting",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#troubleshooting",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["If you ever need to recompile the Linux Kernel because the official OS images for your ARM board don't have the right memory layout configuration, you can use ",e.jsx(i.a,{href:"https://github.com/armbian/build",children:"the Armbian build framework"}),"."]}),`
`]}),`
`,e.jsxs(i.h3,{id:"failed-to-open-database",children:["Failed to open database",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#failed-to-open-database",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["This error is documented ",e.jsx(i.a,{href:"https://github.com/paradigmxyz/reth/issues/2211",children:"here"}),"."]}),`
`]}),`
`,e.jsx(i.p,{children:"This error is raised whenever MDBX can not open a database due to the limitations imposed by the memory layout of your kernel. If the user space is limited to 512GB, the database will not be able to grow below this size."}),`
`,e.jsx(i.p,{children:"You will need to recompile the Linux Kernel to fix the issue."}),`
`,e.jsx(i.p,{children:"A simple and safe approach to achieve this is to use the Armbian build framework to create a new image of the OS that will be flashed to a storage device of your choice - an SD card for example - with the following kernel feature values:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Page Size"}),": 64 KB"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Virtual Address Space Size"}),": 48 Bits"]}),`
`]}),`
`,e.jsx(i.p,{children:"To be able to build an Armbian image and set those values, you will need to:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Clone the Armbian build framework repository"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/armbian/build"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" build"})]})]})})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Run the compile script with the following parameters:"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"./compile.sh"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BUILD_MINIMAL=yes "}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"BUILD_DESKTOP=no "}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"KERNEL_CONFIGURE=yes "}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"CARD_DEVICE="}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"/dev/sdX"'}),e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" # Replace sdX with your own storage device"})]})]})})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["From there, you will be able to select the target board, the OS release and branch. Then, once you get in the ",e.jsx(i.strong,{children:"Kernel Configuration"})," screen, select the ",e.jsx(i.strong,{children:"Kernel Features options"})," and set the previous values accordingly."]}),`
`,e.jsx(i.li,{children:"Wait for the process to finish, plug your storage device into your board and start it. You can now download or install Reth and it should work properly."}),`
`]})]})}function o(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{o as default,a as frontmatter};
