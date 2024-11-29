const getPaymentTokenFromAPI = (success) => {
  return (success === true) ? Promise.resolve({ data: 'Successful response from the API' }) : null;
};

module.exports = getPaymentTokenFromAPI;
