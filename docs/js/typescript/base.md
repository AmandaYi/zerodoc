---
displayed_sidebar: JSTypeScript
---

# 笔记和开发

## 0、TypeScript简介

1. TypeScript是JavaScript的超集。
2. 它对JS进行了扩展，向JS中引入了类型的概念，并添加了许多新的特性。
3. TS代码需要通过编译器编译为JS，然后再交由JS解析器执行。
4. TS完全兼容JS，换言之，任何的JS代码都可以直接当成JS使用。
5. 相较于JS而言，TS拥有了静态类型，更加严格的语法，更强大的功能；TS可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS代码可以编译为任意版本的JS代码，可有效解决不同JS运行环境的兼容问题；同样的功能，TS的代码量要大于JS，但由于TS的代码结构更加清晰，变量类型更加明确，在后期代码的维护中TS却远远胜于JS。



## 1、TypeScript 开发环境搭建

1. 下载Node.js
   - 64位：https://nodejs.org/dist/v14.15.1/node-v14.15.1-x64.msi
   - 32位：https://nodejs.org/dist/v14.15.1/node-v14.15.1-x86.msi
   
2. 安装Node.js

3. 使用npm全局安装typescript
   - 进入命令行
   - 输入：npm i -g typescript
   
4. 创建一个ts文件

5. 使用tsc对ts文件进行编译
   - 进入命令行
   
   - 进入ts文件所在目录
   
   - 执行命令：tsc xxx.ts
   
     

## 2、基本类型

- 类型声明

- 类型声明是TS非常重要的一个特点

- 通过类型声明可以指定TS中变量（参数、形参）的类型

- 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错

- 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

- 语法：

```typescript
let 变量: 类型;

let 变量: 类型 = 值;

function fn(参数: 类型, 参数: 类型): 类型{
  ...
}
```

### 自动类型判断

- TS拥有自动的类型判断机制
- 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
- 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明

- 类型：

|  类型   |       例子        |              描述              |
| :-----: | :---------------: | :----------------------------: |
| number  |    1, -33, 2.5    |            任意数字            |
| string  | 'hi', "hi", `hi`  |           任意字符串           |
| boolean |    true、false    |       布尔值true或false        |
| 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
|   any   |         *         |            任意类型            |
| unknown |         *         |         类型安全的any          |
|  void   | 空值（undefined） |     没有值（或undefined）      |
|  never  |      没有值       |          不能是任何值          |
| object  |  {name:'孙悟空'}  |          任意的JS对象          |
|  array  |      [1,2,3]      |           任意JS数组           |
|  tuple  |       [4,5]       | 元素，TS新增类型，固定长度数组 |
|  enum   |    enum{A, B}     |       枚举，TS中新增类型       |

### number

   - ```typescript
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
    ```

### boolean

  - ```typescript
    let isDone: boolean = false;
    ```

