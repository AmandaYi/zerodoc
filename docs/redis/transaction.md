# 事务和锁

## Redis的事务定义

Redis事务是一个单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。  
Redis事务的主要作用就是串联多个命令防止别的命令插队。

## Multi、Exec、discard

从输入Multi命令开始，输入的命令都会依次进入命令队列中，但不会执行，直到输入Exec后，Redis会将之前的命令队列中的命令依次执行。  
组队的过程中可以通过discard来放弃组队。    

![事务执行过程][1]

比如在shell中组队成功，提交成功如下：

![组队成功并执行][2]

在shell中组队阶段报错，提交失败如下：

![组队时报错，提交失败][3]
![组队时报错，提交失败][4]


## 事务的错误处理

组队中某个命令出现了报告错误，执行时整个的所有队列都会被取消。

![组队时报错，提交失败][5]

:::tip
特别的说明，只有执行到错误的命令后才会造成队列销毁取消。这与mysql的事务并不太一样，mysql的事务是要么全部成功，要么全部失败。
redis的事务是如果执行阶段某个命令报出了错误，则只有报错的命令不会被执行，而其他的命令都会执行，不会回滚。
:::  
![组队时报错，提交失败][6]  
  
## 为什么要有事务

想想一个场景：有很多人有你的账户,同时去参加双十一抢购
### 事务冲突
事务冲突的问题  
例子    
一个请求想给金额减8000  
一个请求想给金额减5000  
一个请求想给金额减1000  

![事务例子][7]

### 解决方案

### 悲观锁

悲观锁(Pessimistic Lock), 顾名思义，就是很悲观，每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会block直到它拿到锁。传统的关系型数据库里边就用到了很多这种锁机制，比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。

![悲观锁][8]

### 乐观锁

乐观锁(Optimistic Lock), 顾名思义，就是很乐观，每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用版本号等机制。乐观锁适用于多读的应用类型，这样可以提高吞吐量。Redis就是利用这种check-and-set机制实现事务的。

![乐观锁][9]

### WATCH key
执行之前这个(或这些) key 被其他命令所改动，那么事务将被打断。
![WATCH][10]

### unwatch

取消 WATCH 命令对所有 key 的监视。
如果在执行 WATCH 命令之后，EXEC 命令或DISCARD 命令先被执行了的话，那么就不需要再执行UNWATCH 了。
http://doc.redisfans.com/transaction/exec.html

## 事务三特性（Redis特有原子性）
1. 单独的隔离操作   
    事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。 
2. 没有隔离级别的概念 
    队列中的命令没有提交之前都不会实际被执行，因为事务提交前任何指令都不会被实际执行
3. 不保证原子性(一般解决原子性方案使用lua脚本即可)   
    事务中如果有一条命令执行失败，其后的命令仍然会被执行，没有回滚 

## Redis实现秒杀例子

### 秒杀例子

### 书写一个秒杀例子

此例子，存在一定的问题，后面会解决。

使用spring boot 和 Jedis,  
开启一个controller，路径是`/Seckill/doseckill`

```java 
public class SecKill_redis {
	//秒杀过程
	public static boolean doSecKill(String uid,String prodid) throws IOException {
		//1 uid和prodid非空判断
		if(uid == null || prodid == null) {
			return false;
		}

		//2 连接redis
		Jedis jedis = new Jedis("xxxxx",6379);

		//3 拼接key
		// 3.1 库存key
		String kcKey = "sk:"+prodid+":qt";
		// 3.2 秒杀成功用户key
		String userKey = "sk:"+prodid+":user";

		//4 获取库存，如果库存null，秒杀还没有开始
		String kc = jedis.get(kcKey);
		if(kc == null) {
			System.out.println("秒杀还没有开始，请等待");
			jedis.close();
			return false;
		}

		// 5 判断用户是否重复秒杀操作
		if(jedis.sismember(userKey, uid)) {
			System.out.println("已经秒杀成功了，不能重复秒杀");
			jedis.close();
			return false;
		}

		//6 判断如果商品数量，库存数量小于1，秒杀结束
		if(Integer.parseInt(kc)<=0) {
			System.out.println("秒杀已经结束了");
			jedis.close();
			return false;
		}

		//7 秒杀过程
		//7.1 库存-1
		jedis.decr(kcKey);
		//7.2 把秒杀成功用户添加清单里面
		jedis.sadd(userKey,uid);

		System.out.println("秒杀成功了..");
		jedis.close();
		return true;
	}
}
```

