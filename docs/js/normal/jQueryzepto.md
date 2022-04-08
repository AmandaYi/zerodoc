# jQuery和zepto原型实现

## jQuery的原型的实现

```javascript
((window) => {
    let jQuery = function (selector) {
        return jQuery.fn.init(selector)
    }
    jQuery.fn = {
        constructor: jQuery,
        css: function () {
        }
    }
    jQuery.fn.init = function (selector) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        let len = dom.length
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector = "";
    }
    let init = jQuery.fn.init
    init.prototype = jQuery.fn
    window.$ = jQuery
})(window)
```

## zepto原型实现

```javascript
((window) => {
    // 1. 创建一个空对象
    let zepto = {}
    zepto.init = function (selector) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(selector))
        return zepto.Z(dom, selector)
    }
    zepto.Z = function (dom, selector) {
        return new Z(dom, selector)
    }
    
    // 2. Z构造函数
    function Z(dom, selector) {
        let len = dom.length
        for (let i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ""
    }

    let $ = function (selector) {
        return zepto.init(selector)
    }
    $.fn = {
        constructor: zepto.Z,
    }

    // 3. 重写Z构造函数的原型
    zepto.Z.prototype = Z.prototype = $.fn
    window.$ = $
})(window)
```




上面均为把原型方法放在$.fn中,主要是为了方便插件的扩展,因为,对外暴露的只有一个$变量
