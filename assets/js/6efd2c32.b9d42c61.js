"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[6396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:12},o="\u9ad8\u6548\u7684\u5173\u952e\u8bcd\u66ff\u6362\u548c\u654f\u611f\u8bcd\u8fc7\u6ee4\u5de5\u5177",i={unversionedId:"go-zero/extension/keywords",id:"go-zero/extension/keywords",title:"\u9ad8\u6548\u7684\u5173\u952e\u8bcd\u66ff\u6362\u548c\u654f\u611f\u8bcd\u8fc7\u6ee4\u5de5\u5177",description:"\u7b97\u6cd5\u4ecb\u7ecd",source:"@site/docs/go-zero/extension/keywords.md",sourceDirName:"go-zero/extension",slug:"/go-zero/extension/keywords",permalink:"/zzydoc/docs/go-zero/extension/keywords",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"GoZero",previous:{title:"\u8fdb\u7a0b\u5185\u7f13\u5b58\u7ec4\u4ef6 collection.Cache",permalink:"/zzydoc/docs/go-zero/extension/collection"},next:{title:"\u6587\u672c\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316",permalink:"/zzydoc/docs/go-zero/extension/mapping"}},p={},c=[{value:"\u7b97\u6cd5\u4ecb\u7ecd",id:"\u7b97\u6cd5\u4ecb\u7ecd",level:2},{value:"\u5173\u952e\u8bcd\u66ff\u6362",id:"\u5173\u952e\u8bcd\u66ff\u6362",level:2},{value:"\u67e5\u627e\u654f\u611f\u8bcd",id:"\u67e5\u627e\u654f\u611f\u8bcd",level:2},{value:"\u654f\u611f\u8bcd\u8fc7\u6ee4",id:"\u654f\u611f\u8bcd\u8fc7\u6ee4",level:2},{value:"Benchmark",id:"benchmark",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9ad8\u6548\u7684\u5173\u952e\u8bcd\u66ff\u6362\u548c\u654f\u611f\u8bcd\u8fc7\u6ee4\u5de5\u5177"},"\u9ad8\u6548\u7684\u5173\u952e\u8bcd\u66ff\u6362\u548c\u654f\u611f\u8bcd\u8fc7\u6ee4\u5de5\u5177"),(0,a.kt)("h2",{id:"\u7b97\u6cd5\u4ecb\u7ecd"},"\u7b97\u6cd5\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u5229\u7528\u9ad8\u6548\u7684Trie\u6811\u5efa\u7acb\u5173\u952e\u8bcd\u6811\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u7136\u540e\u4f9d\u6b21\u67e5\u627e\u5b57\u7b26\u4e32\u4e2d\u7684\u76f8\u8fde\u5b57\u7b26\u662f\u5426\u5f62\u6210\u6811\u7684\u4e00\u6761\u8def\u5f84"),(0,a.kt)("img",{src:"https://raw.githubusercontent.com/zeromicro/zero-doc/main/doc/images/trie.png",alt:"trie",width:"350"}),(0,a.kt)("p",null,"\u53d1\u73b0\u6398\u91d1\u4e0a",(0,a.kt)("a",{parentName:"p",href:"https://juejin.im/post/6844903750490914829"},"\u8fd9\u7bc7\u6587\u7ae0"),"\u5199\u7684\u6bd4\u8f83\u8be6\u7ec6\uff0c\u53ef\u4ee5\u4e00\u8bfb\uff0c\u5177\u4f53\u539f\u7406\u5728\u6b64\u4e0d\u8be6\u8ff0\u3002"),(0,a.kt)("h2",{id:"\u5173\u952e\u8bcd\u66ff\u6362"},"\u5173\u952e\u8bcd\u66ff\u6362"),(0,a.kt)("p",null,"\u652f\u6301\u5173\u952e\u8bcd\u91cd\u53e0\uff0c\u81ea\u52a8\u9009\u7528\u6700\u957f\u7684\u5173\u952e\u8bcd\uff0c\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'replacer := stringx.NewReplacer(map[string]string{\n  "\u65e5\u672c":    "\u6cd5\u56fd",\n  "\u65e5\u672c\u7684\u9996\u90fd": "\u4e1c\u4eac",\n  "\u4e1c\u4eac":    "\u65e5\u672c\u7684\u9996\u90fd",\n})\nfmt.Println(replacer.Replace("\u65e5\u672c\u7684\u9996\u90fd\u662f\u4e1c\u4eac"))\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u5f97\u5230\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"\u4e1c\u4eac\u662f\u65e5\u672c\u7684\u9996\u90fd\n")),(0,a.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u89c1",(0,a.kt)("inlineCode",{parentName:"p"},"stringx/replace/replace.go")),(0,a.kt)("h2",{id:"\u67e5\u627e\u654f\u611f\u8bcd"},"\u67e5\u627e\u654f\u611f\u8bcd"),(0,a.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'filter := stringx.NewTrie([]string{\n  "AV\u6f14\u5458",\n  "\u82cd\u4e95\u7a7a",\n  "AV",\n  "\u65e5\u672cAV\u5973\u4f18",\n  "AV\u6f14\u5458\u8272\u60c5",\n})\nkeywords := filter.FindKeywords("\u65e5\u672cAV\u6f14\u5458\u517c\u7535\u89c6\u3001\u7535\u5f71\u6f14\u5458\u3002\u82cd\u4e95\u7a7aAV\u5973\u4f18\u662fxx\u51fa\u9053, \u65e5\u672cAV\u5973\u4f18\u4eec\u6700\u7cbe\u5f69\u7684\u8868\u6f14\u662fAV\u6f14\u5458\u8272\u60c5\u8868\u6f14")\nfmt.Println(keywords)\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u5f97\u5230\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"[\u82cd\u4e95\u7a7a \u65e5\u672cAV\u5973\u4f18 AV\u6f14\u5458\u8272\u60c5 AV AV\u6f14\u5458]\n")),(0,a.kt)("h2",{id:"\u654f\u611f\u8bcd\u8fc7\u6ee4"},"\u654f\u611f\u8bcd\u8fc7\u6ee4"),(0,a.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'filter := stringx.NewTrie([]string{\n  "AV\u6f14\u5458",\n  "\u82cd\u4e95\u7a7a",\n  "AV",\n  "\u65e5\u672cAV\u5973\u4f18",\n  "AV\u6f14\u5458\u8272\u60c5",\n}, stringx.WithMask(\'?\')) // \u9ed8\u8ba4\u66ff\u6362\u4e3a*\nsafe, keywords, found := filter.Filter("\u65e5\u672cAV\u6f14\u5458\u517c\u7535\u89c6\u3001\u7535\u5f71\u6f14\u5458\u3002\u82cd\u4e95\u7a7aAV\u5973\u4f18\u662fxx\u51fa\u9053, \u65e5\u672cAV\u5973\u4f18\u4eec\u6700\u7cbe\u5f69\u7684\u8868\u6f14\u662fAV\u6f14\u5458\u8272\u60c5\u8868\u6f14")\nfmt.Println(safe)\nfmt.Println(keywords)\nfmt.Println(found)\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u5f97\u5230\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"\u65e5\u672c????\u517c\u7535\u89c6\u3001\u7535\u5f71\u6f14\u5458\u3002?????\u5973\u4f18\u662fxx\u51fa\u9053, ??????\u4eec\u6700\u7cbe\u5f69\u7684\u8868\u6f14\u662f??????\u8868\u6f14\n[\u82cd\u4e95\u7a7a \u65e5\u672cAV\u5973\u4f18 AV\u6f14\u5458\u8272\u60c5 AV AV\u6f14\u5458]\ntrue\n")),(0,a.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u89c1",(0,a.kt)("inlineCode",{parentName:"p"},"stringx/filter/filter.go")),(0,a.kt)("h2",{id:"benchmark"},"Benchmark"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Sentences"),(0,a.kt)("th",{parentName:"tr",align:null},"Keywords"),(0,a.kt)("th",{parentName:"tr",align:null},"Regex"),(0,a.kt)("th",{parentName:"tr",align:null},"go-zero"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10000"),(0,a.kt)("td",{parentName:"tr",align:null},"10000"),(0,a.kt)("td",{parentName:"tr",align:null},"16min10s"),(0,a.kt)("td",{parentName:"tr",align:null},"27.2ms")))))}m.isMDXComponent=!0}}]);