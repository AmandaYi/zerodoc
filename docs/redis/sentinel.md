# Redis哨兵模式

主要实现的是主从复制组合中，在主机挂掉后，从机需要手动执行`slave no one`命令变成主机。

哨兵模式就是把这个手动的过程，变为了自动版。

哨兵模式是反客为主的自动版，能够后台监控主机是否故障，如果故障了根据投票数自动将从库转换为主库。

通过发送命令，让Redis服务器返回监控其运行状态，包括主服务器和从服务器
当哨兵监测到Redis主机宕机，会自动将slave切换成master，然后通过发布订阅模式通知其他服务器，修改配置文件，让他们换主机

哨兵也是一台 redis 服务器，只是不提供数据服务
通常哨兵配置的数量为单数

## 哨兵模式方案


主要思路是，在主从复制组合的基础上，使用redis自带的哨兵模式的程序，配置哨兵模式指向主机地址即可，然后启动哨兵程序，就完成了对主从复制组合的监控。

1. 搭建一个正常的主从复制组合。

主机
```bash 
port 6379
daemonize no
#logfile "6379.log"
dir /zzyredis/data
dbfilename dump-6379.rdb
rdbcompression yes
rdbchecksum yes
save 10 2
appendonly yes
appendfsync always
appendfilename appendonly-6379.aof
bind 127.0.0.1
databases 16
```
从机1
```bash 
port 6380
daemonize no
#logfile "6380.log"
dir /zzyredis/data
slaveof 127.0.0.1 6379
```
从机2
```bash 
port 6381
daemonize no
#logfile "6381.log"
dir /zzyredis/data
slaveof 127.0.0.1 6379
```
![主从复制组合][1]

2. 复制一份redis内部的`sentinel.conf`文件，书写如下代码
```bash 
sentinel monitor mymaster 127.0.0.1 6379 1
```

解释 ： sentinel  monitor （被监控的名称）  host  port    1    
 最后面的1是监测到主机宕机后，会投出1票  
 如果只有一个哨兵，所以投1票就代表自己是最大的执行者了。
   
```bash 
# 哨兵服务端口
port 26379
 
# 哨兵工作信息存储目录
dir /tmp
 
# 监控 主 连接字符串 哨兵判挂标准（几个哨兵认定他挂了，就判定为主挂了，通常为哨兵数量的一半加一）
sentinel monitor mymaster 127.0.0.1 6379 2
 
# 主 连接多长时间无响应，就认定它挂了（默认 30s）
sentinel down-after-milliseconds mymaster 30000
 
# 主挂了之后，新的主上任同步数据的路线数量，数值越小，对服务器压力越小
sentinel parallel-syncs mymaster 1
 
# 新主同步数据时，多长时间同步完算有效 （默认 180s）
sentinel failover-timeout mymaster 180000
``` 
哨兵1
```bash 
port 26379
dir /zzyredis/data
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
```
哨兵2
```bash 
port 26380
dir /zzyredis/data
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
```
哨兵3
```bash 
port 26381
dir /zzyredis/data
sentinel monitor mymaster 127.0.0.1 6379 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel failover-timeout mymaster 180000
```


3. 启动哨兵模式

`redis-sentinel sentinel-端口号.conf`

```bash 
redis-sentinel ./sentinel-26379.conf
 
redis-sentinel ./sentinel-26380.conf
 
redis-sentinel ./sentinel-26381.conf
```

### 哨兵切换主机原理

哨兵会在主机下线后，进行投票选出一个从机作为主机。

同时，redis.conf的配置slave-priority 100，值越小优先级越高。再者，根据从机偏移量，指的是看哪个从机的数据最全。

每个redis实例启动后都会随机生成一个40位的runid，根据runid进行从机切换为主机，然后已经下线的主机，配置指向新的主机。

### 使用

只需要用连接池连接任意一个哨兵的ip和端口就能完成对redis的各种操作，如下例子

```java 
private static JedisSentinelPool jedisSentinelPool = null;

public static Jedis getJedisFromSentinel(){
    if(jedisSentinelPool==null){
        Set<String> sentinelSet=new HashSet<>();
        sentinelSet.add("192.168.11.103:26379");
        
        JedisPoolConfig jedisPoolConfig =new JedisPoolConfig();
        jedisPoolConfig.setMaxTotal(10); //最大可用连接数
        jedisPoolConfig.setMaxIdle(5); //最大闲置连接数
        jedisPoolConfig.setMinIdle(5); //最小闲置连接数
        jedisPoolConfig.setBlockWhenExhausted(true); //连接耗尽是否等待
        jedisPoolConfig.setMaxWaitMillis(2000); //等待时间
        jedisPoolConfig.setTestOnBorrow(true); //取连接的时候进行一下测试 ping pong
        
        jedisSentinelPool=new JedisSentinelPool("mymaster",sentinelSet,jedisPoolConfig);
        return jedisSentinelPool.getResource();
    }else{
        return jedisSentinelPool.getResource();
    }
}

```

## 总结


当一个哨兵进程对Redis服务器进行监控，可能会出现问题，为此可以使用哨兵进行监控， 各个哨兵之间还会进行监控，这就形成了多哨兵模式

[1]: /images/redis/sentinel01.png


