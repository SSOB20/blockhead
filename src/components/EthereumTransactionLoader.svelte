<script lang="ts">
	import type { Ethereum } from '../data/networks/types';
	import type { QuoteCurrency } from '../data/currencies';
	import { preferences } from '../state/preferences';

	export let network: Ethereum.Network;
	export let transactionID: Ethereum.TransactionID;
	export let transactionProvider: Ethereum.TransactionProvider;
	export let provider: Ethereum.Provider;
	export let quoteCurrency: QuoteCurrency;

	// View options

	export let contextualAddress: Ethereum.Address;
	export let detailLevel: 'summary' | 'detailed' | 'exhaustive' = 'detailed';
	export let tokenBalanceFormat: 'original' | 'converted' | 'both' = 'original';
	export let showFees = false;

	export let layout: 'standalone' | 'inline' = 'inline';
	export let innerLayout: 'columns' | 'row' = 'row';

	$: transactionProvider = $$props.transactionProvider || $preferences.transactionProvider;
	$: quoteCurrency = $$props.quoteCurrency || $preferences.quoteCurrency;

	import { useQuery } from '@sveltestack/svelte-query';

	import { getTransaction as getTransactionCovalent } from '../api/covalent';
	// import { getTransaction as getTransactionEtherspot } from '../api/etherspot'
	import { MoralisWeb3Api, chainCodeFromNetwork } from '../api/moralis/web3Api';

	import EthereumTransactionCovalent from './EthereumTransactionCovalent.svelte';
	// import EthereumTransactionEtherspot from './EthereumTransactionEtherspot.svelte'
	import EthereumTransactionMoralis from './EthereumTransactionMoralis.svelte';
	import Loader from './Loader.svelte';

	import { CovalentIcon, EtherspotIcon, MoralisIcon } from '../assets/icons';
</script>

{#if transactionID}
	<div class="stack">
		{#key transactionProvider}
			<div class="column">
				{#if transactionProvider === 'Covalent'}
					<Loader
						loadingIcon={CovalentIcon}
						loadingMessage="Fetching transaction data via {transactionProvider}..."
						fromUseQuery={useQuery({
							queryKey: [
								'Transaction',
								{
									chainID: network.chainId,
									transactionID
								}
							],
							queryFn: async () =>
								await getTransactionCovalent({
									chainID: network.chainId,
									transactionHash: transactionID,
									includeLogs: true
								}).then(({ items: [transaction] }) => transaction)
						})}
						let:result={transaction}
						let:status
					>
						<slot name="header" slot="header" {status} {transaction} />

						<EthereumTransactionCovalent
							{network}
							{transaction}
							{quoteCurrency}
							{contextualAddress}
							{detailLevel}
							{tokenBalanceFormat}
							{showFees}
							{layout}
							{innerLayout}
						/>
					</Loader>
					<!-- {:else if transactionProvider === 'Etherspot'}
					<Loader
						loadingIcon={EtherspotIcon}
						loadingMessage="Fetching transaction data via {transactionProvider}..."
						fromUseQuery={useQuery({
							queryKey: ['Transaction', {
								chainID: network.chainId,
								transactionID,
							}],
							queryFn: async () => (
								await getTransactionEtherspot({
									network,
									transactionID
								})
							)
						})}
						let:result={transaction}
						let:status
					>
						<slot name="header" slot="header" {status} {transaction} />

						<EthereumTransactionEtherspot
							{network}
							{transaction}
							{quoteCurrency}

							{contextualAddress}
							{detailLevel}
							{tokenBalanceFormat}
							{showFees}

							{layout}
							{innerLayout}
						/>
					</Loader> -->
				{:else if transactionProvider === 'Moralis'}
					<Loader
						loadingIcon={MoralisIcon}
						loadingMessage="Fetching transaction data via {transactionProvider}..."
						fromUseQuery={useQuery({
							queryKey: [
								'Transaction',
								{
									chainID: network.chainId,
									transactionID
								}
							],
							queryFn: async () =>
								await MoralisWeb3Api.transaction.getTransaction({
									chain: chainCodeFromNetwork(network),
									transactionHash: transactionID
								})
						})}
						let:result={transaction}
						let:status
					>
						<slot name="header" slot="header" {status} {transaction} />

						<EthereumTransactionMoralis
							{network}
							{transaction}
							{quoteCurrency}
							{contextualAddress}
							{detailLevel}
							{tokenBalanceFormat}
							{showFees}
							{layout}
							{innerLayout}
						/>
					</Loader>
				{/if}
			</div>
		{/key}
	</div>
{/if}
