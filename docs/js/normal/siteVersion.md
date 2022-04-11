# webpack添加版权声明

## BannerPlugin插件
在工作中每个人写的代码都要写上备注，为的就是在发生问题时可以找到当时写代码的人。有时候也用于版权声明。
这个插件就是`BannerPlugin`，我们使用后会在JS中加上我们的版权或开发者声明。

```javascript
const webpack = require('webpack');
module.exports = {
	plugins: [
		new webpack.BannerPlugin('baby8013.com')
	]
} 
```
这时在打包后的文件已经加上了版权声明。
