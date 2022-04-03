# 前端通用工具库设计开发

## 思想规划
0. 为什么要做？为了把常用的代码整合起来，形成调用模板。
1. 做什么？  
   - 把常用的基础工具函数，验证函数，日期函数，环境函数，金额格式化函数，进行封装。
   - 把常用的组件封装起来，比如列表类，列表带查询条件类。
2. 怎么做？通过webpack打包成一个库UMD的形式，然后通过npm包管理的方案进行版本控制分包。
3. 怎么用？引用的时候是  `import { util, SelfComponent } from "xxx"`，使用上，util.isArray(), 对于组件引入后直接用即可（任何框架都一样）。
4. 项目的完善？编写类型定义文件，使用TS改造，编写测试保证健壮，编写文档网站。



## 目标

- 能够熟悉前端底层包封装的整体规范和宏观思想
- 熟悉构建工具原理和webpack配置编写方法
- 熟悉package.json的部分规范
- 能够高质量完成的封装一个前端组件库和前端工具库的水平

## 划分目录功能
build 迭代后的文件 
example 使用例子
package 核心内容 - 主要写的代码是各种单独功能模块，每个模块最好一个文件夹导出，等会举例
src 核心内容 - 主要写的代码是把需要导出的内容导出，最整理归奶或者二次格式化规划
test 测试
types 类型定义文件

## 环境

|     主要包  |       版本      |
| :---------: | :--------------: |
| webpack | 5 |
| @babel-loader | 8+ |
| @babel/preset-env | 7+ |
| @babel/core | 7+ |
| html-webpack-plugin | 5 +|
| vue | 3+ |
| vue-loader | 17+ |
| NodeJS | 14+ |
| vue-template-compiler | ^2.6.14 |

## 编写代码
封装标题组件，根据传入的title展示界面
封装一个util库，具备一个判断数组的函数

1. 新建项目
2. 新建目录
3. 新建文件
4. 编写例子的代码功能
5. 导出功能模块和组件模块

```base
mkdir lib-resource && cd lib-resource
npm init -y
```

2. 新建目录

```base
# 创建目录
mkdir build && mkdir example && mkdir -p package/BaseCardComponent && mkdir -p package/util && mkdir src && mkdir test && mkdir types
```

3. 新建文件
4. 编写例子的代码功能
```bash
# 创建组件和组件导出文件
echo '
<template>
  <div>
    <h2>{{cardTitle}}</h2>
    <section>{{cardContent}}</section>
  </div>
</template>
<script lang="js">
	export default {
		name: "title",
		props: {
			cardTitle: {
				type: String,
				default: ""
			},
			cardContent: {
				type: String,
				default: ""
			}
		}
	}
</script>
' > package/BaseCardComponent/BaseCard.vue
 
echo '
import BaseCard from "./BaseCard";

export default BaseCard;
' > package/BaseCardComponent/index.js

# 创建函数和函数导出文件
echo '
const util = {
	isArray(v) {
		if (Array.isArray) {
			return Array.isArray(v);
		} else {
			return Object.prototype.toString.call(v) === '[object Array]'
		}
	}
}
export {util}
' > package/util/util.vue
echo '
import {util} from "./util.js"

export {util}
' > package/util/indx.js

```

5. 导出功能模块和组件模块

```base

echo '

import {util} from "../package/util";
import BaseCard from "../package/BaseCardComponent"

export {util, BaseCard};

' > ./src/main.js

```


## webpack构建配置

包依赖:

```bash 
    # 必备包
    npm i -D @babel/core @babel/preset-env babel-loader core-js webpack webpack-cli
    # vue组件依赖解析包，这里vue用Dev选项的意思是，因为该项目的组件是要导出让别的项目用的，所以不需要用Save选项。
    npm i -D vue vue-loader vue-template-compiler

```

:::tip
这里有版本共存冲突问题，请留意@babel/core和@babel-loader的版本互相依赖匹配。
如下，安装的是babel-loader 8.x版本，那么就需要的是`@babel/core @babel/preset-env`

> 另外，如果安装的babel-loader是 小于8.x以下的版本，那么就需要的是`babel/core babel/preset-env`, 命令是`npm i babel-core babel-loader@7 babel-plugin-transform-runtime –D`

:::

::: tip
globalObject变量尽可能的设置
因为项目具有组件，所以target尽可能打包为web端，
但是为了构建web应用，打包后如果想在nodejs环境使用的，那么打包后的资源里面又self变量，
该变量是浏览器端独有，所有为了能够让包既能在web端使用，又能在nodejs端使用，因此添加此代码，用来兼容标识全局的this和self
:::

