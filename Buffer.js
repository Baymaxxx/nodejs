/*
  string - 写入缓冲区字符串
  offset - 缓冲区开始写入索引值，默认为0
  length - 写入的字节数，默认为buffer.length
  encoding - 使用的编码，默认utf-8
 */
var buf = new Buffer(26);
for(var i=0 ; i<26 ; i++) {
    buf[i]=i+97;
}
console.log(buf.toString('ascii'));
var json = buf.toJSON(buf);
console.log(json);
//缓冲区合并
var buffer1 = new Buffer('菜鸟教程');
var buffer2 = new Buffer('www.xx.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer内容："+buffer3.toString());