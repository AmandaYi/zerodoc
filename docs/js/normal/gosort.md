# go实现一遍js常用的排序

```go
package main
import (
    "fmt"
)
// 冒泡排序
func bSort(a []int) {
    // 第一个循环,对每一个元素制定一个冒泡
    for i := 0; i < len(a); i++ {
        // 第二个循环是对每一个元素进行冒泡具体操作,每一趟排序排好一个,那么可以len-i
        for j := 1; j < len(a)-i; j++ {
            // 从大到小, 当上面的数比下面的数要大,那么交换两者,
            if a[j] > a[j-1] {
                a[j-1], a[j] = a[j], a[j-1]
            }
            // 从小到大,当上面的数比下面的数要小,那么交换两者
            // if a[j] < a[j-1] {
            //  a[j-1],a[j] = a[j],a[j-1]
            // }
        }
    }
}
// 选择排序
func sSort(a []int) {
    // 第一个循环,对每一个元素制定一个冒泡
    for i := 0; i < len(a); i++ {
        // 定义一个最小值的下标
        // 拿到一个i,认为是最小的,然后给后面的剩余的数进行比较
        var min int = i
        for j := i + 1; j < len(a); j++ {
            // 如果发现,a[min]这一项是小的,那么交换位置,把小的放到后面,因为j是随着i越来越大的,
            if a[min] < a[j] {
                min = j
            }
        }
        // 每次都要交换一下数
        a[min], a[i] = a[i], a[min]
    }
}
// 选择排序的第二种方式
func s2Sort(a []int) {
    // 第一个循环,对每一个元素制定一个冒泡
    for i := 0; i < len(a); i++ {
        for j := i + 1; j < len(a); j++ {
            // 如果发现,a[min]这一项是小的,那么交换位置,把小的放到后面,因为j是随着i越来越大的,
            if a[i] > a[j] {
                // 每次都要交换一下数
                a[j], a[i] = a[i], a[j]
            }
        }
    }
}
// 插入排序
// 原理, 从小到大为例子, 把一个数组分成2部分,,每次用第二部分的数去比较第一部分数,如果大,那么不交换,否则的话交换位置
func iSort(a []int) {
    for i := 1; i < len(a); i++ {
        for j := i; j > 0; j-- {
            if a[j] > a[j-1] {
                break
            } else {
                a[j], a[j-1] = a[j-1], a[j]
            }
        }
    }
}
// 快速排序
// 原理
// 递归+分治
// 每次都可以固定一个元素的最终的位置,
// 1. 把一个元素的最终位置给确定了,
// 2. 这样子该最终位置的元素的两边各自有一个数组,
// 3. 分别对两边的数组进行重复上面的操作,
// 4. 当只有一个元素的数组的时候,那么就算该位置结束了
func qSort(a []int, left, right int) {
    if left >= right {
        return
    }
    val := a[left]
    k := left
    // 确定val所在的位置
    for i := left + 1; i <= right; i++ {
        if a[i] < val {
            a[k] = a[i]
            a[i] = a[k+1]
            k++
        }
    }
    a[k] = val
    qSort(a, left, k-1)
    qSort(a, k+1, right)
}
func main() {
    a := [...]int{1, 110, 221, 2, 2, 3, 1}
    qSort(a[:], 0, len(a)-1)
    fmt.Println(a)
}
```
