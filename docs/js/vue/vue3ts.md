# Vue3项目TS

## 配置上

主要是全局声明Vue的类型定义文件。

`xxx.d.ts`

```typescript
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


```

然后在`tsconfig`里面配置当前类型定义文件

```js
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
```

`devDependencies`增加依赖`typescript`;


## 使用上

在其他具体业务地方，就是按照Vue3推荐的类型推到配置即可。

具体官网参考：

`https://v3.cn.vuejs.org/guide/typescript-support.html`

