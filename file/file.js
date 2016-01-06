//api:http://www.runoob.com/nodejs/nodejs-fs.html
var fs = require('fs');

//异步读取
fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("异步读取："+data.toString());
});

//同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取："+data.toString());
console.log("程序执行完毕");

/*
parse :
    path - 文件的路径
    flags - 文件打开的行为
    mode -  设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
    callback - 回调函数，带有两个参数如：callback(err, fd)。
 */