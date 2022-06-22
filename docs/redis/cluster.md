# 集群方案-cluster

主要解决分治，分片问题。最主要的理解每个节点存的只是某一部分数据。

在主从复制的组合架构中，当写入的数据特别多的话，主机扩容不好处理，又要换IP，又要停服务等。

再者，如果有大量的并发操作的情况下，主机一时间无法处理太多请求太容易超时，需要找一个合理的方案分担大并发情况。

最后，更不好的地方是，不管是主从复制组合的各种特殊情况，主机下线或者从机上线反客为主等操作，造成了主机ip经常变换，需要程序做自动切换和自动检测等操作。

其中上面的问题，只有ip变换，可以通过哨兵等代理模式进行解决，但是扩容并发等却需要大量的代码操作去兼容处理。因此，在Redis3开始，Redis自带了无中心化集群功能，方便解决以上问题。

无中心化集群基本上都是Redis的配置，以及对配置的优化等操作。

### 注意点

集群有很多限制，比如不支持事务，lua脚本不支持（有其他的方法，但是不推荐），数据完整性不够。

不能过分追求集群，一般情况下，哨兵模式，代理模式 + 主从复制组合基本就能满足大部分需求。


### 概念

Redis 集群实现了对Redis的水平扩容，即启动N个redis节点，将整个数据库分布存储在这N个节点中，每个节点存储总数据的1/N。  
Redis 集群通过分区（partition）来提供一定程度的可用性（availability）： 即使集群中有一部分节点失效或者无法进行通讯， 集群也可以继续处理命令请求。  

### 怎么配置
 
配置6个配置文件，模拟一个三主三从的集群。
配置基本信息：
- daemonize yes (守护模式开启)
- pid文件名字
- 指定端口
- log文件名字
- dump.rdb名字
- appendonly 关掉或者换名字
配置集群信息：
- cluster-enabled yes    打开集群模式
- cluster-config-file nodes-6379.conf  设定节点配置文件名
- cluster-node-timeout 15000   设定节点失联时间，超过该时间（毫秒），集群自动进行主从切换。


配置redis6379.conf，
```bash 
include /zzy/redis/redis.conf
port 6379
pidfile "/var/run/redis_6379.pid"
dbfilename "dump6379.rdb"
dir "/zzy/redis_cluster"
logfile "/zzy/redis_cluster/redis_err_6379.log"
cluster-enabled yes
cluster-config-file nodes-6379.conf
cluster-node-timeout 15000
```

使用相同的配置文件，复制多个redis.conf文件，最后的文件为6个配置文件。

redis6379.conf, redis6380.conf，redis6381.conf，redis6389.conf，redis6390.conf，redis6391.conf

修改每个配置文件里面的端口字符串为各个的字符串。

### 启动前的操作

1. 删除所有的持久化文件（让redis数据库没有内容）

在启动redis的目录或安装redis目录中删除所有有关dump.rdb和appendonly.aof文件

2. 修改一下redis.conf的主配置，也就是前面每个配置中的include包含的那个文件。

- 注释掉bind (IP绑定关闭)
- protected-mode no (保护关闭)
- daemonize yes (守护进程开启)

### 启动6个redis

![启动redis集群][1]

### 启动集群命令

组合之前，请确保所有redis实例启动后，nodes-xxxx.conf文件都生成正常。

![启动redis集群][2]

当6个node都OK后，可以进行启动集群命令。

程序在redis的src里面，名字叫redis-cli

`redis-cli --cluster create --cluster-replicas 1 127.0.0.1:6379 127.0.0.1:6380 127.0.0.1:6381 127.0.0.1:6389 127.0.0.1:6390 127.0.0.1:6391`

在实际中，需要把127.0.0.1修改为真实的服务器地址。此处不要用127.0.0.1， 请用真实IP地址，--replicas 1 采用最简单的方式配置集群，一台主机，一台从机，正好三组。

如果redis有密码，那么命令是前面加上-a即可

