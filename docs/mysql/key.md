---
displayed_sidebar: MySQL
---

# MySQL属性和键

## 列属性

### 是否为空(null | not null)

null：可以为空

not null：不可以为空

 思考题

1. 学员姓名允许为空吗?                  非空  

2. 家庭地址允许为空吗?                  非空      

3. 电子邮件信息允许为空吗?           可以为空  

4. 考试成绩允许为空吗?                  可以为空 


### 默认值（default）

1、如果一个字段没有插入值，可以默认插入一个指定的值。

 2、default关键字用来插入默认值

 ```mysql
mysql> create table t16(
    -> id int unsigned,
    -> addr varchar(20) not null default '地址不详'
    -> );
Query OK, 0 rows affected (0.06 sec)

mysql> insert into t16 values (1,'北京'),(2,default);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from t16;
+------+----------+
| id   | addr     |
+------+----------+
|    1 | 北京         |
|    2 | 地址不详        |
+------+----------+
2 rows in set (0.00 sec)
 ```

### 自动增长（auto_increment）

1、字段的值从1开始，每次递增1，特点就在字段中的数据不可能重复，适合为记录生成唯一的id

2、自动增长都是无符号整数。

3、在MySQL中，auto_increment必须是主键。但是主键不一定是自动增长的。

4、如果要给自动增长列插入数据，使用null关键字。

5、自动增长列上的数据被删除，默认情况下此记录的编号不再使用。

 ![1536737314504](/images/mysql/1536737314504.png)

## 主键（primary key）

主键：唯一标识表中记录的一个或一组列

主键的特点：不能重复，不能为空

一个表只能有一个主键，主键可以有多个字段组成。

主键的作用：

1、     保证数据完整性

2、     加快查询速度

### 添加主键

方法一：创建表的时候添加主键

```mysql
mysql> create table t17(
    -> id varchar(5) primary key,   # 创建主键
    -> name varchar(10) not null
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into t17 values ('s2531','tom'),('s2532','berry');
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from t17;
+-------+-------+
| id    | name  |
+-------+-------+
| s2531 | tom   |
| s2532 | berry |
+-------+-------+
2 rows in set (0.00 sec)

# 如果插入主键相同数据会报错
mysql> insert into t17 values ('s2531','tom');
ERROR 1062 (23000): Duplicate entry 's2531' for key 'PRIMARY'

# 主键不能插入null值
mysql> insert into t17 values (null,'tom');
ERROR 1048 (23000): Column 'id' cannot be null
```

方法二：创建表的时候添加主键

