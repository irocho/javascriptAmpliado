//Servidor mínimo en Node
//
// explicado paseniño no wiki:
// https://github.com/irocho/javascriptAmpliado/wiki/Node.js/
//
//
var http = require("http");

http.createServer(function(request, response) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("<h1>Servidor funcionando</h1>");
      response.end();
}).listen(8888);



// executamos no terminal
//
// node servidor_simple.js
//
// visitamos no navegador
//
// http://localhost:8888
