"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[7924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=l,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},22256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const i={displayed_sidebar:"MySQL"},a="\u6570\u636e\u5e93\u8bbe\u8ba1\u6b65\u9aa4",o={unversionedId:"mysql/design",id:"mysql/design",title:"\u6570\u636e\u5e93\u8bbe\u8ba1\u6b65\u9aa4",description:"1536977906540",source:"@site/docs/mysql/design.md",sourceDirName:"mysql",slug:"/mysql/design",permalink:"/zzydoc/docs/mysql/design",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"MySQL"},sidebar:"MySQL",previous:{title:"MySQL\u5b9e\u4f53[entity]",permalink:"/zzydoc/docs/mysql/entity"},next:{title:"\u6570\u636e\u89c4\u8303\u5316[\u4e09\u8303\u5f0f]",permalink:"/zzydoc/docs/mysql/canonical"}},c={},p=[{value:"\u6570\u636e\u5e93\u8bbe\u8ba1\u5177\u4f53\u6b65\u9aa4",id:"\u6570\u636e\u5e93\u8bbe\u8ba1\u5177\u4f53\u6b65\u9aa4",level:2},{value:"\u7ed8\u5236E-R\u56fe",id:"\u7ed8\u5236e-r\u56fe",level:2},{value:"\u5c06E-R\u56fe\u8f6c\u6210\u8868",id:"\u5c06e-r\u56fe\u8f6c\u6210\u8868",level:2},{value:"\u4f8b\u9898",id:"\u4f8b\u9898",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,l.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u5e93\u8bbe\u8ba1\u6b65\u9aa4"},"\u6570\u636e\u5e93\u8bbe\u8ba1\u6b65\u9aa4"),(0,l.kt)("p",null,"  ",(0,l.kt)("img",{alt:"1536977906540",src:n(30441).Z,width:"1005",height:"219"})),(0,l.kt)("h2",{id:"\u6570\u636e\u5e93\u8bbe\u8ba1\u5177\u4f53\u6b65\u9aa4"},"\u6570\u636e\u5e93\u8bbe\u8ba1\u5177\u4f53\u6b65\u9aa4"),(0,l.kt)("p",null,"1\u3001     \u6536\u96c6\u4fe1\u606f\uff1a\u4e0e\u8be5\u7cfb\u7edf\u6709\u5173\u4eba\u5458\u8fdb\u884c\u4ea4\u6d41\u3001\u5750\u8c08\uff0c\u5145\u5206\u7406\u89e3\u6570\u636e\u5e93\u9700\u8981\u5b8c\u6210\u7684\u4efb\u52a1"),(0,l.kt)("p",null,"2\u3001     \u6807\u8bc6\u5bf9\u8c61\uff08\u5b9e\u4f53\uff0dEntity\uff09\u6807\u8bc6\u6570\u636e\u5e93\u8981\u7ba1\u7406\u7684\u5173\u952e\u5bf9\u8c61\u6216\u5b9e\u4f53 "),(0,l.kt)("p",null,"3\u3001     \u6807\u8bc6\u6bcf\u4e2a\u5b9e\u4f53\u7684\u5c5e\u6027\uff08Attribute\uff09"),(0,l.kt)("p",null,"4\u3001     \u6807\u8bc6\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb\uff08Relationship\uff09"),(0,l.kt)("p",null,"5\u3001     \u5c06\u6a21\u578b\u8f6c\u6362\u6210\u6570\u636e\u5e93"),(0,l.kt)("p",null,"6\u3001     \u89c4\u8303\u5316"),(0,l.kt)("h2",{id:"\u7ed8\u5236e-r\u56fe"},"\u7ed8\u5236E-R\u56fe"),(0,l.kt)("p",null,"  E-R\uff08Entity\uff0dRelationship\uff09\u5b9e\u4f53\u5173\u7cfb\u56fe "),(0,l.kt)("p",null,"E-R\u56fe\u7684\u8bed\u6cd5"),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"1536978470142",src:n(29958).Z,width:"501",height:"243"})),(0,l.kt)("p",null,"\u7ed8\u5236E-R\u56fe"),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"1536978565499",src:n(66472).Z,width:"985",height:"257"})),(0,l.kt)("h2",{id:"\u5c06e-r\u56fe\u8f6c\u6210\u8868"},"\u5c06E-R\u56fe\u8f6c\u6210\u8868"),(0,l.kt)("p",null,"1\u3001     \u5b9e\u4f53\u8f6c\u6210\u8868\uff0c\u5c5e\u6027\u8f6c\u6210\u5b57\u6bb5"),(0,l.kt)("p",null,"2\u3001     \u5982\u679c\u6ca1\u6709\u5408\u9002\u7684\u5b57\u6bb5\u505a\u4e3b\u952e\uff0c\u7ed9\u8868\u6dfb\u52a0\u4e00\u4e2a\u81ea\u52a8\u589e\u957f\u5217\u505a\u4e3b\u952e\u3002"),(0,l.kt)("h2",{id:"\u4f8b\u9898"},"\u4f8b\u9898"),(0,l.kt)("p",null,"1\u3001\u9879\u76ee\u9700\u6c42"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"BBS\u8bba\u575b\u7684\u57fa\u672c\u529f\u80fd\uff1a\n\u7528\u6237\u6ce8\u518c\u548c\u767b\u5f55\uff0c\u540e\u53f0\u6570\u636e\u5e93\u9700\u8981\u5b58\u653e\u7528\u6237\u7684\u6ce8\u518c\u4fe1\u606f\u548c\u5728\u7ebf\u72b6\u6001\u4fe1\u606f\uff1b\n\u7528\u6237\u53d1\u8d34\uff0c\u540e\u53f0\u6570\u636e\u5e93\u9700\u8981\u5b58\u653e\u8d34\u5b50\u76f8\u5173\u4fe1\u606f\uff0c\u5982\u8d34\u5b50\u5185\u5bb9\u3001\u6807\u9898\u7b49\uff1b\n\u7528\u6237\u53ef\u4ee5\u5bf9\u53d1\u5e16\u8fdb\u884c\u56de\u590d\uff1b\n\u8bba\u575b\u7248\u5757\u7ba1\u7406\uff1a\u540e\u53f0\u6570\u636e\u5e93\u9700\u8981\u5b58\u653e\u5404\u4e2a\u7248\u5757\u4fe1\u606f\uff0c\u5982\u7248\u4e3b\u3001\u7248\u5757\u540d\u79f0\u3001\u8d34\u5b50\u6570\u7b49\uff1b\n")),(0,l.kt)("p",null,"2\u3001\u6807\u8bc6\u5bf9\u8c61"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u53c2\u4e0e\u7684\u5bf9\u8c61\u6709\uff1a\u7528\u6237\u3001\u53d1\u7684\u5e16\u5b50\u3001\u8ddf\u5e16\u3001\u677f\u5757\n")),(0,l.kt)("p",null,"3\u3001\u6807\u8bc6\u5bf9\u8c61\u7684\u5c5e\u6027"),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"1536978271446",src:n(44538).Z,width:"623",height:"299"})),(0,l.kt)("p",null,"4\u3001\u5efa\u7acb\u5173\u7cfb\uff0c\u7ed8\u5236E-R\u56fe"),(0,l.kt)("p",null," ",(0,l.kt)("img",{alt:"1536978734804",src:n(40284).Z,width:"1006",height:"581"})),(0,l.kt)("p",null,"5\u3001\u5c06E-R\u56fe\u8f6c\u51fa\u8868\u7ed3\u6784"))}d.isMDXComponent=!0},30441:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1536977906540-d1ae5e1d2d2a45b027c4685cba482d45.png"},44538:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1536978271446-dca1b308386324126499a7f7d0fe04f0.png"},29958:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1536978470142-2920314d1dac52492b1beec64e13d24c.png"},66472:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1536978565499-e87ee0c3025306065f88c3d849057da7.png"},40284:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1536978734804-28a04fed2c92e1e7e5810709c872b8fd.png"}}]);