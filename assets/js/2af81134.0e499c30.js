"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[5792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(r),g=l,k=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:l,a[1]=u;for(var o=2;o<i;o++)a[o]=r[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9571:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),l=(r(67294),r(3905)),i=r(79524);const a={},u="Web\u4ee3\u7801\u600e\u4e48\u8ffd\u6eaf\u53d8\u91cf\u548c\u51fd\u6570\u65b9\u6cd5",s={unversionedId:"rsecu/webjs/2_13",id:"rsecu/webjs/2_13",title:"Web\u4ee3\u7801\u600e\u4e48\u8ffd\u6eaf\u53d8\u91cf\u548c\u51fd\u6570\u65b9\u6cd5",description:"\u7eaf\u7406\u8bba\u7684\u77e5\u8bc6\u518d\u591a\u4e5f\u8bb0\u4e0d\u4f4f\uff0c\u8fd9\u5757\u540e\u9762\u9700\u8981\u5efa\u7acb\u9776\u573a\u4f5c\u4e1a\u6d4b\u8bd5\u3002",source:"@site/docs/rsecu/webjs/2_13.mdx",sourceDirName:"rsecu/webjs",slug:"/rsecu/webjs/2_13",permalink:"/zerodoc/docs/rsecu/webjs/2_13",draft:!1,tags:[],version:"current",frontMatter:{}},o={},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"Debugger\u65ad\u70b9",id:"debugger\u65ad\u70b9",level:2},{value:"DOM\u65ad\u70b9\u8c03\u8bd5",id:"dom\u65ad\u70b9\u8c03\u8bd5",level:2},{value:"\u5f53\u8282\u70b9\u5185\u90e8\u5b50\u8282\u70b9\u53d8\u5316\u65f6\u65ad\u70b9",id:"\u5f53\u8282\u70b9\u5185\u90e8\u5b50\u8282\u70b9\u53d8\u5316\u65f6\u65ad\u70b9",level:3},{value:"\u5f53\u8282\u70b9\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\u65ad\u70b9",id:"\u5f53\u8282\u70b9\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\u65ad\u70b9",level:3},{value:"\u5f53\u8282\u70b9\u88ab\u79fb\u9664\u65f6\u65ad\u70b9",id:"\u5f53\u8282\u70b9\u88ab\u79fb\u9664\u65f6\u65ad\u70b9",level:3},{value:"XHR\u4e5f\u6709\u65ad\u70b9",id:"xhr\u4e5f\u6709\u65ad\u70b9",level:2},{value:"Event Listener\u65ad\u70b9\uff08\u6bd4\u8f83\u91cd\u8981\uff09",id:"event-listener\u65ad\u70b9\u6bd4\u8f83\u91cd\u8981",level:2},{value:"JS\u4ee3\u7801\u7684\u8ffd\u6eaf",id:"js\u4ee3\u7801\u7684\u8ffd\u6eaf",level:2}],p={toc:c},m="wrapper";function g(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"web\u4ee3\u7801\u600e\u4e48\u8ffd\u6eaf\u53d8\u91cf\u548c\u51fd\u6570\u65b9\u6cd5"},"Web\u4ee3\u7801\u600e\u4e48\u8ffd\u6eaf\u53d8\u91cf\u548c\u51fd\u6570\u65b9\u6cd5"),(0,l.kt)("p",null,"\u7eaf\u7406\u8bba\u7684\u77e5\u8bc6\u518d\u591a\u4e5f\u8bb0\u4e0d\u4f4f\uff0c\u8fd9\u5757\u540e\u9762\u9700\u8981\u5efa\u7acb\u9776\u573a\u4f5c\u4e1a\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u5148\u8bf4\u8bf4\u4e3a\u4ec0\u4e48\u9700\u8981\u52a8\u6001\u8c03\u8bd5\uff0c\u56e0\u4e3a\u5f88\u591a\u65f6\u5019\uff0c\u4f60\u5728\u8c37\u6b4c\u5f00\u53d1\u8005\u5de5\u5177\u7684\u540e\u53f0\uff0c\u770b\u4e0d\u5230\u4e00\u4e9bJS\u6587\u4ef6\u7684\uff0c\u56e0\u4e3a\u7ecf\u5e38\u7684\u4f1a\u6709\u8fd9\u4e48\u4e00\u4e9b\u60c5\u51b5\u53d1\u751f\uff0c\u6bd4\u5982\u6267\u884c\u5230\u67d0\u4e9b\u5730\u65b9\uff0cJS\u624d\u4f1a\u4e0b\u8f7d\u4e0b\u6765\uff0c\u7136\u540e\u4e92\u76f8\u4f7f\u7528\u5bf9\u65b9\u7684\u53d8\u91cf\u6216\u8005\u51fd\u6570\u7b49\u3002"),(0,l.kt)("p",null,"\u5173\u4e8e\u8c03\u8bd5\u5de5\u5177\u65b9\u9762\u7684\u9009\u62e9\uff0c\u7f51\u4e0a\u6709\u5f88\u591a\u5de5\u5177\uff0c\u5176\u5b9e\u53ea\u9700\u8981\u7528\u4e24\u4e2a\u5de5\u5177\u5373\u53ef\uff0c\u4e00\u4e2a\u662f\u8c37\u6b4c\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u4e00\u4e2a\u662f\u706b\u72d0\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u8c37\u6b4c\u5f00\u53d1\u8005\u5de5\u5177\u662f\u6bd4\u8f83\u5e38\u7528\u7684\uff0c\u4f46\u662f\u706b\u72d0\u5f00\u53d1\u8005\u5de5\u5177\u4e5f\u662f\u5f88\u5e38\u7528\u7684\uff0c\u56e0\u4e3a\u706b\u72d0\u5f00\u53d1\u8005\u5de5\u5177\u53ef\u4ee5\u6a21\u62df\u4e00\u4e9b\u73af\u5883\u66f4\u65b9\u4fbf\u4e00\u4e9b\u3002\u8fd8\u6709\u5c31\u662f\u6709\u4e00\u4e9bIE\u7c7b\u7684\u73af\u5883\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ea\u80fd\u4e0b\u8f7dIE\u7684\u6d4f\u89c8\u5668\u4e86\u3002\u56e0\u6b64\uff0c\u5de5\u5177\u7684\u9009\u62e9\u9009\u8c37\u6b4c\u5f00\u53d1\u8005\u5de5\u5177\u5c31\u884c\u4e86\u3002"),(0,l.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,l.kt)("p",null," JS\u65ad\u70b9\u8c03\u8bd5\uff0c\u5373\u662f\u5728\u6d4f\u89c8\u5668\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u4e3aJS\u4ee3\u7801\u6dfb\u52a0\u65ad\u70b9\uff0c\u8ba9JS\u6267\u884c\u5230\u67d0\u4e00\u7279\u5b9a\u4f4d\u7f6e\u505c\u4f4f\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u5bf9\u8be5\u5904\u4ee3\u7801\u6bb5\u7684\u5206\u6790\u4e0e\u903b\u8f91\u5904\u7406\u3002\u4e3a\u4e86\u80fd\u591f\u89c2\u5bdf\u5230\u65ad\u70b9\u8c03\u8bd5\u7684\u6548\u679c\uff0c\u6211\u4eec\u9884\u5148\u968f\u610f\u51c6\u5907\u4e00\u6bb5JS\u4ee3\u7801\uff1a"),(0,l.kt)("img",{alt:"XSS\u653b\u51fb\u65b9\u6848",src:(0,i.Z)("/images/rsecu/webjs/2_13_1.gif")}),(0,l.kt)("p",null," \u4ee3\u7801\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff0c\u4f20\u5165\u4e24\u4e2a\u6570\uff0c\u5206\u522b\u52a0\u4e0a\u4e00\u4e2a\u4e71\u4e03\u516b\u7cdf\u7684\u968f\u673a\u6574\u6570\u540e\uff0c\u518d\u8fd4\u56de\u4e24\u4e2a\u6570\u7684\u603b\u548c\u3002\u4ee5Chrome\u5f00\u53d1\u8005\u5de5\u5177\u4e3a\u4f8b\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0bJS\u65ad\u70b9\u8c03\u8bd5\u7684\u57fa\u672c\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"Sources\u65ad\u70b9\uff0c\u6d4b\u8bd5\u4ee3\u7801\u4e2d\u6211\u4eec\u901a\u8fc7\u4e0a\u56feconsole\u7684\u8f93\u51fa\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\u4ee3\u7801\u5e94\u8be5\u662f\u6b63\u5e38\u8fd0\u884c\u4e86\uff0c\u4f46\u662f\u4e3a\u4ec0\u4e48\u662f\u5e94\u8be5\u5462\uff1f\u56e0\u4e3a\u51fd\u6570\u4e2d\u52a0\u4e86\u4e00\u4e2a\u968f\u673a\u6570\uff0c\u800c\u6700\u7ec8\u7ed3\u679c\u662f\u5426\u771f\u7684\u662f\u6b63\u786e\u7684\u5462\uff1f\u8fd9\u662f\u6beb\u65e0\u610f\u4e49\u7684\u731c\u60f3\uff0c\u4f46\u662f\u5047\u8bbe\u6211\u73b0\u5728\u5c31\u662f\u8981\u9a8c\u8bc1\u4e00\u4e0b\uff1a\u51fd\u6570\u4f20\u5165\u7684\u4e24\u4e2a\u6570\u3001\u88ab\u52a0\u7684\u968f\u673a\u6570\uff0c\u4ee5\u53ca\u6700\u7ec8\u7684\u603b\u548c\u3002"),(0,l.kt)("img",{alt:"XSS\u653b\u51fb\u65b9\u6848",src:(0,i.Z)("/images/rsecu/webjs/2_13_2.gif")}),(0,l.kt)("p",null,"   \u9a8c\u8bc1\u8fc7\u7a0b\u5b58\u5728\u5f88\u660e\u663e\u7684\u5f0a\u7aef\u5c31\u662f\uff0c\u6dfb\u52a0\u4e86\u5f88\u591a\u5197\u4f59\u4ee3\u7801\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u4e00\u4e0b\u4f7f\u7528\u65ad\u70b9\u8fdb\u884c\u9a8c\u8bc1\uff0c\u662f\u5426\u66f4\u52a0\u65b9\u4fbf\uff0c\u5148\u770b\u4e00\u4e2a\u5982\u4f55\u52a0\u65ad\u70b9\uff0c\u4ee5\u53ca\u65ad\u70b9\u540e\u662f\u4ec0\u4e48\u6548\u679c"),(0,l.kt)("img",{alt:"XSS\u653b\u51fb\u65b9\u6848",src:(0,i.Z)("/images/rsecu/webjs/2_13_3.gif")}),(0,l.kt)("p",null,'   \u7ed9\u4e00\u6bb5\u4ee3\u7801\u6dfb\u52a0\u65ad\u70b9\u7684\u6d41\u7a0b\u662f"F12\uff08Ctrl + Shift + I\uff09\u6253\u5f00\u5f00\u53d1\u5de5\u5177"\u2014\u2014"\u70b9\u51fbSources\u83dc\u5355"\u2014\u2014"\u5de6\u4fa7\u6811\u4e2d\u627e\u5230\u76f8\u5e94\u6587\u4ef6"\u2014\u2014"\u70b9\u51fb\u884c\u53f7\u5217"\u5373\u5b8c\u6210\u5728\u5f53\u524d\u884c\u6dfb\u52a0/\u5220\u9664\u65ad\u70b9\u64cd\u4f5c\u3002\u5f53\u65ad\u70b9\u6dfb\u52a0\u5b8c\u6bd5\u540e\uff0c\u5237\u65b0\u9875\u9762JS\u6267\u884c\u5230\u65ad\u70b9\u4f4d\u7f6e\u505c\u4f4f\uff0c\u5728Sources\u754c\u9762\u4f1a\u770b\u5230\u5f53\u524d\u4f5c\u7528\u57df\u4e2d\u6240\u6709\u53d8\u91cf\u548c\u503c\uff0c\u53ea\u9700\u5bf9\u6bcf\u4e2a\u503c\u8fdb\u884c\u9a8c\u8bc1\u5373\u53ef\u5b8c\u6210\u6211\u4eec\u9898\u8bbe\u9a8c\u8bc1\u8981\u6c42\u3002'),(0,l.kt)("p",null,"   \u6267\u884c\u5230\u65ad\u70b9\u7684\u65f6\u5019\uff0c\u663e\u793a\u7684\u53d8\u91cfa\u548cb\u7684\u503c\u662f\u5df2\u7ecf\u8fdb\u884c\u8fc7\u52a0\u6cd5\u8fd0\u7b97\u540e\u7684\uff0c\u6211\u4eec\u770b\u4e0d\u5230\u8c03\u7528sum\u51fd\u6570\u65f6\u521d\u59cb\u4f20\u5165\u768410\u548c20\u3002\u90a3\u4e48\u8be5\u600e\u4e48\u529e\u5462\uff1f\u8fd9\u5c31\u8981\u56de\u8fc7\u5934\u6765\u5148\u5b66\u4e60\u4e00\u4e0b\u65ad\u70b9\u8c03\u8bd5\u7684\u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6\u4e86\u3002\u6211\u4eec\u6253\u5f00Sources\u9762\u677f\u540e\u5176\u5b9e\u4f1a\u5728\u754c\u9762\u4e2d\u770b\u5230\u5982\u4e0b\u5185\u5bb9\uff0c\u6211\u4eec\u8ddf\u7740\u9f20\u6807\u8f68\u8ff9\u9010\u4e00\u770b\u770b\u90fd\u662f\u4ec0\u4e48\u610f\u601d\uff1a"),(0,l.kt)("img",{alt:"XSS\u653b\u51fb\u65b9\u6848",src:(0,i.Z)("/images/rsecu/webjs/2_13_4.gif")}),(0,l.kt)("p",null,"\u4ece\u5de6\u5230\u53f3\uff0c\u5404\u4e2a\u56fe\u6807\u8868\u793a\u7684\u529f\u80fd\u5206\u522b\u4e3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pause/Resume script execution\uff1a\u6682\u505c/\u6062\u590d\u811a\u672c\u6267\u884c\uff08\u7a0b\u5e8f\u6267\u884c\u5230\u4e0b\u4e00\u65ad\u70b9\u505c\u6b62\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"Step over next function call\uff1a\u6267\u884c\u5230\u4e0b\u4e00\u6b65\u7684\u51fd\u6570\u8c03\u7528\uff08\u8df3\u5230\u4e0b\u4e00\u884c\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"Step into next function call\uff1a\u8fdb\u5165\u5f53\u524d\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"Step out of current function\uff1a\u8df3\u51fa\u5f53\u524d\u6267\u884c\u51fd\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"Deactive/Active all breakpoints\uff1a\u5173\u95ed/\u5f00\u542f\u6240\u6709\u65ad\u70b9\uff08\u4e0d\u4f1a\u53d6\u6d88\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"Pause on exceptions\uff1a\u5f02\u5e38\u60c5\u51b5\u81ea\u52a8\u65ad\u70b9\u8bbe\u7f6e\u3002")),(0,l.kt)("p",null,"\u5404\u4e2a\u53d8\u91cf\u7684\u53d8\u5316\u60c5\u51b5\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("img",{alt:"XSS\u653b\u51fb\u65b9\u6848",src:(0,i.Z)("/images/rsecu/webjs/2_13_5.gif")}),(0,l.kt)("p",null,"\u5176\u4f59\u51e0\u4e2a\u529f\u80fd\u952e\uff0c\u6539\u52a8\u4e00\u4e0b\u4ee3\u7801"),(0,l.kt)("img",{alt:"XSS\u653b\u51fb\u65b9\u6848",src:(0,i.Z)("/images/rsecu/webjs/2_13_6.gif")}),(0,l.kt)("h2",{id:"debugger\u65ad\u70b9"},"Debugger\u65ad\u70b9"),(0,l.kt)("p",null,'\u5177\u4f53\u7684\u8bf4\u5c31\u662f\u901a\u8fc7\u5728\u4ee3\u7801\u4e2d\u6dfb\u52a0"debugger;"\u8bed\u53e5\uff0c\u5f53\u4ee3\u7801\u6267\u884c\u5230\u8be5\u8bed\u53e5\u7684\u65f6\u5019\u5c31\u4f1a\u81ea\u52a8\u65ad\u70b9\u3002\u63a5\u4e0b\u53bb\u7684\u64cd\u4f5c\u5c31\u8ddf\u5728Sources\u9762\u677f\u6dfb\u52a0\u65ad\u70b9\u8c03\u8bd5\u51e0\u4e4e\u4e00\u6a21\u4e00\u6837\uff0c\u552f\u4e00\u7684\u533a\u522b\u5728\u4e8e\u8c03\u8bd5\u5b8c\u540e\u9700\u8981\u5220\u9664\u8be5\u8bed\u53e5\u3002'),(0,l.kt)("img",{alt:"Debugger\u65ad\u70b9",src:(0,i.Z)("/images/rsecu/webjs/2_13_7.gif")}),(0,l.kt)("h2",{id:"dom\u65ad\u70b9\u8c03\u8bd5"},"DOM\u65ad\u70b9\u8c03\u8bd5"),(0,l.kt)("p",null,"DOM\u65ad\u70b9\uff0c\u987e\u540d\u601d\u4e49\u5c31\u662f\u5728DOM\u5143\u7d20\u4e0a\u6dfb\u52a0\u65ad\u70b9\uff0c\u8fdb\u800c\u8fbe\u5230\u8c03\u8bd5\u7684\u76ee\u7684\u3002\u800c\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u65ad\u70b9\u7684\u6548\u679c\u6700\u7ec8\u8fd8\u662f\u843d\u5730\u5230JS\u903b\u8f91\u4e4b\u5185\u3002\u6211\u4eec\u4f9d\u6b21\u6765\u770b\u4e00\u4e0b\u6bcf\u4e00\u79cdDOM\u65ad\u70b9\u7684\u5177\u4f53\u6548\u679c\u3002"),(0,l.kt)("h3",{id:"\u5f53\u8282\u70b9\u5185\u90e8\u5b50\u8282\u70b9\u53d8\u5316\u65f6\u65ad\u70b9"},"\u5f53\u8282\u70b9\u5185\u90e8\u5b50\u8282\u70b9\u53d8\u5316\u65f6\u65ad\u70b9"),(0,l.kt)("p",null,"\u5728\u524d\u7aef\u5f00\u53d1\u8d8a\u6765\u8d8a\u590d\u6742\u7684\u4eca\u5929\uff0c\u524d\u7aefJS\u4ee3\u7801\u8d8a\u6765\u8d8a\u591a\uff0c\u903b\u8f91\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u4e00\u4e2a\u770b\u4f3c\u7b80\u5355\u7684Web\u9875\u9762\uff0c\u901a\u5e38\u4f34\u968f\u7740\u5927\u6bb5\u5927\u6bb5\u7684JS\u4ee3\u7801\uff0c\u6d89\u53ca\u8bf8\u591aDOM\u8282\u70b9\u589e\u3001\u5220\u3001\u6539\u7684\u64cd\u4f5c\u3002\u96be\u514d\u9047\u5230\u76f4\u63a5\u901a\u8fc7JS\u4ee3\u7801\u5f88\u96be\u5b9a\u4f4d\u4ee3\u7801\u6bb5\u7684\u60c5\u51b5\uff0c\u800c\u6211\u4eec\u5374\u53ef\u4ee5\u901a\u8fc7\u5f00\u53d1\u8005\u5de5\u5177\u7684Elements\u9762\u677f\uff0c\u5feb\u901f\u5b9a\u4f4d\u5230\u76f8\u5173DOM\u8282\u70b9\uff0c\u8fd9\u65f6\u5019\u901a\u8fc7DOM\u65ad\u70b9\u5b9a\u4f4d\u811a\u672c\u5c31\u663e\u5f97\u5c24\u5176\u91cd\u8981\u4e86\u3002"),(0,l.kt)("img",{alt:"\u5f53\u8282\u70b9\u5185\u90e8\u5b50\u8282\u70b9\u53d8\u5316\u65f6\u65ad\u70b9",src:(0,i.Z)("/images/rsecu/webjs/2_13_8.gif")}),(0,l.kt)("h3",{id:"\u5f53\u8282\u70b9\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\u65ad\u70b9"},"\u5f53\u8282\u70b9\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\u65ad\u70b9"),(0,l.kt)("p",null,"\u7531\u4e8e\u524d\u7aef\u5904\u7406\u7684\u4e1a\u52a1\u903b\u8f91\u8d8a\u6765\u8d8a\u590d\u6742\uff0c\u5bf9\u4e00\u4e9b\u6570\u636e\u7684\u5b58\u50a8\u4f9d\u8d56\u8d8a\u6765\u8d8a\u5f3a\u70c8\uff0c\u800c\u5c06\u4e34\u65f6\u6570\u636e\u5b58\u50a8\u4e8eDOM\u8282\u70b9\u7684\uff08\u81ea\u5b9a\u4e49\uff09\u5c5e\u6027\u4e2d\uff0c\u662f\u5f88\u591a\u60c5\u51b5\u4e0b\u5f00\u53d1\u8005\u4f18\u5148\u9009\u62e9\u7684\u65b9\u5f0f\u3002\u7279\u522b\u662f\u5728HTML5\u6807\u51c6\u589e\u5f3a\u81ea\u5b9a\u4e49\u5c5e\u6027\u652f\u6301\uff08\u4f8b\uff1adataset\u3001data-*\u4e4b\u7c7b\uff09\u4e4b\u540e\uff0c\u5c5e\u6027\u8bbe\u7f6e\u5e94\u7528\u8d8a\u6765\u8d8a\u591a\uff0c\u56e0\u6b64Chrome\u5f00\u53d1\u8005\u5de5\u5177\u4e5f\u63d0\u4f9b\u4e86\u5c5e\u6027\u53d8\u5316\u65ad\u70b9\u652f\u6301\uff0c\u5176\u6548\u679c\u5927\u81f4\u5982\u4e0b"),(0,l.kt)("img",{alt:"\u5f53\u8282\u70b9\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u65f6\u65ad\u70b9",src:(0,i.Z)("/images/rsecu/webjs/2_13_9.gif")}),(0,l.kt)("p",null,"\u5bf9\u5b50\u8282\u70b9\u7684\u5c5e\u6027\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\u4e5f\u4e0d\u4f1a\u89e6\u53d1\u8282\u70b9\u672c\u8eab\u7684\u65ad\u70b9\u3002"),(0,l.kt)("h3",{id:"\u5f53\u8282\u70b9\u88ab\u79fb\u9664\u65f6\u65ad\u70b9"},"\u5f53\u8282\u70b9\u88ab\u79fb\u9664\u65f6\u65ad\u70b9"),(0,l.kt)("p",null,"\u540c\u4e0a\uff0c\u6ca1\u4ec0\u4e48\u533a\u522b"),(0,l.kt)("h2",{id:"xhr\u4e5f\u6709\u65ad\u70b9"},"XHR\u4e5f\u6709\u65ad\u70b9"),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u5e38\u8bf4\u7684Ajax\u3002"),(0,l.kt)("img",{alt:"XHR\u4e5f\u6709\u65ad\u70b9",src:(0,i.Z)("/images/rsecu/webjs/2_13_10.gif")}),(0,l.kt)("p",null,'\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7"XHR Breakpoints"\u53f3\u4fa7\u7684"+"\u53f7\u4e3a\u5f02\u6b65\u65ad\u70b9\u6dfb\u52a0\u65ad\u70b9\u6761\u4ef6\uff0c\u5f53\u5f02\u6b65\u8bf7\u6c42\u89e6\u53d1\u65f6\u7684URL\u6ee1\u8db3\u6b64\u6761\u4ef6\uff0cJS\u903b\u8f91\u5219\u4f1a\u81ea\u52a8\u4ea7\u751f\u65ad\u70b9\u3002\u6f14\u793a\u52a8\u753b\u4e2d\u5e76\u6ca1\u6709\u6f14\u793a\u5230\u65ad\u70b9\u4f4d\u7f6e\uff0c\u8fd9\u662f\u56e0\u4e3a\uff0c\u6f14\u793a\u4f7f\u7528\u7684\u662fjQuery\u5c01\u88c5\u597d\u7684ajax\u65b9\u6cd5\uff0c\u4ee3\u7801\u5df2\u7ecf\u8fc7\u538b\u7f29\uff0c\u770b\u4e0d\u5230\u4ec0\u4e48\u6548\u679c\uff0c\u800c\u4e8b\u5b9e\u4e0aXHR\u65ad\u70b9\u7684\u4ea7\u751f\u4f4d\u7f6e\u662f"xhr.send()"\u8bed\u53e5\u3002'),(0,l.kt)("p",null,"XHR\u65ad\u70b9\u7684\u5f3a\u5927\u4e4b\u5904\u662f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u65ad\u70b9\u89c4\u5219\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u9488\u5bf9\u67d0\u4e00\u6279\u3001\u67d0\u4e00\u4e2a\uff0c\u4e43\u81f3\u6240\u6709\u5f02\u6b65\u8bf7\u6c42\u8fdb\u884c\u65ad\u70b9\u8bbe\u7f6e\uff0c\u975e\u5e38\u5f3a\u5927\u3002\u4f46\u662f\uff0c\u4f3c\u4e4e\u8fd9\u4e2a\u529f\u80fd\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7528\u5f97\u5e76\u4e0d\u591a\uff0c\u81f3\u5c11\u6211\u7528\u5f97\u4e0d\u591a\u3002\u60f3\u60f3\u539f\u56e0\u5927\u6982\u6709\u4e24\u70b9\uff1a\u5176\u4e00\uff0c\u8fd9\u7c7b\u578b\u7684\u65ad\u70b9\u8c03\u8bd5\u9700\u6c42\u5728\u65e5\u5e38\u4e1a\u52a1\u4e2d\u672c\u8eab\u6d89\u53ca\u4e0d\u591a\uff1b\u5176\u4e8c\uff0c\u73b0\u9636\u6bb5\u7684\u524d\u7aef\u5f00\u53d1\u5927\u591a\u57fa\u4e8eJS\u6846\u67b6\u8fdb\u884c\uff0c\u6700\u57fa\u672c\u7684axios\u4e5f\u5df2\u7ecf\u5bf9Ajax\u8fdb\u884c\u4e86\u826f\u597d\u5c01\u88c5\uff0c\u6781\u5c11\u6709\u4eba\u81ea\u5df1\u5c01\u88c5Ajax\u65b9\u6cd5\uff0c\u800c\u9879\u76ee\u4e3a\u4e86\u51cf\u5c11\u4ee3\u7801\u4f53\u79ef\uff0c\u901a\u5e38\u9009\u62e9\u538b\u7f29\u540e\u7684\u4ee3\u7801\u5e93\uff0c\u4f7f\u5f97XHR\u65ad\u70b9\u8ddf\u8e2a\u76f8\u5bf9\u4e0d\u90a3\u4e48\u5bb9\u6613\u4e86\u3002"),(0,l.kt)("h2",{id:"event-listener\u65ad\u70b9\u6bd4\u8f83\u91cd\u8981"},"Event Listener\u65ad\u70b9\uff08\u6bd4\u8f83\u91cd\u8981\uff09"),(0,l.kt)("p",null,"\u4e8b\u4ef6\u76d1\u542c\u5668\u65ad\u70b9\uff0c\u5373\u6839\u636e\u4e8b\u4ef6\u540d\u79f0\u8fdb\u884c\u65ad\u70b9\u8bbe\u7f6e\u3002\u5f53\u4e8b\u4ef6\u88ab\u89e6\u53d1\u65f6\uff0c\u65ad\u70b9\u5230\u4e8b\u4ef6\u7ed1\u5b9a\u7684\u4f4d\u7f6e\u3002\u4e8b\u4ef6\u76d1\u542c\u5668\u65ad\u70b9\uff0c\u5217\u51fa\u4e86\u6240\u6709\u9875\u9762\u53ca\u811a\u672c\u4e8b\u4ef6\uff0c\u5305\u62ec\uff1a\u9f20\u6807\u3001\u952e\u76d8\u3001\u52a8\u753b\u3001\u5b9a\u65f6\u5668\u3001XHR\u7b49\u7b49\u3002\u6781\u5927\u7684\u964d\u4f4e\u4e86\u4e8b\u4ef6\u65b9\u9762\u4e1a\u52a1\u903b\u8f91\u7684\u8c03\u8bd5\u96be\u5ea6\u3002"),(0,l.kt)("img",{alt:"Event Listener\u65ad\u70b9",src:(0,i.Z)("/images/rsecu/webjs/2_13_11.gif")}),(0,l.kt)("h2",{id:"js\u4ee3\u7801\u7684\u8ffd\u6eaf"},"JS\u4ee3\u7801\u7684\u8ffd\u6eaf"),(0,l.kt)("p",null,"\u5230\u6b64\uff0c\u4e0a\u9762\u7684\u628a\u5de5\u5177\u7684\u5404\u4e2a\u5730\u65b9\u90fd\u8be6\u7ec6\u7684\u4ecb\u7ecd\u4e86\uff0c\u90a3\u4e48JS\u8ffd\u6eaf\u5c31\u5f88\u5bb9\u6613\u4e86\u81ea\u7136\u800c\u7136\u4f1a\u4e86\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\uff0c\u8fd8\u6709\u4e00\u4e2a\u65b9\u6848\u662f\u8fd9\u6837\u7684\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u6240\u6709\u5730\u65b9\u90fd\u80fd\u7528\uff0c\u4e0d\u7528\u7ba1\u4ed6\u6709\u591a\u5c11\u7684\u52a0\u5bc6\u6df7\u6dc6\uff0c\u90fd\u80fd\u4e00\u76f4\u627e\u5230JS\u53d8\u91cf\uff0c\u5c31\u662f\u5728\u5f00\u53d1\u8005\u5de5\u5177\u91cc\u9762\u5199\u8fd9\u6837\u7684\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'let obj = {\n  name: 1\n};\n\nObject.defineProperty(obj , "name", {\n    set: function(value) {\n        debugger;\n    }\n});\n\n')),(0,l.kt)("p",null,"\u8fd8\u53ef\u4ee5\u628aget\u4e5f\u5199\u8fdb\u53bb\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003defineProperty\u8fd9\u4e2a\u7684\u7528\u6cd5\u3002"),(0,l.kt)("p",null,"\u8fd9\u6837\u6bcf\u6b21name\u88ab\u8bbe\u7f6e\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u8fdb\u5165\u65ad\u70b9\u3002 "),(0,l.kt)("p",null,"defineProperty\u53c2\u8003\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/qinlinkun/p/18028406"},"https://www.cnblogs.com/qinlinkun/p/18028406")))}g.isMDXComponent=!0}}]);