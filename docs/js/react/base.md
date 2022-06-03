# react常识

## react基本概述

1. 官网

英文官网: https://reactjs.org/
中文官网: https://react.docschina.org/

2. 描述

用于动态构建用户界面的 JavaScript 库(只关注于视图)

3. 特点

    *	声明式编码
    *	组件化编码
    *	React Native 编写原生应用
    *	高效（优秀的Diffing算法）

4. 高效的原因

    *	使用虚拟(virtual)DOM, 不总是直接操作页面真实DOM。
    *	DOM Diffing算法, 最小化页面重绘。
5. 关于虚拟DOM

    1. 本质是Object类型的对象（一般对象）
    2. 虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。
    3. 虚拟DOM最终会被React转化为真实DOM，呈现在页面上。
## 基本使用

1.	react.js：React核心库。
2.	react-dom.js：提供操作DOM的react扩展库。
3.	babel.min.js：解析JSX语法代码转为JS代码的库。

4.	React提供了一些API来创建一种 “特别” 的一般js对象
 	const VDOM = React.createElement('xx',{id:'xx'},'xx')
 	上面创建的就是一个简单的虚拟DOM对象
5.	我们编码时基本只需要操作react的虚拟DOM相关数据, react会转换为真实DOM变化而更新界。

6. 渲染到页面
`ReactDOM.render(virtualDOM, containerDOM)`
virtualDOM: 纯js或jsx创建的虚拟dom对象; containerDOM: 用来包含虚拟DOM元素的真实dom元素对象(一般是一个div).

```html 
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>hello_react</title>
</head>
<body>
	<!-- 准备好一个“容器” -->
	<div id="test"></div>

	<!-- 引入react核心库 -->
	<script type="text/javascript" src="../js/react.development.js"></script>
	<!-- 引入react-dom，用于支持react操作DOM -->
	<script type="text/javascript" src="../js/react-dom.development.js"></script>
	<!-- 引入babel，用于将jsx转为js -->
	<script type="text/javascript" src="../js/babel.min.js"></script>

	<script type="text/babel" > /* 此处一定要写babel */
		//1.创建虚拟DOM [虚拟DOM对象最终都会被React转换为真实的DOM]
		const VDOM = <h1>Hello,React</h1> /* 此处一定不要写引号，因为不是字符串 */
		//2.渲染虚拟DOM到页面
		ReactDOM.render(VDOM,document.getElementById('test'))
	</script>
</body>
</html>
```

## JSX

1.	全称:  JavaScript XML
2.	react定义的一种类似于XML的JS扩展语法: `JS + XML`本质是`React.createElement(component, props, ...children)`方法的语法糖
3.	作用: 用来简化创建虚拟DOM 

    *   写法：`var ele = <h1>Hello JSX!</h1>`
    *	注意1：它不是字符串, 也不是HTML/XML标签
    *	注意2：它最终产生的就是一个JS对象
    
4.	标签名任意: HTML标签或其它标签
5.	标签属性任意: HTML标签属性或其它
6.	基本语法规则

    *	遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
    *	遇到以 { 开头的代码，以JS语法解析: 标签中的js表达式必须用{ }包含
    
7.	babel.js的作用
    *	浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
    *	只要用了JSX，都要加上`type="text/babel"`, 声明需要babel来处理

8.  jsx语法规则：

    1. 定义虚拟DOM时，不要写引号。
    2. 标签中混入JS表达式时要用{}。
    3. 样式的类名指定不要用class，要用className。
    4. 内联样式，要用style={{key:value}}的形式去写。
    5. 只有一个根标签
    6. 标签必须闭合
    7. 标签首字母
            (1).若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
            (2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。
## 模块概念

### 模块

1. 理解：向外提供特定功能的js程序, 一般就是一个js文件
2. 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。
3. 作用：复用js, 简化js的编写, 提高js运行效率

### 组件

1. 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)
2. 为什么要用组件： 一个界面的功能更复杂
3. 作用：复用编码, 简化项目编码, 提高运行效率

### 模块化

当应用的js都以模块来编写的, 这个应用就是一个模块化的应用

### 组件化

当应用是以多组件的方式实现, 这个应用就是一个组件化的应用



## 纯函数

1.	一类特别的函数: 只要是同样的输入(实参)，必定得到同样的输出(返回)
2.	必须遵守以下一些约束  
    * 不得改写参数数据
    * 不会产生任何副作用，例如网络请求，输入和输出设备
    * 不能调用Date.now()或者Math.random()等不纯的方法  
3.	redux的reducer函数必须是一个纯函数


## 高阶函数

如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。

1. 若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
2. 若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。

1.	理解: 一类特别的函数
1)	情况1: 参数是函数
2)	情况2: 返回是函数
2.	常见的高阶函数: 
1)	定时器设置函数
2)	数组的forEach()/map()/filter()/reduce()/find()/bind()
3)	promise
4)	react-redux中的connect函数
3.	作用: 能实现更加动态, 更加可扩展的功能

