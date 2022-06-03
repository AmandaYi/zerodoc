# RN的弹性盒子


FlexBox:弹性盒子布局,Flexbox 的主要思想是使父元素能够控制其所有(直接!)子元素，而不是让每个子元素控制其自己的布局。
当你这样做时，父元素变成了一个 flex 容器，而子元素变成了 flex 项。一个例子是，我们不必让一个元素的所有子元素浮动到左侧，
并为每一个添加边距，而是由父元素指定将所有子元素排列成一行，使它们之间的间距相等。
这样，布局责任就从子元素转移到了父元素，进而使你对应用的整个布局具有更精细的调整控制。
为什么会有FlexBox布局: 使用 CSS 创建一个多用途的布局相当麻烦。
而 flexbox 的目的就是创建一个更有效的方法来"布置、对齐和分配容器中项目之间的空间，即使它们的大小位置是未知 和/或 是动态的"。简而言之，flexbox 的主要用途在于创建动态布局。


## 轴
轴,Flexbox 的最重要的概念是它由不同的轴组成，包括主轴和交叉轴。

Flex方向,控制Flex方向的为 flex-direction , 他有两个值 row(行) column(列)

flex-direction有默认值,这一点方面,CSS3和RN中是不一样的,
:::tip
注意:
在RN中,默认值是column,也就是竖排
在CSS3中,默认值是row,也就是横排
:::

默认情况下,RN的每个元素都自动有 flexDirection: column 声明
也就是这个样子,

![RN的FlexBox][1]

## flexwarp  

flexwarp规定了是否换行
- nowarp 不换行,  其中如果元素超出了,那么会自动隐藏
- warp 换行,如果设置了换行,你们超出的元素会整体移动到最下边

![flexwarp][2]

## justifyContent     

指定子元素如何沿主轴对齐, 他有五个值
下面的示意图
flexwarp: nowarp
flexDirection: row 
的情况下面进行的示意
flex-start 从左边对齐
center  中间居中

![justifyContent][3]

flex-end 从右边对齐
space-around 两边对齐, 两边的边距刚好是两个元素中间的距离的一半

![space-around][4]

space-between 两边对齐

![space-between][5]

Alignitems  flex-start  flex-endcenter
## alignitems

alignitems的意思是自己的子元素的排列方式,他有三个值,对父容器生效
center

![alignitems][6]

 flex-start起点,
 flex-end终点
## alignSelf

alignSelf有三个值,规定自己的排列方式,对父元素生效,用来修改父元素规定的alignitems的值
 center
 flex-start起点,
 flex-end终点
 
![alignSelf][7]

## flex
flex是一个量度,用来规定自己占父元素的空间的值,
flex可以为任意值 0.5, 1 ,  2  ,10 , 100
Flex:1 意思是  让这个view 充满 父容器



[1]: /images/rn/flexbox01.png
[2]: /images/rn/flexbox02.png
[3]: /images/rn/flexbox03.png
[4]: /images/rn/flexbox04.png
[5]: /images/rn/flexbox05.png
[6]: /images/rn/flexbox06.png
[7]: /images/rn/flexbox07.png
        
 


