"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[1847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},g=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),m=c(a),s=o,d=m["".concat(i,".").concat(s)]||m[s]||u[s]||l;return a?n.createElement(d,r(r({ref:t},g),{},{components:a})):n.createElement(d,r({ref:t},g))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:o,r[1]=p;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},66565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const l={sidebar_position:0},r="\u51c6\u5907\u5de5\u4f5c",p={unversionedId:"go-zero/project/prepare",id:"go-zero/project/prepare",title:"\u51c6\u5907\u5de5\u4f5c",description:"\u5728\u6b63\u5f0f\u8fdb\u5165\u5b9e\u9645\u5f00\u53d1\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4e00\u4e9b\u51c6\u5907\u5de5\u4f5c\uff0c\u6bd4\u5982\uff1aGo\u73af\u5883\u7684\u5b89\u88c5\uff0cgrpc\u4ee3\u7801\u751f\u6210\u4f7f\u7528\u7684\u5de5\u5177\u5b89\u88c5\uff0c \u5fc5\u5907\u5de5\u5177Goctl\u7684\u5b89\u88c5\uff0cGolang\u73af\u5883\u914d\u7f6e\u7b49",source:"@site/docs/go-zero/project/prepare.md",sourceDirName:"go-zero/project",slug:"/go-zero/project/prepare",permalink:"/zerodoc/docs/go-zero/project/prepare",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"GoZero",next:{title:"\u5f00\u53d1\u89c4\u8303",permalink:"/zerodoc/docs/go-zero/project/specification"}},i={},c=[{value:"Golang\u73af\u5883\u5b89\u88c5",id:"golang\u73af\u5883\u5b89\u88c5",level:2},{value:"\u5b98\u65b9\u6587\u6863",id:"\u5b98\u65b9\u6587\u6863",level:3},{value:"mac OS\u5b89\u88c5Go",id:"mac-os\u5b89\u88c5go",level:3},{value:"linux \u5b89\u88c5Go",id:"linux-\u5b89\u88c5go",level:3},{value:"Windows\u5b89\u88c5Go",id:"windows\u5b89\u88c5go",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"Go Module\u8bbe\u7f6e",id:"go-module\u8bbe\u7f6e",level:2},{value:"Go Module\u4ecb\u7ecd",id:"go-module\u4ecb\u7ecd",level:3},{value:"MODULE\u914d\u7f6e",id:"module\u914d\u7f6e",level:3},{value:"Goctl\u5b89\u88c5",id:"goctl\u5b89\u88c5",level:2},{value:"\u5b89\u88c5(mac&amp;linux)",id:"\u5b89\u88c5maclinux",level:3},{value:"protoc &amp; protoc-gen-go\u5b89\u88c5",id:"protoc--protoc-gen-go\u5b89\u88c5",level:2},{value:"protoc\u5b89\u88c5",id:"protoc\u5b89\u88c5",level:3},{value:"protoc-gen-go \u5b89\u88c5",id:"protoc-gen-go-\u5b89\u88c5",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6-1",level:2}],g={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u5728\u6b63\u5f0f\u8fdb\u5165\u5b9e\u9645\u5f00\u53d1\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4e00\u4e9b\u51c6\u5907\u5de5\u4f5c\uff0c\u6bd4\u5982\uff1aGo\u73af\u5883\u7684\u5b89\u88c5\uff0cgrpc\u4ee3\u7801\u751f\u6210\u4f7f\u7528\u7684\u5de5\u5177\u5b89\u88c5\uff0c \u5fc5\u5907\u5de5\u5177Goctl\u7684\u5b89\u88c5\uff0cGolang\u73af\u5883\u914d\u7f6e\u7b49"),(0,o.kt)("h2",{id:"golang\u73af\u5883\u5b89\u88c5"},"Golang\u73af\u5883\u5b89\u88c5"),(0,o.kt)("p",null,"\u5f00\u53d1golang\u7a0b\u5e8f\uff0c\u5fc5\u7136\u5c11\u4e0d\u4e86\u5bf9\u5176\u73af\u5883\u7684\u5b89\u88c5\uff0c\u6211\u4eec\u8fd9\u91cc\u9009\u62e9\u4ee51.15.1\u4e3a\u4f8b\u3002"),(0,o.kt)("h3",{id:"\u5b98\u65b9\u6587\u6863"},"\u5b98\u65b9\u6587\u6863"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://golang.google.cn/doc/install"},"https://golang.google.cn/doc/install")),(0,o.kt)("h3",{id:"mac-os\u5b89\u88c5go"},"mac OS\u5b89\u88c5Go"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5",(0,o.kt)("a",{parentName:"li",href:"https://dl.google.com/go/go1.15.1.darwin-amd64.pkg"},"Go for Mac")),(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.15.1 darwin/amd64\n")))),(0,o.kt)("h3",{id:"linux-\u5b89\u88c5go"},"linux \u5b89\u88c5Go"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/go1.15.8.linux-amd64.tar.gz"},"Go for Linux")),(0,o.kt)("li",{parentName:"ul"},"\u89e3\u538b\u538b\u7f29\u5305\u81f3",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tar -C /usr/local -xzf go1.15.8.linux-amd64.tar.gz\n"))),(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/go/bin"),"\u5230\u73af\u5883\u53d8\u91cf",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ $HOME/.profile\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:/usr/local/go/bin\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ source $HOME/.profile\n"))),(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.15.1 linux/amd64\n")))),(0,o.kt)("h3",{id:"windows\u5b89\u88c5go"},"Windows\u5b89\u88c5Go"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"li",href:"https://golang.org/dl/go1.15.8.windows-amd64.msi"},"Go for Windows")),(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go version\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.15.1 windows/amd64\n")))),(0,o.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,o.kt)("p",null,"\u66f4\u591a\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"https://golang.org/dl/")),(0,o.kt)("h2",{id:"go-module\u8bbe\u7f6e"},"Go Module\u8bbe\u7f6e"),(0,o.kt)("h3",{id:"go-module\u4ecb\u7ecd"},"Go Module\u4ecb\u7ecd"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Modules are how Go manages dependencies.","[1]")),(0,o.kt)("p",null,"\u5373Go Module\u662fGolang\u7ba1\u7406\u4f9d\u8d56\u6027\u7684\u65b9\u5f0f\uff0c\u50cfJava\u4e2d\u7684Maven\uff0cAndroid\u4e2d\u7684Gradle\u7c7b\u4f3c\u3002"),(0,o.kt)("h3",{id:"module\u914d\u7f6e"},"MODULE\u914d\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u67e5\u770b",(0,o.kt)("inlineCode",{parentName:"p"},"GO111MODULE"),"\u5f00\u542f\u60c5\u51b5"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go env GO111MODULE\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"on\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5f00\u542f",(0,o.kt)("inlineCode",{parentName:"p"},"GO111MODULE"),"\uff0c\u5982\u679c\u5df2\u5f00\u542f\uff08\u5373\u6267\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"go env GO111MODULE"),"\u7ed3\u679c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"on"),"\uff09\u8bf7\u8df3\u8fc7\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ go env -w GO111MODULE="on"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8bbe\u7f6eGOPROXY"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go env -w GOPROXY=https://goproxy.cn\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8bbe\u7f6eGOMODCACHE"),(0,o.kt)("p",{parentName:"li"},"  \u67e5\u770bGOMODCACHE"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go env GOMODCACHE\n")),(0,o.kt)("p",{parentName:"li"},"  \u5982\u679c\u76ee\u5f55\u4e0d\u4e3a\u7a7a\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/null"),"\uff0c\u8bf7\u8df3\u8fc7\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go env -w GOMODCACHE=$GOPATH/pkg/mod\n")))),(0,o.kt)("h2",{id:"goctl\u5b89\u88c5"},"Goctl\u5b89\u88c5"),(0,o.kt)("p",null,"Goctl\u5728go-zero\u9879\u76ee\u5f00\u53d1\u7740\u6709\u7740\u5f88\u5927\u7684\u4f5c\u7528\uff0c\u5176\u53ef\u4ee5\u6709\u6548\u7684\u5e2e\u52a9\u5f00\u53d1\u8005\u5927\u5927\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u51cf\u5c11\u4ee3\u7801\u7684\u51fa\u9519\u7387\uff0c\u7f29\u77ed\u4e1a\u52a1\u5f00\u53d1\u7684\u5de5\u4f5c\u91cf,\n\u5728\u8fd9\u91cc\u6211\u4eec\u5f3a\u70c8\u63a8\u8350\u5927\u5bb6\u5b89\u88c5\uff0c\u56e0\u4e3a\u540e\u7eed\u6f14\u793a\u4f8b\u5b50\u4e2d\u6211\u4eec\u5927\u90e8\u5206\u90fd\u4f1a\u4ee5goctl\u8fdb\u884c\u6f14\u793a\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5maclinux"},"\u5b89\u88c5(mac&linux)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"download&install"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Go 1.15 \u53ca\u4e4b\u524d\u7248\u672c\nGO111MODULE=on GOPROXY=https://goproxy.cn/,direct go get -u github.com/zeromicro/go-zero/tools/goctl@latest\n\n# Go 1.16 \u53ca\u4ee5\u540e\u7248\u672c\nGOPROXY=https://goproxy.cn/,direct go install github.com/zeromicro/go-zero/tools/goctl@latest\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u73af\u5883\u53d8\u91cf\u68c0\u6d4b"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"go get"),"\u4e0b\u8f7d\u7f16\u8bd1\u540e\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),"\u76ee\u5f55\u4e0b\uff0c\u8981\u786e\u4fdd",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),"\u5df2\u7ecf\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo vim /etc/paths\n")),(0,o.kt)("p",null,"\u5728\u6700\u540e\u4e00\u884c\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$GOPATH/bin\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH"),"\u4e3a\u4f60\u672c\u673a\u4e0a\u7684\u6587\u4ef6\u5730\u5740 ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u7ed3\u679c\u9a8c\u8bc1")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl -v\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"goctl version 1.1.4 darwin/amd64\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"windows\u7528\u6237\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u8bf7\u81ea\u884cgoogle")),(0,o.kt)("h2",{id:"protoc--protoc-gen-go\u5b89\u88c5"},"protoc & protoc-gen-go\u5b89\u88c5"),(0,o.kt)("p",null,"protoc\u662f\u4e00\u6b3e\u7528C++\u7f16\u5199\u7684\u5de5\u5177\uff0c\u5176\u53ef\u4ee5\u5c06proto\u6587\u4ef6\u7ffb\u8bd1\u4e3a\u6307\u5b9a\u8bed\u8a00\u7684\u4ee3\u7801\u3002\u5728go-zero\u7684\u5fae\u670d\u52a1\u4e2d\uff0c\u6211\u4eec\u91c7\u7528grpc\u8fdb\u884c\u670d\u52a1\u95f4\u7684\u901a\u4fe1\uff0c\u800cgrpc\u7684\u7f16\u5199\u5c31\u9700\u8981\u7528\u5230protoc\u548c\u7ffb\u8bd1\u6210go\u8bed\u8a00rpc stub\u4ee3\u7801\u7684\u63d2\u4ef6protoc-gen-go\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u6f14\u793a\u73af\u5883"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mac OS"),(0,o.kt)("li",{parentName:"ul"},"protoc 3.14.0")),(0,o.kt)("h3",{id:"protoc\u5b89\u88c5"},"protoc\u5b89\u88c5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fdb\u5165",(0,o.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf/releases"},"protobuf release")," \u9875\u9762\uff0c\u9009\u62e9\u9002\u5408\u81ea\u5df1\u64cd\u4f5c\u7cfb\u7edf\u7684\u538b\u7f29\u5305\u6587\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u89e3\u538b",(0,o.kt)("inlineCode",{parentName:"li"},"protoc-3.14.0-osx-x86_64.zip"),"\u5e76\u8fdb\u5165",(0,o.kt)("inlineCode",{parentName:"li"},"protoc-3.14.0-osx-x86_64"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd protoc-3.14.0-osx-x86_64/bin\n"))),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u542f\u52a8\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"protoc"),"\u4e8c\u8fdb\u5236\u6587\u4ef6\u79fb\u52a8\u5230\u88ab\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u7684\u4efb\u610fpath\u4e0b\uff0c\u5982",(0,o.kt)("inlineCode",{parentName:"li"},"$GOPATH/bin"),"\uff0c\u8fd9\u91cc\u4e0d\u5efa\u8bae\u76f4\u63a5\u5c06\u5176\u548c\u7cfb\u7edf\u7684\u4ee5\u4e0bpath\u653e\u5728\u4e00\u8d77\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mv protoc $GOPATH/bin\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"$GOPATH\u4e3a\u4f60\u672c\u673a\u7684\u5b9e\u9645\u6587\u4ef6\u5939\u5730\u5740")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ protoc --version\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"libprotoc 3.14.0\n")))),(0,o.kt)("h3",{id:"protoc-gen-go-\u5b89\u88c5"},"protoc-gen-go \u5b89\u88c5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5b89\u88c5",(0,o.kt)("inlineCode",{parentName:"p"},"protoc-gen-go")),(0,o.kt)("p",{parentName:"li"},"\u5982\u679cgoctl \u7248\u672c\u5df2\u7ecf\u662f1.2.1\u4ee5\u540e\u4e86\uff0c\u53ef\u4ee5\u5ffd\u7565\u6b64\u6b65\u9aa4\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ go get -u github.com/golang/protobuf/protoc-gen-go@v1.3.2\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"go: found github.com/golang/protobuf/protoc-gen-go in github.com/golang/protobuf v1.4.3\ngo: google.golang.org/protobuf upgrade => v1.25.0\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5c06protoc-gen-go\u79fb\u52a8\u5230\u88ab\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u7684\u4efb\u610fpath\u4e0b\uff0c\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),"\uff0c\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"go get"),"\u540e\u7684\u4e8c\u8fdb\u5236\u672c\u8eab\u5c31\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),"\u76ee\u5f55\u4e2d\uff0c\u56e0\u6b64\u53ea\u8981\u786e\u4fdd\u4f60\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),"\u5728\u73af\u5883\u53d8\u91cf\u5373\u53ef\u3002"))),(0,o.kt)("h2",{id:"\u5176\u4ed6-1"},"\u5176\u4ed6"),(0,o.kt)("p",null,"\u5728\u4e4b\u524d\u6211\u4eec\u5df2\u7ecf\u5bf9Go\u73af\u5883\u3001Go Module\u914d\u7f6e\u3001Goctl\u3001protoc&protoc-gen-go\u5b89\u88c5\u51c6\u5907\u5c31\u7eea\uff0c\u8fd9\u4e9b\u662f\u5f00\u53d1\u4eba\u5458\u5728\u5f00\u53d1\u9636\u6bb5\u5fc5\u987b\u8981\u51c6\u5907\u7684\u73af\u5883\uff0c\u800c\u63a5\u4e0b\u6765\u7684\u73af\u5883\u4f60\u53ef\u4ee5\u9009\u62e9\u6027\u7684\u5b89\u88c5\uff0c \u56e0\u4e3a\u8fd9\u4e9b\u73af\u5883\u4e00\u822c\u5b58\u5728\u4e8e\u670d\u52a1\u5668\uff08\u5b89\u88c5\u5de5\u4f5c\u8fd0\u7ef4\u4f1a\u66ff\u4f60\u5b8c\u6210\uff09\uff0c\u4f46\u662f\u4e3a\u4e86\u540e\u7eed\u6f14\u793a\u6d41\u7a0b\u80fd\u591f\u5b8c\u6574\u8d70\u4e0b\u53bb\uff0c\u6211\u5efa\u8bae\u5927\u5bb6\u5728\u672c\u5730\u4e5f\u5b89\u88c5\u4e00\u4e0b\uff0c\u56e0\u4e3a\u6211\u4eec\u7684\u6f14\u793a\u73af\u5883\u5927\u90e8\u5206\u4f1a\u4ee5\u672c\u5730\u4e3a\u4e3b\u3002 \u4ee5\u4e0b\u4ec5\u7ed9\u51fa\u4e86\u9700\u8981\u7684\u51c6\u5907\u5de5\u4f5c\uff0c\u4e0d\u4ee5\u6587\u6863\u7bc7\u5e45\u4f5c\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/docs/current/rfc/v3api/"},"etcd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redis.io/"},"redis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"mysql"))))}u.isMDXComponent=!0}}]);