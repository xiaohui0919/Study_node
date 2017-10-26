/**
 *
 * Written by:     zhengxh
 * Created Date:   2017/10/26
 */
var util=require('util')
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));