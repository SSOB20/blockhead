import { NetworkProviderConnectionType, NetworkProviderNodeType } from './types';

// https://datahub.figment.io/apps
export const figmentProviderConfigs: {
	label: string;
	subdomain: string;
	networkSlug: string;
	connectionType: NetworkProviderConnectionType;
	nodeType: NetworkProviderNodeType;
}[] = [
	{
		label: 'Arbitrum Mainnet WS (Archive)',
		subdomain: 'arbitrum-mainnet-ws-archive',
		networkSlug: 'arbitrum-one',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Arbitrum Mainnet WS',
		subdomain: 'arbitrum--mainnet-ws',
		networkSlug: 'arbitrum-one',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Arbitrum Mainnet RPC',
		subdomain: 'arbitrum--mainnet-rpc',
		networkSlug: 'arbitrum-one',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Arbitrum Mainnet RPC (Archive)',
		subdomain: 'arbitrum-mainnet-rpc-archive',
		networkSlug: 'arbitrum-one',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Mainnet RPC (Archive)',
		subdomain: 'avalanche--mainnet--rpc',
		networkSlug: 'avalanche',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Indexer',
		subdomain: 'avalanche--mainnet--indexer',
		networkSlug: 'avalanche',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Indexer
	},
	{
		label: 'Fuji RPC (Archive)',
		subdomain: 'avalanche--fuji--rpc',
		networkSlug: 'avalanche-fuji',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Archive
	},

	{
		label: 'Binance Smart Chain WS (Archive)',
		subdomain: 'bsc--mainnet--ws-archive',
		networkSlug: 'bsc',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Binance Smart Chain WS (Full)',
		subdomain: 'bsc--mainnet--ws',
		networkSlug: 'bsc',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Full
	},
	{
		label: 'Binance Smart Chain RPC (Full)',
		subdomain: 'bsc--mainnet--rpc',
		networkSlug: 'bsc',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Full
	},
	{
		label: 'Alfajores RPC (Archive)',
		subdomain: 'celo-alfajores--rpc',
		networkSlug: 'celo-alfajores',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Celo Mainnet (Archive)',
		subdomain: 'celo-mainnet--rpc',
		networkSlug: 'celo',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Ethereum Rinkeby WS',
		subdomain: 'ethereum-rinkeby--ws',
		networkSlug: 'ethereum-rinkeby',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Ethereum Rinkeby RPC',
		subdomain: 'ethereum-rinkeby--rpc',
		networkSlug: 'ethereum-rinkeby',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Erigon Ethereum Mainnet RPC (Archive)',
		subdomain: 'erigon-mainnet--rpc',
		networkSlug: 'ethereum-erigon',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Ethereum Mainnet WS',
		subdomain: 'ethereum-mainnet--ws',
		networkSlug: 'ethereum',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Ethereum Mainnet RPC',
		subdomain: 'ethereum-mainnet--rpc',
		networkSlug: 'ethereum',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Fantom Mainnet RPC (Full)',
		subdomain: 'ftm--mainnet--rpc',
		networkSlug: 'fantom',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Full
	},
	{
		label: 'Fantom Mainnet WS (Full)',
		subdomain: 'ftm--mainnet--ws',
		networkSlug: 'fantom',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Full
	},
	{
		label: 'Fantom Mainnet RPC (Archive)',
		subdomain: 'ftm--mainnet--rpc-archive',
		networkSlug: 'fantom',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Fantom Mainnet WS (Archive)',
		subdomain: 'ftm--mainnet--ws-archive',
		networkSlug: 'fantom',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Mainnet',
		subdomain: 'oasis--mainnet',
		networkSlug: 'oasis-paratime',
		connectionType: NetworkProviderConnectionType.RPC, // ?
		nodeType: NetworkProviderNodeType.Default // ?
	},
	{
		label: 'Testnet',
		subdomain: 'oasis--testnet',
		networkSlug: 'oasis-paratime',
		connectionType: NetworkProviderConnectionType.RPC, // ?
		nodeType: NetworkProviderNodeType.Default // ?
	},
	{
		label: 'Matic Mainnet RPC',
		subdomain: 'matic-mainnet--rpc',
		networkSlug: 'polygon',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Matic Mainnet JSONRPC',
		subdomain: 'matic-mainnet--jsonrpc',
		networkSlug: 'polygon',
		connectionType: NetworkProviderConnectionType.JSONRPC,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Matic Mainnet WebSocket',
		subdomain: 'matic-mainnet--ws',
		networkSlug: 'polygon',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Matic Mainnet JSONRPC (Archive)',
		subdomain: 'matic-mainnet--jsonrpc-archive',
		networkSlug: 'polygon',
		connectionType: NetworkProviderConnectionType.JSONRPC,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Matic Mainnet RPC (Archive)',
		subdomain: 'matic-mainnet--rpc-archive',
		networkSlug: 'polygon',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Matic Mainnet WebSocket (Archive)',
		subdomain: 'matic-mainnet--ws-archive',
		networkSlug: 'polygon',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Archive
	},
	{
		label: 'Matic Mumbai Testnet RPC',
		subdomain: 'matic-mumbai--rpc',
		networkSlug: 'polygon-mumbai',
		connectionType: NetworkProviderConnectionType.RPC,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Matic Mumbai Testnet JSONRPC',
		subdomain: 'matic-mumbai--jsonrpc',
		networkSlug: 'polygon-mumbai',
		connectionType: NetworkProviderConnectionType.JSONRPC,
		nodeType: NetworkProviderNodeType.Default
	},
	{
		label: 'Matic Mumbai Testnet WebSocket',
		subdomain: 'matic-mumbai--ws',
		networkSlug: 'polygon-mumbai',
		connectionType: NetworkProviderConnectionType.WebSocket,
		nodeType: NetworkProviderNodeType.Default
	}
	// {
	// 	label: '',
	// 	subdomain: '',
	// 	networkSlug: '',
	// 	connectionType: NetworkProviderConnectionType.,
	// 	nodeType: NetworkProviderNodeType.,
	// },
];
