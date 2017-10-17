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


var fs=require('fs');
fs.readFile('input1.txt',function (err,data) {
    if(err){
        console.log(err.stack);
        return
    }
    console.log(data.toString())
})
console.log('程序执行完毕')
