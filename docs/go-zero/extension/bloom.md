---
sidebar_position: 0
---

# 布隆过滤器

go-zero微服务框架中提供了许多开箱即用的工具，好的工具不仅能提升服务的性能而且还能提升代码的鲁棒性避免出错，实现代码风格的统一方便他人阅读等等，本系列文章将分别介绍go-zero框架中工具的使用及其实现原理

## 布隆过滤器 [bloom](https://github.com/zeromicro/go-zero/blob/master/core/bloom/bloom.go)
在做服务器开发的时候，相信大家有听过布隆过滤器，可以判断某元素在不在集合里面,因为存在一定的误判和删除复杂问题,一般的使用场景是:防止缓存击穿(防止恶意攻击)、 垃圾邮箱过滤、cache digests 、模型检测器等、判断是否存在某行数据,用以减少对磁盘访问，提高服务的访问性能。     go-zero 提供的简单的缓存封装 bloom.bloom，简单使用方式如下

```go
// 初始化 redisBitSet
store := redis.NewRedis("redis 地址", redis.NodeType)
// 声明一个bitSet, key="test_key"名且bits是1024位
bitSet := newRedisBitSet(store, "test_key", 1024)
// 判断第0位bit存不存在
isSetBefore, err := bitSet.check([]uint{0})

// 对第512位设置为1
err = bitSet.set([]uint{512})
// 3600秒后过期 
err = bitSet.expire(3600)

// 删除该bitSet
err = bitSet.del()
```


bloom 简单介绍了最基本的redis bitset 的使用。下面是真正的bloom实现。
对元素hash 定位

```go
// 对元素进行hash 14次(const maps=14),每次都在元素后追加byte(0-13),然后进行hash.
// 将locations[0-13] 进行取模,最终返回locations.
func (f *BloomFilter) getLocations(data []byte) []uint {
	locations := make([]uint, maps)
	for i := uint(0); i < maps; i++ {
		hashValue := hash.Hash(append(data, byte(i)))
		locations[i] = uint(hashValue % uint64(f.bits))
	}

	return locations
}
```


向bloom里面add 元素
```go
// 我们可以发现 add方法使用了getLocations和bitSet的set方法。
// 我们将元素进行hash成长度14的uint切片,然后进行set操作存到redis的bitSet里面。
func (f *BloomFilter) Add(data []byte) error {
	locations := f.getLocations(data)
	err := f.bitSet.set(locations)
	if err != nil {
		return err
	}
	return nil
}
```


检查bloom里面是否有某元素
```go
// 我们可以发现 Exists方法使用了getLocations和bitSet的check方法
// 我们将元素进行hash成长度14的uint切片,然后进行bitSet的check验证,存在返回true,不存在或者check失败返回false
func (f *BloomFilter) Exists(data []byte) (bool, error) {
	locations := f.getLocations(data)
	isSet, err := f.bitSet.check(locations)
	if err != nil {
		return false, err
	}
	if !isSet {
		return false, nil
	}

	return true, nil
}
```


```go
package main

import (
	"fmt"

	"github.com/zeromicro/go-zero/core/bloom"
	"github.com/zeromicro/go-zero/core/stores/redis"
)

func main() {
	store := redis.New("127.0.0.1:6379", func(r *redis.Redis) {
		r.Pass = "123456"
		r.Type = redis.NodeType // 单点类型
		//r.Type = redis.ClusterType // 集群类型
		r.Addr = "127.0.0.1:6379"
	})
	filter := bloom.New(store, "testbloom", 1024)
	filter.Add([]byte("123456"))
	filter.Add([]byte("zzy"))

	//查找是否存在当前值，如果存在才能执行业务
	if ok, err := filter.Exists([]byte("123456")); ok && err != nil {
		fmt.Println("正常执行业务 do something")
	} else {
		fmt.Println("不存在的数据，请联系管理员")
	}
}

```


## 布隆过滤器的哈希
谁都可以实现布隆过滤器，每个人的算法均不相同，但是，最后的结果基本一样，均为ADD是稳定的，但是查询是不稳定的，这时候，可以再查一遍数据库即可。

布隆过滤器是一个常用的数据结构，通过牺牲准确率获得更高的空间利用率，在实现上会调整bit数组大小和hash计算次数提高准确率。
布隆过滤器应用场景有限，一般适用于大量数据重复过滤的情况，在使用时应该根据数据特点与hashmap,bitmap等数据结构做对比。

