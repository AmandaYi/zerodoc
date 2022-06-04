# 主从复制

## 概念

主机数据更新后根据配置和策略， 自动同步到备机的master/slaver机制，Master以写为主，Slave以读为主。

主要为了读写分离，性能扩展。容灾快速恢复。

![主从复制图解原理][1]

## 怎么做

拷贝多个redis.conf文件include(写绝对路径)  
开启daemonize yes  
Pid文件名字pidfile  
指定端口port  
Log文件名字  
dump.rdb名字dbfilename   
Appendonly 关掉或者换名字    

### 新建redis6379.conf
```bash 
include /myredis/redis.conf
pidfile /var/run/redis_6379.pid
port 6379
dbfilename dump6379.rdb
```

### 新建redis6380.conf

```bash 
include /myredis/redis.conf
pidfile /var/run/redis_6380.pid
port 6380
dbfilename dump6380.rdb
```
### 新建redis6381.conf

```bash 
include /myredis/redis.conf
pidfile /var/run/redis_6381.pid
port 6381
dbfilename dump6381.rdb
```

### 启动这三台redis
```bash 
redis-server redis6379.conf
redis-server redis6380.conf
redis-server redis6381.conf
```

### 配置从库

`slaveof <masterip> <masterport>`

把端口为6380和6381这两个redis服务，进行连接，输入命令`slaveof 127.0.0.1 6379`,

其中，slaveof命令代表，把自己作为从库，后面的127.0.0.1和6379为主库。在测试中就用本地了，在实际开发中，ip往往是一个服务器一个redis，自然ip不一样。

到底为止，因此完成了主从复制的全部操作，如图所示。

![主从配置具体操作][2]

### 查看主从信息

如图可以使用命令`info replication`，查看自己是主库还是从库。

![主从配置具体信息][3]

### 测试

关于主库操作：

1. 在主库上可以做写入操作，相对应的可以在从库上就可以读取到对应的key。

2. 主库如果挂掉了话，那么重启即可，什么都不需要做，默认还是原来的主库。

关于从库操作：

1. 可以读取到主库的信息，但是不可以做写入操作，否则会报错。
2. 如果从库挂掉了，那么重启后，要重新设置一下自己指向从库(`slaveof 127.0.0.1 6379`)，否则的话，从库重启后会变成主库，就自动脱离主从这个组合了。

### 永久配置从库

只需要在自己的redis.conf文件中，写入`slaveof 127.0.0.1 6379`即可


## 一些特殊情况

### 一主两仆

时刻牢记只要，主库和从库连接了，就会做一次全量更新，牢记这个标准就不会有任何问题。

1. 如果突然加入了一个从库，那么那么会把主库的全部数据都更新一遍。
2. 从机不可以做写入操作。
3. 主机挂掉后，从机在无任何其他监控情况下，默认不动，等待主机上机。
4. 主机上线后，主机新增记录后，从机会检测到主机，正常顺利复制。原理是，只要主机重新上线，那么就会做一次全量更新，然后主机新写入值，就会增量更新到从机。
5. 假如一个从机挂掉后，如果从机再次上线，会执行一次全量更新，然后数据就和所有的从机数据一致。

### 薪火相传

可以理解一个链表，链表头是主机，往后是从机1，从机2，相当于，后一个redis永远是前一个从机。

这种模式，主要是可以分担链表头的主机的写入操作的压力，其他没有太大的有点。

缺点也很明显，假如链路某个节点挂掉了，可以说整体都不好用了。一旦某个slave宕机，后面的slave都没法备份。
如果链表头的主机挂掉了，从机还是从机，无法写数据了。  
如果从机中途修改了指向主机，那么会清楚所有数据，重新建立拷贝最新的。  

### 反客为主

可以理解为就是主机下线后，从机升级为主机。

当一个master宕机后，后面的slave可以立刻升为master，其后面的slave不用做任何修改。用 `slaveof  no one`  将从机变为主机。

![反客为主实例][4]

## 主从复制原理

- Slave启动成功连接到master后会发送一个sync命令
- Master接到命令启动后台的存盘进程，同时收集所有接收到的用于修改数据集命令， 在后台进程执行完毕之后，master将传送整个数据文件到slave,以完成一次完全同步
- 全量复制：而slave服务在接收到数据库文件数据后，将其存盘并加载到内存中。
- 增量复制：Master继续将新的所有收集到的修改命令依次传给slave,完成同步
- 但是只要是重新连接master,一次完全同步（全量复制)将被自动执行

[1]: /images/redis/mslave01.png
[2]: /images/redis/mslave02.png
[3]: /images/redis/mslave03.png
[4]: /images/redis/mslave04.png
