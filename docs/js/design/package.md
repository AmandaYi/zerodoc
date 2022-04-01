# 前端通用工具库设计开发

## 思想规划
0. 为什么要做？为了把常用的代码整合起来，形成调用模板。
1. 做什么？  
   - 把常用的基础工具函数，验证函数，日期函数，环境函数，金额格式化函数，进行封装。
   - 把常用的组件封装起来，比如列表类，列表带查询条件类。
2. 怎么做？通过webpack打包成一个库UMD的形式，然后通过npm包管理的方案进行版本控制分包。
3. 怎么用？引用的时候是  `import { util, SelfComponent } from "xxx"`，使用上，util.isArray(), 对于组件引入后直接用即可（任何框架都一样）。
4. 项目的完善？编写类型定义文件，使用TS改造，编写测试保证健壮，编写文档网站。

## 划分目录功能
build 迭代后的文件 
example 使用例子
package 核心内容 - 主要写的代码是各种单独功能模块，每个模块最好一个文件夹导出，等会举例
src 核心内容 - 主要写的代码是把需要导出的内容导出，最整理归奶或者二次格式化规划
test 测试
types 类型定义文件
## 编写代码
封装标题组件，根据传入的title展示界面
封装一个util库，具备一个判断数组的函数

1. 新建项目
```base
mkdir lib-resource && cd lib-resource
npm init -y
# 创建目录
mkdir build && mkdir example && mkdir -p package/title && mkdir -p package/util && mkdir src && mkdir test && mkdir types

# 创建组件和组件导出文件
echo "import Title from "./title.vue"; \n export default Title;" > package/title/index.js

# 创建函数和函数导出文件

```
2. 新建目录
3. 新建文件
4. 编写例子的代码功能

## webpack构建配置

## 编写类型定义文件 xxx.d.ts

## npm发版代码配置

## npm发版类型定义文件