### string

  - ```typescript
    let color: string = "blue";
    color = 'red';
    
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.
    
    I'll be ${age + 1} years old next month.`;
    ```

### 字面量

  - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围
  - 来连接多个类型（联合类型）
  - ```typescript
    let color: 'red' | 'blue' | 'black';
    let num: 1 | 2 | 3 | 4 | 5;
    let b: "male" | "female";
    b = "male";
    b = "female";
    let c: boolean | string;
    c = true;
    c = 'hello';
    ```

### any

    - any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
    - 使用TS时，不建议使用any类型
    - 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
    
  - ```typescript
    let d: any = 4;
    d = 'hello';
    d = true;
    
    let s: string;
    // d的类型是any，它可以赋值给任意变量
    s = d;
    ```

### unknown

  - 表示未知类型的值
  
  - ```typescript
    let notSure: unknown = 4;
    notSure = 'hello';
    let e: unknown;
    e = 10;
    e = "hello";
    e = true;
    // unknown 实际上就是一个类型安全的any
    // unknown 类型的变量，不能直接赋值给其他变量
    let s: string;
    if(typeof e === "string"){
        s = e;
    }
    ```

### void

  - 主要设置函数返回值
  - 用来表示空，以函数为例，就表示没有返回值的函数
  - ```typescript
    let unusable: void = undefined;
    ```

### never

  - 主要设置函数返回值
  - 表示永远不会返回结果，有一类函数比如报错的 throw new Error()
  
  - ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

### object（没啥用）

    > 表示一个js对象，但是JS里面万物皆对象，所以没啥用。其实更多的应该是限制内部的字段。
    
    > {} 用来指定对象中可以包含哪些属性， 
    语法：{属性名:属性值,属性名:属性值}在属性名后边加上?，表示属性是可选的

    - ```typescript
    let a: object;
    let obj: object = {};
    a = {};
    a = function() {}
    ```

    - ```typescript
    let b: {name: string, age?: number};
    b = {name: '孙悟空', age: 18};
    ```
    
    > 限定属性必有某些属性，但是其他属性数量不限，类型可以控制，比较常用。
                                                                                                                                                                                                                                                                                                                                                                    
    ```typescript
    // [propName: string]: any 表示任意类型的属性
    let c: {name: string, [propName: string]: any};
    c = {name: '猪八戒', age: 18, gender: '男'}; 
    ```
    
    > 设置函数结构的类型声明：用箭头函数的形式设置函数结构声明
    > 语法：(形参:类型, 形参:类型 ...) => 返回值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
     ```typescript
      let d: (n1: number, n2: number) => number;
      d = function (n1: number, n2: number): number{
          return n1 + n2;
      }
      let s: (s1: string, s2: string = '123', ...rest) => string;  
    ```                                                                                                                                                                                                                                                                                                                                                           

### array
    > 数组的类型声明
    > 类型[]
    > Array<类型>
          
  - ```typescript
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    let list: any[];
    ```

### tuple元组

  > 元组就是固定长度的数组，长度固定，存储效率会很好。
  > 语法：[类型, 类型, 类型]
         
  - ```typescript
    let x: [string, number];
    x = ["hello", 10];  // 这里的值的顺序要和定义的保持一一对应，顺序不可以打乱。
    ```

### enum枚举

  - ```typescript
    enum Color {
      Red,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4,
    }
    let c: Color = Color.Green;
    // eg: 
    enum Gender{
        Male, // Male = 1 可以手动指定存的值，不过一般不需要
        Female
    }
    
    let i: {name: string, gender: Gender};
    i = {
        name: 'xxx',
        gender: Gender.Male // 'male'
    }
    ```

### 类型断言

  语法：
  
    变量 as 类型
    
    <类型>变量
    
    ```typescript    
    let s: string;
    s = e as string;
    s = `<string>e`;
    ``` 
  
  - 有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：

    - 第一种

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (someValue as string).length;
        ```

    - 第二种

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (<string>someValue).length;
        ```
## 3、其他用法

### 连接类型

- &符号

    - ```typescript
    let i: string & number; // 不过不可能存在一个变量是两种类型。
    // 常用用法，and用来连接两个对象
    let j: { name: string } & { age: number };
    j = { name: 'xxx', age: 123 };
    ```

### 类型别名

- 类型别名常用简化类型的使用，使用type
    
    - ```typescript
    type myType = 1 | 2 | 3 | 4 | 5;
    let k: myType;
    let l: myType;
    let m: myType;
    k = 2;
    ```


## 4、编译选项

### tsc自动编译文件

  - 编译文件时，使用 -w 指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译。

  - 示例：

    - ```bash
      # 监听编译单个文件
      tsc xxx.ts -w
      # 或者监听编译整个目录
      tsc -w
      ```

### tsconfig.json自动编译整个项目

:::tip
tsconfig.json是ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译
:::

- 如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。

- 但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 `tsconfig.json`

- `tsconfig.json`是一个JSON文件，添加配置文件后，只需只需 tsc 命令即可完成对整个项目的编译
    
> 可以使用tsc --init 即可生成,

- 配置选项如下：

### include 

- 定义希望被编译文件所在的目录 用来指定哪些ts文件需要被编译

- 默认值：["\*\*/\*"]

:::tip
两个**代表任意目录，*代表任意文件
:::

- 示例：

    - ```json
      "include":["src/**/*", "tests/**/*"]
      ```

- 所有src目录和tests目录下的文件都会被编译

### exclude

- 定义需要排除在外的目录

- 默认值：["node_modules", "bower_components", "jspm_packages"]

- 示例：

    - ```json
    "exclude": ["./src/hello/**/*"]
    ```

- 上述示例中，src下hello目录下的文件都不会被编译

### extends

- 定义被继承的配置文件

- 示例：

    - ```json
      "extends": "./configs/base"
      ```

- 上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息

### files

- 指定被编译文件的列表，只有需要编译的文件少时才会用到

- 示例：

- ```json
  "files": [
      "core.ts",
      "sys.ts",
      "types.ts",
      "scanner.ts",
      "parser.ts",
      "utilities.ts",
      "binder.ts",
      "checker.ts",
      "tsc.ts"
    ]
  ```

- 列表中的文件都会被TS编译器所编译

### compilerOptions

- 编译选项是配置文件中非常重要也比较复杂的配置选项

- 在compilerOptions中包含多个子选项，用来完成对编译的配置

  - 项目选项

    #### target

      - 设置ts代码编译的目标版本

      - 可选值：

        - ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ES2021、ES2022、ESNext

      - 示例：

        - ```json
          "compilerOptions": {
              "target": "ES6"
          }
          ```

        - 如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码

    #### lib

      - 指定代码运行时所包含的库（宿主环境）, 比如智能提示或者在Nodejs里面开发Dom。一般不需要改。

      - 默认值 DOM,ES6等等一般是浏览器宿主
      
      - 可选值：

        - ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......

      - 示例：

        - ```json
          "compilerOptions": {
              "target": "ES6",
              "lib": ["ES6", "DOM"],
              "outDir": "dist",
              "outFile": "dist/aa.js"
          }
          ```

    #### module

      - 设置编译后代码使用的模块化系统

      - 可选值：

        - CommonJS、UMD、AMD、System、ES2020、es2022、ESNext、None、node12、nodenext

      - 示例：

        - ```typescript
          "compilerOptions": {
              "module": "CommonJS"
          }
          ```

    #### outDir

      - 编译后文件的所在目录

      - 默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置

      - 示例：

        - ```json
          "compilerOptions": {
              "outDir": "dist"
          }
          ```

        - 设置后编译后的js文件将会生成到dist目录

    #### outFile

      - 将所有的文件编译为一个js文件

      - 默认会将所有的编写在全局作用域中的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中

      - 示例：

        - ```json
          "compilerOptions": {
              "outFile": "dist/app.js"
          }
          ```

    #### rootDir

      - 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录

      - 示例：

        - ```json
          "compilerOptions": {
              "rootDir": "./src"
          }
          ```

    #### allowJs

      - 是否对js文件编译

    #### checkJs

      - 是否对js文件进行检查

      - 示例：

        - ```json
          "compilerOptions": {
              "allowJs": true,
              "checkJs": true
          }
          ```

    #### removeComments

      - 是否删除注释
      - 默认值：false

    #### noEmit

      - 不对代码进行编译
      - 默认值：false

    #### noEmitOnError
    
      - 当有错误时不生成编译后的文件
      - 默认值：false
      
    #### sourceMap

      - 是否生成sourceMap
      - 默认值：false



### 严格检查

   #### strict
      - 启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查
   #### alwaysStrict
      - 总是以严格模式对代码进行编译
   #### noImplicitAny
      - 禁止隐式的any类型
   #### noImplicitThis
      - 禁止类型不明确的this
   #### strictBindCallApply
      - 严格检查bind、call和apply的参数列表
   #### strictFunctionTypes
      - 严格检查函数的类型
   #### strictNullChecks
      - 严格的空值检查
   #### strictPropertyInitialization
      - 严格检查属性是否初始化
      
### compilerOptions比较完整的配置

- 一份比较完整的配置

```javascript
const compilerOptions = {
    // target 用来指定ts被编译为的ES的版本
// 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'esnext'.
    "target": "es2015",
    // module 指定要使用的模块化的规范
    // 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', 'node12', 'nodenext'.
    "module": "es2015",
    // lib用来指定项目中要使用的库
    //'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es
    //2018', 'es2019', 'es2020', 'esnext', 'dom', 'dom.iterable', 'webworker', 'webworker.importscripts', 'webworker.iterable', 'scri
    //pthost', 'es2015.core', 'es2015.collection', 'es2015.generator', 'es2015.iterable', 'es2015.promise', 'es2015.proxy', 'es2015.r
    //eflect', 'es2015.symbol', 'es2015.symbol.wellknown', 'es2016.array.include', 'es2017.object', 'es2017.sharedmemory', 'es2017.st
    //ring', 'es2017.intl', 'es2017.typedarrays', 'es2018.asyncgenerator', 'es2018.asynciterable', 'es2018.intl', 'es2018.promise', '
    //es2018.regexp', 'es2019.array', 'es2019.object', 'es2019.string', 'es2019.symbol', 'es2020.bigint', 'es2020.promise', 'es2020.s
    //haredmemory', 'es2020.string', 'es2020.symbol.wellknown', 'es2020.intl', 'esnext.array', 'esnext.symbol', 'esnext.asynciterable
    //', 'esnext.intl', 'esnext.bigint', 'esnext.string', 'esnext.promise', 'esnext.weakref'
    "lib": ["es6", "dom"],
    // outDir 用来指定编译后文件所在的目录
    "outDir": "./dist",
    // 将代码合并为一个文件
    // 设置outFile后，所有的全局作用域中的代码会合并到同一个文件中
    "outFile": "./dist/app.js",
    // 是否对js文件进行编译，默认是false
    "allowJs": true,
    // 是否检查js代码是否符合语法规范，默认是false
    "checkJs": true,
    // 是否移除注释
    "removeComments": true,
    // 不生成编译后的文件
    "noEmit": false,
    // 当有错误时不生成编译后的文件
    "noEmitOnError": true,
    // 所有严格检查的总开关
    "strict": true,
    // 用来设置编译后的文件是否使用严格模式，默认false
    "alwaysStrict": true,
    // 不允许隐式的any类型
    "noImplicitAny": true,
    // 不允许不明确类型的this
    "noImplicitThis": true,
    // 严格的检查空值
    "strictNullChecks": true
}
```
#### 额外检查

    - noFallthroughCasesInSwitch
      - 检查switch语句包含正确的break
    - noImplicitReturns
      - 检查函数没有隐式的返回值
    - noUnusedLocals
      - 检查未使用的局部变量
    - noUnusedParameters
      - 检查未使用的参数

#### 高级

    - allowUnreachableCode
      - 检查不可达代码
      - 可选值：
        - true，忽略不可达代码
        - false，不可达代码将引起错误
    - noEmitOnError
      - 有错误的情况下不进行编译
      - 默认值：false

## 4、webpack配置

- 通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS。

- 步骤：

### 初始化项目

在项目根目录，执行命令 `npm init -y`

主要作用：根据项目现有信息自动创建package.json文件，目的，为了管理包和使用包

### 下载构建工具

```bash
npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin```
```
- 共安装了7个包
    - webpack
        - 构建工具webpack
    - webpack-cli
        - webpack的命令行工具
    - webpack-dev-server
        - webpack的开发服务器
    - typescript
        - ts编译器
    - ts-loader
        - ts加载器，用于在webpack中编译ts文件
    - html-webpack-plugin
        - webpack中html插件，用来自动创建html文件
    - clean-webpack-plugin
        - webpack中的清除插件，每次构建都会先清除目录

