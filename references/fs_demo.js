const fs = require('fs');
const path = require('path');

// //Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
// 	if(err) throw err;
// 	console.log('Folder Created..')
// });

//Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'ggfhgkghg', err => {
// 	if(err) throw err;
// 	console.log('File written to..')
// 	//File append
// 	fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),'jhfhchgfyfghgh', err => {
// 		if(err) throw err;
// 		console.log('File written to..')
// 	});
// });

// //Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8',(err, data) => {
// 	if(err) throw err;
// 	console.log(data)
// });

//Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
	if(err) throw err;
	console.log('File renamed...')
});

