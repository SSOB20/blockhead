<script lang="ts">
	import type { Ethereum } from '../../../data/networks/types';
	import { getContext } from 'svelte';
	import { preferences } from '../../../state/preferences';

	const token = 'BTC';

	const ethereumNetwork = getContext<SvelteStore<Ethereum.Network>>('ethereumNetwork');
	const ethereumProvider = getContext<SvelteStore<Ethereum.Provider>>('ethereumProvider');

	import CurrentPrice from '../../../components/CurrentPrice.svelte';
	import HistoricalPriceChart from '../../../components/HistoricalPriceChart.svelte';
</script>

<div class="card">Bitcoin explorer coming soon!</div>

<hr />

<div>
	<section class="card">
		<CurrentPrice
			currentPriceProvider={$preferences.currentPriceProvider}
			{token}
			quoteCurrency={$preferences.quoteCurrency}
			provider={$ethereumProvider}
			network={$ethereumNetwork}
		/>
	</section>
</div>

<div>
	<section class="card">
		<HistoricalPriceChart
			historicalPriceProvider={$preferences.historicalPriceProvider}
			currencies={[token]}
			quoteCurrency={$preferences.quoteCurrency}
		/>
	</section>
</div>

<style>
	.row {
		display: flex;
		align-items: stretch;
		flex-wrap: wrap;
		gap: var(--padding-inner);
	}
	.row > * {
		flex: 1 20rem;
		padding: var(--padding-outer);
	}
</style>
