//https://www.w3schools.com/nodejs/nodejs_url.asp
//
//
//preciso 7_summer.html  e tamén 7_winter.html

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
      var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
      fs.readFile(filename, function(err, data) {
              if (err) {
                        res.writeHead(404, {'Content-Type': 'text/html'});
                        return res.end("404 Not Found");
                      } 
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
          return res.end();
        });
}).listen(8080); 

// executar node 7_demo_fileserver.js
// visitar localhost:8080/7_summer.html
// visitar localhost:8080/7_winter.html
// visitar localhost:8080
