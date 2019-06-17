
module.exports = config => {
	const util = require('./util')(config);

	const parser = d => Object.values(d);

	return (
	// Most of the majors indexes (Dow Jones, Nasdaq, S&P 500)
	// This API returns most of the majors indexes (Dow Jones, Nasdaq, S&P 500)
	// https://financialmodelingprep.com/api/majors-indexes

	// Single Stock market index (Dow Jones)
	// This API returns stock market index (Dow Jones)
	// https://financialmodelingprep.com/api/majors-indexes/.DJI
		(_,{ index }={}) =>
			util.fn([`majors-indexes`, index],parser)()
	);
};
