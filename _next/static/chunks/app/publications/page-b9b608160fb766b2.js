(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{21586:(e,t,a)=>{Promise.resolve().then(a.bind(a,79966))},49939:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var r=a(95155);a(12115);var s=a(81996),l=a.n(s);let i=e=>{let{children:t,className:a=""}=e;return(0,r.jsx)("div",{className:"w-full h-full inline-block z-0 bg-light dark:bg-dark \n       px-6 sm:px-12 md:px-24 lg:px-32 xl:px-40 \n       py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 ".concat(a),children:t})};i.propTypes={children:l().node.isRequired,className:l().string};let n=i},79966:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var r=a(95155),s=a(12115),l=a(6793),i=a.n(l),n=a(49939),o=a(53848),c=a(25683),d=a(7468),x=a(11536),g=a(17760),m=a.n(g);let h=e=>e?e.replace(/\\textit{([^}]+)}/g,"<i>$1</i>").replace(/\\textbf{([^}]+)}/g,"<b>$1</b>").replace(/\\texttt{([^}]+)}/g,"<code>$1</code>").replace(/\\underline{([^}]+)}/g,"<u>$1</u>").replace(/\\textsuperscript{([^}]+)}/g,"<sup>$1</sup>").replace(/\\emph{([^}]+)}/g,"<i>$1</i>").replace(/\\&/g,"&").replace(/--/g,"–").replace(/\\\$/g,"$").replace(/\{([^{}]+)\}/g,"$1").trim():"",u=e=>{let{scholar:t=!1}=e,a=(0,s.useRef)(null),{scrollYProgress:l}=(0,d.L)({target:a,offset:["start center","end end"]}),[i,n]=(0,s.useState)([]),[g,u]=(0,s.useState)([]),[b,p]=(0,s.useState)(!0),[y,j]=(0,s.useState)(null),[f,N]=(0,s.useState)(""),[v,k]=(0,s.useState)("newest"),[w,S]=(0,s.useState)("all"),[C,I]=(0,s.useState)([]),[P,E]=(0,s.useState)({}),[T,A]=(0,s.useState)([]),[_,L]=(0,s.useState)(null),D=e=>{E(t=>({...t,[e]:!t[e]}))},F=e=>{navigator.clipboard.writeText(e.replace(/<[^>]*>/g,"")).then(()=>{alert("Citation copied to clipboard!")}).catch(e=>{console.error("Failed to copy citation: ",e)})},Y=e=>{if(!e)return!1;try{return new URL(e),"#"!==e&&!e.startsWith("javascript:")}catch(e){return!1}};(0,s.useEffect)(()=>{let e=async()=>{try{let e=localStorage.getItem("scholarMetrics");if(e)L(JSON.parse(e));else{let e=await fetch("/api/citations");if(!e.ok)throw Error("Failed to fetch citation data");let t=await e.json();L(t),localStorage.setItem("scholarMetrics",JSON.stringify(t))}}catch(e){console.error("Error fetching citation data:",e)}};(async()=>{try{let e=localStorage.getItem("scholarArticles");if(e)A(JSON.parse(e));else{let e=await fetch("/api/scholar");if(!e.ok)throw Error("Failed to fetch Google Scholar data");let t=await e.json();A(t),localStorage.setItem("scholarArticles",JSON.stringify(t))}}catch(e){console.error("Error fetching Google Scholar articles:",e)}})(),e()},[]),(0,s.useEffect)(()=>{(async()=>{try{p(!0);let e=t?"/scholar-publications.json":"/mypub.bib";if(t){let t=await fetch(e),a=(await t.json()).map((e,t)=>({id:t+1,title:e.title||"Untitled",authors:e.author||"Unknown Authors",venue:e.journal||"Unknown Venue",year:parseInt(e.year)||0,doi:e.doi||null,cited:e.cited||0,citedLink:e.citedLink||null,citation:"".concat(e.author,", ").concat(e.title,", ").concat(e.journal,", ").concat(e.year),link:e.link||null}));n(a)}else{let t=await fetch(e),a=await t.text(),r=m().toJSON(a).map((e,t)=>({id:t+1,title:h(e.entryTags.title)||"Untitled",authors:h(e.entryTags.author)||"Unknown Authors",venue:h(e.entryTags.journal||e.entryTags.booktitle)||"Unknown Venue",year:parseInt(e.entryTags.year)||0,doi:e.entryTags.doi||null,url:e.entryTags.url||null,pdf:e.entryTags.pdf||null,abstract:h(e.entryTags.abstract)||null,keywords:h(e.entryTags.keywords)||null,citation:h("".concat(e.entryTags.author,", ").concat(e.entryTags.title,", ").concat(e.entryTags.journal||e.entryTags.booktitle,", ").concat(e.entryTags.year)),link:e.entryTags.doi?"https://doi.org/".concat(e.entryTags.doi):e.entryTags.url||null}));n(r)}j(null)}catch(e){console.error("Error loading ".concat(t?"scholar":"research"," publications:"),e),j("Failed to load ".concat(t?"scholar":"research"," publications. Please try again later."))}finally{p(!1)}})()},[t]),(0,s.useEffect)(()=>{if(i.length>0){let e=new Set;i.forEach(t=>{t.year&&e.add(t.year.toString())}),I(Array.from(e).sort((e,t)=>t-e))}},[i]);let G=e=>{if(!T||0===T.length)return null;let t=e.title.toLowerCase().replace(/<[^>]*>/g,"");return T.find(e=>{let a=e.title.toLowerCase();return a.includes(t.substring(0,Math.floor(.7*t.length)))||t.includes(a.substring(0,Math.floor(.7*a.length)))})},z=e=>{if(e.cited&&!isNaN(parseInt(e.cited)))return parseInt(e.cited);let t=G(e);return t&&t.cited&&parseInt(t.cited)||0};return(0,s.useEffect)(()=>{let e=[...i];if(f){let t=f.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.authors.toLowerCase().includes(t)||e.venue.toLowerCase().includes(t))}switch("all"!==w&&(e=e.filter(e=>e.year.toString()===w)),v){case"oldest":e.sort((e,t)=>e.year-t.year);break;case"mostCited":e.sort((e,t)=>{let a=z(e);return z(t)-a});break;default:e.sort((e,t)=>t.year-e.year)}u(e)},[i,f,v,w]),(0,r.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,r.jsxs)("div",{className:"mb-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700",children:[(0,r.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[(0,r.jsx)("div",{className:"flex-grow",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(x.KSO,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),(0,r.jsx)("input",{type:"text",placeholder:"Search publications...",value:f,onChange:e=>N(e.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"})]})}),(0,r.jsx)("div",{className:"md:w-48",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(x.EDF,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),(0,r.jsxs)("select",{value:v,onChange:e=>k(e.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 appearance-none",children:[(0,r.jsx)("option",{value:"newest",children:"Newest First"}),(0,r.jsx)("option",{value:"oldest",children:"Oldest First"}),(0,r.jsx)("option",{value:"mostCited",children:"Most Cited"})]})]})}),(0,r.jsx)("div",{className:"md:w-48",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(x.bfZ,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"}),(0,r.jsxs)("select",{value:w,onChange:e=>S(e.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 appearance-none",children:[(0,r.jsx)("option",{value:"all",children:"All Years"}),C.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]})]})})]}),(f||"all"!==w)&&(0,r.jsxs)("div",{className:"mt-4 flex flex-wrap gap-2",children:[f&&(0,r.jsxs)("div",{className:"bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm flex items-center",children:["Search: ",f,(0,r.jsx)("button",{onClick:()=>N(""),className:"ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",children:"\xd7"})]}),"all"!==w&&(0,r.jsxs)("div",{className:"bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm flex items-center",children:["Year: ",w,(0,r.jsx)("button",{onClick:()=>S("all"),className:"ml-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",children:"\xd7"})]}),(0,r.jsx)("button",{onClick:()=>{N(""),S("all"),k("newest")},className:"text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm underline",children:"Clear all filters"})]})]}),b?(0,r.jsxs)("div",{className:"text-center py-12",children:[(0,r.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"}),(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"Loading publications..."})]}):y?(0,r.jsxs)("div",{className:"text-center py-12 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800",children:[(0,r.jsx)("p",{className:"text-red-600 dark:text-red-400",children:y}),(0,r.jsx)("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors",children:"Retry"})]}):0===g.length?(0,r.jsxs)("div",{className:"text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700",children:[(0,r.jsx)(x.YsJ,{className:"mx-auto text-4xl text-gray-400 mb-4"}),(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-400",children:"No publications match your filters."}),(0,r.jsx)("button",{onClick:()=>{N(""),S("all")},className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Clear Filters"})]}):(0,r.jsx)("div",{className:"relative w-full",children:(0,r.jsxs)("div",{ref:a,className:"relative w-full md:w-[90%] mx-auto",children:[(0,r.jsx)(o.P.div,{style:{scaleY:l},className:"absolute -left-4 md:-left-8 top-0 w-[4px] h-full bg-gradient-to-b from-blue-500 to-purple-600 origin-top rounded-full shadow-lg z-10"}),(0,r.jsx)("div",{className:"relative z-0",children:(0,r.jsx)(c.N,{children:g.map(e=>{let t=G(e),a=z(e),s=t&&t.link&&Y(t.link),l=e.abstract&&""!==e.abstract.trim();return(0,r.jsx)(o.P.div,{initial:{y:50,opacity:0},whileInView:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{duration:.5,type:"spring"},className:"my-8 first:mt-0 last:mb-0 w-full flex flex-col items-center justify-between",children:(0,r.jsxs)("div",{className:"group relative w-full rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800",children:[(0,r.jsxs)("div",{className:"flex items-start gap-4",children:[(0,r.jsx)("div",{className:"flex-shrink-0 mt-1",children:(0,r.jsx)("div",{className:"p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white",children:(0,r.jsx)(x.vd0,{size:20})})}),(0,r.jsxs)("div",{className:"flex-grow",children:[(0,r.jsx)("h3",{className:"font-bold text-xl text-gray-800 dark:text-gray-200 mb-3",dangerouslySetInnerHTML:{__html:e.title}}),(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-2 text-gray-600 dark:text-gray-300",children:[(0,r.jsx)(x.t69,{className:"text-gray-500 flex-shrink-0"}),(0,r.jsx)("span",{className:"font-medium",dangerouslySetInnerHTML:{__html:e.authors}})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-3 text-gray-600 dark:text-gray-300",children:[(0,r.jsx)(x.K9h,{className:"text-gray-500 flex-shrink-0"}),(0,r.jsxs)("span",{className:"italic",children:[e.venue,", ",e.year]})]}),a>0&&(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsxs)("span",{className:"inline-flex items-center px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm",children:[(0,r.jsx)(x.K9h,{className:"mr-1",size:12}),a," citation",1!==a?"s":"",t&&t.citedLink&&Y(t.citedLink)&&(0,r.jsx)("a",{href:t.citedLink,target:"_blank",rel:"noopener noreferrer",className:"ml-2 text-blue-600 dark:text-blue-400 hover:underline",title:"View citations on Google Scholar",children:(0,r.jsx)(x.EQc,{size:10})})]})}),(0,r.jsxs)("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[e.doi&&(0,r.jsxs)("a",{href:"https://doi.org/".concat(e.doi),target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors",children:[(0,r.jsx)(x.AnD,{size:12}),(0,r.jsxs)("span",{className:"text-sm",children:["DOI: ",e.doi]})]}),e.url&&!e.doi&&Y(e.url)&&(0,r.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors",children:[(0,r.jsx)(x.EQc,{size:12}),(0,r.jsx)("span",{className:"text-sm",children:"View Publication"})]}),e.pdf&&Y(e.pdf)&&(0,r.jsxs)("a",{href:e.pdf,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors",children:[(0,r.jsx)(x.WCW,{size:12}),(0,r.jsx)("span",{className:"text-sm",children:"PDF"})]}),s&&(0,r.jsxs)("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors",children:[(0,r.jsx)(x.YNd,{size:12}),(0,r.jsx)("span",{className:"text-sm",children:"View in Google Scholar"})]}),(0,r.jsxs)("button",{onClick:()=>F(e.citation),className:"flex items-center gap-1 px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors",children:[(0,r.jsx)(x.paH,{size:12}),(0,r.jsx)("span",{className:"text-sm",children:"Copy Citation"})]}),(l||e.keywords)&&(0,r.jsx)("button",{onClick:()=>D(e.id),className:"flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ml-auto",children:P[e.id]?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Ucs,{size:12}),(0,r.jsx)("span",{className:"text-sm",children:"Less"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x.Vr3,{size:12}),(0,r.jsx)("span",{className:"text-sm",children:"More"})]})})]})]})]}),P[e.id]&&(0,r.jsxs)(o.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"mt-4 overflow-hidden",children:[l&&(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("h4",{className:"font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Abstract"}),(0,r.jsx)("p",{className:"text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-700/50 p-3 rounded-md",dangerouslySetInnerHTML:{__html:e.abstract}})]}),e.keywords&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"font-semibold text-gray-700 dark:text-gray-300 mb-2",children:"Keywords"}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:e.keywords.split(",").map((e,t)=>(0,r.jsx)("span",{className:"bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs",children:e.trim()},t))})]})]}),(0,r.jsx)("div",{className:"mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md",children:(0,r.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-300",dangerouslySetInnerHTML:{__html:'<span class="font-semibold">Citation:</span> '.concat(e.citation)}})})]})},e.id)})})})]})})]})};var b=a(58581),p=a(394),y=a(15255),j=a(12800),f=a(66963),N=a(27112),v=a(86354),k=a(43322),w=a(23021);let S=e=>{let{citations:t}=e,[a,l]=(0,s.useState)([]),[i,n]=(0,s.useState)(!0),[o,c]=(0,s.useState)(null),[d,g]=(0,s.useState)(0),[m,h]=(0,s.useState)(0),[u,S]=(0,s.useState)(0);(0,s.useEffect)(()=>{let e=e=>{e.yearWiseCitations&&l(Object.keys(e.yearWiseCitations).map(t=>({year:t,citations:parseInt(e.yearWiseCitations[t],10)})).sort((e,t)=>parseInt(e.year)-parseInt(t.year)));let t=e.citations.all,a=e.hIndex.all,r=e.i10Index.all;g(t),h(a),S(r)};(async()=>{try{if(t&&t.yearWiseCitations){e(t);return}let a=await fetch("/api/citations");if(!a.ok)throw Error("API responded with status: ".concat(a.status));let r=await a.json();e(r)}catch(e){console.error("Error fetching citation data:",e),c("Failed to load citation data. Please try again later.")}finally{n(!1)}})()},[t]);let C=a.length>0?Math.round(d/a.length):0;return(0,r.jsxs)("div",{className:"w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm",children:[(0,r.jsxs)("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center",children:[(0,r.jsxs)("h2",{className:"text-xl font-bold flex items-center text-gray-800 dark:text-gray-200",children:[(0,r.jsx)(x.YYR,{className:"mr-2 text-blue-600 dark:text-blue-400"}),"Citations Over Time"]}),!i&&!o&&(0,r.jsxs)("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Total:"," ",(0,r.jsx)("span",{className:"font-semibold text-blue-600 dark:text-blue-400",children:d})]})]}),(0,r.jsx)("div",{className:"p-4",children:i?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center h-64",children:[(0,r.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"Loading citation data..."})]}):o?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center h-64",children:[(0,r.jsx)("p",{className:"text-red-500 dark:text-red-400",children:o}),(0,r.jsx)("button",{onClick:()=>window.location.reload(),className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",children:"Retry"})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(b.u,{width:"100%",height:350,children:(0,r.jsxs)(p.E,{data:a,margin:{top:20,right:30,left:20,bottom:60},children:[(0,r.jsx)(y.d,{strokeDasharray:"3 3",stroke:"#e5e7eb"}),(0,r.jsx)(j.W,{dataKey:"year",tick:{fill:"#6b7280"},angle:-45,textAnchor:"end",height:60,tickMargin:10}),(0,r.jsx)(f.h,{tick:{fill:"#6b7280"},allowDecimals:!1,domain:[0,"auto"]}),(0,r.jsx)(N.m,{content:(0,r.jsx)(e=>{let{active:t,payload:a,label:s}=e;return t&&a&&a.length?(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-md rounded-md",children:[(0,r.jsx)("p",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"Year: ".concat(s)}),(0,r.jsx)("p",{className:"text-blue-600 dark:text-blue-400",children:"Citations: ".concat(a[0].value)})]}):null},{})}),(0,r.jsx)(v.s,{verticalAlign:"top",height:36}),(0,r.jsx)(k.e,{y:C,label:{value:"Avg: ".concat(C),position:"insideTopRight",fill:"#9333ea",fontSize:12},stroke:"#9333ea",strokeDasharray:"3 3"}),(0,r.jsx)(w.y,{name:"Citations",dataKey:"citations",fill:"url(#colorGradient)",radius:[4,4,0,0],animationDuration:1500,animationEasing:"ease-out"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"colorGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"5%",stopColor:"#6366f1",stopOpacity:.9}),(0,r.jsx)("stop",{offset:"95%",stopColor:"#6366f1",stopOpacity:.3})]})})]})})})})]})},C=e=>{let{icon:t,symbol:a,title:s,description:l,iconClass:i=""}=e;return(0,r.jsxs)(o.P.div,{whileHover:{scale:1.02},className:"flex items-start p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300",children:[(0,r.jsxs)("div",{className:"mt-1 mr-3 ".concat(i," flex items-center"),children:[t,a&&(0,r.jsx)("span",{className:"ml-1",children:a})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 mb-1",children:s}),l&&(0,r.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:l})]})]})},I=()=>{let e=[{key:"equal",label:(0,r.jsx)("span",{className:"text-lg font-bold",children:"$"}),description:"Denotes equal contributions",icon:(0,r.jsx)(x.YXz,{className:"text-green-500"})},{key:"undergrad",label:(0,r.jsx)("span",{className:"text-lg font-bold",children:(0,r.jsx)("u",{children:"U"})}),description:"Undergraduate student mentored",icon:(0,r.jsx)(x.mFx,{className:"text-blue-500"})},{key:"grad",label:(0,r.jsx)("span",{className:"text-lg font-bold",children:(0,r.jsx)("u",{children:(0,r.jsx)("i",{children:"U"})})}),description:"Graduate student mentored",icon:(0,r.jsx)(x.YNd,{className:"text-purple-500"})},{key:"collab",label:(0,r.jsx)("span",{className:"text-lg font-bold",children:(0,r.jsx)("sup",{children:"^"})}),description:"Student of a collaborator mentored by Dr. Duhan",icon:(0,r.jsx)(x.YXz,{className:"text-amber-500"})},{key:"correspond",label:(0,r.jsx)("span",{className:"text-lg font-bold",children:"*"}),description:"Corresponding author",icon:(0,r.jsx)(x.gt3,{className:"text-red-500"})}];return(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center",children:[(0,r.jsx)(x.__w,{className:"mr-2 text-blue-500"}),"Publication Notations"]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.map(e=>(0,r.jsx)(C,{icon:e.icon,symbol:e.label,title:e.description,description:""},e.key))})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center",children:[(0,r.jsx)(x.YYR,{className:"mr-2 text-purple-500"}),"Publication Metrics"]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsx)(C,{icon:(0,r.jsx)(x.K9h,{className:"text-amber-500"}),title:"Citation Count",description:"Number of times the publication has been cited."}),(0,r.jsx)(C,{icon:(0,r.jsx)(x.gt3,{className:"text-yellow-500"}),title:"Impact Factor",description:"Journal's impact factor (when available)."})]})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("h4",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center",children:[(0,r.jsx)(x.EQc,{className:"mr-2 text-green-500"}),"Available Actions"]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsx)(C,{icon:(0,r.jsx)(x.EQc,{className:"text-blue-500"}),title:"View Publication",description:"Opens the publication in its original source."}),(0,r.jsx)(C,{icon:(0,r.jsx)(x.uNb,{className:"text-red-500"}),title:"Download PDF",description:"Downloads the publication PDF when available."}),(0,r.jsx)(C,{icon:(0,r.jsx)(x.K9h,{className:"text-gray-500"}),title:"Copy Citation",description:"Copies the formatted citation to clipboard."}),(0,r.jsx)(C,{icon:(0,r.jsx)(x.YNd,{className:"text-purple-500"}),title:"Google Scholar",description:"View publication on Google Scholar."})]})]}),(0,r.jsx)("div",{className:"mt-6 pt-4 border-t border-gray-200 dark:border-gray-700",children:(0,r.jsxs)("p",{className:"text-sm text-gray-500 dark:text-gray-400 flex items-center",children:[(0,r.jsx)(x.__w,{className:"mr-2"}),"Citation data is sourced from Google Scholar and may not reflect all citations. Last updated: ",new Date().toLocaleDateString()]})})]})},P=()=>{let[e,t]=(0,s.useState)([]),[a,l]=(0,s.useState)(!0),[i,n]=(0,s.useState)(null),[c,d]=(0,s.useState)(null);(0,s.useEffect)(()=>{let e=localStorage.getItem("scholarArticles"),a=localStorage.getItem("scholarArticlesTimestamp");e&&a?(t(JSON.parse(e)),d(new Date(parseInt(a))),l(!1)):g()},[]);let g=async()=>{try{l(!0),n(null);let e=await fetch("/api/scholar",{headers:{"Cache-Control":"no-cache"}});if(!e.ok)throw Error("API responded with status: ".concat(e.status));let a=await e.json();if(a.error)throw Error(a.error);t(a);let r=Date.now();d(new Date(r)),localStorage.setItem("scholarArticles",JSON.stringify(a)),localStorage.setItem("scholarArticlesTimestamp",r.toString())}catch(e){console.error("Error fetching Google Scholar data:",e),n(e.message||"Failed to fetch Google Scholar data")}finally{l(!1)}};return(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden",children:[(0,r.jsxs)("div",{className:"bg-gradient-to-r from-purple-600 to-indigo-600 p-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-white flex items-center",children:"Google Scholar Articles"}),(0,r.jsxs)("button",{onClick:g,disabled:a,className:"px-3 py-1 rounded-full text-sm flex items-center ".concat(a?"bg-gray-300 text-gray-600 cursor-not-allowed":"bg-white text-purple-600 hover:bg-gray-100"),children:[(0,r.jsx)(x.DIg,{className:"mr-1 ".concat(a?"animate-spin":"")}),a?"Updating...":"Refresh"]})]}),c&&(0,r.jsxs)("p",{className:"text-xs text-purple-200 mt-1 flex items-center",children:[(0,r.jsx)(x.bfZ,{className:"mr-1"}),"Last updated: ",c.toLocaleString()]})]}),(0,r.jsxs)("div",{className:"p-5",children:[i&&(0,r.jsx)("div",{className:"mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm",children:i}),a?(0,r.jsx)("div",{className:"flex justify-center items-center h-32",children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"})}):0===e.length?(0,r.jsx)("p",{className:"text-center text-gray-500 py-8",children:"No articles found."}):(0,r.jsxs)("div",{className:"space-y-4",children:[e.slice(0,5).map((e,t)=>(0,r.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1*t},className:"p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",children:[(0,r.jsx)("h4",{className:"text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200",children:e.title}),(0,r.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-1",children:e.author}),(0,r.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-3",children:e.journal}),(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center",children:["View Article ",(0,r.jsx)(x.EQc,{className:"ml-1 text-xs"})]}),(0,r.jsxs)("span",{className:"text-sm text-gray-600 dark:text-gray-300 flex items-center",children:[(0,r.jsx)(x.K9h,{className:"mr-1 text-xs"}),"Cited: ",e.cited||0]})]})]},t)),e.length>5&&(0,r.jsx)("div",{className:"text-center pt-2",children:(0,r.jsxs)("a",{href:"https://scholar.google.com/citations?user=kvf8JJQAAAAJ&hl=en",target:"_blank",rel:"noopener noreferrer",className:"text-purple-600 dark:text-purple-400 hover:underline text-sm inline-flex items-center",children:["View all  articles on Google Scholar",(0,r.jsx)(x.EQc,{className:"ml-1 text-xs"})]})})]})]})]})},E=e=>{let{title:t,value:a,recentValue:s,change:l,icon:i,tooltip:n}=e;return(0,r.jsxs)("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 relative group",children:[n&&(0,r.jsxs)("div",{className:"absolute invisible group-hover:visible bg-gray-800 text-white text-xs rounded p-2 -top-10 left-0 right-0 mx-auto w-48 z-10",children:[n,(0,r.jsx)("div",{className:"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[i,(0,r.jsx)("h4",{className:"ml-2 font-medium text-gray-700 dark:text-gray-300",children:t})]}),l&&(0,r.jsxs)("div",{className:"text-xs px-2 py-0.5 rounded-full flex items-center ".concat(l.isPositive?"bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400":"bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400"),children:[l.isPositive?(0,r.jsx)(x.uCC,{className:"mr-1"}):(0,r.jsx)(x.uCC,{className:"mr-1 transform rotate-180"}),l.value,"%"]})]}),(0,r.jsxs)("div",{className:"flex items-end",children:[(0,r.jsx)("div",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200",children:a}),s&&(0,r.jsxs)("div",{className:"ml-2 text-sm text-gray-500 dark:text-gray-400",children:["(",s," since 2020)"]})]})]})},T=(e,t)=>{if(!e||!t)return{value:0,isPositive:!0};let a=parseInt(e,10),r=parseInt(t,10);if(0===a)return{value:0,isPositive:!0};let s=Math.round(r/a*100);return{value:s,isPositive:s>=50}},A=e=>{let{active:t,onClick:a,icon:s,text:l}=e;return(0,r.jsxs)("button",{onClick:a,className:"flex items-center py-4 px-6 border-b-2 font-medium text-lg transition-colors ".concat(t?"border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400":"border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"),children:[s,l]})},_=()=>{var e,t,a,l,d,g,m,h,b,p,y,j;let[f,N]=(0,s.useState)("research"),[v,k]=(0,s.useState)(!0),[w,C]=(0,s.useState)(null),[_,L]=(0,s.useState)(!0);(0,s.useEffect)(()=>{(async()=>{try{L(!0);let e=await fetch("/api/citations");if(!e.ok)throw Error("Failed to fetch citation data");let t=await e.json();C(t)}catch(e){console.error("Error fetching citation data:",e)}finally{L(!1)}})()},[]);let D=w?T(null===(e=w.citations)||void 0===e?void 0:e.all,null===(t=w.citations)||void 0===t?void 0:t.since2020):null,F=w?T(null===(a=w.hIndex)||void 0===a?void 0:a.all,null===(l=w.hIndex)||void 0===l?void 0:l.since2020):null,Y=w?T(null===(d=w.i10Index)||void 0===d?void 0:d.all,null===(g=w.i10Index)||void 0===g?void 0:g.since2020):null;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Naveen Duhan | Publications"}),(0,r.jsx)("meta",{name:"description",content:"Naveen Duhan's Research Publications"})]}),(0,r.jsx)("main",{className:"flex w-full flex-col items-center justify-center dark:text-light",children:(0,r.jsxs)(n.A,{className:"pt-10 pb-16",children:[(0,r.jsx)(o.P.h1,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Research Publications"}),(0,r.jsx)("section",{className:"mb-12",children:(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden",children:[(0,r.jsx)("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 p-5",children:(0,r.jsxs)("h2",{className:"text-2xl font-bold text-white flex items-center",children:[(0,r.jsx)(x.YYR,{className:"mr-2"}),"Publication Metrics Dashboard"]})}),(0,r.jsxs)("div",{className:"p-6",children:[!_&&w&&(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:[(0,r.jsx)(E,{title:"Citations",value:(null===(m=w.citations)||void 0===m?void 0:m.all)||0,recentValue:(null===(h=w.citations)||void 0===h?void 0:h.since2020)||0,change:D,icon:(0,r.jsx)(x.K9h,{className:"text-blue-500"})}),(0,r.jsx)(E,{title:"h-index",value:(null===(b=w.hIndex)||void 0===b?void 0:b.all)||0,recentValue:(null===(p=w.hIndex)||void 0===p?void 0:p.since2020)||0,change:F,icon:(0,r.jsx)(x.v$b,{className:"text-purple-500"}),tooltip:"h-index is the largest number h such that h publications have at least h citations each"}),(0,r.jsx)(E,{title:"i10-index",value:(null===(y=w.i10Index)||void 0===y?void 0:y.all)||0,recentValue:(null===(j=w.i10Index)||void 0===j?void 0:j.since2020)||0,change:Y,icon:(0,r.jsx)(x.Z0L,{className:"text-green-500"}),tooltip:"i10-index is the number of publications with at least 10 citations"})]}),_&&(0,r.jsx)("div",{className:"flex justify-center items-center h-32",children:(0,r.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"})}),(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsxs)("h3",{className:"text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center",children:[(0,r.jsx)(x.YYR,{className:"mr-2 text-blue-600 dark:text-blue-400"}),"Citation Trends"]}),(0,r.jsx)("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:(0,r.jsx)(S,{citations:w})})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{className:"text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center",children:[(0,r.jsx)(x.__w,{className:"mr-2 text-blue-600 dark:text-blue-400"}),"Publication Notation Guide"]}),(0,r.jsx)("div",{className:"bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4",children:(0,r.jsx)(I,{})})]})]})]})}),(0,r.jsx)("section",{className:"mb-8",children:(0,r.jsxs)("div",{className:"flex justify-center border-b border-gray-200 dark:border-gray-700",children:[(0,r.jsx)(A,{active:"research"===f,onClick:()=>N("research"),icon:(0,r.jsx)(x.hko,{className:"mr-2"}),text:"Research Articles"}),(0,r.jsx)(A,{active:"scholar"===f,onClick:()=>N("scholar"),icon:(0,r.jsx)(x.YNd,{className:"mr-2"}),text:"Google Scholar"})]})}),(0,r.jsx)("section",{children:(0,r.jsxs)(c.N,{mode:"wait",children:["research"===f&&(0,r.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"mb-4",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent",children:"My Research Publications"}),(0,r.jsx)(u,{})]},"research"),"scholar"===f&&(0,r.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"mb-4",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent",children:"Google Scholar Publications"}),(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)(c.N,{children:v&&(0,r.jsx)(o.P.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:(0,r.jsx)(P,{})})})})]},"scholar")]})})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,550,388,87,728,441,587,358],()=>t(21586)),_N_E=e.O()}]);