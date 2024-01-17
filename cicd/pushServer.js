#! /bin/node
// require("events").EventEmitter.defaultMaxListeners = 0;

/**
 * 项目根目录需要的配置文件格式application.yml
 * serverConfig:
 *   remotePath: /xxx
 * host: xxx
 * port: 22
 * username: xxx
 * password: xxx
 */

process.on('warning', e => console.warn(e.stack))
// 不限制监听数量
process.setMaxListeners(0)

// 脚本作用：build里面的文件自动传到服务器里面
const path = require("path");
let Client = require('ssh2-sftp-client');

const yml = require("yml");
const yargs = require("yargs/yargs");
const {hideBin} = require('yargs/helpers');

// 想要上传的静态文件所在的文件夹
let localPath = path.resolve(__dirname, "..", "build");
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
		remotePath = applicationConfig.serverConfig.remotePath;
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
