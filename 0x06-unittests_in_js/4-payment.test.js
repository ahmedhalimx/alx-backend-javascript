const sinon = require('sinon');
const utils = require('./utils.js');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('Testing the Utils Object using a Stub and a Spy', () => {
	it('API returns 10 when given ("SUM", 100, 20)', () => {
		const aStub = sinon.stub(utils, 'calculateNumber').returns(10);
		const aSpy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);

		expect(aStub.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
		expect(aSpy.calledOnceWithExactly("The total is: 10")).to.be.true;
		aStub.restore();
		aSpy.restore();
	})
})
