const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('Launching TestSuite for ./1-calcul.js', () => {
	describe('1/3: Addition TestSuite::', () => {
		it('4 + 5 with type "SUM" returns 9', () => {
			return expect(calculateNumber("SUM", 4, 5)).to.equal(9);
		});

		it('12 + -2 with type "sum" returns 10', () => {
			return expect(calculateNumber("sum", 12, -2)).to.equal(10);
		});

		it('441.13235 + 210.12341 with type "SUM" returns 651', () => {
			return expect(calculateNumber("sUm", 441.13235, 210.12341)).to.equal(651);
		});

		it('-4 + -5 with type "sUm" returns -9', () => {
			return expect(calculateNumber("sUm", -4, -5)).to.equal(-9);
		});
	});

	describe('2/3: Subtraction TestSuite::', () => {
		it('4 - 5 with type "SUBTRACT" returns -1', () => {
			return expect(calculateNumber("SUBTRACT", 4, 5)).to.equal(-1);
		});

		it('12 - -2 with type "SUBTRACt" returns 14', () => {
			return expect(calculateNumber("SUBTRACt", 12, -2)).to.equal(14);
		});

		it('441.13235 - 210.12341 with type "subtract" returns 231', () => {
			return expect(calculateNumber("subtract", 441.13235, 210.12341)).to.equal(231);
		});

		it('-4 - -5 with type "SUBtRACT" returns 1', () => {
			return expect(calculateNumber("SUBtRACT", -4, -5)).to.equal(1);
		});
	});

	describe('3/3: Division TestSuite::', () => {
		it('8 / 4 with type "divide" returns 2', () => {
			return expect(calculateNumber("divide", 8, 4)).to.equal(2);
		});

		it('5 / 2 with type "DIVIDE" returns 2.5', () => {
			return expect(calculateNumber("DIVIDE", 5, 2)).to.equal(2.5);
		});

		it('20 / -5 with type "diVide" returns -4', () => {
			return expect(calculateNumber("divide", 20, -5)).to.equal(-4);
		});

		it('2 / 0 with type "divide" returns "Error"', () => {
			return expect(calculateNumber("divide", 2, 0)).to.equal("Error");
		});
	});
});
