<script lang="ts">
	import type { Ethereum } from '../data/networks/types';
	import type { TickerSymbol } from '../data/currencies';
	import type { Covalent } from '../api/covalent';
	import type { ContractMetadata } from '../api/sourcify';
	import type { PriceScale } from './PriceChart.svelte';
	import { getERC20TokenTransfers, getTransactionsByAddress } from '../api/covalent';
	import { preferences } from '../state/preferences';

	export let network: Ethereum.Network;
	export let addressOrEnsName: Ethereum.Address | string;
	export let filterQuery: Ethereum.Address | Ethereum.ContractAddress | Ethereum.BlockNumber;
	export let provider: Ethereum.Provider;

	export let tokenBalancesProvider;
	export let transactionProvider;

	$: tokenBalancesProvider = $$props.tokenBalancesProvider || $preferences.tokenBalancesProvider;
	$: transactionProvider = $$props.transactionProvider || $preferences.transactionProvider;

	let detailLevel: 'summary' | 'detailed' | 'exhaustive' = 'detailed';
	let tokenBalanceFormat: 'original' | 'converted' | 'both' = 'original';
	let showFees = false;
	let sortBy: 'value-descending' | 'value-ascending' | 'ticker-ascending' = 'value-descending';
	let showSmallValues = false;

	$: quoteCurrency = $preferences.quoteCurrency;

	let selectedToken: Ethereum.ERC20Token | undefined;

	import { isAddress } from 'ethers';

	$: if (isAddress(filterQuery) && balances) {
		selectedToken = balances.find(
			({ token }) => token.address.toLowercase() === filterQuery.toLowerCase()
		);
	}
	// $: if(selectedToken)
	// 	filterQuery = selectedToken.address

	let balances: Covalent.ERC20TokenOrNFTContractWithBalance[] = [];

	let priceScale: PriceScale;

	const getContractName = (contractMetadata: ContractMetadata<string>) =>
		Object.values(contractMetadata.settings.compilationTarget)?.[0] as string;

	import Address from './Address.svelte';
	import Balance from './Balance.svelte';
	import CovalentPriceChart from './CovalentPriceChart.svelte';
	import EnsName from './EnsName.svelte';
	import EnsResolutionLoader from './EnsResolutionLoader.svelte';
	import EthereumBalances from './EthereumBalances.svelte';
	import EthereumContractExplorer from './EthereumContractExplorer.svelte';
	import EthereumTransactionCovalent from './EthereumTransactionCovalent.svelte';
	import EthereumTransactionMoralis from './EthereumTransactionMoralis.svelte';
	// import EthereumTransactionEtherspot from './EthereumTransactionEtherspot.svelte'
	import EthereumTransactionsLoader from './EthereumTransactionsLoader.svelte';
	import EthereumTransactionsERC20Loader from './EthereumTransactionsERC20Loader.svelte';
	import InlineContainer from './InlineContainer.svelte';
	import TokenName from './TokenName.svelte';
	import TokenBalance from './TokenBalance.svelte';
	import TokenBalanceFormatSelect from './TokenBalanceFormatSelect.svelte';
	import TweenedNumber from './TweenedNumber.svelte';

	import { fade } from 'svelte/transition';
</script>