![秒杀例子][11] 

一个商品开展了秒杀活动，如图左侧，该商品此次参与秒杀的数量假定10，右侧最后的结果肯定是10个人秒杀成功。同时，库存的值变成0.

### 秒杀模拟工具

可以使用ab工具，其中，如果linux有网络的话，安装命令为`yum install httpd-tools`;否则，linux没有网络的话，可以用系统自带的工具解包后安装，

1. 进入cd  /run/media/root/CentOS 7 x86_64/Packages（路径跟centos6不同）
2. 顺序安装
```bash 
apr-1.4.8-3.el7.x86_64.rpm
apr-util-1.5.2-6.el7.x86_64.rpm
httpd-tools-2.4.6-67.el7.centos.x86_64.rpm  
```

### ab测试

ab -n 2000 -c 200 -k -p ~/postfile -T application/x-www-form-urlencoded http://127.0.0.1:8080/Seckill/doseckill


### 测试结果

超卖，库存变成了负数

## 超卖问题

用上面的例子和ab工具测试，发现了新问题，如图所示、

![例子命令行输出超卖问题][12] ![例子redis的当前库存][13]

已经秒杀结束了，后面又出现了秒杀成功，同时查看redis里面，发现库存为负数了。

期望是，秒杀结束后，不允许出现秒杀结束，同时库存为0。

分析问题： 如图,图中，展示，用户每次拿到的初始值都是10个，因此造成了库存减少的错误。

![超卖问题的分析图][14]

### 乐观锁解决超卖

![使用乐观锁解决问题][15]

因为redis的事务，默认用的是乐观锁，因此，我们不需要在程序中使用version等常见乐观锁方案去实现事务，因此我们
只需要使用redis的watch加multi既能使用redis的乐观锁。
修改程序如下

增加乐观锁`jedis.watch(kcKey)`, 然后把流程7的减库存，存秒杀成功用户的操作修改为multi的事务组队形式。

```java 

public class SecKill_redis {
	//秒杀过程
	public static boolean doSecKill(String uid,String prodid) throws IOException {
		//1 uid和prodid非空判断
		if(uid == null || prodid == null) {
			return false;
		}

		//2 连接redis
		Jedis jedis = new Jedis("xxxxx",6379);

		//3 拼接key
		// 3.1 库存key
		String kcKey = "sk:"+prodid+":qt";
		// 3.2 秒杀成功用户key
		String userKey = "sk:"+prodid+":user";

		//监视库存
		jedis.watch(kcKey);

		//4 获取库存，如果库存null，秒杀还没有开始
		String kc = jedis.get(kcKey);
		if(kc == null) {
			System.out.println("秒杀还没有开始，请等待");
			jedis.close();
			return false;
		}

		// 5 判断用户是否重复秒杀操作
		if(jedis.sismember(userKey, uid)) {
			System.out.println("已经秒杀成功了，不能重复秒杀");
			jedis.close();
			return false;
		}

		//6 判断如果商品数量，库存数量小于1，秒杀结束
		if(Integer.parseInt(kc)<=0) {
			System.out.println("秒杀已经结束了");
			jedis.close();
			return false;
		}

		//7 秒杀过程
		//使用事务
		Transaction multi = jedis.multi();

		//组队操作
		multi.decr(kcKey);
		multi.sadd(userKey,uid);

		//执行
		List<Object> results = multi.exec();

		if(results == null || results.size()==0) {
			System.out.println("秒杀失败了....");
			jedis.close();
			return false;
		}

		//7.1 库存-1
		//jedis.decr(kcKey);
		//7.2 把秒杀成功用户添加清单里面
		//jedis.sadd(userKey,uid);

		System.out.println("秒杀成功了..");
		jedis.close();
		return true;
	}
}

```

