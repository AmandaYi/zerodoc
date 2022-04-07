# 调整与优化

## loader顺序

## webpack自身兼容IE
在有时候，大家会为了让自己写的JS代码（没说CSS）兼容IE浏览器，增加`@babel/preset-env`和`core.js`包，然后设置`target`打包目标进行代码兼容IE老版本浏览器。
我举个例子:
在webpack打包的loader里面，兼容IE的JS一般这么写。
```
modules: {
}
```

##  