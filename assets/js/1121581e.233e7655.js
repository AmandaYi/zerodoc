"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[8098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},i),{},{components:r})):n.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s="17-CSS\u4e2d\u81ea\u52a8\u52a0\u5c5e\u6027\u524d\u7f00PostCSS",l={unversionedId:"js/webpack3/17",id:"js/webpack3/17",title:"17-CSS\u4e2d\u81ea\u52a8\u52a0\u5c5e\u6027\u524d\u7f00PostCSS",description:"\u4ec0\u4e48\u662f\u5c5e\u6027\u524d\u7f00",source:"@site/docs/js/webpack3/17.md",sourceDirName:"js/webpack3",slug:"/js/webpack3/17",permalink:"/zerodoc/docs/js/webpack3/17",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSWebpack3",previous:{title:"16-CSS\u4e2dLess\u6587\u4ef6\u6253\u5305\u548c\u5206\u79bb",permalink:"/zerodoc/docs/js/webpack3/16"},next:{title:"18-CSS\u4e2d\u53bb\u9664\u672a\u4f7f\u7528\u6837\u5f0f",permalink:"/zerodoc/docs/js/webpack3/18"}},p={},c=[{value:"\u4ec0\u4e48\u662f\u5c5e\u6027\u524d\u7f00",id:"\u4ec0\u4e48\u662f\u5c5e\u6027\u524d\u7f00",level:2},{value:"PostCSS",id:"postcss",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7f16\u5199loader",id:"\u7f16\u5199loader",level:2},{value:"\u63d0\u53d6CSS\u4e2d\u7684\u5199\u6cd5",id:"\u63d0\u53d6css\u4e2d\u7684\u5199\u6cd5",level:2}],i={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"17-css\u4e2d\u81ea\u52a8\u52a0\u5c5e\u6027\u524d\u7f00postcss"},"17-CSS\u4e2d\u81ea\u52a8\u52a0\u5c5e\u6027\u524d\u7f00PostCSS"),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5c5e\u6027\u524d\u7f00"},"\u4ec0\u4e48\u662f\u5c5e\u6027\u524d\u7f00"),(0,o.kt)("p",null,"\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e0b\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"\ndiv {\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n\n")),(0,o.kt)("p",null,"\u4e3a\u4e86\u6d4f\u89c8\u5668\u7684\u517c\u5bb9\u6027\uff0c\u6709\u65f6\u5019\u6211\u4eec\u5fc5\u987b\u52a0\u5165-webkit,-ms,-o,-moz\u8fd9\u4e9b\u524d\u7f00\u3002\u76ee\u7684\u5c31\u662f\u8ba9\u6211\u4eec\u5199\u7684\u9875\u9762\u5728\u6bcf\u4e2a\u6d4f\u89c8\u5668\u4e2d\u90fd\u53ef\u4ee5\u987a\u5229\u8fd0\u884c\u3002"),(0,o.kt)("h2",{id:"postcss"},"PostCSS"),(0,o.kt)("p",null,"PostCSS\u662f\u4e00\u4e2aCSS\u7684\u5904\u7406\u5e73\u53f0\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u7684CSS\u5b9e\u73b0\u66f4\u591a\u7684\u529f\u80fd\uff0c\u4f46\u662f\u4eca\u5929\u6211\u4eec\u5c31\u901a\u8fc7\u5176\u4e2d\u7684\u4e00\u4e2a\u52a0\u524d\u7f00\u7684\u529f\u80fd\uff0c\u521d\u6b65\u4e86\u89e3\u4e00\u4e0bPostCSS\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"\u9700\u8981\u5b89\u88c5\u4e24\u4e2a\u5305postcss-loader \u548cautoprefixer\uff08\u81ea\u52a8\u6dfb\u52a0\u524d\u7f00\u7684\u63d2\u4ef6\uff09"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm install --save-dev postcss-loader autoprefixer")),(0,o.kt)("p",null,"postCSS\u63a8\u8350\u5728\u9879\u76ee\u6839\u76ee\u5f55\uff08\u548cwebpack.config.js\u540c\u7ea7\uff09\uff0c\u5efa\u7acb\u4e00\u4e2apostcss.config.js\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    plugins: [\n        require('autoprefixer')\n    ]\n}\n")),(0,o.kt)("p",null,"\u8fd9\u5c31\u662f\u5bf9postCSS\u4e00\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\uff0c\u5f15\u5165\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"autoprefixer"),"\u63d2\u4ef6\u3002\u8ba9postCSS\u62e5\u6709\u6dfb\u52a0\u524d\u7f00\u7684\u80fd\u529b\uff0c\u5b83\u4f1a\u6839\u636e ",(0,o.kt)("inlineCode",{parentName:"p"},"can i use"),"\u7f51\u7ad9 \u6765\u589e\u52a0\u76f8\u5e94\u7684css3\u5c5e\u6027\u524d\u7f00\u3002"),(0,o.kt)("h2",{id:"\u7f16\u5199loader"},"\u7f16\u5199loader"),(0,o.kt)("p",null,"\u5bf9postcss.config.js\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u7f16\u5199\u6211\u4eec\u7684loader\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    test: /\\.css$/,\n    use: [\n        {\n            loader: "style-loader"\n        }, {\n            loader: "css-loader",\n            options: {\n            modules: true\n            }\n        }, {\n            loader: "postcss-loader"\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"\u63d0\u53d6css\u4e2d\u7684\u5199\u6cd5"},"\u63d0\u53d6CSS\u4e2d\u7684\u5199\u6cd5"),(0,o.kt)("p",null,"\u914d\u7f6e\u63d0\u53d6CSS\u7684loader\u914d\u7f6e."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/images/webpack3/webpack17_01.png",alt:"3.png"})))}d.isMDXComponent=!0}}]);