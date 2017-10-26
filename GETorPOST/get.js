/**
 * Written by:     zhengxh
 * Created Date:   2017/10/26
 */
var http=require('http')
var url=require('url')
var util=require('util')

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'})
    // 解析 url 参数
    var params=url.parse(req.url,true).query;
    res.write('网络名：'+params.name)
    res.write('\n')
    res.write('网络url：'+params.url)
    res.write('\n')
    res.end(util.inspect(url.parse(req.url,true)))
}).listen(3000)