```base

echo '
const path = require("path")
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
	mode: "production",
	entry: {
		libRoot: "./src/main.js",
	},
	// target: 'node', // 这是最关键的
	target: 'web', // <=== 默认为 'web'，可省略
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "build", "lib"),
		library: {
			type: "umd"
		},
		// libraryExport: 'default',
		umdNamedDefine: true,
		// 为了构建web应用，打包后如果想在nodejs环境使用的，那么打包后的资源里面又self变量，
		// 该变量是浏览器端独有，所有为了能够让包既能在web端使用，又能在nodejs端使用，因此添加慈航代码，兼容标识全局
		globalObject: 'typeof self !== \'undefined\' ? self : this'
	},
	resolve: {
		// 兼容处理后缀名，比如导入导出的时候，不需要写后缀名，让webpack进行自我推断
		extensions: [".js", ".vue"]
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: file => (
					/node_modules/.test(file) &&
					!/\.vue\.js/.test(file)
				),
				options: {
					"presets": [
						["@babel/preset-env"]
					],
				},
			}
		]
	},
	plugins: [
		// 请确保引入这个插件！
		new VueLoaderPlugin()
	]
}
' > webpack.config.production.js
```

- 当前package.json的依赖为

```json
{  
    "devDependencies": {
        "@babel/core": "^7.17.8",
        "@babel/preset-env": "^7.16.11",
        "babel-loader": "^8.2.4",
        "core-js": "^3.21.1",
        "vue": "^3.2.31",
        "vue-loader": "^17.0.0",
        "vue-template-compiler": "^2.6.14",
        "webpack": "^5.71.0",
        "webpack-cli": "^4.9.2"
    }
}

```

- 在package.json文件里面添加脚本为

```javascript
{
  // ...
  "scripts": {
    "build": "webpack --config webpack.config.production.js"
  }
  // ...
}
```

此时package.json
  ```json
    {
      "name": "lib-resource",
      "version": "1.0.0",
      "description": "",
      "main": "src/main.js",
      "scripts": {
        "build": "webpack --config webpack.config.production.js"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@babel/core": "^7.17.8",
        "@babel/preset-env": "^7.16.11",
        "babel-loader": "^8.2.4",
        "core-js": "^3.21.1",
        "vue": "^3.2.31",
        "vue-loader": "^17.0.0",
        "vue-template-compiler": "^2.6.14",
        "webpack": "^5.71.0",
        "webpack-cli": "^4.9.2"
      }
    }
  ```
- 打包

- 运行打包命令,将会在build/lib目录下,生成一个具有umd规范的main.js文件

```bash
npm run build
```

## 构建webpack的开发环境（了解）

### 新建例子代码文件

- 建立目录

```bash
    mkdir -p example/BaseCardComponent
```

#### 建立测试的页面

```bash 
echo '
<!doctype html>
<html lang="zh-cn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
<div id="app"></div>
</body>
</html>
' > example/BaseCardComponent/index.html
```
#### 建立组件
- 注意打包后的引入方式为解构引入
```bash 
echo '
<template>
  <div>
    父组件内容: {{cardTitle}} - {{cardContent}}
    <BaseCard :cardTitle="cardTitle" :cardContent="cardContent"></BaseCard>
  </div>
</template>
<script lang="js">
	import {ref} from "vue";
	import BaseCard from "./../../package/BaseCardComponent/index"
  // import {BaseCard} from "./../../build/lib/main"
	export default {
		setup(props) {
			const cardTitle = ref("cardTitle");
			const cardContent = ref("cardContent");
			return {
				cardTitle,
				cardContent
			}
		},
		components: {
			BaseCard,
		}
	}
</script>
' > example/BaseCardComponent/index.vue
```

#### 建立webpack的模块入口

```bash
echo '
import {createApp} from 'vue'
import App from "./index.vue"

createApp(App).mount('#app')
' > example/BaseCardComponent/index.js
```

### webpack开发配置修改

因为是在开发库，所以搭建webpack的开发环境也仅仅是为了例子用。可以有多个例子，那么也就证明了，有很多个入口。

想要搭建开发环境，需要实现套接字编程启动一个server服务，不过，相对应的webpack已经替我们写好了http服务，我们只需要用即可。

同时，我们要用一个html作为展示组件，因此需要安装html处理插件
```base
npm i -D webpack-dev-server html-webpack-plugin


# 复制`webpack.config.production.js`为`webpack.config.development.js`

cp webpack.config.production.js webpack.config.development.js
```

修改配置文件`webpack.config.development.js`
```diff
- mode: "production",
+ mode: "development",

  entry: {
-	ibRoot: "./src/main.test.js",
+   exampleTitle: "./example/BaseCardComponent/index.js"
  },

+ devServer: {
+     compress: true,
+     port: 9000,
+     hot: true
+ }    

  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),

+	new htmlPlugin({
+		title: "组件测试的案例",
+		filename: "BaseCardComponent.html",
+		template: "./example/BaseCardComponent/index.html"
+	})
  ],
```

