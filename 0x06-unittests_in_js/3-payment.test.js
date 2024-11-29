const sinon = require('sinon');
const utils = require('./utils.js');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('Testin the API using Spies', () => {
	it('API uses the sendPaymentRequestToApi utility', () => {
		const funcSpy = sinon.spy(utils);
		sendPaymentRequestToApi(100, 20);
		expect(funcSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
		funcSpy.restore();
	})
})
