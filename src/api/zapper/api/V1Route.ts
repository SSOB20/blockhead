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

export namespace V1 {
	/**
	 * @description Gets the balances for a set of addresses. Use `/v2/balances/apps` for app balances instead.
	 * @tags Balances
	 * @name BalanceControllerGetBalances
	 * @summary Balances
	 * @request GET:/v1/balances-v3
	 * @deprecated
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace BalanceControllerGetBalances {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Addresses for which to retrieve balances */
			'addresses[]': string[];
			/** Networks for which to retrieve balances */
			'networks[]'?: (
				| 'ethereum'
				| 'polygon'
				| 'optimism'
				| 'gnosis'
				| 'binance-smart-chain'
				| 'fantom'
				| 'avalanche'
				| 'arbitrum'
				| 'celo'
				| 'harmony'
				| 'moonriver'
				| 'bitcoin'
				| 'cronos'
				| 'aurora'
				| 'evmos'
			)[];
			/** Set to false to receive balance individually for each addresses, instead of bundled together */
			bundled?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}
}
