---
displayed_sidebar: MySQL
---

# MySQL数据类型

## 整型

|   类型    | 字节 |       范围       |
| :-------: | :--: | :--------------: |
|  tinyint  |  1   |     -128~127     |
| smallint  |  2   |   -32768~32767   |
| mediumint |  3   | -8388608~8388607 |
|    int    |  4   |  -2^31^~2^31^-1  |
|  bigint   |  8   |  -2^63^~2^63^-1  |

1、无符号整数（unsigned）：无符号数没有负数，正数部分是有符号的两倍。

 例题

```mysql
mysql> create table stu(
    -> id smallint unsigned auto_increment primary key comment '主键',
    -> age tinyint unsigned not null comment '年龄',
    -> money bigint unsigned comment '存款'
    -> );
Query OK, 0 rows affected (0.06 sec)

mysql> desc stu;
+-------+----------------------+------+-----+---------+----------------+
| Field | Type                 | Null | Key | Default | Extra          |
+-------+----------------------+------+-----+---------+----------------+
| id    | smallint(5) unsigned | NO   | PRI | NULL    | auto_increment |
| age   | tinyint(3) unsigned  | NO   |     | NULL    |                |
| money | bigint(20) unsigned  | YES  |     | NULL    |                |
+-------+----------------------+------+-----+---------+----------------+
3 rows in set, 3 warnings (0.00 sec)
```

2、整型支持显示宽度（最小的显示位数）  比如int(5)，如果数值的位数小于5位，前面加上前导0。
比如输入12，显示00012；大于5位就不添加前导0。

```
脚下留心：要想前面加上前导0，必须结合zerofill才起作用
```

```mysql
mysql> create table stu(
    -> id int(5),
    -> age int(5) zerofill   # 填充前导0
    -> );
Query OK, 0 rows affected (0.02 sec)

mysql> desc stu;
+-------+--------------------------+------+-----+---------+-------+
| Field | Type                     | Null | Key | Default | Extra |
+-------+--------------------------+------+-----+---------+-------+
| id    | int(5)                   | YES  |     | NULL    |       |
| age   | int(5) unsigned zerofill | YES  |     | NULL    |       |
+-------+--------------------------+------+-----+---------+-------+
2 rows in set (0.02 sec)

mysql> insert into stu values (1,11);
mysql> insert into stu values (1111111,2222222);
Query OK, 1 row affected (0.00 sec)

mysql> select * from stu;
+---------+---------+
| id      | age     |
+---------+---------+
|       1 |   00011 |
| 1111111 | 2222222 |    # 注意：age填充了前导0
+---------+---------+
2 rows in set (0.00 sec)
```

## 浮点型（保存近似值小数）

一般情况能用double就用。


|      浮点型      | 占用字节 |        范围        |
| :--------------: | :------: | :----------------: |
| float（单精度）  |    4     |  -3.4E+38~3.4E+38  |
| double（双精度） |    8     | -1.8E+308~1.8E+308 |

 1、浮点数声明:  float(M,D)   double(M,D)

M：总位数

D：小数位数

 例题；

```mysql
mysql> create table t1(
    -> num1 float(5,2),   #总位数是5，小数位数是2，那么整数位数是3，
    -> num2 double(4,1)
    -> );
Query OK, 0 rows affected (0.08 sec)

mysql> insert into t1 values (1.23,1.23); #如果精度超出了允许的范围，会四舍五入
Query OK, 1 row affected (0.00 sec)

mysql> select * from t1;
+------+------+
| num1 | num2 |
+------+------+
| 1.23 |  1.2 |   #如果精度超出了允许的范围，会四舍五入
+------+------+
1 row in set (0.00 sec)
```

2、浮点的精度可能会丢失【精度指的是小数】

  ![1536718268668](/images/mysql/1536718268668.png)

## 定点数

语法：decimal(M,D)

 ```mysql
mysql> create table t4(
    -> num decimal(20,19)
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into t4 values (1.1234567890123456789);
Query OK, 1 row affected (0.01 sec)

mysql> select * from t4;
+-----------------------+
| num                   |
+-----------------------+
| 1.1234567890123456789 |
+-----------------------+
1 row in set (0.00 sec)
 ```

```mysql
多学一招：
1、定点数是变长的，大致每9个数字用4个字节来存储。
定点数之所以能保存精确的小数，因为整数和小数是分开存储的。占用的资源比浮点数要多。
2、定点数和浮点数都支持显示宽度和无符号数。
```

