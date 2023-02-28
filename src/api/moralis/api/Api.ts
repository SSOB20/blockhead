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

export interface DecodedCall {
	/** @example transfer(address,uint256) */
	signature?: string;
	/** @example transfer */
	label?: string;
	/** @example function */
	type?: string;
	params?: {
		/** @example _to */
		name?: string;
		/** @example 0x1CA455A55108874A95C84620dDA2566c54D17953 */
		value?: string;
		/** @example address */
		type?: string;
	}[];
}

export interface DecodedEvent {
	/** @example Transfer(address,address,uint256) */
	signature?: string;
	/** @example Transfer */
	label?: string;
	/** @example event */
	type?: string;
	params?: {
		/** @example from */
		name?: string;
		/** @example 0x26C5011483Add49801eA8E3Ee354fE013895aCe5 */
		value?: string;
		/** @example address */
		type?: string;
	}[];
}

export interface LogCollection {
	/**
	 * The total number of matches for this query
	 * @example 100
	 */
	total?: number;
	/**
	 * The page of the current result
	 * @example 1
	 */
	page?: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size?: number;
	/** The cursor to get to the next page */
	cursor?: string;
	result?: LogEventByAddress[];
}

export interface LogEventByAddress {
	/**
	 * The transaction hash
	 * @example 0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09
	 */
	transaction_hash: string;
	/**
	 * The address of the contract
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	address: string;
	/**
	 * The block timestamp
	 * @example 2021-04-02T10:07:54.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12526958
	 */
	block_number: string;
	/**
	 * The block hash
	 * @example 0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86
	 */
	block_hash: string;
	/**
	 * The data of the log
	 * @example 0x00000000000000000000000000000000000000000000000de05239bccd4d537400000000000000000000000000024dbc80a9f80e3d5fc0a0ee30e2693781a443
	 */
	data: string;
	/** @example 0x2caecd17d02f56fa897705dcc740da2d237c373f70686f4e0d9bd3bf0400ea7a */
	topic0: string;
	/** @example 0x000000000000000000000000031002d15b0d0cd7c9129d6f644446368deae391 */
	topic1: string;
	/** @example 0x000000000000000000000000d25943be09f968ba740e0782a34e710100defae9 */
	topic2: string;
	/** @example null */
	topic3: string;
	/**
	 * The Transaction index of the log within the block
	 * @example 12
	 */
	transaction_index: number;
	/**
	 * The log index of the log within the block
	 * @example 15
	 */
	log_index: number;
}

export interface LogEvent {
	/**
	 * The transaction hash
	 * @example 0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09
	 */
	transaction_hash: string;
	/**
	 * The address of the contract
	 * @example 0x18F97EF6B2cbac5CA85b375b7093C4A207340d06
	 */
	address: string;
	/**
	 * The block timestamp
	 * @example 2021-04-02T10:07:54.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12526958
	 */
	block_number: string;
	/**
	 * The block hash
	 * @example 0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86
	 */
	block_hash: string;
	/** The content of the event */
	data: {
		/** @example 0x54ff6974c715956a5049a123408bff91fbe29f01 */
		from?: string;
		/** @example 0x74de5d4fcbf63e00296fd95d33236b9794016631 */
		to?: string;
		/** @example 260103496340000000000 */
		value?: string;
	};
}

export interface Log {
	/** @example 273 */
	log_index: string;
	/**
	 * The hash of the transaction
	 * @example 0xdd9006489e46670e0e85d1fb88823099e7f596b08aeaac023e9da0851f26fdd5
	 */
	transaction_hash: string;
	/** @example 204 */
	transaction_index: string;
	/**
	 * The address of the contract
	 * @example 0x3105d328c66d8d55092358cf595d54608178e9b5
	 */
	address: string;
	/**
	 * The data of the log
	 * @example 0x00000000000000000000000000000000000000000000000de05239bccd4d537400000000000000000000000000024dbc80a9f80e3d5fc0a0ee30e2693781a443
	 */
	data: string;
	/** @example 0x2caecd17d02f56fa897705dcc740da2d237c373f70686f4e0d9bd3bf0400ea7a */
	topic0: string;
	/** @example 0x000000000000000000000000031002d15b0d0cd7c9129d6f644446368deae391 */
	topic1?: string;
	/** @example 0x000000000000000000000000d25943be09f968ba740e0782a34e710100defae9 */
	topic2?: string;
	/** @example null */
	topic3?: string;
	/**
	 * The timestamp of the block
	 * @example 2021-05-07T11:08:35.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12386788
	 */
	block_number: string;
	/**
	 * The hash of the block
	 * @example 0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171
	 */
	block_hash: string;
}

export interface LogVerbose {
	/** @example 273 */
	log_index: string;
	/**
	 * The hash of the transaction
	 * @example 0xdd9006489e46670e0e85d1fb88823099e7f596b08aeaac023e9da0851f26fdd5
	 */
	transaction_hash: string;
	/** @example 204 */
	transaction_index: string;
	/**
	 * The address of the contract
	 * @example 0x3105d328c66d8d55092358cf595d54608178e9b5
	 */
	address: string;
	/**
	 * The data of the log
	 * @example 0x00000000000000000000000000000000000000000000000de05239bccd4d537400000000000000000000000000024dbc80a9f80e3d5fc0a0ee30e2693781a443
	 */
	data: string;
	/** @example 0x2caecd17d02f56fa897705dcc740da2d237c373f70686f4e0d9bd3bf0400ea7a */
	topic0: string;
	/** @example 0x000000000000000000000000031002d15b0d0cd7c9129d6f644446368deae391 */
	topic1?: string;
	/** @example 0x000000000000000000000000d25943be09f968ba740e0782a34e710100defae9 */
	topic2?: string;
	/** @example null */
	topic3?: string;
	/**
	 * The timestamp of the block
	 * @example 2021-05-07T11:08:35.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12386788
	 */
	block_number: string;
	/**
	 * The hash of the block
	 * @example 0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171
	 */
	block_hash: string;
	/** The decoded data of the log */
	decoded_event: DecodedEvent;
}

export interface BlockTransaction {
	/**
	 * The hash of the transaction
	 * @example 0x1ed85b3757a6d31d01a4d6677fc52fd3911d649a0af21fe5ca3f886b153773ed
	 */
	hash: string;
	/**
	 * The nonce
	 * @example 1848059
	 */
	nonce: string;
	/** @example 108 */
	transaction_index: string;
	/**
	 * The from address
	 * @example 0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0
	 */
	from_address: string;
	/**
	 * The to address
	 * @example 0x003dde3494f30d861d063232c6a8c04394b686ff
	 */
	to_address: string;
	/**
	 * The value sent
	 * @example 115580000000000000
	 */
	value: string;
	/** @example 30000 */
	gas?: string;
	/**
	 * The gas price
	 * @example 52500000000
	 */
	gas_price: string;
	/** @example 0x */
	input: string;
	/** @example 4923073 */
	receipt_cumulative_gas_used: string;
	/** @example 21000 */
	receipt_gas_used: string;
	/** @example null */
	receipt_contract_address?: string;
	/** @example null */
	receipt_root?: string;
	/** @example 1 */
	receipt_status: string;
	/**
	 * The block timestamp
	 * @example 2021-05-07T11:08:35.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12386788
	 */
	block_number: string;
	/**
	 * The hash of the block
	 * @example 0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171
	 */
	block_hash: string;
	/** The logs of the transaction */
	logs: Log[];
	/** The internal transaction */
	internal_transactions?: InternalTransaction[];
}

export interface BlockTransactionVerbose {
	/**
	 * The hash of the transaction
	 * @example 0x1ed85b3757a6d31d01a4d6677fc52fd3911d649a0af21fe5ca3f886b153773ed
	 */
	hash: string;
	/**
	 * The nonce
	 * @example 1848059
	 */
	nonce: string;
	/** @example 108 */
	transaction_index: string;
	/**
	 * The from address
	 * @example 0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0
	 */
	from_address: string;
	/**
	 * The to address
	 * @example 0x003dde3494f30d861d063232c6a8c04394b686ff
	 */
	to_address: string;
	/**
	 * The value sent
	 * @example 115580000000000000
	 */
	value: string;
	/** @example 30000 */
	gas?: string;
	/**
	 * The gas price
	 * @example 52500000000
	 */
	gas_price: string;
	/** @example 0x */
	input: string;
	/** @example 4923073 */
	receipt_cumulative_gas_used: string;
	/** @example 21000 */
	receipt_gas_used: string;
	/** @example null */
	receipt_contract_address?: string;
	/** @example null */
	receipt_root?: string;
	/** @example 1 */
	receipt_status: string;
	/**
	 * The block timestamp
	 * @example 2021-05-07T11:08:35.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12386788
	 */
	block_number: string;
	/**
	 * The hash of the block
	 * @example 0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171
	 */
	block_hash: string;
	/** The logs of the transaction */
	logs: LogVerbose[];
	/** The decoded data of the transaction */
	decoded_call: DecodedCall;
}

export interface BlockTransactionDecoded {
	/**
	 * The hash of the transaction
	 * @example 0x1ed85b3757a6d31d01a4d6677fc52fd3911d649a0af21fe5ca3f886b153773ed
	 */
	hash: string;
	/**
	 * The nonce
	 * @example 1848059
	 */
	nonce: string;
	/** @example 108 */
	transaction_index: string;
	/**
	 * The from address
	 * @example 0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0
	 */
	from_address: string;
	/**
	 * The to address
	 * @example 0x003dde3494f30d861d063232c6a8c04394b686ff
	 */
	to_address: string;
	/**
	 * The value sent
	 * @example 115580000000000000
	 */
	value: string;
	/** @example 30000 */
	gas?: string;
	/**
	 * The gas price
	 * @example 52500000000
	 */
	gas_price: string;
	/** @example 0x */
	input: string;
	/** @example 4923073 */
	receipt_cumulative_gas_used: string;
	/** @example 21000 */
	receipt_gas_used: string;
	/** @example null */
	receipt_contract_address?: string;
	/** @example null */
	receipt_root?: string;
	/** @example 1 */
	receipt_status: string;
	/**
	 * The block timestamp
	 * @example 2021-05-07T11:08:35.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12386788
	 */
	block_number: string;
	/**
	 * The hash of the block
	 * @example 0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171
	 */
	block_hash: string;
	/** The logs of the transaction */
	logs: LogVerbose[];
	/** The decoded data of the transaction */
	decoded_call: DecodedCall;
}

export interface Block {
	/**
	 * The block timestamp
	 * @example 2021-05-07T11:08:35.000Z
	 */
	timestamp: string;
	/**
	 * The block number
	 * @example 12386788
	 */
	number: string;
	/**
	 * The block hash
	 * @example 0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171
	 */
	hash: string;
	/**
	 * The block hash of the parent block
	 * @example 0x011d1fc45839de975cc55d758943f9f1d204f80a90eb631f3bf064b80d53e045
	 */
	parent_hash: string;
	/**
	 * The nonce
	 * @example 0xedeb2d8fd2b2bdec
	 */
	nonce: string;
	/** @example 0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347 */
	sha3_uncles: string;
	/** @example 0xdde5fc46c5d8bcbd58207bc9f267bf43298e23791a326ff02661e99790da9996b3e0dd912c0b8202d389d282c56e4d11eb2dec4898a32b6b165f1f4cae6aa0079498eab50293f3b8defbf6af11bb75f0408a563ddfc26a3323d1ff5f9849e95d5f034d88a757ddea032c75c00708c9ff34d2207f997cc7d93fd1fa160a6bfaf62a54e31f9fe67ab95752106ba9d185bfdc9b6dc3e17427f844ee74e5c09b17b83ad6e8fc7360f5c7c3e4e1939e77a6374bee57d1fa6b2322b11ad56ad0398302de9b26d6fbfe414aa416bff141fad9d4af6aea19322e47595e342cd377403f417dfd396ab5f151095a5535f51cbc34a40ce9648927b7d1d72ab9daf253e31daf */
	logs_bloom: string;
	/** @example 0xe4c7bf3aff7ad07f9e80d57f7189f0252592fee6321c2a9bd9b09b6ce0690d27 */
	transactions_root: string;
	/** @example 0x49e3bfe7b618e27fde8fa08884803a8458b502c6534af69873a3cc926a7c724b */
	state_root: string;
	/** @example 0x7cf43d7e837284f036cf92c56973f5e27bdd253ca46168fa195a6b07fa719f23 */
	receipts_root: string;
	/**
	 * The address of the miner
	 * @example 0xea674fdde714fd979de3edf0f56aa9716b898ec8
	 */
	miner: string;
	/**
	 * The difficulty of the block
	 * @example 7253857437305950
	 */
	difficulty: string;
	/**
	 * The total difficulty
	 * @example 24325637817906576196890
	 */
	total_difficulty: string;
	/**
	 * The block size
	 * @example 61271
	 */
	size: string;
	/** @example 0x65746865726d696e652d6575726f70652d7765737433 */
	extra_data: string;
	/**
	 * The gas limit
	 * @example 14977947
	 */
	gas_limit: string;
	/**
	 * The gas used
	 * @example 14964688
	 */
	gas_used: string;
	/**
	 * The number of transactions in the block
	 * @example 252
	 */
	transaction_count: string;
	/** The transactions in the block */
	transactions: BlockTransaction[];
}

export interface BlockDate {
	/**
	 * The date of the block
	 * @example 2020-01-01T00:00:00+00:00
	 */
	date: string;
	/**
	 * The blocknumber
	 * @example 9193266
	 */
	block: number;
	/**
	 * The timestamp of the block
	 * @example 1577836811
	 */
	timestamp: number;
	/**
	 * The timestamp of the block
	 * @example 2019-12-31T23:59:45.000Z
	 */
	block_timestamp?: string;
	/**
	 * The block hash
	 * @example 0x9b559aef7ea858608c2e554246fe4a24287e7aeeb976848df2b9a2531f4b9171
	 */
	hash?: string;
	/**
	 * The block hash of the parent block
	 * @example 0x011d1fc45839de975cc55d758943f9f1d204f80a90eb631f3bf064b80d53e045
	 */
	parent_hash?: string;
}

