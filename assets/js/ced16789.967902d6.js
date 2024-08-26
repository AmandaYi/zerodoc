"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[8873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},i="JWT\u9274\u6743\u4e2d\u95f4\u4ef6",c={unversionedId:"go-zero/extension/jwt-middleware",id:"go-zero/extension/jwt-middleware",title:"JWT\u9274\u6743\u4e2d\u95f4\u4ef6",description:"\u4f7f\u7528JWT\u4e2d\u95f4\u4ef6",source:"@site/docs/go-zero/extension/jwt-middleware.md",sourceDirName:"go-zero/extension",slug:"/go-zero/extension/jwt-middleware",permalink:"/zerodoc/docs/go-zero/extension/jwt-middleware",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"GoZero",previous:{title:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f(jwt\u9274\u6743)",permalink:"/zerodoc/docs/go-zero/extension/get-jwt-info"},next:{title:"\u5fae\u670d\u52a1\u5f00\u53d1\u6d41\u7a0b",permalink:"/zerodoc/docs/go-zero/extension/micro-service"}},l={},s=[{value:"example",id:"example",level:2},{value:"add prevSecret",id:"add-prevsecret",level:2},{value:"\u81ea\u5b9a\u4e49\u9274\u6743\u5931\u8d25\u56de\u8c03\u51fd\u6570",id:"\u81ea\u5b9a\u4e49\u9274\u6743\u5931\u8d25\u56de\u8c03\u51fd\u6570",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jwt\u9274\u6743\u4e2d\u95f4\u4ef6"},"JWT\u9274\u6743\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"\u4f7f\u7528JWT\u4e2d\u95f4\u4ef6"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "flag"\n    "net/http"\n\n    "github.com/zeromicro/go-zero/core/conf"\n    "github.com/zeromicro/go-zero/example/graceful/etcd/api/config"\n    "github.com/zeromicro/go-zero/rest"\n)\n\nvar configFile = flag.String("f", "etc/graceful-api.json", "the config file")\n\nfunc main() {\n    flag.Parse()\n \n    var c config.Config\n    conf.MustLoad(*configFile, &c)\n    \n    engine := rest.MustNewServer(c.RestConf)\n    defer engine.Stop()\n\n    engine.AddRoute(rest.Route{\n        Method:  http.MethodGet,\n        Path:    "/",\n        Handler: func(writer http.ResponseWriter, request *http.Request) {\n            //do something\n        },\n  },rest.WithJwt("your secret")) //Change to your own jwt secret\n    engine.Start()\n}\n')),(0,o.kt)("h2",{id:"add-prevsecret"},"add prevSecret"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'engine.AddRoute(rest.Route{\n        Method:  http.MethodGet,\n        Path:    "/",\n        Handler: func(writer http.ResponseWriter, request *http.Request) {\n            //do something\n        },\n    },rest.WithJwtTransition("your secret","your prevSecret")) //Change to your own jwt secret and prevSecret\n')),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u9274\u6743\u5931\u8d25\u56de\u8c03\u51fd\u6570"},"\u81ea\u5b9a\u4e49\u9274\u6743\u5931\u8d25\u56de\u8c03\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"engine := rest.MustNewServer(c.RestConf,rest.WithUnauthorizedCallback(func(w http.ResponseWriter, r *http.Request, err error) {\n        // your custom callback function\n}))\n")))}d.isMDXComponent=!0}}]);