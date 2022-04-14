#! /bin/node
// 脚本作用：build里面的文件自动传到服务器里面
const path = require("path")
let Client = require('ssh2-sftp-client');
let sftp = new Client();
const yml = require("yml");

let {serverConfig} = yml.load("application.yml")

let localPath = path.resolve(__dirname, "..", "build");
let remotePath = "/mnt/sdb/wwwroot/www.baby8013.com"

async function main() {
    await sftp.connect({
        host: serverConfig.host,
        port: serverConfig.port,
        username: serverConfig.username,
        password: serverConfig.password
    });
    if(await sftp.exists(remotePath)) {
        let stat = await sftp.stat(remotePath);
        if (stat.isDirectory) {
            await sftp.rmdir(remotePath, true);
        }
        sftp.on('upload', info => {
            console.log(`正在上传: ${info.source} ---> ${JSON.stringify(info)}`);
        })
        await sftp.uploadDir(localPath, remotePath)
    }


    sftp.end();
}

main();
