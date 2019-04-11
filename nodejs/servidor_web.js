// Obtido de:
// https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Moi boas, outra versión\n');
});

server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
});

// executar node servidor_web.js
// visitar http://localhost:3000
