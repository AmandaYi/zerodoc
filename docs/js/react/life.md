# react全版本生命周期

1.	组件从创建到死亡它会经历一些特定的阶段。
2.	React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。
3.	我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。

## 任何版本都重要的周期

1.	render：初始化渲染或更新渲染调用
2.	componentDidMount：开启监听, 发送ajax请求
3.	componentWillUnmount：做一些收尾工作, 如: 清理定时器

## 弃用的

react17，react18等等后，后面弃用的钩子。

1.	componentWillMount
2.	componentWillReceiveProps
3.	componentWillUpdate

现在使用会出现警告，下一个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用。

## 16.8以前

生命周期的三个阶段（旧）

初始化阶段: 由ReactDOM.render()触发---初次渲染

1.	constructor()
2.	componentWillMount()
3.	render()
4.	componentDidMount() =====> 常用一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
    
更新阶段: 由组件内部this.setSate()或父组件重新render触发

1.	shouldComponentUpdate()
2.	componentWillUpdate()
3.	render() =====> 必须使用的一个
4.	componentDidUpdate()
    
卸载组件: 由ReactDOM.unmountComponentAtNode()触发

1.	componentWillUnmount()  =====> 常用一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

![16.8生命周期](/images/react/life16.8.png)

```html
<script type="text/babel">
    /* 
            1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
                                1.	constructor()
                                2.	componentWillMount()
                                3.	render()
                                4.	componentDidMount() =====> 常用
                                                一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
            2. 更新阶段: 由组件内部this.setSate()或父组件render触发
                                1.	shouldComponentUpdate()
                                2.	componentWillUpdate()
                                3.	render() =====> 必须使用的一个
                                4.	componentDidUpdate()
            3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
                                1.	componentWillUnmount()  =====> 常用
                                                一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
    */
    //创建组件
    class Count extends React.Component{

        //构造器
        constructor(props){
            console.log('Count---constructor');
            super(props)
            //初始化状态
            this.state = {count:0}
        }

        //加1按钮的回调
        add = ()=>{
            //获取原状态
            const {count} = this.state
            //更新状态
            this.setState({count:count+1})
        }

        //卸载组件按钮的回调
        death = ()=>{
            ReactDOM.unmountComponentAtNode(document.getElementById('test'))
        }

        //强制更新按钮的回调
        force = ()=>{
            this.forceUpdate()
        }

        //组件将要挂载的钩子
        componentWillMount(){
            console.log('Count---componentWillMount');
        }

        //组件挂载完毕的钩子
        componentDidMount(){
            console.log('Count---componentDidMount');
        }

        //组件将要卸载的钩子
        componentWillUnmount(){
            console.log('Count---componentWillUnmount');
        }

        //控制组件更新的“阀门”
        shouldComponentUpdate(){
            console.log('Count---shouldComponentUpdate');
            return true
        }

        //组件将要更新的钩子
        componentWillUpdate(){
            console.log('Count---componentWillUpdate');
        }

        //组件更新完毕的钩子
        componentDidUpdate(){
            console.log('Count---componentDidUpdate');
        }

        render(){
            console.log('Count---render');
            const {count} = this.state
            return(
                <div>
                    <h2>当前求和为：{count}</h2>
                    <button onClick={this.add}>点我+1</button>
                    <button onClick={this.death}>卸载组件</button>
                    <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
                </div>
            )
        }
    }
    
    //父组件A
    class A extends React.Component{
        //初始化状态
        state = {carName:'奔驰'}

        changeCar = ()=>{
            this.setState({carName:'奥拓'})
        }

        render(){
            return(
                <div>
                    <div>我是A组件</div>
                    <button onClick={this.changeCar}>换车</button>
                    <B carName={this.state.carName}/>
                </div>
            )
        }
    }
    
    //子组件B
    class B extends React.Component{
        //组件将要接收新的props的钩子
        componentWillReceiveProps(props){
            console.log('B---componentWillReceiveProps',props);
        }

        //控制组件更新的“阀门”
        shouldComponentUpdate(){
            console.log('B---shouldComponentUpdate');
            return true
        }
        //组件将要更新的钩子
        componentWillUpdate(){
            console.log('B---componentWillUpdate');
        }

        //组件更新完毕的钩子
        componentDidUpdate(){
            console.log('B---componentDidUpdate');
        }

        render(){
            console.log('B---render');
            return(
                <div>我是B组件，接收到的车是:{this.props.carName}</div>
            )
        }
    }
    
    //渲染组件
    ReactDOM.render(<Count/>,document.getElementById('test'))
</script>
```


