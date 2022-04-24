# 调整与优化

## loader顺序

## webpack自身兼容IE
在有时候，大家会为了让自己写的JS代码（没说CSS）兼容IE浏览器，增加`@babel/preset-env`和`core.js`包，然后设置`target`打包目标进行代码兼容IE老版本浏览器。
我举个例子:

在webpack打包的loader里面，兼容IE的JS一般这么写。

```
modules: {
    // 指定要加载的规则
    rules: [
        {
            // test指定的是规则生效的文件
            test: /\.ts$/,
            // 要使用的loader
            use: [
                 // 配置babel
                 {
                     // 指定加载器
                     loader:"babel-loader",
                     // 设置babel
                     options: {
                         // 设置预定义的环境
                         presets:[
                             [
                                 // 指定环境的插件
                                 "@babel/preset-env",
                                 // 配置信息
                                 {
                                     // 要兼容的目标浏览器
                                     targets:{
                                         "chrome":"58",
                                         "ie":"11"
                                     },
                                     // 指定corejs的版本
                                     "corejs":"3",
                                     // 使用corejs的方式 "usage" 表示按需加载
                                     "useBuiltIns":"usage"
                                 }
                             ]
                         ]
                     }
                 },
                'ts-loader'
            ],
            // 要排除的文件
            exclude: /node-modules/
        }
    ]
}
```

## 进行打包后的代码预览


