"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[9388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||p;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const p={},o="05-\u914d\u7f6e\u6587\u4ef6\uff1a\u670d\u52a1\u548c\u70ed\u66f4\u65b0",i={unversionedId:"js/webpack3/05",id:"js/webpack3/05",title:"05-\u914d\u7f6e\u6587\u4ef6\uff1a\u670d\u52a1\u548c\u70ed\u66f4\u65b0",description:"\u8bbe\u7f6ewebpack-dev-server",source:"@site/docs/js/webpack3/05.md",sourceDirName:"js/webpack3",slug:"/js/webpack3/05",permalink:"/zerodoc/docs/js/webpack3/05",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSWebpack3",previous:{title:"04-\u914d\u7f6e\u6587\u4ef6\uff1a\u5165\u53e3\u548c\u51fa\u53e3",permalink:"/zerodoc/docs/js/webpack3/04"},next:{title:"06-CSS\u6587\u4ef6\u6253\u5305\uff08Loaders\uff09",permalink:"/zerodoc/docs/js/webpack3/06"}},c={},l=[{value:"\u8bbe\u7f6ewebpack-dev-server",id:"\u8bbe\u7f6ewebpack-dev-server",level:2}],s={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"05-\u914d\u7f6e\u6587\u4ef6\u670d\u52a1\u548c\u70ed\u66f4\u65b0"},"05-\u914d\u7f6e\u6587\u4ef6\uff1a\u670d\u52a1\u548c\u70ed\u66f4\u65b0"),(0,a.kt)("h2",{id:"\u8bbe\u7f6ewebpack-dev-server"},"\u8bbe\u7f6ewebpack-dev-server"),(0,a.kt)("p",null,"\u8981\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),"\u662f\u8981\u5148\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"npm install webpack-dev-server \u2013save-dev"),"\u6765\u8fdb\u884c\u4e0b\u8f7d\u7684\u3002\n\u4e0b\u8f7d\u597d\u540e\uff0c\u9700\u8981\u914d\u7f6e\u4e00\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"devServer"),"\u3002\u6700\u7b80\u5355\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"devServer"),"\u914d\u7f6e\u9879\u53ea\u6709\u56db\u4e2a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst path = require("path")\nmodule.exports = {\n    // \u5165\u53e3\n    entry: "./src/entery.js",\n    // \u51fa\u53e3\n    output: {\n        // \u6253\u5305\u6587\u4ef6\u7684\u8def\u5f84\n        path: path.resolve(__dirname, "./dist"),\n        // \u6253\u5305\u6587\u4ef6\u7684\u540d\u5b57,\u4fee\u6539 //\u8f93\u51fa\u7684\u6587\u4ef6\u540d\u79f0 \n        //[name]\u7684\u610f\u601d\u662f\u6839\u636e\u5165\u53e3\u6587\u4ef6\u7684\u540d\u79f0\uff0c\u6253\u5305\u6210\u76f8\u540c\u7684\u540d\u79f0\uff0c\u6709\u51e0\u4e2a\u5165\u53e3\u6587\u4ef6\uff0c\u5c31\u53ef\u4ee5\u6253\u5305\u51fa\u51e0\u4e2a\u6587\u4ef6\u3002\n        filename: "entery.js"\n    },\n    // \u6a21\u5757,\u4f8b\u5982,\u89e3\u8bfbCSS,\u56fe\u7247\u5982\u4f55\u8f6c\u6362,\u538b\u7f29\n    module: {},\n    // \u63d2\u4ef6,\u7528\u4e8e\u751f\u4ea7\u6a21\u677f,\u548c\u5404\u9879\u529f\u80fd\n    plugins: [],\n    // \u914d\u7f6ewebpack\u5f00\u53d1\u670d\u52a1\u529f\u80fd\n    devServer: {\n        //\u8bbe\u7f6e\u57fa\u672c\u76ee\u5f55\u7ed3\u6784\n        contentBase: path.resolve(__dirname, \'dist\'),\n        //\u670d\u52a1\u5668\u7684IP\u5730\u5740\uff0c\u53ef\u4ee5\u4f7f\u7528IP\u4e5f\u53ef\u4ee5\u4f7f\u7528localhost\n        host: \'localhost\',\n        //\u670d\u52a1\u7aef\u538b\u7f29\u662f\u5426\u5f00\u542f\n        compress: true,\n        //\u914d\u7f6e\u670d\u52a1\u7aef\u53e3\u53f7\n        port: 2019\n    }\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"contentBase:\u914d\u7f6e\u670d\u52a1\u5668\u57fa\u672c\u8fd0\u884c\u8def\u5f84\uff0c\u7528\u4e8e\u627e\u5230\u7a0b\u5e8f\u6253\u5305\u5730\u5740\u3002"),(0,a.kt)("li",{parentName:"ul"},"host\uff1a\u670d\u52a1\u8fd0\u884c\u5730\u5740\uff0c\u5efa\u8bae\u4f7f\u7528\u672c\u673aIP\uff0c\u8fd9\u91cc\u4e3a\u4e86\u8bb2\u89e3\u65b9\u4fbf\uff0c\u6240\u4ee5\u7528localhost\u3002"),(0,a.kt)("li",{parentName:"ul"},"compress\uff1a\u670d\u52a1\u5668\u7aef\u538b\u7f29\u9009\u578b\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3a\u5f00\u542f\uff0c\u5982\u679c\u4f60\u5bf9\u670d\u52a1\u5668\u538b\u7f29\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u81ea\u884c\u5b66\u4e60\u3002"),(0,a.kt)("li",{parentName:"ul"},"port\uff1a\u670d\u52a1\u8fd0\u884c\u7aef\u53e3\uff0c\u5efa\u8bae\u4e0d\u4f7f\u752880\uff0c\u5f88\u5bb9\u6613\u88ab\u5360\u7528\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e862019.")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u8fd9\u91cc\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"npm")," \u6765\u8fdb\u884c\u5b89\u88c5",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),"\u4e86\uff0c \u547d\u4ee4\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install webpack-dev-server@3 --save-dev"),"\n\u8fd9\u662f\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e0b\u4f7f\u7528\uff0c\u6240\u4ee5\u5b89\u88c5\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"\u2013save-dev"),"\u3002\n\u914d\u7f6e\u597d\u540e\uff0c\u4f60\u53ef\u4ee5\u8bd5\u7740\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),",\u5982\u679c\u53ef\u4ee5\u6267\u884c\u6210\u529f\uff0c\u4f46\u662f\u5f80\u5f80\u63d0\u793a\u4e0b\u9762\u7684\u9519\u8bef\uff08\u6216\u8005\u662f\u65e0\u6cd5\u627e\u5230\u5185\u90e8\u6216\u5916\u90e8\u547d\u4ee4\uff09\u3002\n\u51fa\u73b0\u4e0b\u9762\u7684\u9519\u8bef\u4e0d\u7528\u614c\u5f20\uff0c\u6211\u4eec\u53ea\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"\u91cc\u914d\u7f6e\u4e00\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"scripts"),"\u9009\u9879\u5c31\u53ef\u4ee5\u6267\u884c\u4e86\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n    "name": "webpack_demo",\n    "version": "1.0.0",\n    "description": "",\n    "main": "index.js",\n    "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "server": "webpack-dev-server --open"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "devDependencies": {\n        "webpack": "^3.12.0",\n        "webpack-cli": "^3.2.1",\n        "webpack-dev-server": "^3.0.0"\n    }\n}\n')),(0,a.kt)("p",null,"\u914d\u7f6e\u597d\u4fdd\u5b58\u540e\uff0c\u5728\u7ec8\u7aef\u91cc\u8f93\u5165\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"npm run server"),"\xa0\u6253\u5f00\u670d\u52a1\u5668\u3002\u7136\u540e\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\n",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:2019"),"\n\u652f\u6301\u70ed\u66f4\u65b0\n\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"npm run server")," \u542f\u52a8\u540e\uff0c\u5b83\u662f\u6709\u4e00\u79cd\u76d1\u63a7\u673a\u5236\u7684\uff08\u4e5f\u53eb",(0,a.kt)("inlineCode",{parentName:"p"},"watch"),"\uff09\u3002\u5b83\u53ef\u4ee5\u76d1\u63a7\u5230\u6211\u4eec\u4fee\u6539\u6e90\u7801\uff0c\u5e76\u7acb\u5373\u5728\u6d4f\u89c8\u5668\u91cc\u7ed9\u6211\u4eec\u66f4\u65b0\u3002\n\u6ce8\u610f\uff1a\u8fd9\u91cc\u53ea\u662f\u6211\u4eec\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"webpack3.6"),"\u7248\u672c\u652f\u6301\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"3.5"),"\u7248\u672c\u65f6\u8981\u652f\u6301\u70ed\u66f4\u65b0\u8fd8\u9700\u8981\u4e00\u4e9b\u5176\u4ed6\u7684\u64cd\u4f5c\u3002\u56e0\u4e3a\u5df2\u7ecf\u6709\u4e86\u6210\u719f\u76843.6\u7248\u672c\uff0c\u6211\u5c31\u4e0d\u518d\u4ecb\u7ecd\u4f4e\u7248\u672c\u7684\u64cd\u4f5c\u65b9\u6cd5\u3002\u8fd8\u6709\u4e00\u79cd\u60c5\u51b5\u3002\n\u5982\u679c\u4f60\u90fd\u8bbe\u7f6e\u597d\u4e86\uff0c\u4f46\u662f\u4e0d\u8fdb\u884c\u70ed\u66f4\u65b0\uff0c\u53ef\u80fd\u662f\u4f60\u7cfb\u7edf\u7684\u95ee\u9898\uff0c\u5728Linux\u548cMa\u4e0a\u652f\u6301\u826f\u597d\uff0c\u5728Windows\u4e0a\u6709\u65f6\u4f1a\u51fa\u73b0\u95ee\u9898\u3002"))}u.isMDXComponent=!0}}]);