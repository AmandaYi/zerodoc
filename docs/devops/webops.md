# VUE，React等纯静态文件页面的持续集成发布

:::info
这里强调一点事情，这不是完整的CICD流程。
:::

适用范围：
1. 前端纯静态页面类的项目
2. 个人网站类或者个人技术类项目
3. DevOps流程不完整或者完全没有的，是可以用来减轻发版流程，比如减轻每次发版都需要登录SSH，然后在服务器处理复制，构建等重复性操作。
4. 不需要版本回退功能。
5. 可以理解为只要不是SSR的前端项目都可以使用。

不适用范围:

认真斟酌。 

## 核心思路

通过本地或者其他git服务器，把构建好的静态文件，推送到生产服务器。

步骤： 
1. 存放构建好的静态文件整个文件夹统一上传到远程的指定文件夹。
2. 把配置项写好。
3. 核心代码。注意检查服务器是否允许要使用的账号SSH远程登录

```javascript
// 文件SSH交互包
let Client = require('ssh2-sftp-client');
// 初始化实例
this.sftp = new Client();
// 初始配置
this.sftp.connect({
			host: "", // ip
			port: "", // SSH端口
			username: "", // 远程SSH用户名，注意检查服务器是否允许要使用的账号SSH远程登录
			password: "" // 远程SSH密码
		});
// 调用文件夹上传的方法
this.sftp.uploadDir(localPath, remotePath)
```

## 完整代码

```yaml title="application.yml"
serverConfig:
  host: 
  port: 
  username: 
  password: 
```

```javascript
#! /bin/node
// 脚本作用：build里面的文件自动传到服务器里面
const path = require("path");
let Client = require('ssh2-sftp-client');

const yml = require("yml");
const yargs = require("yargs/yargs");
const {hideBin} = require('yargs/helpers');

// 想要上传的静态文件所在的文件夹
// 一般Vue和React构建完毕都在build目录，这里举例如下：
let localPath = "";
localPath = path.resolve(__dirname, "build");
// 远程文件夹的存放位置，最好绝对路径
let remotePath = "";
// 声明上传文件服务类
class PushServer {
	// 服务实例
	sftp;
	// 是否删除远程的文件夹
	isRmdir = false;
	// SSH配置
	serverConfig;
	
	// 初始化配置
	constructor() {
		this.sftp = new Client();
		let applicationConfig = yml.load("application.yml");
		this.serverConfig = applicationConfig.serverConfig;
	}
	// 初始配置项目
	initConfig() {
		const argv = yargs(hideBin(process.argv)).argv;
		if (argv.rmdir) { // 0 false, 都是false, 不写值默认true
			this.isRmdir = true;
		}
	}
	// 推送需要推送的文件夹到远程文件夹
	// 具体操作，根据命令行里面的rmdir参数配置，可选的把远程的文件夹清空或者不清空
	async publicDoc() {
		await this.sftp.connect({
			host: this.serverConfig.host,
			port: this.serverConfig.port,
			username: this.serverConfig.username,
			password: this.serverConfig.password
		});
		if (await this.sftp.exists(remotePath)) {
			let stat = await this.sftp.stat(remotePath);
			if (stat.isDirectory) {
				if (this.isRmdir) {
					await this.sftp.rmdir(remotePath, true);
				}
			}
			this.sftp.on('upload', info => {
				console.log(`正在上传: ${info.source} ---> ${JSON.stringify(info)}`);
			});
			await this.sftp.uploadDir(localPath, remotePath)
		}
		this.sftp.end();
	}

	main() {
		this.initConfig();
		this.publicDoc();
	}

}
// 调用
new PushServer().main();
```


## 执行调用

可以选择配置package.json脚本

1. pushbuild: 直接覆盖上传
2. pushbuildWidthRmdir: 先删除远程文件夹的内容，再上传本地资源

```json
{
"scripts": {
     "build": "build",
     "pushbuild": "node pushServer.js",
     "pushbuildWidthRmdir": "node pushServer.js --rmdir=true"
   }
}
```