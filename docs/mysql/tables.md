---
displayed_sidebar: MySQL
---

# MySQL表操作

## 显示所有表

语法：

```mysql
show tables
```

## 创建表

语法：

```mysql
create table [if not exists] 表名(
    字段名 数据类型 [null|not null] [auto_increment] [primary key] [comment],
    字段名 数据类型 [default]…
)engine=存储引擎
```

单词

```mysql
null | not null   	空|非空
default	          	默认值
auto_increment    	自动增长
primary key       	主键
comment           	备注
engine           	引擎   innodb  myisam  memory  引擎是决定数据存储的方式
```

创建简单的表

 ```mysql
mysql> create database itcast;
Query OK, 1 row affected (0.00 sec)

mysql> use itcast;
Database changed
mysql> show tables;
Empty set (0.05 sec)

# 创建表
mysql> create table stu(
    -> id int,
    -> name varchar(30)
    -> );
Query OK, 0 rows affected (0.13 sec)
# 查看创建的表
mysql> show tables;
+------------------+
| Tables_in_itcast |
+------------------+
| stu              |
+------------------+
 ```

 创建复杂的表

 ```mysql
mysql> set names gbk;   # 设置字符编码
Query OK, 0 rows affected (0.05 sec)

mysql> create table if not exists teacher(
    -> id int auto_increment primary key comment '主键',
    -> name varchar(20) not null comment '姓名',
    -> phone varchar(20) comment '电话号码',
    -> `add` varchar(100) default '地址不详' comment '地址'
    -> )engine=innodb;
Query OK, 0 rows affected (0.09 sec)

 ```

多学一招：create table 数据库名.表名，用于给指定的数据库创建表

 ```mysql
mysql> create table data.stu(  #给data数据库中创建stu表
    -> id int,
    -> name varchar(10));
Query OK, 0 rows affected (0.00 sec)
 ```

## 显示创建表的语句

语法：

```mysql
show create table 表名
```

显示创建teacher表的语句

```mysql
mysql> show create table teacher;
+---------+--------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------+
| Table   | Create Table


       |
+---------+--------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------+
| teacher | CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话号码',
  `add` varchar(100) DEFAULT '地址不详' COMMENT '地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8                         |
```

将两个字段竖着排列           show create table `表名`\G

 ```mysql
mysql> show create table teacher\G;
*************************** 1. row ***************************
       Table: teacher
Create Table: CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话号码',
  `add` varchar(100) DEFAULT '地址不详' COMMENT '地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)

 ```

## 查看表结构

语法：

```mysql
desc[ribe] 表名
```

查看teacher表的结构

```mysql
mysql> describe teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
+-------+--------------+------+-----+----------+----------------+
4 rows in set (0.08 sec)

mysql> desc teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
+-------+--------------+------+-----+----------+----------------+
4 rows in set (0.01 sec)
```

## 删除表

语法：

```mysql
drop table [if exists] 表1，表2,… 
```

删除表

```mysql
mysql> drop table stu;
Query OK, 0 rows affected (0.08 sec)
```

如果删除一个不存在的表就会报错，删除的时候可以判断一下，存在就删除。

```mysql
mysql> drop table stu;
ERROR 1051 (42S02): Unknown table 'stu'

mysql> drop table if exists stu;
Query OK, 0 rows affected, 1 warning (0.00 sec)
```

可以一次删除多个表

 ```mysql
mysql> drop table a1,a2;
Query OK, 0 rows affected (0.00 sec)
 ```

## 修改表

```mysql
语法：alter table 表名
```

1、添加字段：alter table 表名add [column] 字段名 数据类型 [位置]

例题一：添加字段

 ```mysql
mysql> alter table teacher add age int;
Query OK, 0 rows affected (0.09 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
| age   | int(11)      | YES  |     | NULL     |                |
+-------+--------------+------+-----+----------+----------------+
5 rows in set (0.00 sec)
 ```

例题二：在第一个位置上添加字段

```mysql
mysql> alter table teacher add email varchar(30) first;
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| email | varchar(30)  | YES  |     | NULL     |                |
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
| age   | int(11)      | YES  |     | NULL     |                |
+-------+--------------+------+-----+----------+----------------+
```

