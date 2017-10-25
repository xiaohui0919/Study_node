/**
 * Written by:     zhengxh
 * Created Date:   2017/10/25
 */
var server = require("./server")
var router = require("./router")

server.start(router.route)