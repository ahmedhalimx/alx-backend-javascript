const assert = require('assert');
const calcNum = require("./0-calcul.js");

describe("calcNum() test suite", () => {
	test('floating point whole numbers', () => {
		assert.strictEqual(calcNum(1.0, 2.0), 3);
	});

	test('rounding down b\'s floating point fractional number', () => {
		assert.strictEqual(calcNum(1.0, 2.4), 3);
	});

	test('rounding down a and b\'s floating point fractional number', () => {
		assert.strictEqual(calcNum(1.4, 2.4), 3);
	});

	test('rounding down a\'s floating point fractional number', () => {
		assert.strictEqual(calcNum(1.4, 2.0), 3);
	});

	test('rounding up b\'s floating point fractional numbers', () => {
		assert.strictEqual(calcNum(1.0, 2.5), 4);
	});

	test('rounding up a and b\'s floating point fractional numbers', () => {
		assert.strictEqual(calcNum(2.6, 2.5), 6);
	});

	test('rounding up a\'s floating point fractional numbers', () => {
		assert.strictEqual(calcNum(2.6, 2.0), 5);
	});

	test('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
		assert.strictEqual(calcNum(2.499999, 3.499999), 5);
	});
});