## 字符型

|   数据类型    |   描述   |     长度      |
| :-----------: | :------: | :-----------: |
|  char(长度)   |   定长   |    最大255    |
| varchar(长度) |   变长   |   最大65535   |
|   tinytext    | 大段文本 |  2^8^-1=255   |
|     text      | 大段文本 | 2^16^-1=65535 |
|  mediumtext   | 大段文本 |    2^24^-1    |
|   longtext    | 大段文本 |    2^32^-1    |

1、char(10)和varchar(10)的区别？

答：相同点：它们最多只能保存10个字符；

不同点：char不回收多余的字符，varchar会回收多余的字符。

char效率高，浪费空间，varchar节省空间，效率比char低。

2、char的最大长度是255。  

![1536719919287](/images/mysql/1536719919287.png)

3、varchar理论长度是65535字节,实际根本达不到。具体长度与字符编码有关。 

![1536720096028](/images/mysql/1536720096028.png)

 ![1536720113031](/images/mysql/1536720113031.png)

 4、一个记录的总长度不能超过65535个字节。

 5、大块文本（text）不计算在总长度中,一个大块文本只占用10个字节来保存文本的地址。 
 
 ![1536720763914](/images/mysql/1536720763914.png)



## 枚举（enum）

1、从集合中选择一个数据（单选）

 ```mysql
mysql> create table t8(
    -> name varchar(20),
    -> sex enum('男','女','保密')   # 枚举
    -> )charset=utf8;
Query OK, 0 rows affected (0.06 sec)

mysql> insert into t8 values ('tom','男');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t8 values ('berry','女');
Query OK, 1 row affected (0.05 sec)

mysql> insert into t8 values ('rose','未知');   # 报错，只能插入枚举值
ERROR 1265 (01000): Data truncated for column 'sex' at row 1
mysql> select * from t8;
+-------+------+
| name  | sex  |
+-------+------+
| tom   | 男     |
| berry | 女    |
+-------+------+
 ```

2、MySQL的枚举类型是通过整数来管理的，第一个值是1，第二个值是2，以此类推。

  ![1536721403493](/images/mysql/1536721403493.png)

```mysql
mysql> select sex+0 from t8;
+-------+
| sex+0 |
+-------+
|     1 |
|     2 |
+-------+
```

3、既然枚举在数据库内部存储的是整数，那么可以直接插入数字

 ```mysql
mysql> insert into t8 values ('rose',3);  # 可以直接插入数字
Query OK, 1 row affected (0.00 sec)

mysql> select * from t8;
+-------+------+
| name  | sex  |
+-------+------+
| tom   | 男     |
| berry | 女    |
| rose  | 保密     |
+-------+------+
3 rows in set (0.00 sec)
 ```

枚举的优点：

1.  运行速度快（数字比字符串运算速度快）

2. 限制数据，保证数据完整性

3. 节省空间

```
思考：已知枚举占用2个字节，请问最多有多少个枚举值？

答：2个字节=16位，可以保存数字（0-65535），枚举是从1开始，所以枚举最多可以有65535个枚举值。
```

## 集合（set）

从集合中选择一些数据（多选）

 ```mysql
mysql> create table t9(
    -> hobby set('爬山','读书','游泳','敲代码')
    -> );
Query OK, 0 rows affected (0.08 sec)

mysql> insert into t9 values ('爬山');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t9 values ('爬山,游泳');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t9 values ('游泳,爬山');  # 插入顺序不一样，但是显示的顺序是一样的
Query OK, 1 row affected (0.02 sec)

mysql> insert into t9 values ('爬山,游泳,开车');  # 报错，插入集合中没有的选项会报错
ERROR 1265 (01000): Data truncated for column 'hobby' at row 1
 ```

 每个集合的元素都分配一个固定的数字，分配的方式从左往右按2的0、1、2、…次方

 ![1536723512843](/images/mysql/1536723512843.png)

***

```mysql
思考：已知集合占用8个字节，最多可以表示几个选项？

答：8个字节=64位，一个位表示1个选项，最多可以表示64个选项。
```



## 日期类型

| 数据类型  |         描述          |
| :-------: | :-------------------: |
| datetime  | 日期时间，占用8个字节 |
|   date    |   日期 占用3个字节    |
|   time    |   时间 占用3个字节    |
| timestamp |  时间戳，占用4个字节  |
|   year    |  年份   占用1个字节   |

