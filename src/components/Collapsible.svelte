<script lang="ts">
	export let type: 'label' | 'details' = 'details';

	export let title = '';

	export let isOpen = false;

	type SharedSlotProps = {
		isOpen: boolean;
		toggle: () => boolean;
	};

	type $$Slots = {
		default: SharedSlotProps;
		header: SharedSlotProps;
		title: SharedSlotProps;
		toolbar: SharedSlotProps;
		'toolbar-items': SharedSlotProps;
		'header-right': SharedSlotProps;
		footer: SharedSlotProps;
	};

	const ariaId = crypto.randomUUID();

	const toggle = () => (isOpen = !isOpen);
</script>

<svelte:element
	this={{
		label: 'div',
		details: 'details'
	}[type]}
	class="container {$$props.containerClass ?? ''}"
	class:column-block={type === 'details'}
	{...{
		label: {
			'data-state': isOpen ? 'open' : 'closed'
		},
		details: {
			open: isOpen
		}
	}[type]}
	on:toggle={(e) => (isOpen = e.target.open)}
>
	<!-- bind:open={isOpen} -->
	<slot name="header" {isOpen} {toggle}>
		<svelte:element
			this={{
				label: 'label',
				details: 'summary'
			}[type]}
			class="bar"
		>
			<slot name="title" {isOpen} {toggle}>
				<h4>{title}</h4>
			</slot>

			<div class="row">
				<slot name="toolbar" {isOpen} {toggle}>
					{#if $$slots['toolbar-items']}
						<div role="toolbar">
							<slot name="toolbar-items" {isOpen} {toggle} />
						</div>
					{/if}
				</slot>

				<slot name="header-right" {isOpen} {toggle} />

				<button
					class="small"
					data-after={isOpen ? '⏶' : '⏷'}
					{...type === 'label'
						? {
								'aria-controls': ariaId,
								'aria-expanded': isOpen ? 'true' : 'false'
						  }
						: {}}
					on:click={toggle}>{isOpen ? 'Hide' : 'Show'}</button
				>
				<!-- <button
					class="small"
					data-after={isOpen ? '▲' : '▼'}
					aria-controls={ariaId}
					aria-expanded={isOpen ? 'true' : 'false'}
					on:click={toggle}
				/> -->
			</div>
		</svelte:element>
	</slot>

	<div
		class="collapsible {$$props.class ?? ''}"
		{...type === 'label'
			? {
					id: ariaId
			  }
			: {}}
	>
		<slot {isOpen} {toggle} />
	</div>

	<slot name="footer" {isOpen} {toggle} />
</svelte:element>

<style>
	.container {
		display: grid;

		perspective: 1000px;

		transition: 0.5s var(--ease-out-expo);
		/* transition-property: grid-template-rows, gap; */
	}
	details.container {
		display: block;
	}
	details.container[open],
	.container[data-state='open'] {
		grid-template-rows: max-content 1fr;
	}
	details.container:not([open]),
	.container[data-state='closed'] {
		grid-template-rows: max-content 0fr;
		gap: 0;
	}

	label,
	summary {
		margin: calc(-1 * var(--padding-inner));
		padding: var(--padding-inner);
	}
	:is(label, summary):hover {
		filter: brightness(1.1);
	}
	:is(label, summary):active {
		scale: 0.992;
		opacity: 0.75;
		transition-duration: 0.15s;
	}
	.container[data-state='open'] label,
	details[open] summary {
		cursor: zoom-out;
	}
	.container[data-state='closed'] label,
	details:not([open]) summary {
		cursor: zoom-in;
	}

	.collapsible {
		min-height: 0;
		overflow: clip;
		overflow-clip-margin: var(--padding-outer);
		transform-origin: top;
	}
	.container:is([data-state='closed'], details:not([open])) > .collapsible {
		margin-bottom: calc(-1 * var(--padding-inner));

		/* transform: rotateX(-20deg); */
		translate: 0 0 -100px;

		opacity: 0;
		filter: blur(1rem);

		visibility: hidden;
		pointer-events: none;
	}

	::-webkit-details-marker {
		display: none;
	}

	[role='toolbar'] {
		font-size: 0.8em;
	}
</style>
