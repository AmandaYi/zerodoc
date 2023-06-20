"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[8596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=l(n),v=o,d=c["".concat(a,".").concat(v)]||c[v]||m[v]||s;return n?r.createElement(d,p(p({ref:t},i),{},{components:n})):r.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,p=new Array(s);p[0]=v;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[c]="string"==typeof e?e:o,p[1]=u;for(var l=2;l<s;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},14506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={},p="vue3\u7684setup\u7279\u70b9",u={unversionedId:"js/vue/vue3setup",id:"js/vue/vue3setup",title:"vue3\u7684setup\u7279\u70b9",description:"setup\u6267\u884c\u7684\u65f6\u673a",source:"@site/docs/js/vue/vue3setup.md",sourceDirName:"js/vue",slug:"/js/vue/vue3setup",permalink:"/zzydoc/docs/js/vue/vue3setup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSVue",previous:{title:"Vue3\u7b14\u8bb0",permalink:"/zzydoc/docs/js/vue/vue3base"},next:{title:"vue3watch\u7684value\u95ee\u9898",permalink:"/zzydoc/docs/js/vue/vue3watch"}},a={},l=[{value:"setup\u6267\u884c\u7684\u65f6\u673a",id:"setup\u6267\u884c\u7684\u65f6\u673a",level:2},{value:"setup\u7684\u53c2\u6570",id:"setup\u7684\u53c2\u6570",level:2}],i={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vue3\u7684setup\u7279\u70b9"},"vue3\u7684setup\u7279\u70b9"),(0,o.kt)("h2",{id:"setup\u6267\u884c\u7684\u65f6\u673a"},"setup\u6267\u884c\u7684\u65f6\u673a"),(0,o.kt)("p",null,"\u5728beforeCreate\u4e4b\u524d\u6267\u884c\u4e00\u6b21\uff0cthis\u662fundefined\u3002"),(0,o.kt)("h2",{id:"setup\u7684\u53c2\u6570"},"setup\u7684\u53c2\u6570"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"props\uff1a\u503c\u4e3a\u5bf9\u8c61\uff0c\u5305\u542b\uff1a\u7ec4\u4ef6\u5916\u90e8\u4f20\u9012\u8fc7\u6765\uff0c\u4e14\u7ec4\u4ef6\u5185\u90e8\u58f0\u660e\u63a5\u6536\u4e86\u7684\u5c5e\u6027\u3002"),(0,o.kt)("li",{parentName:"ol"},"context\uff1a\u4e0a\u4e0b\u6587\u5bf9\u8c61",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"attrs: \u503c\u4e3a\u5bf9\u8c61\uff0c\u5305\u542b\uff1a\u7ec4\u4ef6\u5916\u90e8\u4f20\u9012\u8fc7\u6765\uff0c\u4f46\u6ca1\u6709\u5728props\u914d\u7f6e\u4e2d\u58f0\u660e\u7684\u5c5e\u6027, \u76f8\u5f53\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"this.$attrs"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"slots: \u6536\u5230\u7684\u63d2\u69fd\u5185\u5bb9, \u76f8\u5f53\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"this.$slots"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"emit: \u5206\u53d1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u7684\u51fd\u6570, \u76f8\u5f53\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"this.$emit"),"\u3002\u4e00\u5b9a\u8981\u5148\u58f0\u660e",(0,o.kt)("inlineCode",{parentName:"li"},"emits"),"\u3002")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <TestWithSetup @setupDiyEvent="diyEvent" title="vue3">\n    <template v-slot:version>\n      <span>3.xxxxxx</span>\n    </template>\n  </TestWithSetup>\n</template>\n\n<script>\nimport TestWithSetup from "./components/TestWithSetup";\nexport default {\n  name: "App",\n  components: { TestWithSetup },\n  setup() {\n    function diyEvent(value) {\n      console.log("value: ", value);\n    }\n    return {\n      diyEvent,\n    };\n  },\n};\n<\/script>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>{{ title }}</div>\n  <button @click="test">\u70b9\u6211\u8c03\u7528context.emit("setupDiyEvent")</button>\n</template>\n\n<script>\nexport default {\n  name: "TestWithSetup",\n  props: ["title"],\n  emits: ["setupDiyEvent"],\n  setup(props, context) {\n    console.log("setup: ", props);\n    console.log("setup: ", context);\n    console.log("setup: ", context.attrs); // \u76f8\u5f53\u4e8evue2\u4e2d\u7684$attrs,attrs\u7684\u610f\u601d\u662f\u5982\u679cprops\u6ca1\u6709\u58f0\u660e\uff0c\u90a3\u4e48\u4f1a\u628a\u5bf9\u5e94\u7684\u672a\u5728props\u58f0\u660e\u7684\u5b57\u6bb5\uff0c\u5b58\u5230attrs\u91cc\u9762\u3002\n    console.log("setup: ", context.emit); // \u76f8\u5f53\u4e8evue2\u4e2d\u7684this.$emit()\uff0c\u7528\u4e8e\u89e6\u53d1\u81ea\u5b9a\u4e49\u4e8b\u4ef6\n    console.log("setup: ", context.slots); // \u76f8\u5f53\u4e8evue2\u7684\u63d2\u69fd\u5c5e\u6027this.slots\n    const test = () => {\n      context.emit("setupDiyEvent", 100);\n    };\n    return { test };\n  },\n};\n<\/script>\n')))}m.isMDXComponent=!0}}]);