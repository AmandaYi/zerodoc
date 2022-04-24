# 双向链表实现

双向链表属于单链表的一种扩展操作，是在每一个节点的身上，创建一个地址引用，引用到上一个节点的地址。

其他的地方均相同。

与单链表类似，同样的也有增删改查和创销。

这里直接用单链表的接口方法即可。

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

## 双链表实现接口方法

:::tip
与单链表一样，只是最后赋值的时候对每一个节点的prev需要增加一步处理。
:::

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

![双向链表的实现原理图片][1]

```java 
// 单一具有头节点的双向链表
public class LineTwoWayLinkedList implements ZLinkedList<DulNode> {
    DulNode headNode = new DulNode(0, "");

    @Override
    public void push(DulNode dulNode) {
        DulNode tmp = this.headNode;
        while (true) {
            if (tmp.next == null) {
                break;
            }
            tmp = tmp.next;
        }
        tmp.next = dulNode;
        dulNode.prev = tmp;
    }

    @Override
    public DulNode pop() {
        // 首先判断是不是只有一个头结点，如果只有一个头节点，那么直接报错
        DulNode tmp = this.headNode;
        if (tmp.next == null) {
            throw new RuntimeException("双向链表为空");
        }
        while (true) {
            // 考虑假如如果长度为1的节点，如果发现这个节点是最后一个，那么需要把当前循环的节点的next指向null
            if (tmp.next.next == null) {
                break;
            }
            tmp = tmp.next;
        }
        DulNode popResult = tmp.next; // 存储要弹出的节点
        // 去掉弹出的节点的prev前驱引用
        tmp.next.prev = null;
        tmp.next = null;
        return popResult;
    }

    @Override
    public void list() {
//        判断空
        DulNode tmp = this.headNode;
        if (tmp.next == null) {
//            throw new RuntimeException("双向链表空");
            System.out.println("双向链表为空 + []");
            return;
        }
        tmp = tmp.next; // 从第一个元素开始。排除掉头结点
//        循环输出即可
        while (true) {
            if (tmp == null) {
                break;
            }
            System.out.println(tmp);
            tmp = tmp.next;
        }

    }

    @Override
    public int length() {
//        判断是否为空
        DulNode tmp = this.headNode;
        int result = 0;
        if (tmp.next == null) {
            return result;
        }
//        依次自增
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
    public void update(DulNode dulNode) {
        DulNode tmp = this.headNode;
        if (tmp.next == null) {
            throw new RuntimeException("链表为空");
        }

        boolean hasDulNode = false;
        while (true) {
            if (tmp.next == null) {
                break;
            }

            if (tmp.next.id == dulNode.id) {
                hasDulNode = true;
                break;
            }
            tmp = tmp.next;
        }
        if (hasDulNode) {
            tmp.next.name = dulNode.name;
        } else {
            System.out.println("没有找到节点" + dulNode);
        }
    }

    @Override
    public DulNode delete(DulNode dulNode) {
//        判断当前的链表是否为空，如果为空，直接抛异常
        DulNode tmp = this.headNode;
        if (tmp.next == null) {
            throw new RuntimeException("链表为空");
        }
        boolean hasDulNode = false;
        while (true) {
            if (tmp.next == null) {
                break;
            }
            if (tmp.next.id == dulNode.id) {
                hasDulNode = true;
                break;
            }
            tmp = tmp.next;
        }
        if (hasDulNode) {
//            相当于找到了tmp.next，tmp.next就是要删除的节点
//            tmp.prev.next = tmp.next;
            tmp.next = tmp.next.next;
//            如果tmp刚好在最后一个节点，那么tmp.next即为空，对null是不可以进行调用的
            if (tmp.next != null) {
                tmp.next.prev = tmp;
            }
        } else {
            System.out.println("未找到");
        }
        return tmp;
    }

    @Override
    public void pushSort(DulNode dulNode) {
        DulNode tmp = this.headNode;
        while (true) {
            if (tmp.next == null) {
                break;
            }
            // 如果下一项大于了当前的值，证明是可以排到这里的
            if (tmp.next.id > dulNode.id) {
                break;
            }
            if (tmp.next.id == dulNode.id) {
                // 如果相等就啥都不做
                break;
            }
            tmp = tmp.next;
        }
        dulNode.next = tmp.next;
        dulNode.prev = tmp;
        // 然后修改dulNode的前节点的next域为传入的节点
        tmp.next = dulNode;
        // 然后修改dulNode的后节点的prev域为传入的节点
        if (tmp.next != null) {
            tmp.next.prev = dulNode;
        }
    }
}

```

 
[1]: /images/structure/linear02_04.png



