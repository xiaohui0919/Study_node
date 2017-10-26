/**
 * Written by:     zhengxh
 * Created Date:   2017/10/26
 */
var util=require('util')
function Person() {
    this.name='byvoid';
    this.toString=function () {
        return this.name
    }
}
var obj=new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));