//https://www.w3schools.com/nodejs/nodejs_events.asp
//
//
//Versión cutre: abro un arquivo e aviso
//


var fs = require('fs');
var rs = fs.createReadStream('./proba.txt');

rs.on('open', function () {
      console.log('The file is open');
});
