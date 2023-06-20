"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[3539],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={displayed_sidebar:"JSNormal"},i="\u4e00\u4e2anodejs\u5c40\u57df\u7f51\u670d\u52a1\u5668",c={unversionedId:"js/normal/node_server",id:"js/normal/node_server",title:"\u4e00\u4e2anodejs\u5c40\u57df\u7f51\u670d\u52a1\u5668",description:"",source:"@site/docs/js/normal/node_server.md",sourceDirName:"js/normal",slug:"/js/normal/node_server",permalink:"/zzydoc/docs/js/normal/node_server",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"JSNormal"},sidebar:"JSNormal",previous:{title:"nginx\u8bb0\u4e00\u6b21\u5947\u602a\u7684\u8de8\u57df\u8bf7\u6c42",permalink:"/zzydoc/docs/js/normal/nginx01"},next:{title:"\u524d\u7aef\u5b9e\u73b0pdf\u6253\u5370\u529f\u80fd\uff08JS\uff09",permalink:"/zzydoc/docs/js/normal/printfpdf"}},l={},s=[],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e00\u4e2anodejs\u5c40\u57df\u7f51\u670d\u52a1\u5668"},"\u4e00\u4e2anodejs\u5c40\u57df\u7f51\u670d\u52a1\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u542f\u52a8\u8ba1\u65f6\u5668\uff0c\u8bb0\u5f55\u542f\u52a8\u670d\u52a1\u6240\u82b1\u8d39\u7684\u65f6\u95f4\nconsole.time(\'start WebServer need time\');\n\n//\u8bf7\u6c42\u6a21\u5757 \nconst libHttp = require(\'http\');  //HTTP\u534f\u8bae\u6a21\u5757 \nconst libUrl = require(\'url\');    //URL\u89e3\u6790\u6a21\u5757 \nconst libFs = require("fs");      //\u6587\u4ef6\u7cfb\u7edf\u6a21\u5757 \nconst libPath = require("path");  //\u8def\u5f84\u89e3\u6790\u6a21\u5757 \n\n//\u4f9d\u636e\u8def\u5f84\u83b7\u53d6\u8fd4\u56de\u5185\u5bb9\u7c7b\u578b\u5b57\u7b26\u4e32,\u7528\u4e8ehttp\u54cd\u5e94\u5934 \nvar funGetContentType = function (filePath) {\n    let contentType = "";\n    \n    //\u4f7f\u7528\u8def\u5f84\u89e3\u6790\u6a21\u5757\u83b7\u53d6\u6587\u4ef6\u6269\u5c55\u540d \n    let ext = libPath.extname(filePath);\n    \n    switch (ext) {\n        case ".html":\n            contentType = "text/html";\n            break;\n        case ".htm":\n            contentType = "text/html";\n        break;\n        case ".js":\n            contentType = "text/javascript";\n            break;\n        case ".css":\n            contentType = "text/css";\n            break;\n        case ".gif":\n            contentType = "image/gif";\n            break;\n        case ".jpg":\n            contentType = "image/jpeg";\n            break;\n        case ".png":\n            contentType = "image/png";\n            break;\n        case ".ico":\n            contentType = "image/icon";\n            break;\n        default:\n            contentType = "application/octet-stream";\n    }\n    \n    //\u8fd4\u56de\u5185\u5bb9\u7c7b\u578b\u5b57\u7b26\u4e32 \n    return contentType;\n}\n\n//Web\u670d\u52a1\u5668\u4e3b\u51fd\u6570,\u89e3\u6790\u8bf7\u6c42,\u8fd4\u56deWeb\u5185\u5bb9 \nconst funWebSvr = function (req, res) {\n    //\u83b7\u53d6\u8bf7\u6c42\u7684url \n    let reqUrl = req.url;\n    \n    //\u5411\u63a7\u5236\u53f0\u8f93\u51fa\u8bf7\u6c42\u7684\u8def\u5f84 \n    console.log(reqUrl);\n    \n    //\u4f7f\u7528url\u89e3\u6790\u6a21\u5757\u83b7\u53d6url\u4e2d\u7684\u8def\u5f84\u540d \n    let pathName = libUrl.parse(reqUrl).pathname;    \n    if (libPath.extname(pathName) === "") {\n        //\u5982\u679c\u8def\u5f84\u6ca1\u6709\u6269\u5c55\u540d \n        pathName += "/"; //\u6307\u5b9a\u8bbf\u95ee\u76ee\u5f55 \n    }\n    if (pathName.charAt(pathName.length - 1) === "/") {\n        //\u5982\u679c\u8bbf\u95ee\u76ee\u5f55 \n        pathName += "index.html"; //\u6307\u5b9a\u4e3a\u9ed8\u8ba4\u7f51\u9875 \n    }\n    \n    //\u4f7f\u7528\u8def\u5f84\u89e3\u6790\u6a21\u5757,\u7ec4\u88c5\u5b9e\u9645\u6587\u4ef6\u8def\u5f84 \n    let filePath = libPath.join("./", pathName);\n    \n    //\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728 \n    libFs.exists(filePath, function (exists) {\n        //\u6587\u4ef6\u5b58\u5728\n        if (exists) {\n            //\u5728\u54cd\u5e94\u5934\u4e2d\u5199\u5165\u5185\u5bb9\u7c7b\u578b \n            res.writeHead(200, { "Content-Type": funGetContentType(filePath) });\n            \n            //\u521b\u5efa\u53ea\u8bfb\u6d41\u7528\u4e8e\u8fd4\u56de \n            let stream = libFs.createReadStream(filePath, { flags: "r", encoding: null });\n            \n            //\u6307\u5b9a\u5982\u679c\u6d41\u8bfb\u53d6\u9519\u8bef,\u8fd4\u56de404\u9519\u8bef \n            stream.on("error", function () {\n                res.writeHead(404);\n                res.end("<h1>404 Read Error</h1>");\n            });\n            \n            //\u8fde\u63a5\u6587\u4ef6\u6d41\u548chttp\u8fd4\u56de\u6d41\u7684\u7ba1\u9053,\u7528\u4e8e\u8fd4\u56de\u5b9e\u9645Web\u5185\u5bb9 \n            stream.pipe(res);\n        }\n        else {\n            //\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u8fd4\u56de404\u9519\u8bef \n            res.writeHead(404, { "Content-Type": "text/html" });\n            res.end("<h1>404 Not Found</h1>");\n        }\n    });\n}\n\n//\u521b\u5efa\u4e00\u4e2ahttp\u670d\u52a1\u5668 \nconst webSvr = libHttp.createServer(funWebSvr);\n\n//\u6307\u5b9a\u670d\u52a1\u5668\u9519\u8bef\u4e8b\u4ef6\u54cd\u5e94 \nwebSvr.on("error", function (error) {\n    //\u5728\u63a7\u5236\u53f0\u4e2d\u8f93\u51fa\u9519\u8bef\u4fe1\u606f \n    console.log(error); \n});\n\n//\u5f00\u59cb\u4fa6\u542c8888\u7aef\u53e3 \nwebSvr.listen(8888, function () {\n    //\u5411\u63a7\u5236\u53f0\u8f93\u51fa\u670d\u52a1\u542f\u52a8\u7684\u4fe1\u606f \n    console.log(\'WebServer running at http://127.0.0.1:8888/\');\n    \n    //\u5173\u95ed\u670d\u52a1\u542f\u52a8\u8ba1\u65f6\u5668\n    console.timeEnd(\'start WebServer need time\');\n});\n')))}m.isMDXComponent=!0}}]);