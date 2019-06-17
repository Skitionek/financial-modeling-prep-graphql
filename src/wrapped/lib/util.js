import * as HttpStatus from 'http-status-codes';

import BareRequest from 'request-promise-native';

const request = BareRequest.defaults({ headers: { 'Content-Type': 'application/json' } });

module.exports = config => {

	/**
	 * Util function to build the proper API url.
	 *
	 * @param path
	 * @param {Object} params
	 *   The parameter object as type:value pairs.
	 *
	 */
	const url = (path, params = {}) => {
		const params_formated = Object.entries(Object.assign({}, params, { datatype: 'json' }))
			.map(([type, value]) => {
				if (value !== undefined) {
					return `${type}=${encodeURI(value)}`;
				}

				return undefined;
			})
			.filter(value => value !== undefined)
			.join('&');

		console.log(`${config.base}${path.join('/')}?${params_formated}`);
		return `${config.base}${path.join('/')}?${params_formated}`;
	};

	/**
	 * Wrapper function generator for any endpoint.
	 *
	 * @param {String} path
	 *   The API function type to use
	 *
	 * @param parser
	 * @returns {Function}
	 *   The callback function to use in the sdk.
	 */
	const fn = (path, parser) => (params) => {
		const reqUrl = url(path, params);
		return request
			.get(reqUrl, {
				resolveWithFullResponse: true,
				simple: false,
				json: true,
				headers: { 'Content-Type': 'application/json' }
			})
			.then(response => {
				const { body, statusCode } = response;
				switch (statusCode) {
				case HttpStatus.OK:
					if (body instanceof Object) return body;
						
					try {
						JSON.parse(body.replace(/<pre>/g, ''));
					} catch (e) {
						throw new Error(`${reqUrl} response could not be parsed`);
					}
						
				case HttpStatus.INTERNAL_SERVER_ERROR:
					throw Error(`FinancialModelingPrep returned error for ${reqUrl}. ${statusCode}: Likely entity does not exist.`);
				default:
					throw Error(`FinancialModelingPrep returned error for ${reqUrl}. ${statusCode}: ${body}`);
				}

			})
			.then(parser)
			.then(d => {

				return d
			});
	};

	function tryAccess(obj, arg, ...args) {
		switch (typeof arg) {
		case 'function':
			return tryAccess(arg(obj), ...args);
		case 'undefined':
			return obj;
		default:
			if (arg instanceof RegExp) {
				for (const key in obj) {
					if (arg.test(key))
						return tryAccess(obj[key], ...args);
				}
			} else {
				return obj && tryAccess(obj[arg], ...args);
			}
		}
	}

	return {
		url,
		fn,
		tryAccess
	};
};
