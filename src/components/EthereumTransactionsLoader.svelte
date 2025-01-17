<script lang="ts">
	import type { Ethereum } from '../data/networks/types';
	import type { TickerSymbol } from '../data/currencies';
	import { preferences } from '../state/preferences';

	export let network: Ethereum.Network;
	export let address: Ethereum.Address | undefined;
	export let provider: Ethereum.Provider;

	export let quoteCurrency: TickerSymbol;
	export let transactionProvider;

	export let includeLogs = true;

	$: quoteCurrency = $$props.quoteCurrency || $preferences.quoteCurrency;
	$: transactionProvider = $$props.transactionProvider || $preferences.transactionProvider;

	import { useQuery, useInfiniteQuery } from '@sveltestack/svelte-query';

	import { getTransactionsByAddress } from '../api/covalent';
	// import { getTransactions as getTransactionsEtherspot } from '../api/etherspot'
	import { chainCodeFromNetwork, MoralisWeb3Api } from '../api/moralis/web3Api';

	import Loader from './Loader.svelte';

	import { CovalentIcon, EtherspotIcon, MoralisIcon } from '../assets/icons';
</script>

{#if transactionProvider === 'Covalent'}
	<Loader
		layout="collapsible"
		loadingIcon={CovalentIcon}
		loadingIconName={transactionProvider}
		loadingMessage="Retrieving {network.name} transactions from {transactionProvider}..."
		errorMessage="Error retrieving {network.name} transactions from {transactionProvider}"
		fromUseInfiniteQuery={useInfiniteQuery({
			queryKey: [
				'Transactions',
				{
					transactionProvider,
					chainID: network.chainId,
					address,
					quoteCurrency
				}
			],
			queryFn: async ({ pageParam: pageNumber }) => {
				const result = await getTransactionsByAddress({
					chainID: network.chainId,
					address,
					includeLogs,
					quoteCurrency,
					pageNumber: pageNumber ?? 0,
					pageSize: 100
				});

				return result;
			},
			getPreviousPageParam: (firstPage, allPages) =>
				firstPage.pagination?.page_number > 0 ? firstPage.pagination.page_number - 1 : undefined,
			getNextPageParam: (lastPage, allPages) =>
				lastPage.pagination?.has_more ? lastPage.pagination.page_number + 1 : undefined
		})}
		then={(result) => result?.pages?.flatMap((page) => page.items) ?? []}
		let:result={transactions}
		let:status
		let:pagination
	>
		<slot name="header" slot="header" {status} {transactions} />
		<slot {transactions} {pagination} />
	</Loader>
{:else if transactionProvider === 'Etherspot'}
	<Loader
		loadingIcon={EtherspotIcon}
		loadingMessage="Retrieving {network.name} transactions from {transactionProvider}..."
		errorMessage="Error retrieving {network.name} transactions from {transactionProvider}"
		fromUseQuery={useQuery({
			queryKey: [
				'Transactions',
				{
					transactionProvider,
					chainID: network.chainId,
					address,
					quoteCurrency
				}
			],
			queryFn: async () => await getTransactionsEtherspot({ network, address })
		})}
		let:result={transactions}
		let:status
		let:pagination
	>
		<slot name="header" slot="header" {status} {transactions} />
		<slot {transactions} {pagination} />
	</Loader>
{:else if transactionProvider === 'Moralis'}
	<Loader
		loadingIcon={MoralisIcon}
		loadingIconName={transactionProvider}
		loadingMessage="Retrieving {network.name} transactions from {transactionProvider}..."
		errorMessage="Error retrieving {network.name} transactions from {transactionProvider}"
		fromUseInfiniteQuery={useInfiniteQuery({
			queryKey: [
				'Transactions',
				{
					transactionProvider,
					chainID: network.chainId,
					address,
					quoteCurrency
				}
			],
			queryFn: async ({ pageParam }) =>
				await MoralisWeb3Api.address.getTransactions({
					chain: chainCodeFromNetwork(network),
					from_block: 0,
					// to_block: ,
					offset: pageParam?.offset ?? 0,
					limit: pageParam?.limit ?? 100,
					address
				}),
			// queryFn: async ({ pageParam: offset = 0 }) => {
			// 	const {result: transactions, total, page_size, page} = await MoralisWeb3Api.address.getTransactions({
			// 		chain: chainCodeFromNetwork(network),
			// 		from_block: 0,
			// 		// to_block: ,
			// 		offset: offset ?? 0,
			// 		limit: 100,
			// 		address
			// 	})

			// 	// const logs = (await MoralisWeb3Api.address.getLogsByAddress({
			// 	// 	chain: chainCodeFromNetwork(network),
			// 	// 	from_block: 0,
			// 	// 	address: transactions[0].hash
			// 	// }))

			// 	// console.log(transactions[0], logs)

			// 	return (
			// 		includeLogs
			// 			? await Promise.all(transactions.map(transaction => (
			// 				MoralisWeb3Api.transaction.getTransaction({
			// 					chain: chainCodeFromNetwork(network),
			// 					transactionHash: transaction.hash
			// 				})
			// 			)))
			// 			: transactions
			// 	).reverse()
			// },
			getPreviousPageParam: (firstPage, allPages) => {
				const offset = (firstPage.page - 1) * firstPage.page_size;
				return offset > 0 ? { offset, limit: firstPage.page_size } : undefined;
			},
			getNextPageParam: (lastPage, allPages) => {
				const offset = (lastPage.page + 1) * lastPage.page_size;
				return offset < lastPage.total ? { offset, limit: lastPage.page_size } : undefined;
			}
		})}
		then={(result) => result?.pages?.flatMap((page) => page.result) ?? []}
		let:result={transactions}
		let:status
		let:pagination
	>
		<slot name="header" slot="header" {status} {transactions} />
		<slot {transactions} {pagination} />
	</Loader>
{/if}
