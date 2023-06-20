"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[5470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),k=l,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},39851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={},i="26-\u7b2c\u4e09\u65b9\u5e93\u62bd\u79bb\u6253\u5305optimize",p={unversionedId:"js/webpack3/26",id:"js/webpack3/26",title:"26-\u7b2c\u4e09\u65b9\u5e93\u62bd\u79bb\u6253\u5305optimize",description:"\u4f5c\u4e3a\u4e00\u4e2a\u7a0b\u5e8f\u5458\uff0c\u65e0\u8bba\u662f\u5199\u4ec0\u4e48\u7a0b\u5e8f\u90fdi\u8981\u6709\u4e00\u9897\u4e0d\u65ad\u4f18\u5316\u7684\u5fc3\u3002webpack\u5728\u4f18\u5316\u8fd9\u6761\u8def\u4e0a\uff0c\u4e5f\u4e3a\u6211\u4eec\u4f5c\u4e86\u5f88\u591a\u914d\u7f6e\uff0c \u6211\u4eec\u5c31\u770b\u770b\u5de5\u4f5c\u4e2d\u5e38\u7528\u7684webpack\u4f18\u5316\u9ed1\u6280\u80fd\u3002",source:"@site/docs/js/webpack3/26.md",sourceDirName:"js/webpack3",slug:"/js/webpack3/26",permalink:"/zzydoc/docs/js/webpack3/26",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSWebpack3",previous:{title:"25-\u81ea\u52a8\u6253\u5305watch\u547d\u4ee4",permalink:"/zzydoc/docs/js/webpack3/25"},next:{title:"27-\u6253\u5305\u9759\u6001\u8d44\u6e90\u96c6\u4e2d\u7ba1\u7406",permalink:"/zzydoc/docs/js/webpack3/27"}},o={},u=[{value:"ProvidePlugin\u548cimport",id:"provideplugin\u548cimport",level:2},{value:"\u62bd\u79bbJQuery",id:"\u62bd\u79bbjquery",level:2},{value:"\u4fee\u6539\u5165\u53e3\u6587\u4ef6",id:"\u4fee\u6539\u5165\u53e3\u6587\u4ef6",level:3},{value:"\u5f15\u5165\u63d2\u4ef6",id:"\u5f15\u5165\u63d2\u4ef6",level:2},{value:"\u591a\u4e2a\u7b2c\u4e09\u65b9\u7c7b\u5e93\u62bd\u79bb",id:"\u591a\u4e2a\u7b2c\u4e09\u65b9\u7c7b\u5e93\u62bd\u79bb",level:2},{value:"\u4fee\u6539CommonsChunkPlugin\u914d\u7f6e",id:"\u4fee\u6539commonschunkplugin\u914d\u7f6e",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"26-\u7b2c\u4e09\u65b9\u5e93\u62bd\u79bb\u6253\u5305optimize"},"26-\u7b2c\u4e09\u65b9\u5e93\u62bd\u79bb\u6253\u5305optimize"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u7a0b\u5e8f\u5458\uff0c\u65e0\u8bba\u662f\u5199\u4ec0\u4e48\u7a0b\u5e8f\u90fdi\u8981\u6709\u4e00\u9897\u4e0d\u65ad\u4f18\u5316\u7684\u5fc3\u3002webpack\u5728\u4f18\u5316\u8fd9\u6761\u8def\u4e0a\uff0c\u4e5f\u4e3a\u6211\u4eec\u4f5c\u4e86\u5f88\u591a\u914d\u7f6e\uff0c \u6211\u4eec\u5c31\u770b\u770b\u5de5\u4f5c\u4e2d\u5e38\u7528\u7684webpack\u4f18\u5316\u9ed1\u6280\u80fd\u3002"),(0,l.kt)("h2",{id:"provideplugin\u548cimport"},"ProvidePlugin\u548cimport"),(0,l.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u5982\u4f55\u5f15\u5165\u7b2c\u4e09\u65b9\u7c7b\u5e93\uff0c\u5e76\u5f15\u5165\u4e86jquery\uff0c\u5728\u5f15\u7528JQuery\u65f6\u6211\u4eec\u7528\u4e86\u4e24\u79cd\u65b9\u6cd5\uff0c\n\u7b2c\u4e00\u79cd\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"import"),"\uff0c\u7b2c\u4e8c\u79cd\u65f6\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ProvidePlugin"),"\u63d2\u4ef6\u3002\u90a3\u4e24\u79cd\u5f15\u5165\u65b9\u6cd5\u6709\u4ec0\u4e48\u533a\u522b\u90a3?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"import\u5f15\u5165\u65b9\u6cd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f15\u7528\u540e\u4e0d\u7ba1\u4f60\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u4e0d\u9002\u7528\u8be5\u7c7b\u5e93\uff0c\u90fd\u4f1a\u628a\u8be5\u7c7b\u5e93\u6253\u5305\u8d77\u6765\uff0c\u8fd9\u6837\u6709\u65f6\u5c31\u4f1a\u8ba9\u4ee3\u7801\u4ea7\u751f\u5197\u4f59\u3002"))),(0,l.kt)("li",{parentName:"ol"},"ProvidePlugin\u5f15\u5165\u65b9\u6cd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f15\u7528\u540e\u53ea\u6709\u5728\u7c7b\u5e93\u4f7f\u7528\u65f6\uff0c\u624d\u6309\u9700\u8fdb\u884c\u6253\u5305\uff0c\u6240\u4ee5\u5efa\u8bae\u5728\u5de5\u4f5c\u4f7f\u7528\u63d2\u4ef6\u7684\u65b9\u5f0f\u8fdb\u884c\u5f15\u5165\u3002 ")))),(0,l.kt)("h2",{id:"\u62bd\u79bbjquery"},"\u62bd\u79bbJQuery"),(0,l.kt)("p",null,"\u4e0a\u8fb9",(0,l.kt)("inlineCode",{parentName:"p"},"ProvidePlugin"),"\u53ea\u662f\u4f18\u5316\u7684\u7b2c\u4e00\u6b65\uff0c\u5de5\u4f5c\u4e2d\u4f60\u4f1a\u53d1\u73b0\uff0c\u4e0d\u9002\u7528\u7684\u7c7b\u5e93\u51e0\u4e4e\u6211\u4eec\u4e5f\u4e0d\u4f1a\u5f15\u5165\uff0c\n\u6240\u4ee5\u4e0a\u8fb9\u53ea\u662f\u4e00\u4e2a\u5fc5\u8981\u64cd\u4f5c\u7684\u7b2c\u4e00\u6b65\u3002\u90a3\u5f80\u5f80\u628a\u7b2c\u4e09\u65b9\u7c7b\u5e93\u62bd\u79bb\u51fa\u6765\uff0c\u624d\u662f\u6700\u597d\u7684\u89e3\u51b3\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"\u4fee\u6539\u5165\u53e3\u6587\u4ef6"},"\u4fee\u6539\u5165\u53e3\u6587\u4ef6"),(0,l.kt)("p",null,"\u62bd\u79bb\u7684\u7b2c\u4e00\u6b65\u662f\u4fee\u6539\u5165\u53e3\u6587\u4ef6\uff0c\u628a\u6211\u4eec\u7684JQuery\u4e5f\u52a0\u5165\u5230\u5165\u53e3\u6587\u4ef6\u4e2d\uff0c\u770b\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    entry: {\n        entry: './src/entry.js',\n        jquery: 'jquery'\n    },\n}\n")),(0,l.kt)("h2",{id:"\u5f15\u5165\u63d2\u4ef6"},"\u5f15\u5165\u63d2\u4ef6"),(0,l.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5f15\u5165optimize\u4f18\u5316\u63d2\u4ef6\uff0c\u63d2\u4ef6\u91cc\u8fb9\u662f\u9700\u8981\u914d\u7f6e\u7684\uff0c\u5177\u4f53\u914d\u7f6e\u9879\u770b\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/images/webpack3/webpack26_01.png",alt:"1.png"})),(0,l.kt)("p",null,"minChunks\u4e00\u822c\u90fd\u662f\u56fa\u5b9a\u914d\u7f6e\uff0c\u4f46\u662f\u4e0d\u5199\u662f\u4e0d\u884c\u7684\uff0c\u4f60\u4f1a\u6253\u5305\u5931\u8d25\u3002\nfilename\u662f\u53ef\u4ee5\u7701\u7565\u7684\uff0c\u8fd9\u662f\u76f4\u63a5\u6253\u5305\u5230\u4e86\u6253\u5305\u6839\u76ee\u5f55\u4e0b\uff0c\u6211\u4eec\u8fd9\u91cc\u76f4\u63a5\u6253\u5305\u5230\u4e86dist\u6587\u4ef6\u5939\u4e0b\u8fb9\u3002\n\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u5220\u6389\u4ee5\u524d\u6253\u5305\u7684dist\u76ee\u5f55\uff0c\u7136\u540e\u7528webpack\u518d\u6b21\u6253\u5305\uff0c\u4f60\u4f1a\u53d1\u73b0jquery\u88ab\u62bd\u79bb\u4e86\u51fa\u6765\uff0c\u5e76\u4e14\u6211\u4eec\u7684entry.js\u6587\u4ef6\u53d8\u7684\u5f88\u5c0f\u3002"),(0,l.kt)("h2",{id:"\u591a\u4e2a\u7b2c\u4e09\u65b9\u7c7b\u5e93\u62bd\u79bb"},"\u591a\u4e2a\u7b2c\u4e09\u65b9\u7c7b\u5e93\u62bd\u79bb"),(0,l.kt)("p",null,"\u4f1a\u4e86\u5982\u4f55\u62bd\u79bbJquery\uff0c\u4f46\u662f\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u4f1a\u5f15\u7528\u4e0d\u6b62\u4e00\u4e2a\u7b2c\u4e09\u65b9\u7c7b\u5e93\uff0c\u8fd9\u65f6\u4e5f\u9700\u8981\u62bd\u79bb\u3002\u6211\u4eec\u62ff\u5f15\u5165Vue\u4e3a\u4f8b\uff0c\u770b\u770b\u5982\u4f55\u62bd\u79bb\u51fa\u6765\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b65:\u6211\u4eec\u5148\u7528npm \u8fdb\u884c\u5b89\u88c5\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"npm instawll vue --save")),(0,l.kt)("p",null,"\u6ce8\u610f\u8fd9\u91cc\u662f\u2013save\uff0c\u800c\u4e0d\u662f\u2013save-dev\u3002\u56e0\u4e3a\u8fd9\u4e2a\u7c7b\u5e93\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4e5f\u662f\u8981\u4f7f\u7528\u7684\u3002"),(0,l.kt)("p",null,"##\u5728\u5165\u53e3\u914d\u7f6e\u4e2d\u5f15\u5165vue\u548cjquery"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/images/webpack3/webpack26_02.png",alt:"2.png"})),(0,l.kt)("p",null,"\u53ea\u662f\u591a\u6bd4\u4e0a\u8fb9\u591a\u52a0\u4e86\u4e00\u4e2avue\u9009\u9879\u3002"),(0,l.kt)("h2",{id:"\u4fee\u6539commonschunkplugin\u914d\u7f6e"},"\u4fee\u6539CommonsChunkPlugin\u914d\u7f6e"),(0,l.kt)("p",null,"\u9700\u8981\u4fee\u6539\u4e24\u4e2a\u4f4d\u7f6e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u4e2a\u662f\u5728name\u5c5e\u6027\u91cc\u628a\u539f\u6765\u7684\u5b57\u7b26\u4e32\u6539\u4e3a\u6570\u7ec4\uff0c\u56e0\u4e3a\u6211\u4eec\u8981\u5f15\u5165\u591a\u4e2a\u6a21\u5757\uff0c\u6240\u4ee5\u662f\u6570\u7ec4\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u662f\u5728filename\u5c5e\u6027\u4e2d\u628a\u6211\u4eec\u8f93\u51fa\u7684\u6587\u4ef6\u540d\u6539\u4e3a\u5339\u914d\u7b26\u53f7",(0,l.kt)("inlineCode",{parentName:"li"},"[name]"),",\u8fd9\u9879\u64cd\u4f5c\u5c31\u662f\u6253\u5305\u51fa\u6765\u7684\u540d\u5b57\u8ddf\u968f\u6211\u4eec\u6253\u5305\u524d\u7684\u6a21\u5757\u3002\n\u4e0b\u9762\u662f\u6211\u4eec\u4fee\u6539\u7684\u4ee3\u7801\uff0c\u4f60\u53ef\u4ee5\u8ddfjquery\u62bd\u79bb\u65f6\u5bf9\u6bd4\u4e00\u4e0b\u3002\n",(0,l.kt)("img",{parentName:"li",src:"/images/webpack3/webpack26_03.png",alt:"3.png"}))),(0,l.kt)("p",null,"\u914d\u7f6e\u597d\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u8f93\u5165webpack\u8fdb\u884c\u6253\u5305\u4e86\u3002\u4f60\u4f1a\u770b\u5230\u6211\u4eec\u9884\u60f3\u7684\u7ed3\u679c\uff0cjquery\u548cvue\u90fd\u88ab\u6211\u4eec\u62bd\u79bb\u51fa\u6765\u4e86\u3002"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u5f88\u4f7f\u7528\u5f88\u591a\u7b2c\u4e09\u65b9\u7c7b\u5e93\uff0c\u90a3\u597d\u7684\u505a\u6cd5\u5c31\u662f\u628a\u7b2c\u4e09\u65b9\u8fd9\u4e9b\u7c7b\u5e93\u5168\u90e8\u62bd\u79bb\u5904\u7406\uff0c\u8fd9\u6837\u5728\u9879\u76ee\u7ef4\u62a4\u548c\u6027\u80fd\u4e0a\u90fd\u662f\u4e0d\u9519\u7684\u9009\u62e9\u3002\n\u5e0c\u671b\u5b66\u4f1a\u8fd9\u4e2a\u6280\u5de7\u540e\uff0c\u4f60\u4e5f\u80fd\u5728\u5de5\u4f5c\u4e2d\u4f7f\u7528\u4e0a\u3002"))}s.isMDXComponent=!0}}]);