# 面向对象（难点）

面向对象是程序中一个非常重要的思想，它被很多同学理解成了一个比较难，比较深奥的问题，其实不然。面向对象很简单，简而言之就是程序之中所有的操作都需要通过对象来完成。

- 举例来说：
  - 操作浏览器要使用window对象
  - 操作网页要使用document对象
  - 操作控制台要使用console对象

`一切操作都要通过对象`，也就是所谓的面向对象，那么对象到底是什么呢？这就要先说到程序是什么，计算机程序的本质就是对现实事物的抽象，抽象的反义词是具体，比如：照片是对一个具体的人的抽象，汽车模型是对具体汽车的抽象等等。程序也是对事物的抽象，在程序中我们可以表示一个人、一条狗、一把枪、一颗子弹等等所有的事物。一个事物到了程序中就变成了一个对象。

在程序中所有的对象都被分成了两个部分数据和功能，以人为例，人的姓名、性别、年龄、身高、体重等属于数据，人可以说话、走路、吃饭、睡觉这些属于人的功能。数据在对象中被成为属性，而功能就被称为方法。所以简而言之，在程序中一切皆是对象。

面向对象不复杂，重点是面向，很简单。复杂问题是对象。
我们为什么要写程序，程序就是现实事物的抽象，抽象对应着具体。

一个具体的事物，抽象到了程序里面，在程序里面就是对象。
每一个对象在背后都对应着一个事物。

可以配置一个`tsconfig.json`
```json
{
  "compilerOptions": {
    "module": "es2015",
    "target": "es2015",
    "strict": true,
    "outDir": "./dist",
    "noEmitOnError": true
  },
  "include": [
    "./src/**/*"
  ]
}
```
命令: `tsc -w`
## 1、类（class）

要想面向对象，操作对象，首先便要拥有对象，那么下一个问题就是如何创建对象。要创建对象，必须要先定义类，所谓的类可以理解为对象的模型，程序中可以根据类创建指定类型的对象，举例来说：可以通过Person类来创建人的对象，通过Dog类创建狗的对象，通过Car类来创建汽车的对象，不同的类可以用来创建不同的对象。

- 定义类：

  - ```typescript
    class 类名 {
    	属性名: 类型;
    	
    	constructor(参数: 类型){
    		this.属性名 = 参数;
    	}
    	
    	方法名(){
    		....
    	}
    
    }
    ```

- 示例：

  - ```typescript
    class Person{
        name: string;
        age: number;
    
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
    
        sayHello(){
            console.log(`大家好，我是${this.name}`);
        }
    }
    ```

- 使用类：

  - ```typescript
    const p = new Person('孙悟空', 18);
    p.sayHello();
    ```
    
```typescript
// 使用class关键字来定义一个类
/*
*   对象中主要包含了两个部分：
*       属性
*       方法
* */
class Person{

    /*
    *   直接定义的属性是实例属性，需要通过对象的实例去访问：
    *       const per = new Person();
    *       per.name
    *
    *   使用static开头的属性是静态属性（类属性），可以直接通过类去访问
    *       Person.age
    *
    *   readonly开头的属性表示一个只读的属性无法修改
    * */

    // 定义实例属性
    // readonly name: string = '孙悟空';
    name = '孙悟空';

    // 在属性前使用static关键字可以定义类属性（静态属性）
    // static readonly age: number = 18;
    age = 18;


    // 定义方法
    /*
    * 如果方法以static开头则方法就是类方法，可以直接通过类去调用
    * */
    sayHello(){
        console.log('Hello 大家好！');
    }

}
```

## 2、面向对象的特点



### 封装

  - 对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装

  - 默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置

  - 只读属性（readonly）：

    - 如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改

  - TS中属性具有三种修饰符：

    - public（默认值），可以在类、子类和对象中修改
    - protected ，可以在类、子类中修改
    - private ，可以在类中修改

  - 示例：

    - public

      - ```typescript
        class Person{
            public name: string; // 写或什么都不写都是public
            public age: number;
        
            constructor(name: string, age: number){
                this.name = name; // 可以在类中修改
                this.age = age;
            }
        
            sayHello(){
                console.log(`大家好，我是${this.name}`);
            }
        }
        
        class Employee extends Person{
            constructor(name: string, age: number){
                super(name, age);
                this.name = name; //子类中可以修改
            }
        }
        
        const p = new Person('孙悟空', 18);
        p.name = '猪八戒';// 可以通过对象修改
        ```

    - protected

      - ```typescript
        class Person{
            protected name: string;
            protected age: number;
        
            constructor(name: string, age: number){
                this.name = name; // 可以修改
                this.age = age;
            }
        
            sayHello(){
                console.log(`大家好，我是${this.name}`);
            }
        }
        
        class Employee extends Person{
        
            constructor(name: string, age: number){
                super(name, age);
                this.name = name; //子类中可以修改
            }
        }
        
        const p = new Person('孙悟空', 18);
        p.name = '猪八戒';// 不能修改
        ```

    - private

      - ```typescript
        class Person{
            private name: string;
            private age: number;
        
            constructor(name: string, age: number){
                this.name = name; // 可以修改
                this.age = age;
            }
        
            sayHello(){
                console.log(`大家好，我是${this.name}`);
            }
        }
        
        class Employee extends Person{
        
            constructor(name: string, age: number){
                super(name, age);
                this.name = name; //子类中不能修改
            }
        }
        
        const p = new Person('孙悟空', 18);
        p.name = '猪八戒';// 不能修改
        ```

