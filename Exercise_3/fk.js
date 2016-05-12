//load fs module from Node core library
var fs = require('fs');
//get path to file
var path = process.argv[2];
/* read file, returning Buffer object containing file contents;
Then convert to string & split into array of lines */
var data = fs.readFileSync(path).toString().split('\n');
console.log(data.length-1);
