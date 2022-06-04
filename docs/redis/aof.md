# Redis持久化AOF

Redis 提供了2个不同形式的持久化方式。

- RDB（Redis DataBase）
- AOF（Append Of File）

## AOF

### 概念

以日志的形式来记录每个写操作（增量保存），将Redis执行过的所有写指令记录下来(读操作不记录)， 只许追加文件但不可以改写文件，redis启动之初会读取该文件重新构建数据，换言之，redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作

### 执行过程

1. 客户端的请求写命令会被append追加到AOF缓冲区内；
2. AOF缓冲区根据AOF持久化策略[always,everysec,no]将操作sync同步到磁盘的AOF文件中；
3. AOF文件大小超过重写策略或手动重写时，会对AOF文件rewrite重写，压缩AOF文件容量；
4. Redis服务重启时，会重新load加载AOF文件中的写操作达到数据恢复的目的；


### AOF图解

![aof图解][1]

### 怎么配置

主要是找到启动配置文件`redis.config`,其中有几个配置项需要具体设置即可。

需要说明的是默认情况下AOF是关闭的。

- 开启AOF配置: appendonly yes
- 备份的文件名: appendfilename "appendonly.aof", 文件名位置任意。
- 保存位置: dir ./
- 同步频率 appendfsync 
   
   - appendfsync always 始终同步，每次Redis的写入都会立刻记入日志；性能较差但数据完整性比较好  
   - appendfsync everysec 每秒同步，每秒记入日志一次，如果宕机，本秒的数据可能丢失。  
   - appendfsync no redis不主动进行同步，把同步时机交给操作系统。速度是很快，但是不可靠。 

### 怎么启动

AOF的备份机制和性能虽然和RDB不同, 但是备份和恢复的操作同RDB一样，都是拷贝备份文件，需要恢复时再拷贝到Redis工作目录下，启动系统即加载。

### 怎么恢复
1. 修改默认的appendonly no，改为yes，
2. 将有数据的aof文件复制一份保存到对应目录(查看目录：config get dir)
3. 恢复：重启redis然后重新加载

### AOF文件损坏恢复

如遇到AOF文件损坏，通过/usr/local/bin/redis-check-aof--fix appendonly.aof进行修复文件，修复完毕后，再按照正常恢复流程即可。

## AOF重写文件

当备份的AOF文件大小太大了，超过了限制的值，那么需要对AOF文件覆盖重写。

### 超出文件大小压缩

AOF采用文件追加方式，文件会越来越大为避免出现此种情况，新增了重写机制, 当AOF文件的大小超过所设定的阈值时，Redis就会启动AOF文件的内容压缩， 只保留可以恢复数据的最小指令集.可以使用命令bgrewriteaof。

### 重写配置

通过设置`no-appendfsync-on-rewrite`这个配置，来设置重写方案。
当`no-appendfsync-on-rewrite yes`时，不写入aof文件只写入缓存，用户请求不会阻塞，但是在这段时间如果宕机会丢失这段时间的缓存数据。（降低数据安全性，提高性能）  
当`no-appendfsync-on-rewrite no`时，还是会把数据往磁盘里刷，但是遇到重写操作，可能会发生阻塞。（数据安全，但是性能降低）

### 重写触发

Redis会记录上次重写时的AOF大小，默认配置是当AOF文件大小是上次rewrite后大小的一倍且文件大于64M时触发  
重写虽然可以节约大量磁盘空间，减少恢复时间。但是每次重写还是有一定的负担的，因此设定Redis要满足一定条件才会进行重写。   
auto-aof-rewrite-percentage：设置重写的基准值，文件达到100%时开始重写（文件是原来重写后文件的2倍时触发）  
auto-aof-rewrite-min-size：设置重写的基准值，最小文件64MB。达到这个值开始重写。  
例如：文件达到70MB开始重写，降到50MB，下次什么时候开始重写？100MB  
系统载入时或者上次重写完毕时，Redis会记录此时AOF大小，设为base_size,  
如果Redis的AOF当前大小>= base_size +base_size*100% (默认)且当前大小>=64mb(默认)的情况下，Redis会对AOF进行重写。   

### 重写原理

1. bgrewriteaof触发重写，判断是否当前有bgsave或bgrewriteaof在运行，如果有，则等待该命令结束后再继续执行。
2. 主进程fork出子进程执行重写操作，保证主进程不会阻塞。
3. 子进程遍历redis内存中数据到临时文件，客户端的写请求同时写入aof_buf缓冲区和aof_rewrite_buf重写缓冲区保证原AOF文件完整以及新AOF文件生成期间的新的数据修改动作不会丢失。
4. 子进程写完新的AOF文件后，向主进程发信号，父进程更新统计信息。
5. 主进程把aof_rewrite_buf中的数据写入到新的AOF文件。
6. 使用新的AOF文件覆盖旧的AOF文件，完成AOF重写。

### 图解重写

![aof重写原理图解][2] 

### 优点

- 备份机制更稳健，丢失数据概率更低。
- 可读的日志文本，通过操作AOF稳健，可以处理误操作。

### 缺点

- 比起RDB占用更多的磁盘空间。
- 恢复备份速度要慢。
- 每次读写都同步的话，有一定的性能压力。
- 存在个别Bug，造成恢复不能。
 
### 总结

AOF只是一个不断追加的文件，同时在AOF文件过大时，Redis会自动Fork一个子进程进行重写新文件，然后在过程中，存在写入操作时，会同时把AOF缓存区和AOF重写缓冲区同步更新新写入的操作，最后当子进程完成了重写文件后，会通知主进程，主进程以阻塞的形式，把文件重名名即可。

AOF的内容按照顺序保存了所有的对数据的写入操作和写入的数据，因此内容很容易读懂并分析。

不过，对于同样的写入操作，AOF文件要比RDB文件占用的磁盘空间要多，同时因此同步策略的影响，AOF的同步速度很快会比RDB慢。

 
[1]: /images/redis/aof01.png
[2]: /images/redis/aof02.png