### 属性存取器

    - 对于一些不希望被任意修改的属性，可以将其设置为private

    - 直接将其设置为private将导致无法再通过对象修改其中的属性

    - 我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器

    - 读取属性的方法叫做setter方法，设置属性的方法叫做getter方法

    - 示例：

      - ```typescript
        class Person{
            private _name: string;
        
            constructor(name: string){
                this._name = name;
            }
        
            get name(){
                return this._name;
            }
        
            set name(name: string){
                this._name = name;
            }
        
        }
        
        const p1 = new Person('孙悟空');
        console.log(p1.name); // 通过getter读取name属性
        p1.name = '猪八戒'; // 通过setter修改name属性
        ```
### 静态属性

    - 静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用

    - 静态属性（方法）使用static开头

    - 示例：

      - ```typescript
        class Tools{
            static PI = 3.1415926;
            
            static sum(num1: number, num2: number){
                return num1 + num2
            }
        }
        
        console.log(Tools.PI);
        console.log(Tools.sum(123, 456));
        ```

### this

    - 在类中，使用this表示当前对象

### 构造函数

在JS或者TS中，构造函数就是constructor方法，每次创建对象的时候可以传入参数。
可以理解为，就是调用原型的构造器方法。
```typescript
class Dog{
    name: string;
    age: number;

    // constructor 被称为构造函数
    //  构造函数会在对象创建时调用
    constructor(name: string, age: number) {
        // 在实例方法中，this就表示当前当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        this.name = name;
        this.age = age;
    }

    bark(){
        // alert('汪汪汪！');
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}

const dog = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);

// console.log(dog);
// console.log(dog2);

dog2.bark();

```

### 继承

  - OCP原则，open close 开放封闭原则，对外部扩展，对修改关闭。
 
  - 继承时面向对象中的又一个特性

  - 通过继承可以将其他类中的属性和方法引入到当前类中

    - 示例：

      - ```typescript
        class Animal{
            name: string;
            age: number;
        
            constructor(name: string, age: number){
                this.name = name;
                this.age = age;
            }
        }
        
        class Dog extends Animal{
        
            bark(){
                console.log(`${this.name}在汪汪叫！`);
            }
        }
        
        const dog = new Dog('旺财', 4);
        dog.bark();
        ```

  - 通过继承可以在不修改类的情况下完成对类的扩展

```typescript
(function (){

    // 定义一个Animal类
    class Animal{
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log('动物在叫~');
        }
    }

    /*
    * Dog extends Animal
    *   - 此时，Animal被称为父类，Dog被称为子类
    *   - 使用继承后，子类将会拥有父类所有的方法和属性
    *   - 通过继承可以将多个类中共有的代码写在一个父类中，
    *       这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法
    *       如果希望在子类中添加一些父类中没有的属性或方法直接加就行
    *   - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
    *       这种子类覆盖掉父类方法的形式，我们称为方法重写
    *
    * */
    // 定义一个表示狗的类
    // 使Dog类继承Animal类
    class Dog extends Animal{

        run(){
            console.log(`${this.name}在跑~~~`);
        }

        sayHello() {
            console.log('汪汪汪汪！');
        }

    }

    // 定义一个表示猫的类
    // 使Cat类继承Animal类
    class Cat extends Animal{
        sayHello() {
            console.log('喵喵喵喵！');
        }
    }

    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
})();
```

### 重写

    - 发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写

    - 示例：

      - ```typescript
        class Animal{
            name: string;
            age: number;
        
            constructor(name: string, age: number){
                this.name = name;
                this.age = age;
            }
        
            run(){
                console.log(`父类中的run方法！`);
            }
        }
        
        class Dog extends Animal{
        
            bark(){
                console.log(`${this.name}在汪汪叫！`);
            }
        
            run(){
                console.log(`子类中的run方法，会重写父类中的run方法！`);
            }
        }
        
        const dog = new Dog('旺财', 4);
        dog.bark();
        ```