此时的webpack.config.development.js
```javascript
const path = require("path")
const {VueLoaderPlugin} = require('vue-loader')
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		exampleTitle: "./example/BaseCardComponent/index.js"
	},
	// target: 'node', // 这是最关键的
	target: 'web', // <=== 默认为 'web'，可省略
	output: {
		filename: "./[name].[chunkhash:5].js",
		path: path.resolve(__dirname, "dist"),
		library: {
			type: "umd"
		},
		// libraryExport: 'default',
		umdNamedDefine: true,
		// 为了构建web应用，打包后如果想在nodejs环境使用的，那么打包后的资源里面又self变量，
		// 该变量是浏览器端独有，所有为了能够让包既能在web端使用，又能在nodejs端使用，因此添加慈航代码，兼容标识全局
		globalObject: 'typeof self !== \'undefined\' ? self : this'
	},
	resolve: {
		// 兼容处理后缀名，比如导入导出的时候，不需要写后缀名，让webpack进行自我推断
		extensions: [".js", ".vue"]
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: file => (
					/node_modules/.test(file) &&
					!/\.vue\.js/.test(file)
				),
				options: {
					"presets": [
						["@babel/preset-env"]
					],
				},
			},
		]
	},
	plugins: [
		// 请确保引入这个插件！
		new VueLoaderPlugin(),

		new htmlPlugin({
			title: "组件测试的案例",
			filename: "BaseCardComponent.html",
			template: "./example/BaseCardComponent/index.html"
		})
	],
	devServer: {
		compress: true,
		port: 9000,
		hot: true
	}
}
```

此时package.json
```json 
{
  "name": "lib-resource",
  "version": "1.0.0",
  "description": "",
  "main": "src/main.js",
  "scripts": {
    "server": "webpack-dev-server --config webpack.config.development.js",
    "build": "webpack --config webpack.config.production.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.17.8",
    "@babel/preset-env": "^7.16.11",
    "babel-loader": "^8.2.4",
    "core-js": "^3.21.1",
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^5.5.0",
    "style-loader": "^3.3.1",
    "vue": "^3.2.31",
    "vue-loader": "^17.0.0",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^5.71.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  }
}
```
修改`package.json`增加启动命令`npm run server`

```diff
  "scripts": {
+    "server": "webpack --config webpack.config.development.js",
     "build": "webpack --config webpack.config.production.js"
  },
```

## 编写类型定义文件 xxx.d.ts

保证，打包后的JS文件，在引入后，能让IDE正确提示里面的函数或注释或者其他参数。

建立文件类型定义文件
名字可以任取
因为我们打包方式是umd，所以我们去ts官网找到umd的模板代码直接写即可
```bash
echo '
export as namespace libResource;
export namespace util {
/**
* @name 判断是否是数组
* @param v {any} 任意类型
* @return {boolean}
*/
function isArray(v: any): boolean;
}
export namespace BaseCard {
}

' > types/libResource.d.ts
```

## npm发版代码配置

npm 发版需要在package.json进行配置需要发版的文件
files代表需要发版到版本库的文件

```diff
+ {
+  "files": ["./build/lib/main.js", "./types/libResource.d.ts"],
+ }
```

修改入口

```diff
- "main": "src/main.js",
+ "main": "./build/lib/main.js",
```

配置一个发版的脚本
如果项目名字是组织名形式`@yy/xxx的话，需要把发布命令改为 ```npm run build && npm publish --access public```

```diff
  "scripts": {
+   "publish": "npm run build && npm publish",
    "server": "webpack-dev-server --config webpack.config.development.js",
    "build": "webpack --config webpack.config.production.js"
  },
```
此时的package.json
```json
{
  "name": "lib-resource",
  "version": "1.0.0",
  "description": "",
  "main": "./build/lib/main.js",
  "scripts": {
    "publish": "npm run build && npm publish --access public",
    "server": "webpack-dev-server --config webpack.config.development.js",
    "build": "webpack --config webpack.config.production.js"
  },
  "files": [
    "./build/lib/main.js",
    "./types/libResource.d.ts"
  ],
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.17.8",
    "@babel/preset-env": "^7.16.11",
    "babel-loader": "^8.2.4",
    "core-js": "^3.21.1",
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^5.5.0",
    "style-loader": "^3.3.1",
    "vue": "^3.2.31",
    "vue-loader": "^17.0.0",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^5.71.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  }
}
```
## npm发版类型定义文件

类型文件虽然写了，但是为了能够让IDE能检测到，必须配置package的types字段，让IDE知道有这个类型文件。
```diff
 {
+  "types": "./types/libResource.d.ts",
 }
```
```json
{
  "name": "lib-resource",
  "version": "1.0.0",
  "description": "",
  "main": "./build/lib/main.js",
  "scripts": {
    "publish": "npm run build && npm publish --access public",
    "server": "webpack-dev-server --config webpack.config.development.js",
    "build": "webpack --config webpack.config.production.js"
  },
  "files": [
    "./build/lib/main.js",
    "./types/libResource.d.ts"
  ],
  "types": "./types/libResource.d.ts",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.17.8",
    "@babel/preset-env": "^7.16.11",
    "babel-loader": "^8.2.4",
    "core-js": "^3.21.1",
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^5.5.0",
    "style-loader": "^3.3.1",
    "vue": "^3.2.31",
    "vue-loader": "^17.0.0",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^5.71.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4"
  }
}

```

## npm发布

- 命令登录
```bash
npm login
```

:::tip
长时间登录不上，请检查配置文件，主要是检查register的地址，可能会有把地址设置为`cnpm`仓库地址，造成无法发布。
```bash 
cat ~/.npmrc
```
:::

- 执行发布命令
```bash 
npm run public
```

## 总结
暂无


