/* DOCUMENT INFORMATION
	- Author:   Dominik Maszczyk
	- Email:    Skitionek@gmail.com
	- Created:  23/04/2019
*/

import "@babel/polyfill";
import 'reflect-metadata';

import { createTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server';
import Module from "../index";
import gqlGenerator from 'gql-generator-node';
import '../../../../tests/jest.extensions';
import {
	cryptocurrenciesParams,
	cryptocurrencyParams,
	financialsParamsSet,
	forexParams, majorIndexesParams,
	performanceParams
} from "./mocks";

describe('financialmodelingprep.module', () => {
	// get module and inject mockup
	const { schema } = Module;

	// create a test server to test against, using our production typeDefs,
	// resolvers, and dataSources.
	const server = new ApolloServer({
		schema: Module.schema,
		context: session => session,
		formatResponse: r=>{
			return r; // hook for debugging
		},
		formatError: r=>{
			return r; // hook for debugging
		}
	});
	// use the test server to create a query function
	const graphql = createTestClient(server).query;

	const { queries: generatedQueries } = gqlGenerator(schema);

	// get all queries to be tested
	const { cryptocurrency, cryptocurrencies, cryptocurrencyExchangeRates, financial, cryptocurrencyExchangeRate, performance, technical, ...rest } = generatedQueries;
	const queriesWithoutTests = Object.keys(rest);
	queriesWithoutTests.forEach(query => test.todo(`Query ${query} needs to be tested!`));

	const returnNoErrors = variables => `returns no errors\t\t${JSON.stringify(variables)||''}`;
	const responseMatchesSchema = variables => `response matches schema\t\t${JSON.stringify(variables)||''}`;

	describe('cryptocurrency', () => {
		const variables = cryptocurrencyParams;
		const response = graphql({ query: cryptocurrency, variables });

		it(returnNoErrors(variables), () => expect(response).resolves.toHaveProperty('errors', undefined));
		it(responseMatchesSchema(variables), () => expect(response).resolves.toMatchSchema(schema));
	});

	describe('cryptocurrencyExchangeRates', () => {
		const variables = {};
		const response = graphql({ query: cryptocurrencyExchangeRates, variables });

		it(returnNoErrors(variables), () => expect(response).resolves.toHaveProperty('errors', undefined));
		it(responseMatchesSchema(variables), () => expect(response).resolves.toMatchSchema(schema));
	});

	describe('cryptocurrencies', () => {
		const variables = cryptocurrenciesParams;
		const response = graphql({ query: cryptocurrencies, variables });

		it(returnNoErrors(variables), () => expect(response).resolves.toHaveProperty('errors', undefined));
		it(responseMatchesSchema(variables), () => expect(response).resolves.toMatchSchema(schema));
	});

	describe('financial', () => {
		financialsParamsSet.forEach(variables => {
			const response = graphql({ query: financial, variables });

			it(returnNoErrors(variables), () => expect(response).resolves.toHaveProperty('errors', undefined));
			it(responseMatchesSchema(variables), () => expect(response).resolves.toMatchSchema(schema));
		})
	});

	describe('cryptocurrencyExchangeRate', () => {
		const variables = forexParams;
		const response = graphql({ query: cryptocurrencyExchangeRate, variables });

		it(returnNoErrors(variables), () => expect(response).resolves.toHaveProperty('errors', undefined));
		it(responseMatchesSchema(variables), () => expect(response).resolves.toMatchSchema(schema));
	});

	describe('performance', () => {
		const variables = performanceParams;
		const response = graphql({ query: performance, variables });

		it(returnNoErrors(variables), () => expect(response).resolves.toHaveProperty('errors', undefined));
		it(responseMatchesSchema(variables), () => expect(response).resolves.toMatchSchema(schema));
	});

	describe('technical', () => {
		const variables = majorIndexesParams;
		const response = graphql({ query: technical, variables  });

		it(returnNoErrors(variables), () => expect(response).resolves.toHaveProperty('errors', undefined));
		it(responseMatchesSchema(variables), () => expect(response).resolves.toMatchSchema(schema));
	});
});