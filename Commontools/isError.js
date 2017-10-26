/**
 * Written by:     zhengxh
 * Created Date:   2017/10/26
 */
var util=require('util')
console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({name: 'Error', message: 'an error occurred'}));