---
displayed_sidebar: MySQL
---

# MySQL预处理

预编译一次，可以多次执行。用来解决一条SQL语句频繁执行的问题。

```
预处理语句：prepare 预处理名字 from ‘sql语句’
执行预处理：execute 预处理名字 [using 变量]
```

例题一：

```mysql
mysql> prepare stmt from 'select * from stuinfo';	# 创建预处理
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql> execute stmt;	# 执行预处理
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25301 | 张秋丽         | 男       |     18 |       1 | 北京           |
| s25302 | 李文才        | 男       |     31 |       3 | 上海          |
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           |
| s25305 | 诸葛丽丽         | 女      |     23 |       7 | 河南           |
| s25318 | 争青小子        | 男       |     26 |       6 | 天津           |
| s25319 | 梅超风        | 女      |     23 |       5 | 河北          |
+--------+----------+--------+--------+---------+------------+
7 rows in set (0.00 sec)
```

例题二：传递参数

```mysql
mysql> delimiter // 
mysql> prepare stmt from 'select * from stuinfo where stuno=?' // -- ?是位置占位符
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql> set @id='s25301';       -- 变量以@开头，通过set给变量赋值
    -> execute stmt using @id //  -- 执行预处理，传递参数
Query OK, 0 rows affected (0.00 sec)

+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
```

```
脚下留心：
1、?是位置占位符
2、变量以@开头
3、通过set给变量赋值
```

例题三：传递多个参数

```mysql
mysql> prepare stmt from 'select * from stuinfo where stusex=? and stuaddress=?'  //
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql> set @sex='男';
    -> set @addr='北京';
    -> execute stmt using @sex,@addr //
Query OK, 0 rows affected (0.00 sec)

Query OK, 0 rows affected (0.00 sec)

+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
```

```mysql
mysql> prepare  stmt3 from 'select * from stu where stuno =? or stuno=?';
Query OK, 0 rows affected (0.00 sec)
Statement prepared

mysql> set @stuno3_1='s25301';
Query OK, 0 rows affected (0.00 sec)

mysql> set @stuno3_2='s25302'; 
Query OK, 0 rows affected (0.00 sec)

mysql> execute stmt3 using @stuno3_1, @stuno3_2;
+--------+-----------+--------+--------+---------+------------+------+------+
| stuNo  | stuName   | stuSex | stuAge | stuSeat | stuAddress | ch   | math |
+--------+-----------+--------+--------+---------+------------+------+------+
| s25301 | 张秋丽    | 男     |     18 |       1 | 北京       |   80 | NULL |
| s25302 | 李文才    | 男     |     31 |       3 | 上海       |   77 |   76 |
+--------+-----------+--------+--------+---------+------------+------+------+
2 rows in set (0.00 sec)
```
