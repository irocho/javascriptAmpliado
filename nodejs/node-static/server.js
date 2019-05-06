// https://www.tutorialsteacher.com/nodejs/serving-static-files-in-nodejs
//
//

var http = require('http');
var nStatic = require('node-static');

var fileServer = new nStatic.Server('./public');//directorio de traballo
http.createServer(function (req, res) {
        fileServer.serve(req, res);
}).listen(5000);

console.log('servidor no porto 5000')
