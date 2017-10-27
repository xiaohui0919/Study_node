/**
 * Written by:     zhengxh
 * Created Date:   2017/10/27
 */
var net=require('net')
var server=net.createServer(function (connection) {
    console.log('client connected');
    connection.on('end',function () {
        console.log('客户端关闭连接');
    })
    connection.write('Hello Worid!\r\n')
    connection.pipe(connection)
}).listen(8080,function () {
    console.log('Server is listening');
})
