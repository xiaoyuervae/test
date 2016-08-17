var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
// 跳过请求的收藏夹的图标
if(req.url=='/favicon.ico'){
return ;
}
// 定义要读取的目录
var path = './demo/';
// 定义数组对象dir,包含所有的文件夹名称
var dir = [];
/*
*  readdirSync() 以同步的方式读取文件夹
* */
var files = fs.readdirSync(path);
// 遍历包含所有文件名的files数组
for(var i in files){
    // 拼接指定的路径,读取文件状态
    var stats =  fs.statSync(path+files[i]);
	// 判断是否是目录
    if(stats.isDirectory()){
        files[i].forEach(function(item) {
        	dir.push(item) ; 
        })
    }
}

// 输出最终的结果
console.log(dir);

// 结束响应
res.end();
}).listen(3000,'127.0.0.1') ;