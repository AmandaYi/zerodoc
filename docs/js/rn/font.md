# RN使用字体图标

iconfont字体图标,
如果你身处在一个视觉或者交互对页面UI很强的团队，你会深刻的理解使用图片作为图标的不便之处:

## 下载图标

首先去阿里图标网,下载图标,

![阿里图标网][1]

## 解压

下载之后,解压文件

最重要的是这个`ttf`文件,一定要记住这个名字

![解压ttf][2]

## 安卓项目

直接把这个复制进入项目目录路径的安卓字体路径即可,如果没有的文件夹,直接自己新建即可

:::tip
注意: 这个地方的安卓字体文件夹是不可以更改的
:::

`.\android\app\src\main\assets\fonts`

![RN在安卓环境下插入字体图标][3]

## ios项目

直接把这个ttf文件拖进去,拖到xcode里面还有提示是否安装未知的字体图标文件,选择是就行了

## 重新启动

:::tip
必须重新启动RN项目,也就是重新运行 `react-native run-平台`
:::

## 使用

![RN字体使用][4]

![RN字体使用][5]

![RN字体使用][6]




[1]: /images/rn/font01.png
[2]: /images/rn/font02.png
[3]: /images/rn/font03.png
[4]: /images/rn/font04.png
[5]: /images/rn/font05.png
[6]: /images/rn/font06.png
        
 