使用ab工具再次测试。截图结果如下。  
发现，左边的程序的命令行还使用问题的，但是右边的redis的库存确实变成了0。

那么左边的问题里面出现了2次秒杀失败，那么这就是程序的问题了。其实这是乐观锁的通病，大并发情况下，乐观锁容易造成超时，以至于秒杀失败。

如果ab工具的并发更多的话，那么库存也有可能会有很多剩余。


![使用redis命令行查询库存][17] ![使用redis事务锁得到的命令行结果][16] 

### 增大ab工具并发

在程序中把库存改大，同时增大ab的并发数和cpu数。

`ab -n 2000 -c 200 -k -p postfile -T 'application/x-www-form-urlencoded' http://127.0.0.1:8080/seckill/doseckill`

因为ab默认对出口有限制，防止资源暂用过多问题，因此会有此警告报错，可以添加-r参数，强制使用，移除socket限制。

![增加ab测试][18]

`ab -n 2000 -c 200 -k -r -p postfile -T 'application/x-www-form-urlencoded' http://127.0.0.1:8080/seckill/doseckill`

### 测试结果

已经秒光，查看redis还有库存。

![秒杀完毕，还有库存][19]

其次就是，在命令行还有超时问题。

![命令行因为乐观锁超时][20]


## 使用lua脚本解决遗留库存

已经秒光，可是还有库存。原因，就是乐观锁导致很多请求都失败。先点的没秒到，后点的可能秒到了。

那么如果把一个完整的请求作为一个整体，就能解决问题。这里使用lua脚本。

### LUA脚本

Lua 是一个小巧的脚本语言，Lua脚本可以很容易的被C/C++ 代码调用，也可以反过来调用C/C++的函数，Lua并没有提供强大的库，一个完整的Lua解释器不过200k，所以Lua不适合作为开发独立应用程序的语言，而是作为嵌入式脚本语言。
很多应用程序、游戏使用LUA作为自己的嵌入式脚本语言，以此来实现可配置性、可扩展性。
这其中包括魔兽争霸地图、魔兽世界、博德之门、愤怒的小鸟等众多游戏插件或外挂。

### LUA脚本与Redis

将复杂的或者多步的redis操作，写为一个脚本，一次提交给redis执行，减少反复连接redis的次数。提升性能。

LUA脚本是类似redis事务，有一定的原子性，不会被其他命令插队，可以完成一些redis事务性的操作。  
但是注意redis的lua脚本功能，只有在Redis 2.6以上的版本才可以使用。  
利用lua脚本淘汰用户，解决超卖问题。  
redis 2.6版本以后，通过lua脚本解决争抢问题，实际上是redis 利用其单线程的特性，用任务队列的方式解决多任务并发问题。

![LUA脚本问题][21]

修改代码如下；
主要是把整体的代码逻辑，修改为lua脚本。

