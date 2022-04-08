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