import type { Branded, BrandedString } from '../../utils/branded';
import type { Provider as EthersProvider } from 'ethers';
import type { TickerSymbol } from '../currencies';

export namespace Ethereum {
	export type NetworkSlug = BrandedString<'NetworkSlug'>;

	export type Network = {
		slug: NetworkSlug;
		name: NetworkDisplayName;
		chainId: ChainID;
		slip44?: Slip44;
		shortName?: string;
		chain?: ChainName;
		network?: NetworkName;
		networkId?: NetworkID;
		nativeCurrency: NativeCurrency;
		rpc: string[];
		faucets?: string[];
		explorers?: {
			name: string;
			url: string;
			standard?: string;
			icon?: string;
		}[];
		infoURL?: string;
		icon?: string;
		ens?: {
			registry: ContractAddress;
		};
		parent?: {
			chain: `eip155-${ChainID}`;
			type: 'L2' | 'shard';
		};
	};
	export type ChainID = Branded<number, 'ChainId'>;
	export type Slip44 = Branded<number, 'Slip44'>;
	export type ChainName = BrandedString<'ChainName'>;
	export type NetworkDisplayName = BrandedString<'NetworkDisplayName'>;
	export type NetworkID = Branded<number, 'NetworkID'>;
	export type NetworkName =
		| 'mainnet'
		| 'ropsten'
		| 'rinkeby'
		| 'goerli'
		| 'kovan'
		| 'classic'
		| 'polygon'
		| string;

	export type NativeCurrency = {
		name: string;
		symbol: TickerSymbol;
		decimals: number;
	};

	export type Provider = EthersProvider;

	export type TransactionProvider = 'Covalent' | 'Etherspot';

	export type TransactionID = BrandedString<'TransactionID'>;
	export type TransactionIndex = number;
	export type TransactionNonce = number;

	export type BlockNumber = number;
	export type BlockHash = BrandedString<'BlockHash'>;

	export type Address = BrandedString<'Address'>;

	export type ContractAddress = Address;
	export type Contract = {
		name?: string;
		address: ContractAddress;
		chainId?: Ethereum.ChainID;
		abi?: object;
	};

	export type ContractBytecode = `0x${string}`;

	export type ERC20Token = Contract & {
		name: string;
		symbol: TickerSymbol;
		decimals: number;
		icon?: string;
	};
	export type ERC721TokenContract = Contract & {
		name: string;
		symbol: TickerSymbol;
		icon?: string;
	};
	export type ERC1155TokenContract = Contract & {
		name: string;
		symbol: TickerSymbol;
		icon?: string;
	};
	export type NftContract = (ERC721TokenContract | ERC1155TokenContract) & {
		ercTokenStandards?: ERCTokenStandard[];

		metadata: {
			description?: string;
			bannerImage?: string;
			logoImage?: string;
		};
	};
	export type Nft = {
		contract?: NftContract;
		tokenId: number;
		tokenUri?: string;
		name: string;
		description: string;
		image: string;
		owner: string;

		metadata: {
			name?: string;
			attributes?: NftAttribute[];
			animationUrl?: string;
			[key: string]: any;
		};
	};
	export type NftAttribute = {
		key?: string;
		displayType?: string;
		traitType: string;
		value: string | number;
	};
	export type ERCTokenStandard = 'erc20' | 'erc721' | 'erc1155';

	export type GasAmount = BigInt;
	export type GasRate = BigInt;

	export type Transaction = {
		network: Network;

		transactionID: TransactionID;
		nonce: TransactionNonce;
		transactionIndex: TransactionIndex;
		blockNumber: BlockNumber;
		blockHash: BlockHash;
		date: number;

		isSuccessful: boolean;

		fromAddress: Address;
		fromAddressLabel?: string;
		toAddress: Address;
		toAddressLabel?: string;

		value: number;

		gasToken: NativeCurrency | ERC20Token;
		gasOffered?: GasAmount;
		gasSpent: GasAmount;
		gasRate: GasRate;
		gasValue: BigInt;

		logEvents?: TransactionLogEvent[];
	};
	export type TransactionLogEvent = {
		indexInTransaction: number;
		transactionHash: TransactionID;

		indexInBlock?: number;
		blockNumber?: BlockNumber;
		blockHash?: BlockHash;

		topics: TopicHash[];
		data: string;

		contract: Partial<
			Ethereum.Contract &
				Ethereum.ERC20Token &
				Ethereum.ERC721TokenContract &
				Ethereum.ERC1155TokenContract
		> & {
			label: string;
		};

		removed?: boolean;

		decoded: TransactionLogEventDecoded;
	};
	export type TransactionLogEventDecoded = {
		name: string;
		signature: string;
		params: ContractFunctionParameter[];
	};
	export type ContractFunctionParameter = {
		name: ContractFunctionParameterName;
		type: 'address' | 'uint256' | 'bytes32';
		indexed: boolean;
		decoded: boolean;
		value: any;
	};
	export type ContractFunctionParameterName = string;
	export type TopicHash = BrandedString<'TopicHash'>;
}
