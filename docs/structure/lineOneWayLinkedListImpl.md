# 单链表实现

单链表属于链表最基础的一个版本。

一般有结点头，结点组成。

主要的搞清楚链表的增删改查和创销。

先定义要实现的链表方法。

```java 
// 链表的方法
public interface ZLinkedList<T> {

    /**
     * @name 在链表尾部添加一个节点
     */
    public void push(T t);

    /**
     * @name 在链表尾部弹出一个节点
     */
    public T pop();

    /**
     * @name 查出全部节点
     */
    public void list();

    /**
     * @name 获取节点的长度
     */
    public int length();

    /**
     * @name 根据传入的值，更新某个节点，具体逻辑实现类自我实现
     */
    public void update(T t);

    /**
     * @name 根据传入的值，删除某个节点的值，具体逻辑实现类自我实现
     */
    public T delete(T t);

    /**
     * @name 根据传入的值，按照一定的顺序添加节点，具体逻辑顺序实现类自我实现
     */
    public void pushSort(T t);
}
```

## 单链表实现接口方法

思考每一个方法的核心部分

首先都需要一个循环，

其次，在push，update，delete，pushSort，时均需要在循环中先判断循环节点的next找到下一个节点，进行判断null或者其他id等等，
因为这几个操作涉及到修改节点，所以需要找到要处理节点的上一个节点，方才能够顺利处理，如果你找到要处理的节点，比如删除操作，总不能找到的这个节点自爆吧。·

再者，除了上面的修改方法，只有一个修改方法就是pop，pop时弹出最后元素，因为要弹出元素，所以需要先找到倒数第二个元素，也就是判断tmp.next.next
然后用倒数第二个元素的next设置为null即可。

list
在list时候，先排除头节点，然后只需要判断当前是不是null即可。
length
在算长度的时候，需要判断下一个是不是null，然后再计数

## 整体实现

![单链表的实现原理图片][1]

```java 
// 单一具有头节点的单向链表
public class LineOneWayLinkedList implements ZLinkedList<Node> {
    // 务必先声明头节点，头节点不算长度，但是要有
    private Node headNode = new Node(0, "");
    
    @Override
    public void push(Node node) {
        // 要想增加一个节点，就要找到节点next为null的项目，然后进行赋值即可
        Node tmp = this.headNode;
        while (true) {
            if (tmp.next == null) {
                break;
            }
            tmp = tmp.next;
        }
        tmp.next = node; // 把新节点追加到next为null的节点后面
    }

    @Override
    public Node pop() {
        // 弹出,相当于删除,那么就应该先判断是否是空链表,如果是空是无法弹出节点
        // 如果不为空,那么就需要找到next节点为null的节点,然后删除该项,但是在单项列表中,找到最后一个节点是无法找到前一个节点的.所以在查找节点的时候需要使用节点的下一个节点的下一个节点的next进行判断
        Node tmp = this.headNode;
        // 判空
        if (tmp.next == null) {
            throw new RuntimeException("单向链表为空,无法弹出任何节点");
        }
        while (true) {
            // 如果长度为1,在第一次循环的时候,因为tmp等于头节点,所以tmp.next代表第一个节点.所以第一个节点的next也会是null,所有正确
            if (tmp.next.next == null) {
                break;
            }
            tmp = tmp.next;
        }
        // 用作返回值
        Node popNode;
        popNode = tmp.next;
        // 如果长度是1,那么就把头节点的next设置为null即可
        tmp.next = null;
        return popNode;
    }

    @Override
    public void list() {
        // 首先要判断长度,如果长度为0,那么就证明是空链表
        // 否则循环着依次输出即可
        Node tmp = this.headNode;
        if (tmp.next == null) {
            throw new RuntimeException("这是一个长度为空的单向链表!");
        }
        // 如果走到这里,代表长度至少1
        tmp = tmp.next;
        while (true) {
            if (tmp == null) {
                break;
            }
            // 输出
            System.out.println(tmp);
            tmp = tmp.next;
        }
    }

    @Override
    public int length() {
        // 判断长度的话, 需要判断是不是只有头节点,如果只有头节点,那么长度就是0
        // 如果长度部位0,那么就循环自增得到长度
        Node tmp = this.headNode;
        int result = 0;
        if (tmp.next == null) {
            return result;
        }
        while (true) {
            if (tmp.next == null) {
                break;
            }
            result++;
            tmp = tmp.next;
        }
        return result;
    }

    @Override
    public void update(Node node) {
        // 更新节点的时候 也需要先判断是不是空链表
        // 更新的时候这里按照节点的id进行更新了
        Node tmp = this.headNode;
        if (tmp.next == null) {
            throw new RuntimeException("单向链表为空");
        }
        boolean hasNode = false;
        while (true) {
            // 先寻找判断id
            if (tmp.next == null) {
                break;
            }
            if (tmp.next.id == node.id) {
                hasNode = true;
                break;
            }
            tmp = tmp.next;
        }
        // 进行更新
        if (hasNode) {
            tmp.next.name = node.name;
        } else {
            System.out.println("未找到节点" + node);
        }
    }

    @Override
    public Node delete(Node node) {
        // 删除节点和pop节点差不多，只是判断中断条件改变了
        Node tmp = this.headNode;
        if (tmp.next == null) {
            throw new RuntimeException("单向链表为空");
        }
        while (true) {
            if (tmp.next.next == null) {
                break;
            }
            if (tmp.next.id == node.id) {
                break;
            }
            tmp = tmp.next;
        }
        Node deleteNode = tmp.next; // 存一份返回出去
        tmp.next = tmp.next.next; //  这样子要删除的节点就游离了，等会就自动GC销毁了
        return deleteNode;
    }

    @Override
    public void pushSort(Node node) {
        // 按照一定的id顺序插入节点
        Node tmp = this.headNode;
        while (true) {
            if (tmp.next == null) {
                break;
            }
            // 如果当前循环的节点的下一个节点的id大于或等于当前节点了，那么在此处插入节点
            if (tmp.next.id >= node.id) {
                break;
            }
            tmp = tmp.next;
        }
        node.next = tmp.next;
        tmp.next = node;
    }
}
```

[1]: /images/structure/linear02_03.png
