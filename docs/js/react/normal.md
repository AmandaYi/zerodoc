# react基础内容

## 定义组件方式

### 函数组件

```html
<script type="text/babel">
    //1.创建函数式组件
    function MyComponent(){
        console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
        return <h2>我是用函数定义的组件(适用于【简单组件】的定义)</h2>
    }
    //2.渲染组件到页面
    ReactDOM.render(<MyComponent/>,document.getElementById('test'))
    /* 
        执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
                1.React解析组件标签，找到了MyComponent组件。
                2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
    */
</script>
```

		

### 类组件

```html
<script type="text/babel">
    //1.创建类式组件
    class MyComponent extends React.Component {
        render(){
            //render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
            //render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
            console.log('render中的this:',this);
            return <h2>我是用类定义的组件(适用于【复杂组件】的定义)</h2>
        }
    }
    //2.渲染组件到页面
    ReactDOM.render(<MyComponent/>,document.getElementById('test'))
    /* 
        执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
                1.React解析组件标签，找到了MyComponent组件。
                2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
                3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
    */
</script>
```

## state

1. state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)
2. 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)

其他:

1.	组件中render方法中的this为组件实例对象
2.	组件自定义的方法中this为undefined，如何解决？
    - 强制绑定this: 通过函数对象的bind()
    - 箭头函数
3.	状态数据，不能直接修改或更新

代码如下：
```html
<script type="text/babel">
    //1.创建组件
    class Weather extends React.Component{
        //初始化状态
        state = {isHot:false,wind:'微风'}

        render(){
            const {isHot,wind} = this.state
            return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
        }

        //自定义方法————要用赋值语句的形式+箭头函数
        changeWeather = ()=>{
            const isHot = this.state.isHot
            this.setState({isHot:!isHot})
        }
    }
    //2.渲染组件到页面
    ReactDOM.render(<Weather/>,document.getElementById('test'))
</script>
```


## props

### 概念
每个组件对象都会有props(properties的简写)属性，组件标签的所有属性都保存在props中。
### 作用
通过标签属性从组件外向组件内传递变化的数据，组件内部不要修改props数据

```html
<script type="text/babel">
    //创建组件
    class Person extends React.Component{
        render(){
            const {name, age, sex} = this.props
            return (
                <ul>
                    <li>姓名：{name}</li>
                    <li>性别：{sex}</li>
                    <li>年龄：{age+1}</li>
                </ul>
            )
        }
    }
    //渲染组件到页面
    ReactDOM.render(<Person name="tom" age={18} sex="女"/>,document.getElementById('test'))
</script>
```

### 限制props

对props中的属性值进行类型限制和必要性限制，主要是使用PropTypes类进行限制说明。

在React v15.5以前，PropTypes在React身上挂载。PropTypes在后面单独成了一个库`prop-types.js`。

https://github.com/facebook/prop-types

```html
<!-- 引入prop-types，用于对组件标签属性进行限制 -->
<script type="text/javascript" src="../js/prop-types.js"></script>
```

```jsx 
//创建组件
class Person extends React.Component{
    render(){
        // console.log(this);
        const {name,age,sex} = this.props
        //props是只读的
        //this.props.name = 'jack' //此行代码会报错，因为props是只读的
        return (
            <ul>
                <li>姓名：{name}</li>
                <li>性别：{sex}</li>
                <li>年龄：{age+1}</li>
            </ul>
        )
    }
}
//对标签属性进行类型、必要性的限制
Person.propTypes = {
    name:PropTypes.string.isRequired, //限制name必传，且为字符串
    sex:PropTypes.string,//限制sex为字符串
    age:PropTypes.number,//限制age为数值
    speak:PropTypes.func,//限制speak为函数
}
//指定默认标签属性值
Person.defaultProps = {
    sex:'男',//sex默认值为男
    age:18 //age默认值为18
}
```

### props限制简写

因为类身上挂载propTypes或者defaultProps，就相当于是增加了一个类的静态属性。因此，props可以简写为如下。
 
```html
<script type="text/babel">
    //创建组件
    class Person extends React.Component{

        constructor(props){
            //构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
            // console.log(props);
            super(props)
            console.log('constructor',this.props);
        }

        //对标签属性进行类型、必要性的限制
        static propTypes = {
            name:PropTypes.string.isRequired, //限制name必传，且为字符串
            sex:PropTypes.string,//限制sex为字符串
            age:PropTypes.number,//限制age为数值
        }

        //指定默认标签属性值
        static defaultProps = {
            sex:'男',//sex默认值为男
            age:18 //age默认值为18
        }
        
        render(){
            // console.log(this);
            const {name,age,sex} = this.props
            //props是只读的
            //this.props.name = 'jack' //此行代码会报错，因为props是只读的
            return (
                <ul>
                    <li>姓名：{name}</li>
                    <li>性别：{sex}</li>
                    <li>年龄：{age+1}</li>
                </ul>
            )
        }
    }

    //渲染组件到页面
    ReactDOM.render(<Person name="jerry"/>,document.getElementById('test1'))
</script>
```