`redis-cli -a 密码 --cluster create --cluster-replicas 1 127.0.0.1:6379 127.0.0.1:6380 127.0.0.1:6381 127.0.0.1:6389 127.0.0.1:6390 127.0.0.1:6391`


![redis启动集群][3]

启动集群成功


![redis启动集群成功][4]

### 连接使用

命令为`redis-cli -c -p :port`

因为开启了6个redis服务器，因此，选择任一个进行连接即可。

比如`redis-cli -c -p 6739`, 连上后如有密码，使用`auth 密码`就行了。

-c参数代表使用集群策略连接，设置数据会自动切换到相应的写主机


![redis启动集群成功][5]

### 关闭集群

只需要关闭全部redis服务即可。
 
## 集群信息

在任意连接状态下，可以通过命令`cluster nodes`查看当前集群的所有信息。

![redis启动集群成功][6]


## 集群原理

### 如何分配节点主从
一个集群至少要有三个主节点。  
选项 --cluster-replicas 1 表示我们希望为集群中的每个主节点创建一个从节点。  
分配原则尽量保证每个主数据库运行在不同的IP地址，每个从库和主库不在一个IP地址上。  
### 集群的slots

```bash 
>>> Assign a different config epoch to each node
>>> Sending CLUSTER MEET messages to join the cluster
Waiting for the cluster to join
.
>>> Performing Cluster Check (using node 127.0.0.1:6379)
M: 9fbe76cdf555c3db806d4ba4e9f265cedf5f4358 127.0.0.1:6379
   slots:[0-5460] (5461 slots) master
   1 additional replica(s)
S: 0950bcba5218a93f8ba83a97afd0eececcbc2aff 127.0.0.1:6389
   slots: (0 slots) slave
   replicates 9fbe76cdf555c3db806d4ba4e9f265cedf5f4358
M: 1a379ff232fe0b1ba0f712706c3b7e4d224814c7 127.0.0.1:6381
   slots:[10923-16383] (5461 slots) master
   1 additional replica(s)
M: d84ea538eb5fd049df79ae2f9806667780e5ea88 127.0.0.1:6380
   slots:[5461-10922] (5462 slots) master
   1 additional replica(s)
S: 0ff947d690e866ca078fa14bd7f0f65cd19934b6 127.0.0.1:6390
   slots: (0 slots) slave
   replicates d84ea538eb5fd049df79ae2f9806667780e5ea88
S: da96df551a967d04acdfba65aad0f15b64443c1b 127.0.0.1:6391
   slots: (0 slots) slave
   replicates 1a379ff232fe0b1ba0f712706c3b7e4d224814c7
[OK] All nodes agree about slots configuration.
>>> Check for open slots...
>>> Check slots coverage...
[OK] All 16384 slots covered.
```

如上所示，
一个 Redis 集群包含 16384 个插槽（hash slot）， 数据库中的每个键都属于这 16384 个插槽的其中一个，   
集群使用公式 CRC16(key) % 16384 来计算键 key 属于哪个槽， 其中 CRC16(key) 语句用于计算键 key 的 CRC16 校验和 。  
集群中的每个节点负责处理一部分插槽。 举个例子， 如果一个集群可以有主节点， 其中：    
节点 A 负责处理 0 号至 5460 号插槽。  
节点 B 负责处理 5461 号至 10922 号插槽。  
节点 C 负责处理 10923 号至 16383 号插槽。  

### 集群写入key

使用`redis-cli -p 6379`命令，连接后的redis，进行写入和查询，redis会首先计算出该key对应的插槽，如果不是该客户端对应的插槽，redis会报错，并返回该key正确的redis实例的ip和端口位置。

但是如果，使用了-c参数，如`redis-cli  -c –p 6379`， 那么计算key的插槽后，会自动重定向到指定的redis实例。

### 集群写入多个key

