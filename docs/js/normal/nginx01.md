# nginx记一次奇怪的跨域请求

今天，博客的左下角的看板娘小可爱找不到了，一直没有注意这个事情，今天突然感觉少点什么，就想起来了。
首先查看了，谷歌浏览器的控制台，发现找不到看板娘小可爱的JSON配置文件了。

![看板娘小可爱的JSON配置文件][1]

查找之后，发现了问题，因为我的博客是`blog`开头的，转发了`www.baby8013.com`的内容，如果`blog.baby8013.com`去拿`www`的资源，肯定会触发`www.baby8013.com`的跨域请求，同时，我的博客全部是走的`www`域名下面的`/blog/`的url，所以认真分析，应该给`www.baby8013.com`的`nginx`配置一下跨域，允许`blog`下面的内容通过去查找资源，因此就有了下面的`nginx`配置!

```nginx
  location /blog/ {
       # proxy_pass http://blog.baby8013.com/;
           #   指定允许跨域的方法，*代表所有
        add_header Access-Control-Allow-Methods *;

        #   预检命令的缓存，如果不缓存每次会发送两次请求
        add_header Access-Control-Max-Age 3600;
        #   带cookie请求需要加上这个字段，并设置为true
        add_header Access-Control-Allow-Credentials true;

        #   表示允许这个域跨域调用（客户端发送请求的域名和端口） 
        #   $http_origin动态获取请求客户端请求的域   不用*的原因是带cookie的请求不支持*号
        add_header Access-Control-Allow-Origin $http_origin;

        #   表示请求头的字段 动态获取
        add_header Access-Control-Allow-Headers 
        $http_access_control_request_headers;

        #   OPTIONS预检命令，预检命令通过时才发送请求
        #   检查请求的类型是不是预检命令
        if ($request_method = OPTIONS){
            return 200;
        }
    }
```

然后刷新页面，咋一样好了，但是小可爱还是不出来，于是就刷新查看，于是就发现了，原来图片也跨域了。

![看板娘小可爱图片跨域][2]

因此，也要配置一下图片的跨域问题。

```nginx
   location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        #允许跨域请求
        add_header Access-Control-Allow-Origin '*';
        add_header Access-Control-Allow-Headers X-Requested-With;
        add_header Access-Control-Allow-Methods GET,POST,OPTIONS;

        expires      30d;
        error_log off;
        access_log /dev/null;
    }
```
 于是，就这么的好了，开心心！ :&(蛆音娘_滑稽) 
 
[1]: /images/normal/kanbanjson.png

[2]: /images/normal/kanbancors.jpg