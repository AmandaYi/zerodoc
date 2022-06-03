
# redis6新类型

## Bitmaps

### 数据结构
现代计算机用二进制（位） 作为信息的基础单位， 1个字节等于8位， 例如“abc”字符串是由3个字节组成， 但实际在计算机存储时将其用二进制表示， “abc”分别对应的ASCII码分别是97、 98、 99， 对应的二进制分别是01100001、 01100010和01100011，如下图

 ![bitmaps简介][5]
 
合理地使用操作位能够有效地提高内存使用率和开发效率。

Redis提供了Bitmaps这个“数据类型”可以实现对位的操作：
	
- Bitmaps本身不是一种数据类型， 实际上它就是字符串（key-value） ， 但是它可以对字符串的位进行操作。
- Bitmaps单独提供了一套命令， 所以在Redis中使用Bitmaps和使用字符串的方法不太相同。 可以把Bitmaps想象成一个以位为单位的数组， 数组的每个单元只能存储0和1， 数组的下标在Bitmaps中叫做偏移量。
 
 ![bitmaps简介][6]
 

### setbit

格式：

```html
setbit<key><offset><value>设置Bitmaps中某个偏移量的值（0或1）
```
 ![bitmaps的setbit][7]
 
 *offset:偏移量从0开始

实例：

每个独立用户是否访问过网站存放在Bitmaps中， 将访问的用户记做1， 没有访问的用户记做0， 用偏移量作为用户的id。  
设置键的第offset个位的值（从0算起） ， 假设现在有20个用户，userid=1， 6， 11， 15， 19的用户对网站进行了访问， 那么当前Bitmaps初始化结果如图
 ![bitmaps的setbit][8]
unique:users:20201106代表2020-11-06这天的独立访问用户的Bitmaps  
  ![bitmaps的setbit][6]
 注：
 
 很多应用的用户id以一个指定数字（例如10000） 开头， 直接将用户id和Bitmaps的偏移量对应势必会造成一定的浪费， 通常的做法是每次做setbit操作时将用户id减去这个指定数字。  
 在第一次初始化Bitmaps时， 假如偏移量非常大， 那么整个初始化过程执行会比较慢， 可能会造成Redis的阻塞。  

### 

格式：

```html
getbit<key><offset>获取Bitmaps中某个偏移量的值
```

![getbit格式][10]  
获取键的第offset位的值（从0开始算）

案例：  
获取id=8的用户是否在2020-11-06这天访问过， 返回0说明没有访问过：
  ![getbit使用][11]  

注：因为100根本不存在，所以也是返回0  


  [5]: /images/redis/structure05.png
  [6]: /images/redis/structure06.png
  [7]: /images/redis/structure07.png
  [8]: /images/redis/structure08.png
  [9]: /images/redis/structure09.png
  [10]: /images/redis/structure10.png
  [11]: /images/redis/structure11.png
