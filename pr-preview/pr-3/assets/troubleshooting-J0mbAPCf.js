import{f as n,j as e}from"./index-xNsX7Ar1.js";const l={description:"Troubleshooting common Reth node and database issues.",title:"Troubleshooting"};function i(r){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.header,{children:e.jsxs(s.h1,{id:"troubleshooting",children:["Troubleshooting",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#troubleshooting",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(s.p,{children:"This page tries to answer how to deal with the most popular issues."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#troubleshooting",children:"Troubleshooting"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#database",children:"Database"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#docker",children:"Docker"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#error-code-13",children:"Error code 13"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#slow-database-inserts-and-updates",children:"Slow database inserts and updates"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#compact-the-database",children:"Compact the database"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#re-sync-from-scratch",children:"Re-sync from scratch"})}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#database-write-error",children:"Database write error"})}),`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#concurrent-database-access-error-using-containersdocker",children:"Concurrent database access error (using containers/Docker)"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"#hardware-performance-testing",children:"Hardware Performance Testing"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"#disk-speed-testing-with-iozone",children:"Disk Speed Testing with IOzone"})}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h2,{id:"database",children:["Database",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#database",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"docker",children:["Docker",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#docker",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Externally accessing a ",e.jsx(s.code,{children:"datadir"})," inside a named docker volume will usually come with folder/file ownership/permissions issues."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"It is not recommended"})," to use the path to the named volume as it will trigger an error code 13. ",e.jsx(s.code,{children:"RETH_DB_PATH: /var/lib/docker/volumes/named_volume/_data/eth/db cargo r --examples db-access --path "})," is ",e.jsx(s.strong,{children:"DISCOURAGED"})," and a mounted volume with the right permissions should be used instead."]}),`
`,e.jsxs(s.h3,{id:"error-code-13",children:["Error code 13",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#error-code-13",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"the environment opened in read-only code: 13"})}),`
`,e.jsxs(s.p,{children:["Externally accessing a database in a read-only folder is not supported, ",e.jsx(s.strong,{children:"UNLESS"})," there's no ",e.jsx(s.code,{children:"mdbx.lck"})," present, and it's called with ",e.jsx(s.code,{children:"exclusive"})," on calling ",e.jsx(s.code,{children:"open_db_read_only"}),". Meaning that there's no node syncing concurrently."]}),`
`,e.jsxs(s.p,{children:["If the error persists, ensure that you have the right ",e.jsx(s.code,{children:"rx"})," permissions on the ",e.jsx(s.code,{children:"datadir"})," ",e.jsx(s.strong,{children:"and its parent"})," folders. Eg. the following command should succeed:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash,ignore",children:`stat /full/path/datadir
`})}),`
`,e.jsxs(s.h3,{id:"slow-database-inserts-and-updates",children:["Slow database inserts and updates",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#slow-database-inserts-and-updates",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"If you're:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Running behind the tip"}),`
`,e.jsxs(s.li,{children:["Have slow canonical commit time according to the ",e.jsx(s.code,{children:"Canonical Commit Latency Time"})," chart on ",e.jsx(s.a,{href:"/observability#prometheus--grafana",children:"Grafana dashboard"})," (more than 2-3 seconds)"]}),`
`,e.jsxs(s.li,{children:["Seeing warnings in your logs such as",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"2023-11-08T15:17:24.789731Z  WARN providers::db: Transaction insertion took too long block_number=18528075 tx_num=2150227643 hash=0xb7de1d6620efbdd3aa8547c47a0ff09a7fd3e48ba3fd2c53ce94c6683ed66e7c elapsed=6.793759034s"})})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.p,{children:["then most likely you're experiencing issues with the ",e.jsx(s.a,{href:"https://github.com/paradigmxyz/reth/issues/5228",children:"database freelist"}),`.
To confirm it, check if the values on the `,e.jsx(s.code,{children:"Freelist"})," chart on ",e.jsx(s.a,{href:"/observability#prometheus--grafana",children:"Grafana dashboard"}),`
is greater than 10M.`]}),`
`,e.jsx(s.p,{children:"Currently, there are two main ways to fix this issue."}),`
`,e.jsxs(s.h4,{id:"compact-the-database",children:["Compact the database",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compact-the-database",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["It will take around 5-6 hours and require ",e.jsx(s.strong,{children:"additional"}),` disk space located on the same or different drive
equal to the `,e.jsx(s.a,{href:"/installation/overview#hardware-requirements",children:"freshly synced node"}),"."]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Clone Reth",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/paradigmxyz/reth"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" reth"})]})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:["Build database debug tools",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"make"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" db-tools"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:["Run compaction (this step will take 5-6 hours, depending on the I/O speed)",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"./db-tools/mdbx_copy"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -c"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"reth"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" db"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" path"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"reth_compact.dat"})]})})})}),`
`]}),`
`,e.jsx(s.li,{children:"Stop Reth"}),`
`,e.jsxs(s.li,{children:["Backup original database",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"mv"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"reth"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" db"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" path"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"/mdbx.dat"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" reth_old.dat"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:["Move compacted database in place of the original database",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"mv"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" reth_compact.dat"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"reth"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" db"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" path"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"/mdbx.dat"})]})})})}),`
`]}),`
`,e.jsx(s.li,{children:"Start Reth"}),`
`,e.jsxs(s.li,{children:["Confirm that the values on the ",e.jsx(s.code,{children:"Freelist"})," chart are near zero and the values on the ",e.jsx(s.code,{children:"Canonical Commit Latency Time"}),` chart
is less than 1 second.`]}),`
`,e.jsxs(s.li,{children:["Delete original database",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rm"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" reth_old.dat"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h4,{id:"re-sync-from-scratch",children:["Re-sync from scratch",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#re-sync-from-scratch",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"It will take the same time as initial sync."}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Stop Reth"}),`
`,e.jsxs(s.li,{children:["Drop the database using ",e.jsx(s.a,{href:"#TODO",children:e.jsx(s.code,{children:"reth db drop"})})]}),`
`,e.jsx(s.li,{children:"Start reth"}),`
`]}),`
`,e.jsxs(s.h3,{id:"database-write-error",children:["Database write error",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#database-write-error",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"If you encounter an irrecoverable database-related errors, in most of the cases it's related to the RAM/NVMe/SSD you use. For example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Error: A stage encountered an irrecoverable error."})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Caused by:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"   0: An internal database error occurred: Database write error code: -30796"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"   1: Database write error code: -30796"})})]})})}),`
`,e.jsx(s.p,{children:"or"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Error: A stage encountered an irrecoverable error."})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Caused by:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"   0: An internal database error occurred: Database read error code: -30797"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"   1: Database read error code: -30797"})})]})})}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Check your memory health: use ",e.jsx(s.a,{href:"https://www.memtest.org/",children:"memtest86+"})," or ",e.jsx(s.a,{href:"https://linux.die.net/man/8/memtester",children:"memtester"}),". If your memory is faulty, it's better to resync the node on different hardware."]}),`
`,e.jsxs(s.li,{children:["Check database integrity:",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"git"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://github.com/paradigmxyz/reth"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"cd"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" reth"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"make"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" db-tools"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"./db-tools/mdbx_chk"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $("}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"reth"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" db"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" path"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"/mdbx.dat"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" |"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" tee"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" mdbx_chk.log"})]})]})})}),`
`,"If ",e.jsx(s.code,{children:"mdbx_chk"})," has detected any errors, please ",e.jsx(s.a,{href:"https://github.com/paradigmxyz/reth/issues",children:"open an issue"})," and post the output from the ",e.jsx(s.code,{children:"mdbx_chk.log"})," file."]}),`
`]}),`
`,e.jsxs(s.h3,{id:"concurrent-database-access-error-using-containersdocker",children:["Concurrent database access error (using containers/Docker)",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#concurrent-database-access-error-using-containersdocker",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["If you encounter an error while accessing the database from multiple processes and you are using multiple containers or a mix of host and container(s), it is possible the error is related to ",e.jsx(s.code,{children:"PID"})," namespaces. You might see one of the following error messages."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"mdbx:0: panic: Assertion `osal_rdt_unlock() failed: err 1' failed."})})})})}),`
`,e.jsx(s.p,{children:"or"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"pthread_mutex_lock.c:438: __pthread_mutex_lock_full: Assertion `e != ESRCH || !robust' failed"})})})})}),`
`,e.jsxs(s.p,{children:["If you are using Docker, a possible solution is to run all database-accessing containers with ",e.jsx(s.code,{children:"--pid=host"})," flag."]}),`
`,e.jsxs(s.p,{children:["For more information, check out the ",e.jsx(s.code,{children:"Containers"})," section in the ",e.jsx(s.a,{href:"https://github.com/erthink/libmdbx#containers",children:"libmdbx README"}),"."]}),`
`,e.jsxs(s.h2,{id:"hardware-performance-testing",children:["Hardware Performance Testing",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hardware-performance-testing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"If you're experiencing degraded performance, it may be related to hardware issues. Below are some tools and tests you can run to evaluate your hardware performance."}),`
`,e.jsx(s.p,{children:"If your hardware performance is significantly lower than these reference numbers, it may explain degraded node performance. Consider upgrading your hardware or investigating potential issues with your current setup."}),`
`,e.jsxs(s.h3,{id:"disk-speed-testing-with-iozone",children:["Disk Speed Testing with ",e.jsx(s.a,{href:"https://linux.die.net/man/1/iozone",children:"IOzone"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#disk-speed-testing-with-iozone",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Test disk speed:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"iozone"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -e"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -t1"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -i0"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -i2"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -r1k"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -s1g"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /tmp"})]})})})}),`
`,e.jsx(s.p,{children:"Reference numbers (on Latitude c3.large.x86):"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Children see throughput for  1 initial writers  =  907733.81 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Parent sees throughput for  1 initial writers   =  907239.68 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Children see throughput for  1 rewriters        = 1765222.62 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Parent sees throughput for  1 rewriters         = 1763433.35 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Children see throughput for 1 random readers    = 1557497.38 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Parent sees throughput for 1 random readers     = 1554846.58 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Children see throughput for 1 random writers    =  984428.69 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Parent sees throughput for 1 random writers     =  983476.67 kB/sec"})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Test disk speed with memory-mapped files:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"iozone"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -B"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -G"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -e"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -t1"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -i0"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -i2"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -r1k"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -s1g"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /tmp"})]})})})}),`
`,e.jsx(s.p,{children:"Reference numbers (on Latitude c3.large.x86):"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Children see throughput for  1 initial writers  =   56471.06 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Parent sees throughput for  1 initial writers   =   56365.14 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Children see throughput for  1 rewriters        =  241650.69 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Parent sees throughput for  1 rewriters         =  239067.96 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Children see throughput for 1 random readers    = 6833161.00 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Parent sees throughput for 1 random readers     = 5597659.65 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Children see throughput for 1 random writers    =  220248.53 kB/sec"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"Parent sees throughput for 1 random writers     =  219112.26 kB/sec"})})]})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"ram-speed-and-health-testing",children:["RAM Speed and Health Testing",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ram-speed-and-health-testing",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Check RAM speed with ",e.jsx(s.a,{href:"https://linux.die.net/man/1/lshw",children:"lshw"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"sudo"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" lshw"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -short"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -C"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" memory"})]})})})}),`
`,e.jsx(s.p,{children:"Look for the frequency in the output. Reference output:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"H/W path              Device          Class          Description"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"================================================================"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"/0/24/0                               memory         64GiB DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"/0/24/1                               memory         64GiB DIMM DDR4 Synchronous Registered (Buffered) 3200 MHz (0.3 ns)"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"..."})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Test RAM health with ",e.jsx(s.a,{href:"https://linux.die.net/man/8/memtester",children:"memtester"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"sudo"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" memtester"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 10G"})]})})})}),`
`,e.jsx(s.p,{children:"This will take a while. You can test with a smaller amount first:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"sudo"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" memtester"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 1G"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"})]})})})}),`
`,e.jsx(s.p,{children:'All checks should report "ok".'}),`
`]}),`
`]})]})}function d(r={}){const{wrapper:s}={...n(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(i,{...r})}):i(r)}export{d as default,l as frontmatter};