例题三：在指定的字段后添加字段

```mysql
mysql> alter table teacher add sex varchar(2) after name;
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc teacher;
+-------+--------------+------+-----+----------+----------------+
| Field | Type         | Null | Key | Default  | Extra          |
+-------+--------------+------+-----+----------+----------------+
| email | varchar(30)  | YES  |     | NULL     |                |
| id    | int(11)      | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20)  | NO   |     | NULL     |                |
| sex   | varchar(2)   | YES  |     | NULL     |                |
| phone | varchar(20)  | YES  |     | NULL     |                |
| add   | varchar(100) | YES  |     | 地址不详        |                |
| age   | int(11)      | YES  |     | NULL     |                |
+-------+--------------+------+-----+----------+----------------+
7 rows in set (0.00 sec)
```

2、删除字段：alter table 表 drop [column] 字段名

 ```mysql
mysql> alter table teacher drop email;
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0
 ```

3、修改字段(改名改类型)：alter table 表 change [column] 原字段名 新字段名 数据类型 …

 将字段sex改为xingbie，数据类型为int

```mysql
mysql> alter table teacher change sex xingbie int;
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

4、修改字段（不改名）:alter table 表 modify 字段名 字段属性…

将性别的数据类型改为varchar(2)

 ```mysql
mysql> alter table teacher modify xingbie varchar(2);
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0
 ```

5、修改引擎：alter table 表名 engine=引擎名

 ```mysql
mysql> alter table teacher engine=myisam;
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0
 ```

6、修改表名：alter table 表名 rename to 新表名

 ```mysql
mysql> alter table teacher rename to stu;
Query OK, 0 rows affected (0.00 sec)

mysql> show tables;
+------------------+
| Tables_in_itcast |
+------------------+
| stu              |
+------------------+
1 row in set (0.00 sec)
 ```

## 复制表

```mysql
语法一：create table 新表 select 字段 from 旧表
```

 特点：不能复制父表的主键，能够复制父表的数据

```mysql
mysql> create table stu1 select * from stu;
Query OK, 1 row affected (0.06 sec)
Records: 1  Duplicates: 0  Warnings: 0

mysql> select * from stu1;    # 查看数据复制到新表中
+----+------+------+-------+
| id | name | addr | score |
+----+------+------+-------+
|  1 | rose | 上海    |    88 |
+----+------+------+-------+
1 row in set (0.00 sec)

mysql> desc stu1;    #  主键没有复制
+-------+-------------+------+-----+----------+-------+
| Field | Type        | Null | Key | Default  | Extra |
+-------+-------------+------+-----+----------+-------+
| id    | int(11)     | NO   |     | 0        |       |
| name  | varchar(20) | NO   |     | NULL     |       |
| addr  | varchar(50) | YES  |     | 地址不详        |       |
| score | int(11)     | YES  |     | NULL     |       |
+-------+-------------+------+-----+----------+-------+
4 rows in set (0.00 sec)
```

```mysql
语法二：create table 新表 like 旧表
```

特点：只能复制表结构，不能复制表数据

```mysql
Query OK, 0 rows affected (0.00 sec)

mysql> select * from stu2;   # 数据没有复制
Empty set (0.01 sec)

mysql> desc stu2;   # 主键复制了
+-------+-------------+------+-----+----------+----------------+
| Field | Type        | Null | Key | Default  | Extra          |
+-------+-------------+------+-----+----------+----------------+
| id    | int(11)     | NO   | PRI | NULL     | auto_increment |
| name  | varchar(20) | NO   |     | NULL     |                |
| addr  | varchar(50) | YES  |     | 地址不详        |                |
| score | int(11)     | YES  |     | NULL     |                |
+-------+-------------+------+-----+----------+----------------+
4 rows in set (0.00 sec)
```

## 数据操作

创建测试表

```mysql
mysql> create table stu(
    -> id int auto_increment primary key comment '主键',
    -> name varchar(20) not null,
    -> addr varchar(50) default '地址不详',
    -> score int comment '成绩'
    -> );