```bash 
127.0.0.1:6381> mset k1 v1 k2 v2 k3 v3
(error) CROSSSLOT Keys in request don't hash to the same slot
```
如果在集群中操作多个key的话，那么会报错，提示不能把多个key放到一样的插槽，所以为了方便，有一个取舍，也就是给这几个key划分一个组，按照组的形式计算插槽就可以了。

如下所示，我把三个key放到一个组zzy里面，这样子就可以一下子操作多个key了。

```bash 
127.0.0.1:6381> mset k1{zzy} v1 k2{zzy} v2 k3{zzy} v3
-> Redirected to slot [6117] located at 127.0.0.1:6380
OK
```

缺点： 容易造成集群主机key的分配不均，让某一台主机压力变大。一般尽可能不这么做。

### 集群查询key

跟单一的redis实例的查询一模一样。如果查询的key不在当前的slots区间内，会自动重定向到对应的slots。
比如组zzy，都在6380实例所在的插槽内，因此从6379查询key，会自动重定向到6380实例。

```bash  
127.0.0.1:6379> get k1{zzy}
-> Redirected to slot [6117] located at 127.0.0.1:6380
"v1"
127.0.0.1:6380> get k2{zzy}
"v2"
127.0.0.1:6380> get k3{zzy}
"v3"
```

### keys查询的问题

使用`keys *`只会查询到当前实例所在插槽内部全部key，不会把所有主机插槽的都查出来。

### 查询集群中的值

CLUSTER GETKEYSINSLOT slot count

时间复杂度： O（log（N））其中 N 是请求的键的数量

原理，先查询对应key所在位置的slot位置，然后列出该slot插槽内部的全部key。

```bash  
127.0.0.1:6380> cluster keyslot zzy 
(integer) 6117
127.0.0.1:6380> cluster countkeysinslot 6117
(integer) 3
127.0.0.1:6380> cluster getkeysinslot 6117 5
1) "k1{zzy}"
2) "k2{zzy}"
3) "k3{zzy}"
```

## 故障恢复

故障主要指的是主机下线或者主从节点都下线的情况，会发生什么事情。

1. 如果主节点下线，等待15秒（自己配的时间，默认15秒）后，从节点会自动升为主节点。
2. 如果原有的主节点下线后等了很长时间又上线了，那么会默认成为现有主节点的从节点，反客为主的情况。
3. 如果某一段插槽内部的主从节点全部下线，redis集群是否能够响应，根据配置来的，如下配置。
    - cluster-require-full-coverage yes 那么会把全部集群挂掉，集群不再提供服务。
    - cluster-require-full-coverage no 只有当前插槽不可以存或读数据。其他的插槽所对应的实例正常使用。

一般情况，推荐设置cluster-require-full-coverage为yes，直接全部挂掉。    
    

## 调用

可以使用连接池，链接任意一个实例地址即可，就能使用redis。  
即使连接的不是主机，集群会自动切换主机存储。主机写，从机读。
无中心化主从集群。无论从哪台主机写的数据，其他主机上都能读到数据。

```java 
Set<HostAndPort>set = new HashSet<HostAndPort>();
set.add(new HostAndPort("ipxxx",6379));
JedisClusterjedisCluster=new JedisCluster(set);
jedisCluster.set("k1", "v1");
System.out.println(jedisCluster.get("k1"));
```

## 总结

### 优点
扩容方便，压力分担，配置简单
### 缺点
缺点也很明显，比如前面的mset多个key的操作默认情况会报错，需要借助key的组合方式进行设置多个key。

同时，设置多个key的事务也不太方便，需要使用组这种思想去处理。

lua脚本可以在单个redis实例上使用，但是在集群中不可以对多个key进行处理，需要判断当前的key是否在一个插槽slot内部才可以使用，那么非要用多个key的话，需要借助组这种思想去处理。也就是
核心思想是业务层保证key都落在一个slot中即可。

[1]: /images/redis/cluster01.png
[2]: /images/redis/cluster02.png
[3]: /images/redis/cluster03.png
[4]: /images/redis/cluster04.png
[5]: /images/redis/cluster05.png
[5]: /images/redis/cluster06.png
