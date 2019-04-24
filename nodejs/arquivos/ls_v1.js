// Node Web Development 2nd Edition
// páx 30 

var fs = require('fs');

var files = fs.readdirSync('.')
for (fn in files){
    console.log(files[fn]);
}

//executar con node ls.js