### 根目录下创建webpack的配置文件webpack.config.js

 - ```javascript
   const path = require("path");
   const HtmlWebpackPlugin = require("html-webpack-plugin");
   const { CleanWebpackPlugin } = require("clean-webpack-plugin");
   
   module.exports = {
       optimization:{
           minimize: false // 关闭代码压缩，可选
       },
   
       entry: "./src/index.ts",
       
       devtool: "inline-source-map",
       
       devServer: {
           contentBase: './dist'
       },
   
       output: {
           path: path.resolve(__dirname, "dist"),
           filename: "bundle.js",
           environment: {
               arrowFunction: false // 关闭webpack的箭头函数，可选
           }
       },
   
       resolve: {
           extensions: [".ts", ".js"]
       },
       
       module: {
           rules: [
               {
                   test: /\.ts$/,
                   use: {
                      loader: "ts-loader"     
                   },
                   exclude: /node_modules/
               }
           ]
       },
   
       plugins: [
           new CleanWebpackPlugin(),
           new HtmlWebpackPlugin({
               title:'TS测试'
           }),
       ]
   
   }
   ```

### 创建tsconfig.json
  
在根目录下创建tsconfig.json，为了让ts-loader调用tsc的时候，使用指定配置文件转码，配置可以根据自己需要

    ```json
        {
            "compilerOptions": {
                "target": "ES2015",
                "module": "ES2015",
                "strict": true
            }
        }
    ```
    
