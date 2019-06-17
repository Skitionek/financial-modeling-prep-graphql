module.exports = config => {
	const util = require('./util')(config);

	/**
	 * A generic function generator to access company API.
	 *
	 * @param {String} fn
	 *   Various?
	 */
	const company = (fn, ...args) => function ({ symbol = this && this.symbol }) {
		return util.fn(['company', fn, symbol], d => util.tryAccess(d, ...args))();
	};

	return {
		// Companies profile
		// This API returns companies profile (Price,Beta,Volume Average, Market Capitalisation, Last Dividend, 52 week range, stock price change, stock price change in percentage, Company Name, Exchange, Description, Industry,Sector,CEO,Website and image).
		// https://financialmodelingprep.com/api/company/profile/AAPL
		profile: company('profile', /.*/),

		// Stock Price
		// This API returns companies price.
		// https://financialmodelingprep.com/api/company/price/AAPL

		// Batch Request Stock Companies Price
		// This API returns multiple companies Prices.
		// https://financialmodelingprep.com/api/company/price/AAPL,FB,GOOG
		price: company('price', /.*/, 'price'),
		// prices: company('price',Object.entries,([key,price])=>({symbol:key,price})),

		// Companies Rating
		// This API returns companies rating.
		// https://financialmodelingprep.com/api/company/rating/AAPL
		rating: company('rating', /.*/, 'rating'),

		// Companies Discounted cash flow value (intrinsic value)
		// This API returns companies Discounted cash flow value (intrinsic value).
		// https://financialmodelingprep.com/api/company/discounted-cash-flow/AAPL
		discounted_cash_flow: company('discounted-cash-flow', /.*/, 'DCF')
	};
};