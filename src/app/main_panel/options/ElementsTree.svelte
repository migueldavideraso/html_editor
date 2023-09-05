
<script lang="ts">

	import TreeItem from './TreeItem.svelte'
	import { elementsChildrenState } from '@/global_state/sections'

	let sectionsOfFirstLevel = []

	elementsChildrenState.subscribe(state => {
		sectionsOfFirstLevel = state['null'] || []
	})

	let isCollapsed = true

	const setCollapse = () => {
		isCollapsed = !isCollapsed
	}

</script>


<button class="app--button" on:click={setCollapse} >
	<span class="fas fa-angle-right {isCollapsed ? 'collaped' : ''}" /> Elements
</button>

{#if isCollapsed}
	<section class="app--options_section">

		{#each sectionsOfFirstLevel as section (section.id)}
			<TreeItem elementId={section.id} />
		{/each}

	</section>
{/if}



<style>

	.app--options_section {
		flex-direction: column;
		overflow: auto;
		display: flex;
		grid-gap: 10px;
		margin: -10px 5px 0px !important;
	}

	.app--button span {
		transition: transform .3s linear;
	}

	.app--button span.collaped {
		transform: rotate(90deg);
	}

</style>

