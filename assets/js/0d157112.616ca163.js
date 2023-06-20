"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[2043],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),g=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},i=function(e){var r=g(e.components);return o.createElement(l.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),s=g(t),d=n,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||c;return t?o.createElement(m,p(p({ref:r},i),{},{components:t})):o.createElement(m,p({ref:r},i))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,p=new Array(c);p[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[s]="string"==typeof e?e:n,p[1]=a;for(var g=2;g<c;g++)p[g]=t[g];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25621:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>g});var o=t(87462),n=(t(67294),t(3905));const c={sidebar_position:5},p="rpc\u670d\u52a1\u76ee\u5f55",a={unversionedId:"go-zero/build-tool/rpc-dir",id:"go-zero/build-tool/rpc-dir",title:"rpc\u670d\u52a1\u76ee\u5f55",description:"proto \u6587\u4ef6",source:"@site/docs/go-zero/build-tool/rpc-dir.md",sourceDirName:"go-zero/build-tool",slug:"/go-zero/build-tool/rpc-dir",permalink:"/zzydoc/docs/go-zero/build-tool/rpc-dir",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"GoZero",previous:{title:"\u6784\u5efaRPC",permalink:"/zzydoc/docs/go-zero/build-tool/rpc"},next:{title:"\u6784\u5efaModel",permalink:"/zzydoc/docs/go-zero/build-tool/model"}},l={},g=[{value:"proto \u6587\u4ef6",id:"proto-\u6587\u4ef6",level:2},{value:"goctl rpc proto",id:"goctl-rpc-proto",level:3}],i={toc:g},s="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(s,(0,o.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rpc\u670d\u52a1\u76ee\u5f55"},"rpc\u670d\u52a1\u76ee\u5f55"),(0,n.kt)("h2",{id:"proto-\u6587\u4ef6"},"proto \u6587\u4ef6"),(0,n.kt)("p",null,"greet.proto"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage stream;\n\noption go_package = "./greet";\n\nmessage StreamReq {\n  string name = 1;\n}\n\nmessage StreamResp {\n  string greet = 1;\n}\n\nservice StreamGreeter {\n  rpc greet(StreamReq) returns (StreamResp);\n}\n')),(0,n.kt)("h3",{id:"goctl-rpc-proto"},"goctl rpc proto"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl rpc protoc greet.proto --go_out=. --go-grpc_out=. --zrpc_out=.                                                                                               \n[goctl-env]: preparing to check env\n\n[goctl-env]: looking up "protoc"\n[goctl-env]: "protoc" is installed\n\n[goctl-env]: looking up "protoc-gen-go"\n[goctl-env]: "protoc-gen-go" is installed\n\n[goctl-env]: looking up "protoc-gen-go-grpc"\n[goctl-env]: "protoc-gen-go-grpc" is installed\n\n[goctl-env]: congratulations! your goctl environment is ready!\n[command]: protoc greet.proto --go_out=. --go-grpc_out=.\nDone.\n')),(0,n.kt)("p",null,"\u751f\u6210\u7684\u76ee\u5f55\u7ed3\u6784"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 etc\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet.yaml\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 greet // [1]\n\u2502\xa0\xa0 \u251c\u2500\u2500 greet.pb.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 greet_grpc.pb.go\n\u251c\u2500\u2500 greet.go\n\u251c\u2500\u2500 greet.proto\n\u251c\u2500\u2500 internal\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 config.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 logic\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 greetlogic.go\n\u2502\xa0\xa0 \u251c\u2500\u2500 server\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 streamgreeterserver.go\n\u2502\xa0\xa0 \u2514\u2500\u2500 svc\n\u2502\xa0\xa0     \u2514\u2500\u2500 servicecontext.go\n\u2514\u2500\u2500 streamgreeter\n    \u2514\u2500\u2500 streamgreeter.go\n")),(0,n.kt)("p",null,"[1]"," pb.go & _grpc.pb.go \u6587\u4ef6\u6240\u5728\u76ee\u5f55\u5e76\u975e\u56fa\u5b9a\uff0c\u8be5\u76ee\u5f55\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"go_opt & go-grpc_opt")," \u4e0e proto\u6587\u4ef6\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"go_package")," \u503c\u5171\u540c\u51b3\u5b9a\uff0c\u60f3\u8981\u4e86\u89e3grpc\u4ee3\u7801\u751f\u6210\u76ee\u5f55\u903b\u8f91\u8bf7\u9605\u8bfb ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/reference/go-generated"},"Go Generated Code")))}u.isMDXComponent=!0}}]);