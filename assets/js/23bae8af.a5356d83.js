"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[1709],{3905:(n,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>f});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function A(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},s=Object.keys(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)t=s[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=r.createContext({}),u=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},i=function(n){var e=u(n.components);return r.createElement(o.Provider,{value:e},n.children)},m="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,s=n.originalType,o=n.parentName,i=A(n,["components","mdxType","originalType","parentName"]),m=u(t),c=a,f=m["".concat(o,".").concat(c)]||m[c]||p[c]||s;return t?r.createElement(f,l(l({ref:e},i),{},{components:t})):r.createElement(f,l({ref:e},i))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var s=t.length,l=new Array(s);l[0]=c;var A={};for(var o in e)hasOwnProperty.call(e,o)&&(A[o]=e[o]);A.originalType=n,A[m]="string"==typeof n?n:a,l[1]=A;for(var u=2;u<s;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},44253:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>A,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const s={displayed_sidebar:"MySQL"},l="MySQL\u591a\u8868\u67e5\u8be2",A={unversionedId:"mysql/join",id:"mysql/join",title:"MySQL\u591a\u8868\u67e5\u8be2",description:"\u591a\u8868\u67e5\u8be2\u5206\u7c7b",source:"@site/docs/mysql/join.md",sourceDirName:"mysql",slug:"/mysql/join",permalink:"/zerodoc/docs/mysql/join",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"MySQL"},sidebar:"MySQL",next:{title:"MySQL\u5b50\u67e5\u8be2",permalink:"/zerodoc/docs/mysql/sub"}},o={},u=[{value:"\u591a\u8868\u67e5\u8be2\u5206\u7c7b",id:"\u591a\u8868\u67e5\u8be2\u5206\u7c7b",level:2},{value:"\u5185\u8fde\u63a5 inner join",id:"\u5185\u8fde\u63a5-inner-join",level:2},{value:"\u5de6\u5916\u8fde\u63a5left join",id:"\u5de6\u5916\u8fde\u63a5left-join",level:2},{value:"\u53f3\u5916\u8fde\u63a5right join",id:"\u53f3\u5916\u8fde\u63a5right-join",level:2},{value:"\u4ea4\u53c9\u8fde\u63a5\u3010cross join\u3011",id:"\u4ea4\u53c9\u8fde\u63a5cross-join",level:2},{value:"\u81ea\u7136\u8fde\u63a5\u3010natural\u3011",id:"\u81ea\u7136\u8fde\u63a5natural",level:2},{value:"using()",id:"using",level:2}],i={toc:u},m="wrapper";function p(n){let{components:e,...s}=n;return(0,a.kt)(m,(0,r.Z)({},i,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql\u591a\u8868\u67e5\u8be2"},"MySQL\u591a\u8868\u67e5\u8be2"),(0,a.kt)("h2",{id:"\u591a\u8868\u67e5\u8be2\u5206\u7c7b"},"\u591a\u8868\u67e5\u8be2\u5206\u7c7b"),(0,a.kt)("p",null,"\u5c06\u591a\u4e2a\u8868\u7684\u6570\u636e\u6a2a\u5411\u7684\u8054\u5408\u8d77\u6765\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5185\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ol"},"\u5916\u8fde\u63a5",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5de6\u5916\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ol"},"\u53f3\u5916\u8fde\u63a5"))),(0,a.kt)("li",{parentName:"ol"},"\u4ea4\u53c9\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ol"},"\u81ea\u7136\u8fde\u63a5")),(0,a.kt)("h2",{id:"\u5185\u8fde\u63a5-inner-join"},"\u5185\u8fde\u63a5 ","[inner join]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8bed\u6cd5\u4e00\uff1aselect \u5217\u540d from \u88681 inner join \u88682 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5\n\n\u8bed\u6cd5\u4e8c\uff1aselect \u5217\u540d from \u88681,\u88682 where \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5\n")),(0,a.kt)("p",null,"\u4f8b\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"\u65b9\u6cd5\u4e00\uff1a\nmysql> select stuname,stusex,writtenexam,labexam from stuinfo inner join stumarks on stuinfo.stuno=stumarks.stuno;\n+----------+--------+-------------+---------+\n| stuname  | stusex | writtenexam | labexam |\n+----------+--------+-------------+---------+\n| \u674e\u65af\u6587        | \u5973      |          80 |      58 |\n| \u674e\u6587\u624d        | \u7537       |          50 |      90 |\n| \u6b27\u9633\u4fca\u96c4        | \u7537       |          65 |      50 |\n| \u5f20\u79cb\u4e3d         | \u7537       |          77 |      82 |\n| \u4e89\u9752\u5c0f\u5b50        | \u7537       |          56 |      48 |\n+----------+--------+-------------+---------+\n\n\u65b9\u6cd5\u4e8c\uff1a\nmysql> select stuinfo.stuno,stuname,stusex,writtenexam,labexam from stuinfo,stumarks where stuinfo.stuno=stumarks.stuno;\n+--------+----------+--------+-------------+---------+\n| stuno  | stuname  | stusex | writtenexam | labexam |\n+--------+----------+--------+-------------+---------+\n| s25303 | \u674e\u65af\u6587        | \u5973      |          80 |      58 |\n| s25302 | \u674e\u6587\u624d        | \u7537       |          50 |      90 |\n| s25304 | \u6b27\u9633\u4fca\u96c4        | \u7537       |          65 |      50 |\n| s25301 | \u5f20\u79cb\u4e3d         | \u7537       |          77 |      82 |\n| s25318 | \u4e89\u9752\u5c0f\u5b50        | \u7537       |          56 |      48 |\n+--------+----------+--------+-------------+---------+\n\n\u53ef\u4ee5\u7ed9\u8868\u53d6\u522b\u540d\nmysql> select i.stuno,stuname,stusex,writtenexam,labexam from stuinfo i,stumarks s where i.stuno=s.stuno;\n+--------+----------+--------+-------------+---------+\n| stuno  | stuname  | stusex | writtenexam | labexam |\n+--------+----------+--------+-------------+---------+\n| s25303 | \u674e\u65af\u6587        | \u5973      |          80 |      58 |\n| s25302 | \u674e\u6587\u624d        | \u7537       |          50 |      90 |\n| s25304 | \u6b27\u9633\u4fca\u96c4        | \u7537       |          65 |      50 |\n| s25301 | \u5f20\u79cb\u4e3d         | \u7537       |          77 |      82 |\n| s25318 | \u4e89\u9752\u5c0f\u5b50        | \u7537       |          56 |      48 |\n+--------+----------+--------+-------------+---------+\n5 rows in set (0.00 sec)\n")),(0,a.kt)("p",null,"\u811a\u4e0b\u7559\u5fc3\uff1a\u663e\u793a\u516c\u5171\u5b57\u6bb5\u9700\u8981\u6307\u5b9a\u8868\u540d ",(0,a.kt)("img",{alt:"1537061664763",src:t(93130).Z,width:"1026",height:"86"})),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"1537061715978",src:t(73725).Z,width:"1020",height:"216"})),(0,a.kt)("p",null,"\u601d\u8003\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"select * from \u88681 inner join \u88682 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5  \u548c\nselect * from \u88682 inner join \u88681 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5   \u7ed3\u679c\u662f\u5426\u4e00\u6837\uff1f\n\u7b54\uff1a\u4e00\u6837\u7684\uff0c\u56e0\u4e3a\u5185\u8fde\u63a5\u83b7\u53d6\u7684\u662f\u4e24\u4e2a\u8868\u7684\u516c\u5171\u90e8\u5206\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u591a\u5b66\u4e00\u62db\uff1a\u4e09\u4e2a\u8868\u7684\u5185\u8fde\u63a5\u5982\u4f55\u5b9e\u73b0\uff1f\nselect * from \u88681 inner join \u88682 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5\ninner join \u88683 on \u88682.\u516c\u5171\u5b57\u6bb5=\u88683.\u516c\u5171\u5b57\u6bb5\n")),(0,a.kt)("h2",{id:"\u5de6\u5916\u8fde\u63a5left-join"},"\u5de6\u5916\u8fde\u63a5","[left join]"),(0,a.kt)("p",null,"\u4ee5\u5de6\u8fb9\u7684\u8868\u4e3a\u6807\u51c6\uff0c\u5982\u679c\u53f3\u8fb9\u7684\u8868\u6ca1\u6709\u5bf9\u5e94\u7684\u8bb0\u5f55\uff0c\u7528NULL\u586b\u5145\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8bed\u6cd5\uff1aselect \u5217\u540d from \u88681 left join \u88682 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5\n")),(0,a.kt)("p",null,"\u4f8b\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> select stuname,writtenexam,labexam from stuinfo left join stumarks on stuinfo.stuno=stumarks.stuno;\n+----------+-------------+---------+\n| stuname  | writtenexam | labexam |\n+----------+-------------+---------+\n| \u5f20\u79cb\u4e3d         |          77 |      82 |\n| \u674e\u6587\u624d        |          50 |      90 |\n| \u674e\u65af\u6587        |          80 |      58 |\n| \u6b27\u9633\u4fca\u96c4        |          65 |      50 |\n| \u8bf8\u845b\u4e3d\u4e3d         |        NULL |    NULL |\n| \u4e89\u9752\u5c0f\u5b50        |          56 |      48 |\n| \u6885\u8d85\u98ce        |        NULL |    NULL |\n+----------+-------------+---------+\n")),(0,a.kt)("p",null,"\u601d\u8003\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nselect * from \u88681 left join \u88682 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5\n\u548c\nselect * from \u88682 left join \u88681 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5   \u662f\u5426\u4e00\u6837\uff1f\n\u7b54\uff1a\u4e0d\u4e00\u6837\uff0c\u5de6\u8fde\u63a5\u4e00\u5de6\u8fb9\u7684\u8868\u4e3a\u51c6\u3002\n")),(0,a.kt)("h2",{id:"\u53f3\u5916\u8fde\u63a5right-join"},"\u53f3\u5916\u8fde\u63a5","[right join]"),(0,a.kt)("p",null,"\u4ee5\u53f3\u8fb9\u7684\u8868\u4e3a\u6807\u51c6\uff0c\u5982\u679c\u5de6\u8fb9\u7684\u8868\u6ca1\u6709\u5bf9\u5e94\u7684\u8bb0\u5f55\uff0c\u7528NULL\u586b\u5145\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8bed\u6cd5\uff1aselect \u5217\u540d from \u88681 right join \u88682 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5\n")),(0,a.kt)("p",null,"\u4f8b\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> select stuname,writtenexam,labexam from stuinfo right join stumarks on stuinfo.stuno=stumarks.stuno;\n+----------+-------------+---------+\n| stuname  | writtenexam | labexam |\n+----------+-------------+---------+\n| \u674e\u65af\u6587        |          80 |      58 |\n| \u674e\u6587\u624d        |          50 |      90 |\n| \u6b27\u9633\u4fca\u96c4        |          65 |      50 |\n| \u5f20\u79cb\u4e3d         |          77 |      82 |\n| \u4e89\u9752\u5c0f\u5b50        |          56 |      48 |\n| NULL     |          66 |      77 |\n+----------+-------------+---------+\n6 rows in set (0.00 sec)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u601d\u8003\uff1a\nselect * from \u88681 left join \u88682 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5\n\u548c\nselect * from \u88682 right join \u88681 on \u88681.\u516c\u5171\u5b57\u6bb5=\u88682.\u516c\u5171\u5b57\u6bb5  \u662f\u5426\u4e00\u6837\uff1f\n\n\u7b54\uff1a\u4e00\u6837\u7684\n")),(0,a.kt)("h2",{id:"\u4ea4\u53c9\u8fde\u63a5cross-join"},"\u4ea4\u53c9\u8fde\u63a5\u3010cross join\u3011"),(0,a.kt)("p",null,"\u63d2\u5165\u6d4b\u8bd5\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> create table t1(\n    -> id int,\n    -> name varchar(10)\n    -> );\nQuery OK, 0 rows affected (0.06 sec)\n\nmysql> insert into t1 values (1,'tom'),(2,'berry');\nQuery OK, 2 rows affected (0.00 sec)\n\nmysql> create table t2(\n    -> id int,\n    -> score int);\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> insert into t2 values (1,88),(2,99);\n")),(0,a.kt)("p",null,"1\u3001\u5982\u679c\u6ca1\u6709\u8fde\u63a5\u8868\u8fbe\u5f0f\u8fd4\u56de\u7684\u662f\u7b1b\u5361\u5c14\u79ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> select * from t1 cross join t2;   # \u8fd4\u56de\u7b1b\u5361\u5c14\u79ef\n+------+-------+------+-------+\n| id   | name  | id   | score |\n+------+-------+------+-------+\n|    1 | tom   |    1 |    88 |\n|    2 | berry |    1 |    88 |\n|    1 | tom   |    2 |    99 |\n|    2 | berry |    2 |    99 |\n+------+-------+------+-------+\n")),(0,a.kt)("p",null,"2\u3001\u5982\u679c\u6709\u8fde\u63a5\u8868\u8fbe\u5f0f\u7b49\u4ef7\u4e8e\u5185\u8fde\u63a5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> select * from t1 cross join t2 where t1.id=t2.id;\n+------+-------+------+-------+\n| id   | name  | id   | score |\n+------+-------+------+-------+\n|    1 | tom   |    1 |    88 |\n|    2 | berry |    2 |    99 |\n+------+-------+------+-------+\n")),(0,a.kt)("h2",{id:"\u81ea\u7136\u8fde\u63a5natural"},"\u81ea\u7136\u8fde\u63a5\u3010natural\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u81ea\u52a8\u7684\u5224\u65ad\u8fde\u63a5\u6761\u4ef6\uff0c\u5b83\u662f\u8fc7\u540c\u540d\u5b57\u6bb5\u6765\u5224\u65ad\u7684\n")),(0,a.kt)("p",null,"\u81ea\u7136\u8fde\u63a5\u53c8\u5206\u4e3a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u81ea\u7136\u5185\u8fde\u63a5\t\tnatural join"),(0,a.kt)("li",{parentName:"ol"},"\u81ea\u7136\u5de6\u5916\u8fde\u63a5\t\tnatural left join"),(0,a.kt)("li",{parentName:"ol"},"\u81ea\u7136\u53f3\u5916\u8fde\u63a5\t\tnatural right join")),(0,a.kt)("p",null,"\u4f8b\u9898\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"# \u81ea\u7136\u5185\u8fde\u63a5\nmysql> select * from stuinfo natural join stumarks;\n+--------+----------+--------+--------+---------+------------+---------+-------------+---------+\n| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | examNo  | writtenExam | labExam |\n+--------+----------+--------+--------+---------+------------+---------+-------------+---------+\n| s25303 | \u674e\u65af\u6587        | \u5973      |     22 |       2 | \u5317\u4eac           | s271811 |          80 |\n  58 |\n| s25302 | \u674e\u6587\u624d        | \u7537       |     31 |       3 | \u4e0a\u6d77          | s271813 |          50 |\n  90 |\n| s25304 | \u6b27\u9633\u4fca\u96c4        | \u7537       |     28 |       4 | \u5929\u6d25           | s271815 |          65 |\n     50 |\n| s25301 | \u5f20\u79cb\u4e3d         | \u7537       |     18 |       1 | \u5317\u4eac           | s271816 |          77 |\n    82 |\n| s25318 | \u4e89\u9752\u5c0f\u5b50        | \u7537       |     26 |       6 | \u5929\u6d25           | s271819 |          56 |\n     48 |\n+--------+----------+--------+--------+---------+------------+---------+-------------+---------+\n5 rows in set (0.00 sec)\n\n# \u81ea\u7136\u5de6\u5916\u8fde\u63a5\n\nmysql> select * from stuinfo natural left join stumarks;\n+--------+----------+--------+--------+---------+------------+---------+-------------+---------+\n| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | examNo  | writtenExam | labExam |\n+--------+----------+--------+--------+---------+------------+---------+-------------+---------+\n| s25301 | \u5f20\u79cb\u4e3d         | \u7537       |     18 |       1 | \u5317\u4eac           | s271816 |          77\n    82 |\n| s25302 | \u674e\u6587\u624d        | \u7537       |     31 |       3 | \u4e0a\u6d77          | s271813 |          50 |\n  90 |\n| s25303 | \u674e\u65af\u6587        | \u5973      |     22 |       2 | \u5317\u4eac           | s271811 |          80 |\n  58 |\n| s25304 | \u6b27\u9633\u4fca\u96c4        | \u7537       |     28 |       4 | \u5929\u6d25           | s271815 |          65\n     50 |\n| s25305 | \u8bf8\u845b\u4e3d\u4e3d         | \u5973      |     23 |       7 | \u6cb3\u5357           | NULL    |        NULL\n   NULL |\n| s25318 | \u4e89\u9752\u5c0f\u5b50        | \u7537       |     26 |       6 | \u5929\u6d25           | s271819 |          56\n     48 |\n| s25319 | \u6885\u8d85\u98ce        | \u5973      |     23 |       5 | \u6cb3\u5317          | NULL    |        NULL |\nULL |\n+--------+----------+--------+--------+---------+------------+---------+-------------+---------+\n7 rows in set (0.00 sec)\n\n# \u81ea\u7136\u53f3\u5916\u8fde\u63a5\nmysql> select * from stuinfo natural right join stumarks;\n+--------+---------+-------------+---------+----------+--------+--------+---------+------------+\n| stuNo  | examNo  | writtenExam | labExam | stuName  | stuSex | stuAge | stuSeat | stuAddress |\n+--------+---------+-------------+---------+----------+--------+--------+---------+------------+\n| s25303 | s271811 |          80 |      58 | \u674e\u65af\u6587        | \u5973      |     22 |       2 | \u5317\u4eac\n     |\n| s25302 | s271813 |          50 |      90 | \u674e\u6587\u624d        | \u7537       |     31 |       3 | \u4e0a\u6d77\n     |\n| s25304 | s271815 |          65 |      50 | \u6b27\u9633\u4fca\u96c4        | \u7537       |     28 |       4 | \u5929\u6d25\n        |\n| s25301 | s271816 |          77 |      82 | \u5f20\u79cb\u4e3d         | \u7537       |     18 |       1 | \u5317\u4eac\n       |\n| s25318 | s271819 |          56 |      48 | \u4e89\u9752\u5c0f\u5b50        | \u7537       |     26 |       6 | \u5929\u6d25\n        |\n| s25320 | s271820 |          66 |      77 | NULL     | NULL   |   NULL |    NULL | NULL       |\n+--------+---------+-------------+---------+----------+--------+--------+---------+------------+\n6 rows in set (0.00 sec)\n\n")),(0,a.kt)("p",null,"\u81ea\u7136\u8fde\u63a5\u7ed3\u8bba\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8868\u8fde\u63a5\u901a\u8fc7\u540c\u540d\u7684\u5b57\u6bb5\u6765\u8fde\u63a5\u7684")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u540c\u540d\u7684\u5b57\u6bb5\u8fd4\u56de\u7b1b\u5361\u5c14\u79ef")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f1a\u5bf9\u7ed3\u679c\u8fdb\u884c\u6574\u7406\uff0c\u6574\u7406\u7684\u89c4\u5219\u5982\u4e0b"),(0,a.kt)("p",{parentName:"li"},"a)\t\u8fde\u63a5\u5b57\u6bb5\u4fdd\u7559\u4e00\u4e2a"),(0,a.kt)("p",{parentName:"li"},"b)\t\u8fde\u63a5\u5b57\u6bb5\u653e\u5728\u6700\u524d\u9762"),(0,a.kt)("p",{parentName:"li"},"c)  \u5de6\u5916\u8fde\u63a5\u5de6\u8fb9\u5728\u524d\uff0c\u53f3\u5916\u8fde\u63a5\u53f3\u8868\u5728\u524d"))),(0,a.kt)("h2",{id:"using"},"using()"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6765\u6307\u5b9a\u8fde\u63a5\u5b57\u6bb5\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"using()\u4e5f\u4f1a\u5bf9\u8fde\u63a5\u5b57\u6bb5\u8fdb\u884c\u6574\u7406\uff0c\u6574\u7406\u65b9\u5f0f\u548c\u81ea\u7136\u8fde\u63a5\u662f\u4e00\u6837\u7684\u3002"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> select * from stuinfo inner join stumarks using(stuno);   # using\u6307\u5b9a\u5b57\u6bb5\n+--------+----------+--------+--------+---------+------------+---------+-------------+---------+\n| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress | examNo  | writtenExam | labExam |\n+--------+----------+--------+--------+---------+------------+---------+-------------+---------+\n| s25303 | \u674e\u65af\u6587        | \u5973      |     22 |       2 | \u5317\u4eac           | s271811 |          80 |\n  58 |\n| s25302 | \u674e\u6587\u624d        | \u7537       |     31 |       3 | \u4e0a\u6d77          | s271813 |          50 |\n  90 |\n| s25304 | \u6b27\u9633\u4fca\u96c4        | \u7537       |     28 |       4 | \u5929\u6d25           | s271815 |          65 |\n     50 |\n| s25301 | \u5f20\u79cb\u4e3d         | \u7537       |     18 |       1 | \u5317\u4eac           | s271816 |          77 |\n    82 |\n| s25318 | \u4e89\u9752\u5c0f\u5b50        | \u7537       |     26 |       6 | \u5929\u6d25           | s271819 |          56 |\n     48 |\n+--------+----------+--------+--------+---------+------------+---------+-------------+---------+\n5 rows in set (0.00 sec)\n")))}p.isMDXComponent=!0},93130:(n,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,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"},73725:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/1537061715978-00ce595572f5a0714501cfdf7f227b7a.png"}}]);