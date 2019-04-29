// Node Web Development 2nd Edition
// páx 68 
// not so simple HTTP server
// Real web applications of course give varying responses for different URLs and HTTP verbs


var http = require('http');
var util = require('util');
var url = require('url');
var os = require('os');

var server = http.createServer();
server.on('request',function(req,res){
    var requrl = url.parse(req.url, true); // <-
    if (requrl.pathname==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(
            ["<html><head> <meta charset=UTF-8",
                "<title>Capítulo 4</title> </head>",
                "<body> <h1> Boas </h1>",
                "<p>ññáéíóúü</p>",
                "</body></html>"   
            ].join('\n')
        );
    } else if (requrl.pathname === "/osinfo"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(
            ["<html><head>",
                "<title>Operating System Info</title></head>",
                "<body><h1>Operating System Info</h1>",
                "<table>",
                "<tr><th>TMP Dir</th><td>{tmpdir}</td></tr>",
                "<tr><th>Host Name</th><td>{hostname}</td></tr>",
                "<tr><th>OS Type</th>",
                "<td>{type} {osplat} {osarch} {osrelease}</td></tr>",
                "<tr><th>Uptime</th>",
                "<td>{uptime} {loadavg}</td></tr>",
                "<tr><th>Memory</th>",
                "<td>total: {totalmem} free:{freemem}</td></tr>",
                "<tr><th>CPU's</th>",
                "<td><pre>{cpudata}</pre></td></tr>",
                "<tr><th>Network</th>",
                "<td><pre>{netdata}</pre></td></tr>",
                "</table>",
                "</body></html>"]
            .join('\n')
            .replace("{tmpdir}", os.tmpdir())
            .replace("{hostname}", os.hostname())
            .replace("{type}", os.type())
            .replace("{osplat}", os.platform())
            .replace("{osarch}", os.arch())
            .replace("{osrelease}", os.release())
            .replace("{uptime}", os.uptime())
            .replace("{loadavg}", util.inspect(os.loadavg()))
            .replace("{totalmem}", os.totalmem())
            .replace("{freemem}", os.freemem())
            .replace("{cpudata}", util.inspect(os.cpus()))
            .replace("{netdata}",
                util.inspect(os.networkInterfaces()))        
        );
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("chuga a  URL "+ req.url);
    }
});


server.listen(8124);
console.log('escoitando en http://localhost:8124')
//executar con node server+url.js
// navegador con localhost:8124
// navegador con localhost:8124/osinfo
// navegador con localhost:8124/calqueraCarallada
