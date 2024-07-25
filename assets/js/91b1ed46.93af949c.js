"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[4384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=i(n),k=o,v=d["".concat(c,".").concat(k)]||d[k]||s[k]||a;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},21310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},l="React\u6269\u5c55\u5185\u5bb9",p={unversionedId:"js/react/extension",id:"js/react/extension",title:"React\u6269\u5c55\u5185\u5bb9",description:"\u91c7\u7528\u7ec4\u4ef6\u5316\u6a21\u5f0f\uff0c\u58f0\u660e\u5f0f\u7f16\u7801\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u53ca\u7ec4\u4ef6\u590d\u7528\u7387\u3002",source:"@site/docs/js/react/extension.md",sourceDirName:"js/react",slug:"/js/react/extension",permalink:"/zerodoc/docs/js/react/extension",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSReact",previous:{title:"react\u5168\u7248\u672c\u751f\u547d\u5468\u671f",permalink:"/zerodoc/docs/js/react/life"},next:{title:"React Router 6",permalink:"/zerodoc/docs/js/react/reactRouter6"}},c={},i=[{value:"1. setState",id:"1-setstate",level:2},{value:"setState\u66f4\u65b0\u72b6\u6001\u76842\u79cd\u5199\u6cd5",id:"setstate\u66f4\u65b0\u72b6\u6001\u76842\u79cd\u5199\u6cd5",level:3},{value:"2. lazyLoad",id:"2-lazyload",level:2},{value:"\u8def\u7531\u7ec4\u4ef6\u7684lazyLoad",id:"\u8def\u7531\u7ec4\u4ef6\u7684lazyload",level:3},{value:"3. Hooks",id:"3-hooks",level:2},{value:"1. React Hook/Hooks\u662f\u4ec0\u4e48?",id:"1-react-hookhooks\u662f\u4ec0\u4e48",level:4},{value:"2. \u4e09\u4e2a\u5e38\u7528\u7684Hook",id:"2-\u4e09\u4e2a\u5e38\u7528\u7684hook",level:4},{value:"3. State Hook",id:"3-state-hook",level:4},{value:"4. Effect Hook",id:"4-effect-hook",level:4},{value:"5. Ref Hook",id:"5-ref-hook",level:4},{value:"4. Fragment",id:"4-fragment",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u4f5c\u7528",id:"\u4f5c\u7528",level:3},{value:"5. Context",id:"5-context",level:2},{value:"\u7406\u89e3",id:"\u7406\u89e3",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528-1",level:3},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3},{value:"6. \u7ec4\u4ef6\u4f18\u5316",id:"6-\u7ec4\u4ef6\u4f18\u5316",level:2},{value:"Component\u76842\u4e2a\u95ee\u9898",id:"component\u76842\u4e2a\u95ee\u9898",level:3},{value:"\u6548\u7387\u9ad8\u7684\u505a\u6cd5",id:"\u6548\u7387\u9ad8\u7684\u505a\u6cd5",level:3},{value:"\u539f\u56e0",id:"\u539f\u56e0",level:3},{value:"\u89e3\u51b3",id:"\u89e3\u51b3",level:3},{value:"7. render props",id:"7-render-props",level:2},{value:"\u5982\u4f55\u5411\u7ec4\u4ef6\u5185\u90e8\u52a8\u6001\u4f20\u5165\u5e26\u5185\u5bb9\u7684\u7ed3\u6784(\u6807\u7b7e)?",id:"\u5982\u4f55\u5411\u7ec4\u4ef6\u5185\u90e8\u52a8\u6001\u4f20\u5165\u5e26\u5185\u5bb9\u7684\u7ed3\u6784\u6807\u7b7e",level:3},{value:"children props",id:"children-props",level:3},{value:"render props",id:"render-props",level:3},{value:"8. \u9519\u8bef\u8fb9\u754c",id:"8-\u9519\u8bef\u8fb9\u754c",level:2},{value:"\u7406\u89e3\uff1a",id:"\u7406\u89e3-1",level:4},{value:"\u7279\u70b9\uff1a",id:"\u7279\u70b9",level:4},{value:"\u4f7f\u7528\u65b9\u5f0f\uff1a",id:"\u4f7f\u7528\u65b9\u5f0f",level:5},{value:"9. \u7ec4\u4ef6\u901a\u4fe1\u65b9\u5f0f\u603b\u7ed3",id:"9-\u7ec4\u4ef6\u901a\u4fe1\u65b9\u5f0f\u603b\u7ed3",level:2},{value:"\u7ec4\u4ef6\u95f4\u7684\u5173\u7cfb\uff1a",id:"\u7ec4\u4ef6\u95f4\u7684\u5173\u7cfb",level:4},{value:"\u51e0\u79cd\u901a\u4fe1\u65b9\u5f0f\uff1a",id:"\u51e0\u79cd\u901a\u4fe1\u65b9\u5f0f",level:4},{value:"\u6bd4\u8f83\u597d\u7684\u642d\u914d\u65b9\u5f0f\uff1a",id:"\u6bd4\u8f83\u597d\u7684\u642d\u914d\u65b9\u5f0f",level:4}],u={toc:i},d="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react\u6269\u5c55\u5185\u5bb9"},"React\u6269\u5c55\u5185\u5bb9"),(0,o.kt)("p",null,"\u91c7\u7528\u7ec4\u4ef6\u5316\u6a21\u5f0f\uff0c\u58f0\u660e\u5f0f\u7f16\u7801\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u53ca\u7ec4\u4ef6\u590d\u7528\u7387\u3002\n\u5728React Native\u4e2d\u53ef\u4ee5\u4f7f\u7528React\u8bed\u6cd5\u8fdb\u884c\u79fb\u52a8\u7aef\u5f00\u53d1\u3002\n\u4f7f\u7528\u865a\u62dfDOM+\u4f18\u79c0\u7684Diffing\u7b97\u6cd5\uff0c\u5c3d\u91cf\u51cf\u5c11\u4e0e\u771f\u5b9eDOM\u7684\u4ea4\u4e92\u3002"),(0,o.kt)("h2",{id:"1-setstate"},"1. setState"),(0,o.kt)("h3",{id:"setstate\u66f4\u65b0\u72b6\u6001\u76842\u79cd\u5199\u6cd5"},"setState\u66f4\u65b0\u72b6\u6001\u76842\u79cd\u5199\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    (1). setState(stateChange, [callback])------\u5bf9\u8c61\u5f0f\u7684setState\n            1.stateChange\u4e3a\u72b6\u6001\u6539\u53d8\u5bf9\u8c61(\u8be5\u5bf9\u8c61\u53ef\u4ee5\u4f53\u73b0\u51fa\u72b6\u6001\u7684\u66f4\u6539)\n            2.callback\u662f\u53ef\u9009\u7684\u56de\u8c03\u51fd\u6570, \u5b83\u5728\u72b6\u6001\u66f4\u65b0\u5b8c\u6bd5\u3001\u754c\u9762\u4e5f\u66f4\u65b0\u540e(render\u8c03\u7528\u540e)\u624d\u88ab\u8c03\u7528\n                    \n    (2). setState(updater, [callback])------\u51fd\u6570\u5f0f\u7684setState\n            1.updater\u4e3a\u8fd4\u56destateChange\u5bf9\u8c61\u7684\u51fd\u6570\u3002\n            2.updater\u53ef\u4ee5\u63a5\u6536\u5230state\u548cprops\u3002\n            4.callback\u662f\u53ef\u9009\u7684\u56de\u8c03\u51fd\u6570, \u5b83\u5728\u72b6\u6001\u66f4\u65b0\u3001\u754c\u9762\u4e5f\u66f4\u65b0\u540e(render\u8c03\u7528\u540e)\u624d\u88ab\u8c03\u7528\u3002\n\u603b\u7ed3:\n        1.\u5bf9\u8c61\u5f0f\u7684setState\u662f\u51fd\u6570\u5f0f\u7684setState\u7684\u7b80\u5199\u65b9\u5f0f(\u8bed\u6cd5\u7cd6)\n        2.\u4f7f\u7528\u539f\u5219\uff1a\n                (1).\u5982\u679c\u65b0\u72b6\u6001\u4e0d\u4f9d\u8d56\u4e8e\u539f\u72b6\u6001 ===> \u4f7f\u7528\u5bf9\u8c61\u65b9\u5f0f\n                (2).\u5982\u679c\u65b0\u72b6\u6001\u4f9d\u8d56\u4e8e\u539f\u72b6\u6001 ===> \u4f7f\u7528\u51fd\u6570\u65b9\u5f0f\n                (3).\u5982\u679c\u9700\u8981\u5728setState()\u6267\u884c\u540e\u83b7\u53d6\u6700\u65b0\u7684\u72b6\u6001\u6570\u636e, \n                    \u8981\u5728\u7b2c\u4e8c\u4e2acallback\u51fd\u6570\u4e2d\u8bfb\u53d6\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2-lazyload"},"2. lazyLoad"),(0,o.kt)("h3",{id:"\u8def\u7531\u7ec4\u4ef6\u7684lazyload"},"\u8def\u7531\u7ec4\u4ef6\u7684lazyLoad"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'    //1.\u901a\u8fc7React\u7684lazy\u51fd\u6570\u914d\u5408import()\u51fd\u6570\u52a8\u6001\u52a0\u8f7d\u8def\u7531\u7ec4\u4ef6 ===> \u8def\u7531\u7ec4\u4ef6\u4ee3\u7801\u4f1a\u88ab\u5206\u5f00\u6253\u5305\n    const Login = lazy(()=>import(\'@/pages/Login\'))\n    \n    //2.\u901a\u8fc7<Suspense>\u6307\u5b9a\u5728\u52a0\u8f7d\u5f97\u5230\u8def\u7531\u6253\u5305\u6587\u4ef6\u524d\u663e\u793a\u4e00\u4e2a\u81ea\u5b9a\u4e49loading\u754c\u9762\n    <Suspense fallback={<h1>loading.....</h1>}>\n        <Switch>\n            <Route path="/xxx" component={Xxxx}/>\n            <Redirect to="/login"/>\n        </Switch>\n    </Suspense>\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"3-hooks"},"3. Hooks"),(0,o.kt)("h4",{id:"1-react-hookhooks\u662f\u4ec0\u4e48"},"1. React Hook/Hooks\u662f\u4ec0\u4e48?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(1). Hook\u662fReact 16.8.0\u7248\u672c\u589e\u52a0\u7684\u65b0\u7279\u6027/\u65b0\u8bed\u6cd5\n(2). \u53ef\u4ee5\u8ba9\u4f60\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u4f7f\u7528 state \u4ee5\u53ca\u5176\u4ed6\u7684 React \u7279\u6027\n")),(0,o.kt)("h4",{id:"2-\u4e09\u4e2a\u5e38\u7528\u7684hook"},"2. \u4e09\u4e2a\u5e38\u7528\u7684Hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(1). State Hook: React.useState()\n(2). Effect Hook: React.useEffect()\n(3). Ref Hook: React.useRef()\n")),(0,o.kt)("h4",{id:"3-state-hook"},"3. State Hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(1). State Hook\u8ba9\u51fd\u6570\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u6709state\u72b6\u6001, \u5e76\u8fdb\u884c\u72b6\u6001\u6570\u636e\u7684\u8bfb\u5199\u64cd\u4f5c\n(2). \u8bed\u6cd5: const [xxx, setXxx] = React.useState(initValue)  \n(3). useState()\u8bf4\u660e:\n        \u53c2\u6570: \u7b2c\u4e00\u6b21\u521d\u59cb\u5316\u6307\u5b9a\u7684\u503c\u5728\u5185\u90e8\u4f5c\u7f13\u5b58\n        \u8fd4\u56de\u503c: \u5305\u542b2\u4e2a\u5143\u7d20\u7684\u6570\u7ec4, \u7b2c1\u4e2a\u4e3a\u5185\u90e8\u5f53\u524d\u72b6\u6001\u503c, \u7b2c2\u4e2a\u4e3a\u66f4\u65b0\u72b6\u6001\u503c\u7684\u51fd\u6570\n(4). setXxx()2\u79cd\u5199\u6cd5:\n        setXxx(newValue): \u53c2\u6570\u4e3a\u975e\u51fd\u6570\u503c, \u76f4\u63a5\u6307\u5b9a\u65b0\u7684\u72b6\u6001\u503c, \u5185\u90e8\u7528\u5176\u8986\u76d6\u539f\u6765\u7684\u72b6\u6001\u503c\n        setXxx(value => newValue): \u53c2\u6570\u4e3a\u51fd\u6570, \u63a5\u6536\u539f\u672c\u7684\u72b6\u6001\u503c, \u8fd4\u56de\u65b0\u7684\u72b6\u6001\u503c, \u5185\u90e8\u7528\u5176\u8986\u76d6\u539f\u6765\u7684\u72b6\u6001\u503c\n")),(0,o.kt)("h4",{id:"4-effect-hook"},"4. Effect Hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(1). Effect Hook \u53ef\u4ee5\u8ba9\u4f60\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u6267\u884c\u526f\u4f5c\u7528\u64cd\u4f5c(\u7528\u4e8e\u6a21\u62df\u7c7b\u7ec4\u4ef6\u4e2d\u7684\u751f\u547d\u5468\u671f\u94a9\u5b50)\n(2). React\u4e2d\u7684\u526f\u4f5c\u7528\u64cd\u4f5c:\n        \u53d1ajax\u8bf7\u6c42\u6570\u636e\u83b7\u53d6\n        \u8bbe\u7f6e\u8ba2\u9605 / \u542f\u52a8\u5b9a\u65f6\u5668\n        \u624b\u52a8\u66f4\u6539\u771f\u5b9eDOM\n(3). \u8bed\u6cd5\u548c\u8bf4\u660e: \n        useEffect(() => { \n          // \u5728\u6b64\u53ef\u4ee5\u6267\u884c\u4efb\u4f55\u5e26\u526f\u4f5c\u7528\u64cd\u4f5c\n          return () => { // \u5728\u7ec4\u4ef6\u5378\u8f7d\u524d\u6267\u884c\n            // \u5728\u6b64\u505a\u4e00\u4e9b\u6536\u5c3e\u5de5\u4f5c, \u6bd4\u5982\u6e05\u9664\u5b9a\u65f6\u5668/\u53d6\u6d88\u8ba2\u9605\u7b49\n          }\n        }, [stateValue]) // \u5982\u679c\u6307\u5b9a\u7684\u662f[], \u56de\u8c03\u51fd\u6570\u53ea\u4f1a\u5728\u7b2c\u4e00\u6b21render()\u540e\u6267\u884c\n    \n(4). \u53ef\u4ee5\u628a useEffect Hook \u770b\u505a\u5982\u4e0b\u4e09\u4e2a\u51fd\u6570\u7684\u7ec4\u5408\n        componentDidMount()\n        componentDidUpdate()\n        componentWillUnmount() \n")),(0,o.kt)("h4",{id:"5-ref-hook"},"5. Ref Hook"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(1). Ref Hook\u53ef\u4ee5\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u5b58\u50a8/\u67e5\u627e\u7ec4\u4ef6\u5185\u7684\u6807\u7b7e\u6216\u4efb\u610f\u5176\u5b83\u6570\u636e\n(2). \u8bed\u6cd5: const refContainer = useRef()\n(3). \u4f5c\u7528:\u4fdd\u5b58\u6807\u7b7e\u5bf9\u8c61,\u529f\u80fd\u4e0eReact.createRef()\u4e00\u6837\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"4-fragment"},"4. Fragment"),(0,o.kt)("h3",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<Fragment><Fragment>\n<></>\n")),(0,o.kt)("h3",{id:"\u4f5c\u7528"},"\u4f5c\u7528"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u4e0d\u7528\u5fc5\u987b\u6709\u4e00\u4e2a\u771f\u5b9e\u7684DOM\u6839\u6807\u7b7e\u4e86")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"5-context"},"5. Context"),(0,o.kt)("h3",{id:"\u7406\u89e3"},"\u7406\u89e3"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e00\u79cd\u7ec4\u4ef6\u95f4\u901a\u4fe1\u65b9\u5f0f, \u5e38\u7528\u4e8e\u3010\u7956\u7ec4\u4ef6\u3011\u4e0e\u3010\u540e\u4ee3\u7ec4\u4ef6\u3011\u95f4\u901a\u4fe1")),(0,o.kt)("h3",{id:"\u4f7f\u7528-1"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"1) \u521b\u5efaContext\u5bb9\u5668\u5bf9\u8c61\uff1a\n    const XxxContext = React.createContext()  \n    \n2) \u6e32\u67d3\u5b50\u7ec4\u65f6\uff0c\u5916\u9762\u5305\u88f9xxxContext.Provider, \u901a\u8fc7value\u5c5e\u6027\u7ed9\u540e\u4ee3\u7ec4\u4ef6\u4f20\u9012\u6570\u636e\uff1a\n    <xxxContext.Provider value={\u6570\u636e}>\n        \u5b50\u7ec4\u4ef6\n    </xxxContext.Provider>\n    \n3) \u540e\u4ee3\u7ec4\u4ef6\u8bfb\u53d6\u6570\u636e\uff1a\n\n    //\u7b2c\u4e00\u79cd\u65b9\u5f0f:\u4ec5\u9002\u7528\u4e8e\u7c7b\u7ec4\u4ef6 \n      static contextType = xxxContext  // \u58f0\u660e\u63a5\u6536context\n      this.context // \u8bfb\u53d6context\u4e2d\u7684value\u6570\u636e\n      \n    //\u7b2c\u4e8c\u79cd\u65b9\u5f0f: \u51fd\u6570\u7ec4\u4ef6\u4e0e\u7c7b\u7ec4\u4ef6\u90fd\u53ef\u4ee5\n      <xxxContext.Consumer>\n        {\n          value => ( // value\u5c31\u662fcontext\u4e2d\u7684value\u6570\u636e\n            \u8981\u663e\u793a\u7684\u5185\u5bb9\n          )\n        }\n      </xxxContext.Consumer>\n")),(0,o.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5728\u5e94\u7528\u5f00\u53d1\u4e2d\u4e00\u822c\u4e0d\u7528context, \u4e00\u822c\u90fd\u7528\u5b83\u7684\u5c01\u88c5react\u63d2\u4ef6\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"6-\u7ec4\u4ef6\u4f18\u5316"},"6. \u7ec4\u4ef6\u4f18\u5316"),(0,o.kt)("h3",{id:"component\u76842\u4e2a\u95ee\u9898"},"Component\u76842\u4e2a\u95ee\u9898"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53ea\u8981\u6267\u884csetState(),\u5373\u4f7f\u4e0d\u6539\u53d8\u72b6\u6001\u6570\u636e, \u7ec4\u4ef6\u4e5f\u4f1a\u91cd\u65b0render() ==> \u6548\u7387\u4f4e")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53ea\u5f53\u524d\u7ec4\u4ef6\u91cd\u65b0render(), \u5c31\u4f1a\u81ea\u52a8\u91cd\u65b0render\u5b50\u7ec4\u4ef6\uff0c\u7eb5\u4f7f\u5b50\u7ec4\u4ef6\u6ca1\u6709\u7528\u5230\u7236\u7ec4\u4ef6\u7684\u4efb\u4f55\u6570\u636e ==> \u6548\u7387\u4f4e")))),(0,o.kt)("h3",{id:"\u6548\u7387\u9ad8\u7684\u505a\u6cd5"},"\u6548\u7387\u9ad8\u7684\u505a\u6cd5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," \u53ea\u6709\u5f53\u7ec4\u4ef6\u7684state\u6216props\u6570\u636e\u53d1\u751f\u6539\u53d8\u65f6\u624d\u91cd\u65b0render()")),(0,o.kt)("h3",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," Component\u4e2d\u7684shouldComponentUpdate()\u603b\u662f\u8fd4\u56detrue")),(0,o.kt)("h3",{id:"\u89e3\u51b3"},"\u89e3\u51b3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u529e\u6cd51: \n    \u91cd\u5199shouldComponentUpdate()\u65b9\u6cd5\n    \u6bd4\u8f83\u65b0\u65e7state\u6216props\u6570\u636e, \u5982\u679c\u6709\u53d8\u5316\u624d\u8fd4\u56detrue, \u5982\u679c\u6ca1\u6709\u8fd4\u56defalse\n\u529e\u6cd52:  \n    \u4f7f\u7528PureComponent\n    PureComponent\u91cd\u5199\u4e86shouldComponentUpdate(), \u53ea\u6709state\u6216props\u6570\u636e\u6709\u53d8\u5316\u624d\u8fd4\u56detrue\n    \u6ce8\u610f: \n        \u53ea\u662f\u8fdb\u884cstate\u548cprops\u6570\u636e\u7684\u6d45\u6bd4\u8f83, \u5982\u679c\u53ea\u662f\u6570\u636e\u5bf9\u8c61\u5185\u90e8\u6570\u636e\u53d8\u4e86, \u8fd4\u56defalse  \n        \u4e0d\u8981\u76f4\u63a5\u4fee\u6539state\u6570\u636e, \u800c\u662f\u8981\u4ea7\u751f\u65b0\u6570\u636e\n\u9879\u76ee\u4e2d\u4e00\u822c\u4f7f\u7528PureComponent\u6765\u4f18\u5316\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"7-render-props"},"7. render props"),(0,o.kt)("h3",{id:"\u5982\u4f55\u5411\u7ec4\u4ef6\u5185\u90e8\u52a8\u6001\u4f20\u5165\u5e26\u5185\u5bb9\u7684\u7ed3\u6784\u6807\u7b7e"},"\u5982\u4f55\u5411\u7ec4\u4ef6\u5185\u90e8\u52a8\u6001\u4f20\u5165\u5e26\u5185\u5bb9\u7684\u7ed3\u6784(\u6807\u7b7e)?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Vue\u4e2d: \n    \u4f7f\u7528slot\u6280\u672f, \u4e5f\u5c31\u662f\u901a\u8fc7\u7ec4\u4ef6\u6807\u7b7e\u4f53\u4f20\u5165\u7ed3\u6784  <A><B/></A>\nReact\u4e2d:\n    \u4f7f\u7528children props: \u901a\u8fc7\u7ec4\u4ef6\u6807\u7b7e\u4f53\u4f20\u5165\u7ed3\u6784\n    \u4f7f\u7528render props: \u901a\u8fc7\u7ec4\u4ef6\u6807\u7b7e\u5c5e\u6027\u4f20\u5165\u7ed3\u6784,\u800c\u4e14\u53ef\u4ee5\u643a\u5e26\u6570\u636e\uff0c\u4e00\u822c\u7528render\u51fd\u6570\u5c5e\u6027\n")),(0,o.kt)("h3",{id:"children-props"},"children props"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<A>\n  <B>xxxx</B>\n</A>\n{this.props.children}\n\u95ee\u9898: \u5982\u679cB\u7ec4\u4ef6\u9700\u8981A\u7ec4\u4ef6\u5185\u7684\u6570\u636e, ==> \u505a\u4e0d\u5230 \n")),(0,o.kt)("h3",{id:"render-props"},"render props"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<A render={(data) => <C data={data}></C>}></A>\nA\u7ec4\u4ef6: {this.props.render(\u5185\u90e8state\u6570\u636e)}\nC\u7ec4\u4ef6: \u8bfb\u53d6A\u7ec4\u4ef6\u4f20\u5165\u7684\u6570\u636e\u663e\u793a {this.props.data} \n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"8-\u9519\u8bef\u8fb9\u754c"},"8. \u9519\u8bef\u8fb9\u754c"),(0,o.kt)("h4",{id:"\u7406\u89e3-1"},"\u7406\u89e3\uff1a"),(0,o.kt)("p",null,"\u9519\u8bef\u8fb9\u754c(Error boundary)\uff1a\u7528\u6765\u6355\u83b7\u540e\u4ee3\u7ec4\u4ef6\u9519\u8bef\uff0c\u6e32\u67d3\u51fa\u5907\u7528\u9875\u9762"),(0,o.kt)("h4",{id:"\u7279\u70b9"},"\u7279\u70b9\uff1a"),(0,o.kt)("p",null,"\u53ea\u80fd\u6355\u83b7\u540e\u4ee3\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u4ea7\u751f\u7684\u9519\u8bef\uff0c\u4e0d\u80fd\u6355\u83b7\u81ea\u5df1\u7ec4\u4ef6\u4ea7\u751f\u7684\u9519\u8bef\u548c\u5176\u4ed6\u7ec4\u4ef6\u5728\u5408\u6210\u4e8b\u4ef6\u3001\u5b9a\u65f6\u5668\u4e2d\u4ea7\u751f\u7684\u9519\u8bef"),(0,o.kt)("h5",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,o.kt)("p",null,"getDerivedStateFromError\u914d\u5408componentDidCatch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u4e00\u65e6\u540e\u53f0\u7ec4\u4ef6\u62a5\u9519\uff0c\u5c31\u4f1a\u89e6\u53d1\nstatic getDerivedStateFromError(error) {\n    console.log(error);\n    // \u5728render\u4e4b\u524d\u89e6\u53d1\n    // \u8fd4\u56de\u65b0\u7684state\n    return {\n        hasError: true,\n    };\n}\n\ncomponentDidCatch(error, info) {\n    // \u7edf\u8ba1\u9875\u9762\u7684\u9519\u8bef\u3002\u53d1\u9001\u8bf7\u6c42\u53d1\u9001\u5230\u540e\u53f0\u53bb\n    console.log(error, info);\n}\n")),(0,o.kt)("h2",{id:"9-\u7ec4\u4ef6\u901a\u4fe1\u65b9\u5f0f\u603b\u7ed3"},"9. \u7ec4\u4ef6\u901a\u4fe1\u65b9\u5f0f\u603b\u7ed3"),(0,o.kt)("h4",{id:"\u7ec4\u4ef6\u95f4\u7684\u5173\u7cfb"},"\u7ec4\u4ef6\u95f4\u7684\u5173\u7cfb\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7236\u5b50\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u5144\u5f1f\u7ec4\u4ef6\uff08\u975e\u5d4c\u5957\u7ec4\u4ef6\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u7956\u5b59\u7ec4\u4ef6\uff08\u8de8\u7ea7\u7ec4\u4ef6\uff09")),(0,o.kt)("h4",{id:"\u51e0\u79cd\u901a\u4fe1\u65b9\u5f0f"},"\u51e0\u79cd\u901a\u4fe1\u65b9\u5f0f\uff1a"),(0,o.kt)("p",null,"1.props\uff1a\n(1).children props\n(2).render props\n2.\u6d88\u606f\u8ba2\u9605-\u53d1\u5e03\uff1a\npubs-sub\u3001event\u7b49\u7b49\n3.\u96c6\u4e2d\u5f0f\u7ba1\u7406\uff1a\nredux\u3001dva\u7b49\u7b49\n4.conText:\n\u751f\u4ea7\u8005-\u6d88\u8d39\u8005\u6a21\u5f0f"),(0,o.kt)("h4",{id:"\u6bd4\u8f83\u597d\u7684\u642d\u914d\u65b9\u5f0f"},"\u6bd4\u8f83\u597d\u7684\u642d\u914d\u65b9\u5f0f\uff1a"),(0,o.kt)("p",null,"\u7236\u5b50\u7ec4\u4ef6\uff1aprops\n\u5144\u5f1f\u7ec4\u4ef6\uff1a\u6d88\u606f\u8ba2\u9605-\u53d1\u5e03\u3001\u96c6\u4e2d\u5f0f\u7ba1\u7406\n\u7956\u5b59\u7ec4\u4ef6(\u8de8\u7ea7\u7ec4\u4ef6)\uff1a\u6d88\u606f\u8ba2\u9605-\u53d1\u5e03\u3001\u96c6\u4e2d\u5f0f\u7ba1\u7406\u3001conText(\u5f00\u53d1\u7528\u7684\u5c11\uff0c\u5c01\u88c5\u63d2\u4ef6\u7528\u7684\u591a)"))}s.isMDXComponent=!0}}]);