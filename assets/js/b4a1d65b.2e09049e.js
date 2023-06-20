"use strict";(self.webpackChunkzzydoc=self.webpackChunkzzydoc||[]).push([[1034],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,k=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(k,i(i({ref:n},l),{},{components:t})):r.createElement(k,i({ref:n},l))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},29750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={},i="\u8bf7\u6c42\u5934JWT\u89e3\u6790",c={unversionedId:"go-zero/component/tokenparser",id:"go-zero/component/tokenparser",title:"\u8bf7\u6c42\u5934JWT\u89e3\u6790",description:"\u5bf9\u4e8e\u8bf7\u6c42\u5934Authorization\u4e2dtoken\u7684\u89e3\u6790\uff0c\u5185\u90e8\u5b9e\u73b0\u4e86jwt\u5bc6\u94a5\u7684\u65e0\u611f\u66f4\u65b0",source:"@site/docs/go-zero/component/tokenparser.md",sourceDirName:"go-zero/component",slug:"/go-zero/component/tokenparser",permalink:"/zzydoc/docs/go-zero/component/tokenparser",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"GoZero",previous:{title:"rest engine\u53c2\u6570\u8be6\u89e3",permalink:"/zzydoc/docs/go-zero/component/rest engine"},next:{title:"intellij\u63d2\u4ef6",permalink:"/zzydoc/docs/go-zero/ecology/intellij"}},p={},s=[{value:"quick start",id:"quick-start",level:3},{value:"jwt\u5bc6\u7801\u66f4\u65b0",id:"jwt\u5bc6\u7801\u66f4\u65b0",level:3},{value:"NewTokenParser()\u53ef\u914d\u53c2\u6570",id:"newtokenparser\u53ef\u914d\u53c2\u6570",level:3}],l={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8bf7\u6c42\u5934jwt\u89e3\u6790"},"\u8bf7\u6c42\u5934JWT\u89e3\u6790"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u8bf7\u6c42\u5934",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization"),"\u4e2dtoken\u7684\u89e3\u6790\uff0c\u5185\u90e8\u5b9e\u73b0\u4e86jwt\u5bc6\u94a5\u7684\u65e0\u611f\u66f4\u65b0"),(0,o.kt)("h3",{id:"quick-start"},"quick start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'const (\n      key     = "14F17379-EB8F-411B-8F12-6929002DCA76"\n      prevKey = "B63F477D-BBA3-4E52-96D3-C0034C27694A"\n   )\n\nfunc main() {\n      req := httptest.NewRequest(http.MethodGet, "http://localhost", nil)\n        //\u751f\u6210token\n      token, err := buildToken(key, map[string]interface{}{\n         "key": "value",\n      }, 3600)\n      req.Header.Set("Authorization", "Bearer "+token)\n        //\u521d\u59cb\u5316\n      parser := NewTokenParser(WithResetDuration(time.Minute))\n        //token\u89e3\u6790\n      tok, err := parser.ParseToken(req, key, prevKey)\n}\n')),(0,o.kt)("h3",{id:"jwt\u5bc6\u7801\u66f4\u65b0"},"jwt\u5bc6\u7801\u66f4\u65b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func (tp *TokenParser) ParseToken(r *http.Request, secret, prevSecret string){\n  //.....\n  if len(prevSecret) > 0 {\n        count := tp.loadCount(secret)\n        prevCount := tp.loadCount(prevSecret)\n\n        var first, second string\n        if count > prevCount {\n            first = secret\n            second = prevSecret\n        } else {\n            first = prevSecret\n            second = secret\n        }\n\n        token, err = tp.doParseToken(r, first)\n        if err != nil {\n            token, err = tp.doParseToken(r, second)\n            if err != nil {\n                return nil, err\n            } else {\n                tp.incrementCount(second)\n            }\n        } else {\n            tp.incrementCount(first)\n        }\n    } else {\n        token, err = tp.doParseToken(r, secret)\n        if err != nil {\n            return nil, err\n        }\n    }\n  //.....\n}\n")),(0,o.kt)("p",null,"\u5bf9\u6bd4\u65b0\u65e7\u5bc6\u94a5\u7684\u5386\u53f2\u4f7f\u7528\u6b21\u6570\uff0c\u5148\u7528\u88ab\u4f7f\u7528\u6b21\u6570\u591a\u7684\u5bc6\u94a5\u89e3\u6790\uff0c\u4e0d\u6210\u529f\u5728\u4f7f\u7528\u4f7f\u7528\u6b21\u6570\u5c11\u5bc6\u94a5\u7684\u89e3\u6790\uff0c\u6709\u6548\u51cf\u5c11token\u7684\u88ab\u89e3\u6790\u6b21\u6570"),(0,o.kt)("h3",{id:"newtokenparser\u53ef\u914d\u53c2\u6570"},"NewTokenParser()\u53ef\u914d\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func WithResetDuration(duration time.Duration) ParseOption {\n   return func(parser *TokenParser) {\n      parser.resetDuration = duration\n   }\n}\n")),(0,o.kt)("p",null,"\u7528\u4e8e\u5bf9jwt\u5bc6\u94a5\u4f7f\u7528\u6b21\u6570\u6570\u636e\u7684\u6e05\u7406"))}d.isMDXComponent=!0}}]);