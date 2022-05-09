# 链表实现队列

使用单向链表实现队列，主要的思路是创建一个不带链表头节点的单向链表。

然后定义两个队列节点对象，作用分别是指向队首和队尾，默认情况下，队列内部是没有值，那么队列队首对象和队列队尾对象的值均为null。

然后声明一个类节点，用于连接节点关系如下代码的类 `QueueNode`。

变量声明：
  - 需要声明两个对象，分别作为队列队首和队列队尾的地址引用。
  - 声明队列的容量。

  - 声明队列的辅助变量，用来记录队列在任意时刻的长度。

  - 需要实现2个基础方法，2个辅助方法。

基础方法:

1. 入列

   逻辑是：
        1. 如果当前队列为空，需要把新的传入的对象节点的地址，赋值给队首指针和队首指针即可。
        2. 如果当前队列不为空，需要把新的传入的对象节点的地址，赋值给队尾指针所指向的节点的next属性，同时把新节点的地址赋值给队尾即可（相当于让队尾指向最后添加的节点）。
        3. 为了记录队列的长度，辅助变量也要自增
        
   任何插入操作，都要先判断是否已满。
   
2. 出列

   逻辑是：
        1. 把队列队首所指向的对象返回出去。
        2. 把返回的对象的next属性所指的对象地址，赋值给队列队首保存。
        3. 队列辅助变量减一
        
   任何删除操作，都要先判断是否为空。
   
- 辅助方法

1. 队列的判空
    逻辑是：根据辅助变量的长度，判断链表中的队列是不是空队列，如果辅助变量是-1，代表没有长度，因此为空队列，
    
2. 队列的容量是否已满
    逻辑是：根据辅助变量的长度，判断链表中的队列是不是已达到初始化时传入的容量，通过辅助变量和容量-1对比，如果相等代表已经是达到初始化时的最大容量了，

```java 
// 队列的单个节点类
class QueueNode {
    // 节点内容，这里以id为例，可以有很多字段
    int id;
    // 下一个节点的指针
    QueueNode next;

    public QueueNode(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "QueueNode{" +
                "id=" + id +
                '}';
    }
}

//使用链表模拟队列。这里使用单向链表的方法，同时不带单链表头。
public class QueueLinkedImpl {
    // 使用单向链表模拟的的队列可以有容量，也可以没有容量，一般情况加上容量的方案好一些。
    // 队列队首指针
    QueueNode firstPoint;
    // 队列队尾指针
    QueueNode realPoint;
    // 链表的最大容量
    int maxSize;
    // 辅助变量，在链表中，队列目前的索引长度，一般用来求队列长度，然后用来判断队列是否已达到最大初始化的规定容量。
    int top = -1;

    /**
     * @name 判断当前队列是否为空
     * @description 根据辅助变量的长度，判断链表中的队列是不是空队列，
     */
    public boolean isEmpty() {
        return this.top == -1;
    }

    /**
     * @name 判断当前队列是否已满
     * @description 根据辅助变量的长度，判断链表中的队列是不是已达到初始化时传入的容量，
     */
    public boolean isFull() {
        return this.top == this.maxSize - 1;
    }

    /**
     * @name 构造器
     * @description 初始化一个链表，同时传入队列的最大容量，（因为不具备头节点，所以）
     */
    public QueueLinkedImpl(int maxSize) {
        this.maxSize = maxSize;
    }

    /**
     * @name 入列
     * @description 1. 如果当前队列为空，需要把新的传入的对象节点的地址，赋值给队首指针和队首指针即可。
     * 2. 如果当前队列不为空，需要把新的传入的对象节点的地址，赋值给队尾指针所指向的节点的next属性，同时把新节点的地址赋值给队尾即可（相当于让队尾指向最后添加的节点）。
     * 3. 为了记录队列的长度，辅助变量也要自增
     */
    public void set(QueueNode queueNode) {
        if (this.isFull()) {
            System.out.println("队列已满");
            // 一定要写return
            return;
        }
        if (this.isEmpty()) {
            this.firstPoint = queueNode;
            this.realPoint = queueNode;
        } else {
            this.realPoint.next = queueNode;
            this.realPoint = queueNode;
        }
        // 辅助变量自增
        this.top++;
    }

    /**
     * @name 出列
     * @description 主要思路是，1. 把队列的队首指针所指向的对象，弹出。2. 改变队首指针的地址值为弹出值的下一个对象的地址。
     * 逻辑：
     * 1. 把队列队首所指向的对象返回出去。
     * 2. 把返回的对象的next属性所指的对象地址，赋值给队列队首保存。
     * 3. 队列辅助变量减一
     * @return {QueueNode}
     */
    public QueueNode get() {
        if (this.isEmpty()) {
            throw new RuntimeException("空队列");
        }
        QueueNode result = this.firstPoint;
        this.firstPoint = result.next;
        this.top--;
        return result;
    }

    /**
     * @name 获取队列队首的值
     * @description 只需要把队首指针所指的对象节点返回即可
     * @return {QueueNode}
     */
    public QueueNode findFirst() {
        if (this.isEmpty()) {
            throw new RuntimeException("空队列");
        }
        return this.firstPoint;
    }
}
```