### 修改package.json添加如下配置
    
    - ```json
    {
        ...略...
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "webpack",
            "start": "webpack serve --open chrome.exe"
        },
        ...略...
    }
    ```

### 编辑构建

在src下创建ts文件，并在并命令行执行`npm run build`对代码进行编译，
或者执行`npm run start`来启动开发服务器

     

## 5、Babel

- 经过一系列的配置，使得TS和webpack已经结合到了一起，除了webpack，开发中还经常需要结合babel来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。

### 安装依赖包：

```bash 
    npm i -D @babel/core @babel/preset-env babel-loader core-js
```

:::tip
这里有版本共存冲突问题，请留意@babel/core和@babel-loader的版本互相依赖匹配。
如下，安装的是babel-loader 8.x版本，那么就需要的是`@babel/core @babel/preset-env`

> 另外，如果安装的babel-loader是 小于8.x以下的版本，那么就需要的是`babel/core babel/preset-env`, 命令是`npm i babel-core babel-loader@7 babel-plugin-transform-runtime –D`

:::

    - 共安装了4个包，分别是：
        - @babel/core
            - babel的核心工具
        - @babel/preset-env
            - babel的预定义环境
        - babel-loader
            - babel在webpack中的加载器
        - core-js
            - core-js用来使老版本的浏览器支持新版ES语法

