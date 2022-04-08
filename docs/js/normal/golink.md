# go模拟链表
 
单向链表: 每一个结构体都有一个字段,保存下一个结构体的地址,这样子依次排下去的一种结构叫做单向链表.

双向链表: 每一个结构体都有两个字段,分别保存的是上一个结构体的地址和下一个结构体的地址,这样子一次排下去的一种结构叫做双向链表.

循环单向链表: 在单向链表的基础上,最后一个结构体有一个字段用来保存链表头结构体的地址.

循环双向链表: 在双向链表的基础上,最后一个结构体有一个字段用来保存链表头结构体的地址,同时, 链表头也有一个字段用来保存链表尾结构体的地址.


## 单向链表
 
声明一个结构体

```go
type Student struct {
    Name string
    Next *Student
}
func main() {
    var header Student
    header = Student{
        Name: "小明",
    }
    stu1 := Student{
        Name: "小李",
    }
    // 让链表头的Next字段保存下一个结构体的地址
    header.Next = &stu1
    // 定义一个变量,用来保存链表头的指针,
    var pHeader *Student = &header
    for pHeader != nil {
        fmt.Println(pHeader)
        pHeader = pHeader.Next
    }
}

```

### 尾部插入法

### 头部插入法

```go
package main
import "fmt"
// 链表单元
type LinkNode struct {
    data interface{}
    Next *LinkNode
}
// 链表
type Link struct {
    Header *LinkNode
    Footer *LinkNode
}
// 链表接口
type LinkInterface interface {
    // 从头部插入链表单元
    InsertHeader()
    // 从尾部插入链表单元
    InsertFooter()
}
func (this *Link) InsertHeader(data interface{}) {
    node := &LinkNode{
        data: data,
    }
    if this.Header == nil && this.Footer == nil {
        this.Header = node
        this.Footer = node
        return
    }
    // // 从头部插入的话,
    // // 头部的指向需要变为新的node
    node.Next = this.Header
    this.Header = node
}
func (this *Link) InsertFooter(data interface{}) {
    node := &LinkNode{
        data: data,
    }
    if this.Header == nil && this.Footer == nil {
        this.Header = node
        this.Footer = node
        return
    }
    // 从尾部插入的话,
    // 尾部的指向要改变为新的node
    this.Footer.Next = node
    this.Footer = node
}
func (this *Link) Trans() {
    pNode := this.Header
    for pNode != nil {
        fmt.Println(pNode)
        pNode = pNode.Next
    }
}
```