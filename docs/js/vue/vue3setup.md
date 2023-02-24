# vue3的setup特点

## setup执行的时机

在beforeCreate之前执行一次，this是undefined。
  
## setup的参数

1. props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
2. context：上下文对象
    - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 `this.$attrs`。
    - slots: 收到的插槽内容, 相当于 `this.$slots`。
    - emit: 分发自定义事件的函数, 相当于 `this.$emit`。一定要先声明`emits`。

```html
<template>
  <TestWithSetup @setupDiyEvent="diyEvent" title="vue3">
    <template v-slot:version>
      <span>3.xxxxxx</span>
    </template>
  </TestWithSetup>
</template>

<script>
import TestWithSetup from "./components/TestWithSetup";
export default {
  name: "App",
  components: { TestWithSetup },
  setup() {
    function diyEvent(value) {
      console.log("value: ", value);
    }
    return {
      diyEvent,
    };
  },
};
</script>
```

```html
<template>
  <div>{{ title }}</div>
  <button @click="test">点我调用context.emit("setupDiyEvent")</button>
</template>

<script>
export default {
  name: "TestWithSetup",
  props: ["title"],
  emits: ["setupDiyEvent"],
  setup(props, context) {
    console.log("setup: ", props);
    console.log("setup: ", context);
    console.log("setup: ", context.attrs); // 相当于vue2中的$attrs,attrs的意思是如果props没有声明，那么会把对应的未在props声明的字段，存到attrs里面。
    console.log("setup: ", context.emit); // 相当于vue2中的this.$emit()，用于触发自定义事件
    console.log("setup: ", context.slots); // 相当于vue2的插槽属性this.slots
    const test = () => {
      context.emit("setupDiyEvent", 100);
    };
    return { test };
  },
};
</script>
```
