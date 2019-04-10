// Node Web Development 2nd Edition
// páx 30 

var fs = require('fs');
var dir = '.';
if (process.argv[2]) dir = process.argv[2];
var files = fs.readdirSync(dir);
for (fn in files){
    console.log(files[fn]);
}

//executar con node ls.js ruta-calquera
