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

import {
	BalanceControllerGetAppBalancesOldParams,
	BalanceControllerGetAppBalancesParams,
	BalanceControllerGetBalanceJobStatusParams,
	BalanceControllerGetBalancesParams,
	BalanceControllerGetTokenBalancesParams,
	BalanceControllerPostAppBalancesParams,
	BalanceControllerPostTokenBalancesParams,
	ExchangeControllerGetExchangePriceParams,
	ExchangeControllerGetExchangeQuoteParams,
	GasPriceControllerGetGasPriceParams,
	GasPricesResponse,
	NftControllerGetBalanceCollectionsParams,
	NftControllerGetBalanceCollectionsTotalsParams,
	NftControllerGetBalanceTokensParams,
	NftControllerGetBalanceTokensTotalsParams,
	NftControllerGetNetWorthParams,
	NftControllerGetUserTokensParams,
	PositionControllerGetContractPositionsParams,
	PositionControllerGetTokensParams,
	PricesControllerListPricesV3Params
} from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class V2<SecurityDataType = unknown> {
	http: HttpClient<SecurityDataType>;

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http;
	}

	/**
	 * No description
	 *
	 * @tags Apps
	 * @name AppsControllerGetApps
	 * @request GET:/v2/apps
	 * @secure
	 * @response `200` `unknown`
	 */
	appsControllerGetApps = (params: RequestParams = {}) =>
		this.http.request<unknown, any>({
			path: `/v2/apps`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags Apps
	 * @name AppsControllerGetApp
	 * @request GET:/v2/apps/{appSlug}
	 * @secure
	 * @response `200` `unknown`
	 */
	appsControllerGetApp = (appSlug: string, params: RequestParams = {}) =>
		this.http.request<unknown, any>({
			path: `/v2/apps/${appSlug}`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * @description Retrieve positions (non-tokenized) for a given application
	 *
	 * @tags Apps
	 * @name PositionControllerGetContractPositions
	 * @summary Application Positions
	 * @request GET:/v2/apps/{appSlug}/positions
	 * @secure
	 * @response `200` `unknown`
	 */
	positionControllerGetContractPositions = (
		{ appSlug, ...query }: PositionControllerGetContractPositionsParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/apps/${appSlug}/positions`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Retrieve tokens for a given application
	 *
	 * @tags Apps
	 * @name PositionControllerGetTokens
	 * @summary Application Tokens
	 * @request GET:/v2/apps/{appSlug}/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	positionControllerGetTokens = (
		{ appSlug, ...query }: PositionControllerGetTokensParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/apps/${appSlug}/tokens`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Retrieve supported tokens and their prices
	 *
	 * @tags Miscellaneous Data Endpoints
	 * @name PricesControllerListPricesV3
	 * @summary Token Prices
	 * @request GET:/v2/prices
	 * @secure
	 * @response `200` `unknown`
	 */
	pricesControllerListPricesV3 = (
		query: PricesControllerListPricesV3Params,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/prices`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags NFT Balances
	 * @name NftControllerGetNetWorth
	 * @request GET:/v2/nft/balances/net-worth
	 * @secure
	 * @response `200` `unknown`
	 */
	nftControllerGetNetWorth = (query: NftControllerGetNetWorthParams, params: RequestParams = {}) =>
		this.http.request<unknown, any>({
			path: `/v2/nft/balances/net-worth`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags NFT Balances
	 * @name NftControllerGetBalanceCollections
	 * @request GET:/v2/nft/balances/collections
	 * @secure
	 * @response `200` `unknown`
	 */
	nftControllerGetBalanceCollections = (
		query: NftControllerGetBalanceCollectionsParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/nft/balances/collections`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags NFT Balances
	 * @name NftControllerGetBalanceCollectionsTotals
	 * @request GET:/v2/nft/balances/collections-totals
	 * @secure
	 * @response `200` `unknown`
	 */
	nftControllerGetBalanceCollectionsTotals = (
		query: NftControllerGetBalanceCollectionsTotalsParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/nft/balances/collections-totals`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags NFT Balances
	 * @name NftControllerGetUserTokens
	 * @request GET:/v2/nft/user/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	nftControllerGetUserTokens = (
		query: NftControllerGetUserTokensParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/nft/user/tokens`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags NFT Balances
	 * @name NftControllerGetBalanceTokens
	 * @request GET:/v2/nft/balances/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	nftControllerGetBalanceTokens = (
		query: NftControllerGetBalanceTokensParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/nft/balances/tokens`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags NFT Balances
	 * @name NftControllerGetBalanceTokensTotals
	 * @request GET:/v2/nft/balances/tokens-totals
	 * @secure
	 * @response `200` `unknown`
	 */
	nftControllerGetBalanceTokensTotals = (
		query: NftControllerGetBalanceTokensTotalsParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/nft/balances/tokens-totals`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Get stats about the API client points
	 *
	 * @tags API Clients
	 * @name ApiClientControllerPoints
	 * @summary API Client Points
	 * @request GET:/v2/api-clients/points
	 * @secure
	 * @response `200` `unknown`
	 */
	apiClientControllerPoints = (params: RequestParams = {}) =>
		this.http.request<unknown, any>({
			path: `/v2/api-clients/points`,
			method: 'GET',
			secure: true,
			...params
		});
	/**
	 * No description
	 *
	 * @tags Balances
	 * @name BalanceControllerGetAppBalancesOld
	 * @request GET:/v2/apps/{appSlug}/balances
	 * @secure
	 * @response `200` `unknown`
	 */
	balanceControllerGetAppBalancesOld = (
		{ appSlug, ...query }: BalanceControllerGetAppBalancesOldParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/apps/${appSlug}/balances`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Gets the balances for a set of addresses. Use `/v2/balances/apps` for app balances instead.
	 *
	 * @tags Balances
	 * @name BalanceControllerGetBalances
	 * @summary Balances
	 * @request GET:/v2/balances
	 * @deprecated
	 * @secure
	 * @response `200` `unknown`
	 */
	balanceControllerGetBalances = (
		query: BalanceControllerGetBalancesParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/balances`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Gets the app balances for a set of addresses and set of networks.
	 *
	 * @tags Balances
	 * @name BalanceControllerGetAppBalances
	 * @summary Balances
	 * @request GET:/v2/balances/apps
	 * @secure
	 * @response `200` `unknown`
	 */
	balanceControllerGetAppBalances = (
		query: BalanceControllerGetAppBalancesParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/balances/apps`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Recomputes the app balances for a set of addresses and set of networks.
	 *
	 * @tags Balances
	 * @name BalanceControllerPostAppBalances
	 * @summary Balances
	 * @request POST:/v2/balances/apps
	 * @secure
	 * @response `202` `unknown`
	 */
	balanceControllerPostAppBalances = (
		query: BalanceControllerPostAppBalancesParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/balances/apps`,
			method: 'POST',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Gets the token balances for a set of addresses and set of networks.
	 *
	 * @tags Balances
	 * @name BalanceControllerGetTokenBalances
	 * @summary Balances
	 * @request GET:/v2/balances/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	balanceControllerGetTokenBalances = (
		query: BalanceControllerGetTokenBalancesParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/balances/tokens`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Recomputes the token balances for a set of addresses and set of networks.
	 *
	 * @tags Balances
	 * @name BalanceControllerPostTokenBalances
	 * @summary Balances
	 * @request POST:/v2/balances/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	balanceControllerPostTokenBalances = (
		query: BalanceControllerPostTokenBalancesParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/balances/tokens`,
			method: 'POST',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Gets the status of a single balance computation job.
	 *
	 * @tags Balances
	 * @name BalanceControllerGetBalanceJobStatus
	 * @summary Balances
	 * @request GET:/v2/balances/job-status
	 * @secure
	 * @response `200` `unknown`
	 */
	balanceControllerGetBalanceJobStatus = (
		query: BalanceControllerGetBalanceJobStatusParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/balances/job-status`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Retrieve a gas price aggregated from multiple different sources
	 *
	 * @tags Miscellaneous Data Endpoints
	 * @name GasPriceControllerGetGasPrice
	 * @summary Gas Price
	 * @request GET:/v2/gas-prices
	 * @secure
	 * @response `200` `GasPricesResponse`
	 */
	gasPriceControllerGetGasPrice = (
		query: GasPriceControllerGetGasPriceParams,
		params: RequestParams = {}
	) =>
		this.http.request<GasPricesResponse, any>({
			path: `/v2/gas-prices`,
			method: 'GET',
			query: query,
			secure: true,
			format: 'json',
			...params
		});
	/**
	 * @description Returns data about the amount received if a trade would be made. **Should be called whenever a price needs to be calculated.**
	 *
	 * @tags Exchange
	 * @name ExchangeControllerGetExchangePrice
	 * @summary Exchange Price
	 * @request GET:/v2/exchange/price
	 * @secure
	 * @response `200` `unknown`
	 */
	exchangeControllerGetExchangePrice = (
		query: ExchangeControllerGetExchangePriceParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/exchange/price`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Returns both the relative price for a trade as well as the call data used to sumbit a transaction for a trade. **Should only be called when a trade is ready to be submitted.**
	 *
	 * @tags Exchange
	 * @name ExchangeControllerGetExchangeQuote
	 * @summary Exchange Quote
	 * @request GET:/v2/exchange/quote
	 * @secure
	 * @response `200` `unknown`
	 */
	exchangeControllerGetExchangeQuote = (
		query: ExchangeControllerGetExchangeQuoteParams,
		params: RequestParams = {}
	) =>
		this.http.request<unknown, any>({
			path: `/v2/exchange/quote`,
			method: 'GET',
			query: query,
			secure: true,
			...params
		});
	/**
	 * @description Returns the exchanges supported by Zapper API.
	 *
	 * @tags Exchange
	 * @name ExchangeControllerGetSupportedExchanges
	 * @summary Supported exchanges
	 * @request GET:/v2/exchange/supported
	 * @secure
	 * @response `200` `unknown`
	 */
	exchangeControllerGetSupportedExchanges = (params: RequestParams = {}) =>
		this.http.request<unknown, any>({
			path: `/v2/exchange/supported`,
			method: 'GET',
			secure: true,
			...params
		});
}