### super

 - 在子类中可以使用`super`来完成对父类的引用
 - 在JS或者TS中（其他语言的构造函数不一定构造器会重写，可以理解为是JS的一些问题），如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用，相当于子类的构造函数重写了父类构造函数
 - 必须在子类的构造函数里面调用`super()`
 
 ```typescript
(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('动物在叫~');
        }
    }

    class Dog extends Animal{

        age: number;

        constructor(name: string, age: number) {
            // 如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
            super(name); // 调用父类的构造函数
            this.age = age;
        }

        sayHello() {
            // 在类的方法中 super就表示当前类的父类
            //super.sayHello();

            console.log('汪汪汪汪！');
        }

    }

    const dog = new Dog('旺财', 3);
    dog.sayHello();
})();
```

### 抽象类（abstract class）
  
  - 抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例
  - 抽象类中可以有0个或者多个抽象方法，抽象类的很多地方和JAVA的抽象类规则类似。
  
    - ```typescript
      abstract class Animal{
          abstract run(): void;
          bark(){
              console.log('动物在叫~');
          }
      }
      
      class Dog extends Animals{
          run(){
              console.log('狗在跑~');
          }
      }
      ```
    
    - 使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现
    
    ```typescript
    (function () {
    
        /*
        *   以abstract开头的类是抽象类，
        *       抽象类和其他类区别不大，只是不能用来创建对象
        *       抽象类就是专门用来被继承的类
        *
        *       抽象类中可以添加抽象方法
        * */
        abstract class Animal {
            name: string;
    
            constructor(name: string) {
                this.name = name;
            }
    
            // 定义一个抽象方法
            // 抽象方法使用 abstract开头，没有方法体
            // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
            abstract sayHello():void;
        }
    
        class Dog extends Animal{
    
            sayHello() {
                console.log('汪汪汪汪！');
            }
    
        }
    
        class Cat extends Animal{
            sayHello() {
                console.log('喵喵喵喵！');
            }
    
        }
    
        const dog = new Dog('旺财');
        dog.sayHello();
    
    })();
    ```

## 3、接口（Interface）

接口可以宽泛的理解是对类的限制。

接口的作用类似于抽象类，不同点在于接口中的所有方法和属性都是没有实值的，
换句话说接口中的所有方法都是抽象方法。接口主要负责定义一个类的结构，
接口可以去限制一个对象的接口，对象只有包含接口中定义的所有属性和方法时才能匹配接口。
同时，可以让一个类去实现接口，实现接口时类中要保护接口中的所有属性。
同时，接口也可以当成类型声明去使用
- 示例（检查对象类型）：

  - ```typescript
    interface Person{
        name: string;
        sayHello():void;
    }
    
    function fn(per: Person){
        per.sayHello();
    }
    
    fn({name:'孙悟空', sayHello() {console.log(`Hello, 我是 ${this.name}`)}});
    
    ```

- 示例（实现）

  - ```typescript
    interface Person{
        name: string;
        sayHello():void;
    }
    
    class Student implements Person{
        constructor(public name: string) {
        }
    
        sayHello() {
            console.log('大家好，我是'+this.name);
        }
    }
    ```

 ```typescript
(function () {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    };

    /*
    *   接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    *       同时接口也可以当成类型声明去使用
    * */
    interface myInterface {
        name: string;
        age: number;
    }

    interface myInterface {
        gender: string;
    }

    // const obj: myInterface = {
    //     name: 'sss',
    //     age: 111,
    //     gender: '男'
    // };

    /*
    * 接口可以在定义类的时候去限制类的结构，
    *   接口中的所有的属性都不能有实际的值
    *   接口只定义对象的结构，而不考虑实际值
    *       在接口中所有的方法都是抽象方法
    *
    * */
    interface myInter{
        name: string;

        sayHello():void;
    }

    /*
    * 定义类时，可以使类去实现一个接口,
    *   实现接口就是使类满足接口的要求
    * */
    class MyClass implements myInter{
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(){
            console.log('大家好~~');
        }

    }

})();
```

## 4、属性封装

### 属性修饰符public,private,protected
 - public 修饰的属性可以在任意位置访问（修改） 默认值
 - private 私有属性，私有属性只能在类内部进行访问（修改）, 通过在类中添加方法使得私有属性可以被外部访问
 - protected 受包含的属性，只能在当前类和当前类的子类中访问（修改）

### public简单说明
    任何时候外部的都可以访问属性，设置属性，虽然方便，但是不安全。
```typescript
class Person {
    // 这里如果不写public默认就是public
    public name: string;
}
const p = new Person();
console.log(p.name);
p.name = "123";
```
    
### private

  - 现在属性是在对象中设置的，属性可以任意的被修改, 属性可以任意被修改将会导致对象中的数据变得非常不安全
  getter方法用来读取属性,setter方法用来设置属性,它们被称为属性的存取器
