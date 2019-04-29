//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
//reads the HTML file, and return the content
//
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('proba.txt', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

console.log('servidor rulando en localhost:8080')
// executar node server+readfile.js
// visitar localhost:8080
