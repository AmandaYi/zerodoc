#! /bin/node
// 脚本作用：build里面的文件自动传到服务器里面
const path = require("path")
let Client = require('ssh2-sftp-client');

const yml = require("yml");
const yargs = require("yargs/yargs");
const {hideBin} = require('yargs/helpers')

let localPath = path.resolve(__dirname, "..", "build");
let remotePath = "/mnt/sdb/wwwroot/www.baby8013.com"

class PushServer {
	sftp;
	isRmdir = false;
	serverConfig;

	constructor() {
		this.sftp = new Client();
		let applicationConfig = yml.load("application.yml");
		this.serverConfig = applicationConfig.serverConfig;
	}

	initConfig() {
		const argv = yargs(hideBin(process.argv)).argv
		if (argv.rmdir) { // 0 false, 都是false, 不写值默认true
			this.isRmdir = true;
		}
	}

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
			})
			await this.sftp.uploadDir(localPath, remotePath)
		}
		this.sftp.end();
	}

	main() {
		this.initConfig();
		this.publicDoc();
	}

}

new PushServer().main();