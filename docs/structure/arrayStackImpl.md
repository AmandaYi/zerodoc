# 数组实现栈

栈用数组来实现。使用数组方式实现的栈叫静态栈。 

## 如下JAVA代码

```java

public class ArrayStack {
    // 最大容量
    int maxStack = 0;
    // 索引指针
    int top = -1;
    // 定义一个栈
    int[] stack;

    // 构造器
    public ArrayStack(int maxStack) {
        this.maxStack = maxStack;
        this.stack = new int[maxStack];
    }    

    // 压栈
    public void push(int v) {
        // 压栈， 增加数据，索引+1，然后在索引出赋上压入的值
        this.top += 1; 
        this.stack[this.top] = v;       
    }
    // 弹栈，返回值弹出了什么值，返回值可以用泛型，但是这里为了理解用int即可
    public int pop() {
        // 先把弹出的值保存下来，方便返回，然后索引减一
        int popResult = this.stack[this.top];
        this.top -= 1;
        return popResult;
    }
    public int length() {
        return this.top + 1;
    }
    // 查看
    public void list() {
        int len = this.length();
        for(int i = 0; i < len; i++ ) {
            System.out.printf("stack[%d] = %d", i , this.stack[i]);
        } 
    }
}
```

## 数组实现栈的问题

1. 问题1，PUSH方法的范围限制问题，举例，如果栈里面的数据已经达到最大栈容量了，那么再往里面压栈，就会运行时错误了，称为超出栈容量。
```java 
    public static void main(String[] args) {
        ArrayStack arrayStack = new ArrayStack(3);
        arrayStack.push(1);
        arrayStack.push(2);
        arrayStack.push(3);
        arrayStack.push(4);
    }
```
结果，总是数组索引越界。
```bash 
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 3
	at ArrayStack.push(ArrayStack.java:20)
	at ArrayStack.main(ArrayStack.java:45)
```
2. 问题2，POP方法的范围限制问题，举例，如果栈里面无数据，那么就会造成访问一个索引为负的值，即用不存在的空间，也会运行时错误。
```java 
    public static void main(String[] args) {
        ArrayStack arrayStack = new ArrayStack(3);
        arrayStack.push(1);
        arrayStack.pop();
        arrayStack.pop();
    }
```
结果，总是数组索引越界。
```bash 
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: -1
	at ArrayStack.pop(ArrayStack.java:25)
	at ArrayStack.main(ArrayStack.java:44)
```

## 方案一限制压栈弹栈

1. 在PUSH的时候，判断是否达到最大容量。即增加isFull方法判断是否栈容量已满。
2. 在POP的时候，判断是否为空栈。即增加isEmpty方法判断是否栈为空。

```java
public class ArrayStack {
    // 最大容量
    int maxStack = 0;
    // 索引指针
    int top = -1;
    // 定义一个栈
    int[] stack;

    // 构造器
    public ArrayStack(int maxStack) {
        this.maxStack = maxStack;
        this.stack = new int[maxStack];
    }    
    
    // 判断栈为空
    public boolean isEmpty() {
        return this.top == -1;
    }
    // 判断栈已满
    
    public boolean isFull() {
        // 此处不要好奇，如果最大容量this.maxStack为0怎么办，如果为0，那么0 - 1也是等于-1，刚好等于索引值，也证明是栈容量已满。
        return this.top == this.maxStack - 1;
    }    

    // 压栈
    public void push(int v) {
        // 错误优先，提前判断
        if(this.isFull()) {
            throw new RuntimeException("已达到最大容量，无法压栈");
        }
        // 压栈， 增加数据，索引+1，然后在索引出赋上压入的值
        this.top += 1; 
        this.stack[this.top] = v;       
    }
    // 弹栈，返回值弹出了什么值，返回值可以用泛型，但是这里为了理解用int即可
    public int pop() {
        // 错误优先，提前判断为空
        if(this.isEmpty()) {
            throw new RuntimeException("栈为空，无法弹栈");
        }
        // 先把弹出的值保存下来，方便返回，然后索引减一
        int popResult = this.stack[this.top];
        this.top -= 1;
        return popResult;
    }
    public int length() {
        return this.top + 1;
    }
    // 查看
    public void list() {       
        int len = this.length();
        for(int i = 0; i < len; i++ ) {
            System.out.printf("stack[%d] = %d", i , this.stack[i]);
        } 
    }
}   
```