```java 

public class SecKill_redisByScript {

  private static final org.slf4j.Logger logger = LoggerFactory.getLogger(SecKill_redisByScript.class);

  static String secKillScript = "local userid=KEYS[1];\r\n" +
      "local prodid=KEYS[2];\r\n" +
      "local qtkey='sk:'..prodid..\":qt\";\r\n" +
      "local usersKey='sk:'..prodid..\":usr\";\r\n" +
      "local userExists=redis.call(\"sismember\",usersKey,userid);\r\n" +
      "if tonumber(userExists)==1 then \r\n" +
      "   return 2;\r\n" +
      "end\r\n" +
      "local num= redis.call(\"get\" ,qtkey);\r\n" +
      "if tonumber(num)<=0 then \r\n" +
      "   return 0;\r\n" +
      "else \r\n" +
      "   redis.call(\"decr\",qtkey);\r\n" +
      "   redis.call(\"sadd\",usersKey,userid);\r\n" +
      "end\r\n" +
      "return 1";

  static String secKillScript2 = "local userExists=redis.call(\"sismember\",\"{sk}:0101:usr\",userid);\r\n" +
      " return 1";

  public static boolean doSecKill(String uid, String prodid) throws IOException {

    Jedis jedis = Jedis jedis = new Jedis("127.0.0.1",6379);

    String sha1 = jedis.scriptLoad(secKillScript);
    Object result = jedis.evalsha(sha1, 2, uid, prodid);

    String reString = String.valueOf(result);
    if ("0".equals(reString)) {
      System.err.println("已抢空！！");
    } else if ("1".equals(reString)) {
      System.out.println("抢购成功！！！！");
    } else if ("2".equals(reString)) {
      System.err.println("该用户已抢过！！");
    } else {
      System.err.println("抢购异常！！");
    }
    jedis.close();
    return true;
  }
}

```

## 使用连接池解决超时

每次请求都创建一个redis链接实例后，这样子容易造成redis大量实例创建，资源不够。如果能够反复使用redis的实例，那么就可以反复循环使用redis实例，节约资源。

在redis中，常用如下的链接池参数  
MaxTotal：控制一个pool可分配多少个jedis实例，通过pool.getResource()来获取；如果赋值为-1，则表示不限制；如果pool已经分配了MaxTotal个jedis实例，则此时pool的状态为exhausted。  
maxIdle：控制一个pool最多有多少个状态为idle(空闲)的jedis实例；    
MaxWaitMillis：表示当borrow一个jedis实例时，最大的等待毫秒数，如果超过等待时间，则直接抛JedisConnectionException；    
testOnBorrow：获得一个jedis实例的时候是否检查连接可用性（ping()）；如果为true，则得到的jedis实例均是可用的；    

### 使用代码封装连接池

使用的单例模式，主要是这行代码`jedisPool = new JedisPool(poolConfig, "127.0.0.1", 6379, 60000 );`

```java  

public class JedisPoolUtil {
	private static volatile JedisPool jedisPool = null;

	private JedisPoolUtil() {
	}

	public static JedisPool getJedisPoolInstance() {
		if (null == jedisPool) {
			synchronized (JedisPoolUtil.class) {
				if (null == jedisPool) {
					JedisPoolConfig poolConfig = new JedisPoolConfig();
					poolConfig.setMaxTotal(200);
					poolConfig.setMaxIdle(32);
					poolConfig.setMaxWaitMillis(100*1000);
					poolConfig.setBlockWhenExhausted(true);
					poolConfig.setTestOnBorrow(true);  // ping  PONG
				 
					jedisPool = new JedisPool(poolConfig, "127.0.0.1", 6379, 60000 );
				}
			}
		}
		return jedisPool;
	}

	public static void release(JedisPool jedisPool, Jedis jedis) {
		if (null != jedis) {
			jedisPool.returnResource(jedis);
		}
	}

}

```

### 连接池使用

在前面的lua代码的基础上，把redis的初始化，改为使用这个连接处的类即可

```java 
   JedisPool jedispool = JedisPoolUtil.getJedisPoolInstance();
   Jedis jedis = jedispool.getResource();
```

### 完整代码如下

