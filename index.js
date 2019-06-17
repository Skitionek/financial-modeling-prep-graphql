import FinancialModelingPrep from "./src/dataSource";
import { GraphQLModule } from '@graphql-modules/core';
import 'graphql-import-node';
import * as typeDefs from './schema.graphql';
import { financialModelingPrepInterface, financialmodelingprepInterface } from "../../constants";
import { forward, fragmentResolver } from "../../utilities";

const { util, crypto: { cryptocurrency, cryptocurrencies }, financial, forex, stock, company, technical, performance } = FinancialModelingPrep();

export const providerFactory = (params) => ({
	provide: financialmodelingprepInterface,
	useFactory: () => FinancialModelingPrep(params), // Init database connector
	...params
});
const provider = providerFactory();

const cryptocurrencyFields = ["Ticker","Price","Changes","name","market_cap_usd"];

export default new GraphQLModule({
	typeDefs,
	resolvers: {
		Query: {
			cryptocurrency: forward,
			cryptocurrencies,
			cryptocurrencyExchangeRates: forex,
			financial: forward,
			technical,
			cryptocurrencyExchangeRate: forex,
			performance
		},
		Forex: forex,
		Cryptocurrency: fragmentResolver(cryptocurrency,undefined,cryptocurrencyFields),
		Financial: financial,
		Technical: {
			major_indexes: technical
		},
		CompanyProfile: company.profile,
		Company: {
			...company,
			financial
		},
		Stock: {
			...stock
		}
	}
	// providers: [
	// 	provider
	// ]
});