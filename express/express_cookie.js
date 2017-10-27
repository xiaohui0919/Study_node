/**
 * Written by:     zhengxh
 * Created Date:   2017/10/27
 */
var express = require('express')
var cookieParser=require('cookie-parser')

var app=express()
app.use(cookieParser())

app.get('/',function (req,res) {
    console.log('Cookies: ', req.cookies);
}).listen(8081)