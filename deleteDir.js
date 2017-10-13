/****
*****TIME: 20171012
*****BY:   Maggie
*****/

var fs = require('fs');
//当前配置项
const currentDir = '../abcd';  //所选择的目录
const NeedDeleteDir = '.svn';  //需要删除的文件夹包括文件夹下的内容

console.info("当前目录：", fs.realpathSync(currentDir))
console.log("starting delect path, please wait .......");

//读取所有该目录下的文件。
const ReadDir = function(path){
	if(fs.existsSync(path)){  //检测路径是否存在
		fs.readdir(path,function(err, files){ //读取路径
			if(err) return console.log("ERROR-ReadDir:", err);
			
			files.forEach(function(file){
				if(file === NeedDeleteDir){  //匹配路径
					console.log('Current File:',path, file);
					opetateDir(path + '/' + file);
				}else if(fs.statSync(path + '/' + file).isDirectory()){  //检测路径是否是文件夹
					ReadDir(path + '/' + file); //递归子文件夹
				}
			})
		})
	}
}

//删除文件及文件夹
const opetateDir = function(path){
	var files = [];
	if(fs.existsSync(path)){ //检测路径是否存在
		files = fs.readdirSync(path); //读取路径
		files.forEach(function(file){
			let curDir = path + '/' + file;
			let stats = fs.statSync(curDir); 
			if(stats.isDirectory()){ //检测路径是否是文件夹
				opetateDir(curDir); //递归子文件夹
			}else{
				fs.unlinkSync(curDir);  //删除文件
			}
			
		});
		fs.rmdirSync(path);  //删除文件夹
		console.log("SUCCESS RM Dir!", path);
	}
}

//开始执行
ReadDir(currentDir);
console.log("清理完成！");