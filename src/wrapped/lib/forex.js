
module.exports = config => {
	const util = require('./util')(config);

	const parser = d => {
		const result = Object.entries(d).map(([currencies, value]) => {
			const [from_currency, to_currency] = currencies.split('/');
			const result = { from_currency, to_currency };
			Object.entries(value).forEach(([k, v]) => result[k.toLowerCase()] = v);
			return result;
		});
		return result.length === 1 ? result[0] : result;
	};

	return (
	// Currency exchange rates (FX)
	// This API returns the currency exchange rates (FX)
	// https://financialmodelingprep.com/api/forex

	// SingleCurrency exchange rate such as Euro-dollars
	// This API returns the currency exchange rate such as Euro-dollars, ... (FX)
	// https://financialmodelingprep.com/api/forex/EURUSD
		(_,{ from_currency, to_currency } = {}) => {
			const path = ['forex'];
			if (from_currency && to_currency) path.push(`${from_currency}${to_currency}`);
			return util.fn(path,parser)()
		});
};
