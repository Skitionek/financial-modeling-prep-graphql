/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  24/04/2019
*/

/*

The FinancialModelingprep API is a set of services designed for developers and engineers. It can be used to build high-quality apps and services. We’re always working to improve the FinancialModelingPrep API. Please check back for enhancements and improvements.
	
Terms
By using the FinancialModelingprep API, you agree to our terms.

 */
	
/*
### Companies Financial Statements

Annual Income Statement
This API returns companies income statements.
https://financialmodelingprep.com/api/financials/income-statement/AAPL

Annual Balance Sheet Statement
This API returns companies balance sheet statements.
https://financialmodelingprep.com/api/financials/balance-sheet-statement/AAPL

Annual Cash Flow Statement
This API returns companies cash flow statements.
https://financialmodelingprep.com/api/financials/cash-flow-statemen/AAPL

Quarter Income Statement
This API returns companies quarterly income statements.
https://financialmodelingprep.com/api/financials/income-statement/AAPL?period=quarter

Quarter Balance Sheet Statement
This API returns companies quarterly balance sheet statements.
https://financialmodelingprep.com/api/financials/balance-sheet-statement/AAPL?period=quarter

Quarter Cash Flow Statement
This API returns companies quarterly cash flow statements.
https://financialmodelingprep.com/api/financials/cash-flow-statemen/AAPL?period=quarter
 */
export const financialsParamsSet = [
	{ symbol3: 'AAPL' }, // TODO adding 3 is ugly workaround
	{ symbol3: 'AAPL', period3: 'quater'}
];

/*
Companies Financial Statements 
### All Company Ticker Symbols Name and Price available
This API return all companies ticker symbols available in Financial Modeling Prep.
https://financialmodelingprep.com/api/stock/list/all
*/
export const stockParams = {};

/*
### Companies profile
This API returns companies profile (Price,Beta,Volume Average, Market Capitalisation, Last Dividend, 52 week range, stock price change, stock price change in percentage, Company Name, Exchange, Description, Industry,Sector,CEO,Website and image).
https://financialmodelingprep.com/api/company/profile/AAPL
*/
export const companyParams = {
	symbol: 'AAPL'
};

/*
### Financial Ratios
This API returns company financial ratios (liquidity Measurement Ratios, Profitability Indicator Ratios, Debt Ratios, Operating Performance Ratios, Cash Flow Indicator Ratios and Investment Valuation Ratios).
https://financialmodelingprep.com/api/financial-ratios/AAPL

### Realtime Stock Price
Stock Price
This API returns companies Realtime stock price.
https://financialmodelingprep.com/api/company/real-time-price/AAPL
*/
companyParams;

/*
Stock Price list
This API returns all companies realtime stock price.
https://financialmodelingprep.com/api/stock/real-time/all
 */
stockParams;

/*
Hourly Price
This API returns companies daily price.
https://financialmodelingprep.com/api/company/price/AAPL

Batch Stock Price
This API returns companies Realtime stock price in Batch.
https://financialmodelingprep.com/api/company/real-time-price/AAPL,FB,GOOG

### Stock Historical Price
Close price
This API returns stock historical prices.
https://financialmodelingprep.com/api/company/historical-price/AAPL?serietype=line
*/
companyParams;

