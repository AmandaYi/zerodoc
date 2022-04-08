# vdom对话

## vdom是什么

vdom是vue和react的核心,vdom是比较独立的,使用也比较简单,vdom是什么,为什么会存在vdom?

Virtual dom,虚拟dom,用JS模拟DOM结构,DOM变化的时候,在JS层来对比,因为JS是图灵完备语言,同时减少了DOM操作,提高了重绘性能,
DOM操作是"昂贵",同时JS运行效率高,尽量减少DOM操作,而不是"推到重来","推到重来的意思就是把之前的内容全部替换造成的吸能浪费",
同时,当项目越来越复杂的时候,影响就越严重,这时候vdom的优势就体现出来了,就可以解决这个问题

## vdom的如何应用-核心API是什么

举例说明：

snabbdom是一个vdom库,主要是进行创建和更新dom,以打补丁的形式进行更新,这是一个demo,核心API是h函数和patch函数,如下所示

```html
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-class.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-props.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-style.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-eventlisteners.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/h.js"></script>
<script>
(window => {
    let snabbdom = window.snabbdom
    // 初始化patch渲染函数
    let patch = snabbdom.init([
        snabbdom_class,
        snabbdom_props,
        snabbdom_style,
        snabbdom_eventlisteners,
    ])
    let h = snabbdom.h
    let box = document.getElementById("box")
    // 生成一个vnode
    let vnode = h("ul#list", {}, [
        h("li", {}, "item 1"),
        h("li", {}, "item 2"),
    ])
    // 进行渲染
    patch(box, vnode)
    // 进行比对更新节点
    let newNode = h("ul#list", {}, [
        h("li", {}, "item 1"),
        h("li", {}, "change item 2"),
        h("li", {}, "item 3"),
    ])
    let btn = document.getElementById("btn")
    btn.addEventListener("click", () => {
        // 给vnode打补丁
        patch(vnode, newNode)
    })
})(window)
</script>
<script>
// 下面写一个数据驱动的列子
(window => {
    let snabbdom = window.snabbdom
    // 初始化patch渲染函数
    let patch = snabbdom.init([
        snabbdom_class,
        snabbdom_props,
        snabbdom_style,
        snabbdom_eventlisteners,
    ])
    let h = snabbdom.h
    // 要渲染的数据
    let data = [
        {name: "Tom"},
        {name: "Jack"},
        {name: "Jerry"}
    ]
    let box = document.getElementById("box")
    // 渲染函数
    let vnode // 保存上一次的
    function render(data) {
        // 第一次渲染,vnode没有赋值
        let newvode = h("ul", {}, [...data.map(item => {
            return h("li", {}, item.name)
        })])
        if (!vnode) {
            patch(box, newvode)
        } else {
            // 如果上一次有了,那么的话, 进行比较,更新
            patch(vnode, newvode)
        }
        // 每次渲染完成之后,保存上一次指针引用
        vnode = newvode
    }

    // 第一次渲染
    render(data)
    // 第二次改变数据之后进行, 渲染
    document.getElementById("btn")
        .addEventListener("click", () => {
            data.push({
                name: "xiaoming"
            })
            data[0].name = "zhangsan"
            // 二次渲染, 渲染
            render(data)
        })
})(window)

</script>
```

## 介绍一下diff算法

在前端中,DOM操作是"昂贵"的,但是JS运行效率又是高效的,对于现在越来越大的应用来说,重绘渲染是耗性能的,因为,必须进行找到需要更新的地方才更新,不需要更新的地方不需要更新,那么,这个找出的过程就是diff算法,
diff算法主要有两个核心,分别是createElement元素,和updateElement

```javascript
// patch(box,vnode) 
// 初次渲染的时候的逻辑
function createElement(vnode) {
// 获取标签
    let tag = vnode.tag
// 获取属性
    let attr = vnode.attr || {}
// 获取子元素
    let children = vnode.children || []
// 创建一个标签
    let elem = document.createElement(tag)
// 进行设置属性
    let key
    for (key in attr) {
        if (attr.hasOwnProperty(key)) {
            elem.setAttribute(key, attr[key])
        }
    }
// 追加子元素
    children.forEach(item => {
        elem.appendChild(createElement(item))
    });
// 返回创建的元素
    return elem
}

// 最后的整体是返回的是第一次进入函数创建的elem

// updateElement
// patch(vnode,newvnode)
// 重新渲染的时候, 
function updateElement(vnode, newvnode) {
    let children = vnode.children || []
    let newChildren = newvnode.children || []
// 进行循环对比,当发现,
// 如果两个相等,那么直接递归往下对比
    newChildren.forEach((item, index) => {
        let tmp = children[index]
        if (item.tag === tmp.tag) {
            updateElement(tmp, item)
        } else {
            replaceElement(tmp, newChildren[index])
        }
    });
// 如果不相等,那么替换
}

```

上面仅仅是一个举例,更加复杂的是,还有节点的新增,删除,
节点重新排序等等
节点的属性,事件绑定,等等,还有一些怎么压榨性能等