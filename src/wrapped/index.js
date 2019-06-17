
/**
 * The FinancialModelingPrep core module.
 */
module.exports = (config={}) => {
	// Add the base url for submodules to use.
	config.base = `https://financialmodelingprep.com/api/`;

	// Include all the submodules.
	return {
		util: require('./lib/util')(config),
		company: require('./lib/company')(config),
		crypto: require('./lib/crypto')(config),
		financial: require('./lib/financial')(config),
		forex: require('./lib/forex')(config),
		performance: require('./lib/performance')(config),
		stock: require('./lib/stock')(config),
		technical: require('./lib/technical')(config)
	};
};
