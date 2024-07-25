"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[4859],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return t?o.createElement(g,s(s({ref:n},p),{},{components:t})):o.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={sidebar_position:3},s="\u914d\u7f6e\u4ecb\u7ecd",a={unversionedId:"go-zero/project/config",id:"go-zero/project/config",title:"\u914d\u7f6e\u4ecb\u7ecd",description:"\u5728\u6b63\u5f0f\u4f7f\u7528go-zero\u4e4b\u524d\uff0c\u8ba9\u6211\u4eec\u5148\u6765\u4e86\u89e3\u4e00\u4e0bgo-zero\u4e2d\u4e0d\u540c\u670d\u52a1\u7c7b\u578b\u7684\u914d\u7f6e\u5b9a\u4e49\uff0c\u770b\u770b\u914d\u7f6e\u4e2d\u6bcf\u4e2a\u5b57\u6bb5\u5206\u522b\u6709\u4ec0\u4e48\u4f5c\u7528",source:"@site/docs/go-zero/project/config.md",sourceDirName:"go-zero/project",slug:"/go-zero/project/config",permalink:"/zerodoc/docs/go-zero/project/config",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"GoZero",previous:{title:"\u5f00\u53d1\u6d41\u7a0b",permalink:"/zerodoc/docs/go-zero/project/process"},next:{title:"\u4e1a\u52a1\u5f00\u53d1",permalink:"/zerodoc/docs/go-zero/project/business"}},l={},c=[{value:"api\u914d\u7f6e",id:"api\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:3},{value:"Config",id:"config",level:4},{value:"rest.RestConf",id:"restrestconf",level:4},{value:"service.ServiceConf",id:"serviceserviceconf",level:4},{value:"logx.LogConf",id:"logxlogconf",level:4},{value:"prometheus.Config",id:"prometheusconfig",level:4},{value:"SignatureConf",id:"signatureconf",level:4},{value:"PrivateKeyConf",id:"privatekeyconf",level:4},{value:"cache.CacheConf",id:"cachecacheconf",level:4},{value:"redis.RedisConf",id:"redisredisconf",level:4},{value:"rpc\u914d\u7f6e",id:"rpc\u914d\u7f6e",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e-1",level:3},{value:"zrpc.RpcServerConf",id:"zrpcrpcserverconf",level:4},{value:"discov.EtcdConf",id:"discovetcdconf",level:4},{value:"redis.RedisKeyConf",id:"redisrediskeyconf",level:4}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u914d\u7f6e\u4ecb\u7ecd"},"\u914d\u7f6e\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u5728\u6b63\u5f0f\u4f7f\u7528go-zero\u4e4b\u524d\uff0c\u8ba9\u6211\u4eec\u5148\u6765\u4e86\u89e3\u4e00\u4e0bgo-zero\u4e2d\u4e0d\u540c\u670d\u52a1\u7c7b\u578b\u7684\u914d\u7f6e\u5b9a\u4e49\uff0c\u770b\u770b\u914d\u7f6e\u4e2d\u6bcf\u4e2a\u5b57\u6bb5\u5206\u522b\u6709\u4ec0\u4e48\u4f5c\u7528"),(0,r.kt)("h2",{id:"api\u914d\u7f6e"},"api\u914d\u7f6e"),(0,r.kt)("p",null,"api\u914d\u7f6e\u63a7\u5236\u7740api\u670d\u52a1\u4e2d\u7684\u5404\u79cd\u529f\u80fd\uff0c\u5305\u542b\u4f46\u4e0d\u9650\u4e8e\u670d\u52a1\u76d1\u542c\u5730\u5740\uff0c\u7aef\u53e3\uff0c\u73af\u5883\u914d\u7f6e\uff0c\u65e5\u5fd7\u914d\u7f6e\u7b49\uff0c\u4e0b\u9762\u6211\u4eec\u4ece\u4e00\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\u6765\u770b\u4e00\u4e0bapi\u4e2d\u5e38\u7528\u914d\u7f6e\u5206\u522b\u6709\u4ec0\u4e48\u4f5c\u7528\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e"},"\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("p",null,"\u901a\u8fc7yaml\u914d\u7f6e\u6211\u4eec\u4f1a\u53d1\u73b0\uff0c\u6709\u5f88\u591a\u53c2\u6570\u6211\u4eec\u5e76\u6ca1\u6709\u4e0econfig\u5bf9\u9f50\uff0c\u8fd9\u662f\u56e0\u4e3aconfig\u5b9a\u4e49\u4e2d\uff0c\u6709\u5f88\u591a\u90fd\u662f\u5e26",(0,r.kt)("inlineCode",{parentName:"p"},"optional"),"\u6216\u8005",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\n\u6807\u7b7e\u7684\uff0c\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"optional"),"\u53ef\u9009\u9879\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u9700\u6c42\u5224\u65ad\u662f\u5426\u9700\u8981\u8bbe\u7f6e\uff0c\u5bf9\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\u6807\u7b7e\uff0c\u5982\u679c\u4f60\u89c9\u5f97\u9ed8\u8ba4\u503c\u5c31\u5df2\u7ecf\u591f\u4e86\uff0c\u53ef\u4ee5\u4e0d\u7528\u8bbe\u7f6e\uff0c\n\u4e00\u822c",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\u4e2d\u7684\u503c\u57fa\u672c\u4e0d\u7528\u4fee\u6539\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662f\u6700\u4f73\u5b9e\u8df5\u503c\u3002"),(0,r.kt)("h4",{id:"config"},"Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Config struct{\n    rest.RestConf // rest api\u914d\u7f6e\n    Auth struct { // jwt\u9274\u6743\u914d\u7f6e\n        AccessSecret string // jwt\u5bc6\u94a5\n        AccessExpire int64 // \u6709\u6548\u671f\uff0c\u5355\u4f4d\uff1a\u79d2\n    }\n    Mysql struct { // \u6570\u636e\u5e93\u914d\u7f6e\uff0c\u9664mysql\u5916\uff0c\u53ef\u80fd\u8fd8\u6709mongo\u7b49\u5176\u4ed6\u6570\u636e\u5e93\n        DataSource string // mysql\u94fe\u63a5\u5730\u5740\uff0c\u6ee1\u8db3 $user:$password@tcp($ip:$port)/$db?$queries \u683c\u5f0f\u5373\u53ef\n    }\n    CacheRedis cache.CacheConf // redis\u7f13\u5b58\n    UserRpc    zrpc.RpcClientConf // rpc client\u914d\u7f6e\n}    \n")),(0,r.kt)("h4",{id:"restrestconf"},"rest.RestConf"),(0,r.kt)("p",null,"api\u670d\u52a1\u57fa\u7840\u914d\u7f6e\uff0c\u5305\u542b\u76d1\u542c\u5730\u5740\uff0c\u76d1\u542c\u7aef\u53e3\uff0c\u8bc1\u4e66\u914d\u7f6e\uff0c\u9650\u6d41\uff0c\u7194\u65ad\u53c2\u6570\uff0c\u8d85\u65f6\u53c2\u6570\u7b49\u63a7\u5236\uff0c\u5bf9\u5176\u5c55\u5f00\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'service.ServiceConf // service\u914d\u7f6e\nHost     string `json:",default=0.0.0.0"` // http\u76d1\u542cip\uff0c\u9ed8\u8ba40.0.0.0\nPort     int // http\u76d1\u542c\u7aef\u53e3,\u5fc5\u586b\nCertFile string `json:",optional"` // https\u8bc1\u4e66\u6587\u4ef6\uff0c\u53ef\u9009\nKeyFile  string `json:",optional"` // https\u79c1\u94a5\u6587\u4ef6\uff0c\u53ef\u9009 \nVerbose  bool   `json:",optional"` // \u662f\u5426\u6253\u5370\u8be6\u7ec6http\u8bf7\u6c42\u65e5\u5fd7\nMaxConns int    `json:",default=10000"` // http\u540c\u65f6\u53ef\u63a5\u53d7\u6700\u5927\u8bf7\u6c42\u6570\uff08\u9650\u6d41\u6570\uff09\uff0c\u9ed8\u8ba410000\nMaxBytes int64  `json:",default=1048576,range=[0:8388608]"` // http\u53ef\u63a5\u53d7\u8bf7\u6c42\u7684\u6700\u5927ContentLength\uff0c\u9ed8\u8ba41048576\uff0c\u88ab\u8bbe\u7f6e\u503c\u4e0d\u80fd\u5fc5\u987b\u57280\u52308388608\u4e4b\u95f4\n// milliseconds\nTimeout      int64         `json:",default=3000"` // \u8d85\u65f6\u65f6\u957f\u63a7\u5236\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\uff0c\u9ed8\u8ba43000\nCpuThreshold int64         `json:",default=900,range=[0:1000]"` // cpu\u964d\u8f7d\u9608\u503c\uff0c\u9ed8\u8ba4900\uff0c\u53ef\u5141\u8bb8\u8bbe\u7f6e\u8303\u56f40\u52301000\nSignature    SignatureConf `json:",optional"` // \u7b7e\u540d\u914d\u7f6e\n')),(0,r.kt)("h4",{id:"serviceserviceconf"},"service.ServiceConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type ServiceConf struct {\n    Name       string // \u670d\u52a1\u540d\u79f0\n    Log        logx.LogConf // \u65e5\u5fd7\u914d\u7f6e\n    Mode       string            `json:",default=pro,options=dev|test|pre|pro"` // \u670d\u52a1\u73af\u5883\uff0cdev-\u5f00\u53d1\u73af\u5883\uff0ctest-\u6d4b\u8bd5\u73af\u5883\uff0cpre-\u9884\u53d1\u73af\u5883\uff0cpro-\u6b63\u5f0f\u73af\u5883\n    MetricsUrl string            `json:",optional"` // \u6307\u6807\u4e0a\u62a5\u63a5\u53e3\u5730\u5740\uff0c\u8be5\u5730\u5740\u9700\u8981\u652f\u6301post json\u5373\u53ef\n    Prometheus prometheus.Config `json:",optional"` // prometheus\u914d\u7f6e\n}\n')),(0,r.kt)("h4",{id:"logxlogconf"},"logx.LogConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type LogConf struct {\n    ServiceName         string `json:",optional"` // \u670d\u52a1\u540d\u79f0\n    Mode                string `json:",default=console,options=console|file|volume"` // \u65e5\u5fd7\u6a21\u5f0f\uff0cconsole-\u8f93\u51fa\u5230console\uff0cfile-\u8f93\u51fa\u5230\u5f53\u524d\u670d\u52a1\u5668\uff08\u5bb9\u5668\uff09\u6587\u4ef6\uff0c\uff0cvolume-\u8f93\u51fadocker\u6302\u5728\u6587\u4ef6\u5185\n    Path                string `json:",default=logs"` // \u65e5\u5fd7\u5b58\u50a8\u8def\u5f84\n    Level               string `json:",default=info,options=info|error|severe"` // \u65e5\u5fd7\u7ea7\u522b\n    Compress            bool   `json:",optional"` // \u662f\u5426\u5f00\u542fgzip\u538b\u7f29\n    KeepDays            int    `json:",optional"` // \u65e5\u5fd7\u4fdd\u7559\u5929\u6570\n    StackCooldownMillis int    `json:",default=100"` // \u65e5\u5fd7write\u95f4\u9694\n}\n')),(0,r.kt)("h4",{id:"prometheusconfig"},"prometheus.Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    Host string `json:",optional"` // prometheus \u76d1\u542chost\n    Port int    `json:",default=9101"` // prometheus \u76d1\u542c\u7aef\u53e3\n    Path string `json:",default=/metrics"` // \u4e0a\u62a5\u5730\u5740\n}\n')),(0,r.kt)("h4",{id:"signatureconf"},"SignatureConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'SignatureConf struct {\n    Strict      bool          `json:",default=false"` // \u662f\u5426Strict\u6a21\u5f0f\uff0c\u5982\u679c\u662f\u5219PrivateKeys\u5fc5\u586b\n    Expiry      time.Duration `json:",default=1h"` // \u6709\u6548\u671f\uff0c\u9ed8\u8ba41\u5c0f\u65f6\n    PrivateKeys []PrivateKeyConf // \u7b7e\u540d\u5bc6\u94a5\u76f8\u5173\u914d\u7f6e\n}\n')),(0,r.kt)("h4",{id:"privatekeyconf"},"PrivateKeyConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"PrivateKeyConf struct {\n    Fingerprint string // \u6307\u7eb9\u914d\u7f6e\n    KeyFile     string // \u5bc6\u94a5\u914d\u7f6e\n}\n")),(0,r.kt)("h4",{id:"cachecacheconf"},"cache.CacheConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ClusterConf []NodeConf\n\nNodeConf struct {\n    redis.RedisConf\n    Weight int `json:",default=100"` // \u6743\u91cd\n}\n')),(0,r.kt)("h4",{id:"redisredisconf"},"redis.RedisConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'RedisConf struct {\n    Host string // redis\u5730\u5740\n    Type string `json:",default=node,options=node|cluster"` // redis\u7c7b\u578b\n    Pass string `json:",optional"` // redis\u5bc6\u7801\n}\n')),(0,r.kt)("h2",{id:"rpc\u914d\u7f6e"},"rpc\u914d\u7f6e"),(0,r.kt)("p",null,"rpc\u914d\u7f6e\u63a7\u5236\u7740\u4e00\u4e2arpc\u670d\u52a1\u7684\u5404\u79cd\u529f\u80fd\uff0c\u5305\u542b\u4f46\u4e0d\u9650\u4e8e\u76d1\u542c\u5730\u5740\uff0cetcd\u914d\u7f6e\uff0c\u8d85\u65f6\uff0c\u7194\u65ad\u914d\u7f6e\u7b49\uff0c\u4e0b\u9762\u6211\u4eec\u4ee5\u4e00\u4e2a\u5e38\u89c1\u7684rpc\u670d\u52a1\u914d\u7f6e\u6765\u8fdb\u884c\u8bf4\u660e\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u8bf4\u660e-1"},"\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"Config struct {\n    zrpc.RpcServerConf\n    CacheRedis         cache.CacheConf // redis\u7f13\u5b58\u914d\u7f6e\uff0c\u8be6\u60c5\u89c1api\u914d\u7f6e\u8bf4\u660e\uff0c\u8fd9\u91cc\u4e0d\u8d58\u8ff0\n    Mysql struct { // mysql\u6570\u636e\u5e93\u8bbf\u95ee\u914d\u7f6e\uff0c\u8be6\u60c5\u89c1api\u914d\u7f6e\u8bf4\u660e\uff0c\u8fd9\u91cc\u4e0d\u8d58\u8ff0\n        DataSource string\n    }\n}\n")),(0,r.kt)("h4",{id:"zrpcrpcserverconf"},"zrpc.RpcServerConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'RpcServerConf struct {\n    service.ServiceConf // \u670d\u52a1\u914d\u7f6e\uff0c\u8be6\u60c5\u89c1api\u914d\u7f6e\u8bf4\u660e\uff0c\u8fd9\u91cc\u4e0d\u8d58\u8ff0\n    ListenOn      string // rpc\u76d1\u542c\u5730\u5740\u548c\u7aef\u53e3\uff0c\u5982\uff1a127.0.0.1:8888\n    Etcd          discov.EtcdConf    `json:",optional"` // etcd\u76f8\u5173\u914d\u7f6e\n    Auth          bool               `json:",optional"` // \u662f\u5426\u5f00\u542fAuth\uff0c\u5982\u679c\u662f\u5219Redis\u4e3a\u5fc5\u586b\n    Redis         redis.RedisKeyConf `json:",optional"` // Auth\u9a8c\u8bc1\n    StrictControl bool               `json:",optional"` // \u662f\u5426Strict\u6a21\u5f0f\uff0c\u5982\u679c\u662f\u5219\u9047\u5230\u9519\u8bef\u662fAuth\u5931\u8d25\uff0c\u5426\u5219\u53ef\u4ee5\u8ba4\u4e3a\u6210\u529f\n    // pending forever is not allowed\n    // never set it to 0, if zero, the underlying will set to 2s automatically\n    Timeout      int64 `json:",default=2000"` // \u8d85\u65f6\u63a7\u5236\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\n    CpuThreshold int64 `json:",default=900,range=[0:1000]"` cpu\u964d\u8f7d\u9608\u503c\uff0c\u9ed8\u8ba4900\uff0c\u53ef\u5141\u8bb8\u8bbe\u7f6e\u8303\u56f40\u52301000\n}\n')),(0,r.kt)("h4",{id:"discovetcdconf"},"discov.EtcdConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type EtcdConf struct {\n    Hosts []string // etcd host\u6570\u7ec4\n    Key   string // rpc\u6ce8\u518ckey\n}\n")),(0,r.kt)("h4",{id:"redisrediskeyconf"},"redis.RedisKeyConf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'RedisConf struct {\n    Host string // redis \u4e3b\u673a\n    Type string `json:",default=node,options=node|cluster"` // redis\u7c7b\u578b\n    Pass string `json:",optional"` // redis\u5bc6\u7801\n}\n\nRedisKeyConf struct {\n    RedisConf\n    Key string `json:",optional"` // \u9a8c\u8bc1key\n}\n')))}u.isMDXComponent=!0}}]);