## 方案二动态扩容
### 数组静态栈的自动扩容缩减（了解）

基本原理，
    - 在PUSH前如果发现容量已满，那么自动扩容整个栈容量。
    - 在POP的后，如果有效数据小于容量1/4，就自动缩减一半容量。

```java
public class ArrayStack02 {
    // 栈
    private int[] stack;
    //    栈的大小
    private int maxStack;
    //    索引
    private int top = -1;

    public ArrayStack02(int maxStack) {
        this.stack = new int[maxStack];
        this.maxStack = maxStack;
    }

    // 自动扩容,扩容2倍，把值赋值一下
    public void expansion() {
        // 最大容量翻倍
        this.maxStack *= 2;
        // 保存当前的数组长度
        int len = this.length();
        // 声明一个扩容容量后的数组
        int[] tmp = new int[this.maxStack];
        // 把原有的数组的值，赋值给临时数组
        for (int i = 0; i < len; i++) {
            tmp[i] = this.stack[i];
        }
        this.stack = tmp; // 切换引用关系
    }

    // 自动缩减容量，在POP的时候，如果POP的长度远远小于了容量，那么自动缩减容量，避免浪费空间
    public void reduceStack() {
        this.maxStack /= 2;
        // 保存当前的数组长度
        int len = this.length();
        // 声明一个缩减容量后的数组
        int[] tmp = new int[this.maxStack];
        // 把原有的数组的值，赋值给临时数组
        for (int i = 0; i < len; i++) {
            tmp[i] = this.stack[i];
        }
        this.stack = tmp; // 切换引用关系
    }

    /*
     * 判空
     */
    public boolean isEmpty() {
        return this.top == -1;
    }

    /**
     * 判断是否无法插入
     */
    public boolean isFull() {
        return this.top == this.maxStack - 1;
    }

    //    入栈
    public void push(int v) {
        // 检查数组的最大容量，如果已满，那么扩容
        if (isFull()) {
            this.expansion();
        }
        // 正常添加
        this.top++;
        this.stack[this.top] = v;
        // if (!isFull()) {
        //    System.out.println(v);
        //    this.top++;
        //    this.stack[this.top] = v;
        // } else {
        //    throw new RuntimeException("已达到最大长度，无法压栈");
        // }
    }

    // 出栈、弹栈
    public int pop() {
        if (!isEmpty()) {
            int v = this.stack[this.top];
            this.top--;
            // 如果索引缩减后，索引依旧大于0，同时索引小于容量的1/4了，那么才会缩减空间
            if (this.top > -1 && (this.top <= (this.maxStack / 4))) {
                this.reduceStack();
            }
            return v;
        } else {
            throw new RuntimeException("长度为空，无法弹栈");
        }
    }

    private int length() {
        return this.top + 1;
    }

    public void list() {
        if (isEmpty()) {
            System.out.printf("[]");
            return;
        }
        int len = this.length();
        for (int i = 0; i < len; i++) {
            System.out.printf("stack[%d] = %d\n", i, stack[i]);
        }
    }

    public int getMaxStack() {
        return maxStack;
    }

    // 测试
    public static void main(String[] args) {
        ArrayStack02 list = new ArrayStack02(3);
        // 压栈
        list.push(1);
        list.push(1);
        list.push(1);
        // 达到最大容量后，依旧可以压栈
        list.push(1);
        list.push(1);
        list.list();

        // 举例自动缩减容量
        ArrayStack02 testPop= new ArrayStack02(100);
        testPop.push(1);
        testPop.push(2);
        testPop.push(3);
        testPop.push(4);
        testPop.push(5);
        testPop.push(5);
        testPop.push(5);
        testPop.pop();
        System.out.printf("%d\n", testPop.getMaxStack()); // 50
        testPop.pop();
        System.out.printf("%d\n", testPop.getMaxStack()); // 25
        testPop.pop();
        System.out.printf("%d\n", testPop.getMaxStack()); // 12
        testPop.pop();
        System.out.printf("%d\n", testPop.getMaxStack()); // 6
        testPop.pop();
        System.out.printf("%d\n", testPop.getMaxStack()); // 3
        testPop.pop();
        System.out.printf("%d\n", testPop.getMaxStack()); // 1
        testPop.pop();
        System.out.printf("%d\n", testPop.getMaxStack()); // 1
    }
}
```
