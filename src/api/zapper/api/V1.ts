/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { BalanceControllerGetBalancesParams7 } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class V1<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>;

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http;
	}

	/**
	 * @description Gets the balances for a set of addresses. Use `/v2/balances/apps` for app balances instead.
	 *
	 * @tags Balances
	 * @name BalanceControllerGetBalances
	 * @summary Balances
	 * @request GET:/v1/balances-v3
	 * @deprecated
	 * @secure
	 * @response `200` `unknown`
	 */
	balanceControllerGetBalances = (
		query: BalanceControllerGetBalancesParams7,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v1/balances-v3`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
}
