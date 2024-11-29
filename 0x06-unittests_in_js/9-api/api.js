const express = require('express');

const App = express();
const PORT = 7865;

App.get('/', (_, res) => {
	res.send('Welcome to the payment system');
});

App.get('/cart/:id(\\d+)', (req, res) => {
	const id = req.params.id;
	res.send(`Payment methods for cart ${id}`);
});

App.listen(PORT, () => {
	console.log(`API available on localhost port ${PORT}`);
});

module.exports = App;
