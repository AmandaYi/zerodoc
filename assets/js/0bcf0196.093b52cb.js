"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[2015],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?t.createElement(f,c(c({ref:n},s),{},{components:r})):t.createElement(f,c({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34730:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const a={},c="webpack\u6dfb\u52a0\u7248\u6743\u58f0\u660e",i={unversionedId:"js/normal/siteVersion",id:"js/normal/siteVersion",title:"webpack\u6dfb\u52a0\u7248\u6743\u58f0\u660e",description:"BannerPlugin\u63d2\u4ef6",source:"@site/docs/js/normal/siteVersion.md",sourceDirName:"js/normal",slug:"/js/normal/siteVersion",permalink:"/zerodoc/docs/js/normal/siteVersion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSNormal",previous:{title:"python\u8bed\u8a00doc\u8f6c\u7801docx",permalink:"/zerodoc/docs/js/normal/pydoctodoc"},next:{title:"vdom\u5bf9\u8bdd",permalink:"/zerodoc/docs/js/normal/vdom"}},l={},p=[{value:"BannerPlugin\u63d2\u4ef6",id:"bannerplugin\u63d2\u4ef6",level:2}],s={toc:p},u="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(u,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webpack\u6dfb\u52a0\u7248\u6743\u58f0\u660e"},"webpack\u6dfb\u52a0\u7248\u6743\u58f0\u660e"),(0,o.kt)("h2",{id:"bannerplugin\u63d2\u4ef6"},"BannerPlugin\u63d2\u4ef6"),(0,o.kt)("p",null,"\u5728\u5de5\u4f5c\u4e2d\u6bcf\u4e2a\u4eba\u5199\u7684\u4ee3\u7801\u90fd\u8981\u5199\u4e0a\u5907\u6ce8\uff0c\u4e3a\u7684\u5c31\u662f\u5728\u53d1\u751f\u95ee\u9898\u65f6\u53ef\u4ee5\u627e\u5230\u5f53\u65f6\u5199\u4ee3\u7801\u7684\u4eba\u3002\u6709\u65f6\u5019\u4e5f\u7528\u4e8e\u7248\u6743\u58f0\u660e\u3002\n\u8fd9\u4e2a\u63d2\u4ef6\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"BannerPlugin"),"\uff0c\u6211\u4eec\u4f7f\u7528\u540e\u4f1a\u5728JS\u4e2d\u52a0\u4e0a\u6211\u4eec\u7684\u7248\u6743\u6216\u5f00\u53d1\u8005\u58f0\u660e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const webpack = require('webpack');\nmodule.exports = {\n    plugins: [\n        new webpack.BannerPlugin('baby8013.com')\n    ]\n} \n")),(0,o.kt)("p",null,"\u8fd9\u65f6\u5728\u6253\u5305\u540e\u7684\u6587\u4ef6\u5df2\u7ecf\u52a0\u4e0a\u4e86\u7248\u6743\u58f0\u660e\u3002"))}m.isMDXComponent=!0}}]);