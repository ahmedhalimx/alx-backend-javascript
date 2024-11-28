const assert = require('node:assert');
const calculateNumber = require('./1-calcul.js');

describe('Launching TestSuite for ./1-calcul.js', () => {
	describe('1/3: Addition TestSuite::', () => {
		it('4 + 5 with type "SUM" returns 9', () => {
			return assert.equal(calculateNumber("SUM", 4, 5), 9);
		});

		it('12 + -2 with type "sum" returns 10', () => {
			return assert.equal(calculateNumber("sum", 12, -2), 10);
		});

		it('441.13235 + 210.12341 with type "SUM" returns 651', () => {
			return assert.equal(calculateNumber("sUm", 441.13235, 210.12341), 651);
		});

		it('-4 + -5 with type "sUm" returns -9', () => {
			return assert.equal(calculateNumber("sUm", -4, -5), -9);
		});
	});

	describe('2/3: Subtraction TestSuite::', () => {
		it('4 - 5 with type "SUBTRACT" returns -1', () => {
			return assert.equal(calculateNumber("SUBTRACT", 4, 5), -1);
		});

		it('12 - -2 with type "SUBTRACt" returns 14', () => {
			return assert.equal(calculateNumber("SUBTRACt", 12, -2), 14);
		});

		it('441.13235 - 210.12341 with type "subtract" returns 651', () => {
			return assert.equal(calculateNumber("subtract", 441.13235, 210.12341), 231);
		});

		it('-4 - -5 with type "SUBtRACT" returns 11', () => {
			return assert.equal(calculateNumber("SUBtRACT", -4, -5), 1);
		});
	});

	describe('3/3: Division TestSuite::', () => {
		it('8 / 4 with type "divide" returns 2', () => {
			return assert.equal(calculateNumber("divide", 8, 4), 2);
		});

		it('5 / 2 with type "DIVIDE" returns 2.5', () => {
			return assert.equal(calculateNumber("DIVIDE", 5, 2), 2.5);
		});

		it('20 / -5 with type "diVide" returns -4', () => {
			return assert.equal(calculateNumber("divide", 20, -5), -4);
		});

		it('2 / 0 with type "divide" returns "Error"', () => {
			return assert.equal(calculateNumber("divide", 2, 0), "Error");
		});
	});
});
