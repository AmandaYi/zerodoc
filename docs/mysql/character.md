---
displayed_sidebar: MySQL
---

# 字符集问题

字符集：字符在保存和传输时对应的二进制编码集合。

创建测试数据库

```mysql
mysql> create table stu(
    -> id int primary key,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.00 sec)
```

插入中文报错

![1536656529642](/images/mysql/1536656529642.png)

***

分析原因：

客户端通过GBK发送的命令

 ![1536656722512](/images/mysql/1536656722512.png)

但是，服务用utf8解释命令

 ![1536656805867](/images/mysql/1536656805867.png)

设置服务器，用gbk字符编码接受客户端发来的命令

 ![1536656911674](/images/mysql/1536656911674.png)

测试：插入中文，成功

 ![1536656946064](/images/mysql/1536656946064.png)

查询数据，发现数据乱码

 ![1536657018441](/images/mysql/1536657018441.png)

原因：以utf返回的结果，客户端用gbk来接受

解决：服务器用gbk返回数据

 ![1536657091653](/images/mysql/1536657091653.png)

再次测试，查询数据

  ![1536657126082](/images/mysql/1536657126082.png)



总结：客户端编码、character_set_client、character_set_results三个编码的值一致即可操作中文。

多学一招：我们只要设置“set names 字符编码”，就可以更改character_set_client、character_set_results的值。

 ![1536657249850](/images/mysql/1536657249850.png)
