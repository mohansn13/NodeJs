// initialisation



    var fs;
    var path;
    var data;
    //load fs module from Node core library
    fs = require('fs');
    //get path to file
    path = process.argv[2];
    read = fs.readFileSync(path);



    data = read.toString().split('\n');
    fs.open(data, 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
       console.log("no file");
   }
  console.log("File opened successfully!");
});
    /*    if (err) {
    console.error('There was an error reading the file!', err);
    return "there is a error";
} */
  // Otherwise handle the data



    /* read file, returning Buffer object containing file contents;
    Then convert to string & split into array of lines */



console.log(data.length-1);
