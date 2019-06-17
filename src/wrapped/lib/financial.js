// Companies Financial Statements

function emptyStringToUndefined(value) {
	return value === '' ? undefined : value;
}

module.exports = config => {
	const util = require('./util')(config);

	const normaliseKey = key => key.replace(/[^\w\d]/g, '_');

	const parser = d => {
		const unwrapped = Object.values(d)[0];
		const keys = Object.keys(unwrapped);
		const periods = Object.keys(Object.values(unwrapped)[0]);

		return periods.map(period => {
			const result = { period };
			keys.forEach(key => {
				result[normaliseKey(key)] = emptyStringToUndefined(unwrapped[key][period])
			});
			return result;
		});
	};

	const financials = fn => function ({symbol:parentSymbol},{ symbol:argSymbol, datatype, period },_,info) {
		const symbol = argSymbol || parentSymbol;
		return util.fn(['financials', fn, symbol], parser)({ datatype, period });
	};

	const fields = {
		// Income Statement
		// This API returns companies income statements.
		// https://financialmodelingprep.com/api/financials/income-statement/AAPL
		// This API returns companies income statements in csv format.
		// https://financialmodeingprep.com/api/financials/income-statement/AAPL?datatype=csv
		// This API returns companies quarterly income statements.
		// https://financialmodelingprep.com/api/financials/income-statement/AAPL?period=quarter
		// This API returns companies quarterly income statements in excel format.
		// https://financialmodeingprep.com/api/financials/income-statement/AAPL?period=quarter&datatype=xls
		income_statement: financials("income-statement"),
		// Balance Sheet Statement
		// This API returns companies balance sheet statements.
		// https://financialmodelingprep.com/api/financials/balance-sheet-statement/AAPL
		// This API returns companies balance sheet statements in csv format.
		// https://financialmodelingprep.com/api/financials/balance-sheet-statement/AAPL?datatype=csv
		// This API returns companies quarterly balance sheet statements.
		// https://financialmodelingprep.com/api/financials/balance-sheet-statement/AAPL?period=quarter
		// This API returns companies quarterly balance sheet statements in excel format.
		// https://financialmodelingprep.com/api/financials/balance-sheet-statement/AAPL?period=quarter&datatype=xls
		balance_sheet_statement: financials("balance-sheet-statement"),

		// Cash Flow Statement
		// This API returns companies cash flow statements.
		// https://financialmodelingprep.com/api/financials/cash-flow-statemen/AAPL
		// This API returns companies cash flow statements in csv format.
		// https://financialmodelingprep.com/api/financials/cash-flow-statement/AAPL?datatype=csv
		// This API returns companies quarterly cash flow statements.
		// https://financialmodelingprep.com/api/financials/cash-flow-statemen/AAPL?period=quarter
		// This API returns companies quarterly cash flow statements in excel format.
		// https://financialmodelingprep.com/api/financials/cash-flow-statement/AAPL?period=quarter&datatype=xls
		cash_flow_statement: financials("cash-flow-statement")
	};

	const financial = (parent,args)=>
		({...parent,...args});
	return Object.assign(financial,fields);
};
