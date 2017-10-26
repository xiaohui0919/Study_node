/**
 *
 * Written by:     zhengxh
 * Created Date:   2017/10/26
 */
var util=require('util')
console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp('another regexp'));
console.log(util.isRegExp({}));