## 高阶组件

和上面的高阶函数差不多，理会即可，常用于装饰器模式。

高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。新的组件使用传入的组件作为子组件。

高阶组件的作用是用于代码复用，可以把组件之间可复用的代码、逻辑抽离到高阶组件当中。新的组件和传入的组件通过 props 传递信息。

高阶组件有助于提高我们代码的灵活性，逻辑的复用性。


## 函数的柯里化

通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。 
```js 
function sum(a){
    return(b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
```

## 虚拟DOM

虚拟DOM最主要的就是，相互比较的最小单位是标签。


![虚拟DOM和Diff算法](/images/react/vdom.png)

## react中key的作用

下面这两个是一个问题。
1. react/vue中的key有什么作用？（key的内部原理是什么？）
2. 为什么遍历列表时，key最好不要用index?

1. 虚拟DOM中key的作用：
    1). 简单的说: key是虚拟DOM对象的标识, 在更新显示时key起着极其重要的作用。
    
    2). 详细的说: 当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】, 随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：

        a. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
                    (1).若虚拟DOM中内容没变, 直接使用之前的真实DOM
                    (2).若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM
        
        b. 旧虚拟DOM中未找到与新虚拟DOM相同的key
                根据数据创建新的真实DOM，随后渲染到到页面
									
2. 用index作为key可能会引发的问题：

    1. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:
                    会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

    2. 如果结构中还包含输入类的DOM：
                    会产生错误DOM更新 ==> 界面有问题。
                    
    3. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，
        仅用于渲染列表用于展示，使用index作为key是没有问题的。
					
3. 开发中如何选择key?:

    1. 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
    2. 如果确定只是简单的展示数据，用index也是可以的。


	 


	 
```html

<script type="text/babel">
	class Person extends React.Component{

		state = {
			persons:[
				{id:1,name:'小张',age:18},
				{id:2,name:'小李',age:19},
			]
		}

		add = ()=>{
			const {persons} = this.state
			const p = {id:persons.length+1,name:'小王',age:20}
			this.setState({persons:[p,...persons]})
		}

		render(){
			return (
				<div>
					<h2>展示人员信息</h2>
					<button onClick={this.add}>添加一个小王</button>
					<h3>使用index（索引值）作为key</h3>
					<ul>
						{
							this.state.persons.map((personObj,index)=>{
								return <li key={index}>{personObj.name}---{personObj.age}<input type="text"/></li>
							})
						}
					</ul>
					<hr/>
					<hr/>
					<h3>使用id（数据的唯一标识）作为key</h3>
					<ul>
						{
							this.state.persons.map((personObj)=>{
								return <li key={personObj.id}>{personObj.name}---{personObj.age}<input type="text"/></li>
							})
						}
					</ul>
				</div>
			)
		}
	}

	ReactDOM.render(<Person/>,document.getElementById('test'))
</script>

```

慢动作回放----使用index索引值作为key

    初始数据：
            {id:1,name:'小张',age:18},
            {id:2,name:'小李',age:19},
    初始的虚拟DOM：
            <li key=0>小张---18<input type="text"/></li>
            <li key=1>小李---19<input type="text"/></li>

    更新后的数据：
            {id:3,name:'小王',age:20},
            {id:1,name:'小张',age:18},
            {id:2,name:'小李',age:19},
    更新数据后的虚拟DOM：
            <li key=0>小王---20<input type="text"/></li>
            <li key=1>小张---18<input type="text"/></li>
            <li key=2>小李---19<input type="text"/></li>

	-----------------------------------------------------------------

慢动作回放----使用id唯一标识作为key

        初始数据：
                {id:1,name:'小张',age:18},
                {id:2,name:'小李',age:19},
        初始的虚拟DOM：
                <li key=1>小张---18<input type="text"/></li>
                <li key=2>小李---19<input type="text"/></li>

        更新后的数据：
                {id:3,name:'小王',age:20},
                {id:1,name:'小张',age:18},
                {id:2,name:'小李',age:19},
        更新数据后的虚拟DOM：
                <li key=3>小王---20<input type="text"/></li>
                <li key=1>小张---18<input type="text"/></li>
                <li key=2>小李---19<input type="text"/></li>