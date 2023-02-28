<script lang="ts">
	export let title = 'GraphiQL Explorer';

	export let endpointUrl: string;
	export let query: string;
	export let variables: Record<string, string>;
</script>

<iframe
	class="graphiql-explorer"
	{title}
	src="{endpointUrl}?{new URLSearchParams({
		query,
		variables: JSON.stringify(variables),
		history: String(false),
		prettify: String(true),
		docs: String(true)
	})}"
/>

<style>
	iframe {
		border-radius: 0.5em;
	}
</style>
