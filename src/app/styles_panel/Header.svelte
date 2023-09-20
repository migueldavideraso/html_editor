<script>
	import { selectedSectionState } from "@/global_state/sections";
	import { setMoveController } from "@/helpers/move_element";
	import { onMount } from "svelte";

	export let element = {};
	export let isMinified = false;
	export let panelElement = null;
	export let wrapperElement = null;

	let moveElement = null;

	const closePanel = () => {
		selectedSectionState.set(null);
	};

	onMount(() => {
		setMoveController({
			moveElement,
			wrapperElement,
			element: panelElement,
		});
	});
</script>

<section class="header_section" bind:this={moveElement}>
	<span class="element_name"> {element?.name || ""} </span>
	<span style="flex: auto;" />
	<button
		class="fas fa-{!isMinified ? 'minus' : 'window-maximize'} close"
		on:click={() => (isMinified = !isMinified)}
	/>
	<button class="fas fa-times close" on:click={closePanel} />
</section>

<style>
	.header_section {
		position: relative;
		display: flex;
		cursor: move;
		padding: 10px;
		grid-gap: 0px;
		font-weight: 600;
		font-size: 1.05rem;
		background: rgba(0, 0, 0, 0.02);
		border: 2px solid rgba(255, 255, 255, 1);
	}

	.header_section .close {
		cursor: default;
		padding: 5px;
	}

	.header_section .element_name {
		cursor: default;
	}

	.header_section .element_name:hover,
	.header_section .close:hover {
		opacity: 0.8;
	}

	button {
		background-color: transparent;
		border: none;
		padding: 0px;
	}
</style>
