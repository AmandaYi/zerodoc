# redis6笔记

## 概念

redis默认16个数据库，类似数组下标从0开始，初始默认使用0号库
使用命令 select x 来切换数据库。如: select 8 
统一密码管理，所有库同样密码。

常用命令：

- dbsize查看当前数据库的key的数量
- flushdb清空当前库
- flushall通杀全部库

Redis是单线程+多路IO复用技术

多路复用是指使用一个线程来检查多个文件描述符（Socket）的就绪状态，比如调用select和poll函数，传入多个文件描述符，如果有一个文件描述符就绪，则返回，否则阻塞直到超时。得到就绪状态后进行真正的操作可以在同一个线程里执行，也可以启动线程执行（比如使用线程池）

串行   vs   多线程+锁（memcached） vs   单线程+多路IO复用(Redis)

（与Memcache三点不同: 支持多数据类型，支持持久化，单线程+多路IO复用）  


## 安装

在centos环境上直接安装，忽略window吧

### 安装C 语言的编译环境

```base 
安装C 语言的编译环境
yum install centos-release-scl scl-utils-build
yum install -y devtoolset-8-toolchain
scl enable devtoolset-8 bash
```
### 安装gcc

```base 
yum install gcc
```

测试 gcc版本 
gcc --version

## 下载编译redis

1. 下载，打开redis下载页
`https://redis.io/download/#redis-stack-downloads`，找到对应的url，使用wget下载即可。

这里下载6版本
下载redis-6.2.1.tar.gz放/opt目录

2. 解压命令：tar -zxvf redis-6.2.1.tar.gz
3. 解压完成后进入目录：cd redis-6.2.1
4. 在redis-6.2.1目录下再次执行make命令（只是编译好）
5. 如果没有准备好C语言编译环境，make 会报错—Jemalloc/jemalloc.h：没有那个文件, 解决方式是运行make distclean，在redis-6.2.1目录下再次执行make命令（只是编译好）。
6. 安装，直接跳过make test，继续执行: make install

## 前台测试启动

前台启动，命令行窗口不能关闭，否则服务器停止

直接执行redis-server

## 后台守护启动

1. 拷贝一份redis.conf到其他目录
cp  /opt/redis-6.2.2/redis.conf  /myredis, 
2. 后台启动设置
修改redis.conf(128行)文件将里面的daemonize no 改成 yes，让服务在后台启动
3. Redis启动
redis-server /myredis/redis.conf

## 测试

打开shell输入redis-cli，即可连接上。

输入ping即可返回pong即为成功。

## 关闭

```base
redis-cli shutdown
```
