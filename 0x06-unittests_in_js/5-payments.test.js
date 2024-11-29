const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment.js');

describe('Appling Hooks', function() {
	let aSpy = undefined;

	beforeEach(function() {
		aSpy = sinon.spy(console, 'log');
	});

	afterEach(function() {
		aSpy.restore();
	});

	it('logs correctly with 100, 20', () => {
		sendPaymentRequestToApi(100, 20);
		expect(aSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
	});

	it('logs correctly with 10, 10', () => {
		sendPaymentRequestToApi(10, 10);
		expect(aSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
	});
});
