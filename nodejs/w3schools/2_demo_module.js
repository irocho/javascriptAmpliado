//https://www.w3schools.com/nodejs/nodejs_modules.asp

var http = require('http');
var dt = require('./modulito');

http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080); 


console.log('servidor rulando en localhost:8080')
// executar node 2_demo_module.js
// visitar localhost:8080'
