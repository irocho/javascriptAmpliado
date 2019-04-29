//https://www.w3schools.com/nodejs/nodejs_npm.asp/
//
//usar un paquete que se instalou previamente con
//
//npm install upper-case 
//
//que trae a función uc() para pasar a maiúsculas)
//
var http = require('http');
var uc = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<meta charset="UTF-8">')
    res.write(uc("Son maiúscula!!"));
    res.end();
}).listen(8080);


//executar node paquete_novo.js
//visitar localhost:8080