1、datetime   格式：年-月-日 小时:分钟:秒

 ```mysql
mysql> create table t10(
    -> field datetime
    -> );
Query OK, 0 rows affected (0.02 sec)

mysql> insert into t10 values ('2025-10-12 10:12:36');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t10 values ('100-10-12 10:12:36');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t10 values ('10000-10-12 10:12:36');  #datetime保存范围是：1~9999年
ERROR 1292 (22007): Incorrect datetime value: '10000-10-12 10:12:36' for column 'field' at row 1

mysql> select * from t10;
+---------------------+
| field               |
+---------------------+
| 2025-10-12 10:12:36 |
| 0100-10-12 10:12:36 |
+---------------------+
2 rows in set (0.00 sec)
 ```

2、date 日期格式

```mysql
mysql> create table t11(
    -> field date
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into t11 values ('2025-10-12');
Query OK, 1 row affected (0.00 sec)

mysql> select * from t11;
+------------+
| field      |
+------------+
| 2025-10-12 |
+------------+
```

3、timestamp：时间戳

timestamp类型和 datetime类型在表现上是一样的。他们的区别：

datetime是从1到9999，而timestamp从1970年~2038年，2038年01月19日11:14:07秒以后就超出timestamp范围了。

```mysql
mysql> create table t12(
    -> field timestamp
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into t12 values ('1975-5-5 12:12:12');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t12 values ('1969-5-5 12:12:12');   # 超出范围
ERROR 1292 (22007): Incorrect datetime value: '1969-5-5 12:12:12' for column 'field' at row 1
mysql> insert into t12 values ('2038-1-19 11:14:07');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t12 values ('2038-1-19 11:14:08');  # 超出范围
ERROR 1292 (22007): Incorrect datetime value: '2038-1-19 11:14:08' for column 'field' at row 1

mysql> select * from t12;
+---------------------+
| field               |
+---------------------+
| 1975-05-05 12:12:12 |
| 2038-01-19 11:14:07 |
+---------------------+
```

4、year

因为只占用1个字节，最多只能表示255个年份，范围是1901-2155之间的年份

```mysql
mysql> create table t13(
    -> field year
    -> );
Query OK, 0 rows affected (0.06 sec)

mysql> insert into t13 values (2025);
Query OK, 1 row affected (0.00 sec)

mysql> insert into t13 values (1900);   # 超出范围
ERROR 1264 (22003): Out of range value for column 'field' at row 1
mysql> insert into t13 values (2155);
Query OK, 1 row affected (0.00 sec)

mysql> insert into t13 values (2156);   # 超出范围
ERROR 1264 (22003): Out of range value for column 'field' at row 1
```

5、time    表示时间或时间间隔，范围是-838:59:59~838:59:59

 ```mysql
mysql> create table t14(
    -> field time
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into t14 values ('12:12:12');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t14 values ('212:12:12');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t14 values ('838:59:59');
Query OK, 1 row affected (0.00 sec)

mysql> insert into t14 values ('839:00:00');  # 操作范围
ERROR 1292 (22007): Incorrect time value: '839:00:00' for column 'field' at row 1
mysql>
 ```

多学一招：time支持以天的方式插入

```mysql
mysql> insert into t14 values ('10 10:10:10');
Query OK, 1 row affected (0.02 sec)

mysql> select * from t14;
+-----------+
| field     |
+-----------+
| 12:12:12  |
| 212:12:12 |
| 838:59:59 |
| 250:10:10 |
+-----------+
```

## boolean

MySQL不支持boolean类型，true和false在数据库中对应1和0。

 ```mysql
mysql> create table t15(
    -> field boolean
    -> );
Query OK, 0 rows affected (0.00 sec)

mysql> insert into t15 values (true),(false);   # true和false在数据库中对应1和0
Query OK, 2 rows affected (0.00 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from t15;
+-------+
| field |
+-------+
|     1 |
|     0 |
+-------+
2 rows in set (0.00 sec)
 ```

## 关于数据类型的思考题

1. 手机号码一般使用什么数据类型存储?               char 
2. 电话号码使用什么数据类型                                 varchar
3. 性别一般使用什么数据类型存储?                      char      enum   

4. 学生年龄信息一般使用什么数据类型存储?               tinyint       

5. 照片信息一般使用什么数据类型存储?                      binary         

6. 薪水一般使用什么数据类型存储?                             decimal

多学一招：一个字段到底选数字还是字符，取决于有没有计算的可能，如果没有计算的可能即使是数字也要用字符类型，比如手机号、QQ号，…
