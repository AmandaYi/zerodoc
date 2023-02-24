# Vue2和Vue3生命周期对比

## Vue2生命周期

![vue2生命周期](/images/vue/vue2lifecycle.png)

## Vue3生命周期

![vue3生命周期](/images/vue/vue3lifecycle.svg)

## 用法区别

- Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：
  - ```beforeDestroy```改名为 ```beforeUnmount```
  - ```destroyed```改名为 ```unmounted```
- Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
  - `beforeCreate`===>`setup()`
  - `created`=======>`setup()`
  - `beforeMount` ===>`onBeforeMount`
  - `mounted`=======>`onMounted`
  - `beforeUpdate`===>`onBeforeUpdate`
  - `updated` =======>`onUpdated`
  - `beforeUnmount` ==>`onBeforeUnmount`
  - `unmounted` =====>`onUnmounted`

## Vue3生命周期特殊点

### 组合式

组合式生命周期，均在setup里面调用。

### 组合式和配置式执行顺序

顺序是 `组合的setup` -> `配置的beforeCreate` -> `配置的created` 

-> `组合的onBeforeMount` -> `配置的beforeMount` 

-> `组合的onMounted` -> `配置的mounted` 

-> `组合的onBeforeUpdate` -> `配置的beforeUpdate`  

-> `组合的onUpdated` -> `配置的updated`  

-> `组合的onBeforeUnmount` -> `配置的beforeUnmount`  

-> `组合的onUnmounted` -> `配置的unmounted`  

整体规律是，除了beforeCreate和created外，如果某个周期组合和配置的生命周期都写了，那么先执行on开头一类的生命周期，然后才会执行配置里面的生命周期。