export interface RunContractDto {
	/**
	 * The contract abi
	 * @example []
	 */
	abi: object[];
	/**
	 * The params for the given function
	 * @example {}
	 */
	params?: object;
}

export interface TokenItem {
	/**
	 * The contract address
	 * @example 0x06012c8cf97bead5deae237070f9587f8e7a266d
	 */
	token_address?: string;
	/**
	 * The id of the token
	 * @example 100
	 */
	token_id?: string;
}

export interface GetMultipleNftsDto {
	/**
	 * The tokens to be fetched
	 * @example [{"token_address":"0xa4991609c508b6d4fb7156426db0bd49fe298bd8","token_id":"12"},{"token_address":"0x3c64dc415ebb4690d1df2b6216148c8de6dd29f7","token_id":"1"},{"token_address":"0x3c64dc415ebb4690d1df2b6216148c8de6dd29f7","token_id":"200"}]
	 */
	tokens: TokenItem[];
	/**
	 * Should normalized metadata be returned?
	 * @example false
	 */
	normalizeMetadata?: boolean;
}

export interface TransactionVerboseCollection {
	/**
	 * The page of the current result
	 * @example 2
	 */
	page?: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size?: number;
	result?: BlockTransactionVerbose[];
}

export interface TransactionCollection {
	/**
	 * The total number of matches for this query
	 * @example 2000
	 */
	total?: number;
	/**
	 * The page of the current result
	 * @example 2
	 */
	page?: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size?: number;
	result?: Transaction[];
}

export interface InternalTransaction {
	/**
	 * The hash of the transaction
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	transaction_hash: string;
	/**
	 * The block number
	 * @example 12526958
	 */
	block_number: string;
	/**
	 * The block hash
	 * @example 0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86
	 */
	block_hash: string;
	/**
	 * Call type
	 * @example CALL
	 */
	type: string;
	/**
	 * The sender
	 * @example 0xd4a3BebD824189481FC45363602b83C9c7e9cbDf
	 */
	from: string;
	/**
	 * The recipient
	 * @example 0xa71db868318f0a0bae9411347cd4a6fa23d8d4ef
	 */
	to: string;
	/**
	 * The value that was transfered (in wei)
	 * @example 650000000000000000
	 */
	value: string;
	/**
	 * The gas of the transaction
	 * @example 6721975
	 */
	gas: string;
	/**
	 * The used gas
	 * @example 6721975
	 */
	gas_used: string;
	/**
	 * The input
	 * @example 0x
	 */
	input: string;
	/**
	 * The output
	 * @example 0x
	 */
	output: string;
}

export interface Transaction {
	/**
	 * The hash of the transaction
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	hash: string;
	/**
	 * The nonce of the transaction
	 * @example 326595425
	 */
	nonce: string;
	/**
	 * The transaction index
	 * @example 25
	 */
	transaction_index: string;
	/**
	 * The sender
	 * @example 0xd4a3BebD824189481FC45363602b83C9c7e9cbDf
	 */
	from_address: string;
	/**
	 * The recipient
	 * @example 0xa71db868318f0a0bae9411347cd4a6fa23d8d4ef
	 */
	to_address: string;
	/**
	 * The value that was transfered (in wei)
	 * @example 650000000000000000
	 */
	value: string;
	/**
	 * The gas of the transaction
	 * @example 6721975
	 */
	gas: string;
	/**
	 * The gas price
	 * @example 20000000000
	 */
	gas_price: string;
	/** The input */
	input: string;
	/**
	 * The receipt cumulative gas used
	 * @example 1340925
	 */
	receipt_cumulative_gas_used: string;
	/**
	 * The receipt gas used
	 * @example 1340925
	 */
	receipt_gas_used: string;
	/**
	 * The receipt contract address
	 * @example 0x1d6a4cf64b52f6c73f201839aded7379ce58059c
	 */
	receipt_contract_address: string;
	/** The receipt root */
	receipt_root: string;
	/**
	 * The receipt status
	 * @example 1
	 */
	receipt_status: string;
	/**
	 * The block timestamp
	 * @example 2021-04-02T10:07:54.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12526958
	 */
	block_number: string;
	/**
	 * The block hash
	 * @example 0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86
	 */
	block_hash: string;
	/** The internal transaction */
	internal_transactions?: InternalTransaction[];
}

export interface Erc20Allowance {
	/** The allowance */
	allowance: string;
}

export interface Erc20TokenBalance {
	/**
	 * The address of the token contract
	 * @example 0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09
	 */
	token_address: string;
	/**
	 * The name of the token Contract
	 * @example Kylin Network
	 */
	name: string;
	/**
	 * The symbol of the NFT contract
	 * @example KYL
	 */
	symbol: string;
	/**
	 * The logo of the token
	 * @example https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png
	 */
	logo?: string;
	/**
	 * The thumbnail of the logo
	 * @example https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png
	 */
	thumbnail?: string;
	/**
	 * The number of decimals on of the token
	 * @example 18
	 */
	decimals: number;
	/**
	 * Timestamp of when the contract was last synced with the node
	 * @example 123456789
	 */
	balance: string;
}

export interface NativeBalance {
	/**
	 * The balance
	 * @example 1234567890
	 */
	balance: string;
}

export interface Trade {
	/**
	 * The transaction hash
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	transaction_hash: string;
	/** The transaction index */
	transaction_index: string;
	/**
	 * The token id(s) traded
	 * @example ["15","54"]
	 */
	token_ids: string[];
	/**
	 * The address that sold the NFT
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	seller_address: string;
	/**
	 * The address that bought the NFT
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	buyer_address: string;
	/**
	 * The address of the contract that traded the NFT
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	marketplace_address: string;
	/**
	 * The value that was sent in the transaction (ETH/BNB/etc..)
	 * @example 1000000000000000
	 */
	price: string;
	/**
	 * The block timestamp
	 * @example 2021-06-04T16:00:15
	 */
	block_timestamp: string;
	/**
	 * The blocknumber of the transaction
	 * @example 13680123
	 */
	block_number: string;
	/**
	 * The block hash
	 * @example 0x4a7c916ca4a970358b9df90051008f729685ff05e9724a9dddba32630c37cb96
	 */
	block_hash: string;
}

export interface TradeCollection {
	/**
	 * The total number of matches for this query
	 * @example 2000
	 */
	total?: number;
	/**
	 * The page of the current result
	 * @example 2
	 */
	page?: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size?: number;
	result?: Trade[];
}

/**
 * @example internal_transactions
 */
export type IncludeList = 'internal_transactions';

/**
 * @example eth
 */
export type ChainList =
	| 'eth'
	| '0x1'
	| 'goerli'
	| '0x5'
	| 'sepolia'
	| '0xaa36a7'
	| 'polygon'
	| '0x89'
	| 'mumbai'
	| '0x13881'
	| 'bsc'
	| '0x38'
	| 'bsc testnet'
	| '0x61'
	| 'avalanche'
	| '0xa86a'
	| 'avalanche testnet'
	| '0xa869'
	| 'fantom'
	| '0xfa'
	| 'palm'
	| '0x2a15c308d'
	| 'cronos'
	| '0x19'
	| 'cronos testnet'
	| '0x152'
	| 'arbitrum'
	| '0xa4b1';

export interface Nft {
	/**
	 * The address of the contract of the NFT
	 * @example 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB
	 */
	token_address: string;
	/**
	 * The token id of the NFT
	 * @example 15
	 */
	token_id: string;
	/**
	 * The owner wallet address of the NFT
	 * @example 0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b
	 */
	owner_of?: string;
	/**
	 * The token hash
	 * @example 502cee781b0fb40ea02508b21d319ced
	 */
	token_hash?: string;
	/**
	 * The block number when the amount or owner changed
	 * @example 88256
	 */
	block_number?: string;
	/**
	 * The block number when the NFT was minted
	 * @example 88256
	 */
	block_number_minted?: string;
	/**
	 * The type of NFT contract standard
	 * @example ERC721
	 */
	contract_type: string;
	/** The uri to the metadata of the token */
	token_uri?: string;
	/** The metadata of the token */
	metadata?: string;
	/** A normalized metadata version of the NFT's metadata. */
	normalized_metadata?: NormalizedMetadata;
	/** A set of links to 'thumbnail / preview' media files */
	media_links?: Media;
	/**
	 * The address that minted the NFT
	 * @example 0x9c83ff0f1c8924da96cb2fcb7e093f78eb2e316b
	 */
	minter_address?: string;
	/** When the token_uri was last updated */
	last_token_uri_sync?: string;
	/** When the metadata was last updated */
	last_metadata_sync?: string;
	/**
	 * The number of this item the user owns (used by ERC1155)
	 * @example 1
	 */
	amount?: string;
	/**
	 * The name of the Token contract
	 * @example CryptoKitties
	 */
	name: string;
	/**
	 * The symbol of the NFT contract
	 * @example RARI
	 */
	symbol: string;
}

export interface NftMetadata {
	/**
	 * The token id of the NFT
	 * @example 889
	 */
	token_id: string;
	/**
	 * The address of the contract of the NFT
	 * @example 0x8ce66ff0865570d1ff0bb0098fa41b4dc61e02e6
	 */
	token_address: string;
	/**
	 * The uri to the metadata of the token
	 * @example https://ipfs.moralis.io:2053/ipfs/QmZZbo8u8zEWg7wtmZhJS2W718WL6FA95T4XdgmCcLp1SJ/889.json
	 */
	token_uri: string;
	/**
	 * The metadata of the token
	 * @example {"name":"Bape #889","description":"The #1 metavestor clan (NFT/DAO) by a team with multi billion dollar company experience.","image":"https://bapesclan.mypinata.cloud/ipfs/QmTSUD5JA6qHaC5t25mcXySfz19AV9u4Mb6Na7ntQ6tEwf/889.jpg","attributes":[{"trait_type":"Background","value":"Black"},{"trait_type":"Body","value":"Man"},{"trait_type":"Dress","value":"Suit Tie Blue"},{"trait_type":"Face","value":"Pipe"},{"trait_type":"Eye","value":"Eye"}]}
	 */
	metadata: string;
	/** @example 1 */
	is_valid: number;
	/** @example 2 */
	syncing: number;
	/** @example 0 */
	frozen: number;
	/** @example 0 */
	resyncing: number;
	/**
	 * The type of NFT contract standard
	 * @example ERC721
	 */
	contract_type: string;
	/** @example fffa3102469ce77f569893d16d5884f9 */
	token_hash: string;
	/** @example fd995c8a-f8b2-40cb-a407-f43e552638b4 */
	batch_id: string;
	/** @example Bape #889 */
	metadata_name: string;
	/** @example The #1 metavestor clan (NFT/DAO) by a team with multi billion dollar company experience. */
	metadata_description: string;
	/** @example [{"trait_type":"Background","value":"Black"},{"trait_type":"Body","value":"Man"},{"trait_type":"Dress","value":"Suit Tie Blue"},{"trait_type":"Face","value":"Pipe"},{"trait_type":"Eye","value":"Eye"}] */
	metadata_attributes: string;
	/** @example 14265936 */
	block_number_minted: string;
	/** @example null */
	opensea_lookup?: object;
	/** @example 0xdcf086e3f7954b38180daae1405569da86588bfe */
	minter_address: string;
	/** @example 0x2c8d7ec7a8439b0f67b50e93be63242de52e9b5cdfc7dc0aee80c6a2f104c41a */
	transaction_minted: string;
	/** @example null */
	frozen_log_index?: object;
	/** @example null */
	imported?: object;
	/**
	 * When the token_uri was last updated
	 * @example 2021-02-24T00:47:26.647Z
	 */
	last_token_uri_sync: string;
	/**
	 * When the metadata was last updated
	 * @example 2021-02-24T00:47:26.647Z
	 */
	last_metadata_sync: string;
	/**
	 * @format date-time
	 * @example 2022-02-24T00:47:26.647Z
	 */
	createdAt: string;
	/**
	 * @format date-time
	 * @example 2022-04-09T23:56:44.807Z
	 */
	updatedAt: string;
}

export interface NftWalletCollections {
	/**
	 * The syncing status of the address [SYNCING/SYNCED]
	 * @example SYNCING
	 */
	status?: string;
	/**
	 * The total number of matches for this query
	 * @example 2000
	 */
	total?: number;
	/**
	 * The page of the current result
	 * @example 2
	 */
	page?: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size?: number;
	/** The cursor to get to the next page */
	cursor?: string;
	result?: NftCollections[];
}

export interface NftCollection {
	/**
	 * The total number of matches for this query
	 * @example 2000
	 */
	total?: number;
	/**
	 * The page of the current result
	 * @example 2
	 */
	page?: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size?: number;
	/** The cursor to get to the next page */
	cursor?: string;
	result?: Nft[];
}

export interface NftMetadataCollection {
	/**
	 * The total number of matches for this query
	 * @example 2000
	 */
	total?: number;
	/**
	 * The page of the current result
	 * @example 2
	 */
	page?: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size?: number;
	result?: NftMetadata[];
}

export interface NftCollections {
	/**
	 * The address of the contract of the NFT
	 * @example 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB
	 */
	token_address: string;
	/**
	 * The type of NFT contract standard
	 * @example ERC721
	 */
	contract_type: string;
	/**
	 * The name of the Token contract
	 * @example CryptoKitties
	 */
	name: string;
	/**
	 * The symbol of the NFT contract
	 * @example RARI
	 */
	symbol: string;
}

