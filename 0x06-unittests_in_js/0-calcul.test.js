const assert = require('assert');

const calculateNumber = require("./0-calcul.js");

describe("Launching TestSuite for ./0-calcul.js", () => {
	it('1/8: Floating point whole numbers', () => {
		assert.strictEqual(calculateNumber(1.0, 2.0), 3);
	});

	it('2/8: Rounding down b\' only', () => {
		assert.strictEqual(calculateNumber(1.0, 2.4), 3);
	});

	it('3/8: Rounding down a and b', () => {
		assert.strictEqual(calculateNumber(1.4, 2.4), 3);
	});

	it('4/8: Rounding down a only', () => {
		assert.strictEqual(calculateNumber(1.4, 2.0), 3);
	});

	it('5/8: Rounding up b', () => {
		assert.strictEqual(calculateNumber(1.0, 2.5), 4);
	});

	it('6/8: Rounding up a and b', () => {
		assert.strictEqual(calculateNumber(2.6, 2.5), 6);
	});

	it('7/8: Rounding up a only', () => {
		assert.strictEqual(calculateNumber(2.6, 2.0), 5);
	});

	it('8/8: Rounding down a and b with trailing digits\'s', () => {
		assert.strictEqual(calculateNumber(815.431329, 123.14952529), 938);
	});
});
