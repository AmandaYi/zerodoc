"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[4580],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,y=u["".concat(i,".").concat(f)]||u[f]||d[f]||l;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={},o="08-JS\u538b\u7f29(Plugin\u63d2\u4ef6)",c={unversionedId:"js/webpack3/08",id:"js/webpack3/08",title:"08-JS\u538b\u7f29(Plugin\u63d2\u4ef6)",description:"\u538b\u7f29JS\u4ee3\u7801\uff1a",source:"@site/docs/js/webpack3/08.md",sourceDirName:"js/webpack3",slug:"/js/webpack3/08",permalink:"/zerodoc/docs/js/webpack3/08",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSWebpack3",previous:{title:"07-Loader\u7684\u4e09\u79cd\u5199\u6cd5",permalink:"/zerodoc/docs/js/webpack3/07"},next:{title:"09-devServer\u548cJS\u538b\u7f29\u51b2\u7a81",permalink:"/zerodoc/docs/js/webpack3/09"}},i={},p=[{value:"\u538b\u7f29JS\u4ee3\u7801\uff1a",id:"\u538b\u7f29js\u4ee3\u7801",level:2},{value:"\u5f15\u5165\uff1a",id:"\u5f15\u5165",level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"\u5b8c\u6574\u7684\u914d\u7f6e",id:"\u5b8c\u6574\u7684\u914d\u7f6e",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"08-js\u538b\u7f29plugin\u63d2\u4ef6"},"08-JS\u538b\u7f29(Plugin\u63d2\u4ef6)"),(0,a.kt)("h2",{id:"\u538b\u7f29js\u4ee3\u7801"},"\u538b\u7f29JS\u4ee3\u7801\uff1a"),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u5199\u7684JS\u4ee3\u7801\uff0c\u5728\u4e0a\u7ebf\u4e4b\u524d\uff0c\u90fd\u662f\u9700\u8981\u8fdb\u884c\u538b\u7f29\u7684\uff0c\u5728\u6ca1\u6709webpack\u548cgulp\u8fd9\u4e9b\u5de5\u5177\u524d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u627e\u4e00\u4e2a\u538b\u7f29\u8f6f\u4ef6\u6216\u8005\u5728\u7ebf\u8fdb\u884c\u538b\u7f29\uff0c\u5728Webpack\u4e2d\u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u5b9e\u73b0JS\u4ee3\u7801\u7684\u538b\u7f29\uff0c\u5b83\u662f\u901a\u8fc7\u63d2\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\u7684\uff0c\u8fd9\u91cc\u6211\u4eec\u5c31\u5148\u6765\u5f15\u5165\u4e00\u4e2auglifyjs-webpack-plugin(JS\u538b\u7f29\u63d2\u4ef6\uff0c\u7b80\u79f0uglify)\u3002\n\u6ce8\u610f\uff1a\u867d\u7136",(0,a.kt)("inlineCode",{parentName:"p"},"uglifyjs"),"\u662f\u63d2\u4ef6\uff0c\u4f46\u662fwebpack\u7248\u672c\u91cc\u9ed8\u8ba4\u5df2\u7ecf\u96c6\u6210\uff0c\u4e0d\u9700\u8981\u518d\u6b21\u5b89\u88c5\u3002"),(0,a.kt)("h2",{id:"\u5f15\u5165"},"\u5f15\u5165\uff1a"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5728webpack.config.js\u4e2d\u5f15\u5165uglifyjs-webpack-glugin\u63d2\u4ef6\n",(0,a.kt)("inlineCode",{parentName:"p"},'const uglify = require("uglifyjs-webpack-plugin")'),"\n\u5f15\u5165\u540e\u5728plugins\u914d\u7f6e\u91ccnew\u4e00\u4e2a uglify\u5bf9\u8c61\u5c31\u53ef\u4ee5\u4e86\uff0c\u4ee3\u7801\u5982\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,a.kt)("p",null,"\u63d2\u4ef6,\u7528\u4e8e\u751f\u4ea7\u6a21\u677f,\u548c\u5404\u9879\u529f\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"    plugins: [new uglify()]\n")),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528webpack\u8fdb\u884c\u6253\u5305\uff0c\u4f60\u4f1a\u53d1\u73b0JS\u4ee3\u7801\u5df2\u7ecf\u88ab\u538b\u7f29\u4e86\u3002\u5982\u679c\u4f60\u7528\u7684VSCode\u7684\u8bdd\uff0c\u53ef\u4ee5\u6309Alt+Z\u8ba9\u4ed6\u6587\u4ef6\u81ea\u52a8\u6362\u884c\uff0c\u67e5\u770b\u6548\u679c\u3002"),(0,a.kt)("h2",{id:"\u5b8c\u6574\u7684\u914d\u7f6e"},"\u5b8c\u6574\u7684\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const path = require("path")\nconst uglify = require("uglifyjs-webpack-plugin")\nmodule.exports = {\n    // \u5165\u53e3\n    entry: "./src/entery.js",\n    // \u51fa\u53e3\n    output: {\n        // \u6253\u5305\u6587\u4ef6\u7684\u8def\u5f84\n        path: path.resolve(__dirname, "./dist"),\n        // \u6253\u5305\u6587\u4ef6\u7684\u540d\u5b57,\u4fee\u6539 //\u8f93\u51fa\u7684\u6587\u4ef6\u540d\u79f0 \n        //[name]\u7684\u610f\u601d\u662f\u6839\u636e\u5165\u53e3\u6587\u4ef6\u7684\u540d\u79f0\uff0c\u6253\u5305\u6210\u76f8\u540c\u7684\u540d\u79f0\uff0c\u6709\u51e0\u4e2a\u5165\u53e3\u6587\u4ef6\uff0c\u5c31\u53ef\u4ee5\u6253\u5305\u51fa\u51e0\u4e2a\u6587\u4ef6\u3002\n        filename: "entery.js"\n    },\n    // \u6a21\u5757,\u4f8b\u5982,\u89e3\u8bfbCSS,\u56fe\u7247\u5982\u4f55\u8f6c\u6362,\u538b\u7f29\n    module: {\n        rules: [\n            {\n                test: /\\.css$/,\n                // \u7b2c\u4e00\u79cd\u5199\u6cd5\n                // use: ["style-loader", "css-loader"],\n                // // \u7b2c\u4e8c\u79cd\u5199\u6cd5\n                // loader: ["style-loader", "css-loader"],\n                // \u7b2c\u4e09\u79cd\u5199\u6cd5\n                use: [{\n                    loader: "style-loader",\n                }, {\n                    loader: "css-loader"\n                }]\n            }\n        ]\n    },\n    // \u63d2\u4ef6,\u7528\u4e8e\u751f\u4ea7\u6a21\u677f,\u548c\u5404\u9879\u529f\u80fd\n    plugins: [new uglify()],\n    // \u914d\u7f6ewebpack\u5f00\u53d1\u670d\u52a1\u529f\u80fd\n    devServer: {\n        //\u8bbe\u7f6e\u57fa\u672c\u76ee\u5f55\u7ed3\u6784\n        contentBase: path.resolve(__dirname, \'dist\'),\n        //\u670d\u52a1\u5668\u7684IP\u5730\u5740\uff0c\u53ef\u4ee5\u4f7f\u7528IP\u4e5f\u53ef\u4ee5\u4f7f\u7528localhost\n        host: \'localhost\',\n        //\u670d\u52a1\u7aef\u538b\u7f29\u662f\u5426\u5f00\u542f\n        compress: true,\n        //\u914d\u7f6e\u670d\u52a1\u7aef\u53e3\u53f7\n        port: 2019\n    }\n}\n')))}d.isMDXComponent=!0}}]);