```typescript
    class Person{
        private _name: string;

        constructor(name: string) {
            this._name = name;
        }
        // 定义方法，用来获取name属性
        getName(){
            return this._name;
        }
        // 定义方法，用来设置name属性
        setName(value: string){
             this._name = value;
        }
    }
```

### JS的GET和SET修饰符作为存取器

```typescript
class Person {
    name: string;
    get name () {
        return 123;
    }
    set name (value: string) {
        this.name = value;
    }
}
const p = new Person();
p.name // 相当于调用了 get name
p.name = "123"; // 相当于调用了set name 
```

### protected 受保护的属性，一般多用于和继承结合使用。
```typescript
class A {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class B extends A {
    init(){
        console.log(this.name); // 只有继承的子类可以拿到超类受保护的属性。
    }
}
class C extends B {
    init(){
        console.log(this.name); // 多级继承也是可以拿到超类受保护的属性。 
    }
}
```
### 构造器里面定义属性
```typescript
class Person {
    constructor(name: string) {}
}
const p = new Person("123")
p.name = "123"; // 但是这样子访问却不行，必须在构造器里面加上public修饰
```
- 构造器上直接声明属性，相当于直接实现了get和set修饰符的存取器方法。
```typescript
class Person {
    constructor(public name: string) {}
}
const p = new Person("123");
p.name = "123";
```

## 4、泛型（Generic）

### 原理:

定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。

```typescript
function fn(a: any): any {
  return a;
}
```

fn函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的，
由于类型不确定所以参数和返回值均使用了any，
但是很明显这样做是不合适的，首先使用any会关闭TS的类型检查，
其次这样设置也不能体现出参数和返回值是相同的类型

- 解决方案
在定义函数或是类时，如果遇到类型不明确就可以使用泛型
```typescript
function fn<T>(a: T): T {
  return a;
}
```

这里的```<T>```就是泛型，T是我们给这个类型起的名字（不一定非叫T），
设置泛型后即可在函数中使用T来表示该类型。所以泛型其实很好理解，就表示某个类型。

#### 泛型的使用

直接使用`fn("123)`
指定类型后使用，使用时可以直接传递参数使用，类型会由TS自动推断出来，
但有时编译器无法自动推断时还需要指定类型`fn<string>("123")`

#### 使用多个泛型

```typescript
function fn<T, K>(a: T, b: K): T {
    return a;
}
fn<>("123",123);// <> 可写可不写
fn<string, number>("123",123);
```
```typescript
/*
function fn(a: any): any{
    return a;
}*/

/*
*   在定义函数或是类时，如果遇到类型不明确就可以使用泛型
*
* */

function fn<T>(a: T): T{
    return a;
}

// 可以直接调用具有泛型的函数
let result = fn(10); // 不指定泛型，TS可以自动对类型进行推断
let result2 = fn<string>('hello'); // 指定泛型

// 泛型可以同时指定多个
function fn2<T, K>(a: T, b: K):T{
    console.log(b);
    return a;
}
fn2<number, string>(123, 'hello');

interface Inter{
    length: number;
}

// T extends Inter 表示泛型T必须时Inter实现类（子类）
function fn3<T extends Inter>(a: T): number{
    return a.length;
}

class MyClass<T>{
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>('孙悟空');

```

### 泛型应用类

使用泛型时，完全可以将泛型当成是一个普通的类去使用

```typescript
    class Person<T>{
        prop: T;
        constructor(prop: T){
            this.prop = prop;
        }
    }
    const p = new Person({name: "123"}); // 相当于传入了一个类型为 {name: string} 的类型
```

### 泛型应用接口

如下，函数参数或者类的泛型定义`T extends HasLength`的类型，那么调用时，务必时接口`HasLength`的实现类或者子类。
使用`T extends HasLength`表示泛型T必须是`HasLength`的子类，不一定非要使用接口类和抽象类同样适用。

```typescript
interface HasLength {
    length: number;
}
function fn<T extends HasLength>(a: T): number {
  return T.length;
}
let name = "123";

let len = fn<string>("123"); // 这里因为字符串的原型默认有length属性，属于也相当于是HasLength的实现类。

```
```typescript
interface HasLength {
    length: number;
}
class A <T extends HasLength> {
    o: string;
    constructor(o: T) {
        this.o = o;
    }    
    getNameLen(){
        return this.o.length;
    }
}
let result = new A({length: 100});
console.log(result.getNameLen());
```

## 总结

TS可以理解为一门新语言，也可以理解为规范，也可以理解为带类型的JS实现，是一套JS实现超集，如果用了TS，那么就要认认真真的按照规范和思想去编写代码，如果处处都写any，那TypeScript就变成了anyScript，倒不如直接不用TS了。

总之，TS虽然增加了代码量和类型，但是减少了开发过程中的不容易发现的问题，对于后期代码的维护有积极的作用。