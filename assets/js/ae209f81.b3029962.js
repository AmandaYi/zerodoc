"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[8741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(m,l(l({ref:t},g),{},{components:r})):n.createElement(m,l({ref:t},g))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66193:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:3},l="\u6784\u5efaAPI\u670d\u52a1",i={unversionedId:"go-zero/quick-start/build-api",id:"go-zero/quick-start/build-api",title:"\u6784\u5efaAPI\u670d\u52a1",description:"\u521b\u5efagreet\u670d\u52a1",source:"@site/docs/go-zero/quick-start/build-api.md",sourceDirName:"go-zero/quick-start",slug:"/go-zero/quick-start/build-api",permalink:"/zzydoc/docs/go-zero/quick-start/build-api",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"GoZero",previous:{title:"\u6784\u5efa\u5de5\u5177",permalink:"/zzydoc/docs/go-zero/quick-start/build-tool"},next:{title:"\u6784\u5efaRPC\u670d\u52a1",permalink:"/zzydoc/docs/go-zero/quick-start/build-rpc"}},c={},p=[{value:"\u521b\u5efagreet\u670d\u52a1",id:"\u521b\u5efagreet\u670d\u52a1",level:3},{value:"\u7f16\u5199\u903b\u8f91",id:"\u7f16\u5199\u903b\u8f91",level:3},{value:"\u542f\u52a8\u5e76\u8bbf\u95ee\u670d\u52a1",id:"\u542f\u52a8\u5e76\u8bbf\u95ee\u670d\u52a1",level:3},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:3}],g={toc:p},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6784\u5efaapi\u670d\u52a1"},"\u6784\u5efaAPI\u670d\u52a1"),(0,o.kt)("h3",{id:"\u521b\u5efagreet\u670d\u52a1"},"\u521b\u5efagreet\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo\n$ go mod init go-zero-demo\n$ goctl api new greet\nDone.\n")),(0,o.kt)("p",null,"\u67e5\u770b\u4e00\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"greet"),"\u670d\u52a1\u7684\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd greet\n$ tree\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet-api.yaml\n\u251c\u2500\u2500 greet.api\n\u251c\u2500\u2500 greet.go\n\u2514\u2500\u2500 internal\n    \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2514\u2500\u2500 config.go\n    \u251c\u2500\u2500 handler\n    \u2502\xa0\xa0 \u251c\u2500\u2500 greethandler.go\n    \u2502\xa0\xa0 \u2514\u2500\u2500 routes.go\n    \u251c\u2500\u2500 logic\n    \u2502\xa0\xa0 \u2514\u2500\u2500 greetlogic.go\n    \u251c\u2500\u2500 svc\n    \u2502\xa0\xa0 \u2514\u2500\u2500 servicecontext.go\n    \u2514\u2500\u2500 types\n        \u2514\u2500\u2500 types.go\n")),(0,o.kt)("p",null,"\u7531\u4ee5\u4e0a\u76ee\u5f55\u7ed3\u6784\u53ef\u4ee5\u89c2\u5bdf\u5230\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"greet"),'\u670d\u52a1\u867d\u5c0f\uff0c\u4f46"\u4e94\u810f\u4ff1\u5168"\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u53ef\u4ee5\u5728',(0,o.kt)("inlineCode",{parentName:"p"},"greetlogic.go"),"\u4e2d\u7f16\u5199\u4e1a\u52a1\u4ee3\u7801\u4e86\u3002"),(0,o.kt)("h3",{id:"\u7f16\u5199\u903b\u8f91"},"\u7f16\u5199\u903b\u8f91"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="$ vim ~/go-zero-demo/greet/internal/logic/greetlogic.go"',title:'"$',vim:!0,'~/go-zero-demo/greet/internal/logic/greetlogic.go"':!0},'func (l *GreetLogic) Greet(req types.Request) (*types.Response, error) {\n    return &types.Response{\n        Message: "Hello go-zero",\n    }, nil\n}\n')),(0,o.kt)("h3",{id:"\u542f\u52a8\u5e76\u8bbf\u95ee\u670d\u52a1"},"\u542f\u52a8\u5e76\u8bbf\u95ee\u670d\u52a1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u542f\u52a8\u670d\u52a1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~/go-zero-demo/greet\n$ go run greet.go -f etc/greet-api.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Starting server at 0.0.0.0:8888...\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u670d\u52a1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -i -X GET \\\n  http://localhost:8888/from/you\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'HTTP/1.1 200 OK\nContent-Type: application/json\nDate: Sun, 07 Feb 2021 04:31:25 GMT\nContent-Length: 27\n\n{"message":"Hello go-zero"}\n')),(0,o.kt)("h3",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/go-zero-demo/tree/master/greet"},"greet\u6e90\u7801")))}s.isMDXComponent=!0}}]);