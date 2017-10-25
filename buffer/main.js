/**
 * Written by:     zhengxh
 * Created Date:   2017/10/16
 */

// 阻塞代码示例
// var fs=require("fs");
// var data=fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log('程序执行结束')

// 非阻塞代码示例

// var fs=require('fs')
// fs.readFile('input.txt',function (err,data) {
//     if(err) {
//         return console.error(err);
//     }
//     console.log(data.toString())
//
// });
// console.log('程序执行结束')

// // 引入events模块
// var event=require('events');
// // 创建eventEmitter对象
// var eventEmitter= new event.EventEmitter()
// // 创建事件处理程序
// var connectHandler=function connected(){
//     console.log('连接成功')
//     // 触发data_received 事件
//     eventEmitter.emit('data_received')
// }
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection',connectHandler)
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received',function () {
//     console.log('数据连接成功')
// })
// // 触发 connection 事件
// eventEmitter.emit('connection');
//
//
// console.log('程序执行完毕')


// var fs=require('fs');
// fs.readFile('input1.txt',function (err,data) {
//     if(err){
//         console.log(err.stack);
//         return
//     }
//     console.log(data.toString())
// })
// console.log('程序执行完毕')


// var events=require('events')
// var eventEmitter=new events.EventEmitter()
//
// // 监听器 #1
// var listener1=function listener1() {
//     console.log('监听器 listener1 执行')
// }
//
// // 监听器 #2
// var listener2=function listener2() {
//     console.log('监听器 listener2 执行')
// }
//
// // 绑定 connection 事件，处理函数为 listener1
// eventEmitter.addListener('connection',listener1)
//
// // 绑定 connection 事件，处理函数为 listener2
// eventEmitter.on('connection',listener2)
//
// var eventListeners= require('events').EventEmitter.listenerCount(eventEmitter,'connection')
// console.log(eventListeners+'个监听器监听连接事件')
//
// // 处理 connection 事件
// eventEmitter.emit('connection')
//
// // 移除监绑定的 listener1 函数
// eventEmitter.removeListener('connection',listener1)
// console.log('listener1 不再受监听')
//
// // 触发连接事件
// eventEmitter.emit('connection')
//
// eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection')
// console.log(eventListeners+'个监听器监听连接事件')
//
// console.log('程序执行完毕')


// var fs =require("fs")
// var data=''
//
// // 创建可读流
// var readerStream= fs.createReadStream('input.txt')
//
// // 设置编码为utf-8
// readerStream.setEncoding('UTF8')
//
// // 处理流事件 --> data，end，and error
// readerStream.on('data',function (chunk) {
//     data+=chunk
// })
//
// readerStream.on('end',function () {
//     console.log(data)
// })
//
// readerStream.on('error',function (err) {
//     console.log(err.stack)
// })
//
// console.log('程序执行完毕')


// var fs=require('fs')
// var data='菜鸟教程官网教程地址： www.runoob.com'
//
// // 创建一个可以写入的流，写入到文件 outout.txt中
// var writerStream = fs.createWriteStream('outout.txt')
//
// // 使用 utf-8 编码写入数据
// writerStream.write(data,'UTF8')
//
// // 标记文件末尾
// writerStream.end()
//
// // 处理流事件 --> data,end,and error
// writerStream.on('finish',function () {
//     console.log('写入完成')
// })
//
// writerStream.on('err',function (err) {
//     console.log(err.stack)
// })
//
// console.log('程序执行完成')

//
// var fs=require('fs');
//
// // 创建一个可读流
// var readerStream=fs.createReadStream('input.txt');
// // 创建一个可写流
// var writerStream=fs.createWriteStream('output.txt');
//
// // 管道读写操作
// // 读取 input.txt 文件内容，并将内容写入到output.txt文件中
// readerStream.pipe(writerStream);
//
// console.log('程序执行完毕')

// var hello =require('./hello')
// hello.world()

var Hello=require('.hello')
hello=new Hello()
hello.setName('BYVoid')
hello.sayHello();
