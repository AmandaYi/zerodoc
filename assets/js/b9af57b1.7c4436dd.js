"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[9989],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),p=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(s.Provider,{value:e},n.children)},l="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,c=n.originalType,s=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),l=p(t),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||c;return t?r.createElement(m,a(a({ref:e},u),{},{components:t})):r.createElement(m,a({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i[l]="string"==typeof n?n:o,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},63425:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const c={displayed_sidebar:"JSNormal"},a="JSONP",i={unversionedId:"js/normal/jsonp",id:"js/normal/jsonp",title:"JSONP",description:"",source:"@site/docs/js/normal/jsonp.md",sourceDirName:"js/normal",slug:"/js/normal/jsonp",permalink:"/zerodoc/docs/js/normal/jsonp",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"JSNormal"},sidebar:"JSNormal",previous:{title:"jQuery\u548czepto\u539f\u578b\u5b9e\u73b0",permalink:"/zerodoc/docs/js/normal/jQueryzepto"},next:{title:"nginx\u8bb0\u4e00\u6b21\u5947\u602a\u7684\u8de8\u57df\u8bf7\u6c42",permalink:"/zerodoc/docs/js/normal/nginx01"}},s={},p=[],u={toc:p},l="wrapper";function d(n){let{components:e,...t}=n;return(0,o.kt)(l,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jsonp"},"JSONP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * \u529f\u80fd\u7c7b\u5e93\n */\n /**\n  * [util \u5de5\u5177\u7c7b]\n  * @type {Object}\n  */\n var util = {};\n\n /**\n  * [function \u8fd4\u56de\u6570\u7ec4\u7684\u6307\u5b9a\u9879]\n  * @param  {[type]} array [description]\n  * @param  {[type]} item  [description]\n  * @return {[type]}       [description]\n  */\n util.indexOf = function (array, item) {\n     for (var i = 0; i < array.length; i++) {\n         if (array[i] === item) {\n             return i;\n         }\n     }\n     return -1;\n };\n\n /**\n  * [function \u5224\u65ad\u662f\u5426\u4e3a\u51fd\u6570]\n  * @param  {[type]} source [description]\n  * @return {[type]}        [description]\n  */\n util.isFunction = function (source) {\n     return '[object Function]' === Object.prototype.toString.call(source);\n };\n\n /**\n  * [isIE \u5224\u65ad\u662f\u4e0d\u662fie]\n  * @return {Boolean} [\u5982\u679c\u662fie\u8fd4\u56de\u7248\u672c\u53f7\uff0c\u4e0d\u662f\u5219\u8fd4\u56defalse]\n  */\n util.isIE = function () {\n     var myNav = navigator.userAgent.toLowerCase();\n     return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;\n };\n\n /**\n  * [function \u5bf9\u8c61\u6d45\u590d\u5236]\n  * @param  {[type]} dst [description]\n  * @param  {[type]} obj [description]\n  * @return {[type]}     [description]\n  */\n util.extend = function (dst, obj) {\n     for (var i in obj) {\n         if (obj.hasOwnProperty(i)) {\n             dst[i] = obj[i];\n         }\n     }\n };\n\n /**\n  * [function \u83b7\u53d6\u4e00\u4e2a\u968f\u673a\u76845\u4f4d\u5b57\u7b26\u4e32]\n  * @param  {[type]} prefix [description]\n  * @return {[type]}        [description]\n  */\n util.getName = function (prefix) {\n     return prefix + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);\n };\n\n /**\n  * [function \u5728\u9875\u9762\u4e2d\u6ce8\u5165js\u811a\u672c]\n  * @param  {[type]} url     [description]\n  * @param  {[type]} charset [description]\n  * @return {[type]}         [description]\n  */\n util.createScript = function (url, charset) {\n     var script = document.createElement('script');\n     script.setAttribute('type', 'text/javascript');\n     charset && script.setAttribute('charset', charset);\n     script.setAttribute('src', url);\n     script.async = true;\n     return script;\n };\n\n /**\n  * [function jsonp]\n  * @param  {[type]} url      [description]\n  * @param  {[type]} onsucess [description]\n  * @param  {[type]} onerror  [description]\n  * @param  {[type]} charset  [description]\n  * @return {[type]}          [description]\n  */\n util.jsonp = function (url, onsuccess, onerror, charset) {\n     var callbackName = util.getName('tt_player');\n     window[callbackName] = function () {\n         if (onsuccess && util.isFunction(onsuccess)) {\n             onsuccess(arguments[0]);\n         }\n     };\n     var script = util.createScript(url + '&callback=' + callbackName, charset);\n     script.onload = script.onreadystatechange = function () {\n         if (!script.readyState || /loaded|complete/.test(script.readyState)) {\n             script.onload = script.onreadystatechange = null;\n             // \u79fb\u9664\u8be5script\u7684 DOM \u5bf9\u8c61\n             if (script.parentNode) {\n                 script.parentNode.removeChild(script);\n             }\n             // \u5220\u9664\u51fd\u6570\u6216\u53d8\u91cf\n             window[callbackName] = null;\n         }\n     };\n     script.onerror = function () {\n         if (onerror && util.isFunction(onerror)) {\n             onerror();\n         }\n     };\n     document.getElementsByTagName('head')[0].appendChild(script);\n };\n\n/**\n * [json \u5b9e\u73b0ajax\u7684json]\n * @param  {[type]} options [description]\n * @return {[type]}         [description]\n */\n util.json = function (options) {\n     var opt = {\n         url: '',\n         type: 'get',\n         data: {},\n         success: function () {},\n         error: function () {},\n     };\n     util.extend(opt, options);\n     if (opt.url) {\n         var xhr = XMLHttpRequest\n            ? new XMLHttpRequest()\n            : new ActiveXObject('Microsoft.XMLHTTP');\n         var data = opt.data,\n             url = opt.url,\n             type = opt.type.toUpperCase(),\n             dataArr = [];\n         for (var k in data) {\n             dataArr.push(k + '=' + data[k]);\n         }\n         if (type === 'GET') {\n             url = url + '?' + dataArr.join('&');\n             xhr.open(type, url.replace(/\\?$/g, ''), true);\n             xhr.send();\n         }\n         if (type === 'POST') {\n             xhr.open(type, url, true);\n             xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');\n             xhr.send(dataArr.join('&'));\n         }\n         xhr.onload = function () {\n             if (xhr.status === 200 || xhr.status === 304) {\n                 var res;\n                 if (opt.success && opt.success instanceof Function) {\n                     res = xhr.responseText;\n                     if (typeof res ==== 'string') {\n                         res = JSON.parse(res);\n                         opt.success.call(xhr, res);\n                     }\n                 }\n             } else {\n                 if (opt.error && opt.error instanceof Function) {\n                     opt.error.call(xhr, res);\n                 }\n             }\n         };\n     }\n };\n\n /**\n  * [function crc32\u52a0\u5bc6]\n  * @param  {[type]} str [description]\n  * @return {[type]}     [description]\n  */\n util.crc32 = function (url) {\n     var a = document.createElement('a');\n     a.href = url;\n     var T = (function () {\n         var c = 0,\n             table = new Array(256);\n         for (var n = 0; n != 256; ++n) {\n             c = n;\n             c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n             c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n             c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n             c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n             c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n             c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n             c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n             c = ((c & 1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n             table[n] = c;\n         }\n         return typeof Int32Array !=== 'undefined' ? new Int32Array(table) : table;\n     })();\n     var crc32_str = function (str) {\n         var C = -1;\n         for (var i = 0, L = str.length, c, d; i < L;) {\n             c = str.charCodeAt(i++);\n             if (c < 0x80) {\n                 C = (C >>> 8) ^ T[(C ^ c) & 0xFF];\n             } else if (c < 0x800) {\n                 C = (C >>> 8) ^ T[(C ^ (192 | ((c >> 6) & 31))) & 0xFF];\n                 C = (C >>> 8) ^ T[(C ^ (128 | (c & 63))) & 0xFF];\n             } else if (c >= 0xD800 && c < 0xE000) {\n                 c = (c & 1023) + 64;\n                 d = str.charCodeAt(i++) & 1023;\n                 C = (C >>> 8) ^ T[(C ^ (240 | ((c >> 8) & 7))) & 0xFF];\n                 C = (C >>> 8) ^ T[(C ^ (128 | ((c >> 2) & 63))) & 0xFF];\n                 C = (C >>> 8) ^ T[(C ^ (128 | ((d >> 6) & 15) | ((c & 3) << 4))) & 0xFF];\n                 C = (C >>> 8) ^ T[(C ^ (128 | (d & 63))) & 0xFF];\n             } else {\n                 C = (C >>> 8) ^ T[(C ^ (224 | ((c >> 12) & 15))) & 0xFF];\n                 C = (C >>> 8) ^ T[(C ^ (128 | ((c >> 6) & 63))) & 0xFF];\n                 C = (C >>> 8) ^ T[(C ^ (128 | (c & 63))) & 0xFF];\n             }\n         }\n         return C ^ -1;\n     };\n     var r = a.pathname + '?r=' + Math.random().toString(10).substring(2);\n     if (r[0] != '/') {\n         r = '/' + r;\n     }\n     var s = crc32_str(r) >>> 0;\n     var is_web = location.protocol.indexOf('http') > -1;\n     return (is_web ? [location.protocol, a.hostname] : ['http:', a.hostname]).join('//') + r + '&s=' + s;\n };\n\n export default util;\n")))}d.isMDXComponent=!0}}]);