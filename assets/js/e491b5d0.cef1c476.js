"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[1058],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));t(79524);const a={},i="\u5e38\u89c1\u7684HOOK\u4ee3\u7801",l={unversionedId:"rsecu/webjs/3_7",id:"rsecu/webjs/3_7",title:"\u5e38\u89c1\u7684HOOK\u4ee3\u7801",description:"Cookie\u76f8\u5173",source:"@site/docs/rsecu/webjs/3_7.mdx",sourceDirName:"rsecu/webjs",slug:"/rsecu/webjs/3_7",permalink:"/zerodoc/docs/rsecu/webjs/3_7",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"Cookie\u76f8\u5173",id:"cookie\u76f8\u5173",level:2},{value:"Header\u76f8\u5173",id:"header\u76f8\u5173",level:2},{value:"URL",id:"url",level:2},{value:"JSON.stringify",id:"jsonstringify",level:2},{value:"JSON.parse",id:"jsonparse",level:2},{value:"eval",id:"eval",level:2},{value:"Function",id:"function",level:2}],s={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u89c1\u7684hook\u4ee3\u7801"},"\u5e38\u89c1\u7684HOOK\u4ee3\u7801"),(0,o.kt)("h2",{id:"cookie\u76f8\u5173"},"Cookie\u76f8\u5173"),(0,o.kt)("p",null,"Cookie Hook \u7528\u4e8e\u5b9a\u4f4d Cookie \u4e2d\u5173\u952e\u53c2\u6570\u751f\u6210\u4f4d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var hook = function() {\n    'use strict';\n    var cookieTemp = '';\n    Object.defineProperty(document, 'cookie', {\n        set: function(val) {\n            if (val.indexOf('_selfWindow') != -1) {\n                debugger;\n            }\n            console.log('Hook\u6355\u83b7\u5230cookie\u8bbe\u7f6e->', val);\n            cookieTemp = val;\n            return val;\n        },\n        get: function() {\n            return cookieTemp;\n        },\n    });\n}\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u4e0d\u505a\u8bb0\u5fc6\uff0c\u8fd9\u662f\u4e00\u79cd\u5f88\u8001\u7684\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(function () {\n    'use strict';\n    var org = document.cookie.__lookupSetter__('cookie');\n    document.__defineSetter__('cookie', function (cookie) {\n        if (cookie.indexOf('_selfWindow') != -1) {\n            debugger;\n        }\n        org = cookie;\n    });\n    document.__defineGetter__('cookie', function () {\n        return org;\n    });\n})();\n")),(0,o.kt)("h2",{id:"header\u76f8\u5173"},"Header\u76f8\u5173"),(0,o.kt)("p",null,"Header Hook \u7528\u4e8e\u5b9a\u4f4d Header \u4e2d\u5173\u952e\u53c2\u6570\u751f\u6210\u4f4d\u7f6e\uff0c\u6bd4\u5982\u5f53 Header \u4e2d\u5305\u542b Authorization \u5173\u952e\u5b57\u65f6\uff0c\u5219\u63d2\u5165\u65ad\u70b9\uff0c\u8fd9\u91cc\u63d2\u5165\u65ad\u70b9\u53ea\u662f\u4e00\u79cd\u8c03\u8bd5\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u505a\u5176\u4ed6\u7684\u4ee3\u7801\u903b\u8f91\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(function () {\n    var org = window.XMLHttpRequest.prototype.setRequestHeader;\n    window.XMLHttpRequest.prototype.setRequestHeader = function (key, value) {\n        if (key == 'Authorization') {\n            debugger;\n        }\n        return org.apply(this, arguments);\n    };\n})();\n\n")),(0,o.kt)("h2",{id:"url"},"URL"),(0,o.kt)("p",null,"URL Hook \u7528\u4e8e\u5b9a\u4f4d\u8bf7\u6c42 URL \u4e2d\u5173\u952e\u53c2\u6570\u751f\u6210\u4f4d\u7f6e,\u4ee5\u4e0b\u4ee3\u7801\u6f14\u793a\u4e86\u5f53\u8bf7\u6c42\u7684 URL \u91cc\u5305\u542b login \u5173\u952e\u5b57\u65f6,\u8fd9\u91cc\u63d2\u5165\u65ad\u70b9\u53ea\u662f\u4e00\u79cd\u8c03\u8bd5\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u505a\u5176\u4ed6\u7684\u4ee3\u7801\u903b\u8f91\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(function () {\n    var open = window.XMLHttpRequest.prototype.open;\n    window.XMLHttpRequest.prototype.open = function (method, url, async) {\n        if (url.indexOf("register") != 1) {\n            debugger;\n        }\n        return open.apply(this, arguments);\n    };\n})();\n')),(0,o.kt)("h2",{id:"jsonstringify"},"JSON.stringify"),(0,o.kt)("p",null,"JSON.stringify() \u65b9\u6cd5\u7528\u4e8e\u5c06 JavaScript \u503c\u8f6c\u6362\u4e3a JSON \u5b57\u7b26\u4e32\uff0c\u5728\u67d0\u4e9b\u7ad9\u70b9\u7684\u52a0\u5bc6\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u9047\u5230\uff0c\u4ee5\u4e0b\u4ee3\u7801\u6f14\u793a\u4e86\u9047\u5230 JSON.stringify() \u65f6\uff0c\u5219\u63d2\u5165\u65ad\u70b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(function() {\n    var stringify = JSON.stringify;\n    JSON.stringify = function(params) {\n        console.log("JSON.stringify", params);\n        debugger;\n        return stringify(params);\n    }\n})();\n')),(0,o.kt)("h2",{id:"jsonparse"},"JSON.parse"),(0,o.kt)("p",null,"\u540c\u4e0a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(function() {\n    var parse = JSON.parse;\n    JSON.parse = function(params) {\n        console.log("JSON.parse", params);\n        debugger;\n        return parse(params);\n    }\n})();\n')),(0,o.kt)("h2",{id:"eval"},"eval"),(0,o.kt)("p",null,"JavaScript eval() \u51fd\u6570\u7684\u4f5c\u7528\u662f\u8ba1\u7b97 JavaScript \u5b57\u7b26\u4e32\uff0c\u5e76\u628a\u5b83\u4f5c\u4e3a\u811a\u672c\u4ee3\u7801\u6765\u6267\u884c\u3002\u5982\u679c\u53c2\u6570\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0ceval() \u51fd\u6570\u5c06\u6267\u884c\u8868\u8fbe\u5f0f\u3002\u5982\u679c\u53c2\u6570\u662f Javascript \u8bed\u53e5\uff0ceval() \u5c06\u6267\u884c Javascript \u8bed\u53e5\uff0c\u7ecf\u5e38\u88ab\u7528\u6765\u52a8\u6001\u6267\u884c JS\u3002\u4ee5\u4e0b\u4ee3\u7801\u6267\u884c\u540e\uff0c\u4e4b\u540e\u6240\u6709\u7684 eval() \u64cd\u4f5c\u90fd\u4f1a\u5728\u63a7\u5236\u53f0\u6253\u5370\u8f93\u51fa\u5c06\u8981\u6267\u884c\u7684 JS \u6e90\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"(function() {\n    // \u4fdd\u5b58\u539f\u59cb\u65b9\u6cd5\n    window.__cr_eval = window.eval;\n    // \u91cd\u5199 eval\n    var myeval = function(src) {\n        console.log(src);\n        console.log(\"=============== eval end ===============\");\n        debugger;\n        return window.__cr_eval(src);\n    }\n    // \u5c4f\u853d JS \u4e2d\u5bf9\u539f\u751f\u51fd\u6570 native \u5c5e\u6027\u7684\u68c0\u6d4b\n    var _myeval = myeval.bind(null);\n    _myeval.toString = window.__cr_eval.toString;\n    Object.defineProperty(window, 'eval', {\n        value: _myeval\n    });\n})();\n")),(0,o.kt)("h2",{id:"function"},"Function"),(0,o.kt)("p",null,"\u540c\u4e0a\uff0c\u5f88\u591a\u65f6\u5019webpack\u6253\u5305\u540e\u7684\u4ee3\u7801\uff0c\u4f1a\u628aFunction\u5c01\u88c5\u7684\u66ff\u6362\u6210eval\uff0c\u6240\u4ee5\u9700\u8981\u76d1\u542cFunction\uff0c\u76d1\u542c\u5230Function\u65f6\uff0c\u518d\u76d1\u542ceval\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u76d1\u542ceval\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'(function() {\n    // \u4fdd\u5b58\u539f\u59cb\u65b9\u6cd5\n    window.__cr_fun = window.Function;\n    // \u91cd\u5199 function\n    var myfun = function() {\n        var args = Array.prototype.slice.call(arguments, 0, -1).join(","),\n            src = arguments[arguments.length - 1];\n        console.log(src);\n        console.log("=============== Function end ===============");\n        debugger;\n        return window.__cr_fun.apply(this, arguments);\n    }\n    // \u5c4f\u853djs\u4e2d\u5bf9\u539f\u751f\u51fd\u6570native\u5c5e\u6027\u7684\u68c0\u6d4b\n    myfun.toString = function() {\n        return window.__cr_fun + ""\n    }\n    Object.defineProperty(window, \'Function\', {\n        value: myfun\n    });\n})();\n')))}d.isMDXComponent=!0}}]);