/**
 * Written by:     zhengxh
 * Created Date:   2017/10/17
 */
// var EventEmitter=require('events').EventEmitter;
// var event= new EventEmitter();
// event.on('some_event',function () {
//     console.log('some_event 事件触发');
// })
// setTimeout(function () {
//     event.emit('some_event')
// },1000)

var events=require('events');
var emitter=new events.EventEmitter();
emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener1',arg1,arg2)
})
emitter.on('someEvent',function (arg1,arg2) {
    console.log('listener2',arg1,arg2)
})
emitter.emit('someEvent','参数1','参数2')