<div class="ethereum-account card">
	<EnsResolutionLoader
		{addressOrEnsName}
		{provider}
		passiveReverseResolution
		let:address
		let:ensName
		let:isReverseResolving
		showIf={({ address }) => address}
	>
		<div slot="header" class="bar">
			<div class="row-inline">
				<slot name="title" {network} {address} {ensName}>
					{#if address}
						<h2><Address {network} {address} /></h2>
						{#if ensName}
							<EnsName {ensName} showAvatar />
						{/if}
					{:else if ensName}
						<h2><EnsName {ensName} showAvatar /></h2>
					{/if}
				</slot>
				<!-- {#if isReverseResolving}
					{#if address}
						<h2><Address {network} {address} /></h2>
					{/if}
					{#if ensName}
						<EnsName {ensName} showAvatar />
					{/if}
				{:else}
					{#if ensName}
						<h2><EnsName {ensName} showAvatar /></h2>
					{/if}
					{#if address}
						<Address {network} {address} />
					{/if}
				{/if} -->
			</div>
			<span class="card-annotation">
				{network.name}
				{#await provider.getCode(address)}
					Address
				{:then contractCode}
					{#if contractCode === '0x'}
						Account
					{:else}
						<abbr title={contractCode}>Contract</abbr>
					{/if}
				{:catch}
					Address
				{/await}
			</span>
		</div>

		<EthereumContractExplorer {address} {network} {provider} {transactionProvider}>
			<svelte:fragment slot="header">
				<hr />
			</svelte:fragment>

			<slot slot="title" name="contract-title" {network} {address}>
				<h3>
					<Address {network} {address}>Contract Code</Address>
				</h3>
			</slot>
		</EthereumContractExplorer>

		<!-- <Balance {provider} {address} /> -->
		<EthereumBalances
			{network}
			{address}
			{tokenBalancesProvider}
			{quoteCurrency}
			{sortBy}
			{showSmallValues}
			{tokenBalanceFormat}
			isSelectable={true}
			bind:selectedToken
			bind:balances
		>
			<svelte:fragment slot="header" let:summary>
				{#if balances.length}
					<hr />

					<div class="bar">
						<h3>
							Balances (<TokenBalance
								symbol={summary.quoteCurrency}
								balance={summary.quoteTotal}
								showPlainFiat={true}
							/>)
						</h3>
						<label>
							<input type="checkbox" bind:checked={showSmallValues} />
							<span>Show Small Values</span>
						</label>
						<label>
							<span>Sort</span>
							<select bind:value={sortBy}>
								<option value="ticker-ascending">Alphabetical</option>
								<option value="value-descending">Highest Value</option>
								<option value="value-ascending">Lowest Value</option>
							</select>
						</label>
						<label>
							<span>Show</span>
							<TokenBalanceFormatSelect
								bind:tokenBalanceFormat
								quoteCurrency={summary.quoteCurrency}
							/>
						</label>
					</div>
				{/if}
			</svelte:fragment>
		</EthereumBalances>

		<hr />

		<div class="stack">
			{#if !selectedToken}
				<div class="column" transition:fade>
					<!-- Regular Ethereum Transactions -->
					<EthereumTransactionsLoader
						{network}
						{address}
						{provider}
						{transactionProvider}
						{quoteCurrency}
						includeLogs={detailLevel === 'exhaustive'}
						showIf={(transactions) => transactions}
						let:transactions
						let:pagination
					>
						<svelte:fragment slot="header" let:status>
							<div class="bar">
								<h3>
									Transactions
									<InlineContainer isOpen={status === 'resolved'}
										>(<TweenedNumber value={transactions.length} /><InlineContainer
											isOpen={pagination?.hasNextPage}>+</InlineContainer
										>)</InlineContainer
									>
								</h3>
								<label>
									<input type="checkbox" bind:checked={showFees} />
									<span>Show Fees</span>
								</label>
								<label>
									<span>View</span>
									<select bind:value={detailLevel}>
										<option value="summary">Summary</option>
										<option value="detailed">Detailed</option>
										<option value="exhaustive">Exhaustive</option>
									</select>
								</label>
							</div>
						</svelte:fragment>

						<div class="transactions-list column" class:scrollable-list={transactions.length > 7}>
							{#each transactions as transaction}
								{#if transactionProvider === 'Covalent'}
									<a class="card" id={transaction.tx_hash} href="#{transaction.tx_hash}">
										<EthereumTransactionCovalent
											{network}
											{transaction}
											{quoteCurrency}
											contextualAddress={address}
											{detailLevel}
											{tokenBalanceFormat}
											{showFees}
											layout="inline"
										/>
									</a>
								{:else if transactionProvider === 'Moralis'}
									<a class="card" id={transaction.hash} href="#{transaction.hash}">
										<EthereumTransactionMoralis
											{network}
											{transaction}
											{quoteCurrency}
											contextualAddress={address}
											{detailLevel}
											{tokenBalanceFormat}
											{showFees}
											layout="inline"
										/>
									</a>
									<!-- {:else if transactionProvider === 'Etherspot'}
									<a class="card" id={transaction.hash} href="#{transaction.hash}">
										<EthereumTransactionEtherspot
											{network}
											{transaction}
											{quoteCurrency}
											contextualAddress={address}
											{detailLevel}
											{tokenBalanceFormat}
											{showFees}
											layout="inline"
										/>
									</a> -->
								{/if}
							{:else}
								<div class="card">No transactions yet.</div>
							{/each}
						</div>
					</EthereumTransactionsLoader>
				</div>
			{:else}{#key selectedToken}
					<div class="column" transition:fade>
						<!-- ERC-20 Transactions -->
						<EthereumTransactionsERC20Loader
							{network}
							{address}
							{provider}
							{transactionProvider}
							erc20Token={selectedToken}
							{quoteCurrency}
							includeLogs={detailLevel === 'exhaustive'}
							let:transactions
							let:pagination
						>
							<svelte:fragment slot="header" let:status>
								<div class="bar">
									<h3>
										{selectedToken.name}
										(<TokenName {network} erc20Token={selectedToken} />) Transactions
										<InlineContainer isOpen={status === 'resolved'}
											>(<TweenedNumber value={transactions.length} /><InlineContainer
												isOpen={pagination?.hasNextPage}>+</InlineContainer
											>)</InlineContainer
										>
									</h3>
									{#if detailLevel !== 'exhaustive'}
										<label>
											<input type="checkbox" bind:checked={showFees} />
											<span>Show Fees</span>
										</label>
									{/if}
									<label>
										<span>View</span>
										<select bind:value={detailLevel}>
											<option value="summary">Summary</option>
											<option value="detailed">Detailed</option>
											<option value="exhaustive">Exhaustive</option>
										</select>
									</label>
									<button on:click={() => (selectedToken = undefined)}>Back</button>
								</div>
							</svelte:fragment>

							<div class="transactions-list column" class:scrollable-list={transactions.length > 7}>
								{#each transactions as erc20TokenTransaction}
									{#if transactionProvider === 'Covalent'}
										<a
											class="card"
											id={erc20TokenTransaction.tx_hash}
											href="#{erc20TokenTransaction.tx_hash}"
										>
											<EthereumTransactionCovalent
												{network}
												{erc20TokenTransaction}
												{quoteCurrency}
												contextualAddress={address}
												{detailLevel}
												{tokenBalanceFormat}
												{showFees}
												layout="inline"
											/>
										</a>
									{:else if transactionProvider === 'Moralis'}
										<a
											class="card"
											id={erc20TokenTransaction.hash}
											href="#{erc20TokenTransaction.hash}"
										>
											<EthereumTransactionMoralis
												{network}
												{erc20TokenTransaction}
												{quoteCurrency}
												contextualAddress={address}
												{detailLevel}
												{tokenBalanceFormat}
												{showFees}
												layout="inline"
											/>
										</a>
									{/if}
								{:else}
									<div class="card">No transactions yet.</div>
								{/each}
							</div>
						</EthereumTransactionsERC20Loader>
					</div>
				{/key}{/if}
		</div>

		{#if balances.length}
			<CovalentPriceChart
				historicalPriceProvider={$preferences.historicalPriceProvider}
				quoteCurrency={$preferences.quoteCurrency}
				chainID={network.chainId}
				currencies={selectedToken?.tokenAddress
					? [selectedToken.tokenAddress]
					: balances.map((tokenWithBalance) => tokenWithBalance.contract_address).filter(Boolean)}
				{priceScale}
			>
				<svelte:fragment slot="header">
					<hr />

					<div class="bar">
						<h3>Chart</h3>
						<label>
							<span>Price Scale</span>
							<select bind:value={priceScale}>
								<option value="logarithmic">Logarithmic</option>
								<option value="linear">Linear</option>
								<option value="linearFromZero">Linear From Zero</option>
							</select>
						</label>
					</div>
				</svelte:fragment>
			</CovalentPriceChart>
		{/if}
	</EnsResolutionLoader>
</div>

<style>
	.bar {
		/* --padding-inner: 1.25em; */
		--padding-inner: 1em;
	}
	label,
	button {
		font-size: 0.9em;
	}

	h3 {
		line-height: 1.6;
	}
	/* .transactions :global(.token-balance-container) {
		font-size: 1.1em;
	} */

	.ethereum-account {
		--echart-height: 20rem;
	}
</style>
