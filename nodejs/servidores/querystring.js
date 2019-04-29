//https://www.w3schools.com/nodejs/nodejs_http.asp



var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      var q = url.parse(req.url, true).query;
      var txt = q.year + " " + q.month;
      res.end(txt);
}).listen(8080);


console.log('servidor rulando en localhost:8080')
// node querystring.js
// visitar http://localhost:8080/?ano=2017&mes=xullo
