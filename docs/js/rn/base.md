# RN的笔记备忘
## React Native思想

当 React 首次推出时，一个很大的卖点就是虚拟 DOM。这已是现在大多数 UI 库的标配，但当它刚推出时，确实是极具突破性的！我们可以通过分解调用 setState() 会发生的过程，来看看虚拟 DOM 究竟是什么。

调用 setState() 后 React 所做的第一件事是将传递给 setState() 的对象合并到组件的当前状态。这会启动一个叫做调节 的过程。调节的最终目的是以最有效的方式更新基于这种新状态的用户界面。为此，React 将构建一个新的 React 元素树（你可以将其视为 UI 的对象表现形式）。一旦有了这个新树，React 就会使用 "diff" 命令将它与之前的元素树进行比较，以便弄清 UI 如何响应新的状态而改变。通过这样做，React 将会知道发生的具体变化，并且通过了解发生的具体变化，它将能够仅在绝对必要的情况下进行更新，以最大限度地减少 UI 的占用空间。

创建 DOM 的对象表现形式的这个过程是 "Virtual DOM" 背后的整体思想。但是，如果我们不想以 DOM 为目标进行渲染，而是将另一个平台作为渲染目标 -- 比如说 iOS 或 Android。理论上来说，DOM 只是一个实现细节。除了这个名字本身（在我看来，它更像是一种营销手段）外，没有什么可以将虚拟 DOM 概念与实际 DOM 相结合。这正是 React Native 背后的思想。React Native 不是渲染到 web 的 DOM，而是渲染原生 iOS 或 Android 视图。这使我们可以只使用 React Native 来构建原生 iOS 和 Android 应用。

## 环境问题

Android： 需要Android环境

IOS：需要XCode环境

IOS的环境简单点，一键安装XCode即可。

具体记录一下Android的环境搭建。

[参考环境搭建](./rnenv)

## 单独打开Android Studio模拟器

配置环境变量
%ANDROID_HOME%\tools
主要是为了用emulator.exe这个工具,
更加详细的RN环境变量看最全的环境搭建笔记
然后在任意地方运行
emulator.exe -netdelay none -netspeed full -avd 5X
上面的5X代表的是虚拟设备的名字

## 代码自动刷新热更新设置

当模拟器正常运行RN代码的时候，重新打开一个命令行

输入
```base
adb shell input keyevent 82 
```

然后选择开发过程中的热更新即可

![选择热加载][1]
![选择热加载][2]

最好这两个打开

[1]: /images/rn/base01.png
[2]: /images/rn/base02.png
  