//https://www.w3schools.com/nodejs/nodejs_http.asp


var http = require('http');

http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(req.url);
  res.end();
}).listen(8080);

console.log('servidor rulando en localhost:8080')
// executar eco+url.js
// visitar localhost:8080/boas
// visitar localhost:8080/malas
//