### props扩展语法糖

原理是react的专有写法，跟ES6的结构对象无任何关系。

```jsx 
const p = {name:'老刘',age:18,sex:'女'}
<Person {...p}/>
```

### 函数使用props

```html
<script type="text/babel">
    //创建组件
    function Person (props){
        const {name,age,sex} = props
        return (
                <ul>
                    <li>姓名：{name}</li>
                    <li>性别：{sex}</li>
                    <li>年龄：{age}</li>
                </ul>
            )
    }
    Person.propTypes = {
        name:PropTypes.string.isRequired, //限制name必传，且为字符串
        sex:PropTypes.string,//限制sex为字符串
        age:PropTypes.number,//限制age为数值
    }

    //指定默认标签属性值
    Person.defaultProps = {
        sex:'男',//sex默认值为男
        age:18 //age默认值为18
    }
    //渲染组件到页面
    ReactDOM.render(<Person name="jerry"/>,document.getElementById('test1'))
</script>
```

## refs
组件内的标签可以定义ref属性来标识自己

1.	字符串形式的ref
`<input ref="input1"/>`

2.	回调形式的ref
`<input ref={c => this.input1 = c }/>`

3.	createRef创建ref容器
React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
```jsx 
myRef = React.createRef()
let c = <input ref={this.myRef}/>
```

## 事件

(1).通过onXxx属性指定事件处理函数(注意大小写)
        a.React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 为了更好的兼容性
        b.React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ————————为了的高效
(2).通过event.target得到发生事件的DOM元素对象 ——————————不要过度使用ref

```html 
<script type="text/babel">
    //创建组件
    class Demo extends React.Component{
        /* 
            (1).通过onXxx属性指定事件处理函数(注意大小写)
                    a.React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 为了更好的兼容性
                    b.React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) ————————为了的高效
            (2).通过event.target得到发生事件的DOM元素对象 ——————————不要过度使用ref
         */
        //创建ref容器
        myRef = React.createRef()
        myRef2 = React.createRef()

        //展示左侧输入框的数据
        showData = (event)=>{
            console.log(event.target);
            alert(this.myRef.current.value);
        }

        //展示右侧输入框的数据
        showData2 = (event)=>{
            alert(event.target.value);
        }

        render(){
            return(
                <div>
                    <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
                    <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
                    <input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>&nbsp;
                </div>
            )
        }
    }
    //渲染组件到页面
    ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('test'))
</script>
```

## 表单组件的分类

### （状态）受控组件
随着输入维护state状态,等到用的时候，直接从状态state中取。
```html
<script type="text/babel">
    //创建组件
    class Login extends React.Component{

        //初始化状态
        state = {
            username:'', //用户名
            password:'' //密码
        }

        //保存用户名到状态中
        saveUsername = (event)=>{
            this.setState({username:event.target.value})
        }

        //保存密码到状态中
        savePassword = (event)=>{
            this.setState({password:event.target.value})
        }

        //表单提交的回调
        handleSubmit = (event)=>{
            event.preventDefault() //阻止表单提交
            const {username,password} = this.state
            alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
        }

        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    用户名：<input onChange={this.saveUsername} type="text" name="username"/>
                    密码：<input onChange={this.savePassword} type="password" name="password"/>
                    <button>登录</button>
                </form>
            )
        }
    }
    //渲染组件
    ReactDOM.render(<Login/>,document.getElementById('test'))
</script>
```
### （状态）非受控组件
现用现取，提交的时候用ref取
```html 
<script type="text/babel">
    //创建组件
    class Login extends React.Component{
        handleSubmit = (event)=>{
            event.preventDefault() //阻止表单提交
            const {username,password} = this
            alert(`你输入的用户名是：${username.value},你输入的密码是：${password.value}`)
        }
        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    用户名：<input ref={c => this.username = c} type="text" name="username"/>
                    密码：<input ref={c => this.password = c} type="password" name="password"/>
                    <button>登录</button>
                </form>
            )
        }
    }
    //渲染组件
    ReactDOM.render(<Login/>,document.getElementById('test'))
</script>
```


