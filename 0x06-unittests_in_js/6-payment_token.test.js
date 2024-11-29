const expect = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Test getPaymentTokenFromAPI function', () => {
	it('Check if getPaymentTokenFromAPI(true) doesn\'t return null', (done) => {
		getPaymentTokenFromAPI(true)
			.then((res) => {
				expect(res).to.deep.equal({ data: 'Successful response from the API' });
				done();
			})
			.catch(err => done(err));
	});
});
