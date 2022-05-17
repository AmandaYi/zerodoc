# 金山文档在线预览编辑服务接入实现

一般而言，对于接入第三方类的服务，需要的主要流程是认证，请求接口，实现回调。其中，认证和请求接口一般都很简单，实现回调这块略微复杂一些。

## 整体步骤

1. 在金山开发文档的网页创建应用，用于得到认证的key。

2. 前端接入。前端引入一个金山的sdk.js代码，然后从自己的服务器返回一个文件地址，作为参数，初始化金山里面的sdk入口函数。

3. 服务端接入。
    主要实现四个方面的接口。
    这些都是：回调接口，让金山的文档服务器主动调用的接口。

    1. 文档预览方面专用接口
    2. 文档编辑方面专用接口
    
    :::tip
      文档预览和文档编辑公用这俩回调接口，分别是第一个是最主要的，指的是获取文件元数据，在预览和编辑的时候，通过接口校验并获取文件信息。
      另一个是打开文件时返回通知的回调接口。
    :::
    
    3. 文档新建方面专用接口
        - 新建文件， 通过前端网页上的文档模板新建时候，需要提供的接口。

    4. 上面三个方面均实现的接口，
    
        - 获取用户信息，指的是在编辑的时候获取编辑过此文件的用户信息，展示在网页的协作记录里面
        - 上传文件新版本，指的是编辑的时候把文件保存到网盘，比如七牛云
        - 通知文件有哪些人正在协作编辑，指的是编辑的时候把正在编辑文档的人的列表返回给前端用来展示。
        - 获取特定版本的文件信息，指的是获取历史版本的文件信息，主要用于回滚操作
        - 文件重命名，指的是某个用户具有重命名权限时，重命名时调用的接口。
        - 获取所有版本文件文件信息，指的是把当前的文件的所有历史版本作为列表返回。
        
4. 根据自己的业务，一般需要实现的接口。

核心的是，

服务器下发一个WPS的文档链接。只需要这一个接口，就能完成全部内容交互了。

其他业务辅助接口为，比如展示已有文件列表，新建文档文件上传后返回一个WPS在线文档链接。
这类辅助接口基本上属于业务上的，跟核心交互接口基本无关。

## 库设计

### 1. 文档主表

|     字段名        |     类型         |      说明      |
| :--------------: | :--------------: | :--------------: |
| uuid             | char(36)         | 主键 |
| file_id          | varchar(255)     | 文件标记id，主要是让其他表关联查询用。 |
| file_name        | varchar(255)     | 最新的文件名 |
| version          | varchar(100)     | 最新的文件版本记录 |
| file_size        | int(11)          | 最新文件大小，单位KB  |
| create_id        | varchar(255)     | 第一次创建人 |
| create_time      | varchar(255)     | 第一次创建时间 |
| maintainer_id    | varchar(255)     | 最后一次维护人 |
| maintainer_time  | varchar(255)     | 最后一次维护时间 |
| download_url     | varchar(10000)   | 最新的文档下载地址，比如七牛云下载地址 |
| delete           | enum('YES', 'NO') | 是否已经删除的文件，这就跟业务有关了，如果删除那么不展示给前端了。 |

```sql
-- 表结构，名字任取，比如`z_file`

CREATE TABLE `z_file` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `file_id` varchar(255) DEFAULT '',
  `file_name` varchar(255) DEFAULT '',
  `version` varchar(100) DEFAULT '1',
  `file_size` int(11) DEFAULT '0',
  `create_id` varchar(255) DEFAULT '',
  `create_time` varchar(255) DEFAULT '',
  `maintainer_id` varchar(255) DEFAULT '',
  `maintainer_time` varchar(255) DEFAULT '',
  `download_url` varchar(10000) DEFAULT '',
  `delete` enum('YES','NO') NOT NULL DEFAULT 'NO',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 设置主键
ALTER TABLE `z_file`
  ADD PRIMARY KEY (`uuid`);
COMMIT;

```
### 2. 文档版本历史表

