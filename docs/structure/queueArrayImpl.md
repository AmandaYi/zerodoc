# 数组实现队列

使用数组实现队列，主要的思路是创建一个int类型的数组，可以用泛型数组，但是没必要，这里只是为了模拟数据结构。

然后定义两个游标指针（也理解为游标索引），作用分别是指向队首和队尾，默认情况下，队列内部是没有值，因此可以把队首和队尾的游标指针的初始值设置为-1。

还需要设置队列的容量，默认值是0。

需要实现2个基础方法，2个辅助方法。

- 基础方法

1. 入列
   逻辑是：通过移动队尾游标指针+1的方式，然后设置移动后队尾游标所指的项进行赋值，也就完成了入列的动作。
   任何插入操作，都要先判断是否已满。
2. 出列
   逻辑是：通过移动队首游标指针+1的方法，然后把队首游标指针所致的项取出，也就完成了出列的动作。
   任何删除操作，都要先判断是否为空。
   
- 辅助方法

1. 队列的判空
    逻辑是：通过判断两个队列的队首游标指针和队尾游标指针的值索引，如果相等才为空队列。
    
2. 队列的容量是否已满
    逻辑是：通过判断队尾指针的索引值和容量-1比较，如果相等，才证明队列满了。
    这里有个小插曲，如果初始化一个容量为0的队列，最后判端满队列的结果是正确的，但是从显示逻辑上确实错的，因此不要初始化容量为0的队列，没有任何意义。
    

```java 
public class QueueArrayImpl {
    // 用来存储队列的数组，为了简便，使用int数组，也可以使用泛型数组。
    int[] queue;
    // 数组的最大容量
    int maxStack;
    // 队列队首指针指向，默认是-1.不指向任何项
    int frontPoint;
    // 队列队尾指针指向，默认是-1，不指向任何项
    int realPoint;

    /**
     * @param maxStack
     * @name 构造器，用于类的初始化
     * @description 主要是初始化存放队列的数组
     * @description 数组的最大容量
     * @description 队列队首指针指向初始值-1，队列队尾指针指向初始值-1
     */
    public QueueArrayImpl(int maxStack) {
        this.queue = new int[maxStack];
        this.maxStack = maxStack;
        this.frontPoint = -1;
        this.realPoint = -1;
    }

    /**
     * @name 判断队列已满
     * @descrition 原理，队列队尾指针指向如果指向了最后一个值，那么就认为这个队列已经是满载状态了。
     * @return {boolean}
     */
    public boolean isFull() {
        return this.realPoint == this.maxStack - 1;
    }

    /**
     * @name 判断队列空
     * @descrition 原理，队列队首指针是递增的，当队首指针递增到与队列队尾指针相同的位置，代表了队列是空的。
     * @return {boolean}
     */
    public boolean isEmpty() {
        return this.frontPoint == this.realPoint;
    }

    /**
     * @name 入列
     * @description 对队列而言，入列就相当于从队尾推进一个值，同时把队列队尾指针指向新添加的这个值。
     */
    public void set(int t) {
        if (this.isFull()) {
            System.out.println("队列满了");
            return;
        }
        this.realPoint++;
        this.queue[this.realPoint] = t;
    }

    /**
     * @name 出列
     * @description 对队列而言，出列就相当于从队首弹出一个值，同时把队列队首指针指向弹出值得后一个指针。
     */
    public int get() {
        if (this.isEmpty()) {
            throw new RuntimeException("队列空");
        }
        this.frontPoint++;
        int result = this.queue[this.frontPoint];
        return result;
    }

    /**
     * @name 查找第一个值
     * @description 根据队列队首指针指向的值，查找第一个值。
     */
    public int findFirst() {
        if (this.isEmpty()) {
            throw new RuntimeException("队列空");
        }
        return this.queue[this.frontPoint];
    }
}
```