```java  

public class SecKill_redisByScript {

  private static final org.slf4j.Logger logger = LoggerFactory.getLogger(SecKill_redisByScript.class);

  public static void main(String[] args) {
    JedisPool jedispool = JedisPoolUtil.getJedisPoolInstance();

    Jedis jedis = jedispool.getResource();
    System.out.println(jedis.ping());

    Set<HostAndPort> set = new HashSet<HostAndPort>();

    // doSecKill("201","sk:0101");
  }

  static String secKillScript = "local userid=KEYS[1];\r\n" +
      "local prodid=KEYS[2];\r\n" +
      "local qtkey='sk:'..prodid..\":qt\";\r\n" +
      "local usersKey='sk:'..prodid..\":usr\";\r\n" +
      "local userExists=redis.call(\"sismember\",usersKey,userid);\r\n" +
      "if tonumber(userExists)==1 then \r\n" +
      "   return 2;\r\n" +
      "end\r\n" +
      "local num= redis.call(\"get\" ,qtkey);\r\n" +
      "if tonumber(num)<=0 then \r\n" +
      "   return 0;\r\n" +
      "else \r\n" +
      "   redis.call(\"decr\",qtkey);\r\n" +
      "   redis.call(\"sadd\",usersKey,userid);\r\n" +
      "end\r\n" +
      "return 1";

  static String secKillScript2 = "local userExists=redis.call(\"sismember\",\"{sk}:0101:usr\",userid);\r\n" +
      " return 1";

  public static boolean doSecKill(String uid, String prodid) throws IOException {

    JedisPool jedispool = JedisPoolUtil.getJedisPoolInstance();
    Jedis jedis = jedispool.getResource();

    // String sha1= .secKillScript;
    String sha1 = jedis.scriptLoad(secKillScript);
    Object result = jedis.evalsha(sha1, 2, uid, prodid);

    String reString = String.valueOf(result);
    if ("0".equals(reString)) {
      System.err.println("已抢空！！");
    } else if ("1".equals(reString)) {
      System.out.println("抢购成功！！！！");
    } else if ("2".equals(reString)) {
      System.err.println("该用户已抢过！！");
    } else {
      System.err.println("抢购异常！！");
    }
    jedis.close();
    return true;
  }
}

```

## 总结

1. 最简单的版本

使用程序一步一步的思维写代码，请求一步，减去一次库存。

问题是使用工具ab模拟并发测试，会出现超卖情况。查看库存会出现负数。  

2. 使用redis的事务乐观锁

添加了 事务乐观锁，在并发少的情况下，一切正常，但是如果并发超级多，那么会出现两个问题，一种是redis实例连接超时，另一种是库存遗留问题。

3. 库存遗留

因为乐观锁会控制每次请求的时候版本对比，会造成多次一样的版本乐观锁处理，容易造成部分人请求失败。先点的没有秒杀到库存，后点的秒杀到库存了。

这里使用lua脚本，把多个操作控制为一个操作，利用redis的单线程特性，每次只执行一个lua脚本，这样子就完成了每次处理一个用户的请求。

4. 超时问题

因此每次创建一个redis实例，过分的依赖服务器资源了，所以说可以使用redis的连接池反复的使用资源，一定程度上节约资源。

解决就是创建一个单例模式的redis连接池，可以是懒汉式也可以是饿汉式，不过懒汉式有多线程问题，如果要使用懒汉式单例模式的话，需要对线程锁要有一定的认识。

[1]: /images/redis/transaction01.png
[2]: /images/redis/transaction02.png
[3]: /images/redis/transaction03.png
[4]: /images/redis/transaction04.png
[5]: /images/redis/transaction05.png
[6]: /images/redis/transaction06.png
[7]: /images/redis/transaction07.png
[8]: /images/redis/transaction08.png
[9]: /images/redis/transaction09.png
[10]: /images/redis/transaction10.png
[11]: /images/redis/transaction11.png
[12]: /images/redis/transaction12.png
[13]: /images/redis/transaction13.png
[14]: /images/redis/transaction14.png
[15]: /images/redis/transaction15.png
[16]: /images/redis/transaction16.png
[17]: /images/redis/transaction17.png
[18]: /images/redis/transaction18.png
[19]: /images/redis/transaction19.png
[20]: /images/redis/transaction20.png
[21]: /images/redis/transaction21.png