|     字段名        |     类型         |      说明      |
| :--------------: | :--------------: | :--------------: |
| uuid             | char(36)         | 主键 |
| file_id          | varchar(255)     | 该文档对应的文档标记id，指的是最新文档表的唯一文件id。 |
| file_version_id  | varchar(255)     | 当前文档版本的文档id，主要是不可以用文件名去区分版本，每次版本变更后，需要生成一个新的随机串，用来标识本次版本的文档id，也为了方便操作。 |
| file_name        | varchar(255)     | 该文档版本的文件名 |
| version          | varchar(100)     | 记录自己是第几个版本，为了区分。 |
| file_size        | int(11)          | 记录本次版本的文件大小，单位KB  |
| create_id        | varchar(255)     | 创建文档的人，一般为第一个文档创建者的id。为了方便查询，作用和文档主表的同名字段意义一样。|
| create_time      | varchar(255)     | 创建文档的人，一般为第一个文档创建者的id。为了方便查询，作用和文档主表的同名字段意义一样。 |
| maintainer_id    | varchar(255)     | 最后一次维护人。为了方便查询，作用和文档主表的同名字段意义一样。 |
| maintainer_time  | varchar(255)     | 最后一次维护时间。为了方便查询，作用和文档主表的同名字段意义一样。 |
| download_url     | varchar(10000)   | 当前文档版本的下载地址，比如七牛云下载地址 |

```sql 
-- 表结构，名字任取，比如`z_file_version`

CREATE TABLE `z_file_version` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `file_id` varchar(255) DEFAULT '',
  `file_version_id` varchar(255) DEFAULT '',
  `file_name` varchar(255) DEFAULT '',
  `version` varchar(100) DEFAULT '1',
  `download_url` varchar(10000) DEFAULT '',
  `file_size` int(11) DEFAULT '0',
  `create_id` varchar(255) DEFAULT '',
  `create_time` varchar(255) DEFAULT '',
  `maintainer_id` varchar(255) DEFAULT '',
  `maintainer_time` varchar(255) DEFAULT '',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 设置主键
ALTER TABLE `z_file_version`
  ADD PRIMARY KEY (`uuid`);
COMMIT;

```

### 3. 文档权限表

|     字段名        |     类型         |      说明      |
| :--------------: | :--------------: | :--------------: |
| uuid             | char(36)         | 主键 |
| user_id          | varchar(255)     | 用户id |
| file_id          | varchar(255)     | 文档的id|
| permission       | varchar(255)     | 当前用户访问权限，两个值read或者write |
| rename           | varchar(100)     | 判断用户是否具有重命名权限，1启用，0关闭 |
| history          | varchar(100)     | 判断用户是否有查看历史版本的权限，1启用，0关闭  |
| copy             | varchar(100)     | 复制按钮权限，1启用，0关闭|
| export           | varchar(100)     | 导出按钮权限，1启用，0关闭 |
| print            | varchar(100)     | 打印按钮权限，1启用，0关闭 |

```sql 

-- 表结构，名字任取，比如`z_file_acl`

CREATE TABLE `z_file_acl` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `user_id` varchar(255) DEFAULT '',
  `file_id` varchar(255) DEFAULT '',
  `permission` varchar(255) DEFAULT 'read',
  `rename` varchar(100) DEFAULT '0',
  `history` varchar(100) DEFAULT '0',
  `copy` varchar(100) DEFAULT '0',
  `export` varchar(100) DEFAULT '0',
  `print` varchar(100) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 设置主键
ALTER TABLE `z_file_acl`
  ADD PRIMARY KEY (`uuid`);
COMMIT;

```
### 4. 文档水印表

:::tip
文档水印功能其实可有可无，但是为了功能完整，需要设置文档水印维护的表
::: 

|     字段名        |     类型         |      说明      |
| :--------------: | :--------------: | :--------------: |
| uuid             | char(36)         | 主键 |
| file_id          | varchar(255)     | 文档的id|
| type_name        | varchar(255)     | 水印类型， 0为无水印； 1为文字水印 |
| mark_value       | varchar(100)     | 文字水印的文字，当type为1时，此字段必填 |
| fillstyle        | varchar(100)     | 水印的透明度，非必填，有默认值  |
| font             | varchar(100)     | 水印的字体，非必选，有默认值|
| rotate           | double(10,2)	  | 水印的旋转度，非必填，有默认值 |
| horizontal       | double(10,2)	  | 水印水平间距，非必填，有默认值 |
| vertical         | double(10,2)	  | 水印垂直间距，非必填，有默认值 |