export interface NftOwner {
	/**
	 * The address of the contract of the NFT
	 * @example 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB
	 */
	token_address: string;
	/**
	 * The token id of the NFT
	 * @example 15
	 */
	token_id: string;
	/**
	 * The type of NFT contract standard
	 * @example ERC721
	 */
	contract_type: string;
	/**
	 * The address of the owner of the NFT
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	owner_of: string;
	/**
	 * The blocknumber when the amount or owner changed
	 * @example 88256
	 */
	block_number: string;
	/**
	 * The blocknumber when the NFT was minted
	 * @example 88256
	 */
	block_number_minted: string;
	/** The uri to the metadata of the token */
	token_uri?: string;
	/** The metadata of the token */
	metadata?: string;
	/** A normalized metadata version of the NFT's metadata. */
	normalized_metadata?: NormalizedMetadata;
	/** A set of links to 'thumbnail / preview' media files */
	media_links?: Media;
	/**
	 * The number of this item the user owns (used by ERC1155)
	 * @example 1
	 */
	amount?: string;
	/**
	 * The name of the Token contract
	 * @example CryptoKitties
	 */
	name: string;
	/**
	 * The symbol of the NFT contract
	 * @example RARI
	 */
	symbol: string;
	/**
	 * The token hash
	 * @example 502cee781b0fb40ea02508b21d319ced
	 */
	token_hash: string;
	/**
	 * When the token_uri was last updated
	 * @example 2021-02-24T00:47:26.647Z
	 */
	last_token_uri_sync: string;
	/**
	 * When the metadata was last updated
	 * @example 2021-02-24T00:47:26.647Z
	 */
	last_metadata_sync: string;
}

export interface MediaItem {
	/** The width of the preview image. */
	width: number;
	/** The height of the preview image. */
	height: number;
	/** The url of the preview file. */
	url: string;
}

export interface MediaCollection {
	/** Information about the original media file */
	original: MediaItem;
	/** Preview media file, lowest quality (for images 100px x 100px) */
	low: MediaItem;
	/** Preview media file, medium quality (for images 250px x 250px) */
	medium: MediaItem;
	/** Preview media file, highest quality (for images 500px x 500px) */
	high: MediaItem;
}

export interface Media {
	/** The mimetype of the media file [see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types] */
	mimetype: string;
	category: 'image' | 'audio' | 'video';
	/** The url of the original media file. */
	original_media_url: string;
	/** Hash value of the original media file. */
	parent_hash: string;
	/** Preview item associated with the original */
	media_collection: MediaCollection;
}

export interface NormalizedMetadataAttribute {
	/**
	 * The trait title or descriptor
	 * @example Eye Color
	 */
	trait_type?: string;
	/**
	 * The value of the attribute
	 * @example hazel
	 */
	value?: object;
	/**
	 * The type the attribute value should be displayed as
	 * @example string
	 */
	display_type?: string;
	/**
	 * For numeric values, the upper range
	 * @example 100
	 */
	max_value?: number;
	/**
	 * The number of possible values for this trait
	 * @example 7
	 */
	trait_count?: number;
	/**
	 * Order the trait should appear in the attribute list.
	 * @example 1
	 */
	order?: number;
}

export interface NormalizedMetadata {
	/**
	 * The name or title of the NFT
	 * @example Moralis Mug
	 */
	name?: string;
	/**
	 * A detailed description of the NFT
	 * @example Moralis Coffee nug 3D Asset that can be used in 3D worldspaces. This NFT is presented as a flat PNG, a Unity3D Prefab and a standard fbx.
	 */
	description?: string;
	/**
	 * The URL of the image of the NFT
	 * @example https://arw2wxg84h6b.moralishost.com:2053/server/files/tNJatzsHirx4V2VAep6sc923OYGxvkpBeJttR7Ks/de504bbadadcbe30c86278342fcf2560_moralismug.png
	 */
	image?: string;
	/**
	 * A link to additional information.
	 * @example https://giphy.com/gifs/loop-recursion-ting-aaODAv1iuQdgI
	 */
	external_link?: string;
	/**
	 * An animated version of the NFT's image
	 * @example https://giphy.com/gifs/food-design-donuts-o9ngTPVYW4qo8
	 */
	animation_url?: string;
	attributes?: NormalizedMetadataAttribute[];
}

export interface NftOwnerCollection {
	/**
	 * The syncing status of the address [SYNCING/SYNCED]
	 * @example SYNCING
	 */
	status?: string;
	/**
	 * The total number of matches for this query
	 * @example 2000
	 */
	total?: number;
	/**
	 * The page of the current result
	 * @example 2
	 */
	page?: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size?: number;
	/** The cursor to get to the next page */
	cursor?: string;
	result?: NftOwner[];
}

export interface NftTransfer {
	/**
	 * The address of the contract of the NFT
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	token_address: string;
	/**
	 * The token id of the NFT
	 * @example 15
	 */
	token_id: string;
	/**
	 * The address that sent the NFT
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	from_address?: string;
	/**
	 * The address that recieved the NFT
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	to_address: string;
	/**
	 * The value that was sent in the transaction (ETH/BNB/etc..)
	 * @example 1000000000000000
	 */
	value?: string;
	/**
	 * The number of tokens transferred
	 * @example 1
	 */
	amount?: string;
	/**
	 * The type of NFT contract standard
	 * @example ERC721
	 */
	contract_type: string;
	/**
	 * The blocknumber of the transaction
	 * @example 88256
	 */
	block_number: string;
	/**
	 * The block timestamp
	 * @example 2021-06-04T16:00:15
	 */
	block_timestamp: string;
	/** The block hash of the transaction */
	block_hash: string;
	/**
	 * The transaction hash
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	transaction_hash: string;
	/** The transaction type */
	transaction_type?: string;
	/** The transaction index */
	transaction_index?: number;
	/** The log index */
	log_index: number;
	/**
	 * The operator present only for ERC1155 Transfers
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	operator?: string;
}

export interface NftTransferCollection {
	/**
	 * The total number of matches for this query
	 * @example 2000
	 */
	total: number;
	/**
	 * The page of the current result
	 * @example 2
	 */
	page: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size: number;
	/** The cursor to get to the next page */
	cursor: string;
	result: NftTransfer[];
	/**
	 * Indicator if the block exists
	 * @example true
	 */
	block_exists?: boolean;
	/**
	 * Indicator if the block is fully indexed
	 * @example true
	 */
	index_complete?: boolean;
}

export interface NftContractMetadata {
	/**
	 * The address of the token contract
	 * @example 0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09
	 */
	token_address: string;
	/**
	 * The name of the token Contract
	 * @example KryptoKitties
	 */
	name: string;
	/** Timestamp of when the contract was last synced with the node */
	synced_at?: string;
	/**
	 * The symbol of the NFT contract
	 * @example RARI
	 */
	symbol: string;
	/**
	 * The type of NFT contract
	 * @example ERC721
	 */
	contract_type: string;
}

export interface NftContractMetadataCollection {
	/**
	 * The total number of matches for this query
	 * @example 2000
	 */
	total: number;
	/**
	 * The page of the current result
	 * @example 2
	 */
	page: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size: number;
	result: NftContractMetadata[];
}

export interface Erc20Transaction {
	/**
	 * The transaction hash
	 * @example 0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09
	 */
	transaction_hash: string;
	/**
	 * The address of the token
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	address: string;
	/**
	 * The block timestamp
	 * @example 2021-04-02T10:07:54.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12526958
	 */
	block_number: string;
	/**
	 * The block hash
	 * @example 0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86
	 */
	block_hash: string;
	/**
	 * The recipient
	 * @example 0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044
	 */
	to_address: string;
	/**
	 * The sender
	 * @example 0xd4a3BebD824189481FC45363602b83C9c7e9cbDf
	 */
	from_address: string;
	/**
	 * The value that was transfered (in wei)
	 * @example 650000000000000000
	 */
	value: string;
	/**
	 * The transaction index of the transfer within the block
	 * @example 12
	 */
	transaction_index: number;
	/**
	 * The log index of the transfer within the block
	 * @example 2
	 */
	log_index: number;
}

export interface HistoricalNftTransfer {
	/**
	 * The transaction hash
	 * @example 0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09
	 */
	transaction_hash: string;
	/**
	 * The address of the token
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	address: string;
	/**
	 * The block timestamp
	 * @example 2021-04-02T10:07:54.000Z
	 */
	block_timestamp: string;
	/**
	 * The block number
	 * @example 12526958
	 */
	block_number: string;
	/**
	 * The block hash
	 * @example 0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86
	 */
	block_hash: string;
	/**
	 * The recipient
	 * @example 0x62AED87d21Ad0F3cdE4D147Fdcc9245401Af0044
	 */
	to_address: string;
	/**
	 * The sender
	 * @example 0xd4a3BebD824189481FC45363602b83C9c7e9cbDf
	 */
	from_address: string;
	/** The token ids of the tokens that were transfered */
	token_ids: string[];
	/** The amounts that were transfered */
	amounts: string[];
	/**
	 * They contract type of the transfer
	 * @example ERC721
	 */
	contract_type: string;
}

export interface Erc20Metadata {
	/**
	 * The address of the token contract
	 * @example 0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09
	 */
	address: string;
	/**
	 * The name of the token Contract
	 * @example Kylin Network
	 */
	name: string;
	/**
	 * The symbol of the NFT contract
	 * @example KYL
	 */
	symbol: string;
	/**
	 * The number of decimals on of the token
	 * @example 18
	 */
	decimals: string;
	/**
	 * The logo of the token
	 * @example https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png
	 */
	logo?: string;
	/**
	 * The logo hash
	 * @example ee7aa2cdf100649a3521a082116258e862e6971261a39b5cd4e4354fcccbc54d
	 */
	logo_hash?: string;
	/**
	 * The thumbnail of the logo
	 * @example https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c_thumb.png
	 */
	thumbnail?: string;
	block_number?: string;
	validated?: string;
}

export interface MetadataResync {
	/** The status of resync request */
	status: string;
}

export interface Erc721Metadata {
	/**
	 * The name of the token Contract
	 * @example Kylin Network
	 */
	name: string;
	/**
	 * The symbol of the NFT contract
	 * @example KYL
	 */
	symbol: string;
	token_uri?: string;
}

export interface Erc20Price {
	nativePrice?: NativeErc20Price;
	/**
	 * The price in USD for the token
	 * @format double
	 * @example 19.722370676
	 */
	usdPrice: number;
	/**
	 * The address of the exchange used to calculate the price
	 * @example 0x1f98431c8ad98523631ae4a59f267346ea31f984
	 */
	exchangeAddress?: string;
	/**
	 * The name of the exchange used for calculating the price
	 * @example Uniswap v3
	 */
	exchangeName?: string;
}

export interface NativeErc20Price {
	/**
	 * The native price of the token
	 * @example 8409770570506626
	 */
	value: string;
	/**
	 * The number of decimals of the token
	 * @example 18
	 */
	decimals: number;
	/**
	 * The Name of the token
	 * @example Ether
	 */
	name: string;
	/**
	 * The Symbol of the token
	 * @example ETH
	 */
	symbol: string;
}

export interface Erc20TransactionCollection {
	/**
	 * The total number of matches for this query
	 * @example 2000
	 */
	total?: number;
	/**
	 * The page of the current result
	 * @example 2
	 */
	page?: number;
	/**
	 * The number of results per page
	 * @example 100
	 */
	page_size?: number;
	result?: Erc20Transaction[];
}

export interface Ens {
	/**
	 * Resolved ENS address
	 * @example Vitalik.eth
	 */
	name: string;
}

export interface Resolve {
	/**
	 * Resolved domain address
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	address: string;
}

export interface ReservesPair {
	/** @example 220969226548536862025877 */
	reserve0?: string;
	/** @example 844810441191293211036 */
	reserve1?: string;
}

export interface ReservesCollection {
	token0?: {
		/** @example 0x2b591e99afe9f32eaa6214f7b7629768c40eeb39 */
		address?: string;
		/** @example HEX */
		name?: string;
		/** @example HEX */
		symbol?: string;
		/** @example 9 */
		decimals?: string;
		/** @example https://cdn.moralis.io/eth/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png */
		logo?: string;
		/** @example b3bd1b5512965d7b6aeee903dcc6d28b116d58c788eb41e9c1690baed878beaa */
		logo_hash?: string;
		/** @example https://cdn.moralis.io/eth/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39_thumb.png */
		thumbnail?: string;
		/** @example 14836562 */
		block_number?: string;
		/** @example 0 */
		validated?: number;
		/** @example 2022-01-20T09:39:55.818Z */
		created_at?: string;
	};
	token1?: {
		/** @example 0xdac17f958d2ee523a2206206994597c13d831ec7 */
		address?: string;
		/** @example Tether USD */
		name?: string;
		/** @example USDT */
		symbol?: string;
		/** @example 6 */
		decimals?: string;
		/** @example https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png */
		logo?: string;
		/** @example ee7aa2cdf100649a3521a082116258e862e6971261a39b5cd4e4354fcccbc54d */
		logo_hash?: string;
		/** @example https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7_thumb.png */
		thumbnail?: string;
		/** @example 4638568 */
		block_number?: string;
		/** @example 1 */
		validated?: number;
		/** @example 2022-01-20T09:39:55.818Z */
		created_at?: string;
	};
	/** @example 0xbbb9bf440d0f686487925fef3b0a0f9aa67753f6 */
	pairAddress?: string;
}

export interface IpfsFileRequest {
	/**
	 * Path to file
	 * @example moralis/logo.jpg
	 */
	path: string;
	/**
	 * base64 or JSON
	 * @example iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3
	 */
	content: string;
}

export interface IpfsFile {
	/**
	 * Path to file
	 * @example https://ipfs.moralis.io/QmPQ3YJ3hgfsBzJ1U4MGyV2C1GhDy6MWCENr1qMdMpKVnY/moralis/logo.jpg
	 */
	path: string;
}

