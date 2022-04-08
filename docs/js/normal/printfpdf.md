# 前端实现pdf打印功能（JS）

## 前端实现pdf打印原理：

假定，我们要打印详情页面，那我们的流程是
1. 获取详情，
2. 渲染html，
3. 等待图片加载完毕
4. 进行打印
过程，我们需要引用canvas生成页面的插件，

```javascript
//页面生成图片
import html2Canvas from 'html2canvas'
//图片生成pdf
import JsPDF from 'jspdf'
```

其次，设置打印出来的纸的大小，也就是A4纸的大小

```javascript
export default {
    install(Vue, options) {
        Vue.prototype.getPdf = function (title, elem) {

            return new Promise((resolve, reject) => {
                var dom = document.querySelector(elem); // 这个dom元素是要导出pdf的div容器
                let width = dom.clientWidth;
                let height = dom.clientHeight;
                let scale = 4;
                let params = {
                    dpi: 300,
                    scale: scale,
                    width: width,
                    height: height,
                    useCORS: true,
                };
                setTimeout(() => {
                    html2Canvas(dom, params).then(function (canvas) {
                        var contendWidth = canvas.width;
                        var contentHeight = canvas.height
                        //生成pdf的高度,A4纸的宽高： 592.28,841.89
                        var pdfPageHeight = contendWidth / 592.28 * 841.89;
                        //未生成pdf的html页面高度
                        var leftPageHeight = contentHeight;
                        //页面偏移
                        var position = 0;
                        var imgWidth = 592.28;
                        var imgHeight = 592.28 / contendWidth * contentHeight;

                        var pdf = new JsPDF('', 'pt', 'a4');
                        var pageData = canvas.toDataURL('image/jpeg', 1.0);
                        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                        //当内容未超过pdf一页显示的范围，无需分页
                        //当一页内容没超过一个pdf时，不用分页
                        if (leftPageHeight < pdfPageHeight) {
                            pdf.addImage(pageData, 'jpeg', 0, 0, imgWidth, imgHeight);
                        } else {
                            while (leftPageHeight > 0) {
                                pdf.addImage(pageData, 'jpeg', 0, position, imgWidth, imgHeight);
                                leftPageHeight -= pdfPageHeight;
                                position -= 841.89;
                                //避免空白页
                                if (leftPageHeight > 0) {
                                    pdf.addPage();
                                }
                            }
                        }

                        try {
                            let bData = pdf.output("blob")

                            pdfDownload(bData, title);
                            resolve("YES")
                        } catch (ex) {
                            reject("NO")
                        }
                    });
                }, 0);
            })
        }
    }
}

function pdfDownload(data, title) {
    const blob = new Blob([data], {
        type: "application/pdf",
    }); // 构造一个blob对象来处理数据
    const fileName = title + ".pdf"; // 导出文件名
    const elink = document.createElement("a"); // 创建a标签
    elink.download = fileName; // a标签添加属性
    elink.style.display = "none";
    elink.href = URL.createObjectURL(blob);
    let url = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click(); // 执行下载
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink); // 释放标签
}

```

然后在需要的页面，调用打印函数

```javascript
window.scrollTo(0, 0);
let printTitle = option.printTitle + this.orderForm.posOrderCode;
let code = await this.getPdf(printTitle, "#id");
```


强调一个地方就是，如果打印的地方 有图片的话，需要先对图片路径转为base64

```javascript
   function getBase64Image(url) {
       return new Promise((resolve, reject) => {
           let that = this;
           let image = new Image();
           image.src = url + "?v=" + Math.random(); // 处理缓存
           image.crossOrigin = "*"; // 支持跨域图片
           image.onload = function () {
               let base64 = that.drawBase64Image(image);
   
               resolve({
                   result: true,
                   base64,
               });
           };
           image.onerror = function () {
               resolve({
                   result: false,
               });
           };
       });
   }
   
   function drawBase64Image(img) {
       let canvas = document.createElement("canvas");
       canvas.width = img.width;
       canvas.height = img.height;
       let ctx = canvas.getContext("2d");
       ctx.drawImage(img, 0, 0, img.width, img.height);
       let dataURL = canvas.toDataURL("image/png");
       return dataURL;
   }
   
   // 这里把图片的路径处理成为base64
   for (let i = 0; i < list.length; i++) {
       let bufferCode = await this.getBase64Image(
           list[i].productInfoForm.pic
       );
       if (bufferCode.result) {
           list[i].productInfoForm.pic = bufferCode.base64;
       } else {
           list[i].productInfoForm.pic = "";
       }
   }
```
