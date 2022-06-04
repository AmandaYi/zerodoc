# Redis发布订阅

Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息。

Redis 客户端可以订阅任意数量的频道。

## 流程
客户端可以订阅频道如下图

![客户端订阅][1]

当给这个频道发布消息后，消息就会发送给订阅的客户端

![完整流程][2]

## 举例

1. 打开一个客户端订阅channel1, `SUBSCRIBE channel1`

![新客户端订阅][3]

2. 打开另一个客户端，给`channel1`频道发布消息,`publish channel1 hello`

![新客户端给指定的频道发布消息][4]

返回的1是订阅者数量

3. 再次打开第一个客户端会看到消息


![新客户端收到消息][5]


## 注意

客户端广播出去的消息，是无法持久化的，如果在发布的时候，客户端确实因为各种原因没有收到对应频道的信息，那么就永远收不到信息了。




[1]: /images/redis/pubsub01.png
[2]: /images/redis/pubsub02.png
[3]: /images/redis/pubsub03.png
[4]: /images/redis/pubsub04.png
[5]: /images/redis/pubsub05.png