```sql 

-- 表结构，名字任取，比如`z_file_watermark`

CREATE TABLE `z_file_watermark` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `file_id` varchar(255) DEFAULT '',
  `type_name` int(11) DEFAULT '0',
  `mark_value` varchar(255) DEFAULT '',
  `fillstyle` varchar(255) DEFAULT '',
  `font` varchar(255) DEFAULT '',
  `rotate` double(10,2) DEFAULT '0.00',
  `horizontal` double(10,2) DEFAULT '0.00',
  `vertical` double(10,2) DEFAULT '0.00',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 设置主键
ALTER TABLE `z_file_watermark`
  ADD PRIMARY KEY (`uuid`);
COMMIT;

```

### 5. 用户表

用户表跟在线编辑文档的关系不大，实际业务中，使用用户id去查一下用户的基本信息。
用户要有以下几个字段。

必要字段为`id`和`name`，非必要的字段是用户头像。`avatar_url`

    - id, 字符串长度小于 32，必要的
    - name， 用户名，必要的
    - avatar_url 用户头像，非必要的。

```sql
CREATE TABLE `z_user` ( 
  `id` INT(11) NOT NULL AUTO_INCREMENT , 
  `name` VARCHAR(100) NOT NULL , 
  `avatar_url` VARCHAR(100) NOT NULL , 
  PRIMARY KEY (`id`)) ENGINE = InnoDB DEFAULT CHARSET=utf8mb4;
```

往表里插入下面两行数据

```json
[
  {"id":"1", "name": "用户1","avatar_url": ""},
  {"id":"2", "name": "用户2","avatar_url": ""}
]
```
```sql 
INSERT INTO `z_user` (`id`, `name`, `avatar_url`) VALUES
(1, '用户1', ''),
(2, '用户2', '');
```


## 具体实现

## 业务接口实现

以下均不涉及token，自身业务的token和wps服务器请求时候的token，均可以全局处理，以下均不处理token问题。

### 业务1新建文档

新建文档，并获得在线编辑的链接

使用id=1的用户，上传到服务器一个文档，赋予权限为可读可写权限（Read/Write）。

接收到上传的文件流后，生成一个file_id，然后上传到七牛云云存储，获取七牛云的文件下载链接，然后把数据持久化，持久化file表，fileAcl表，版本表。

### 业务2文档列表

查询file表，单表查询

分页查询file表，把file表的一些字段都返回即可。


### 业务3根据fileId查找在线编辑链接

根据文件id，请求服务器得到下发的wps链接。

使用用户id和文件id作为参数，请求服务器，服务器根据参数进行签名，拼装为一个wps在线编辑的链接。

url 规范：https://wwo.wps.cn/office/<:type>/<:fileid>?_w_appid=xxx&_w_signature=xxx&…(对接模块需要的自定义参数)

编写生成WPS在线编辑的链接逻辑如下函数`getWpsUrl`

