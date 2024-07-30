import useBaseUrl from '@docusaurus/useBaseUrl';

# 答案

:::tip
作业：写一个HTML文件，页面用h1标签显示你好，颜色是红色，同时后面加上一个当前时间的字符串，同时要求每秒都要更新一次时间。
:::

## 答案

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>你好</title>
  <style>
    h1 {
      color: red;
    }
  </style>
  <script>
    function getTime() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var date = now.getDate();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      if (month < 10) month = "0" + month;
      if (date < 10) date = "0" + date;
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;
      if (second < 10) second = "0" + second;
      var time = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
      return time;
    }
    // 新知识，这是计时器，常用来不断请求数据使用，在逆向较为常用。
    setInterval(function () {
      document.getElementById("time").innerHTML = getTime();
    }, 1000);
  </script>
</head>

<body>
  <h1>你好</h1>
  <p id="time"></p>
</body>

</html>
   ```

## 输出的结果

<img alt="JS答案" src={useBaseUrl('/images/rsecu/webjs/1_3_1.png')} />