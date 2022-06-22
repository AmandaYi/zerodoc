# 分布式锁实践

没有最完美的分布式锁方案。只有在某一方面能够接受的方案。

不管是redis的主从集群，还是cluster集群，又或者是redlock，还是zk等等都没有最完美的。


分布式锁有两类，一类是以mysql，redis的类cas自旋循环尝试加锁，一类是zookeeper，etcd的基于event事件的加锁。



