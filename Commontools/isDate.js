/**
 *
 * Written by:     zhengxh
 * Created Date:   2017/10/26
 */
var util=require('util')
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate({}));
