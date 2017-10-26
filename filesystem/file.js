/**
 * Written by:     zhengxh
 * Created Date:   2017/10/26
 */
// var fs=require('fs')
//
// // 异步读取
// fs.readFile('filesystem/input.txt',function (err,data) {
//     if(err){
//         return console.log(err)
//     }
//     console.log('异步读取' + data.toString());
// })
//
// // 同步读取
// var data=fs.readFileSync('filesystem/input.txt')
// console.log('同步读取' + data.toString());
// console.log('程序执行完毕')

// var fs=require('fs')
// // 异步打开文件
// console.log('准备打开文件');
// fs.open('filesystem/input.txt','r+',function (err,fd) {
//     if(err){
//         return console.error(err)
//     }
//     console.log('打开文件成功');
// })

// var fs=require('fs')
// console.log('准备打开文件');
// fs.stat('filesystem/input.txt',function (err,stats) {
//     if(err){
//         return console.error(err)
//     }
//     console.log(stats);
//     console.log('读取文件信息完成');
//
//     // 检查文件类型
//     console.log('是否为文件？' + stats.isFile());
//     console.log('是否为目录？' + stats.isDirectory());
// })

// var fs=require('fs')
// console.log('准备写入文件');
// fs.writeFile('filesystem/input.txt','我是通过写入的文件内容',function (err) {
//     if (err){
//         return console.error(err)
//     }
//     console.log('数据写入成功')
//     console.log('------我是分割线-------');
//     console.log('读取写入的数据');
//     fs.readFile('filesystem/input.txt',function (err,data) {
//         if (err){
//             return console.error(err)
//         }
//         console.log('异步读取文件数据：' + data.toString());
//     })
// })



// var fs=require('fs')
// var buf=new Buffer(1024)
//
// console.log('准备打开已存在的文件');
// fs.open('filesystem/input.txt','r+',function (err,fd) {
//     if (err){
//         return console.error(err)
//     }
//     console.log('文件打开成功');
//     console.log('截取10字节后的文件内容');
//     //截取文件
//     fs.ftruncate(fd,10,function (err) {
//         if (err){
//             return console.error(err)
//         }
//         console.log('文件截取成功');
//         console.log('准备读取文件');
//         fs.read(fd,buf,0,buf.length,0,function (err,bytes) {
//             if (err){
//                 return console.error(err)
//             }
//             console.log(bytes + ' 字节被读取');
//             // 仅输出读取的字节
//             if(bytes>0){
//                 console.log(buf.slice(0, bytes).toString());
//             }
//             // 关闭文件
//             fs.close(fd,function (err) {
//                 if (err){
//                     return console.error(err)
//                 }
//                 console.log('文件关闭成功');
//             })
//         })
//     })
//
// })


// var fs=require('fs')
// console.log('准备删除文件');
// fs.unlink('filesystem/input.txt',function (err) {
//     if (err){
//         return console.error(err)
//     }
//     console.log('文件删除成功');
// })

//
// var fs=require('fs')
// console.log('创建目录test');
// fs.mkdir('filesystem/test/',function (err) {
//     if(err){
//         return console.error(err)
//     }
//     console.log('目录创建成功');
// })


// var fs=require('fs')
// console.log('查看filesystem目录');
// fs.readdir('filesystem',function (err,files) {
//     if(err){
//         return console.error(err)
//     }
//     files.forEach(function (file) {
//         console.log(file);
//     })
// })


var fs=require('fs')
// 执行前创建一个空的tmp目录
console.log('准备删除tmp目录');
fs.rmdir('filesystem/tmp',function (err) {
    if(err){
        return console.error(err)
    }
    console.log('读取filesystem目录');
    fs.readdir('filesystem/',function (err,files) {
        if(err){
            return console.error(err)
        }
        files.forEach(function (file) {
            console.log(file);
        })
    })
})


