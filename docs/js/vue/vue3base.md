# Vue3笔记

## Vue3简介

- 2020年9月18日，Vue.js发布3.0版本
- github上的tags地址：https://github.com/vuejs/vue-next/releases/tag/v3.0.0

## Vue3的改变

### 性能提升

- 打包大小减少41%，初次渲染快55%, 更新渲染快133%，内存减少54%，当然这些数据是他们官网写的。可能有出入。不必较真。

### 源码升级

1. 使用Proxy代替defineProperty实现响应式。一模一样，Proxy是生成新对象进行操作。defineProperty是在原有对象上操作。
2. 重写虚拟DOM的实现和Tree-Shaking，这个抽去掉不必要的代码功能，webpack也能做，其实就是对vue3里面的内容做了大量的按需引入模式的写法。

### 契合TS
Vue3可以更好的支持TypeScript

### 新功能

1. Composition API（组合API）
   - setup配置
   - ref与reactive
   - watch与watchEffect
   - provide与inject
   - ......
   
2. 新的内置组件
   - Fragment： 可以理解为空标签，跟React的React.Fragment意思一样。
   - Teleport
   - Suspense
   
3. 其他改变

   - 新的生命周期钩子
   - data 选项应始终被声明为一个函数
   - 移除keyCode支持作为 v-on 的修饰符
   - ......

## 怎么用Vue3

### 使用vue-cli

```bash
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
## 启动
cd vue_test
npm run serve
```

### 用vite

vite官网：https://vitejs.cn

简单说一下vite，vite官网介绍有一大堆的优点

- 开发环境中，无需打包操作，可快速的冷启动。
- 轻量快速的热重载（HMR）。
- 真正的按需编译，不再等待整个应用编译完成。

其实跟Webpack对比就一个优点，那就是开发环境按需加载资源文件。
原因如下，设计原理问题。webpack是把通过入口文件，然后找到全部前端路由，然后找到全部的路由对应的组件，统一打包后，启动服务器。
vite是先启动一个服务器，只有程序员进行访问某个路由的时候，才把路由对应的依赖组件，一个一个的编译起来，相当于是动态懒路由的一种变种。

原理图比较，webpack vs vite

![webpack的原理][1] 
![vite原理][2]



```bash
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

### 手动搭建

手动搭建webpack架子，然后引入vue-loader，babel, scss-loader,ts-loader等一堆loader和plugins，然后引入vue3即可。
虽然更加灵活，但是想达到生产水平也够折腾一阵子了，不难，但是就是细节太多。

## 组合(Composition)API

Vue官方认为Vue2的组件，当有大量的methods，，大量的watch，大量的computed，data里面的数据过多的时候，看代码不好看，过于碎片化，于是Vue官方就提案了Vue3的组合式API。
组合式为了增加内聚，减少碎片化而存在。一切的起点是setup。

官网在组合式API引出的方式，`https://v3.cn.vuejs.org/guide/composition-api-introduction.html`

组合式和React的Hook思想近似，但是又不完全一样。

### setup核心


1. Vue3中，新增了一个函数，名字叫做setup。
setup是一切组合式API的基座。
组件的数据和方法均需要卸载setup函数中。
2. 返回值有两种：
- 对象，对象中的属性、方法, 在模板中均可以直接使用。（常用）
- h包裹的渲染函数，作用是自定义渲染内容。（不常用，了解）

3. 注意点：
   - 尽量不要与Vue2.x配置混用
      - Vue2.x配置（data、methods、computed...）中可以访问到setup中的属性、方法。
      - 但在setup中不能访问到Vue2.x配置（data、methods、computed...）。
      - 如果有重名, setup优先。
   - setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。
   
   （后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）

```html 
<template>
  <h1>{{ title }}</h1>
  <button @click="hi">hi方法</button>
</template>
<script>
// import {h} from 'vue'
export default {
  name: "App",
  //此处只是测试一下setup，暂时不考虑响应式的问题。
  setup() {
    //数据
    let title = "100";
    //方法
    function hi() {
      console.log(100);
    }
    //返回一个对象（常用）
    return {
      title,
      hi,
    };
    //返回一个函数（渲染函数）
    // return ()=> h('h1','100')
  },
};
</script>
```


### ref函数

用于定义一个响应式的数据
用法 `const xxx = ref(initValue)`
  - 创建一个包含响应式数据的引用对象（reference对象，简称ref对象）。
  - JS中操作数据： `xxx.value`
  - 模板中读取数据: 不需要.value，直接：`<div>{{xxx}}</div>`
  
