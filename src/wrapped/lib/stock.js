
module.exports = config => {
	const util = require('./util')(config);

	/**
	 * Util function to get the stock data.
	 *
	 * @param {String} fn
	 *   The enum fn available for stock interests.
	 *
	 * @returns {Function}
	 *   A stock data function to accept user data that returns a promise.
	 *   {
	 *	    [Ticker]: {
	 *	        Ticker: String,
	 *	        Price: String,
	 *	        Changes: Float,
	 *	        ChangesPerc: String,
	 *	        companyName: String
	 *	    },
	 *	    ...
	 *	 }
	 *	 or
	 *	 [
	 *	    {
	 *	        Ticker: String,
     *          Price: Float,
     *          companyName: String
     *      },
	 *      ...
	 *   ]
	 */
	const stock = fn => function () {
		return util.fn(['stock', fn], d => util.tryAccess(d, Object.values))();
	};

	return {
		// Most Active Stock Companies
		// This API returns multiple Daily Most Active Stock Companies
		// https://financialmodelingprep.com/api/stock/actives
		actives: stock('actives'),

		// Most Gainer Stock Companies
		// This API returns multiple Daily Most Gainer Stock Companies
		// https://financialmodelingprep.com/api/stock/gainers
		gainers: stock('gainers'),

		// Most Loser Stock Companies
		// This API returns multiple Daily Most Losers Stock Companies
		// https://financialmodelingprep.com/api/stock/losers
		losers: stock('losers'),

		// All Company Ticker Symbols Name and Price available
		// This API all companies ticker symbols available in Financial Modeling Prep.
		// https://financialmodelingprep.com/api/stock/list/all
		all: stock('list/all')
	};
};
