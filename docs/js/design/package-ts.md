# 使用TypeScript开发代码补充

> 补充需要如下改动
   
TS引入了代码的类型，其他的都不会变化，那么主要修改的就是自己自定义的库的，对函数或者方法增加对应的类型修饰。

## 调整代码编写

在根目录打开shell命令行，修改文件名, mv比rename好用点，rename还需要安装util-linux包

- 修改工具包的文件名，同时为代码增加类型修饰符。

   1. `mv ./package/util/index.js ./package/util/index.ts`
   
    ```diff
      - import {util} from "./util.js"
      + import {util} from "./util" // 后缀默认是.ts 
        export {util}
    ``` 

   2. `mv ./package/util/util.js ./package/util/util.ts`
   
    ```diff
        const util = {
      -   isArray(v) {
      +   isArray(v: any): boolean {
    
    ```

    
- 修改统一导出的文件名

   1. `mv ./src/main.js ./src/main.ts`
   
     内容不需要改
     ```typescript
        import {util} from "../package/util";
        import BaseCard from "../package/BaseCardComponent"
        
        export {util, BaseCard};
     ``` 
      
## 按照TS转译依赖

  - typescript
    - ts编译器
  - ts-loader
    - ts加载器，用于在webpack中编译ts文件

```bash
    npm install typescript ts-loader -D 
```

## 调整webpack构建配置

不管是webpack的生产构建配置还是webpack的开发环境配置，为了运行ts文件，必须要做相同的修改。

以下以生成构建的配置`webpack.config.production.js`为例

### 增加后缀支持

```diff
	resolve: {
		// 兼容处理后缀名，比如导入导出的时候，不需要写后缀名，让webpack进行自我推断
   -	extensions: [".js", ".vue"]
   +	extensions: [".js", ".ts" ".vue"]
	}
```

### 增加ts-loader

在module的loader处理规则里面，增加新的ts匹配处理。

```typescript
[
    {
        test: /\.ts$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }
]
```

### 增加ts的配置文件`tsconfig.json`

  
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






