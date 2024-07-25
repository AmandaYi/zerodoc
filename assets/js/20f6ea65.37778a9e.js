"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[5964],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={},c="JWT\u751f\u6210",a={unversionedId:"go-zero/extension/gen-jwt",id:"go-zero/extension/gen-jwt",title:"JWT\u751f\u6210",description:"\u751f\u6210jwt token",source:"@site/docs/go-zero/extension/gen-jwt.md",sourceDirName:"go-zero/extension",slug:"/go-zero/extension/gen-jwt",permalink:"/zerodoc/docs/go-zero/extension/gen-jwt",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"GoZero",previous:{title:"\u4f7f\u7528 HTTP Middleware",permalink:"/zerodoc/docs/go-zero/extension/HTTP Middleware"},next:{title:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f(header)",permalink:"/zerodoc/docs/go-zero/extension/get-header"}},s={},l=[],p={toc:l},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jwt\u751f\u6210"},"JWT\u751f\u6210"),(0,o.kt)("h1",{id:"\u6982\u8981"},"\u6982\u8981"),(0,o.kt)("p",null,"\u751f\u6210jwt token"),(0,o.kt)("h1",{id:"\u589e\u52a0\u914d\u7f6e\u9879"},"\u589e\u52a0\u914d\u7f6e\u9879"),(0,o.kt)("p",null,"\u7f16\u8f91config.go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vi book/user/api/internal/config/config.go\n")),(0,o.kt)("p",null,"\u65b0\u589ejwt\u914d\u7f6e\u9879\u540e\u5f97\u5230\u5982\u4e0b\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'package config\n\nimport (\n    "github.com/zeromicro/go-zero/rest"\n)\n\ntype Config struct {\n    rest.RestConf\n    Mysql struct {\n        DataSource string\n    }\n    Auth struct {\n        AccessSecret string\n        AccessExpire int64\n    }\n}\n')),(0,o.kt)("p",null,"\u7f16\u8f91 user-api.yaml\u6587\u4ef6\uff0c\u589e\u52a0Jwt\u914d\u7f6e\u540e\u5f97\u5230\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Name: user-api\nHost: 0.0.0.0\nPort: 8888\nMysql:\n  DataSource: user:password@tcp(127.0.0.1:3306)/gozero?charset=utf8mb4&parseTime=true&loc=Asia%2FShanghai\nAuth:\n  AccessSecret: ad879037-c7a4-4063-9236-6bfc35d54b7d\n  AccessExpire: 86400\n")),(0,o.kt)("p",null,"NOTE: ",(0,o.kt)("inlineCode",{parentName:"p"},"user"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"password"),"\u9700\u8981\u66ff\u6362\u4e3a\u5b9e\u9645\u7684\u503c"),(0,o.kt)("h1",{id:"\u4fee\u6539loginlogicgo"},"\u4fee\u6539loginlogic.go"),(0,o.kt)("p",null,"\u589e\u52a0\u65b9\u6cd5getJwtToken"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (l *LoginLogic) getJwtToken(secretKey string, iat, seconds, userId int64) (string, error) {\n    claims := make(jwt.MapClaims)\n    claims["exp"] = iat + seconds\n    claims["iat"] = iat\n    claims["userId"] = userId\n    token := jwt.New(jwt.SigningMethodHS256)\n    token.Claims = claims\n    return token.SignedString([]byte(secretKey))\n}\n')),(0,o.kt)("p",null,"\u4fee\u6539Login\u65b9\u6cd5\u8fd4\u56dejwt token\u7ed9\u5ba2\u6237\u7aef\uff0c\u6700\u7ec8\u4ee3\u7801\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'package logic\n\nimport (\n    "book/user/api/internal/svc"\n    "book/user/api/internal/types"\n    "book/user/model"\n    "context"\n    "time"\n\n    "github.com/dgrijalva/jwt-go"\n    "github.com/zeromicro/go-zero/core/logx"\n)\n\ntype LoginLogic struct {\n    logx.Logger\n    ctx    context.Context\n    svcCtx *svc.ServiceContext\n}\n\nfunc NewLoginLogic(ctx context.Context, svcCtx *svc.ServiceContext) LoginLogic {\n    return LoginLogic{\n        Logger: logx.WithContext(ctx),\n        ctx:    ctx,\n        svcCtx: svcCtx,\n    }\n}\n\nfunc (l *LoginLogic) Login(req types.LoginReq) (*types.UserReply, error) {\n    // \u5ffd\u7565\u903b\u8f91\u6821\u9a8c\n    userInfo, err := l.svcCtx.UserModel.FindOneByName(req.Username)\n    switch err {\n    case nil:\n        if userInfo.Password != req.Password {\n            return nil, errorIncorrectPassword\n        }\n        now := time.Now().Unix()\n        accessExpire := l.svcCtx.Config.Auth.AccessExpire\n        jwtToken, err := l.getJwtToken(l.svcCtx.Config.Auth.AccessSecret, now, accessExpire, userInfo.Id)\n        if err != nil {\n            return nil, err\n        }\n\n        return &types.UserReply{\n            Id:       userInfo.Id,\n            Username: userInfo.Name,\n            Mobile:   userInfo.Mobile,\n            Nickname: userInfo.Nickname,\n            Gender:   userInfo.Gender,\n            JwtToken: types.JwtToken{\n                AccessToken:  jwtToken,\n                AccessExpire: now + accessExpire,\n                RefreshAfter: now + accessExpire/2,\n            },\n        }, nil\n    case model.ErrNotFound:\n        return nil, errorUsernameUnRegister\n    default:\n        return nil, err\n    }\n}\n\nfunc (l *LoginLogic) getJwtToken(secretKey string, iat, seconds, userId int64) (string, error) {\n    claims := make(jwt.MapClaims)\n    claims["exp"] = iat + seconds\n    claims["iat"] = iat\n    claims["userId"] = userId\n    token := jwt.New(jwt.SigningMethodHS256)\n    token.Claims = claims\n    return token.SignedString([]byte(secretKey))\n}\n')),(0,o.kt)("h1",{id:"\u767b\u5f55\u6821\u9a8c"},"\u767b\u5f55\u6821\u9a8c"),(0,o.kt)("p",null,"\u542f\u52a8user api\u670d\u52a1\uff0c\u6211\u4eec\u767b\u5f55\u770b\u770b\u662f\u5426\u80fd\u591f\u8fbe\u5230\u6211\u4eec\u9884\u671f\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X POST \\\n  http://127.0.0.1:8888/user/login \\\n  -H \'cache-control: no-cache\' \\\n  -H \'content-type: application/json\' \\\n  -d \'{\n        "username":"admin",\n        "password":"666666"\n}\'\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1awindows\u7cfb\u7edfcurl json\u9700\u8981\u5bf9json\u8fdb\u884c\u8f6c\u4e49\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2020/png/465993/1603555488123-96e688eb-c8e4-4fd1-8a3f-8bc8e63e81a3.png#align=left&display=inline&height=724&margin=%5Bobject%20Object%5D&name=curl-login-jwt.png&originHeight=724&originWidth=2224&size=194564&status=done&style=none&width=2224",alt:"curl-login-jwt.png"})))}g.isMDXComponent=!0}}]);