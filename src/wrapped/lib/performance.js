
// Stock Market Sectors Performance
// This API returns Stock Market Sectors Performance
// https://financialmodelingprep.com/api/sectors-performance

module.exports = config => {
	const util = require('./util')(config);

	const normaliseKey = key => key.replace(/[^\w\d]/g, '_');

	const parser = d => {
		Object.keys(d).forEach(key => {d[normaliseKey(key)] = d[key].Change});
		return d;
	};

	return util.fn(['sectors-performance'], parser);
};
