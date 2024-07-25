"use strict";(self.webpackChunkzerodoc=self.webpackChunkzerodoc||[]).push([[8608],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>y});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=t.createContext({}),m=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=m(e.components);return t.createElement(u.Provider,{value:n},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},i=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=m(a),i=l,y=o["".concat(u,".").concat(i)]||o[i]||d[i]||r;return a?t.createElement(y,s(s({ref:n},p),{},{components:a})):t.createElement(y,s({ref:n},p))}));function y(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=i;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[o]="string"==typeof e?e:l,s[1]=c;for(var m=2;m<r;m++)s[m]=a[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}i.displayName="MDXCreateElement"},11549:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var t=a(87462),l=(a(67294),a(3905));const r={displayed_sidebar:"MySQL"},s="MySQL\u8868\u64cd\u4f5c",c={unversionedId:"mysql/tables",id:"mysql/tables",title:"MySQL\u8868\u64cd\u4f5c",description:"\u663e\u793a\u6240\u6709\u8868",source:"@site/docs/mysql/tables.md",sourceDirName:"mysql",slug:"/mysql/tables",permalink:"/zerodoc/docs/mysql/tables",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"MySQL"},sidebar:"MySQL",previous:{title:"MySQL\u6570\u636e\u5e93\u64cd\u4f5c",permalink:"/zerodoc/docs/mysql/databases"},next:{title:"\u5b57\u7b26\u96c6\u95ee\u9898",permalink:"/zerodoc/docs/mysql/character"}},u={},m=[{value:"\u663e\u793a\u6240\u6709\u8868",id:"\u663e\u793a\u6240\u6709\u8868",level:2},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:2},{value:"\u663e\u793a\u521b\u5efa\u8868\u7684\u8bed\u53e5",id:"\u663e\u793a\u521b\u5efa\u8868\u7684\u8bed\u53e5",level:2},{value:"\u67e5\u770b\u8868\u7ed3\u6784",id:"\u67e5\u770b\u8868\u7ed3\u6784",level:2},{value:"\u5220\u9664\u8868",id:"\u5220\u9664\u8868",level:2},{value:"\u4fee\u6539\u8868",id:"\u4fee\u6539\u8868",level:2},{value:"\u590d\u5236\u8868",id:"\u590d\u5236\u8868",level:2},{value:"\u6570\u636e\u64cd\u4f5c",id:"\u6570\u636e\u64cd\u4f5c",level:2},{value:"\u63d2\u5165\u6570\u636e",id:"\u63d2\u5165\u6570\u636e",level:2},{value:"\u63d2\u5165\u4e00\u6761\u6570\u636e",id:"\u63d2\u5165\u4e00\u6761\u6570\u636e",level:3},{value:"\u63d2\u5165\u591a\u6761\u6570\u636e",id:"\u63d2\u5165\u591a\u6761\u6570\u636e",level:3},{value:"\u66f4\u65b0\u6570\u636e",id:"\u66f4\u65b0\u6570\u636e",level:2},{value:"\u5220\u9664\u6570\u636e",id:"\u5220\u9664\u6570\u636e",level:2},{value:"\u6e05\u7a7a\u8868",id:"\u6e05\u7a7a\u8868",level:2},{value:"\u67e5\u8be2\u8868",id:"\u67e5\u8be2\u8868",level:2}],p={toc:m},o="wrapper";function d(e){let{components:n,...a}=e;return(0,l.kt)(o,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql\u8868\u64cd\u4f5c"},"MySQL\u8868\u64cd\u4f5c"),(0,l.kt)("h2",{id:"\u663e\u793a\u6240\u6709\u8868"},"\u663e\u793a\u6240\u6709\u8868"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"show tables\n")),(0,l.kt)("h2",{id:"\u521b\u5efa\u8868"},"\u521b\u5efa\u8868"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"create table [if not exists] \u8868\u540d(\n    \u5b57\u6bb5\u540d \u6570\u636e\u7c7b\u578b [null|not null] [auto_increment] [primary key] [comment],\n    \u5b57\u6bb5\u540d \u6570\u636e\u7c7b\u578b [default]\u2026\n)engine=\u5b58\u50a8\u5f15\u64ce\n")),(0,l.kt)("p",null,"\u5355\u8bcd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"null | not null     \u7a7a|\u975e\u7a7a\ndefault             \u9ed8\u8ba4\u503c\nauto_increment      \u81ea\u52a8\u589e\u957f\nprimary key         \u4e3b\u952e\ncomment             \u5907\u6ce8\nengine              \u5f15\u64ce   innodb  myisam  memory  \u5f15\u64ce\u662f\u51b3\u5b9a\u6570\u636e\u5b58\u50a8\u7684\u65b9\u5f0f\n")),(0,l.kt)("p",null,"\u521b\u5efa\u7b80\u5355\u7684\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> create database itcast;\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> use itcast;\nDatabase changed\nmysql> show tables;\nEmpty set (0.05 sec)\n\n# \u521b\u5efa\u8868\nmysql> create table stu(\n   -> id int,\n   -> name varchar(30)\n   -> );\nQuery OK, 0 rows affected (0.13 sec)\n# \u67e5\u770b\u521b\u5efa\u7684\u8868\nmysql> show tables;\n+------------------+\n| Tables_in_itcast |\n+------------------+\n| stu              |\n+------------------+\n")),(0,l.kt)("p",null," \u521b\u5efa\u590d\u6742\u7684\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> set names gbk;   # \u8bbe\u7f6e\u5b57\u7b26\u7f16\u7801\nQuery OK, 0 rows affected (0.05 sec)\n\nmysql> create table if not exists teacher(\n   -> id int auto_increment primary key comment '\u4e3b\u952e',\n   -> name varchar(20) not null comment '\u59d3\u540d',\n   -> phone varchar(20) comment '\u7535\u8bdd\u53f7\u7801',\n   -> `add` varchar(100) default '\u5730\u5740\u4e0d\u8be6' comment '\u5730\u5740'\n   -> )engine=innodb;\nQuery OK, 0 rows affected (0.09 sec)\n\n")),(0,l.kt)("p",null,"\u591a\u5b66\u4e00\u62db\uff1acreate table \u6570\u636e\u5e93\u540d.\u8868\u540d\uff0c\u7528\u4e8e\u7ed9\u6307\u5b9a\u7684\u6570\u636e\u5e93\u521b\u5efa\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> create table data.stu(  #\u7ed9data\u6570\u636e\u5e93\u4e2d\u521b\u5efastu\u8868\n   -> id int,\n   -> name varchar(10));\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,l.kt)("h2",{id:"\u663e\u793a\u521b\u5efa\u8868\u7684\u8bed\u53e5"},"\u663e\u793a\u521b\u5efa\u8868\u7684\u8bed\u53e5"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"show create table \u8868\u540d\n")),(0,l.kt)("p",null,"\u663e\u793a\u521b\u5efateacher\u8868\u7684\u8bed\u53e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> show create table teacher;\n+---------+--------------------------------------------------------------------------\n-------------------------------------------------------------------------------------\n-------------------------------------------------------------------------------------\n-------+\n| Table   | Create Table\n\n\n       |\n+---------+--------------------------------------------------------------------------\n-------------------------------------------------------------------------------------\n-------------------------------------------------------------------------------------\n-------+\n| teacher | CREATE TABLE `teacher` (\n  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '\u4e3b\u952e',\n  `name` varchar(20) NOT NULL COMMENT '\u59d3\u540d',\n  `phone` varchar(20) DEFAULT NULL COMMENT '\u7535\u8bdd\u53f7\u7801',\n  `add` varchar(100) DEFAULT '\u5730\u5740\u4e0d\u8be6' COMMENT '\u5730\u5740',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8                         |\n")),(0,l.kt)("p",null,"\u5c06\u4e24\u4e2a\u5b57\u6bb5\u7ad6\u7740\u6392\u5217           show create table ",(0,l.kt)("inlineCode",{parentName:"p"},"\u8868\u540d"),"\\G"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> show create table teacher\\G;\n*************************** 1. row ***************************\n      Table: teacher\nCreate Table: CREATE TABLE `teacher` (\n `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '\u4e3b\u952e',\n `name` varchar(20) NOT NULL COMMENT '\u59d3\u540d',\n `phone` varchar(20) DEFAULT NULL COMMENT '\u7535\u8bdd\u53f7\u7801',\n `add` varchar(100) DEFAULT '\u5730\u5740\u4e0d\u8be6' COMMENT '\u5730\u5740',\n PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8\n1 row in set (0.00 sec)\n\n")),(0,l.kt)("h2",{id:"\u67e5\u770b\u8868\u7ed3\u6784"},"\u67e5\u770b\u8868\u7ed3\u6784"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"desc[ribe] \u8868\u540d\n")),(0,l.kt)("p",null,"\u67e5\u770bteacher\u8868\u7684\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> describe teacher;\n+-------+--------------+------+-----+----------+----------------+\n| Field | Type         | Null | Key | Default  | Extra          |\n+-------+--------------+------+-----+----------+----------------+\n| id    | int(11)      | NO   | PRI | NULL     | auto_increment |\n| name  | varchar(20)  | NO   |     | NULL     |                |\n| phone | varchar(20)  | YES  |     | NULL     |                |\n| add   | varchar(100) | YES  |     | \u5730\u5740\u4e0d\u8be6        |                |\n+-------+--------------+------+-----+----------+----------------+\n4 rows in set (0.08 sec)\n\nmysql> desc teacher;\n+-------+--------------+------+-----+----------+----------------+\n| Field | Type         | Null | Key | Default  | Extra          |\n+-------+--------------+------+-----+----------+----------------+\n| id    | int(11)      | NO   | PRI | NULL     | auto_increment |\n| name  | varchar(20)  | NO   |     | NULL     |                |\n| phone | varchar(20)  | YES  |     | NULL     |                |\n| add   | varchar(100) | YES  |     | \u5730\u5740\u4e0d\u8be6        |                |\n+-------+--------------+------+-----+----------+----------------+\n4 rows in set (0.01 sec)\n")),(0,l.kt)("h2",{id:"\u5220\u9664\u8868"},"\u5220\u9664\u8868"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"drop table [if exists] \u88681\uff0c\u88682,\u2026 \n")),(0,l.kt)("p",null,"\u5220\u9664\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> drop table stu;\nQuery OK, 0 rows affected (0.08 sec)\n")),(0,l.kt)("p",null,"\u5982\u679c\u5220\u9664\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u8868\u5c31\u4f1a\u62a5\u9519\uff0c\u5220\u9664\u7684\u65f6\u5019\u53ef\u4ee5\u5224\u65ad\u4e00\u4e0b\uff0c\u5b58\u5728\u5c31\u5220\u9664\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> drop table stu;\nERROR 1051 (42S02): Unknown table 'stu'\n\nmysql> drop table if exists stu;\nQuery OK, 0 rows affected, 1 warning (0.00 sec)\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u4e00\u6b21\u5220\u9664\u591a\u4e2a\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> drop table a1,a2;\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,l.kt)("h2",{id:"\u4fee\u6539\u8868"},"\u4fee\u6539\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"\u8bed\u6cd5\uff1aalter table \u8868\u540d\n")),(0,l.kt)("p",null,"1\u3001\u6dfb\u52a0\u5b57\u6bb5\uff1aalter table \u8868\u540dadd ","[column]"," \u5b57\u6bb5\u540d \u6570\u636e\u7c7b\u578b ","[\u4f4d\u7f6e]"),(0,l.kt)("p",null,"\u4f8b\u9898\u4e00\uff1a\u6dfb\u52a0\u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> alter table teacher add age int;\nQuery OK, 0 rows affected (0.09 sec)\nRecords: 0  Duplicates: 0  Warnings: 0\n\nmysql> desc teacher;\n+-------+--------------+------+-----+----------+----------------+\n| Field | Type         | Null | Key | Default  | Extra          |\n+-------+--------------+------+-----+----------+----------------+\n| id    | int(11)      | NO   | PRI | NULL     | auto_increment |\n| name  | varchar(20)  | NO   |     | NULL     |                |\n| phone | varchar(20)  | YES  |     | NULL     |                |\n| add   | varchar(100) | YES  |     | \u5730\u5740\u4e0d\u8be6        |                |\n| age   | int(11)      | YES  |     | NULL     |                |\n+-------+--------------+------+-----+----------+----------------+\n5 rows in set (0.00 sec)\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e8c\uff1a\u5728\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u4e0a\u6dfb\u52a0\u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> alter table teacher add email varchar(30) first;\nQuery OK, 0 rows affected (0.00 sec)\nRecords: 0  Duplicates: 0  Warnings: 0\n\nmysql> desc teacher;\n+-------+--------------+------+-----+----------+----------------+\n| Field | Type         | Null | Key | Default  | Extra          |\n+-------+--------------+------+-----+----------+----------------+\n| email | varchar(30)  | YES  |     | NULL     |                |\n| id    | int(11)      | NO   | PRI | NULL     | auto_increment |\n| name  | varchar(20)  | NO   |     | NULL     |                |\n| phone | varchar(20)  | YES  |     | NULL     |                |\n| add   | varchar(100) | YES  |     | \u5730\u5740\u4e0d\u8be6        |                |\n| age   | int(11)      | YES  |     | NULL     |                |\n+-------+--------------+------+-----+----------+----------------+\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e09\uff1a\u5728\u6307\u5b9a\u7684\u5b57\u6bb5\u540e\u6dfb\u52a0\u5b57\u6bb5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> alter table teacher add sex varchar(2) after name;\nQuery OK, 0 rows affected (0.00 sec)\nRecords: 0  Duplicates: 0  Warnings: 0\n\nmysql> desc teacher;\n+-------+--------------+------+-----+----------+----------------+\n| Field | Type         | Null | Key | Default  | Extra          |\n+-------+--------------+------+-----+----------+----------------+\n| email | varchar(30)  | YES  |     | NULL     |                |\n| id    | int(11)      | NO   | PRI | NULL     | auto_increment |\n| name  | varchar(20)  | NO   |     | NULL     |                |\n| sex   | varchar(2)   | YES  |     | NULL     |                |\n| phone | varchar(20)  | YES  |     | NULL     |                |\n| add   | varchar(100) | YES  |     | \u5730\u5740\u4e0d\u8be6        |                |\n| age   | int(11)      | YES  |     | NULL     |                |\n+-------+--------------+------+-----+----------+----------------+\n7 rows in set (0.00 sec)\n")),(0,l.kt)("p",null,"2\u3001\u5220\u9664\u5b57\u6bb5\uff1aalter table \u8868 drop ","[column]"," \u5b57\u6bb5\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> alter table teacher drop email;\nQuery OK, 0 rows affected (0.06 sec)\nRecords: 0  Duplicates: 0  Warnings: 0\n")),(0,l.kt)("p",null,"3\u3001\u4fee\u6539\u5b57\u6bb5(\u6539\u540d\u6539\u7c7b\u578b)\uff1aalter table \u8868 change ","[column]"," \u539f\u5b57\u6bb5\u540d \u65b0\u5b57\u6bb5\u540d \u6570\u636e\u7c7b\u578b \u2026"),(0,l.kt)("p",null," \u5c06\u5b57\u6bb5sex\u6539\u4e3axingbie\uff0c\u6570\u636e\u7c7b\u578b\u4e3aint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> alter table teacher change sex xingbie int;\nQuery OK, 0 rows affected (0.00 sec)\nRecords: 0  Duplicates: 0  Warnings: 0\n")),(0,l.kt)("p",null,"4\u3001\u4fee\u6539\u5b57\u6bb5\uff08\u4e0d\u6539\u540d\uff09:alter table \u8868 modify \u5b57\u6bb5\u540d \u5b57\u6bb5\u5c5e\u6027\u2026"),(0,l.kt)("p",null,"\u5c06\u6027\u522b\u7684\u6570\u636e\u7c7b\u578b\u6539\u4e3avarchar(2)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> alter table teacher modify xingbie varchar(2);\nQuery OK, 0 rows affected (0.00 sec)\nRecords: 0  Duplicates: 0  Warnings: 0\n")),(0,l.kt)("p",null,"5\u3001\u4fee\u6539\u5f15\u64ce\uff1aalter table \u8868\u540d engine=\u5f15\u64ce\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> alter table teacher engine=myisam;\nQuery OK, 0 rows affected (0.05 sec)\nRecords: 0  Duplicates: 0  Warnings: 0\n")),(0,l.kt)("p",null,"6\u3001\u4fee\u6539\u8868\u540d\uff1aalter table \u8868\u540d rename to \u65b0\u8868\u540d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> alter table teacher rename to stu;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> show tables;\n+------------------+\n| Tables_in_itcast |\n+------------------+\n| stu              |\n+------------------+\n1 row in set (0.00 sec)\n")),(0,l.kt)("h2",{id:"\u590d\u5236\u8868"},"\u590d\u5236\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"\u8bed\u6cd5\u4e00\uff1acreate table \u65b0\u8868 select \u5b57\u6bb5 from \u65e7\u8868\n")),(0,l.kt)("p",null," \u7279\u70b9\uff1a\u4e0d\u80fd\u590d\u5236\u7236\u8868\u7684\u4e3b\u952e\uff0c\u80fd\u591f\u590d\u5236\u7236\u8868\u7684\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> create table stu1 select * from stu;\nQuery OK, 1 row affected (0.06 sec)\nRecords: 1  Duplicates: 0  Warnings: 0\n\nmysql> select * from stu1;    # \u67e5\u770b\u6570\u636e\u590d\u5236\u5230\u65b0\u8868\u4e2d\n+----+------+------+-------+\n| id | name | addr | score |\n+----+------+------+-------+\n|  1 | rose | \u4e0a\u6d77    |    88 |\n+----+------+------+-------+\n1 row in set (0.00 sec)\n\nmysql> desc stu1;    #  \u4e3b\u952e\u6ca1\u6709\u590d\u5236\n+-------+-------------+------+-----+----------+-------+\n| Field | Type        | Null | Key | Default  | Extra |\n+-------+-------------+------+-----+----------+-------+\n| id    | int(11)     | NO   |     | 0        |       |\n| name  | varchar(20) | NO   |     | NULL     |       |\n| addr  | varchar(50) | YES  |     | \u5730\u5740\u4e0d\u8be6        |       |\n| score | int(11)     | YES  |     | NULL     |       |\n+-------+-------------+------+-----+----------+-------+\n4 rows in set (0.00 sec)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"\u8bed\u6cd5\u4e8c\uff1acreate table \u65b0\u8868 like \u65e7\u8868\n")),(0,l.kt)("p",null,"\u7279\u70b9\uff1a\u53ea\u80fd\u590d\u5236\u8868\u7ed3\u6784\uff0c\u4e0d\u80fd\u590d\u5236\u8868\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"Query OK, 0 rows affected (0.00 sec)\n\nmysql> select * from stu2;   # \u6570\u636e\u6ca1\u6709\u590d\u5236\nEmpty set (0.01 sec)\n\nmysql> desc stu2;   # \u4e3b\u952e\u590d\u5236\u4e86\n+-------+-------------+------+-----+----------+----------------+\n| Field | Type        | Null | Key | Default  | Extra          |\n+-------+-------------+------+-----+----------+----------------+\n| id    | int(11)     | NO   | PRI | NULL     | auto_increment |\n| name  | varchar(20) | NO   |     | NULL     |                |\n| addr  | varchar(50) | YES  |     | \u5730\u5740\u4e0d\u8be6        |                |\n| score | int(11)     | YES  |     | NULL     |                |\n+-------+-------------+------+-----+----------+----------------+\n4 rows in set (0.00 sec)\n")),(0,l.kt)("h2",{id:"\u6570\u636e\u64cd\u4f5c"},"\u6570\u636e\u64cd\u4f5c"),(0,l.kt)("p",null,"\u521b\u5efa\u6d4b\u8bd5\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> create table stu(\n    -> id int auto_increment primary key comment '\u4e3b\u952e',\n    -> name varchar(20) not null,\n    -> addr varchar(50) default '\u5730\u5740\u4e0d\u8be6',\n    -> score int comment '\u6210\u7ee9'\n    -> );\nQuery OK, 0 rows affected (0.01 sec)\n")),(0,l.kt)("h2",{id:"\u63d2\u5165\u6570\u636e"},"\u63d2\u5165\u6570\u636e"),(0,l.kt)("h3",{id:"\u63d2\u5165\u4e00\u6761\u6570\u636e"},"\u63d2\u5165\u4e00\u6761\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"\u8bed\u6cd5\uff1ainsert into \u8868\u540d (\u5b57\u6bb5\u540d, \u5b57\u6bb5\u540d,\u2026) values (\u503c1, \u503c1,\u2026)\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e00\uff1a\u63d2\u5165\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> insert into stu (id,name,addr,score) values (1,'tom','\u4e0a\u6d77',88);\nQuery OK, 1 row affected (0.11 sec)\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e8c\uff1a\u63d2\u5165\u7684\u5b57\u6bb5\u53ef\u4ee5\u548c\u8868\u7684\u5b57\u6bb5\u987a\u5e8f\u4e0d\u4e00\u81f4\u3002\u503c\u7684\u987a\u5e8f\u5fc5\u987b\u548c\u63d2\u5165\u5b57\u6bb5\u7684\u987a\u5e8f\u4e00\u81f4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> insert into stu (name,score,addr,id) values ('berry',77,'\u5317\u4eac',2);\nQuery OK, 1 row affected (0.00 sec)\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e09\uff1a\u53ef\u4ee5\u63d2\u5165\u90e8\u5206\u5b57\u6bb5\uff0c\u4f46\u662f\uff0c\u975e\u7a7a\u5b57\u6bb5\u5fc5\u987b\u63d2\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> insert into stu (id,name,addr) values (3,'ketty','\u4e0a\u6d77');\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u56db\uff1a\u81ea\u52a8\u589e\u957f\u5b57\u6bb5\u4e0d\u7528\u63d2\u5165\uff0c\u6570\u636e\u5e93\u4f1a\u81ea\u52a8\u63d2\u5165\u589e\u957f\u7684\u6570\u5b57"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> insert into stu (name,addr) values ('rose','\u5317\u4eac');\nQuery OK, 1 row affected (0.00 sec)\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e94\uff1a\u81ea\u52a8\u589e\u957f\u5217\u7684\u503c\u63d2\u5165null\u5373\u53ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> insert into stu (id,name,addr,score) values (null,'\u674e\u767d','\u4e0a\u6d77',66);\nQuery OK, 1 row affected (0.00 sec)\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u516d\uff1a\u63d2\u5165\u503c\u7684\u987a\u5e8f\u548c\u4e2a\u6570\u4e0e\u8868\u5b57\u6bb5\u7684\u987a\u5e8f\u548c\u4e2a\u6570\u4e00\u81f4\uff0c\u63d2\u5165\u7684\u5b57\u6bb5\u53ef\u4ee5\u7701\u7565"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> insert into stu values (null,'\u675c\u752b','\u5317\u4eac',null);\nQuery OK, 1 row affected (0.00 sec)\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e03\uff1a\u901a\u8fc7default\u5173\u952e\u5b57\u63d2\u5165\u9ed8\u8ba4\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> insert into stu values (null,'\u674e\u6e05\u7167',default,66);\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"\u811a\u4e0b\u7559\u5fc3\uff1a\n1\u3001\u63d2\u5165\u5b57\u6bb5\u7684\u987a\u5e8f\u4e0e\u503c\u7684\u987a\u5e8f\u5fc5\u987b\u4e00\u81f4\n")),(0,l.kt)("h3",{id:"\u63d2\u5165\u591a\u6761\u6570\u636e"},"\u63d2\u5165\u591a\u6761\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> insert into stu values (null,'\u8f9b\u5f03\u75be',default,66),(null,'\u5cb3\u98de','\u6cb3\u5357',77);\nQuery OK, 2 rows affected (0.00 sec)\nRecords: 2  Duplicates: 0  Warnings: 0\n")),(0,l.kt)("h2",{id:"\u66f4\u65b0\u6570\u636e"},"\u66f4\u65b0\u6570\u636e"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"update \u8868\u540d set \u5b57\u6bb5=\u503c [where \u6761\u4ef6] \n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e00\uff1a\u5c061\u53f7\u5b66\u751f\u7684\u5730\u5740\u6539\u6210\u5c71\u4e1c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> update stu set addr='\u5c71\u4e1c' where id=1\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e8c\uff1a\u5c06ketty\u7684\u6210\u7ee9\u6539\u4e3a99"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> update stu set score=99 where name='ketty';\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e09\uff1a\u5c06berry\u5730\u5740\u6539\u6210\u4e0a\u6d77\uff0c\u6210\u7ee9\u6539\u621066"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> update stu set addr='\u4e0a\u6d77',score=66 where name='berry';\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u56db\uff1a\u5c06\u4e0a\u6d77\u7684\u5b66\u751f\u6210\u7ee9\u6539\u4e3a60"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> update stu set score=60 where addr='\u4e0a\u6d77';\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e94\uff1a\u6761\u4ef6\u53ef\u4ee5\u7701\u7565\uff0c\u5982\u679c\u7701\u7565\uff0c\u66f4\u6539\u6240\u6709\u6570\u636e\uff08\u5c06\u6240\u6709\u6570\u636e\u7684\u5730\u5740\u6539\u4e3a\u6e56\u5357\uff0c\u6210\u7ee9\u6539\u4e3a70\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> update stu set addr='\u6e56\u5357',score=70;\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u516d\uff1a\u5c062\u30013\u7684\u5b66\u751f\u6210\u7ee9\u6539\u4e3a65"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> update stu set score=65 where id=2 or id=3;\n")),(0,l.kt)("h2",{id:"\u5220\u9664\u6570\u636e"},"\u5220\u9664\u6570\u636e"),(0,l.kt)("p",null,"\u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"delete from \u8868\u540d [where \u6761\u4ef6] \n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e00\uff1a\u5220\u9664\u5b66\u53f7\u662f1\u53f7\u7684\u5b66\u751f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> delete from stu where id=1;\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e8c\uff1a\u5220\u9664\u6210\u7ee9\u5c0f\u4e8e\u7b49\u4e8e65\u5206\u7684"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> delete from stu where score<=65;\n")),(0,l.kt)("p",null,"\u4f8b\u9898\u4e09\uff1a\u5220\u9664\u8868\u4e2d\u6240\u6709\u8bb0\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> delete from stu;\n")),(0,l.kt)("h2",{id:"\u6e05\u7a7a\u8868"},"\u6e05\u7a7a\u8868"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"truncate table \u8868\u540d\n")),(0,l.kt)("p",null,"\u4f8b\u9898"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> truncate table stu;\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u811a\u4e0b\u7559\u5fc3\uff1adelete from \u8868\u548ctruncate table \u8868\u533a\u522b\uff1f\ndelete from \u8868\uff1a\u904d\u5386\u8868\u8bb0\u5f55\uff0c\u4e00\u6761\u4e00\u6761\u7684\u5220\u9664\ntruncate table\uff1a\u5c06\u539f\u8868\u9500\u6bc1\uff0c\u518d\u521b\u5efa\u4e00\u4e2a\u540c\u7ed3\u6784\u7684\u65b0\u8868\u3002\u5c31\u6e05\u7a7a\u8868\u800c\u8a00\uff0c\u8fd9\u79cd\u65b9\u6cd5\u6548\u7387\u9ad8\u3002\n")),(0,l.kt)("h2",{id:"\u67e5\u8be2\u8868"},"\u67e5\u8be2\u8868"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"select \u5217\u540d from \u8868\n")),(0,l.kt)("p",null,"\u4f8b\u9898\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql> select name,score from stu;\n+------+-------+\n| name | score |\n+------+-------+\n| rose |    88 |\n+------+-------+\n1 row in set (0.00 sec)\n\nmysql> select id,name,addr,score from stu;\n+----+------+------+-------+\n| id | name | addr | score |\n+----+------+------+-------+\n|  1 | rose | \u4e0a\u6d77    |    88 |\n+----+------+------+-------+\n1 row in set (0.00 sec)\n\nmysql> select * from stu;  # *\u8868\u793a\u6240\u6709\u5b57\u6bb5\n+----+------+------+-------+\n| id | name | addr | score |\n+----+------+------+-------+\n|  1 | rose | \u4e0a\u6d77    |    88 |\n+----+------+------+-------+\n1 row in set (0.00 sec)\n")))}d.isMDXComponent=!0}}]);