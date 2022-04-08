# go的包锁机制

一个资源,如果需要多个接口去访问,那么需要进行加锁,
但是这个锁在不同的场景下面是需要加不同的锁的, 如果胡乱加锁,那么就会造成程序运行缓慢
线程同步加锁必要的标准库包是```sync```

一般情况有两种锁,一种是互斥锁, 一种是读写锁,其中加了互斥锁的程序性能比读写锁的性能要低200倍

互斥锁`var mu sync.Mutex`读和写频率一样的场景
读写锁`var mu sync.RWMutex`读多写少的场景

## 互斥锁
一个资源,如果需要多个接口去访问,那么需要进行加锁,但是这个锁适合的场景是,读和写频率一样的场景,因为会影响性能
举例:
```go
package main

import (
	"fmt"
	"sync"
)

var hLock sync.Mutex

func main() {
	ch := make(chan int)
	for i := 0; i < 10; i++ {
		go test(ch, i)
	}
	for i := 0; i < 10; i++ {
		<-ch
	}
}
func test(ch chan int, i int) {
	hLock.Lock()
	f[0] = byte(i)
	fmt.Println(f)
	ch <- i
	hLock.Unlock()
}

````

## 读写锁

一个资源,如果需要多个接口去访问,那么需要进行加锁,但是这个锁适合的场景是,读多写少的场景,
举例好比教室里面的黑板, 全班的同学都可以读黑板, 但是能够改变黑板上面的文字只有老师一个人,
那么如果有两个老师同时更改黑板内容的时候,就会造成同学们无法确定该读谁写的文字
因此其中一个老师在黑板上书写文字内容的时候, 需要把这一过程上锁,
一旦上了读写锁,那么第二个老师只能等待第一个老师书写完毕才可以进行书写

举例:
```go
package main

import (
	"fmt"
	"sync"
)

var rwLock sync.RWMutex

func main() {
	// hLock := sync.Locker
	ch := make(chan int)
	for i := 0; i < 10; i++ {
		go test(ch, i)
	}
	for i := 0; i < 10; i++ {
		<-ch
	}
}
func test(ch chan int, i int) {
	rwLock.RLock()
	f[0] = byte(i)
	fmt.Println(f)
	fmt.Println(f)
	fmt.Println(f)
	fmt.Println(f)
	fmt.Println(f)
	ch <- i
	rwLock.RUnlock()
}
```