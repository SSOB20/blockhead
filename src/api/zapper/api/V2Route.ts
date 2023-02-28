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

import { GasPricesResponse } from './data-contracts';

export namespace V2 {
	/**
	 * No description
	 * @tags Apps
	 * @name AppsControllerGetApps
	 * @request GET:/v2/apps
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace AppsControllerGetApps {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * No description
	 * @tags Apps
	 * @name AppsControllerGetApp
	 * @request GET:/v2/apps/{appSlug}
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace AppsControllerGetApp {
		export type RequestParams = {
			appSlug: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Retrieve positions (non-tokenized) for a given application
	 * @tags Apps
	 * @name PositionControllerGetContractPositions
	 * @summary Application Positions
	 * @request GET:/v2/apps/{appSlug}/positions
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace PositionControllerGetContractPositions {
		export type RequestParams = {
			/** Slug of the application for which to retrieve contract positions. */
			appSlug: string;
		};
		export type RequestQuery = {
			/** Retrieve positions for this network */
			network:
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
				| 'evmos';
			/** Retrieve specific position group within the app */
			groupId: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Retrieve tokens for a given application
	 * @tags Apps
	 * @name PositionControllerGetTokens
	 * @summary Application Tokens
	 * @request GET:/v2/apps/{appSlug}/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace PositionControllerGetTokens {
		export type RequestParams = {
			/** Slug of the application for which to retrieve contract positions. */
			appSlug: string;
		};
		export type RequestQuery = {
			/** Retrieve positions for this network */
			network:
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
				| 'evmos';
			/** Retrieve specific position group within the app */
			groupId: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Retrieve supported tokens and their prices
	 * @tags Miscellaneous Data Endpoints
	 * @name PricesControllerListPricesV3
	 * @summary Token Prices
	 * @request GET:/v2/prices
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace PricesControllerListPricesV3 {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Retrieve prices for this network */
			network?:
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
				| 'evmos';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * No description
	 * @tags NFT Balances
	 * @name NftControllerGetNetWorth
	 * @request GET:/v2/nft/balances/net-worth
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace NftControllerGetNetWorth {
		export type RequestParams = {};
		export type RequestQuery = {
			/** User addresses */
			'addresses[]': string[];
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * No description
	 * @tags NFT Balances
	 * @name NftControllerGetBalanceCollections
	 * @request GET:/v2/nft/balances/collections
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace NftControllerGetBalanceCollections {
		export type RequestParams = {};
		export type RequestQuery = {
			/** User addresses */
			'addresses[]': string[];
			/** Returns only collections with an estimated value above */
			minCollectionValueUsd?: string;
			/** Returns only collections with name starting with */
			search?: string;
			/** Returns only collections provided */
			'collectionAddresses[]'?: string[];
			/** Returns only tokens from network provided */
			network?:
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
				| 'evmos';
			/** Maximum items to return. Limited to 25. */
			limit?: string;
			/** Cursor used to paginate the results */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * No description
	 * @tags NFT Balances
	 * @name NftControllerGetBalanceCollectionsTotals
	 * @request GET:/v2/nft/balances/collections-totals
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace NftControllerGetBalanceCollectionsTotals {
		export type RequestParams = {};
		export type RequestQuery = {
			/** User addresses */
			'addresses[]': string[];
			/** Returns only collections with an estimated value above */
			minCollectionValueUsd?: string;
			/** Returns only collections with name starting with */
			search?: string;
			/** Returns only collections provided */
			'collectionAddresses[]'?: string[];
			/** Returns only tokens from network provided */
			network?:
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
				| 'evmos';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * No description
	 * @tags NFT Balances
	 * @name NftControllerGetUserTokens
	 * @request GET:/v2/nft/user/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace NftControllerGetUserTokens {
		export type RequestParams = {};
		export type RequestQuery = {
			/** User address */
			userAddress: string;
			/** Network */
			network?:
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
				| 'evmos';
			/**
			 * Number of results returned per page
			 * @max 100
			 */
			limit?: string;
			/** Cursor */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * No description
	 * @tags NFT Balances
	 * @name NftControllerGetBalanceTokens
	 * @request GET:/v2/nft/balances/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace NftControllerGetBalanceTokens {
		export type RequestParams = {};
		export type RequestQuery = {
			/** User addresses */
			'addresses[]': string[];
			/** Returns only tokens with an estimated value above */
			minEstimatedValueUsd?: string;
			/** Returns only tokens from collections with name starting with */
			search?: string;
			/** Returns only tokens from collections provided */
			'collectionAddresses[]'?: string[];
			/** Returns only tokens from network provided */
			network?:
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
				| 'evmos';
			/** Maximum items to return. Limited and defaults to 25. */
			limit?: string;
			/** Cursor used to paginate the results */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * No description
	 * @tags NFT Balances
	 * @name NftControllerGetBalanceTokensTotals
	 * @request GET:/v2/nft/balances/tokens-totals
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace NftControllerGetBalanceTokensTotals {
		export type RequestParams = {};
		export type RequestQuery = {
			/** User addresses */
			'addresses[]': string[];
			/** Returns only tokens with an estimated value above */
			minEstimatedValueUsd?: string;
			/** Returns only tokens from collections with name starting with */
			search?: string;
			/** Returns only tokens from collections provided */
			'collectionAddresses[]'?: string[];
			/** Returns only tokens from network provided */
			network?:
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
				| 'evmos';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Get stats about the API client points
	 * @tags API Clients
	 * @name ApiClientControllerPoints
	 * @summary API Client Points
	 * @request GET:/v2/api-clients/points
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace ApiClientControllerPoints {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * No description
	 * @tags Balances
	 * @name BalanceControllerGetAppBalancesOld
	 * @request GET:/v2/apps/{appSlug}/balances
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace BalanceControllerGetAppBalancesOld {
		export type RequestParams = {
			/** Slug of the application for which to retrieve the wallet balances */
			appSlug: string;
		};
		export type RequestQuery = {
			/** Addresses for which to retrieve balances */
			'addresses[]': string[];
			/** Retrieve application balances for this network */
			network?:
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
				| 'evmos';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Gets the balances for a set of addresses. Use `/v2/balances/apps` for app balances instead.
	 * @tags Balances
	 * @name BalanceControllerGetBalances
	 * @summary Balances
	 * @request GET:/v2/balances
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

	/**
	 * @description Gets the app balances for a set of addresses and set of networks.
	 * @tags Balances
	 * @name BalanceControllerGetAppBalances
	 * @summary Balances
	 * @request GET:/v2/balances/apps
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace BalanceControllerGetAppBalances {
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
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Recomputes the app balances for a set of addresses and set of networks.
	 * @tags Balances
	 * @name BalanceControllerPostAppBalances
	 * @summary Balances
	 * @request POST:/v2/balances/apps
	 * @secure
	 * @response `202` `unknown`
	 */
	export namespace BalanceControllerPostAppBalances {
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
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Gets the token balances for a set of addresses and set of networks.
	 * @tags Balances
	 * @name BalanceControllerGetTokenBalances
	 * @summary Balances
	 * @request GET:/v2/balances/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace BalanceControllerGetTokenBalances {
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
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Recomputes the token balances for a set of addresses and set of networks.
	 * @tags Balances
	 * @name BalanceControllerPostTokenBalances
	 * @summary Balances
	 * @request POST:/v2/balances/tokens
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace BalanceControllerPostTokenBalances {
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
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Gets the status of a single balance computation job.
	 * @tags Balances
	 * @name BalanceControllerGetBalanceJobStatus
	 * @summary Balances
	 * @request GET:/v2/balances/job-status
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace BalanceControllerGetBalanceJobStatus {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Id of the job for which to retrieve the status */
			jobId: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Retrieve a gas price aggregated from multiple different sources
	 * @tags Miscellaneous Data Endpoints
	 * @name GasPriceControllerGetGasPrice
	 * @summary Gas Price
	 * @request GET:/v2/gas-prices
	 * @secure
	 * @response `200` `GasPricesResponse`
	 */
	export namespace GasPriceControllerGetGasPrice {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Retrieve gas price for this network */
			network?:
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
				| 'evmos';
			/** Retrieve post London gas price details */
			eip1559: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = GasPricesResponse;
	}

	/**
	 * @description Returns data about the amount received if a trade would be made. **Should be called whenever a price needs to be calculated.**
	 * @tags Exchange
	 * @name ExchangeControllerGetExchangePrice
	 * @summary Exchange Price
	 * @request GET:/v2/exchange/price
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace ExchangeControllerGetExchangePrice {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Gas price (wei) */
			gasPrice?: string;
			/** Max gas fee (wei) */
			maxFeePerGas?: string;
			/** Max priority gas fee (wei) */
			maxPriorityFeePerGas?: string;
			/** Address of the token that is being sold */
			sellTokenAddress: string;
			/** Address of the token that is being bought */
			buyTokenAddress: string;
			/** Amount to sell in base units, if provided dont provide `buyAmount` */
			sellAmount?: string;
			/** Amount to buy in base units, if provided dont provide `sellAmount` */
			buyAmount?: string;
			/** Address of the owner */
			ownerAddress?: string;
			/** Slippage percentage as a decimal value */
			slippagePercentage?: number;
			/** Network where the swap would be made */
			network?:
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
				| 'evmos';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Returns both the relative price for a trade as well as the call data used to sumbit a transaction for a trade. **Should only be called when a trade is ready to be submitted.**
	 * @tags Exchange
	 * @name ExchangeControllerGetExchangeQuote
	 * @summary Exchange Quote
	 * @request GET:/v2/exchange/quote
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace ExchangeControllerGetExchangeQuote {
		export type RequestParams = {};
		export type RequestQuery = {
			/** Gas price (wei) */
			gasPrice?: string;
			/** Max gas fee (wei) */
			maxFeePerGas?: string;
			/** Max priority gas fee (wei) */
			maxPriorityFeePerGas?: string;
			/** Address of the token that is being sold */
			sellTokenAddress: string;
			/** Address of the token that is being bought */
			buyTokenAddress: string;
			/** Amount to sell in base units, if provided dont provide `buyAmount` */
			sellAmount?: string;
			/** Amount to buy in base units, if provided dont provide `sellAmount` */
			buyAmount?: string;
			/** Address of the owner */
			ownerAddress: string;
			/** Slippage percentage as a decimal value */
			slippagePercentage: number;
			/** Network where the swap would be made */
			network?:
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
				| 'evmos';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}

	/**
	 * @description Returns the exchanges supported by Zapper API.
	 * @tags Exchange
	 * @name ExchangeControllerGetSupportedExchanges
	 * @summary Supported exchanges
	 * @request GET:/v2/exchange/supported
	 * @secure
	 * @response `200` `unknown`
	 */
	export namespace ExchangeControllerGetSupportedExchanges {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = unknown;
	}
}
