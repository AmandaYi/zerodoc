# 链表实现队列

```java 
class QueueNode {
    int id;
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
//使用单链表实现， 可以带头也可以不带头，推荐带头，这里带头
public class QueueLinkedImpl {
    //    使用链表实现队列，可以是无限长度也可以是有限长度，先来个无限长度的
    QueueNode firstPoint;
    QueueNode realPoint;
    int maxSize;
    // 游标
    int top = -1;


    //    判断空
    public boolean isEmpty() {
        return this.top == -1;
    }

    //    判断是否满
    public boolean isFull() {
        return this.top == this.maxSize - 1;
    }

    public QueueLinkedImpl(int maxSize) {
        this.maxSize = maxSize;
    }

    public void set(QueueNode queueNode) {
        if (this.isFull()) {
            System.out.println("队列已满");
            return; // 一定要写return
        }

//        在空队列的情况下
//        需要把队首游标指向新节点，
//        需要把队尾游标指向新节点
//        游标总数加1
        if (this.isEmpty()) {
            this.firstPoint = queueNode;
            this.realPoint = queueNode;
            this.top++;
        } else {
//        在不为空队列的情况下

//        增加的时候，需要创建一个新的节点出来，然后把队尾节点的next属性指向新创建的节点。
//        同时移动队尾节点的地址指向到新节点即可
//        游标同时加1
            this.realPoint.next = queueNode;
            this.realPoint = queueNode;
            this.top++;
        }
    }

    public QueueNode get() {
        if(this.isEmpty()) {
            throw new RuntimeException("空队列");
        }
//        出队列
//        找到第一个元素，保存起来等待返回
//        然后把队首游标的地址修改为第一个元素的next属性
//        游标总数减一


        QueueNode result = this.firstPoint;
        this.firstPoint =  result.next;
        this.top--;
        return result;
    }

    public QueueNode findFirst() {
        if(this.isEmpty()) {
            throw new RuntimeException("空队列");
        }
        return this.firstPoint;
    }

    public static void main(String[] args) {
        QueueLinkedImpl queueLinked = new QueueLinkedImpl(2);
        queueLinked.set(new QueueNode(1));
        queueLinked.set(new QueueNode(2));

        queueLinked.set(new QueueNode(3));
        System.out.println(queueLinked.get());
        System.out.println(queueLinked.get());
        System.out.println(queueLinked.get());
    }
}
```