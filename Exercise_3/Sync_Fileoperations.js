// initialisation
var fs;
var path;
var data;
var util = require('util');

//load fs module from Node core library
fs = require('fs');
//get path to file
path = (process.argv[2]) || ""; //default is an empty string

if (path === '' && typeof path === "undefined") {
    console.log("path must be a string or Buffer");
    return;
}

/* read file, returning Buffer object containing file contents;
Then convert to string & split into array of lines */
try{
    data = fs.readFileSync(path).toString().split('\n');
    console.log(data.length-1);
}
catch(err){
    if (err.code === 'ENOENT') {
      console.log('File not found!');
    } else {
        console.log(
            "An technical error occured."
        );
    }
}
