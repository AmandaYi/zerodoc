---
displayed_sidebar: MySQL
---

# MySQL索引

索引的优点：查询速度快

索引的缺点：

1. 增、删、改（数据操作语句）效率低了
2. 索引占用空间

## 索引的类型

1. 普通索引

2. 唯一索引（唯一键）

> 教育局系统，会把身份证号弄成主键，学号作为唯一索引，
> 创建唯一键也会创建一个一个对应的唯一索引，然后创建唯一索引只会创建一个唯一索引，也就是说唯一约束是通过创建唯一索引来实现的。

3. 主键索引：只要主键就自动创建主键索引，不需要手动创建。
4. 全文索引，搜索引擎使用，MySQL不支持中文的全文索引，我们通过sphinx去解决中文的全文索引。

## 创建普通索引[create index]

语法：

```mysql
create index [索引名] on 表名 （字段名）
alter table 表名 add index [索引的名称] （列名）
```

例题：

```mysql
# 创建索引方法一
mysql> create index ix_stuname on stuinfo(stuname);
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 创建索引方法二
mysql> alter table stuinfo add index ix_address (stuaddress);
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 创建表的时候就添加索引
mysql> create table emp(
    -> id int,
    -> name varchar(10),
    -> index ix_name (name)   # 创建索引
    -> );
Query OK, 0 rows affected (0.00 sec)
```

## 创建唯一索引

```mysql
语法一：create unique index 索引名 on 表名 （字段名）
语法二：alter table 表名 add unqiue [index] [索引的名称] （列名）
语法三：创建表的时候添加唯一索引，和创建唯一键是一样的。
```

例题

```mysql
# 方法一：
mysql> create unique index UQ_stuname on stu(stuname);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 方法二：
mysql> alter table stu add unique UQ_address (stuaddress);
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 方法三
mysql> create table stu2(
    -> id int,
    -> name varchar(20),
    -> unique UQ_name(name)
    -> );
Query OK, 0 rows affected (0.01 sec)
```

## 删除索引

语法

```mysql
drop index 索引名 on 表名
```

> 使用index和unique index创建的索引都能需要使用drop index进行删除

> 强调：没有这个命令`drop unique index UQ_xxx on 表名`,只有`drop index UQ_xxx on 表名`这个命令。

例题

```mysql
mysql> drop index ix_stuname on stuinfo;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

## 创建索引的指导原则

1. 该列用于频繁搜索
2. 改列用于排序
3. 公共字段要创建索引
4. 如果表中的数据很少，不需要创建索引。MySQL搜索索引的时间比逐条搜索数据的时间要长。
 > 举个例子，比如一本英语字典，只有几百个英语单词，是不需要建立索引目录的。
5. 如果一个字段上的数据只有几个不同的值，改字段不适合做索引，比如性别。