Query OK, 0 rows affected (0.01 sec)
```

## 插入数据

### 插入一条数据

```mysql
语法：insert into 表名 (字段名, 字段名,…) values (值1, 值1,…)
```

例题一：插入数据

```mysql
mysql> insert into stu (id,name,addr,score) values (1,'tom','上海',88);
Query OK, 1 row affected (0.11 sec)
```

例题二：插入的字段可以和表的字段顺序不一致。值的顺序必须和插入字段的顺序一致。

```mysql
mysql> insert into stu (name,score,addr,id) values ('berry',77,'北京',2);
Query OK, 1 row affected (0.00 sec)
```

例题三：可以插入部分字段，但是，非空字段必须插入

```mysql
mysql> insert into stu (id,name,addr) values (3,'ketty','上海');
```

例题四：自动增长字段不用插入，数据库会自动插入增长的数字

```mysql
mysql> insert into stu (name,addr) values ('rose','北京');
Query OK, 1 row affected (0.00 sec)
```

例题五：自动增长列的值插入null即可

```mysql
mysql> insert into stu (id,name,addr,score) values (null,'李白','上海',66);
Query OK, 1 row affected (0.00 sec)
```

例题六：插入值的顺序和个数与表字段的顺序和个数一致，插入的字段可以省略

```mysql
mysql> insert into stu values (null,'杜甫','北京',null);
Query OK, 1 row affected (0.00 sec)
```

例题七：通过default关键字插入默认值

```mysql
mysql> insert into stu values (null,'李清照',default,66);
```

```mysql
脚下留心：
1、插入字段的顺序与值的顺序必须一致
```

### 插入多条数据

 ```mysql
mysql> insert into stu values (null,'辛弃疾',default,66),(null,'岳飞','河南',77);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0
 ```

## 更新数据

语法：

```mysql
update 表名 set 字段=值 [where 条件] 
```

例题一：将1号学生的地址改成山东

 ```mysql
mysql> update stu set addr='山东' where id=1
 ```

例题二：将ketty的成绩改为99

```mysql
mysql> update stu set score=99 where name='ketty';
```

例题三：将berry地址改成上海，成绩改成66

```mysql
mysql> update stu set addr='上海',score=66 where name='berry';
```

例题四：将上海的学生成绩改为60

```mysql
mysql> update stu set score=60 where addr='上海';
```

例题五：条件可以省略，如果省略，更改所有数据（将所有数据的地址改为湖南，成绩改为70）

```mysql
mysql> update stu set addr='湖南',score=70;
```

例题六：将2、3的学生成绩改为65

```mysql
mysql> update stu set score=65 where id=2 or id=3;
```

## 删除数据

语法

```mysql
delete from 表名 [where 条件] 
```

例题一：删除学号是1号的学生

 ```mysql
mysql> delete from stu where id=1;
 ```

例题二：删除成绩小于等于65分的

 ```mysql
mysql> delete from stu where score<=65;
 ```

例题三：删除表中所有记录

 ```mysql
mysql> delete from stu;
 ```

## 清空表

语法：

 ```mysql 
truncate table 表名
 ```

例题

```mysql
mysql> truncate table stu;
Query OK, 0 rows affected (0.00 sec)
```

```
脚下留心：delete from 表和truncate table 表区别？
delete from 表：遍历表记录，一条一条的删除
truncate table：将原表销毁，再创建一个同结构的新表。就清空表而言，这种方法效率高。
```

## 查询表

语法：

```mysql
select 列名 from 表
```

例题：

```mysql
mysql> select name,score from stu;
+------+-------+
| name | score |
+------+-------+
| rose |    88 |
+------+-------+
1 row in set (0.00 sec)

mysql> select id,name,addr,score from stu;
+----+------+------+-------+
| id | name | addr | score |
+----+------+------+-------+
|  1 | rose | 上海    |    88 |
+----+------+------+-------+
1 row in set (0.00 sec)

mysql> select * from stu;  # *表示所有字段
+----+------+------+-------+
| id | name | addr | score |
+----+------+------+-------+
|  1 | rose | 上海    |    88 |
+----+------+------+-------+
1 row in set (0.00 sec)
```
