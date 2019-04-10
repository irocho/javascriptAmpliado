// Node Web Development 2nd Edition
// páx 31 
// simple HTTP server

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Boas\n');
}).listen(8124, '127.0.0.1');

//the listen function creates an event listener which implements the HTTP protocol
console.log('Servidor rulando en http://127.0.0.1:8124');

// executar node app.js
// CTR C para parar
// no navegador onde manda
