/**
 * Written by:     zhengxh
 * Created Date:   2017/10/26
 */
var http=require('http')
var querystring=require('querystring')

var postHTML =
    '<html><head><meta charset="utf-8"><title></title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req,res) {
    var post='';
    req.on('data',function (chunk) {
        post+=chunk
    })
    req.on('end',function () {
        // 解析参数
        post=querystring.parse(post)
        // 设置响应头部信息及编码
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})

        if (post.name&&post.url){//输出提交的数据
            res.write('网站名：'+post.name)
            res.write('<br>')
            res.write('网站url：'+post.url)
        }else {//输出表单
            res.write(postHTML)
        }
        res.end()
    })
}).listen(3000)
