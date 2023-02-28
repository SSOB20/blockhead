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

export interface GasPricesResponse {
	/** Standard gas price (gwei) */
	standard: object;
	/** Fast gas price (gwei) */
	fast: object;
	/** Instant gas price (gwei) */
	instant: object;
	/** Is gas price according to EIP1559 */
	eip1559: boolean;
}

export interface PositionControllerGetContractPositionsParams {
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
	/** Slug of the application for which to retrieve contract positions. */
	appSlug: string;
}

export interface PositionControllerGetTokensParams {
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
	/** Slug of the application for which to retrieve contract positions. */
	appSlug: string;
}

export interface PricesControllerListPricesV3Params {
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
}

export interface NftControllerGetNetWorthParams {
	/** User addresses */
	'addresses[]': string[];
}

export interface NftControllerGetBalanceCollectionsParams {
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
}

export interface NftControllerGetBalanceCollectionsTotalsParams {
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
}

export interface NftControllerGetUserTokensParams {
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
}

export interface NftControllerGetBalanceTokensParams {
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
}

export interface NftControllerGetBalanceTokensTotalsParams {
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
}

export interface BalanceControllerGetAppBalancesOldParams {
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
	/** Slug of the application for which to retrieve the wallet balances */
	appSlug: string;
}

export interface BalanceControllerGetBalancesParams {
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
}

export interface BalanceControllerGetBalancesParams7 {
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
}

export interface BalanceControllerGetAppBalancesParams {
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
}

export interface BalanceControllerPostAppBalancesParams {
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
}

export interface BalanceControllerGetTokenBalancesParams {
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
}

export interface BalanceControllerPostTokenBalancesParams {
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
}

export interface BalanceControllerGetBalanceJobStatusParams {
	/** Id of the job for which to retrieve the status */
	jobId: string;
}

export interface GasPriceControllerGetGasPriceParams {
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
}

export interface ExchangeControllerGetExchangePriceParams {
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
}

export interface ExchangeControllerGetExchangeQuoteParams {
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
}
