function calculateNumber(type, a, b) {
	let rA = Math.round(a);
	let rB = Math.round(b);
	let result = 0;

	switch (type.toUpperCase()) {
		case 'SUM':
			result = rA + rB;
			break;
		case 'SUBTRACT':
			result = rA - rB;
			break;
		case 'DIVIDE':
			result = (rB === 0) ? 'Error' : rA / rB;
			break;

	}
	return result;
};

module.exports = calculateNumber;