```javascript
// 配置文件
// appid 与 appkey获取途径:
// WPS 开放平台 -> 服务申请 -> 进入服务（金山文档在线编辑） -> 申请添加新应用 -> 审核通过
const wpsConfig = {
    appid: "",
    appsecret: "",
    domain: "https://wwo.wps.cn/",
}
// 把所有的参数进行签名加密，生成一个前面字符串
function sign(kvList = [], secretKey = ""){
  // 将 _w_secretkey 加到最后，得到待加密的字符（_w_secretkey 只在签名时加入）。
  let v = kvList.join("") + "_w_secretkey=" + secretKey;
  // hmac-sha1 加密
  // 使用 HMAC-SHA1 哈希算法，使用注册的 appsecret 密钥对上一步骤的源字符串进行加密。
  // NodeJS自带的算法。只要是hmac sha1 签名即可，
  return crypto.createHmac("sha1", secretKey).update(v).digest()
                // 将加密后的字符串经过 Base64 编码
                .toString('base64');
}
// 根据传入的参数，格式化一个url
function getWpsUrl(data = {_w_fileId: ""}, extraData = {fileType: ""}) {
	let result = "";	
    data._w_appid = wpsConfig.appid;// 必要的参数
    // 这里强制设置为1的原因是需要判断token，如果不需要判断token，那么设置为0即可
    data._w_tokentype = 1;

    // 键值对列表
    let kvList = [];
    kvList = Object.keys(data)
               // 找到_w_开头的参数，需要进行签名，其他非法传入的参数不需要
              .filter(k => k.indexOf("_w_") === 0)
               // 将以 _w_ 作为前缀所有参数按 key 进行字典升序排列，
              .sort((a, b) => a.localeCompare(b))
              // 将排序后的 key、value 字符串以 %s=%s 格式拼接起来
              .map(k => (k + "=" + data[k]));

    let secretKey = wpsConfig.appsecret;    
    //  进行签名
    let hmacSha1Sign = sign(kvList, secretKey);
    // 对签名进行URL转码
    hmacSha1Sign = encodeURIComponent(hmacSha1Sign);
    let domain = wpsConfig.domain;
    let fileType = extraData.fileType;
    let fileId = data._w_fileId;
    let kvListString = encodeURI(kvList.join("&"));
 
    // 这里`encodeURIComponent`和`encodeURI`的使用要注意点。`encodeURIComponent`对所有字符都编码，
  
    // 拼接返回的url
    result = `${domain}office/${fileType}/${fileId}?${kvListString}&_w_signature=${hmacSha1Sign}`
    return result;
}
```

前端拿着参数进行的请求。

| 支持格式      |	type | 值 文件后缀|
| :----------: | :----------: | :----------: |
| 文字文件	   | w	          | doc, dot, wps, wpt, docx, dotx, docm, dotm, rtf |
| 表格文件      | s	          | xls, xlt, et, xlsx, xltx, csv, xlsm, xltm |
| 演示文件      | p	          | ppt, pptx, pptm, ppsx, ppsm, pps, potx, potm, dpt, dps | 
| PDF 文件     | f	          | pdf |

```javascript

let userId = body.userId;
let fileId = body.fileId;
// 文件类型参考上表
let fileType = body.fileType;  // "w", "e", "p", "f"
    
let wpsUrl = getWpsUrl({
     _w_userid: userId,
     _w_fileid: fileId,
    }, 
    {fileType});
// 然后把wpsurl返给前端，打开即可

```

## 金山文档服务器回调接口

:::tip
每个接口都需要有token，token字段在请求头里面的`x-wps-weboffice-token`上，因此可以做统一拦截器。后面会说、
即使这些回调接口不校验token也能正常使用，但是为了安全实际生产中是需要token的。
:::

### 1. 文档预览方和文档编辑接口
    
    参考地址： https://wwo.wps.cn/docs/server/callback-api-standard/get-user-information/
    
    接口名：获取文件元数据，包括当前文件信息和当前用户信息
    
    接口地址： `/v1/3rd/file/info`，GET方式
    
    实现逻辑文字描述：
    根据传入的fileId，去查找表，组装文档的基本信息和权限核心和水印和用户等。
    
