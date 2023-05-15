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


## 具体解释

事务的概念:一组mysql语句，要么执行，要么全不不执行。 

事务的特点：

1. 原子性 ：一组事务，要么成功；要么撤回。 
2. 稳定性：有非法数据（外键约束之类），事务撤回。 
3. 隔离性：事务独立运行。一个事务处理后的结果，影响了其他事务，那么其他事务会撤回。事务的100%隔离，需要牺牲速度。 
4. 可靠性：软、硬件崩溃后，InnoDB数据表驱动会利用日志文件重构修改。可靠性和高速度不可兼得， innodb_flush_log_at_trx_commit 选项 决定什么时候吧事务保存到日志里。 

## 事务的隔离级别：

SQL标准定义了4类隔离级别，包括了一些具体规则，用来限定事务内外的哪些改变是可见的，哪些是不可见的。
低级别的隔离级一般支持更高的并发处理，并拥有更低的系统开销。 

1. Read Uncommitted（读取未提交内容）：在该隔离级别，所有事务都可以看到其他未提交事务的执行结果。本隔离级别很少用于实际应用，因为它的性能也不比其他级别好多少。读取未提交的数据，也被称之为脏读（Dirty Read）。 

2. Read Committed（读取提交内容）：这是大多数数据库系统的默认隔离级别（但不是MySQL默认的）。它满足了隔离的简单定义：一个事务只能看见已经提交事务所做的改变。这种隔离级别 也支持所谓的不可重复读（Nonrepeatable Read），因为同一事务的其他实例在该实例处理其间可能会有新的commit，所以同一select可能返回不同结果。 

3. Repeatable Read（可重读） ：这是MySQL的默认事务隔离级别，它确保同一事务的多个实例在并发读取数据时，会看到同样的数据行。
不过理论上，这会导致另一个棘手的问题：幻读 （Phantom Read）。
简单的说，幻读指当用户读取某一范围的数据行时，另一个事务又在该范围内插入了新行，当用户再读取该范围的数据行时，会发现有新的“幻影” 行。
InnoDB和Falcon存储引擎通过多版本并发控制（MVCC，Multiversion Concurrency Control）机制解决了该问题。 

4. Serializable（可串行化） ：这是最高的隔离级别，它通过强制事务排序，使之不可能相互冲突，从而解决幻读问题。简言之，它是在每个读的数据行上加上共享锁。在这个级别，可能导致大量的超时现象和锁竞争。 /body> 

这四种隔离级别采取不同的锁类型来实现，若读取的是同一个数据的话，就容易发生问题。例如：

**脏读(Drity Read)：**某个事务已更新一份数据，另一个事务在此时读取了同一份数据，由于某些原因，前一个RollBack了操作，则后一个事务所读取的数据就会是不正确的。

**不可重复读(Non-repeatable read):** 在一个事务的两次查询之中数据不一致，这可能是两次查询过程中间插入了一个事务更新的原有的数据。

**幻读(Phantom Read):** 在一个事务的两次查询中数据笔数不一致，例如有一个事务查询了几列(Row)数据，而另一个事务却在此时插入了新的几列数据，先前的事务在接下来的查询中，就会发现有几列数据是它先前所没有的 。

![1540246517847](/images//mysql/1540246517847.png)

设置MySQL的隔离级别：

![1540246555033](/images/mysql/1540246555033.png)

设置隔离级别:transaction-isolation=READ-COMMITTED
