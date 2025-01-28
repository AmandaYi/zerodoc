"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[7636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(n),k=a,b=s["".concat(l,".").concat(k)]||s[k]||m[k]||o;return n?r.createElement(b,p(p({ref:t},u),{},{components:n})):r.createElement(b,p({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},65526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},p="27-\u6253\u5305\u9759\u6001\u8d44\u6e90\u96c6\u4e2d\u7ba1\u7406",c={unversionedId:"js/webpack3/27",id:"js/webpack3/27",title:"27-\u6253\u5305\u9759\u6001\u8d44\u6e90\u96c6\u4e2d\u7ba1\u7406",description:"\u4fdd\u7559\u56fe\u7247\u7b49\u9759\u6001\u8d44\u6e90\uff0c\u76f4\u63a5\u6253\u5305\u5230\u56fa\u5b9a\u7684\u6587\u4ef6\u5939",source:"@site/docs/js/webpack3/27.md",sourceDirName:"js/webpack3",slug:"/js/webpack3/27",permalink:"/zerodoc/docs/js/webpack3/27",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSWebpack3",previous:{title:"26-\u7b2c\u4e09\u65b9\u5e93\u62bd\u79bb\u6253\u5305optimize",permalink:"/zerodoc/docs/js/webpack3/26"},next:{title:"28-JS\u4e2d\u4f7f\u7528JSON",permalink:"/zerodoc/docs/js/webpack3/28"}},l={},i=[{value:"\u5b89\u88c5copy-webpack-plugin",id:"\u5b89\u88c5copy-webpack-plugin",level:2},{value:"\u5f15\u5165",id:"\u5f15\u5165",level:2}],u={toc:i},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"27-\u6253\u5305\u9759\u6001\u8d44\u6e90\u96c6\u4e2d\u7ba1\u7406"},"27-\u6253\u5305\u9759\u6001\u8d44\u6e90\u96c6\u4e2d\u7ba1\u7406"),(0,a.kt)("p",null,"\u4fdd\u7559\u56fe\u7247\u7b49\u9759\u6001\u8d44\u6e90\uff0c\u76f4\u63a5\u6253\u5305\u5230\u56fa\u5b9a\u7684\u6587\u4ef6\u5939"),(0,a.kt)("h2",{id:"\u5b89\u88c5copy-webpack-plugin"},"\u5b89\u88c5copy-webpack-plugin"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install --save-dev copy-webpack-plugin")),(0,a.kt)("h2",{id:"\u5f15\u5165"},"\u5f15\u5165"),(0,a.kt)("p",null,"\u5b89\u88c5\u597d\u540e\uff0c\u9700\u8981\u5728webpack.config.js\u6587\u4ef6\u7684\u5934\u90e8\u5f15\u5165\u8fd9\u4e2a\u63d2\u4ef6\u624d\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u63d2\u4ef6\uff0c\u4fdd\u7559\u9759\u6001\u8d44\u6e90\u5230\u6307\u5b9a\u7684\u6587\u4ef6\u5939\u91cc\u9762\uff0c\u4f7f\u7528\u63d2\u4ef6copyWebpackPlugin\nconst copyWebpackPlugin = require("copy-webpack-plugin")\n')),(0,a.kt)("p",null,"\u914d\u7f6e\u63d2\u4ef6\n\u5f15\u5165\u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u5728plugins\u91cc\u8fb9\u8fdb\u884c\u914d\u7f6e\u63d2\u4ef6\u4e86\uff0c\u6211\u4eec\u5148\u770b\u4e0b\u9762\u7684\u63d2\u4ef6\u914d\u7f6e\u4ee3\u7801\uff0c\u7136\u540e\u518d\u8fdb\u884c\u8be6\u7ec6\u8bb2\u89e3\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/images/webpack3/webpack27_01.png",alt:"1.png"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"from",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8981\u6253\u5305\u7684\u9759\u6001\u8d44\u6e90\u76ee\u5f55\u5730\u5740\uff0c\u8fd9\u91cc\u7684__dirname\u662f\u6307\u9879\u76ee\u76ee\u5f55\u4e0b\uff0c\u662fnode\u7684\u4e00\u79cd\u8bed\u6cd5\uff0c\u53ef\u4ee5\u76f4\u63a5\u5b9a\u4f4d\u5230\u672c\u673a\u7684\u9879\u76ee\u76ee\u5f55\u4e2d\u3002"))),(0,a.kt)("li",{parentName:"ol"},"to\n-\u8981\u6253\u5305\u5230\u7684\u6587\u4ef6\u5939\u8def\u5f84\uff0c\u8ddf\u968foutput\u914d\u7f6e\u4e2d\u7684\u76ee\u5f55\u3002\u6240\u4ee5\u4e0d\u9700\u8981\u518d\u81ea\u5df1\u52a0__dirname\u3002")),(0,a.kt)("p",null,"\u914d\u7f6e\u597d\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528webpack \u8fdb\u884c\u6253\u5305\u4e86\uff0c\u4f60\u4f1a\u53d1\u73b0\u56fe\u7247\u6309\u7167\u6211\u4eec\u7684\u914d\u7f6e\u6253\u5305\u5230\u4e86\u6307\u5b9a\u7684\u6587\u4ef6\u5939\u3002"))}m.isMDXComponent=!0}}]);