```javascript
    // 获取请求头里面的文件id
    let fileId = ctx.header["x-weboffice-file-id"];
    // 获取url参数上的请求签名
    let signature = ctx.query._w_signature;
    // 获取url参数上的应用id
    let appId = ctx.query._w_appid;
    // 获取url参数上userId，这个属于自定义参数了
    let userId = ctx.query._w_userid;
    // 返回给金山服务器的接口的主要结构如下
    /**
     {
       file: {
          user_acl: {},
          watermark: {},
       }, 
      user: {}
     }
     */
    // 根据fileId查询file表，得到file的信息      
    let sql = `SELECT 
               f.file_id AS id, 
               f.file_name AS name, 
               f.version AS version, 
               f.file_size AS size, 
               f.create_id AS creator, 
               f.create_time AS create_time, 
               f.maintainer_id AS modifier, 
               f.maintainer_time AS modify_time, 
               f.download_url AS download_url
             FROM 
               z_file AS f 
             WHERE 
               f.file_id = :fileId  LIMIT 1`;
    // 假定文件表查出来的数据为
    let fileData = {
       id: "",
       name: "",
       version: 0,
       size: 0,
       creator: "",
       create_time: 0,
       modifier: "",
       modify_time: 0,
       download_url: "",
       preview_pages: 0, // 0不限制，限制预览页数 (非必填，不超过5000)
    }      
    // 根据fileId查询file_acl表，得到file的权限
    sql = 'SELECT `uuid`, `user_id`, `file_id`, `permission`, `rename`, `history`, `copy`, `export`, `print`, `createdAt`, `updatedAt` FROM `z_file_acl` WHERE file_id = :fileId AND user_id = :userId';  
    // 假定权限表查出来的数据为
    let fileAclData = {
        rename: 1, // 重命名权限，1为打开该权限，0为关闭该权限，默认为0
        history: 1, // 历史版本权限，1为打开该权限，0为关闭该权限,默认为1
        copy: 1, // 复制
        export: 1, // 导出PDF
        print: 1 // 打印
    }     
    
    // 根据fileId查询z_file_watermark表，得到file的水印
    sql = 'SELECT `uuid`, `file_id`, `type_name`, `mark_value`, `fillstyle`, `font`, `rotate`, `horizontal`, `vertical`, `createdAt`, `updatedAt` FROM `z_file_watermark` WHERE `file_id` = :fileId;';
    // 假定水印表查出来的数据为
    let fileWatermarkData = {
        type: 1, // 水印类型， 0为无水印； 1为文字水印
        value: "禁止传阅", // 文字水印的文字，当type为1时，此字段必填
        fillstyle: "rgba( 192, 192, 192, 0.6 )", // 水印的透明度，非必填，有默认值
        font: "bold 20px Serif", // 水印的字体，非必填，有默认值
        rotate: -0.7853982, // 水印的旋转度，非必填，有默认值
        horizontal: 50, // 水印水平间距，非必填，有默认值
        vertical: 100 // 水印垂直间距，非必填，有默认值
    }   
    // 根据userId查询用户信息。
    sql = 'SELECT `id`, `name`, `avatar_url` FROM `z_user` WHERE `id` = :userId';
    let userData = {
        id: "1", // 用户id，长度小于32 (必填)
        name: "用户1", // 用户名称 (必填)
        permission: "read", // 用户操作权限，write：可编辑，read：预览 (必填)
        avatar_url: "" // 用户头像地址 (非必填)
    }
    // 拼装数据
    fileData["user_acl"] = fileAclData;
    fileData["watermark"] = fileWatermarkData;

    let result = {
      file: fileData,
      user: userData,
    }
    // result 就是最后返给前端的数据
```
    
### 2. 文档新建接口

    在模板页选择对应的模板后，将新创建的文件上传到对接模块，返回访问此文件的跳转 url。

    参考地址：https://wwo.wps.cn/docs/server/callback-api-standard/new-file/
    
    接口名：通过模板新建需要提供的接口
    
    接口地址： `/v1/3rd/file/new`，POST方式
    
    实现逻辑文字描述：
    通过拿文件流，得到文件的后缀名，判断是新建的什么类型的文档，然后生成一个fileId，再把fileId和文件后缀生成一个文件名。
    然后把文档上传到七牛云，最后把各自对应的信息分别存入文档file表，权限file_acl表,版本file_version表。
    完毕后，再按照通过文档fileId和用户userId的逻辑，生产一个wps的在线编辑链接即可（这块生成逻辑跟前面的一模一样）。
    
