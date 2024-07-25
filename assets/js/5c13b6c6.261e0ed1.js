"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[5925],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?o.createElement(b,l(l({ref:n},u),{},{components:t})):o.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={},l="30-\u603b\u7ed3webpack",i={unversionedId:"js/webpack3/30",id:"js/webpack3/30",title:"30-\u603b\u7ed3webpack",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/docs/js/webpack3/30.md",sourceDirName:"js/webpack3",slug:"/js/webpack3/30",permalink:"/zerodoc/docs/js/webpack3/30",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"JSWebpack3",previous:{title:"29-\u70ed\u66ff\u6362\u6a21\u5757(\u57fa\u672c\u65e0\u7528)",permalink:"/zerodoc/docs/js/webpack3/29"},next:{title:"webpack\u7684\u5e38\u7528\u529f\u80fd\u7cfb\u5217\uff0c\u5b66\u4f1a\u5c31\u80fd\u5b8c\u6574\u638c\u63e1Webpack\uff0c\u89c1\u5de6\u4fa7\u3002",permalink:"/zerodoc/docs/js/webpack3/"}},s={},p=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u56db\u4e2a\u57fa\u672c\u7684\u914d\u7f6e\u9879",id:"\u56db\u4e2a\u57fa\u672c\u7684\u914d\u7f6e\u9879",level:2},{value:"1. \u5165\u53e3",id:"1-\u5165\u53e3",level:3},{value:"2. \u51fa\u53e3,",id:"2-\u51fa\u53e3",level:3},{value:"3. Loaders",id:"3-loaders",level:3},{value:"4. \u63d2\u4ef6",id:"4-\u63d2\u4ef6",level:3},{value:"\u540d\u8bcd",id:"\u540d\u8bcd",level:2},{value:"webpack\u547d\u4ee4",id:"webpack\u547d\u4ee4",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"30-\u603b\u7ed3webpack"},"30-\u603b\u7ed3webpack"),(0,a.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,a.kt)("p",null,"\u5728webpack\u7684\u8303\u56f4\u5185\uff0c\u8ba4\u4e3a\u4e00\u5207\u90fd\u662f\u6a21\u5757\u548c\u6a21\u5757\u7684\u4f9d\u8d56\u5173\u7cfb\u3002"),(0,a.kt)("h2",{id:"\u56db\u4e2a\u57fa\u672c\u7684\u914d\u7f6e\u9879"},"\u56db\u4e2a\u57fa\u672c\u7684\u914d\u7f6e\u9879"),(0,a.kt)("p",null,"\u9700\u8981\u9996\u5148\u5728\u9879\u76ee\u7684\u91cc\u9762\u5efa\u7acb\u6587\u4ef6"),(0,a.kt)("p",null,"Webpack.config.js,\u6216\u8005\u5176\u4ed6\u7684\u540d\u5b57\u4e5f\u53ef\u4ee5\u4e86,\u4e0d\u8fc7\u9700\u8981webpack \u8fd0\u884c\u7684\u65f6\u5019\u9700\u8981\u8fdb\u884c\u6307\u5b9a\u6587\u4ef6\u7684\u540d\u5b57"),(0,a.kt)("p",null,"\u6bd4\u5982\n",(0,a.kt)("inlineCode",{parentName:"p"},"Webpack --config  webpack.config.js")),(0,a.kt)("h3",{id:"1-\u5165\u53e3"},"1. \u5165\u53e3"),(0,a.kt)("p",null,"entry"),(0,a.kt)("p",null,"\u6709\u4e09\u79cd\u914d\u7f6e\u7684\u65b9\u5f0f,\u4e00\u822c\u63a8\u8350\u6700\u540e\u4e00\u79cd\u7684\u914d\u7f6e\u65b9\u5f0f "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n    // \u7b2c\u4e00\u79cd\u65b9\u5f0f,\u5b9a\u4e49\u4e00\u4e2a\u5355\u72ec\u7684\u5165\u53e3\n    //entry:"./app.js",\n    // \u7b2c\u4e8c\u79cd\u65b9\u5f0f,\u901a\u8fc7\u6570\u7ec4\u7684\u65b9\u5f0f\u5b9a\u4e49\u591a\u4e2a\u5165\u53e3\n    // entry:["./app.js","./index.js"]\n    // \u7b2c\u4e09\u79cd\u65b9\u5f0f,\u901a\u8fc7\u5bf9\u8c61\u7684\u65b9\u5f0f\u5b9a\u4e49\u5165\u53e3,\u7136\u540e\u7ed9\u6bcf\u4e00\u4e2a\u5165\u53e3\u4e00\u4e2achunk\n    // entry:{\n    // app:["./app.js","./index.js"],\n    // index:"./idnex.js"\n    // }\n}\n')),(0,a.kt)("h3",{id:"2-\u51fa\u53e3"},"2. \u51fa\u53e3,"),(0,a.kt)("p",null,"Output"),(0,a.kt)("p",null,"\u4f5c\u7528\uff1a \u6253\u5305\u6210\u7684\u6587\u4ef6(bundle)\uff0c"),(0,a.kt)("p",null,"\u5176\u4ed6\uff1a\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u51fa\u53e3\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u89c4\u5219\uff0c\u53ef\u4ee5\u914d\u7f6eCDN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n    // \u7b2c\u4e00\u79cd\u65b9\u5f0f\uff0c\u76f4\u63a5\u8fdb\u884c\u6307\u5b9a\u8f93\u51fa\u7684\u6587\u4ef6\u540d\n    // output:{\n    // filename:"index.min.js"\n    // }\n    // \u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff0c\u5bf9\u6307\u5b9a\u6587\u4ef6\u540d\u7ed9\u5b9a\u53c2\u6570\n    // output:{\n    // filename:"[name].min.[hash:5].js"\n    // }\n    // \u7b2c\u4e09\u79cd\u65b9\u5f0f\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u51fa\u53e3\n    output: {}\n}\n')),(0,a.kt)("h3",{id:"3-loaders"},"3. Loaders"),(0,a.kt)("p",null,"\u5904\u7406\u6587\u4ef6,\u8f6c\u5316\u4e3a\u6a21\u5757,\u5f53\u7136\u8fd9\u91cc\u53ea\u662f\u4e00\u4e2a\u4e3e\u4f8b,\u4e3a\u4e86\u8bf4\u660e\u6709\u4e00\u4e2a\u914d\u7f6e\u9879\u53eb\u505aloader.use\u91cc\u4e0d\u4e00\u5b9a\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u5e38\u7528\u7684loader"),(0,a.kt)("p",null,"a. \u7f16\u8bd1\u76f8\u5173"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- babel-loader,ts-loader\n")),(0,a.kt)("p",null,"b. \u6837\u5f0f\u76f8\u5173"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- style-loader,css-loader,less-loader,postcss-loader,sass-loader\n")),(0,a.kt)("p",null,"c. \u6587\u4ef6\u76f8\u5173"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- file-loader,url-loader\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n    // \u5b9a\u4e49loaders\u7684\u65b9\u5f0f,\n    module:{\n        rules:[\n            {\n                test:/\\.css&/,\n                use:"css-loader"\n            }\n        ]\n    }\n}\n')),(0,a.kt)("h3",{id:"4-\u63d2\u4ef6"},"4. \u63d2\u4ef6"),(0,a.kt)("p",null,"plugins"),(0,a.kt)("p",null,"\u4f5c\u7528: \u53c2\u4e0e\u6253\u5305\u6574\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u5bf9\u4ee3\u7801\u7684\u6253\u5305\u4f18\u5316\u548c\u538b\u7f29\uff0c\u540c\u65f6\u4e5f\u53ef\u4ee5\u914d\u7f6e\u7f16\u8bd1\u65f6\u7684\u53d8\u91cf\uff0c\u7075\u6d3b\u5ea6\u5f88\u9ad8\u3002\u63d2\u4ef6\u5728\u6574\u4e2awebpack\u7684\u751f\u547d\u5468\u671f\u91cc\u9762\u5747\u53ef\u4ee5\u5207\u5165\u3002"),(0,a.kt)("p",null,"\u5e38\u7528\u7684plugins\na. \u4f18\u5316\u76f8\u5173"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- CommonsChunkPlugin,UglifyjsWebpackPlugin\n")),(0,a.kt)("p",null,"b. \u529f\u80fd\u76f8\u5173"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- ExtrackTextWebpackPlugin,HtmlWebpackPlugin,HotModuleReplacementPlugin,CopyWebpackPlugin\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n    // \u5b9a\u4e49\u63d2\u4ef6\u7684\u65b9\u5f0f\n    plugins: [\n        new webpack.optimize.UglifyJsPlugin()\n    ]\n}\n")),(0,a.kt)("h2",{id:"\u540d\u8bcd"},"\u540d\u8bcd"),(0,a.kt)("p",null,"a. chunk,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- \u4e00\u4e2a\u6a21\u5757\n")),(0,a.kt)("p",null,"b. Bundle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- \u8d44\u6e90\u5305,\u4e00\u6346,\u4e00\u6279\n")),(0,a.kt)("p",null,"c. Module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- \u6a21\u5757\n")),(0,a.kt)("h2",{id:"webpack\u547d\u4ee4"},"webpack\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"a. Webpack -h\nb. Webpack -v\nc. Webpack <entry>[<entry>]<output>\n    Usage: https://webpack.js.org/api/cli/\n    Usage without config file: webpack <entry> [<entry>] <output>\n    Usage with config file: webpack\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'    Config options:\n      --config       Path to the config file\n                             [string] [default: webpack.config.js or webpackfile.js]\n      --config-name  Name of the config to use                              [string]\n      --env          Environment passed to the config, when it is a function\n    \n    Basic options:\n      --context    The root directory for resolving entry point and stats\n                                           [string] [default: The current directory]\n      --entry      The entry point                                          [string]\n      --watch, -w  Watch the filesystem for changes                        [boolean]\n      --debug      Switch loaders to debug mode                            [boolean]\n      --devtool    Enable devtool for better debugging experience (Example:\n                   --devtool eval-cheap-module-source-map)                  [string]\n      -d           shortcut for --debug --devtool eval-cheap-module-source-map\n                   --output-pathinfo                                       [boolean]\n      -p           shortcut for --optimize-minimize --define\n                   process.env.NODE_ENV="production"                       [boolean]\n      --progress   Print compilation progress in percentage                [boolean]\n    \n    Module options:\n      --module-bind       Bind an extension to a loader                     [string]\n      --module-bind-post                                                    [string]\n      --module-bind-pre                                                     [string]\n    \n    Output options:\n      --output-path                 The output path for compilation assets\n                                           [string] [default: The current directory]\n      --output-filename             The output filename of the bundle\n                                                       [string] [default: [name].js]\n      --output-chunk-filename       The output filename for additional chunks\n           [string] [default: filename with [id] instead of [name] or [id] prefixed]\n      --output-source-map-filename  The output filename for the SourceMap   [string]\n      --output-public-path          The public path for the assets          [string]\n      --output-jsonp-function       The name of the jsonp function used for chunk\n                                    loading                                 [string]\n      --output-pathinfo             Include a comment with the request for every\n                                    dependency (require, import, etc.)     [boolean]\n      --output-library              Expose the exports of the entry point as library\n                                                                            [string]\n      --output-library-target       The type for exposing the exports of the entry\n                                    point as library                        [string]\n    \n    Advanced options:\n      --records-input-path       Path to the records file (reading)         [string]\n      --records-output-path      Path to the records file (writing)         [string]\n      --records-path             Path to the records file                   [string]\n      --define                   Define any free var in the bundle          [string]\n      --target                   The targeted execution environment         [string]\n      --cache                    Enable in memory caching\n                          [boolean] [default: It\'s enabled by default when watching]\n      --watch-stdin, --stdin     Exit the process when stdin is closed     [boolean]\n      --watch-aggregate-timeout  Timeout for gathering changes while watching\n      --watch-poll               The polling interval for watching (also enable\n                                 polling)                                   [string]\n      --hot                      Enables Hot Module Replacement            [boolean]\n      --prefetch                 Prefetch this request (Example: --prefetch\n                                 ./file.js)                                 [string]\n      --provide                  Provide these modules as free vars in all modules\n                                 (Example: --provide jQuery=jquery)         [string]\n      --labeled-modules          Enables labeled modules                   [boolean]\n      --plugin                   Load this plugin                           [string]\n      --bail                     Abort the compilation on first error\n                                                           [boolean] [default: null]\n      --profile                  Profile the compilation and include information in\n                                 stats                     [boolean] [default: null]\n    \n    Resolving options:\n      --resolve-alias         Setup a module alias for resolving (Example:\n                              jquery-plugin=jquery.plugin)                  [string]\n      --resolve-extensions    Setup extensions that should be used to resolve\n                              modules (Example: --resolve-extensions .es6,.js)\n                                                                             [array]\n      --resolve-loader-alias  Setup a loader alias for resolving            [string]\n    \n    Optimizing options:\n      --optimize-max-chunks      Try to keep the chunk count below a limit\n      --optimize-min-chunk-size  Try to keep the chunk size above a limit\n      --optimize-minimize        Minimize javascript and switches loaders to\n                                 minimizing                                [boolean]\n    \n    Stats options:\n      --color, --colors               Enables/Disables colors on the console\n                                               [boolean] [default: (supports-color)]\n      --sort-modules-by               Sorts the modules list by property in module\n                                                                            [string]\n      --sort-chunks-by                Sorts the chunks list by property in chunk\n                                                                            [string]\n      --sort-assets-by                Sorts the assets list by property in asset\n                                                                            [string]\n      --hide-modules                  Hides info about modules             [boolean]\n      --display-exclude               Exclude modules in the output         [string]\n      --display-modules               Display even excluded modules in the output\n                                                                           [boolean]\n      --display-max-modules           Sets the maximum number of visible modules in\n                                      output                                [number]\n      --display-chunks                Display chunks in the output         [boolean]\n      --display-entrypoints           Display entry points in the output   [boolean]\n      --display-origins               Display origins of chunks in the output\n                                                                           [boolean]\n      --display-cached                Display also cached modules in the output\n                                                                           [boolean]\n      --display-cached-assets         Display also cached assets in the output\n                                                                           [boolean]\n      --display-reasons               Display reasons about module inclusion in the\n                                      output                               [boolean]\n      --display-depth                 Display distance from entry point for each\n                                      module                               [boolean]\n      --display-used-exports          Display information about used exports in\n                                      modules (Tree Shaking)               [boolean]\n      --display-provided-exports      Display information about exports provided\n                                      from modules                         [boolean]\n      --display-optimization-bailout  Display information about why optimization\n                                      bailed out for modules               [boolean]\n      --display-error-details         Display details about errors         [boolean]\n      --display                       Select display preset (verbose, detailed,\n                                      normal, minimal, errors-only, none)   [string]\n      --verbose                       Show more details                    [boolean]\n    \n    Options:\n      --help, -h     Show help                                             [boolean]\n      --version, -v  Show version number                                   [boolean]\n      --json, -j     Prints the result as JSON.                            [boolean]\n\n')))}d.isMDXComponent=!0}}]);