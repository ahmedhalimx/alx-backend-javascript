const express = require('express');

const App = express();
const PORT = 7865;

App.use(express.json());

App.get('/', (_req, res) => {
	res.send('Welcome to the payment system');
});

App.get('/cart/:id(\\d+)', (req, res) => {
	const id = req.params.id;

	res.send(`Payment methods for cart ${id}`);
});

App.get('/available_payments', (_req, res) => {
	res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

App.post('/login', (req, res) => {
	let username = '';

	if (req.body) {
		username = req.body.userName;
	}

	res.send(`Welcome ${username}`);
});

App.listen(PORT, () => {
	console.log(`API available on localhost port ${PORT}`);
});

module.exports = App;