- 备注：
  - 接收的数据可以是：基本类型、也可以是对象类型。
  - 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
  - 对象类型的数据：内部求助了Vue3.0中的一个新函数—— `reactive`函数。

### reactive函数

- 作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用`ref`函数）
- 语法：`const 代理对象 = reactive(源对象)`接收一个对象（或数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
- reactive定义的响应式数据是`深层次的`。
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

### 计算属性与监视

### computed函数

- 与Vue2.x中computed配置功能一致

- 写法

```html
<template>
	<h1>一个人的信息</h1>
	姓：<input type="text" v-model="person.firstName">
	<br>
	名：<input type="text" v-model="person.lastName">
	<br>
	<span>全名：{{person.fullName}}</span>
	<br>
	全名：<input type="text" v-model="person.fullName">
</template>

<script>
	import {reactive,computed} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let person = reactive({
				firstName:'张',
				lastName:'三'
			})
			//计算属性——简写（没有考虑计算属性被修改的情况）
			/* person.fullName = computed(()=>{
				return person.firstName + '-' + person.lastName
			}) */

			//计算属性——完整写法（考虑读和写）
			person.fullName = computed({
				get(){
					return person.firstName + '-' + person.lastName
				},
				set(value){
					const nameArr = value.split('-')
					person.firstName = nameArr[0]
					person.lastName = nameArr[1]
				}
			})

			//返回一个对象（常用）
			return {
				person
			}
		}
	}
</script>
```

### watch函数

- 与Vue2.x中watch配置功能一致

- 两个小“坑”：

  - 监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。
  - 监视reactive定义的响应式数据中某个属性时：deep配置有效。
  
```js
    //情况一：监视ref定义的响应式数据
    watch(sum,(newValue,oldValue)=>{
    console.log('sum变化了',newValue,oldValue)
    },{immediate:true})
    
    //情况二：监视多个ref定义的响应式数据
    watch([sum,msg],(newValue,oldValue)=>{
    console.log('sum或msg变化了',newValue,oldValue)
    }) 
    
    /* 情况三：监视reactive定义的响应式数据
            若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
            若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
    */
    watch(person,(newValue,oldValue)=>{
    console.log('person变化了',newValue,oldValue)
    },{immediate:true,deep:false}) //此处的deep配置不再奏效
    
    //情况四：监视reactive定义的响应式数据中的某个属性
    watch(()=>person.job,(newValue,oldValue)=>{
    console.log('person的job变化了',newValue,oldValue)
    },{immediate:true,deep:true}) 
    
    //情况五：监视reactive定义的响应式数据中的某些属性
    watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
    console.log('person的job变化了',newValue,oldValue)
    },{immediate:true,deep:true})
    
    //特殊情况
    watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了',newValue,oldValue)
    },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
```

### watchEffect函数

- watch的套路是：既要指明监视的属性，也要指明监视的回调。

- watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

- watchEffect有点像computed：

  - 但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
  - 而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。

  ```js
  //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.age
      console.log('watchEffect配置的回调执行了')
  })
  ```

### vue自定义hook函数

这与react的hooks并不那么相同。

- 什么是hook？—— 本质是一个函数，把setup函数中使用的Composition API进行了封装。

- 类似于vue2.x中的mixin。

- 自定义hook的优势: 复用代码, 让setup中的逻辑更清楚易懂。

创建一个hook函数，用到了组合API，即可，然后在需要的地方，在setup里面引入即可使用。
```js
import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function () {
  //实现鼠标“打点”相关的数据
  let point = reactive({
    x: 0,
    y: 0
  })

  //实现鼠标“打点”相关的方法
  function savePoint(event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(event.pageX, event.pageY)
  }

  //实现鼠标“打点”相关的生命周期钩子
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
```
使用
```html
<template>
  <h2>我是Test组件</h2>
  <h2>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
</template>

<script>
import usePoint from "../hooks/usePoint";
export default {
  name: "Test",
  setup() {
    const point = usePoint();
    return { point };
  },
};
</script>
```

### toRef

- 作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。
- 语法：```const name = toRef(person,'name')```
- 应用: 要将响应式对象中的某个属性单独提供给外部使用时。

如下所示，在`retrun`里面的`toRef`是把name封装为了ObjectRefImple响应式对象了，同时还指向了reactive具体的key，做到了一份数据多用。

```js
let obj = reactive({
  name: "vue"
});
return {
  name: toRef(obj, 'name') 
}
```


