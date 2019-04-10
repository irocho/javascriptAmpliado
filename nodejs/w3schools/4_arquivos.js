//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
//
//
var fs = require('fs');
//method appends specified content to a file. If the file does not exist, the file will be created:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
      if (err) throw err;
  console.log('Saved!');
}); 


//method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
fs.open('mynewfile2.txt', 'w', function (err, file) {
      if (err) throw err;
  console.log('Saved!');
}); 



//method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
      if (err) throw err;
  console.log('Saved!');
}); 


//method replaces the specified file and content
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
      if (err) throw err;
  console.log('Replaced!');
}); 

// method deletes the specified file
fs.unlink('mynewfile2.txt', function (err) {
      if (err) throw err;
  console.log('File deleted!');
}); 

//method renames the specified file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
      if (err) throw err;
  console.log('File Renamed!');
});


// executar node 4_arquivos.js
// (non hai servidor)










