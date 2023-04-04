---
displayed_sidebar: MySQL
---


# MySQL存储过程[procedure]

## 储过程的优点

1. 存储过程可以减少网络流量
2. 允许模块化设计
3. 支持事务

## 创建存储过程

语法：

```mysql
create procedure 存储过程名(参数)
begin
	//sql语句
end;

脚下留心：由于过程中有很多SQL语句，每个语句的结束都要用（；）结束。
默认情况下，分号既表示语句结束，又表示向服务器发送SQL语句。
我们希望分号仅表示语句的结束，不要将SQL语句发送到服务器执行，通过delimiter来更改结束符。
```

例题

```mysql
mysql> delimiter //
mysql> create procedure proc()     -- 创建存储过程
    -> begin
    -> select * from stuinfo;
    -> end //
Query OK, 0 rows affected (0.00 sec)
```

## 调用存储过程

语法：

```mysql
call 存储过程名()
```

例题：

```mysql
mysql> call proc() //     -- 调用存储过程
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

## 除存储过程

语法

```mysql
drop procedure [if exists] 存储过程名
```

例题：

```mysql
mysql> drop procedure proc //    -- 删除存储过程
Query OK, 0 rows affected (0.00 sec)
```

## 查看存储过程的信息

```mysql
show create procedure 存储过程名\G
```

例题

```mysql
mysql> show create procedure proc \G
*************************** 1. row ***************************
           Procedure: proc
            sql_mode: STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
    Create Procedure: CREATE DEFINER=`root`@`localhost` PROCEDURE `proc`()
begin
select * from stuinfo;
end
character_set_client: gbk
collation_connection: gbk_chinese_ci
  Database Collation: utf8_general_ci
1 row in set (0.00 sec)
```

## 显示所有的存储过程

```mysql
mysql> show procedure status \G
```

## 存储过程的参数

存储过程的参数分为：输入参数（in）【默认】，输出参数（out），输入输出参数（inout）

存储过程不能使用return返回值，要返回值只能通过“输出参数”来向外传递值。

例题一：传递学号，获取对应的信息

```mysql
mysql> create procedure proc(in param varchar(10))   -- 输入参数
    -> select * from stuinfo where stuno=param //
Query OK, 0 rows affected (0.00 sec)

mysql> call proc('s25301') //
+--------+---------+--------+--------+---------+------------+
| stuNo  | stuName | stuSex | stuAge | stuSeat | stuAddress |
+--------+---------+--------+--------+---------+------------+
| s25301 | 张秋丽        | 男       |     18 |       1 | 北京           |
+--------+---------+--------+--------+---------+------------+
1 row in set (0.00 sec)
```

例题二：查找同桌

```mysql
mysql> create procedure proc(name varchar(10))
    -> begin
    -> declare seat tinyint;   -- 声明局部变量
    -> select stuseat into seat from stuinfo where stuname=name;  -- 将座位号保存到变量中
    -> select * from stuinfo where stuseat=seat+1 or stuseat=seat-1;  -- 查找同桌
    -> end //
Query OK, 0 rows affected (0.00 sec)

mysql> call proc('李文才') //
+--------+----------+--------+--------+---------+------------+
| stuNo  | stuName  | stuSex | stuAge | stuSeat | stuAddress |
+--------+----------+--------+--------+---------+------------+
| s25303 | 李斯文        | 女      |     22 |       2 | 北京           |
| s25304 | 欧阳俊雄        | 男       |     28 |       4 | 天津           |
+--------+----------+--------+--------+---------+------------+
2 rows in set (0.00 sec)
```

强调

```
1、通过declare关键字声明局部变量；全局变量@开头就可以了
2、给变量赋值有两种方法
	方法一：set 变量名=值
	方法二：select 字段 into 变量 from 表 where 条件
3、声明的变量不能与列名同名
```

例题三：输出参数

```mysql
mysql> create procedure proc(num int, out result int)  //out 表示输出参数
    -> begin
    -> set result=num*num;
    -> end //
Query OK, 0 rows affected (0.00 sec)

mysql> call proc(10,@result) //
Query OK, 0 rows affected (0.00 sec)

mysql> select @result //
+---------+
| @result |
+---------+
|     100 |
+---------+
1 row in set (0.00 sec)
```



例题四：输入输出参数

```mysql
mysql> create procedure proc(inout num int)  #  inout 表示是输入输出参数
    -> begin
    -> set num=num*num;
    -> end //
Query OK, 0 rows affected (0.00 sec)

mysql> set @num=10;
    -> call proc(@num);
    -> select @num //
Query OK, 0 rows affected (0.00 sec)

Query OK, 0 rows affected (0.00 sec)

+------+
| @num |
+------+
|  100 |
+------+
1 row in set (0.00 sec)
```