### toRefs

与toRef的功能一模一样，只是可以批量创建多个ref对象。
语法： `toRefs(obj)`

如下所示，toRefs会把obj对象的所有的key变成响应式对象ObjectRefImpl，其中最里面的innerObj会进行Proxy代理响应式等。

如果输出toRefs(obj),

```bash
{
  name: ObjectRefImpl(xxx,..., value: xx ,__ proto: set, get等),
  innerObj: ObjectRefImpl(xxx,..., value: Proxy{a:1, __proto:xxxx},__ proto: set, get等),
}
```

```js
let obj = reactive({
  name: "vue",
  innerObj: {a:1}
});
return {
  ...toRefs(obj) 
}
```

- 扩展：```toRefs``` 与```toRef```功能一致，但可以批量创建多个 ref 对象，语法：```toRefs(person)```


## 其它组合API

### shallowReactive和shallowRef

- shallowReactive：只处理对象最外层属性的响应式（浅响应式）。只考虑第一层数据的响应式。
- shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。如果是基本类型的话，shallowRef和Ref没什么区别。

- 什么时候使用?
  -  如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。
  -  如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。

### readonly与shallowReadonly

- readonly: 让一个响应式数据变为只读的（深只读）。
- shallowReadonly：让一个响应式数据变为只读的（浅只读）。
- 应用场景: 不希望数据被修改时。
比如别人写了一个Hook，用readonly加工后，把数据导出，这样子，任何人用就不能修改。


### toRaw与markRaw

- toRaw：
  - 作用：将一个由`reactive`生成的响应式对象转为普通对象。
  - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
  
  用toRaw包装后，obj会从Proxy变成正常Object对象。
```js
let obj = reactive({

})
console.log(toRaw(obj))  
```
  
- markRaw：
  - 作用：标记一个对象，使其永远不会再成为响应式对象。
  - 应用场景:
    1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
    2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
```js
let obj = reactive({
  
})
let insertObj = {name:'奔驰',price:40, ...} // 假如这个insertObj很多层
obj.insertObj = markRaw(insertObj)
```

### customRef

- 作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。

- 实现防抖效果：

  ```vue
  <template>
  	<input type="text" v-model="keyword">
  	<h3>{{keyword}}</h3>
  </template>
  
  <script>
  	import {ref,customRef} from 'vue'
  	export default {
  		name:'Demo',
  		setup(){
  			// let keyword = ref('hello') //使用Vue准备好的内置ref
  			//自定义一个myRef
  			function myRef(value,delay){
  				let timer
  				//通过customRef去实现自定义
  				return customRef((track,trigger)=>{
  					return{
  						get(){
  							track() //告诉Vue这个value值是需要被“追踪”的
  							return value
  						},
  						set(newValue){
  							clearTimeout(timer)
  							timer = setTimeout(()=>{
  								value = newValue
  								trigger() //告诉Vue去更新界面
  							},delay)
  						}
  					}
  				})
  			}
  			let keyword = myRef('hello',500) //使用程序员自定义的ref
  			return {
  				keyword
  			}
  		}
  	}
  </script>
  ```

  

### provide与inject

![provide](/images/vue/vue3provide.png)


- 作用：实现祖与后代组件间通信

常用于在APP里面写一个方法，或者挂载一个全局函数或者全局对象等，比如挂载HTTP对象，挂载Util对象等。

- 套路：父组件有一个 `provide` 选项来提供数据，后代组件有一个 `inject` 选项来开始使用这些数据

- 具体写法：

1. 祖组件中：

```js
    setup(){
        ......
        let car = reactive({name:'奔驰',price:'40万'})
        provide('car',car)
        ......
    }
```

2. 后代组件中：

```js
    setup(props,context){
        ......
        const car = inject('car')
        return {car}
        ......
    }
```


### 响应式数据的判断

- isRef: 检查一个值是否为一个 ref 对象
- isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
- isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
- isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

## 组合API优势

### Vue2的配置式API存在的问题

使用传统OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 。

![vue2optionapi](/images/vue/vue2optionapi.gif) ![vue2optionapi](/images/vue/vue2optionapi2.gif)

### Vue3组合API优势

我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。
比如把某一块功能全部封装成hook，然后当前组件里面就是一个一个的hook。

![vue3compostionapi](/images/vue/vue3compostionapi.gif) ![vue3compostionapi2](/images/vue/vue3compostionapi2.gif)




[1]: /images/vue/vite01.png
[2]: /images/vue/vite02.png