```javascript
  // 获取文件流
  const stream =  ctx.getFileStream();
  // 得到文件后缀
  let ext = path.extname(stream.filename);
  // 初始化一个fileId, 使用guid这类生成uuid的函数
  let fileId = guid().replace(/-/img, '');
  // 创建一个新的文件名
  let filenameSave = fileId + ext.toLocaleLowerCase();
  // 备份原始的文件名
  let filenameBackup = stream.filename;
  // 上传此文件流到七牛云，并返回一个七牛云的地址、
  // uploadQiniu()等等。可以自行实现，不过要返回一个七牛云的地址
  let download_url = uploadQiniu(stream, filenameSave);
     
  // 以上工作做完后，需要做的事情分别入库file表,file_acl表,file_version表。三条insert语句
  // 插入file表数据 
  let sql = 'INSERT INTO `z_file`(`uuid`, `file_id`, `file_name`, `version`, `file_size`, `create_id`, `create_time`, `maintainer_id`, `maintainer_time`, `download_url`, `delete`) VALUES (:uuid,:fileId, :filenameBackup, 1, 0,\'1\', 0,\'1\',0 , :download_url, \'NO\')'
  // 插入file_acl表数据
  sql = 'INSERT INTO `z_file_acl`(`uuid`, `user_id`, `file_id`, `permission`, `rename`, `history`, `copy`, `export`, `print`) VALUES (:uuid,:userId,:fileId,\'write\',1,1,1,1,1)'  
  // 插入file_version表 // 具体省略
  sql = 'INSERT INTO `z_file_version`(`uuid`, `file_id`, `file_version_id`, `file_name`, `version`, `download_url`, `file_size`, `create_id`, `create_time`, `maintainer_id`, `maintainer_time`, `createdAt`, `updatedAt`) VALUES ......';
  
  // 以上操作完成之后，就是拿着fileId和userId直接生成一个wps链接即可。
  // formatFileType 函数通过把后缀名匹配为标识符号
  let fileType = formatFileType(ext);
  let wpsUrl = getWpsUrl({
      _w_userid: userId,
      _w_fileid: fileId,
     }, 
     {fileType});
 
  // result 即为返回给前端的结果
  let result = {redirect_url: wpsUrl, user_id};
```
    
### 3. 文档公用回调接口

    打开或关闭文件时，WPS 会回调一些通知，目前有 5 类回调通知（详情查看下文的请求示例）。
    
    参考地址：https://wwo.wps.cn/docs/server/callback-api-standard/open-and-close-file-notifications/
        
    接口名： 打开或关闭文件时需要提供的接口
    
    接口地址： `/v1/3rd/onnotify`，POST方式
    
    实现逻辑文字描述：
    如果需要做统计类操作，需要获取参数进行统计，否则的话，直接返回任意的对象即可。
    可根据回调请求参数中的cmd参数的值不同，做不同的统计分类。
```javascript
    // 文件id
    let fileId = ctx.header["x-weboffice-file-id"]
    //  请求签名
    let signature = ctx.query._w_signature
    // 应用id
    let appId = ctx.query._w_appid
    // 用户id
    let userId = ctx.query.userId
    // 命令参数
    let cmd = ctx.request.body.cmd
    // 信息内容
    let bodyMsg = ctx.request.body.body

    // 根据以上参数做一些统计处理等等
    // ...code
    // 然后返回成功即可,返回result对象即可
    let result = {
         code: 0,
         message: "OK",
    }
```
          
### 4. 获取用户信息

指的是在编辑的时候获取编辑过此文件的用户信息，展示在网页的协作记录里面

参考地址：https://wwo.wps.cn/docs/server/callback-api-standard/get-user-information/

接口名：获取用户信息

接口地址： `/v1/3rd/user/info`，POST方式

实现逻辑文字描述：

金山服务器请求参数是
```javascript
{
	ids: ["1", "2"]
}
```
通过这些传过来的用户id，返回对应的用户名和用户头像。

```javascript
// 用户id数组
let ids = ctx.request.body.ids

// 通过查user表，找到对应的用户基本信息即可。
let sql = 'SELECT `id`, `name`, `avatar_url` FROM `z_user` WHERE id IN (:ids)'
// 假定返回的参数是如下
let userList = [
   {id: "1", name: "用户1", avatar_url: "" },
   {id: "2", name: "用户2", avatar_url: "" },
]
// 最后的返回结果为`result`
let result = {
   "users": userList
}
```



### 5. 上传文件新版本

指的是编辑的时候把文件保存到网盘，比如七牛云
当文档在线编辑并保存之后，上传该文档最新版本到对接模块，同时版本号进行相应的变更，需要对接方内部实现文件多版本管理机制。

参考地址：https://wwo.wps.cn/docs/server/callback-api-standard/upload-new-version-of-file/

接口名：上传文件新版本

接口地址： `/v1/3rd/file/save`，POST方式

实现逻辑文字描述：

获取文档流，上传此文档到云存储空间，根据请求的fileId查找file表找到fileId，然后开始更新file表的这条数据，更新的时候把version加一，最后把加一后的version新增一条数据插入到file_vesrsion版本表即可。

与新建文件的逻辑差不多，

