// Node Web Development 2nd Edition
// páx 31 
// simple HTTP server
//
//  mellorada app.js do cap2 destacar que http.createServer crea un obxecto http.Server que é un EventEmitter

var http = require('http');

var servidor = http.createServer();

servidor.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Boas dende a segunda versión\n');
    }
);

servidor.listen(8124, '127.0.0.1');
console.log('Servidor rulando en http://127.0.0.1:8124');
