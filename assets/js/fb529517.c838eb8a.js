"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[6444],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,m=s["".concat(u,".").concat(f)]||s[f]||v[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},l="Vue3\u7684ref\u548cReactive\u533a\u522b",o={unversionedId:"js/vue/vue3refvsreactive",id:"js/vue/vue3refvsreactive",title:"Vue3\u7684ref\u548cReactive\u533a\u522b",description:"-  \u4ece\u5b9a\u4e49\u6570\u636e\u89d2\u5ea6\u5bf9\u6bd4\uff1a",source:"@site/docs/js/vue/vue3refvsreactive.md",sourceDirName:"js/vue",slug:"/js/vue/vue3refvsreactive",permalink:"/docs/js/vue/vue3refvsreactive",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSVue",previous:{title:"Vue3\u9879\u76eeTS",permalink:"/docs/js/vue/vue3ts"},next:{title:"vue2\u5b9e\u73b0",permalink:"/docs/js/vue/vue2"}},u={},c=[],p={toc:c},s="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue3\u7684ref\u548creactive\u533a\u522b"},"Vue3\u7684ref\u548cReactive\u533a\u522b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ece\u5b9a\u4e49\u6570\u636e\u89d2\u5ea6\u5bf9\u6bd4\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ref\u7528\u6765\u5b9a\u4e49\uff1a\u57fa\u672c\u7c7b\u578b\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"reactive\u7528\u6765\u5b9a\u4e49\uff1a\u5bf9\u8c61\uff08\u6216\u6570\u7ec4\uff09\u7c7b\u578b\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5907\u6ce8\uff1aref\u4e5f\u53ef\u4ee5\u7528\u6765\u5b9a\u4e49\u5bf9\u8c61\uff08\u6216\u6570\u7ec4\uff09\u7c7b\u578b\u6570\u636e, \u5b83\u5185\u90e8\u4f1a\u81ea\u52a8\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"reactive"),"\u8f6c\u4e3a\u4ee3\u7406\u5bf9\u8c61\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u4ece\u539f\u7406\u89d2\u5ea6\u5bf9\u6bd4\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ref\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"Object.defineProperty()"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"get"),"\u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"set"),"\u6765\u5b9e\u73b0\u54cd\u5e94\u5f0f\uff08\u6570\u636e\u52ab\u6301\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"reactive\u901a\u8fc7\u4f7f\u7528Proxy\u6765\u5b9e\u73b0\u54cd\u5e94\u5f0f\uff08\u6570\u636e\u52ab\u6301\uff09, \u5e76\u901a\u8fc7Reflect\u64cd\u4f5c\u6e90\u5bf9\u8c61\u5185\u90e8\u7684\u6570\u636e\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u4ece\u4f7f\u7528\u89d2\u5ea6\u5bf9\u6bd4\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ref\u5b9a\u4e49\u7684\u6570\u636e\uff1a\u64cd\u4f5c\u6570\u636e\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"li"},".value"),"\uff0c\u8bfb\u53d6\u6570\u636e\u65f6\u6a21\u677f\u4e2d\u76f4\u63a5\u8bfb\u53d6\u4e0d\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"li"},".value"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"reactive\u5b9a\u4e49\u7684\u6570\u636e\uff1a\u64cd\u4f5c\u6570\u636e\u4e0e\u8bfb\u53d6\u6570\u636e\uff1a\u5747\u4e0d\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"li"},".value"),"\u3002")))))}v.isMDXComponent=!0}}]);