## 17.0开始


生命周期的三个阶段（新）

初始化阶段: 由ReactDOM.render()触发---初次渲染

1.	constructor()
2.	getDerivedStateFromProps 
3.	render()
4.	componentDidMount()=====> 常用一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息

更新阶段: 由组件内部this.setSate()或父组件重新render触发

1.	getDerivedStateFromProps
2.	shouldComponentUpdate()
3.	render()
4.	getSnapshotBeforeUpdate
5.	componentDidUpdate()
 
卸载组件: 由ReactDOM.unmountComponentAtNode()触发

1.	componentWillUnmount() =====> 常用一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

![17生命周期](/images/react/life17.png)

```html 
<script type="text/babel">
    //创建组件
    class Count extends React.Component{
        /* 
            1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
                            1.	constructor()
                            2.	getDerivedStateFromProps 
                            3.	render()
                            4.	componentDidMount() =====> 常用
                                        一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
            2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
                            1.	getDerivedStateFromProps
                            2.	shouldComponentUpdate()
                            3.	render()
                            4.	getSnapshotBeforeUpdate
                            5.	componentDidUpdate()
            3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
                            1.	componentWillUnmount()  =====> 常用
                                        一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
        */
        //构造器
        constructor(props){
            console.log('Count---constructor');
            super(props)
            //初始化状态
            this.state = {count:0}
        }

        //加1按钮的回调
        add = ()=>{
            //获取原状态
            const {count} = this.state
            //更新状态
            this.setState({count:count+1})
        }

        //卸载组件按钮的回调
        death = ()=>{
            ReactDOM.unmountComponentAtNode(document.getElementById('test'))
        }

        //强制更新按钮的回调
        force = ()=>{
            this.forceUpdate()
        }
        
        //若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
        static getDerivedStateFromProps(props,state){
            console.log('getDerivedStateFromProps',props,state);
            return null
        }

        //在更新之前获取快照
        getSnapshotBeforeUpdate(){
            console.log('getSnapshotBeforeUpdate');
            return 'atguigu'
        }

        //组件挂载完毕的钩子
        componentDidMount(){
            console.log('Count---componentDidMount');
        }

        //组件将要卸载的钩子
        componentWillUnmount(){
            console.log('Count---componentWillUnmount');
        }

        //控制组件更新的“阀门”
        shouldComponentUpdate(){
            console.log('Count---shouldComponentUpdate');
            return true
        }

        //组件更新完毕的钩子
        componentDidUpdate(preProps,preState,snapshotValue){
            console.log('Count---componentDidUpdate',preProps,preState,snapshotValue);
        }
        
        render(){
            console.log('Count---render');
            const {count} = this.state
            return(
                <div>
                    <h2>当前求和为：{count}</h2>
                    <button onClick={this.add}>点我+1</button>
                    <button onClick={this.death}>卸载组件</button>
                    <button onClick={this.force}>不更改任何状态中的数据，强制更新一下</button>
                </div>
            )
        }
    }
    
    //渲染组件
    ReactDOM.render(<Count count={199}/>,document.getElementById('test'))
</script>
```

### getSnapshotBeforeUpdate正确使用

比如在页面更新之前，记录上一次的滚动位置，把上一次的值传给最后的`componentDidUpdate`钩子，然后滚动对应距离，实现记录上一次位置。

```html 
<script type="text/babel">
    class NewsList extends React.Component{

        state = {newsArr:[]}

        componentDidMount(){
            setInterval(() => {
                //获取原状态
                const {newsArr} = this.state
                //模拟一条新闻
                const news = '新闻'+ (newsArr.length+1)
                //更新状态
                this.setState({newsArr:[news,...newsArr]})
            }, 1000);
        }

        getSnapshotBeforeUpdate(){
            return this.refs.list.scrollHeight
        }

        componentDidUpdate(preProps,preState,height){
            this.refs.list.scrollTop += this.refs.list.scrollHeight - height
        }

        render(){
            return(
                <div className="list" ref="list">
                    {
                        this.state.newsArr.map((n,index)=>{
                            return <div key={index} className="news">{n}</div>
                        })
                    }
                </div>
            )
        }
    }
    ReactDOM.render(<NewsList/>,document.getElementById('test'))
</script>
``` 