### 修改webpack.config.js配置文件

:::tip
即使用了babel，假如要支持ie老版本的话，也会自动转换的，必须用core.js作为垫片，实现新特性的函数。
配置里面最主要的是按需引入core.js
"useBuiltIns": "usage"

另外，loader注意点是，如果有多个loader，需要把先处理的写到后面，因为loader的处理顺序从后往前处理的。
:::
:::warning
webpack里面的babel会把代码打包，生成js为(()=>{...code}),但是即使里面的code能够兼容ie一类的，但是外边的自调用函数是webpack加上的，所以ie还是不能认识webpack的箭头函数，
所以应该给webpack也设置一个环境兼容，不允许使用箭头函数。
```javascript
    // 告诉webpack不使用箭头
    environment:{
        arrowFunction: false
    }
```
:::
```javascript
// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的文件
        filename: "bundle.js",

        // 告诉webpack不使用箭头
        environment:{
            arrowFunction: false
        }
    },

    // 指定webpack打包时要使用模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                     // 配置babel
                     {
                         // 指定加载器
                         loader:"babel-loader",
                         // 设置babel
                         options: {
                             // 设置预定义的环境
                             presets:[
                                 [
                                     // 指定环境的插件
                                     "@babel/preset-env",
                                     // 配置信息
                                     {
                                         // 要兼容的目标浏览器
                                         targets:{
                                             "chrome":"58",
                                             "ie":"11"
                                         },
                                         // 指定corejs的版本
                                         "corejs":"3",
                                         // 使用corejs的方式 "usage" 表示按需加载
                                         "useBuiltIns":"usage"
                                     }
                                 ]
                             ]
                         }
                     },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    // 配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "这是一个自定义的title"
            template: "./src/index.html"
        }),
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }

};
```
如此一来，使用ts编译后的文件将会再次被babel处理，
使得代码可以在大部分浏览器中直接使用，可以在配置选项的targets中指定要兼容的浏览器版本。