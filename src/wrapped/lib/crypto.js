
module.exports = config => {
	const util = require('./util')(config);

	/**
	 * Util function to get the crypto data.
	 *
	 * @param {String} fn
	 *   The enum fn available for crypto data.
	 *
	 * @returns {Function}
	 *   A data function to accept user input and returns a promise.
	 */

	return {
		// Most Crypto currencies
		// This API provide a wide range of data feed for most digital and crypto currencies.
		// https://financialmodelingprep.com/api/cryptocurrency

		// Single Cryptocurrency such as Bitcoin
		// This API provide a wide range of data feed for most digital and crypto currency such as Bitcoin.
		// https://financialmodelingprep.com/api/cryptocurrency/BTC
		cryptocurrency: (_,{ currency, symbol}) =>
			util.fn(['cryptocurrency',symbol || currency],d=>util.tryAccess(d,/.*/))(),
		cryptocurrencies: () =>
			util.fn(['cryptocurrency'],d=>util.tryAccess(d,Object.values))()
	};
};
