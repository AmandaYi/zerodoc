# Vue3新的组件

## Fragment

- 在Vue2中: 组件必须有一个根标签
- 在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中
- 好处: 减少标签层级, 减小内存占用

## Teleport

- 什么是Teleport？—— `Teleport` 是一种能够将我们的组件html结构移动到指定位置的技术。

```html
<teleport to="body"> // to就是移动的位置，可以是id，可以是className，可以是标签等等。
<div v-if="isShow" class="mask">
    <div class="dialog">
        <h3>我是一个弹窗</h3>
        <button @click="isShow = false">关闭弹窗</button>
    </div>
</div>
</teleport>
```

## Suspense

- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验

- 使用步骤：

- 异步引入组件

```js
import {defineAsyncComponent} from 'vue'
const AAA = defineAsyncComponent(()=>import('./components/AAA.vue'))
```

- 使用```Suspense```包裹组件，并配置好```default``` 与 ```fallback```

```vue
<template>
    <div class="app">
        <h3>我是App组件</h3>
        <Suspense>
            <template v-slot:default>
                <Child/>
            </template>
            <template v-slot:fallback>
                <h3>加载中.....</h3>
            </template>
        </Suspense>
    </div>
</template>
```
如上的异步引入的列子，这个时候，就可以在AAA组件里面的setup增加async修饰，并返回Promise对象
```bash
async setup(){
  let a = ref(100)
  let p = new Promise((resolve) => {
    resolve({a})
  })
  return await p;
}
```

