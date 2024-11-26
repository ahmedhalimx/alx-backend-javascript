const http = require('http');

const PORT = 1245;

const app = http.createServer();

app.on('request', (req, res) => {
  const responseMsg = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseMsg.length);
  res.statusCode = 200;

  res.write(Buffer.from(responseMsg));
  res.end();
});

app.listen(PORT);

module.exports = app;