export interface Web3Version {
	/**
	 * version of the api
	 * @example 1.0.0
	 */
	version: string;
}

export interface EndpointWeights {
	/**
	 * endpoint
	 * @example endpointWeights
	 */
	endpoint: string;
	/**
	 * The path to the endpoint
	 * @example /info/endpointWeights
	 */
	path: string;
	/**
	 * The number of hits the requests counts for ratelimiting
	 * @example 1
	 */
	rateLimitWeight: string;
	/**
	 * The number of hits the requests counts for billing
	 * @example 0
	 */
	price: string;
}

export type NativeBalances = {
	/**
	 * The chain
	 * @example eth_mainnet
	 */
	chain: string;
	/**
	 * The chain id
	 * @example 2
	 */
	chain_id: string;
	/**
	 * The total balances for all the walttes
	 * @example 57499206466583095
	 */
	total_balance: string;
	/**
	 * The block Number
	 * @example 123456789
	 */
	block_number: string;
	/**
	 * The block timestamp
	 * @example 0.057
	 */
	block_timestamp: string;
	/**
	 * The total balances for all the walttes formatted
	 * @example 123456789
	 */
	total_balance_formatted: string;
	wallet_balances: {
		/**
		 * address
		 * @example 0x123
		 */
		address: string;
		/**
		 * balance
		 * @example 28499206466583095
		 */
		balance: string;
		/**
		 * balance formatted
		 * @example 0.0285
		 */
		balance_formatted: string;
	}[];
}[];

export interface GetBlockParams {
	/** The chain to query */
	chain?: ChainList;
	/** If the result should contain the internal transactions. */
	include?: IncludeList;
	/** The block hash or block number */
	blockNumberOrHash: string;
}

export interface GetDateToBlockParams {
	/** The chain to query */
	chain?: ChainList;
	/** Unix date in miliseconds or a datestring (any format that is accepted by momentjs) */
	date: string;
}

export interface GetLogsByAddressParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The block number
	 * * Provide the param 'block_numer' or ('from_block' and / or 'to_block')
	 * * If 'block_numer' is provided in conbinaison with 'from_block' and / or 'to_block', 'block_number' will will be used
	 *
	 */
	block_number?: string;
	/**
	 * The minimum block number from where to get the logs
	 * * Provide the param 'block_numer' or ('from_block' and / or 'to_block')
	 * * If 'block_numer' is provided in conbinaison with 'from_block' and / or 'to_block', 'block_number' will will be used
	 *
	 */
	from_block?: string;
	/**
	 * The maximum block number from where to get the logs
	 * * Provide the param 'block_numer' or ('from_block' and / or 'to_block')
	 * * If 'block_numer' is provided in conbinaison with 'from_block' and / or 'to_block', 'block_number' will will be used
	 *
	 */
	to_block?: string;
	/**
	 * The date from where to get the logs (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 * * If 'from_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them
	 *
	 */
	from_date?: string;
	/**
	 * Get the logs to this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 * * If 'to_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them
	 *
	 */
	to_date?: string;
	/** topic0 */
	topic0?: string;
	/** topic1 */
	topic1?: string;
	/** topic2 */
	topic2?: string;
	/** topic3 */
	topic3?: string;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** address */
	address: string;
}

export interface GetNftTransfersByBlockParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The desired page size of the result.
	 * @min 1
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** The block hash or block number */
	blockNumberOrHash: string;
}

export interface GetInternalTransactionsParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The transaction hash
	 * @example 0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109
	 */
	transactionHash: string;
}

export interface GetTransactionParams {
	/** The chain to query */
	chain?: ChainList;
	/** If the result should contain the internal transactions. */
	include?: IncludeList;
	/**
	 * The transaction hash
	 * @example 0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109
	 */
	transactionHash: string;
}

export interface GetTransactionVerboseParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The transaction hash
	 * @example 0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109
	 */
	transactionHash: string;
}

export type GetContractEventsPayload = object;

export interface GetContractEventsParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The minimum block number from where to get the logs
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/**
	 * The maximum block number from where to get the logs.
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 * @min 0
	 */
	to_block?: number;
	/**
	 * The date from where to get the logs (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 */
	from_date?: string;
	/**
	 * Get the logs to this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/** The topic of the event */
	topic: string;
	/**
	 * offset
	 * @min 0
	 */
	offset?: number;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** address */
	address: string;
}

export interface RunContractFunctionParams {
	/** The chain to query */
	chain?: ChainList;
	/** function_name */
	function_name: string;
	/** address */
	address: string;
}

export interface GetTransactionsParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The minimum block number from where to get the transactions
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/**
	 * The maximum block number from where to get the transactions.
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 * @min 0
	 */
	to_block?: number;
	/**
	 * The date from where to get the transactions (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 */
	from_date?: string;
	/**
	 * Get the transactions to this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** If the result should contain the internal transactions. */
	include?: IncludeList;
	/** address */
	address: string;
}

export interface GetTransactionsVerboseParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The minimum block number from where to get the transactions
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/**
	 * The maximum block number from where to get the transactions.
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 * @min 0
	 */
	to_block?: number;
	/**
	 * The date from where to get the transactions (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 */
	from_date?: string;
	/**
	 * Get the transactions to this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** address */
	address: string;
}

export interface GetNativeBalanceParams {
	/** The chain to query */
	chain?: ChainList;
	/** The block number on which the balances should be checked */
	to_block?: number;
	/**
	 * The address for which the native balance will be checked
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	address: string;
}

export interface GetNativeBalancesForAddressesParams {
	/** The chain to query */
	chain?: ChainList;
	/** The block number on which the balances should be checked */
	to_block?: number;
	/** The addresses to get metadata for */
	wallet_addresses: string[];
}

export interface GetTokenBalancesParams {
	/** The chain to query */
	chain?: ChainList;
	/** The block number on which the balances should be checked */
	to_block?: number;
	/** The addresses to get balances for (Optional) */
	token_addresses?: string[];
	/**
	 * The address for which token balances will be checked
	 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
	 */
	address: string;
}

export interface GetTokenTransfersParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The minimum block number from where to get the transactions
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/**
	 * The maximum block number from where to get the transactions.
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 * @min 0
	 */
	to_block?: number;
	/**
	 * The date from where to get the transactions (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 */
	from_date?: string;
	/**
	 * Get the transactions to this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** address */
	address: string;
}

export interface GetNfTsParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The addresses to get balances for (Optional) */
	token_addresses?: string[];
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** Should normalized metadata be returned? */
	normalizeMetadata?: boolean;
	/** The owner of a given token */
	address: string;
}

export interface GetNftTransfersParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/**
	 * The transfer direction
	 * @example both
	 */
	direction?: 'both' | 'to' | 'from';
	/**
	 * The minimum block number from where to get the transfers
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/** To get the reserves at this block number */
	to_block?: string;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** The sender or recepient of the transfer */
	address: string;
}

export interface GetWalletNftCollectionsParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** The owner wallet address of the NFT collections */
	address: string;
}

export interface GetNfTsForContractParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The owner of a given token */
	address: string;
	/** Address of the contract */
	tokenAddress: string;
}

export interface GetTokenMetadataParams {
	/** The chain to query */
	chain?: ChainList;
	/** The addresses to get metadata for */
	addresses: string[];
}

export interface GetNftTradesParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The minimum block number from where to get the transfers
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/** To get the reserves at this block number */
	to_block?: string;
	/**
	 * The date from where to get the transfers (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 */
	from_date?: string;
	/**
	 * Get the reserves to this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/**
	 * marketplace from where to get the trades (only opensea is supported at the moment)
	 * @example opensea
	 */
	marketplace?: 'opensea';
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/**
	 * Address of the contract
	 * @example 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
	 */
	address: string;
}

export interface GetNftLowestPriceParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The number of days to look back to find the lowest price
	 * If not provided 7 days will be the default
	 *
	 * @min 0
	 */
	days?: number;
	/**
	 * marketplace from where to get the trades (only opensea is supported at the moment)
	 * @example opensea
	 */
	marketplace?: 'opensea';
	/**
	 * Address of the contract
	 * @example 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
	 */
	address: string;
}

export interface GetTokenMetadataBySymbolParams {
	/** The chain to query */
	chain?: ChainList;
	/** The symbols to get metadata for */
	symbols: string[];
}

export interface GetTokenPriceParams {
	/** The chain to query */
	chain?: ChainList;
	/** The factory name or address of the token exchange */
	exchange?: string;
	/**
	 * to_block
	 * @min 0
	 */
	to_block?: number;
	/** The address of the token contract */
	address: string;
}

export interface GetTokenAddressTransfersParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The minimum block number from where to get the transfers
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/**
	 * The maximum block number from where to get the transfers.
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 * @min 0
	 */
	to_block?: number;
	/**
	 * The date from where to get the transfers (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 */
	from_date?: string;
	/**
	 * Get the transfers to this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The cursor returned in the previous response (used for getting the next page). */
	cursor?: string;
	/** The address of the token contract */
	address: string;
}

export interface GetTokenAllowanceParams {
	/** The chain to query */
	chain?: ChainList;
	/** The address of the token owner */
	owner_address: string;
	/** The address of the token spender */
	spender_address: string;
	/** The address of the token contract */
	address: string;
}

export interface SearchNfTsParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/** The search string */
	q: string;
	/**
	 * What fields the search should match on. To look into the entire metadata set the value to 'global'. To have a better response time you can look into a specific field like name
	 * @example name
	 */
	filter?:
		| 'name'
		| 'description'
		| 'attributes'
		| 'global'
		| 'name,description'
		| 'name,attributes'
		| 'description,attributes'
		| 'name,description,attributes';
	/**
	 * The minimum block number from where to start the search
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/**
	 * The maximum block number from where to end the search
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 * @min 0
	 */
	to_block?: number;
	/**
	 * The date from where to start the search (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 */
	from_date?: string;
	/**
	 * Get search results up until this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/** The addresses to get metadata for */
	addresses?: string[];
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
}

export interface GetNftTransfersFromToBlockParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The minimum block number from where to get the transfers
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/**
	 * The maximum block number from where to get the transfers.
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 * @min 0
	 */
	to_block?: number;
	/**
	 * The date from where to get the transfers (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 */
	from_date?: string;
	/**
	 * Get transfers up until this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/**
	 * The cursor returned in the previous response (for getting the next page)
	 *
	 */
	cursor?: string;
}

export interface GetAllTokenIdsParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/**
	 * The number of subranges to split the results into
	 * @min 1
	 */
	totalRanges?: number;
	/**
	 * The desired subrange to query
	 * @min 1
	 */
	range?: number;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** Should normalized metadata be returned? */
	normalizeMetadata?: boolean;
	/** Address of the contract */
	address: string;
}

export interface GetMultipleNfTsParams {
	/** The chain to query */
	chain?: ChainList;
}

export interface GetContractNftTransfersParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The minimum block number from where to get the transfers
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 * @min 0
	 */
	from_block?: number;
	/**
	 * The maximum block number from where to get the transfers.
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 * @min 0
	 */
	to_block?: number;
	/**
	 * The date from where to get the transfers (any format that is accepted by momentjs)
	 * * Provide the param 'from_block' or 'from_date'
	 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
	 *
	 */
	from_date?: string;
	/**
	 * Get transfers up until this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** Address of the contract */
	address: string;
}

export interface GetNftOwnersParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** Should normalized metadata be returned? */
	normalizeMetadata?: boolean;
	/** Address of the contract */
	address: string;
}

export interface GetNftMetadataParams {
	/** The chain to query */
	chain?: ChainList;
	/** Address of the contract */
	address: string;
}

export interface ReSyncMetadataParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The type of resync to operate
	 * @example uri
	 */
	flag?: 'uri' | 'metadata';
	/**
	 * To define the behaviour of the endpoint
	 * @example sync
	 */
	mode?: 'async' | 'sync';
	/** Address of the contract */
	address: string;
	/** The id of the token */
	tokenId: string;
}

export interface SyncNftContractParams {
	/** The chain to query */
	chain?: ChainList;
	/** Address of the contract */
	address: string;
}

export interface GetTokenIdMetadataParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/** Should normalized metadata be returned? */
	normalizeMetadata?: boolean;
	/** Address of the contract */
	address: string;
	/** The id of the token */
	tokenId: string;
}

export interface GetTokenIdOwnersParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** Should normalized metadata be returned? */
	normalizeMetadata?: boolean;
	/** Address of the contract */
	address: string;
	/** The id of the token */
	tokenId: string;
}

export interface GetWalletTokenIdTransfersParams {
	/** The chain to query */
	chain?: ChainList;
	/**
	 * The format of the token id
	 * @example decimal
	 */
	format?: 'decimal' | 'hex';
	/**
	 * The desired page size of the result.
	 * @min 0
	 */
	limit?: number;
	/** If the result should skip returning the total count (Improves performance). */
	disable_total?: boolean;
	/** The field(s) to order on and if it should be ordered in ascending or descending order. Specified by: fieldName1.order,fieldName2.order. Example 1: "block_number", "block_number.ASC", "block_number.DESC", Example 2: "block_number and contract_type", "block_number.ASC,contract_type.DESC" */
	order?: string;
	/** The cursor returned in the previous response (used to getting the next page). */
	cursor?: string;
	/** Address of the contract */
	address: string;
	/** The id of the token */
	tokenId: string;
}

export interface ResolveDomainParams {
	/**
	 * The currency to query
	 * @example eth
	 */
	currency?: 'eth' | '0x1';
	/**
	 * Domain to be resolved
	 * @example brad.crypto
	 */
	domain: string;
}

