---
displayed_sidebar: MySQL
---

# MySQL数据库操作

## 显示数据库

```mysql
 语法：show databases
 
 mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| test               |
+--------------------+
4 rows in set (0.11 sec)
```

安装MySQL后，MySQL自带了4个数据库

1. information_schema：存储了MySQL服务器管理数据库的信息。
2. performance_schema：MySQL5.5新增的表，用来保存数据库服务器性能的参数
3. mysql：MySQL系统数据库，保存的登录用户名，密码，以及每个用户的权限等等
4. test：给用户学习和测试的数据库。

## 创建数据库

```mysql
语法：create database [if not exists] `数据名` [字符编码]
```

创建数据库：

```mysql
mysql> create database stu;
Query OK, 1 row affected (0.09 sec)
```

如果创建的数据库已存在，就会报错

```mysql
mysql> create database stu;
ERROR 1007 (HY000): Can't create database 'stu'; database exists
```

解决：创建数据库的时候判断一下数据库是否存在，如果不存在再创建

 ```mysql
mysql> create database if not exists stu;
Query OK, 1 row affected, 1 warning (0.00 sec)
 ```

如果数据库名是关键字和特殊字符要报错

 解决：在特殊字符、关键字行加上反引号

 ```mysql
mysql> create database `create`;
Query OK, 1 row affected (0.05 sec)
 ```

```php
多学一招：为了创建数据库时万无一失，我们可以在所有的数据库名上加上反引号
```

创建数据库的时候可以指定字符编码

 ```mysql
mysql> create database teacher charset=gbk;
Query OK, 1 row affected (0.01 sec)
gbk		简体中文
gb2312：	简体中文
utf8：	通用字符编码
 ```

```php
脚下留心：创建数据库如果不指定字符编码，默认和MySQL服务器的字符编码是一致的。
```

## 删除数据库

```mysql
语法：drop database [if exists] 数据库名
```

删除数据库

```mysql
mysql> drop database teacher;
Query OK, 0 rows affected (0.00 sec)
```

如果删除的数据库不存在，会报错

```mysql
mysql> drop database teacher;
ERROR 1008 (HY000): Can't drop database 'teacher'; database doesn't exist
mysql>
```

 解决：删除之前判断一下，如果存在就删除

 ```mysql
mysql> drop database if exists teacher;
Query OK, 0 rows affected, 1 warning (0.00 sec)
 ```

## 显示创建数据库的SQL语句

```mysql
语法：show create database 数据库名
```

```mysql
mysql> show create database stu;
+----------+--------------------------------------------------------------+
| Database | Create Database                                              |
+----------+--------------------------------------------------------------+
| stu      | CREATE DATABASE `stu` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+----------+--------------------------------------------------------------+
1 row in set (0.01 sec)

mysql> show create database teacher;
+----------+-----------------------------------------------------------------+
| Database | Create Database                                                 |
+----------+-----------------------------------------------------------------+
| teacher  | CREATE DATABASE `teacher` /*!40100 DEFAULT CHARACTER SET gbk */ |
+----------+-----------------------------------------------------------------+
1 row in set (0.00 sec)
```

## 修改数据库

修改数据库的字符编码

语法：

```mysql
alter database 数据库名 charset=字符编码
```

例题

```mysql
mysql> alter database teacher charset=utf8;
Query OK, 1 row affected (0.00 sec)

mysql> show create database teacher;
+----------+------------------------------------------------------------------+
| Database | Create Database                                                  |
+----------+------------------------------------------------------------------+
| teacher  | CREATE DATABASE `teacher` /*!40100 DEFAULT CHARACTER SET utf8 */ |
+----------+------------------------------------------------------------------+
1 row in set (0.00 sec)
```

## 选择数据库

语法：

```mysql
use 数据库名
```

选择数据库

```mysql
mysql> use stu;
Database changed
```
