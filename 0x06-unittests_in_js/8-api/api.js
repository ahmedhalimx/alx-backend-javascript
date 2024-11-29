const express = require('express');

const App = express();
const PORT = 7865;

App.get('/', (req, res) => {
	res.end('Welcome to the payment system');
});

App.listen(PORT, () => {
	console.log('API available on localhost port 7865');
});

module.exports = App;
