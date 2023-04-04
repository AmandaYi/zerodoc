---
displayed_sidebar: MySQL
---

# MySQL事务


1. 事务是一个不可分割的执行单元
2. 事务作为一个整体要么一起执行，要么一起回滚

插入测试数据

```mysql
mysql> create table bank(
    -> cardid char(4) primary key,
    -> money int
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into bank values ('1001',1000),('1002',100);
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0
```

## 事务操作

```mysql
开启事务：start transaction或begin [work]
提交事务：commit
回滚事务：rollback
```

例题：

```mysql
mysql> delimiter //            # 更改定界符

mysql> start transaction;			# 开启事务
    -> update bank set money=money-100 where cardid='1001';
    -> update bank set money=money+100 where cardid='1002'  //
Query OK, 0 rows affected (0.00 sec)

mysql> commit //   # 提交事务

mysql> rollback //  # 回滚事务
```

```
思考：事务什么时候产生？什么时候结束？
答：开启的时候产生，提交事务或回滚事务都结束

脚下留心：只有innodb和BDB才支持事务，myisam不支持事务。
```

## 设置事务的回滚点

语法：

```mysql
设置回滚点： savepoint 回滚点名
回滚到回滚点： rollback to 回滚点
```

例题：

```mysql
mysql>  start transaction;
Query OK, 0 rows affected (0.00 sec)

mysql> insert into bank values ('1003',1000);
Query OK, 1 row affected (0.00 sec)

mysql> savepoint aa;    # 设置回滚点 aa
Query OK, 0 rows affected (0.00 sec)

mysql> insert into bank values ('1004',500);
Query OK, 1 row affected (0.00 sec)
 
mysql> savepoint bb;   # 设置回滚点bb
Query OK, 0 rows affected (0.00 sec)
 
mysql> rollback to aa;    # 回滚到aa点
Query OK, 0 rows affected (0.00 sec)

mysql> commit;    # 提交事务

mysql> select * from bank ;
+--------+-------+
| cardid | money |
+--------+-------+
| 1001   |   800 |
| 1002   |   200 |
| 1003   |  1000 |
+--------+-------+
```

## 事务的特性（ACID）

1. 原子性（Atomicity）：事务是一个整体，不可以再分，要么一起执行，要么一起不执行。
2. 一致性（Consistency）：事务完成时，数据必须处于一致的状态。
3. 隔离性（Isolation）：每个事务都是相互隔离的
4. 永久性（Durability）：事务完成后，对数据的修改是永久性的。