特殊在于，
- 更新file表的时候，需要修改部分字段，版本号需要自增，维护人，维护时间；
- 插入file_version表的时候，版本号需要使用file新设置的版本号。

代码逻辑，参考新建文件逻辑即可。

### 6. 通知文件有哪些人正在协作编辑

:::tip
此接口为异步接口，只能作为统计，一致性无法保证。
:::

指的是编辑的时候把正在编辑文档的人的列表返回给前端用来展示。

参考地址：https://wwo.wps.cn/docs/server/callback-api-standard/notify-who-is-currently-collaborating-on-this-file/

接口名：获取用户信息

接口地址： `/v1/3rd/file/online`，POST方式

实现逻辑文字描述：

根据金山服务器请求的时候参数，如

```json
{
	"ids": ["1", "2"]
}
```
返回值：status code 为 200 表示获取数据成功。其余值表示失败，需要在返回中指定 code、message 等信息（参考常见错误码）。

如果获取成功，可以直接返回result即可。如果不想做任何处理，也可以直接返回result对象。

```javascript
let result = {
  code: 0,
  message: "OK"
}
```

### 7. 获取特定版本的文件信息

指的是获取历史版本的文件信息，主要用于回滚操作

参考地址：https://wwo.wps.cn/docs/server/callback-api-standard/get-file-information-for-a-specific-version/

接口名：获取用户信息

接口地址： `/v1/3rd/file/version/:version`，GET方式

实现逻辑文字描述：

根据传入的fileId和version，去查file_version表，得到对应的行数据即可。

```javascript
    // 文件id
    let fileId = ctx.header["x-weboffice-file-id"];
    // 请求签名
    let signature = ctx.query._w_signature;
    // 应用id
    let appId = ctx.query._w_appid;
    // 用户id
    let userId = ctx.query._w_userid;
    // 拿到固定版本
    let version = ctx.params.version;
    
    // 一个单表查询即可
    let sql = 'SELECT `uuid`, `file_id`, `file_version_id`, `file_name`, `version`, `download_url`, `file_size`, `create_id`, `create_time`, `maintainer_id`, `maintainer_time`, `createdAt`, `updatedAt` FROM `z_file_version` WHERE `file_id` = :file_id && `version` = :version';
    // 假如返回值如下
    let fileData = {
        id: "1",       // 文件 id,字符串长度小于 40
        name: "xxx.doc",        // 文件名
        version: 1,                 // 当前版本号，位数小于 11
        size: 0,                  // 文件大小，单位为 B
        create_time: 0,		// 创建时间，时间戳，单位为秒
        creator: "",			        // 创建者 id，字符串长度小于 40
        modify_time: 0,		// 修改时间，时间戳，单位为秒
        modifier: "",			    // 修改者 id，字符串长度小于 40
        download_url: "" // 文档下载地址
    };
    // 把result返回即可
    let result = { 
        file: fileData
    };
```

### 8. 文件重命名
指的是某个用户具有重命名权限时，重命名时调用的接口。

参考地址：https://wwo.wps.cn/docs/server/callback-api-standard/file-rename/

接口名：获取用户信息

接口地址： `/v1/3rd/file/rename`，PUT方式

实现逻辑文字描述：

根据传入的参数name，把新名字更新到file库即可。

金山服务器请求为PUT请求，
```json
{
  "name": "rename.doc"
}
```

```javascript
// 文件id
let fileId = ctx.header["x-weboffice-file-id"];
// 文件新名称
let name = ctx.body.name;
// 单表更新file表的name字段即可
let sql = 'UPDATE `z_file` SET `file_name`= :name WHERE `file_id` = :fileId'
```
返回值：status code 为 200 表示获取数据成功。其余值表示失败，需要在返回中指定 code、message 等信息（参考常见错误码）。

最后直接返回result对象即可
```javascript
let result = {
 code: 0,
 message: "OK"
}
```

### 9. 获取所有版本文件文件信息
指的是把当前的文件的所有历史版本作为列表返回。

参考地址：https://wwo.wps.cn/docs/server/callback-api-standard/get-all-historical-version-file-information/

接口名：获取所有历史版本文件信息

接口地址： `/v1/3rd/file/history`，POST方式

实现逻辑文字描述：

