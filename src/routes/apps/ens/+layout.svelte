<script lang="ts">
	import { addressOrEnsName } from '../_appsParams';

	$: currentAddressOrEnsName = $addressOrEnsName;

	import AddressField from '../../../components/AddressField.svelte';

	import { fly } from 'svelte/transition';
</script>

<section class="column" in:fly={{ x: 100 }} out:fly={{ x: -100 }}>
	<form on:submit|preventDefault={() => ($addressOrEnsName = currentAddressOrEnsName)}>
		<AddressField bind:address={currentAddressOrEnsName} />
		<button type="submit">Go</button>
	</form>

	<slot />
</section>

<style>
	form {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--padding-inner);
		align-items: center;
	}
</style>
