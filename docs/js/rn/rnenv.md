# RN环境搭建

Android： 需要Android环境

IOS：需要XCode环境

IOS的环境简单点，一键安装XCode即可。

具体记录一下Android的环境搭建。

## 安装py27 
安装之后配置环境变量 尽可能安装到c盘根目录
![配置python27的环境变量][1]

## 安装jdk1.8

### 下载JDK
在官网下载JDK,开始点击下载即可,然后下载完毕之后开始安装,
点击选择一个安装路径即可
比如我的D:\develop\Java\jdk1.8.0_171
安装过程中会让选择jre的安装路径,可以选择为 D:\develop\Java\jre1.8.0_171
:::tip
注意 jre1.8.1_171 不可以安装到jdk1.8.1_171目录下面
:::
### 配置JDK环境变量
JAVA_HOME = JDK的安装路径,比如D:\develop\Java\jdk1.8.0_171

![配置jdk的环境变量][2]

然后配置系统变量path的值,在后面加上
%JAVA_HOME%\bin;
%JAVA_HOME%\jre\bin;
![配置jdk的环境变量][3]

### 配置CLASSPATH 变量
配置CLASSPATH 变量,如果已经存在则追加下面的内容,如果不存在则直接新建CLASSPATH
`CLASSPATH=.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`
:::tip
注意不要漏掉最后的;”符号
CLASSPATH变量不要漏掉前面的”.” 点
:::
验证是否安装成功
```base 
Java -version 
Javac
```
![验证JDK][4]

## 安装AS
:::tip
安装android studio 一定要记住sdk的目录
:::

### 下载AS
下载android studio
打开网站，找到如下图所示然后下载即可（<span style={{color: 'red'}}>根据自身操作系统下载</span> ）
http://www.android-studio.org/
![下载AS][5]

### 安装AS
下载完毕之后,点击安装,完成安装的界面
![安装AS][6]
### 设置SDK保存位置
打开之后会设置SDK的位置

选中SDK的位置之后,会读取加载一段时间
![设置SDK][7]
### 下载核心SDK
然后点击Next,开始下载核心的sdk
![下载核心SDK][8]
点击完成之后, 然后打开Android Studio ,找到SDK管理中心
![下载核心SDK][9]
### 配置SDK管理中心
打开之后,勾选一下四个,

- Google APIs
- Android SDK Platform 23
- Intel x86 Atom_64 System Image
- Google APIs Intel x86 Atom_64 System Image

如果没有正常显示详情,那么在右下角打上对号

![配置SDK管理中心][10]

接下来，选择“SDK工具”选项卡，并选中“Show Package Details”旁边的复选框。查找并展开“Android SDK Build-Tools”条目，然后确保23.0.1已选中。
 
 ![配置SDK管理中心][11]

最后，点击 OK  下载并安装Android SDK和相关的构建工具。

  ![配置SDK管理中心][12]
  ![配置SDK管理中心][13]

## AS安装问题
:::tip
如果出现这个界面,点击Accept接受,然后点击Next,即可正常安装
:::

  ![AS安装问题][14]

## AS重要的配置


重要, 配置安卓的环境,React Native工具需要设置一些环境变量才能使用本机代码构建应用程序。
打开Windows控制面板中“ 系统和安全”下的“ 系统”面板，然后单击“ 更改设置...”。打开高级选项卡，然后单击环境变量...。点击New ...创建一个ANDROID_HOME指向Android SDK路径的新用户变量：
配置SDK的环境变量,

另外可以在Android Studio“首选项”对话框的外观和行为 → 系统设置 → Android SDK下找到SDK的实际位置。


`ANDROID_HOME=D:\develop\Android\sdk`

![重要的配置][15]
  
然后在PATH环境变量里面配置一个`platform-tools`和`tools`
也就是在PATH后面追加,
`%ANDROID_HOME%\tools`

`%ANDROID_HOME%\platform-tools`

![platform-tools和tools的配置][16]

## adb测试
重新打开命令行输入 ,adb 测试,如果有内容则成功

![adb测试][17]

## RN的安装与运行

### RN命令行工具

安装react-native命令行工具,安装yarn工具

```bash 
npm install -g react-native-cli  yarn
```

如果之前安装过了,先运行下面的命令删除
```bash 
npm uninstall  react-native-cli -g
npm uninstall yarn  -g
```

![RN安装命令行工具][18]


### 创建新项目

下面就是激动人心的时刻了,创建一个react-native项目

```bash 
react-native init firstApp
cd firstApp
react-native run-android
```

![创建新项目][18]

### 创建安卓模拟器

![创建安卓模拟器][19]

一定要选中Android 6.0 Google APIs


![选中Android 6.0 Google APIs][20]

理想状态下, 先打开模拟器,然后直接运行react-native run-android就可以了

![正常运行][21]


## 环境搭建过程问题

推荐一个开发者工具下载的网址
http://www.androiddevtools.cn/

:::tip
下面的都是五花八门的错误,可以不看
:::




### gradle版本错误

如果错误如图

![gradle版本错误][22]

需要更改把1.3.1改成1.2.3，重新运行`react-native run-android`

![gradle版本修复][23]

###  build.gradle错误

如果错误如图

![build.gradle错误][24]

修复方式是，打开AS的sdk目录，查看是否有对应匹配的sdk版本。

![匹配的sdk版本][25]

我们看到我们只有24.0.3 和25.0.2这两个版本的sdk

找到React Native下的app修改他的build.gradle文件:

![修改RN的sdk版本][26]
![修改RN的sdk版本][27]

改成sdk build-tools下面有的版本，此处我们改成24.0.3

### 找不到gradle等网络问题

找不到gradle或者因为网络的问题无法下载,那么直接手动下载这个文件

https://services.gradle.org/distributions/gradle-2.14.1-all.zip



  [1]: /images/rn/rnenv01.png
  [2]: /images/rn/rnenv02.png
  [3]: /images/rn/rnenv03.png
  [4]: /images/rn/rnenv04.png
  [5]: /images/rn/rnenv05.png
  [6]: /images/rn/rnenv06.png  
  [7]: /images/rn/rnenv07.png
  [8]: /images/rn/rnenv08.png  
  [9]: /images/rn/rnenv09.png
  [10]: /images/rn/rnenv10.png
  [11]: /images/rn/rnenv11.png
  [12]: /images/rn/rnenv12.png
  [13]: /images/rn/rnenv13.png
  [14]: /images/rn/rnenv14.png
  [15]: /images/rn/rnenv15.png
  [16]: /images/rn/rnenv16.png
  [17]: /images/rn/rnenv17.png
  [18]: /images/rn/rnenv18.png
  [19]: /images/rn/rnenv19.png
  [20]: /images/rn/rnenv20.png
  [21]: /images/rn/rnenv21.png
  [22]: /images/rn/rnenv22.png
  [23]: /images/rn/rnenv23.png
  [24]: /images/rn/rnenv24.png
  [25]: /images/rn/rnenv25.png
  [26]: /images/rn/rnenv26.png
  [27]: /images/rn/rnenv27.png
  
  
  
  
  
  
  
  
  