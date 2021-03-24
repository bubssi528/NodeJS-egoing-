var testFolder = './data';
var fs = require('fs');
fs.readdir(testFolder, function(err,files){
  files.forEach(function(file){
    console.log(file);
  })})