/*
Historical price with change and volume
This API returns the full stock historical prices with change and volume.
https://financialmodelingprep.com/api/historical-price-full/AAPL

Close price Time series
This API returns time series stock historical prices for the last x days. You can choose for how many days you want the stock historical price
https://financialmodelingprep.com/api/company/historical-price/AAPL?serietype=line&timeseries=5

Historical price with change and volume Time series
This API returns the full time series stock historical prices with change and volume for the last x days. You can choose for how many days you want the full stock historical price
https://financialmodelingprep.com/api/historical-price-full/AAPL?timeseries=5

Close price in Array format
This API returns stock historical prices in Array format.
https://financialmodelingprep.com/api/company/historical-price/AAPL?serietype=line&serieformat=array

Open High Low Close price (OHLC)
This API returns stock historical prices.
https://financialmodelingprep.com/api/company/historical-price/AAPL?serietype=candle

Open High Low Close price (OHLC) Time series
This API returns time series stock historical prices for the last x days. You can choose for how many days you want the stock historical price
https://financialmodelingprep.com/api/company/historical-price/AAPL?serietype=candle&timeseries=5

Open High Low Close price (OHLC) in Array Format
This API returns stock historical prices in Array format.
https://financialmodelingprep.com/api/company/historical-price/AAPL?serietype=candle&serieformat=array
*/
export const historicalParamsSet = [
	{ symbol: 'AAPL' },
	{ symbol: 'AAPL', serietype: 'line', timeseries: 5 },
	{ symbol: 'AAPL', timeseries: 5 },
	{ symbol: 'AAPL', serietype: 'line', serieformat: 'array' },
	{ symbol: 'AAPL', serietype: 'candle' },
	{ symbol: 'AAPL', serietype: 'candle', timeseries: 5 },
	{ symbol: 'AAPL', serietype: 'candle', serieformat: 'array' }
];

/*
### Companies Rating
This API returns companies rating.
https://financialmodelingprep.com/api/company/rating/AAPL

### Companies Discounted cash flow value (intrinsic value)
This API returns companies Discounted cash flow value (intrinsic value).
https://financialmodelingprep.com/api/company/discounted-cash-flow/AAPL
*/
companyParams;

/*
### Batch Request Stock Companies Price
This API returns multiple companies Prices.
https://financialmodelingprep.com/api/company/price/AAPL,FB,GOOG
*/
export const companiesParams = {
	symbols: ['AAPL','FB','GOOG']
};

/*
### Most Active Stock Companies
This API returns multiple Daily Most Active Stock Companies.
https://financialmodelingprep.com/api/stock/actives

### Most Gainer Stock Companies
This API returns multiple Daily Most Gainer Stock Companies.
https://financialmodelingprep.com/api/stock/gainers

### Most Loser Stock Companies
This API returns multiple Daily Most Losers Stock Companies.
https://financialmodelingprep.com/api/stock/losers
*/
stockParams;

/*
### Most Crypto currencies
This API provide a wide range of data feed for most digital and crypto currencies.
https://financialmodelingprep.com/api/cryptocurrency

### Single Cryptocurrency such as Bitcoin
This API provide a wide range of data feed for most digital and crypto currency such as Bitcoin.
https://financialmodelingprep.com/api/cryptocurrency/BTC
*/
export const cryptocurrenciesParams = {};
export const cryptocurrencyParams = { symbol: 'BTC' };

/*
### Currency exchange rates (Forex)
This API returns the currency exchange rates (FX)
https://financialmodelingprep.com/api/forex

### SingleCurrency exchange rate such as Euro-dollars
This API returns the currency exchange rate such as Euro-dollars (FX).
https://financialmodelingprep.com/api/forex/EURUSD
*/
export const forexParams = { from_currency: 'EUR', to_currency: 'USD' };
export const forexesParams = { };

/*
### Most of the majors indexes (Dow Jones, Nasdaq, S&P 500)
This API returns most of the majors indexes (Dow Jones, Nasdaq, S&P 500).
https://financialmodelingprep.com/api/majors-indexes

### Single Stock market index (Dow Jones)
This API returns stock market index (Dow Jones).
https://financialmodelingprep.com/api/majors-indexes/.DJI
*/
export const majorIndexesParams = { index: '.DJI' };

/*
### Stock Market Sectors Performance
This API returns Stock Market Sectors Performance.
https://financialmodelingprep.com/api/sectors-performance
*/
export const performanceParams = {};

/*
### Is the Stock Market Open
This API returns company if the stock market is open.
https://financialmodelingprep.com/api/is-the-market-open
Stock market is opened in JSON format.
https://financialmodelingprep.com/api/is-the-market-open?datatype=json
 */
export const marketOpenParams = {};