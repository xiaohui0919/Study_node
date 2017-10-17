/**
 * Written by:     zhengxh
 * Created Date:   2017/10/16
 */
// 一、引入required模块
var http= require("http");

// 二、创建服务器
http.createServer(function (request,response) {
    // 发送HTTP头部
    // HTTP 状态值：200:ok
    // 内容类型: text/plain
    response.writeHead(200,{'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
