/**
 *
 * Written by:     zhengxh
 * Created Date:   2017/10/27
 */
var net=require('net')
var client=net.connect({port:8080},function () {
    console.log('连接到服务器');
}).on('data',function (data) {
    console.log(data.toString());
    client.end()
}).on('end',function () {
    console.log('断开与服务器的链接');
})