主要是是一个分页查询接口，查询的是file_version表。
同时在查出来的信息的基础上，找到对应的用户id，去查用户的基本信息。

```javascript
// 文件id
let fileId = ctx.header["x-weboffice-file-id"]
// 记录偏移量
let offset = ctx.request.body.offset || 0
// 记录总数
let count = ctx.request.body.count || 10
// 便于说明，直接使用一个关联查询。
let sql = let sql = `SELECT
              \`fv\`.\`uuid\`,
              \`fv\`.\`file_id\`,
              \`fv\`.\`file_name\`,
              \`fv\`.\`version\`,
              \`fv\`.\`download_url\`,
              \`fv\`.\`file_size\`,
              \`fv\`.\`create_id\`,
              \`fv\`.\`create_time\`,
              \`fv\`.\`maintainer_id\`,
              \`fv\`.\`maintainer_time\`,
              \`fv\`.\`file_version_id\`,
              \`c_user\`.\`name\` AS \`create_name\`,
              \`c_user\`.\`avatar\` AS \`create_avatar\`,
              \`m_user\`.\`name\` AS \`maintainer_name\`,
              \`m_user\`.\`avatar\` AS \`maintainer_avatar\`
          FROM
              \`z_file_version\` AS \`fv\`
          LEFT JOIN \`user\` AS \`c_user\`
          ON
              \`fv\`.\`create_id\` = \`c_user\`.\`uuid\`
          LEFT JOIN \`user\` AS \`m_user\`
          ON
              \`fv\`.\`maintainer_id\` = \`m_user\`.\`uuid\`
          WHERE
              \`file_id\` = :fileId
          ORDER BY
              \`fv\`.\`version\` * 1
          DESC
          LIMIT :offset, :count`
```

最后只需要返回指定的数据接口即可。

```json5
{
  histories: [
    {
      id: "f132aa30a87064",		// 文件 id,字符串长度小于 40
      name: "example.doc",		// 文件名
      version: 3,		        	// 版本号，位数小于 11
      size: 200,			        // 文件大小
      download_url: "http://www.xxx.cn/v1/file?fid=f132aa30a87064&version=3",  // 文档下载地址
      create_time: 1136185445,		// 创建时间，以时间戳表示，单位为秒
      modify_time: 1539847453,		// 修改时间，以时间戳表示，单位为秒
      creator: {
        id: "id0",			        // 创建者 id，字符串长度小于 40
        name: "wps-0",			        // 创建者名字
        avatar_url: "http://xxx.cn/?id=0"	// 创建者头像地址
      },
      modifier: {
        id: "id1000",			// 修改者 id，字符串长度小于 40
        name: "wps-1000",		// 修改者名字
        avatar_url: "http://xxx.cn/?id=1000"	// 修改者头像地址
      }
    }]
}
```

## 前端使用方式

参考链接。
https://wwo.wps.cn/docs/front-end/introduction/

以下逻辑即可包含基本情况了。其他的定义都是界面的改动，不太困难，可以参考官网说明。

```javascript
// 获取 token 函数
const refreshToken = () => {
  // 自身业务处理...

  // 可以返回 Promise 或者 return { token, timeout }
  return Promise.resolve({
    token: 'yourToken', // 必需：你需要设置的 toekn
    timeout: 10 * 60 * 1000, //  必需：token 超时时间，以 10 分钟示例
  });
};

// 配置超时获取 token 函数
const jssdk = WebOfficeSDK.config({ refreshToken });

// 设置 token
jssdk.setToken({
  token: 'yourToken', // 根据自身的业务需求，通过异步请求或者模板输出的方式，取得 token
  timeout: 10 * 60 * 1000, // token 超时时间，可配合 refreshToken 配置函数使用，在超时前调用 refreshToken 重新刷新 token
});
```


## 接口请求拦截器

1. 只要是v1开头的金山在线编辑的回调接口，token均在请求头里面，所以拦截器只需要进行路径匹配后，查找对应的存token的key，然后去校验token是否正确即可。

```javascript
// 校验身份的token，值根据对接的企业而定
let token = ctx.header["x-wps-weboffice-token"]
```

2. 其他业务接口，就不必解释了，均与业务有关。

## 总结

内容很多，但是抓住细节就是，一直都在跟file表进行交互。 


    







