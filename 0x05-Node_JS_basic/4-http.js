const http = require('http');

const app = http.createServer();

app.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello ALX!');
});

app.listen(1245);

module.exports = app;