```mysql
mysql> create table t18(
    -> id int,
    -> name varchar(10),
    -> primary key(id)
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> desc t18;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   | PRI | 0       |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

方法三：更改表的时候添加主键

```mysql
mysql> create table t20(
    -> id int,
    -> name varchar(10)
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> alter table t20 add primary key (id);   # 更改表添加主键
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc t20;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   | PRI | 0       |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

### 创建组合主键

 ![1536736467251](/images/mysql/1536736467251.png)

### 查看主键

  ![1536736627655](/images/mysql/1536736627655.png)

### 删除主键

  ![1536736700169](/images/mysql/1536736700169.png)

### 选择主键的原则

1、     最少性：尽量选择一个字段做主键

2、     稳定性：尽量选择更新少的列做主键

3、     尽量选择数字型的列做主键

### 主键思考

1、在主键列输入的数值，允许为空吗?      

不可以                 

2、 一个表可以有多个主键吗?         
         
不可以                    

3、 在一个学校数据库中，如果一个学校内允许重名的学员，但是一个班级内不允许学员重名，可以组合班级和姓名两个字段一起来作为主键吗？                  

可以

4、 标识列（自动增长列）允许为字符数据类型吗？     

不可以       

5、 表中没有合适的列作为主键怎么办？      

添加自动增加列              

6、  如果标识列A的初始值为1，增长量为1，则输入三行数据以后，再删除两行，下次再输入数据行的时候，标识值从多少开始？ 

从4开始，因为不管从什么地方该位置已经被占用过了

## 唯一键

特点：

1、不能重复，可以为空

2、一个表可以有多个唯一键

作用：

1、     保证数据不能重复。保证数据完整性

2、     加快数据访问

### 添加唯一键

方法一：创建表的时候添加唯一键

 ```mysql
mysql> create table t22(
    -> id int primary key,
    -> name varchar(20) unique,    #通过unique添加唯一键
    -> addr varchar(100) unique
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into t22 values (1,'tom','上海');
Query OK, 1 row affected (0.05 sec)

mysql> insert into t22 values (2,'tom','北京');    #  name重复了，报错
ERROR 1062 (23000): Duplicate entry 'tom' for key 'name'
mysql> insert into t22 values (2,'berry','上海');   # addr重复了 
ERROR 1062 (23000): Duplicate entry '上海' for key 'addr'
 ```

还有一种方法

```mysql
mysql> create table t26(
    -> id int,
    -> name varchar(20),
    -> addr varchar(20),
    -> primary key(id),
    -> unique (name),     # 添加唯一键
    -> unique (addr)
    -> );
Query OK, 0 rows affected (0.06 sec)
```



方法二：修改表的时候添加唯一键

```mysql
mysql> create table t23(
    -> id int primary key,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.02 sec)

mysql> alter table t23 add unique (name);    #  添加一个唯一键
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

一次添加多个唯一键

```mysql
mysql> create table t24(
    -> id int primary key,
    -> name varchar(20),
    -> addr varchar(20)
    -> );
Query OK, 0 rows affected (0.06 sec)

mysql> alter table t24 add unique(name),add unique(addr);  
Query OK, 0 rows affected (0.09 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

添加组合唯一键

```mysql
mysql> create table t25(
    -> id int primary key,
    -> name varchar(20),
    -> addr varchar(20)
    -> );
Query OK, 0 rows affected (0.09 sec)

mysql> alter table t25 add unique(name,addr);
Query OK, 0 rows affected (0.01 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

### 查看唯一键

 ```mysql
mysql> show create table t26\G
*************************** 1. row ***************************
       Table: t26
Create Table: CREATE TABLE `t26` (
  `id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(20) DEFAULT NULL,
  `addr` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),      # 唯一键
  UNIQUE KEY `addr` (`addr`)       # 唯一键
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)

mysql> show create table t25\G
*************************** 1. row ***************************
       Table: t25
Create Table: CREATE TABLE `t25` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `addr` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`,`addr`)    # 组合唯一键
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)
 ```

添加唯一键，给唯一键取名

```mysql
mysql> create table t27(
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.03 sec)

mysql> alter table t27 add unique UQ_name(name);
Query OK, 0 rows affected (0.00 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> show create table t27\G
*************************** 1. row ***************************
       Table: t27
Create Table: CREATE TABLE `t27` (
  `name` varchar(20) DEFAULT NULL,
  UNIQUE KEY `UQ_name` (`name`)    # 唯一键的名字是UQ_name
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)
```

### 删除唯一键

通过唯一键的名字来删除唯一键

```mysql
语法：alter table 表名 drop index 唯一键名称
```

 ![1536739081697](/images/mysql/1536739081697.png)



问题：主键和唯一键的区别？

1、主键不能重复，不能为空，唯一键不能重复，可以为空

2、主键只有一个，唯一键可以有多个。

## 备注（comment）

为了程序员之间的相互交流  ![1536739540981](/images/mysql/1536739540981.png)

## SQL注释

单行注释：--或#

多行注释：/*    */

 ![1536739661909](/images/mysql/1536739661909.png)



## 数据完整性介绍

 ![1536739894901](/images/mysql/1536739894901.png) 

### 保证实体完整性

1、     主键约束

2、     唯一约束

3、     自动增长列

### 保证域完整性

1、     数据类型约束

2、     非空约束

3、     默认值约束

### 保证引用完整性

1、外键约束：从表中的公共字段是主表的外键

### 引用完整性



## 外键（foreign key）

1、     外键：从表中的公共字段，公共字段的名字可以不一样，但是数据类型必须一样。

2、     外键约束用来保证引用完整性

### 外键作用

1、     主表中没有的从表中不允许插入

2、     从表中有的主表中不允许删除

3、     不能更改主表中的值而导致从表中的记录孤立存在。

4、     先删除从表，再删除主表

### 添加外键

方法一：创建表的时候添加外键

 ```mysql
create table stuinfo(
	stuno char(4) primary key,
	name varchar(10) not null
);

create table stumarks(
	stuid char(4) primary key,
	score tinyint unsigned,
	foreign key (stuid) references stuinfo(stuno)
);
 ```

 方法二：修改表的时候添加外键

```mysql
mysql> create table stuinfo(
    ->  stuno char(4) primary key,
    ->  name varchar(10) not null
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> create table stumarks(
    ->  stuid char(4) primary key,
    ->  score tinyint unsigned
    -> );
Query OK, 0 rows affected (0.06 sec)

语法：  alter table 从表 add foreign key (从表的公共字段) references 主表(公共字段)

mysql> alter table stumarks add foreign key (stuid) references stuinfo(stuno);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

脚下留心：要创建外键必须是`innodb`引擎，myisam不支持外键约束

### 查看外键

  ![1536742477588](/images/mysql/1536742477588.png)



### 删除外键

通过外键的名字删除外键

```mysql
语法：alter table 表名 drop foreign key 外键名
```

例题

```mysql
mysql> alter table stumarks drop foreign key stumarks_ibfk_1;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

。

### 外键操作

1、     严格操作（前面讲的是严格操作）

2、     置空操作（set null）：如果主表记录删除或更新，从表置空

3、     级联操作（cascade）：如果主表记录删除或更新，从表级联

一般来说：主表删除的时候，从表置空操作，主表更新的时候，从表级联操作。

```mysql
语法：foreign key(外键) references 主表(关键字段)[主表删除是的动作][主表更新时候的动作]
```

例题

```mysql
mysql> create table stuinfo(
    -> stuno char(4) primary key,
    -> name varchar(10) not null
    -> );
Query OK, 0 rows affected (0.02 sec)

mysql> create table stumarks(
    -> stuid int auto_increment primary key,
    -> stuno char(4) ,
    -> score tinyint unsigned,
    ->  foreign key (stuno) references stuinfo(stuno) on delete set null on update cascade
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into stuinfo values ('s101','tom');
Query OK, 1 row affected (0.00 sec)

mysql> insert into stumarks values (null,'s101',88);
Query OK, 1 row affected (0.00 sec)

mysql> select * from stuinfo;
+-------+------+
| stuno | name |
+-------+------+
| s101  | tom  |
+-------+------+
1 row in set (0.00 sec)

mysql> update stuinfo set stuno='s102' where stuno='s101';   # 更新时级联
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from stumarks;
+-------+-------+-------+
| stuid | stuno | score |
+-------+-------+-------+
|     1 | s102  |    88 |
+-------+-------+-------+
1 row in set (0.00 sec)

mysql> delete from stuinfo where stuno='s102';    # 删除时置空
Query OK, 1 row affected (0.02 sec)

mysql> select * from stumarks;
+-------+-------+-------+
| stuid | stuno | score |
+-------+-------+-------+
|     1 | NULL  |    88 |
+-------+-------+-------+
1 row in set (0.00 sec)

```



