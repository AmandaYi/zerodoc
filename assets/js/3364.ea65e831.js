/*! For license information please see 3364.ea65e831.js.LICENSE.txt */
"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[3364],{84415:(t,e)=>{var r,a=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),f=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function g(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case a:switch(t=t.type){case o:case i:case s:case m:case u:return t;default:switch(t=t&&t.$$typeof){case f:case l:case d:case y:case p:case c:return t;default:return e}}case n:return e}}}r=Symbol.for("react.module.reference"),e.isFragment=function(t){return g(t)===o}},14954:(t,e,r)=>{t.exports=r(84415)},75251:(t,e,r)=>{r(27418);var a=r(67294),n=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;n=o("react.element"),e.Fragment=o("react.fragment")}var s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,r){var a,o={},l=null,f=null;for(a in void 0!==r&&(l=""+r),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(f=e.ref),e)i.call(e,a)&&!c.hasOwnProperty(a)&&(o[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps)void 0===o[a]&&(o[a]=e[a]);return{$$typeof:n,type:t,key:l,ref:f,props:o,_owner:s.current}}e.jsx=l},85893:(t,e,r)=>{t.exports=r(75251)},73364:(t,e,r)=>{r.d(e,{pT:()=>ze});var a=r(67294),n=r.t(a,2);var o=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{r.insertRule(t,r.cssRules.length)}catch(a){0}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach((function(t){return t.parentNode&&t.parentNode.removeChild(t)})),this.tags=[],this.ctr=0},t}(),s=Math.abs,i=String.fromCharCode,c=Object.assign;function l(t){return t.trim()}function f(t,e,r){return t.replace(e,r)}function d(t,e){return t.indexOf(e)}function m(t,e){return 0|t.charCodeAt(e)}function u(t,e,r){return t.slice(e,r)}function p(t){return t.length}function y(t){return t.length}function h(t,e){return e.push(t),t}var g=1,v=1,b=0,x=0,w=0,k="";function C(t,e,r,a,n,o,s){return{value:t,root:e,parent:r,type:a,props:n,children:o,line:g,column:v,length:s,return:""}}function S(t,e){return c(C("",null,null,"",null,null,0),t,{length:-t.length},e)}function O(){return w=x>0?m(k,--x):0,v--,10===w&&(v=1,g--),w}function _(){return w=x<b?m(k,x++):0,v++,10===w&&(v=1,g++),w}function $(){return m(k,x)}function A(){return x}function z(t,e){return u(k,t,e)}function E(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N(t){return g=v=1,b=p(k=t),x=0,[]}function V(t){return k="",t}function Y(t){return l(z(x-1,I(91===t?t+2:40===t?t+1:t)))}function X(t){for(;(w=$())&&w<33;)_();return E(t)>2||E(w)>3?"":" "}function j(t,e){for(;--e&&_()&&!(w<48||w>102||w>57&&w<65||w>70&&w<97););return z(t,A()+(e<6&&32==$()&&32==_()))}function I(t){for(;_();)switch(w){case t:return x;case 34:case 39:34!==t&&39!==t&&I(w);break;case 40:41===t&&I(t);break;case 92:_()}return x}function R(t,e){for(;_()&&t+w!==57&&(t+w!==84||47!==$()););return"/*"+z(e,x-1)+"*"+i(47===t?t:_())}function M(t){for(;!E($());)_();return z(t,x)}var P="-ms-",T="-moz-",F="-webkit-",D="comm",L="rule",W="decl",G="@keyframes";function U(t,e){for(var r="",a=y(t),n=0;n<a;n++)r+=e(t[n],n,t,e)||"";return r}function B(t,e,r,a){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case W:return t.return=t.return||t.value;case D:return"";case G:return t.return=t.value+"{"+U(t.children,a)+"}";case L:t.value=t.props.join(",")}return p(r=U(t.children,a))?t.return=t.value+"{"+r+"}":""}function q(t){return V(H("",null,null,null,[""],t=N(t),0,[0],t))}function H(t,e,r,a,n,o,s,c,l){for(var u=0,y=0,g=s,v=0,b=0,x=0,w=1,k=1,C=1,S=0,z="",E=n,N=o,V=a,I=z;k;)switch(x=S,S=_()){case 40:if(108!=x&&58==m(I,g-1)){-1!=d(I+=f(Y(S),"&","&\f"),"&\f")&&(C=-1);break}case 34:case 39:case 91:I+=Y(S);break;case 9:case 10:case 13:case 32:I+=X(x);break;case 92:I+=j(A()-1,7);continue;case 47:switch($()){case 42:case 47:h(J(R(_(),A()),e,r),l);break;default:I+="/"}break;case 123*w:c[u++]=p(I)*C;case 125*w:case 59:case 0:switch(S){case 0:case 125:k=0;case 59+y:-1==C&&(I=f(I,/\f/g,"")),b>0&&p(I)-g&&h(b>32?K(I+";",a,r,g-1):K(f(I," ","")+";",a,r,g-2),l);break;case 59:I+=";";default:if(h(V=Z(I,e,r,u,y,n,c,z,E=[],N=[],g),o),123===S)if(0===y)H(I,e,V,V,E,o,g,c,N);else switch(99===v&&110===m(I,3)?100:v){case 100:case 108:case 109:case 115:H(t,V,V,a&&h(Z(t,V,V,0,0,n,c,z,n,E=[],g),N),n,N,g,c,a?E:N);break;default:H(I,V,V,V,[""],N,0,c,N)}}u=y=b=0,w=C=1,z=I="",g=s;break;case 58:g=1+p(I),b=x;default:if(w<1)if(123==S)--w;else if(125==S&&0==w++&&125==O())continue;switch(I+=i(S),S*w){case 38:C=y>0?1:(I+="\f",-1);break;case 44:c[u++]=(p(I)-1)*C,C=1;break;case 64:45===$()&&(I+=Y(_())),v=$(),y=g=p(z=I+=M(A())),S++;break;case 45:45===x&&2==p(I)&&(w=0)}}return o}function Z(t,e,r,a,n,o,i,c,d,m,p){for(var h=n-1,g=0===n?o:[""],v=y(g),b=0,x=0,w=0;b<a;++b)for(var k=0,S=u(t,h+1,h=s(x=i[b])),O=t;k<v;++k)(O=l(x>0?g[k]+" "+S:f(S,/&\f/g,g[k])))&&(d[w++]=O);return C(t,e,r,0===n?L:c,d,m,p)}function J(t,e,r){return C(t,e,r,D,i(w),u(t,2,-2),0)}function K(t,e,r,a){return C(t,e,r,W,u(t,0,a),u(t,a+1,-1),a)}var Q=function(t,e,r){for(var a=0,n=0;a=n,n=$(),38===a&&12===n&&(e[r]=1),!E(n);)_();return z(t,x)},tt=function(t,e){return V(function(t,e){var r=-1,a=44;do{switch(E(a)){case 0:38===a&&12===$()&&(e[r]=1),t[r]+=Q(x-1,e,r);break;case 2:t[r]+=Y(a);break;case 4:if(44===a){t[++r]=58===$()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=i(a)}}while(a=_());return t}(N(t),e))},et=new WeakMap,rt=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||et.get(r))&&!a){et.set(t,!0);for(var n=[],o=tt(e,n),s=r.props,i=0,c=0;i<o.length;i++)for(var l=0;l<s.length;l++,c++)t.props[c]=n[i]?o[i].replace(/&\f/g,s[l]):s[l]+" "+o[i]}}},at=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}};function nt(t,e){switch(function(t,e){return 45^m(t,0)?(((e<<2^m(t,0))<<2^m(t,1))<<2^m(t,2))<<2^m(t,3):0}(t,e)){case 5103:return F+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return F+t+T+t+P+t+t;case 6828:case 4268:return F+t+P+t+t;case 6165:return F+t+P+"flex-"+t+t;case 5187:return F+t+f(t,/(\w+).+(:[^]+)/,F+"box-$1$2"+P+"flex-$1$2")+t;case 5443:return F+t+P+"flex-item-"+f(t,/flex-|-self/,"")+t;case 4675:return F+t+P+"flex-line-pack"+f(t,/align-content|flex-|-self/,"")+t;case 5548:return F+t+P+f(t,"shrink","negative")+t;case 5292:return F+t+P+f(t,"basis","preferred-size")+t;case 6060:return F+"box-"+f(t,"-grow","")+F+t+P+f(t,"grow","positive")+t;case 4554:return F+f(t,/([^-])(transform)/g,"$1"+F+"$2")+t;case 6187:return f(f(f(t,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),t,"")+t;case 5495:case 3959:return f(t,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return f(f(t,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+P+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+t+t;case 4095:case 3583:case 4068:case 2532:return f(t,/(.+)-inline(.+)/,F+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(t)-1-e>6)switch(m(t,e+1)){case 109:if(45!==m(t,e+4))break;case 102:return f(t,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+T+(108==m(t,e+3)?"$3":"$2-$3"))+t;case 115:return~d(t,"stretch")?nt(f(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==m(t,e+1))break;case 6444:switch(m(t,p(t)-3-(~d(t,"!important")&&10))){case 107:return f(t,":",":"+F)+t;case 101:return f(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(45===m(t,14)?"inline-":"")+"box$3$1"+F+"$2$3$1"+P+"$2box$3")+t}break;case 5936:switch(m(t,e+11)){case 114:return F+t+P+f(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return F+t+P+f(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return F+t+P+f(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return F+t+P+t+t}return t}var ot=[function(t,e,r,a){if(t.length>-1&&!t.return)switch(t.type){case W:t.return=nt(t.value,t.length);break;case G:return U([S(t,{value:f(t.value,"@","@"+F)})],a);case L:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,(function(e){switch(function(t,e){return(t=e.exec(t))?t[0]:t}(e,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([S(t,{props:[f(e,/:(read-\w+)/,":-moz-$1")]})],a);case"::placeholder":return U([S(t,{props:[f(e,/:(plac\w+)/,":"+F+"input-$1")]}),S(t,{props:[f(e,/:(plac\w+)/,":-moz-$1")]}),S(t,{props:[f(e,/:(plac\w+)/,P+"input-$1")]})],a)}return""}))}}],st=function(t){var e=t.key;if("css"===e){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))}))}var a=t.stylisPlugins||ot;var n,s,i={},c=[];n=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)i[e[r]]=!0;c.push(t)}));var l,f,d,m,u=[B,(m=function(t){l.insert(t)},function(t){t.root||(t=t.return)&&m(t)})],p=(f=[rt,at].concat(a,u),d=y(f),function(t,e,r,a){for(var n="",o=0;o<d;o++)n+=f[o](t,e,r,a)||"";return n});s=function(t,e,r,a){l=r,U(q(t?t+"{"+e.styles+"}":e.styles),p),a&&(h.inserted[e.name]=!0)};var h={key:e,sheet:new o({key:e,container:n,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return h.sheet.hydrate(c),h};function it(t,e,r){var a="";return r.split(" ").forEach((function(r){void 0!==t[r]?e.push(t[r]+";"):a+=r+" "})),a}var ct=function(t,e,r){var a=t.key+"-"+e.name;!1===r&&void 0===t.registered[a]&&(t.registered[a]=e.styles)},lt=function(t,e,r){ct(t,e,r);var a=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var n=e;do{t.insert(e===n?"."+a:"",n,t.sheet,!0),n=n.next}while(void 0!==n)}};var ft={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function dt(t){var e=Object.create(null);return function(r){return void 0===e[r]&&(e[r]=t(r)),e[r]}}var mt=/[A-Z]|^ms/g,ut=/_EMO_([^_]+?)_([^]*?)_EMO_/g,pt=function(t){return 45===t.charCodeAt(1)},yt=function(t){return null!=t&&"boolean"!=typeof t},ht=dt((function(t){return pt(t)?t:t.replace(mt,"-$&").toLowerCase()})),gt=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(ut,(function(t,e,r){return bt={name:e,styles:r,next:bt},e}))}return 1===ft[t]||pt(t)||"number"!=typeof e||0===e?e:e+"px"};function vt(t,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return bt={name:r.name,styles:r.styles,next:bt},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)bt={name:a.name,styles:a.styles,next:bt},a=a.next;return r.styles+";"}return function(t,e,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=vt(t,e,r[n])+";";else for(var o in r){var s=r[o];if("object"!=typeof s)null!=e&&void 0!==e[s]?a+=o+"{"+e[s]+"}":yt(s)&&(a+=ht(o)+":"+gt(o,s)+";");else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=e&&void 0!==e[s[0]]){var i=vt(t,e,s);switch(o){case"animation":case"animationName":a+=ht(o)+":"+i+";";break;default:a+=o+"{"+i+"}"}}else for(var c=0;c<s.length;c++)yt(s[c])&&(a+=ht(o)+":"+gt(o,s[c])+";")}return a}(t,e,r);case"function":if(void 0!==t){var n=bt,o=r(t);return bt=n,vt(t,e,o)}}if(null==e)return r;var s=e[r];return void 0!==s?s:r}var bt,xt=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var wt=function(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var a=!0,n="";bt=void 0;var o=t[0];null==o||void 0===o.raw?(a=!1,n+=vt(r,e,o)):n+=o[0];for(var s=1;s<t.length;s++)n+=vt(r,e,t[s]),a&&(n+=o[s]);xt.lastIndex=0;for(var i,c="";null!==(i=xt.exec(n));)c+="-"+i[1];var l=function(t){for(var e,r=0,a=0,n=t.length;n>=4;++a,n-=4)e=1540483477*(65535&(e=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))+(59797*(e>>>16)<<16),r=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(n){case 3:r^=(255&t.charCodeAt(a+2))<<16;case 2:r^=(255&t.charCodeAt(a+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(a)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(n)+c;return{name:l,styles:n,next:bt}},kt=!!n.useInsertionEffect&&n.useInsertionEffect,Ct=kt||function(t){return t()},St=(kt||a.useLayoutEffect,{}.hasOwnProperty),Ot=a.createContext("undefined"!=typeof HTMLElement?st({key:"css"}):null);Ot.Provider;var _t=function(t){return(0,a.forwardRef)((function(e,r){var n=(0,a.useContext)(Ot);return t(e,n,r)}))};var $t=a.createContext({});var At="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",zt=function(t){var e=t.cache,r=t.serialized,a=t.isStringTag;return ct(e,r,a),Ct((function(){return lt(e,r,a)})),null};var Et=_t((function(t,e,r){var n=t.css;"string"==typeof n&&void 0!==e.registered[n]&&(n=e.registered[n]);var o=t[At],s=[n],i="";"string"==typeof t.className?i=it(e.registered,s,t.className):null!=t.className&&(i=t.className+" ");var c=wt(s,void 0,a.useContext($t));i+=e.key+"-"+c.name;var l={};for(var f in t)St.call(t,f)&&"css"!==f&&f!==At&&(l[f]=t[f]);return l.ref=r,l.className=i,a.createElement(a.Fragment,null,a.createElement(zt,{cache:e,serialized:c,isStringTag:"string"==typeof o}),a.createElement(o,l))}));r(8679);function Nt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return wt(e)}var Vt=function(){var t=Nt.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Yt=function t(e){for(var r=e.length,a=0,n="";a<r;a++){var o=e[a];if(null!=o){var s=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))s=t(o);else for(var i in s="",o)o[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=o}s&&(n&&(n+=" "),n+=s)}}return n};var Xt=function(t){var e=t.cache,r=t.serializedArr;return Ct((function(){for(var t=0;t<r.length;t++)lt(e,r[t],!1)})),null},jt=_t((function(t,e){var r=[],n=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var o=wt(a,e.registered);return r.push(o),ct(e,o,!1),e.key+"-"+o.name},o={css:n,cx:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return function(t,e,r){var a=[],n=it(t,a,r);return a.length<2?r:n+e(a)}(e.registered,n,Yt(r))},theme:a.useContext($t)},s=t.children(o);return!0,a.createElement(a.Fragment,null,a.createElement(Xt,{cache:e,serializedArr:r}),s)}));function It(){return It=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},It.apply(this,arguments)}const Rt=new Map,Mt=new WeakMap;let Pt,Tt=0;function Ft(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(r=t.root,r?(Mt.has(r)||(Tt+=1,Mt.set(r,Tt.toString())),Mt.get(r)):"0"):t[e]}`;var r})).toString()}function Dt(t,e,r={},a=Pt){if(void 0===window.IntersectionObserver&&void 0!==a){const n=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:s}=function(t){let e=Ft(t),r=Rt.get(e);if(!r){const a=new Map;let n;const o=new IntersectionObserver((e=>{e.forEach((e=>{var r;const o=e.isIntersecting&&n.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(r=a.get(e.target))||r.forEach((t=>{t(o,e)}))}))}),t);n=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:o,elements:a},Rt.set(e,r)}return r}(r);let i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(e),o.observe(t),function(){i.splice(i.indexOf(e),1),0===i.length&&(s.delete(t),o.unobserve(t)),0===s.size&&(o.disconnect(),Rt.delete(n))}}const Lt=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Wt(t){return"function"!=typeof t.children}class Gt extends a.Component{constructor(t){super(t),this.node=null,this._unobserveCb=null,this.handleNode=t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()},this.handleChange=(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),Wt(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)},this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:o}=this.props;this._unobserveCb=Dt(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!Wt(this.props)){const{inView:t,entry:e}=this.state;return this.props.children({inView:t,entry:e,ref:this.handleNode})}const t=this.props,{children:e,as:r}=t,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,Lt);return a.createElement(r||"div",It({ref:this.handleNode},n),e)}}function Ut({threshold:t,delay:e,trackVisibility:r,rootMargin:n,root:o,triggerOnce:s,skip:i,initialInView:c,fallbackInView:l,onChange:f}={}){var d;const[m,u]=a.useState(null),p=a.useRef(),[y,h]=a.useState({inView:!!c,entry:void 0});p.current=f,a.useEffect((()=>{if(i||!m)return;let a;return a=Dt(m,((t,e)=>{h({inView:t,entry:e}),p.current&&p.current(t,e),e.isIntersecting&&s&&a&&(a(),a=void 0)}),{root:o,rootMargin:n,threshold:t,trackVisibility:r,delay:e},l),()=>{a&&a()}}),[Array.isArray(t)?t.toString():t,m,o,n,s,i,r,l,e]);const g=null==(d=y.entry)?void 0:d.target,v=a.useRef();m||!g||s||i||v.current===g||(v.current=g,h({inView:!!c,entry:void 0}));const b=[u,y.inView,y.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var Bt=r(14954),qt=r(85893),Ht=qt.Fragment;function Zt(t,e,r){return St.call(e,"css")?qt.jsx(Et,function(t,e){var r={};for(var a in e)St.call(e,a)&&(r[a]=e[a]);return r[At]=t,r}(t,e),r):qt.jsx(t,e,r)}Vt`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Vt`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Vt`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Vt`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Vt`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Vt`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Vt`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Vt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Vt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Vt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Vt`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Vt`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Vt`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var Jt=Vt`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Kt=Vt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qt=Vt`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,te=Vt`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ee=Vt`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,re=Vt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ae=Vt`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ne=Vt`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oe=Vt`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=Vt`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ie=Vt`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ce=Vt`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=Vt`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function fe(t,e){return r=>r?t():e()}function de(t){return fe(t,(()=>null))}var me=t=>{const{cascade:e=!1,damping:r=.5,delay:n=0,duration:o=1e3,fraction:s=0,keyframes:i=re,triggerOnce:c=!1,className:l,style:f,childClassName:d,childStyle:m,children:u,onVisibilityChange:p}=t,y=(0,a.useMemo)((()=>function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:a=re,iterationCount:n=1}){return Nt`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:o})),[o,i]);return null==u?null:"string"==typeof(h=u)||"number"==typeof h||"boolean"==typeof h?Zt(pe,{...t,animationStyles:y,children:String(u)}):(0,Bt.isFragment)(u)?Zt(ye,{...t,animationStyles:y}):Zt(Ht,{children:a.Children.map(u,((i,u)=>{if(!(0,a.isValidElement)(i))return null;const h=n+(e?u*o*r:0);switch(i.type){case"ol":case"ul":return Zt(jt,{children:({cx:e})=>Zt(i.type,{...i.props,className:e(l,i.props.className),style:Object.assign({},f,i.props.style),children:Zt(me,{...t,children:i.props.children})})});case"li":return Zt(Gt,{threshold:s,triggerOnce:c,onChange:p,children:({inView:t,ref:e})=>Zt(jt,{children:({cx:r})=>Zt(i.type,{...i.props,ref:e,className:r(d,i.props.className),css:de((()=>y))(t),style:Object.assign({},m,i.props.style,{animationDelay:h+"ms"})})})});default:return Zt(Gt,{threshold:s,triggerOnce:c,onChange:p,children:({inView:t,ref:e})=>Zt("div",{ref:e,className:l,css:de((()=>y))(t),style:Object.assign({},f,{animationDelay:h+"ms"}),children:Zt(jt,{children:({cx:t})=>Zt(i.type,{...i.props,className:t(d,i.props.className),style:Object.assign({},m,i.props.style)})})})})}}))});var h},ue={display:"inline-block",whiteSpace:"pre"},pe=t=>{const{animationStyles:e,cascade:r=!1,damping:a=.5,delay:n=0,duration:o=1e3,fraction:s=0,triggerOnce:i=!1,className:c,style:l,children:f,onVisibilityChange:d}=t,{ref:m,inView:u}=Ut({triggerOnce:i,threshold:s,onChange:d});return fe((()=>Zt("div",{ref:m,className:c,style:Object.assign({},l,ue),children:f.split("").map(((t,r)=>Zt("span",{css:de((()=>e))(u),style:{animationDelay:n+r*o*a+"ms"},children:t},r)))})),(()=>Zt(ye,{...t,children:f})))(r)},ye=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:a=!1,className:n,style:o,children:s,onVisibilityChange:i}=t,{ref:c,inView:l}=Ut({triggerOnce:a,threshold:r,onChange:i});return Zt("div",{ref:c,className:n,css:de((()=>e))(l),style:o,children:s})};Vt`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Vt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vt`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Vt`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Vt`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Vt`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Vt`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var he=Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ge=Vt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,ve=Vt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,be=Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,xe=Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,we=Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ke=Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Ce=Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Se=Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Oe=Vt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,_e=Vt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,$e=Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ae=Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;var ze=t=>{const{big:e=!1,direction:r,reverse:n=!1,...o}=t,s=(0,a.useMemo)((()=>function(t,e,r){switch(r){case"bottom-left":return e?ge:Kt;case"bottom-right":return e?ve:Qt;case"down":return t?e?xe:ee:e?be:te;case"left":return t?e?ke:ae:e?we:re;case"right":return t?e?Se:oe:e?Ce:ne;case"top-left":return e?Oe:se;case"top-right":return e?_e:ie;case"up":return t?e?Ae:le:e?$e:ce;default:return e?he:Jt}}(e,n,r)),[e,r,n]);return Zt(me,{keyframes:s,...o})};Vt`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,Vt`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Vt`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Vt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Vt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Vt`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Vt`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Vt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Vt`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Vt`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Vt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Vt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Vt`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Vt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Vt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Vt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Vt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Vt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Vt`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vt`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vt`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vt`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Vt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Vt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Vt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Vt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;Vt`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Vt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Vt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Vt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Vt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Vt`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Vt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Vt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Vt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Vt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);