export interface GetPairReservesParams {
	/** The chain to query */
	chain?: ChainList;
	/** To get the reserves at this block number */
	to_block?: string;
	/**
	 * Get the reserves to this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/**
	 * Liquidity pair address
	 * @example 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
	 */
	pairAddress: string;
}

export interface GetPairAddressParams {
	/** The chain to query */
	chain?: ChainList;
	/** To get the reserves at this block number */
	to_block?: string;
	/**
	 * Get the reserves to this date (any format that is accepted by momentjs)
	 * * Provide the param 'to_block' or 'to_date'
	 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
	 *
	 */
	to_date?: string;
	/**
	 * The factory name or address of the token exchange
	 * @example uniswapv2
	 */
	exchange:
		| 'uniswapv2'
		| 'uniswapv3'
		| 'sushiswapv2'
		| 'pancakeswapv2'
		| 'pancakeswapv1'
		| 'quickswap';
	/**
	 * Token0 address
	 * @example 0x2b591e99afe9f32eaa6214f7b7629768c40eeb39
	 */
	token0Address: string;
	/**
	 * Token1 address
	 * @example 0xdac17f958d2ee523a2206206994597c13d831ec7
	 */
	token1Address: string;
}

export type UploadFolderPayload = IpfsFileRequest[];

export namespace Block {
	/**
	 * @description Get the contents of a block by block hash.
	 * @tags native
	 * @name GetBlock
	 * @summary getBlock
	 * @request GET:/block/{block_number_or_hash}
	 * @secure
	 */
	export namespace GetBlock {
		export type RequestParams = {
			/** The block hash or block number */
			blockNumberOrHash: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** If the result should contain the internal transactions. */
			include?: IncludeList;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Block;
	}
	/**
	 * @description Get NFT transfers by block number or block hash.
	 * @tags native
	 * @name GetNftTransfersByBlock
	 * @summary getNFTTransfersByBlock
	 * @request GET:/block/{block_number_or_hash}/nft/transfers
	 * @secure
	 */
	export namespace GetNftTransfersByBlock {
		export type RequestParams = {
			/** The block hash or block number */
			blockNumberOrHash: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The desired page size of the result.
			 * @min 1
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftTransferCollection;
	}
}

export namespace DateToBlock {
	/**
	 * @description Get the closest block of the provided date.
	 * @tags native
	 * @name GetDateToBlock
	 * @summary getDateToBlock
	 * @request GET:/dateToBlock
	 * @secure
	 */
	export namespace GetDateToBlock {
		export type RequestParams = {};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** Unix date in miliseconds or a datestring (any format that is accepted by momentjs) */
			date: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = BlockDate;
	}
}

export namespace Address {
	/**
	 * @description Get the logs for an address.
	 * @tags native
	 * @name GetLogsByAddress
	 * @summary getLogsByAddress
	 * @request GET:/{address}/logs
	 * @secure
	 */
	export namespace GetLogsByAddress {
		export type RequestParams = {
			/** address */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The block number
			 * * Provide the param 'block_numer' or ('from_block' and / or 'to_block')
			 * * If 'block_numer' is provided in conbinaison with 'from_block' and / or 'to_block', 'block_number' will will be used
			 *
			 */
			block_number?: string;
			/**
			 * The minimum block number from where to get the logs
			 * * Provide the param 'block_numer' or ('from_block' and / or 'to_block')
			 * * If 'block_numer' is provided in conbinaison with 'from_block' and / or 'to_block', 'block_number' will will be used
			 *
			 */
			from_block?: string;
			/**
			 * The maximum block number from where to get the logs
			 * * Provide the param 'block_numer' or ('from_block' and / or 'to_block')
			 * * If 'block_numer' is provided in conbinaison with 'from_block' and / or 'to_block', 'block_number' will will be used
			 *
			 */
			to_block?: string;
			/**
			 * The date from where to get the logs (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 * * If 'from_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them
			 *
			 */
			from_date?: string;
			/**
			 * Get the logs to this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 * * If 'to_date' and the block params are provided, the block params will be used. Please refer to the blocks params sections (block_number,from_block and to_block) on how to use them
			 *
			 */
			to_date?: string;
			/** topic0 */
			topic0?: string;
			/** topic1 */
			topic1?: string;
			/** topic2 */
			topic2?: string;
			/** topic3 */
			topic3?: string;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = LogCollection;
	}
	/**
	 * @description Get events for a specific contract ordered by block number in descending order.
	 * @tags native
	 * @name GetContractEvents
	 * @summary getContractEvents
	 * @request POST:/{address}/events
	 * @secure
	 */
	export namespace GetContractEvents {
		export type RequestParams = {
			/** address */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The minimum block number from where to get the logs
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/**
			 * The maximum block number from where to get the logs.
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 * @min 0
			 */
			to_block?: number;
			/**
			 * The date from where to get the logs (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 */
			from_date?: string;
			/**
			 * Get the logs to this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/** The topic of the event */
			topic: string;
			/**
			 * offset
			 * @min 0
			 */
			offset?: number;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
		};
		export type RequestBody = GetContractEventsPayload;
		export type RequestHeaders = {};
		export type ResponseBody = {
			/**
			 * The total number of matches for this query
			 * @example 2000
			 */
			total?: number;
			/**
			 * The page of the current result
			 * @example 2
			 */
			page?: number;
			/**
			 * The number of results per page
			 * @example 100
			 */
			page_size?: number;
			result?: LogEvent[];
		};
	}
	/**
	 * @description Run a given function of a contract abi and retrieve readonly data.
	 * @tags native
	 * @name RunContractFunction
	 * @summary runContractFunction
	 * @request POST:/{address}/function
	 * @secure
	 */
	export namespace RunContractFunction {
		export type RequestParams = {
			/** address */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** function_name */
			function_name: string;
		};
		export type RequestBody = RunContractDto;
		export type RequestHeaders = {};
		export type ResponseBody = string;
	}
	/**
	 * @description Get native transactions ordered by block number in descending order.
	 * @tags account
	 * @name GetTransactions
	 * @summary getTransactions
	 * @request GET:/{address}
	 * @secure
	 */
	export namespace GetTransactions {
		export type RequestParams = {
			/** address */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The minimum block number from where to get the transactions
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/**
			 * The maximum block number from where to get the transactions.
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 * @min 0
			 */
			to_block?: number;
			/**
			 * The date from where to get the transactions (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 */
			from_date?: string;
			/**
			 * Get the transactions to this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** If the result should contain the internal transactions. */
			include?: IncludeList;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = TransactionCollection;
	}
	/**
	 * @description Get native transactions ordered by block number in descending order.
	 * @tags account
	 * @name GetTransactionsVerbose
	 * @summary getTransactionsVerbose
	 * @request GET:/{address}/verbose
	 * @secure
	 */
	export namespace GetTransactionsVerbose {
		export type RequestParams = {
			/** address */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The minimum block number from where to get the transactions
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/**
			 * The maximum block number from where to get the transactions.
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 * @min 0
			 */
			to_block?: number;
			/**
			 * The date from where to get the transactions (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 */
			from_date?: string;
			/**
			 * Get the transactions to this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = TransactionVerboseCollection;
	}
	/**
	 * @description Get native balance for a specific address.
	 * @tags account
	 * @name GetNativeBalance
	 * @summary getNativeBalance
	 * @request GET:/{address}/balance
	 * @secure
	 */
	export namespace GetNativeBalance {
		export type RequestParams = {
			/**
			 * The address for which the native balance will be checked
			 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
			 */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** The block number on which the balances should be checked */
			to_block?: number;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NativeBalance;
	}
	/**
	 * @description Get token balances for a specific address.
	 * @tags account
	 * @name GetTokenBalances
	 * @summary getTokenBalances
	 * @request GET:/{address}/erc20
	 * @secure
	 */
	export namespace GetTokenBalances {
		export type RequestParams = {
			/**
			 * The address for which token balances will be checked
			 * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
			 */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** The block number on which the balances should be checked */
			to_block?: number;
			/** The addresses to get balances for (Optional) */
			token_addresses?: string[];
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Erc20TokenBalance[];
	}
	/**
	 * @description Get ERC20 token transactions ordered by block number in descending order.
	 * @tags account
	 * @name GetTokenTransfers
	 * @summary getTokenTransfers
	 * @request GET:/{address}/erc20/transfers
	 * @secure
	 */
	export namespace GetTokenTransfers {
		export type RequestParams = {
			/** address */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The minimum block number from where to get the transactions
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/**
			 * The maximum block number from where to get the transactions.
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 * @min 0
			 */
			to_block?: number;
			/**
			 * The date from where to get the transactions (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 */
			from_date?: string;
			/**
			 * Get the transactions to this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Erc20TransactionCollection;
	}
	/**
	 * @description Get NFTs owned by a given address. * The response will include status [SYNCED/SYNCING] based on the contracts being indexed. * Use the token_address param to get results for a specific contract only * Note results will include all indexed NFTs * Any request which includes the token_address param will start the indexing process for that NFT collection the very first time it is requested.
	 * @tags account
	 * @name GetNfTs
	 * @summary getNFTs
	 * @request GET:/{address}/nft
	 * @secure
	 */
	export namespace GetNfTs {
		export type RequestParams = {
			/** The owner of a given token */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The addresses to get balances for (Optional) */
			token_addresses?: string[];
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
			/** Should normalized metadata be returned? */
			normalizeMetadata?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftOwnerCollection;
	}
	/**
	 * @description Get the transfers of the tokens matching the given parameters.
	 * @tags account
	 * @name GetNftTransfers
	 * @summary getNFTTransfers
	 * @request GET:/{address}/nft/transfers
	 * @secure
	 */
	export namespace GetNftTransfers {
		export type RequestParams = {
			/** The sender or recepient of the transfer */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/**
			 * The transfer direction
			 * @example both
			 */
			direction?: 'both' | 'to' | 'from';
			/**
			 * The minimum block number from where to get the transfers
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/** To get the reserves at this block number */
			to_block?: string;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftTransferCollection;
	}
	/**
	 * @description Get the nft collections owned by an user
	 * @tags account
	 * @name GetWalletNftCollections
	 * @summary getWalletNFTCollections
	 * @request GET:/{address}/nft/collections
	 * @secure
	 */
	export namespace GetWalletNftCollections {
		export type RequestParams = {
			/** The owner wallet address of the NFT collections */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftWalletCollections;
	}
	/**
	 * @description Get NFTs owned by the given address for a specific NFT contract address. * Use the token_address param to get results for a specific contract only * Note results will include all indexed NFTs * Any request which includes the token_address param will start the indexing process for that NFT collection the very first time it is requested.
	 * @tags account
	 * @name GetNfTsForContract
	 * @summary getNFTsForContract
	 * @request GET:/{address}/nft/{token_address}
	 * @secure
	 */
	export namespace GetNfTsForContract {
		export type RequestParams = {
			/** The owner of a given token */
			address: string;
			/** Address of the contract */
			tokenAddress: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftOwnerCollection;
	}
}

export namespace Transaction {
	/**
	 * @description Get the contents of a internal transaction by transaction hash.
	 * @tags native
	 * @name GetInternalTransactions
	 * @summary getInternalTransactions
	 * @request GET:/transaction/{transaction_hash}/internal-transactions
	 * @secure
	 */
	export namespace GetInternalTransactions {
		export type RequestParams = {
			/**
			 * The transaction hash
			 * @example 0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109
			 */
			transactionHash: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = InternalTransaction[];
	}
	/**
	 * @description Get the contents of a transaction by transaction hash.
	 * @tags native
	 * @name GetTransaction
	 * @summary getTransaction
	 * @request GET:/transaction/{transaction_hash}
	 * @secure
	 */
	export namespace GetTransaction {
		export type RequestParams = {
			/**
			 * The transaction hash
			 * @example 0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109
			 */
			transactionHash: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** If the result should contain the internal transactions. */
			include?: IncludeList;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = BlockTransaction;
	}
	/**
	 * @description Get the contents of a transaction by transaction hash along with the decoded data
	 * @tags native
	 * @name GetTransactionVerbose
	 * @summary getTransactionVerbose
	 * @request GET:/transaction/{transaction_hash}/verbose
	 * @secure
	 */
	export namespace GetTransactionVerbose {
		export type RequestParams = {
			/**
			 * The transaction hash
			 * @example 0xdc85cb1b75fd09c2f6d001fea4aba83764193cbd7881a1fa8ccde350a5681109
			 */
			transactionHash: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = BlockTransactionDecoded;
	}
}

export namespace Wallets {
	/**
	 * @description Get the native balances for a set of specific addresses
	 * @tags account
	 * @name GetNativeBalancesForAddresses
	 * @summary Get balance for a set of wallet
	 * @request GET:/wallets/balances
	 * @secure
	 */
	export namespace GetNativeBalancesForAddresses {
		export type RequestParams = {};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** The block number on which the balances should be checked */
			to_block?: number;
			/** The addresses to get metadata for */
			wallet_addresses: string[];
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NativeBalances;
	}
}

export namespace Erc20 {
	/**
	 * @description Returns metadata (name, symbol, decimals, logo) for a given token contract address.
	 * @tags token
	 * @name GetTokenMetadata
	 * @summary getTokenMetadata
	 * @request GET:/erc20/metadata
	 * @secure
	 */
	export namespace GetTokenMetadata {
		export type RequestParams = {};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** The addresses to get metadata for */
			addresses: string[];
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Erc20Metadata[];
	}
	/**
	 * @description Get metadata (name, symbol, decimals, logo) for a list of token symbols.
	 * @tags token
	 * @name GetTokenMetadataBySymbol
	 * @summary getTokenMetadataBySymbol
	 * @request GET:/erc20/metadata/symbols
	 * @secure
	 */
	export namespace GetTokenMetadataBySymbol {
		export type RequestParams = {};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** The symbols to get metadata for */
			symbols: string[];
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Erc20Metadata[];
	}
	/**
	 * @description Get the token price denominated in the blockchains native token and USD.
	 * @tags token
	 * @name GetTokenPrice
	 * @summary getTokenPrice
	 * @request GET:/erc20/{address}/price
	 * @secure
	 */
	export namespace GetTokenPrice {
		export type RequestParams = {
			/** The address of the token contract */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** The factory name or address of the token exchange */
			exchange?: string;
			/**
			 * to_block
			 * @min 0
			 */
			to_block?: number;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Erc20Price;
	}
	/**
	 * @description Get ERC20 token transactions ordered by block number in descending order.
	 * @tags token
	 * @name GetTokenAddressTransfers
	 * @summary getTokenAddressTransfers
	 * @request GET:/erc20/{address}/transfers
	 * @secure
	 */
	export namespace GetTokenAddressTransfers {
		export type RequestParams = {
			/** The address of the token contract */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The minimum block number from where to get the transfers
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/**
			 * The maximum block number from where to get the transfers.
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 * @min 0
			 */
			to_block?: number;
			/**
			 * The date from where to get the transfers (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 */
			from_date?: string;
			/**
			 * Get the transfers to this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The cursor returned in the previous response (used for getting the next page). */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Erc20TransactionCollection;
	}
	/**
	 * @description Get the amount which the spender is allowed to withdraw on behalf of the owner.
	 * @tags token
	 * @name GetTokenAllowance
	 * @summary getTokenAllowance
	 * @request GET:/erc20/{address}/allowance
	 * @secure
	 */
	export namespace GetTokenAllowance {
		export type RequestParams = {
			/** The address of the token contract */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** The address of the token owner */
			owner_address: string;
			/** The address of the token spender */
			spender_address: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Erc20Allowance;
	}
}

export namespace Nft {
	/**
	 * @description Get the nft trades for a given contract and marketplace.
	 * @tags token
	 * @name GetNftTrades
	 * @summary getNFTTrades
	 * @request GET:/nft/{address}/trades
	 * @secure
	 */
	export namespace GetNftTrades {
		export type RequestParams = {
			/**
			 * Address of the contract
			 * @example 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
			 */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The minimum block number from where to get the transfers
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/** To get the reserves at this block number */
			to_block?: string;
			/**
			 * The date from where to get the transfers (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 */
			from_date?: string;
			/**
			 * Get the reserves to this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/**
			 * marketplace from where to get the trades (only opensea is supported at the moment)
			 * @example opensea
			 */
			marketplace?: 'opensea';
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = TradeCollection;
	}
	/**
	 * @description Get the lowest executed price for an NFT token contract for the last x days (only trades paid in ETH).
	 * @tags token
	 * @name GetNftLowestPrice
	 * @summary getNFTLowestPrice
	 * @request GET:/nft/{address}/lowestprice
	 * @secure
	 */
	export namespace GetNftLowestPrice {
		export type RequestParams = {
			/**
			 * Address of the contract
			 * @example 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
			 */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The number of days to look back to find the lowest price
			 * If not provided 7 days will be the default
			 *
			 * @min 0
			 */
			days?: number;
			/**
			 * marketplace from where to get the trades (only opensea is supported at the moment)
			 * @example opensea
			 */
			marketplace?: 'opensea';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Trade;
	}
	/**
	 * @description Get NFTs that match a given metadata search query.
	 * @tags token
	 * @name SearchNfTs
	 * @summary searchNFTs
	 * @request GET:/nft/search
	 * @secure
	 */
	export namespace SearchNfTs {
		export type RequestParams = {};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/** The search string */
			q: string;
			/**
			 * What fields the search should match on. To look into the entire metadata set the value to 'global'. To have a better response time you can look into a specific field like name
			 * @example name
			 */
			filter?:
				| 'name'
				| 'description'
				| 'attributes'
				| 'global'
				| 'name,description'
				| 'name,attributes'
				| 'description,attributes'
				| 'name,description,attributes';
			/**
			 * The minimum block number from where to start the search
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/**
			 * The maximum block number from where to end the search
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 * @min 0
			 */
			to_block?: number;
			/**
			 * The date from where to start the search (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 */
			from_date?: string;
			/**
			 * Get search results up until this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/** The addresses to get metadata for */
			addresses?: string[];
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftMetadataCollection;
	}
	/**
	 * @description Gets the transfers of the tokens from a block number to a block number.
	 * @tags token
	 * @name GetNftTransfersFromToBlock
	 * @summary getNFTTransfersFromToBlock
	 * @request GET:/nft/transfers
	 * @secure
	 */
	export namespace GetNftTransfersFromToBlock {
		export type RequestParams = {};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The minimum block number from where to get the transfers
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/**
			 * The maximum block number from where to get the transfers.
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 * @min 0
			 */
			to_block?: number;
			/**
			 * The date from where to get the transfers (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 */
			from_date?: string;
			/**
			 * Get transfers up until this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/**
			 * The cursor returned in the previous response (for getting the next page)
			 *
			 */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftTransferCollection;
	}
	/**
	 * @description Get all NFTs, including metadata (where available), for all NFTs for the given contract address. * Results are limited to 100 per page by default * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection.
	 * @tags token
	 * @name GetAllTokenIds
	 * @summary getAllTokenIds
	 * @request GET:/nft/{address}
	 * @secure
	 */
	export namespace GetAllTokenIds {
		export type RequestParams = {
			/** Address of the contract */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/**
			 * The number of subranges to split the results into
			 * @min 1
			 */
			totalRanges?: number;
			/**
			 * The desired subrange to query
			 * @min 1
			 */
			range?: number;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
			/** Should normalized metadata be returned? */
			normalizeMetadata?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftCollection;
	}
	/**
	 * @description Returns an array of NFTs specified in the request
	 * @tags token
	 * @name GetMultipleNfTs
	 * @summary getMultipleNFTs
	 * @request POST:/nft/getMultipleNFTs
	 * @secure
	 */
	export namespace GetMultipleNfTs {
		export type RequestParams = {};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
		};
		export type RequestBody = GetMultipleNftsDto;
		export type RequestHeaders = {};
		export type ResponseBody = NftOwner[];
	}
	/**
	 * @description Get the transfers of the tokens matching the given parameters.
	 * @tags token
	 * @name GetContractNftTransfers
	 * @summary getContractNFTTransfers
	 * @request GET:/nft/{address}/transfers
	 * @secure
	 */
	export namespace GetContractNftTransfers {
		export type RequestParams = {
			/** Address of the contract */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The minimum block number from where to get the transfers
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 * @min 0
			 */
			from_block?: number;
			/**
			 * The maximum block number from where to get the transfers.
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 * @min 0
			 */
			to_block?: number;
			/**
			 * The date from where to get the transfers (any format that is accepted by momentjs)
			 * * Provide the param 'from_block' or 'from_date'
			 * * If 'from_date' and 'from_block' are provided, 'from_block' will be used.
			 *
			 */
			from_date?: string;
			/**
			 * Get transfers up until this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftTransferCollection;
	}
	/**
	 * @description Get all owners of NFTs within a given contract. * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection.
	 * @tags token
	 * @name GetNftOwners
	 * @summary getNFTOwners
	 * @request GET:/nft/{address}/owners
	 * @secure
	 */
	export namespace GetNftOwners {
		export type RequestParams = {
			/** Address of the contract */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
			/** Should normalized metadata be returned? */
			normalizeMetadata?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftOwnerCollection;
	}
	/**
	 * @description Get the contract level metadata (name, symbol, base token uri) for the given contract * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
	 * @tags token
	 * @name GetNftMetadata
	 * @summary getNFTMetadata
	 * @request GET:/nft/{address}/metadata
	 * @secure
	 */
	export namespace GetNftMetadata {
		export type RequestParams = {
			/** Address of the contract */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftContractMetadata;
	}
	/**
	 * @description ReSync the metadata for an NFT * The metadata flag will request a the NFT's metadata from the already existing token_uri * The uri(default) flag will fetch the latest token_uri from the given NFT address. In sync mode the metadata will also be fetched * The sync mode will make the endpoint synchronous so it will wait for the task to be completed before responding * The async mode(default) will make the endpoint asynchronous so we will wait for the task to be completed before responding
	 * @tags token
	 * @name ReSyncMetadata
	 * @summary reSyncMetadata
	 * @request GET:/nft/{address}/{token_id}/metadata/resync
	 * @secure
	 */
	export namespace ReSyncMetadata {
		export type RequestParams = {
			/** Address of the contract */
			address: string;
			/** The id of the token */
			tokenId: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The type of resync to operate
			 * @example uri
			 */
			flag?: 'uri' | 'metadata';
			/**
			 * To define the behaviour of the endpoint
			 * @example sync
			 */
			mode?: 'async' | 'sync';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = MetadataResync;
	}
	/**
	 * @description Initiates a sync of a previously non synced Contract.
	 * @tags contract
	 * @name SyncNftContract
	 * @summary Sync a Contract for NFT Index
	 * @request PUT:/nft/{address}/sync
	 * @secure
	 */
	export namespace SyncNftContract {
		export type RequestParams = {
			/** Address of the contract */
			address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = {};
	}
	/**
	 * @description Get NFT data, including metadata (where available), for the given NFT token id of the given contract address. * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
	 * @tags token
	 * @name GetTokenIdMetadata
	 * @summary getTokenIdMetadata
	 * @request GET:/nft/{address}/{token_id}
	 * @secure
	 */
	export namespace GetTokenIdMetadata {
		export type RequestParams = {
			/** Address of the contract */
			address: string;
			/** The id of the token */
			tokenId: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/** Should normalized metadata be returned? */
			normalizeMetadata?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Nft;
	}
	/**
	 * @description Get all owners of a specific NFT given the contract address and token ID. * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
	 * @tags token
	 * @name GetTokenIdOwners
	 * @summary getTokenIdOwners
	 * @request GET:/nft/{address}/{token_id}/owners
	 * @secure
	 */
	export namespace GetTokenIdOwners {
		export type RequestParams = {
			/** Address of the contract */
			address: string;
			/** The id of the token */
			tokenId: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
			/** Should normalized metadata be returned? */
			normalizeMetadata?: boolean;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftOwnerCollection;
	}
	/**
	 * @description Get the transfers of an NFT given a conttract address and token ID.
	 * @tags token
	 * @name GetWalletTokenIdTransfers
	 * @summary getWalletTokenIdTransfers
	 * @request GET:/nft/{address}/{token_id}/transfers
	 * @secure
	 */
	export namespace GetWalletTokenIdTransfers {
		export type RequestParams = {
			/** Address of the contract */
			address: string;
			/** The id of the token */
			tokenId: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/**
			 * The format of the token id
			 * @example decimal
			 */
			format?: 'decimal' | 'hex';
			/**
			 * The desired page size of the result.
			 * @min 0
			 */
			limit?: number;
			/** If the result should skip returning the total count (Improves performance). */
			disable_total?: boolean;
			/** The field(s) to order on and if it should be ordered in ascending or descending order. Specified by: fieldName1.order,fieldName2.order. Example 1: "block_number", "block_number.ASC", "block_number.DESC", Example 2: "block_number and contract_type", "block_number.ASC,contract_type.DESC" */
			order?: string;
			/** The cursor returned in the previous response (used to getting the next page). */
			cursor?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = NftTransferCollection;
	}
}

export namespace Resolve {
	/**
	 * @description Resolve an Unstoppable domain and get the address.
	 * @tags resolve
	 * @name ResolveDomain
	 * @summary resolveDomain
	 * @request GET:/resolve/{domain}
	 * @secure
	 */
	export namespace ResolveDomain {
		export type RequestParams = {
			/**
			 * Domain to be resolved
			 * @example brad.crypto
			 */
			domain: string;
		};
		export type RequestQuery = {
			/**
			 * The currency to query
			 * @example eth
			 */
			currency?: 'eth' | '0x1';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Resolve;
	}
	/**
	 * @description Resolve an ETH address and find the ENS name.
	 * @tags resolve
	 * @name ResolveAddress
	 * @summary resolveAddress
	 * @request GET:/resolve/{address}/reverse
	 * @secure
	 */
	export namespace ResolveAddress {
		export type RequestParams = {
			/**
			 * The address to be resolved
			 * @example 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
			 */
			address: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Ens;
	}
}

export namespace PairAddress {
	/**
	 * @description Get the liquidity reserves for a given pair address. Only Uniswap V2 based exchanges supported at the moment.
	 * @tags defi
	 * @name GetPairReserves
	 * @summary getPairReserves
	 * @request GET:/{pair_address}/reserves
	 * @secure
	 */
	export namespace GetPairReserves {
		export type RequestParams = {
			/**
			 * Liquidity pair address
			 * @example 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
			 */
			pairAddress: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** To get the reserves at this block number */
			to_block?: string;
			/**
			 * Get the reserves to this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ReservesPair;
	}
}

export namespace Token0Address {
	/**
	 * @description Fetch the pair data of the provided token0+token1 combination. The token0 and token1 options are interchangable (ie. there is no different outcome in "token0=WETH and token1=USDT" or "token0=USDT and token1=WETH")
	 * @tags defi
	 * @name GetPairAddress
	 * @summary getPairAddress
	 * @request GET:/{token0_address}/{token1_address}/pairAddress
	 * @secure
	 */
	export namespace GetPairAddress {
		export type RequestParams = {
			/**
			 * Token0 address
			 * @example 0x2b591e99afe9f32eaa6214f7b7629768c40eeb39
			 */
			token0Address: string;
			/**
			 * Token1 address
			 * @example 0xdac17f958d2ee523a2206206994597c13d831ec7
			 */
			token1Address: string;
		};
		export type RequestQuery = {
			/** The chain to query */
			chain?: ChainList;
			/** To get the reserves at this block number */
			to_block?: string;
			/**
			 * Get the reserves to this date (any format that is accepted by momentjs)
			 * * Provide the param 'to_block' or 'to_date'
			 * * If 'to_date' and 'to_block' are provided, 'to_block' will be used.
			 *
			 */
			to_date?: string;
			/**
			 * The factory name or address of the token exchange
			 * @example uniswapv2
			 */
			exchange:
				| 'uniswapv2'
				| 'uniswapv3'
				| 'sushiswapv2'
				| 'pancakeswapv2'
				| 'pancakeswapv1'
				| 'quickswap';
		};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = ReservesCollection;
	}
}

export namespace Ipfs {
	/**
	 * @description Upload multiple files to IPFS and place them in a folder directory.
	 * @tags storage
	 * @name UploadFolder
	 * @summary uploadFolder
	 * @request POST:/ipfs/uploadFolder
	 * @secure
	 */
	export namespace UploadFolder {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = UploadFolderPayload;
		export type RequestHeaders = {};
		export type ResponseBody = IpfsFile[];
	}
}

export namespace Web3 {
	/**
	 * No description
	 * @tags info
	 * @name Web3ApiVersion
	 * @summary web3ApiVersion
	 * @request GET:/web3/version
	 * @secure
	 */
	export namespace Web3ApiVersion {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = Web3Version;
	}
}

export namespace Info {
	/**
	 * No description
	 * @tags info
	 * @name EndpointWeights
	 * @summary endpointWeights
	 * @request GET:/info/endpointWeights
	 * @secure
	 */
	export namespace EndpointWeights {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = EndpointWeights[];
	}
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean;
	/** request path */
	path: string;
	/** content type of request body */
	type?: ContentType;
	/** query params */
	query?: QueryParamsType;
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat;
	/** request body */
	body?: unknown;
	/** base url */
	baseUrl?: string;
	/** request cancellation token */
	cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string;
	baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
	securityWorker?: (
		securityData: SecurityDataType | null
	) => Promise<RequestParams | void> | RequestParams | void;
	customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
	data: D;
	error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
	Json = 'application/json',
	FormData = 'multipart/form-data',
	UrlEncoded = 'application/x-www-form-urlencoded'
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = 'https://deep-index.moralis.io/api/v2';
	private securityData: SecurityDataType | null = null;
	private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
	private abortControllers = new Map<CancelToken, AbortController>();
	private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

	private baseApiParams: RequestParams = {
		credentials: 'same-origin',
		headers: {},
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	};

	constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
		Object.assign(this, apiConfig);
	}

	public setSecurityData = (data: SecurityDataType | null) => {
		this.securityData = data;
	};

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key);
		return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
	}

	protected addQueryParam(query: QueryParamsType, key: string) {
		return this.encodeQueryParam(key, query[key]);
	}

	protected addArrayQueryParam(query: QueryParamsType, key: string) {
		const value = query[key];
		return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
	}

	protected toQueryString(rawQuery?: QueryParamsType): string {
		const query = rawQuery || {};
		const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
		return keys
			.map((key) =>
				Array.isArray(query[key])
					? this.addArrayQueryParam(query, key)
					: this.addQueryParam(query, key)
			)
			.join('&');
	}

	protected addQueryParams(rawQuery?: QueryParamsType): string {
		const queryString = this.toQueryString(rawQuery);
		return queryString ? `?${queryString}` : '';
	}

	private contentFormatters: Record<ContentType, (input: any) => any> = {
		[ContentType.Json]: (input: any) =>
			input !== null && (typeof input === 'object' || typeof input === 'string')
				? JSON.stringify(input)
				: input,
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce((formData, key) => {
				const property = input[key];
				formData.append(
					key,
					property instanceof Blob
						? property
						: typeof property === 'object' && property !== null
						? JSON.stringify(property)
						: `${property}`
				);
				return formData;
			}, new FormData()),
		[ContentType.UrlEncoded]: (input: any) => this.toQueryString(input)
	};

	protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {})
			}
		};
	}

	protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController = this.abortControllers.get(cancelToken);
			if (abortController) {
				return abortController.signal;
			}
			return void 0;
		}

		const abortController = new AbortController();
		this.abortControllers.set(cancelToken, abortController);
		return abortController.signal;
	};

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController = this.abortControllers.get(cancelToken);

		if (abortController) {
			abortController.abort();
			this.abortControllers.delete(cancelToken);
		}
	};

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<T> => {
		const secureParams =
			((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(this.securityData))) ||
			{};
		const requestParams = this.mergeRequestParams(params, secureParams);
		const queryString = query && this.toQueryString(query);
		const payloadFormatter = this.contentFormatters[type || ContentType.Json];
		const responseFormat = format || requestParams.format;

		return this.customFetch(
			`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
			{
				...requestParams,
				headers: {
					...(requestParams.headers || {}),
					...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
				},
				signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
				body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body)
			}
		).then(async (response) => {
			const r = response as HttpResponse<T, E>;
			r.data = null as unknown as T;
			r.error = null as unknown as E;

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then((data) => {
							if (r.ok) {
								r.data = data;
							} else {
								r.error = data;
							}
							return r;
						})
						.catch((e) => {
							r.error = e;
							return r;
						});

			if (cancelToken) {
				this.abortControllers.delete(cancelToken);
			}

			if (!response.ok) throw data;
			return data.data;
		});
	};
}

/**
 * @title EVM API
 * @version 2
 * @baseUrl https://deep-index.moralis.io/api/v2
 */
export class Api<SecurityDataType extends unknown> {
	http: HttpClient<SecurityDataType>;

	constructor(http: HttpClient<SecurityDataType>) {
		this.http = http;
	}

	block = {
		/**
		 * @description Get the contents of a block by block hash.
		 *
		 * @tags native
		 * @name GetBlock
		 * @summary getBlock
		 * @request GET:/block/{block_number_or_hash}
		 * @secure
		 */
		getBlock: ({ blockNumberOrHash, ...query }: GetBlockParams, params: RequestParams = {}) =>
			this.http.request<Block, any>({
				path: `/block/${blockNumberOrHash}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get NFT transfers by block number or block hash.
		 *
		 * @tags native
		 * @name GetNftTransfersByBlock
		 * @summary getNFTTransfersByBlock
		 * @request GET:/block/{block_number_or_hash}/nft/transfers
		 * @secure
		 */
		getNftTransfersByBlock: (
			{ blockNumberOrHash, ...query }: GetNftTransfersByBlockParams,
			params: RequestParams = {}
		) =>
			this.http.request<NftTransferCollection, any>({
				path: `/block/${blockNumberOrHash}/nft/transfers`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	dateToBlock = {
		/**
		 * @description Get the closest block of the provided date.
		 *
		 * @tags native
		 * @name GetDateToBlock
		 * @summary getDateToBlock
		 * @request GET:/dateToBlock
		 * @secure
		 */
		getDateToBlock: (query: GetDateToBlockParams, params: RequestParams = {}) =>
			this.http.request<BlockDate, any>({
				path: `/dateToBlock`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	address = {
		/**
		 * @description Get the logs for an address.
		 *
		 * @tags native
		 * @name GetLogsByAddress
		 * @summary getLogsByAddress
		 * @request GET:/{address}/logs
		 * @secure
		 */
		getLogsByAddress: ({ address, ...query }: GetLogsByAddressParams, params: RequestParams = {}) =>
			this.http.request<LogCollection, any>({
				path: `/${address}/logs`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get events for a specific contract ordered by block number in descending order.
		 *
		 * @tags native
		 * @name GetContractEvents
		 * @summary getContractEvents
		 * @request POST:/{address}/events
		 * @secure
		 */
		getContractEvents: (
			{ address, ...query }: GetContractEventsParams,
			data?: GetContractEventsPayload,
			params: RequestParams = {}
		) =>
			this.http.request<
				{
					/**
					 * The total number of matches for this query
					 * @example 2000
					 */
					total?: number;
					/**
					 * The page of the current result
					 * @example 2
					 */
					page?: number;
					/**
					 * The number of results per page
					 * @example 100
					 */
					page_size?: number;
					result?: LogEvent[];
				},
				any
			>({
				path: `/${address}/events`,
				method: 'POST',
				query: query,
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * @description Run a given function of a contract abi and retrieve readonly data.
		 *
		 * @tags native
		 * @name RunContractFunction
		 * @summary runContractFunction
		 * @request POST:/{address}/function
		 * @secure
		 */
		runContractFunction: (
			{ address, ...query }: RunContractFunctionParams,
			data: RunContractDto,
			params: RequestParams = {}
		) =>
			this.http.request<string, any>({
				path: `/${address}/function`,
				method: 'POST',
				query: query,
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * @description Get native transactions ordered by block number in descending order.
		 *
		 * @tags account
		 * @name GetTransactions
		 * @summary getTransactions
		 * @request GET:/{address}
		 * @secure
		 */
		getTransactions: ({ address, ...query }: GetTransactionsParams, params: RequestParams = {}) =>
			this.http.request<TransactionCollection, any>({
				path: `/${address}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get native transactions ordered by block number in descending order.
		 *
		 * @tags account
		 * @name GetTransactionsVerbose
		 * @summary getTransactionsVerbose
		 * @request GET:/{address}/verbose
		 * @secure
		 */
		getTransactionsVerbose: (
			{ address, ...query }: GetTransactionsVerboseParams,
			params: RequestParams = {}
		) =>
			this.http.request<TransactionVerboseCollection, any>({
				path: `/${address}/verbose`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get native balance for a specific address.
		 *
		 * @tags account
		 * @name GetNativeBalance
		 * @summary getNativeBalance
		 * @request GET:/{address}/balance
		 * @secure
		 */
		getNativeBalance: ({ address, ...query }: GetNativeBalanceParams, params: RequestParams = {}) =>
			this.http.request<NativeBalance, any>({
				path: `/${address}/balance`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get token balances for a specific address.
		 *
		 * @tags account
		 * @name GetTokenBalances
		 * @summary getTokenBalances
		 * @request GET:/{address}/erc20
		 * @secure
		 */
		getTokenBalances: ({ address, ...query }: GetTokenBalancesParams, params: RequestParams = {}) =>
			this.http.request<Erc20TokenBalance[], any>({
				path: `/${address}/erc20`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get ERC20 token transactions ordered by block number in descending order.
		 *
		 * @tags account
		 * @name GetTokenTransfers
		 * @summary getTokenTransfers
		 * @request GET:/{address}/erc20/transfers
		 * @secure
		 */
		getTokenTransfers: (
			{ address, ...query }: GetTokenTransfersParams,
			params: RequestParams = {}
		) =>
			this.http.request<Erc20TransactionCollection, any>({
				path: `/${address}/erc20/transfers`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get NFTs owned by a given address. * The response will include status [SYNCED/SYNCING] based on the contracts being indexed. * Use the token_address param to get results for a specific contract only * Note results will include all indexed NFTs * Any request which includes the token_address param will start the indexing process for that NFT collection the very first time it is requested.
		 *
		 * @tags account
		 * @name GetNfTs
		 * @summary getNFTs
		 * @request GET:/{address}/nft
		 * @secure
		 */
		getNfTs: ({ address, ...query }: GetNfTsParams, params: RequestParams = {}) =>
			this.http.request<NftOwnerCollection, any>({
				path: `/${address}/nft`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the transfers of the tokens matching the given parameters.
		 *
		 * @tags account
		 * @name GetNftTransfers
		 * @summary getNFTTransfers
		 * @request GET:/{address}/nft/transfers
		 * @secure
		 */
		getNftTransfers: ({ address, ...query }: GetNftTransfersParams, params: RequestParams = {}) =>
			this.http.request<NftTransferCollection, any>({
				path: `/${address}/nft/transfers`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the nft collections owned by an user
		 *
		 * @tags account
		 * @name GetWalletNftCollections
		 * @summary getWalletNFTCollections
		 * @request GET:/{address}/nft/collections
		 * @secure
		 */
		getWalletNftCollections: (
			{ address, ...query }: GetWalletNftCollectionsParams,
			params: RequestParams = {}
		) =>
			this.http.request<NftWalletCollections, any>({
				path: `/${address}/nft/collections`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get NFTs owned by the given address for a specific NFT contract address. * Use the token_address param to get results for a specific contract only * Note results will include all indexed NFTs * Any request which includes the token_address param will start the indexing process for that NFT collection the very first time it is requested.
		 *
		 * @tags account
		 * @name GetNfTsForContract
		 * @summary getNFTsForContract
		 * @request GET:/{address}/nft/{token_address}
		 * @secure
		 */
		getNfTsForContract: (
			{ address, tokenAddress, ...query }: GetNfTsForContractParams,
			params: RequestParams = {}
		) =>
			this.http.request<NftOwnerCollection, any>({
				path: `/${address}/nft/${tokenAddress}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	transaction = {
		/**
		 * @description Get the contents of a internal transaction by transaction hash.
		 *
		 * @tags native
		 * @name GetInternalTransactions
		 * @summary getInternalTransactions
		 * @request GET:/transaction/{transaction_hash}/internal-transactions
		 * @secure
		 */
		getInternalTransactions: (
			{ transactionHash, ...query }: GetInternalTransactionsParams,
			params: RequestParams = {}
		) =>
			this.http.request<InternalTransaction[], any>({
				path: `/transaction/${transactionHash}/internal-transactions`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the contents of a transaction by transaction hash.
		 *
		 * @tags native
		 * @name GetTransaction
		 * @summary getTransaction
		 * @request GET:/transaction/{transaction_hash}
		 * @secure
		 */
		getTransaction: (
			{ transactionHash, ...query }: GetTransactionParams,
			params: RequestParams = {}
		) =>
			this.http.request<BlockTransaction, any>({
				path: `/transaction/${transactionHash}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the contents of a transaction by transaction hash along with the decoded data
		 *
		 * @tags native
		 * @name GetTransactionVerbose
		 * @summary getTransactionVerbose
		 * @request GET:/transaction/{transaction_hash}/verbose
		 * @secure
		 */
		getTransactionVerbose: (
			{ transactionHash, ...query }: GetTransactionVerboseParams,
			params: RequestParams = {}
		) =>
			this.http.request<BlockTransactionDecoded, any>({
				path: `/transaction/${transactionHash}/verbose`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	wallets = {
		/**
		 * @description Get the native balances for a set of specific addresses
		 *
		 * @tags account
		 * @name GetNativeBalancesForAddresses
		 * @summary Get balance for a set of wallet
		 * @request GET:/wallets/balances
		 * @secure
		 */
		getNativeBalancesForAddresses: (
			query: GetNativeBalancesForAddressesParams,
			params: RequestParams = {}
		) =>
			this.http.request<NativeBalances, any>({
				path: `/wallets/balances`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	erc20 = {
		/**
		 * @description Returns metadata (name, symbol, decimals, logo) for a given token contract address.
		 *
		 * @tags token
		 * @name GetTokenMetadata
		 * @summary getTokenMetadata
		 * @request GET:/erc20/metadata
		 * @secure
		 */
		getTokenMetadata: (query: GetTokenMetadataParams, params: RequestParams = {}) =>
			this.http.request<Erc20Metadata[], any>({
				path: `/erc20/metadata`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get metadata (name, symbol, decimals, logo) for a list of token symbols.
		 *
		 * @tags token
		 * @name GetTokenMetadataBySymbol
		 * @summary getTokenMetadataBySymbol
		 * @request GET:/erc20/metadata/symbols
		 * @secure
		 */
		getTokenMetadataBySymbol: (query: GetTokenMetadataBySymbolParams, params: RequestParams = {}) =>
			this.http.request<Erc20Metadata[], any>({
				path: `/erc20/metadata/symbols`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the token price denominated in the blockchains native token and USD.
		 *
		 * @tags token
		 * @name GetTokenPrice
		 * @summary getTokenPrice
		 * @request GET:/erc20/{address}/price
		 * @secure
		 */
		getTokenPrice: ({ address, ...query }: GetTokenPriceParams, params: RequestParams = {}) =>
			this.http.request<Erc20Price, any>({
				path: `/erc20/${address}/price`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get ERC20 token transactions ordered by block number in descending order.
		 *
		 * @tags token
		 * @name GetTokenAddressTransfers
		 * @summary getTokenAddressTransfers
		 * @request GET:/erc20/{address}/transfers
		 * @secure
		 */
		getTokenAddressTransfers: (
			{ address, ...query }: GetTokenAddressTransfersParams,
			params: RequestParams = {}
		) =>
			this.http.request<Erc20TransactionCollection, any>({
				path: `/erc20/${address}/transfers`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the amount which the spender is allowed to withdraw on behalf of the owner.
		 *
		 * @tags token
		 * @name GetTokenAllowance
		 * @summary getTokenAllowance
		 * @request GET:/erc20/{address}/allowance
		 * @secure
		 */
		getTokenAllowance: (
			{ address, ...query }: GetTokenAllowanceParams,
			params: RequestParams = {}
		) =>
			this.http.request<Erc20Allowance, any>({
				path: `/erc20/${address}/allowance`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	nft = {
		/**
		 * @description Get the nft trades for a given contract and marketplace.
		 *
		 * @tags token
		 * @name GetNftTrades
		 * @summary getNFTTrades
		 * @request GET:/nft/{address}/trades
		 * @secure
		 */
		getNftTrades: ({ address, ...query }: GetNftTradesParams, params: RequestParams = {}) =>
			this.http.request<TradeCollection, any>({
				path: `/nft/${address}/trades`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the lowest executed price for an NFT token contract for the last x days (only trades paid in ETH).
		 *
		 * @tags token
		 * @name GetNftLowestPrice
		 * @summary getNFTLowestPrice
		 * @request GET:/nft/{address}/lowestprice
		 * @secure
		 */
		getNftLowestPrice: (
			{ address, ...query }: GetNftLowestPriceParams,
			params: RequestParams = {}
		) =>
			this.http.request<Trade, any>({
				path: `/nft/${address}/lowestprice`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get NFTs that match a given metadata search query.
		 *
		 * @tags token
		 * @name SearchNfTs
		 * @summary searchNFTs
		 * @request GET:/nft/search
		 * @secure
		 */
		searchNfTs: (query: SearchNfTsParams, params: RequestParams = {}) =>
			this.http.request<NftMetadataCollection, any>({
				path: `/nft/search`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Gets the transfers of the tokens from a block number to a block number.
		 *
		 * @tags token
		 * @name GetNftTransfersFromToBlock
		 * @summary getNFTTransfersFromToBlock
		 * @request GET:/nft/transfers
		 * @secure
		 */
		getNftTransfersFromToBlock: (
			query: GetNftTransfersFromToBlockParams,
			params: RequestParams = {}
		) =>
			this.http.request<NftTransferCollection, any>({
				path: `/nft/transfers`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get all NFTs, including metadata (where available), for all NFTs for the given contract address. * Results are limited to 100 per page by default * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection.
		 *
		 * @tags token
		 * @name GetAllTokenIds
		 * @summary getAllTokenIds
		 * @request GET:/nft/{address}
		 * @secure
		 */
		getAllTokenIds: ({ address, ...query }: GetAllTokenIdsParams, params: RequestParams = {}) =>
			this.http.request<NftCollection, any>({
				path: `/nft/${address}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Returns an array of NFTs specified in the request
		 *
		 * @tags token
		 * @name GetMultipleNfTs
		 * @summary getMultipleNFTs
		 * @request POST:/nft/getMultipleNFTs
		 * @secure
		 */
		getMultipleNfTs: (
			query: GetMultipleNfTsParams,
			data: GetMultipleNftsDto,
			params: RequestParams = {}
		) =>
			this.http.request<NftOwner[], any>({
				path: `/nft/getMultipleNFTs`,
				method: 'POST',
				query: query,
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the transfers of the tokens matching the given parameters.
		 *
		 * @tags token
		 * @name GetContractNftTransfers
		 * @summary getContractNFTTransfers
		 * @request GET:/nft/{address}/transfers
		 * @secure
		 */
		getContractNftTransfers: (
			{ address, ...query }: GetContractNftTransfersParams,
			params: RequestParams = {}
		) =>
			this.http.request<NftTransferCollection, any>({
				path: `/nft/${address}/transfers`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get all owners of NFTs within a given contract. * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection.
		 *
		 * @tags token
		 * @name GetNftOwners
		 * @summary getNFTOwners
		 * @request GET:/nft/{address}/owners
		 * @secure
		 */
		getNftOwners: ({ address, ...query }: GetNftOwnersParams, params: RequestParams = {}) =>
			this.http.request<NftOwnerCollection, any>({
				path: `/nft/${address}/owners`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the contract level metadata (name, symbol, base token uri) for the given contract * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
		 *
		 * @tags token
		 * @name GetNftMetadata
		 * @summary getNFTMetadata
		 * @request GET:/nft/{address}/metadata
		 * @secure
		 */
		getNftMetadata: ({ address, ...query }: GetNftMetadataParams, params: RequestParams = {}) =>
			this.http.request<NftContractMetadata, any>({
				path: `/nft/${address}/metadata`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description ReSync the metadata for an NFT * The metadata flag will request a the NFT's metadata from the already existing token_uri * The uri(default) flag will fetch the latest token_uri from the given NFT address. In sync mode the metadata will also be fetched * The sync mode will make the endpoint synchronous so it will wait for the task to be completed before responding * The async mode(default) will make the endpoint asynchronous so we will wait for the task to be completed before responding
		 *
		 * @tags token
		 * @name ReSyncMetadata
		 * @summary reSyncMetadata
		 * @request GET:/nft/{address}/{token_id}/metadata/resync
		 * @secure
		 */
		reSyncMetadata: (
			{ address, tokenId, ...query }: ReSyncMetadataParams,
			params: RequestParams = {}
		) =>
			this.http.request<MetadataResync, MetadataResync>({
				path: `/nft/${address}/${tokenId}/metadata/resync`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Initiates a sync of a previously non synced Contract.
		 *
		 * @tags contract
		 * @name SyncNftContract
		 * @summary Sync a Contract for NFT Index
		 * @request PUT:/nft/{address}/sync
		 * @secure
		 */
		syncNftContract: ({ address, ...query }: SyncNftContractParams, params: RequestParams = {}) =>
			this.http.request<{}, any>({
				path: `/nft/${address}/sync`,
				method: 'PUT',
				query: query,
				secure: true,
				...params
			}),

		/**
		 * @description Get NFT data, including metadata (where available), for the given NFT token id of the given contract address. * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
		 *
		 * @tags token
		 * @name GetTokenIdMetadata
		 * @summary getTokenIdMetadata
		 * @request GET:/nft/{address}/{token_id}
		 * @secure
		 */
		getTokenIdMetadata: (
			{ address, tokenId, ...query }: GetTokenIdMetadataParams,
			params: RequestParams = {}
		) =>
			this.http.request<Nft, any>({
				path: `/nft/${address}/${tokenId}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get all owners of a specific NFT given the contract address and token ID. * Requests for contract addresses not yet indexed will automatically start the indexing process for that NFT collection
		 *
		 * @tags token
		 * @name GetTokenIdOwners
		 * @summary getTokenIdOwners
		 * @request GET:/nft/{address}/{token_id}/owners
		 * @secure
		 */
		getTokenIdOwners: (
			{ address, tokenId, ...query }: GetTokenIdOwnersParams,
			params: RequestParams = {}
		) =>
			this.http.request<NftOwnerCollection, any>({
				path: `/nft/${address}/${tokenId}/owners`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Get the transfers of an NFT given a conttract address and token ID.
		 *
		 * @tags token
		 * @name GetWalletTokenIdTransfers
		 * @summary getWalletTokenIdTransfers
		 * @request GET:/nft/{address}/{token_id}/transfers
		 * @secure
		 */
		getWalletTokenIdTransfers: (
			{ address, tokenId, ...query }: GetWalletTokenIdTransfersParams,
			params: RequestParams = {}
		) =>
			this.http.request<NftTransferCollection, any>({
				path: `/nft/${address}/${tokenId}/transfers`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	resolve = {
		/**
		 * @description Resolve an Unstoppable domain and get the address.
		 *
		 * @tags resolve
		 * @name ResolveDomain
		 * @summary resolveDomain
		 * @request GET:/resolve/{domain}
		 * @secure
		 */
		resolveDomain: ({ domain, ...query }: ResolveDomainParams, params: RequestParams = {}) =>
			this.http.request<Resolve, object>({
				path: `/resolve/${domain}`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			}),

		/**
		 * @description Resolve an ETH address and find the ENS name.
		 *
		 * @tags resolve
		 * @name ResolveAddress
		 * @summary resolveAddress
		 * @request GET:/resolve/{address}/reverse
		 * @secure
		 */
		resolveAddress: (address: string, params: RequestParams = {}) =>
			this.http.request<Ens, any>({
				path: `/resolve/${address}/reverse`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			})
	};
	pairAddress = {
		/**
		 * @description Get the liquidity reserves for a given pair address. Only Uniswap V2 based exchanges supported at the moment.
		 *
		 * @tags defi
		 * @name GetPairReserves
		 * @summary getPairReserves
		 * @request GET:/{pair_address}/reserves
		 * @secure
		 */
		getPairReserves: (
			{ pairAddress, ...query }: GetPairReservesParams,
			params: RequestParams = {}
		) =>
			this.http.request<ReservesPair, any>({
				path: `/${pairAddress}/reserves`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	token0Address = {
		/**
		 * @description Fetch the pair data of the provided token0+token1 combination. The token0 and token1 options are interchangable (ie. there is no different outcome in "token0=WETH and token1=USDT" or "token0=USDT and token1=WETH")
		 *
		 * @tags defi
		 * @name GetPairAddress
		 * @summary getPairAddress
		 * @request GET:/{token0_address}/{token1_address}/pairAddress
		 * @secure
		 */
		getPairAddress: (
			{ token0Address, token1Address, ...query }: GetPairAddressParams,
			params: RequestParams = {}
		) =>
			this.http.request<ReservesCollection, any>({
				path: `/{token0_address}/{token1_address}/pairAddress`,
				method: 'GET',
				query: query,
				secure: true,
				format: 'json',
				...params
			})
	};
	ipfs = {
		/**
		 * @description Upload multiple files to IPFS and place them in a folder directory.
		 *
		 * @tags storage
		 * @name UploadFolder
		 * @summary uploadFolder
		 * @request POST:/ipfs/uploadFolder
		 * @secure
		 */
		uploadFolder: (data?: UploadFolderPayload, params: RequestParams = {}) =>
			this.http.request<IpfsFile[], any>({
				path: `/ipfs/uploadFolder`,
				method: 'POST',
				body: data,
				secure: true,
				type: ContentType.Json,
				format: 'json',
				...params
			})
	};
	web3 = {
		/**
		 * No description
		 *
		 * @tags info
		 * @name Web3ApiVersion
		 * @summary web3ApiVersion
		 * @request GET:/web3/version
		 * @secure
		 */
		web3ApiVersion: (params: RequestParams = {}) =>
			this.http.request<Web3Version, any>({
				path: `/web3/version`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			})
	};
	info = {
		/**
		 * No description
		 *
		 * @tags info
		 * @name EndpointWeights
		 * @summary endpointWeights
		 * @request GET:/info/endpointWeights
		 * @secure
		 */
		endpointWeights: (params: RequestParams = {}) =>
			this.http.request<EndpointWeights[], any>({
				path: `/info/endpointWeights`,
				method: 'GET',
				secure: true,
				format: 'json',
				...params
			})
	};
}
