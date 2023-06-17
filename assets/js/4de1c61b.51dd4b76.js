"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[5597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=i(n),v=a,m=s["".concat(l,".").concat(v)]||s[v]||f[v]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=v;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},40547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={},c="vue3watch\u7684value\u95ee\u9898",u={unversionedId:"js/vue/vue3watch",id:"js/vue/vue3watch",title:"vue3watch\u7684value\u95ee\u9898",description:"",source:"@site/docs/js/vue/vue3watch.md",sourceDirName:"js/vue",slug:"/js/vue/vue3watch",permalink:"/docs/js/vue/vue3watch",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSVue",previous:{title:"vue3\u7684setup\u7279\u70b9",permalink:"/docs/js/vue/vue3setup"},next:{title:"Vue3\u65b0\u7684\u7ec4\u4ef6",permalink:"/docs/js/vue/vue3components"}},l={},i=[],p={toc:i},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue3watch\u7684value\u95ee\u9898"},"vue3watch\u7684value\u95ee\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"setup(){\n    \n  let name = ref(0);\n  // \u8fd9\u79cd\u4e0d\u9700\u8981\u5199name.value\uff0c\u56e0\u6b64watch\u53d1\u73b0\u662fref\u540e\uff0c\u5176\u5b9e\u662f\u76d1\u542c\u7684RefImpl\uff0c\n  // \u56e0\u6b64\u5f53value\u57fa\u672c\u7c7b\u578b\u6539\u53d8\u540e\uff0c\u5c31\u80fd\u76d1\u542c\u5230\u3002\n  watch(name, ()=> {\n  \n  });\n\n  let obj = ref({\n    a: 1,\n    innerObj: {\n       b: 1\n    }\n  });\n  // \u5982\u679c\u8fd9\u4e48\u76d1\u542c\u7684\u8bdd\uff0c\u662f\u65e0\u6cd5\u76d1\u542c\u5230obj1\u7684\u4efb\u4f55\u53d8\u5316\u3002\n  // \u539f\u56e0\u662f\uff0c\u56e0\u4e3aobj1\u7528ref\u5305\u88f9\u540e\uff0c\u867d\u7136\u5e95\u5c42\u662freactive\u4e8c\u6b21\u5c01\u88c5\uff0c\n  // \u4f46\u662f\u5bf9\u4e8eobj1\u800c\u8a00\uff0c\u6700\u540e\u662fRefImpl\u5b9e\u4f8b\uff0c\u56e0\u6b64RefImple\u4e2d\u7684value\u662fProxy\u5f15\u7528\u5730\u5740\uff0c\n  // \u5bf9\u4e8eProxy\u7684\u5185\u90e8\u53d8\u5316\uff0cwatch\u662f\u65e0\u6cd5\u62ff\u5230\uff0c\u56e0\u4e3awatch\u53d1\u73b0\uff0c\n  // \u81ea\u5df1\u76d1\u542c\u7684ref\uff0c\u8ba4\u4e3aref\u7684\u503c\u662f\u57fa\u672c\u7c7b\u578b\uff0c\n  // \u6240\u4ee5\u624d\u4e0d\u4f1a\u6df1\u5ea6\u5faa\u73af\u76d1\u542c\uff0c\u56e0\u6b64\u4e24\u79cd\u89e3\u51b3\u65b9\u6848\uff0c\u7b2c\u4e00\u662f\uff0c\u8ffd\u52a0\u53c2\u6570deep:true,\n  // \u7b2c\u4e8c\u662f\uff0c\u76f4\u63a5\u6307\u5411obj1.value,\u8fd9\u6837\u5b50\u5f53watch\u53d1\u73b0\u662fProxy\u540e\uff0c\n  // \u53c8\u4f1a\u6309\u7167reactive\u7684\u76d1\u542c\u903b\u8f91\uff0c\u8fdb\u884c\u6df1\u5ea6\u76d1\u542c\u3002\n  watch(obj, () => {\n    \n  },{\n    deep: true\n  })\n\n  watch(obj.innerObj, () => {\n    \n  })\n}\n")))}f.isMDXComponent=!0}}]);