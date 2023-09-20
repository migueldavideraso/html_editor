<script lang="ts">
	import { selectedSectionState } from "@/global_state/sections";
	import { onMount } from "svelte";

	import type { I_Element } from "@/types/main";
	import Hover from "./Hover.svelte";
	import Move from "./Move.svelte";

	export let allowDrag = false;
	export let allowDrop = false;
	export let selected = false;
	export let elementId: I_Element["id"] = "";
	export let afterUpdateElement: (elementId: I_Element["id"]) => void;

	let eventsElement = null;
	let componentElement = null;
	let parentComponentElement = null;

	onMount(() => {
		componentElement = eventsElement.parentElement;
		parentComponentElement = componentElement.parentElement;

		componentElement.onclick = (e: MouseEvent) => {
			e.stopPropagation();
			selectedSectionState.set(selected ? null : elementId);
		};
	});
</script>

{#if componentElement && parentComponentElement}
	<Hover
		bind:afterUpdateElement
		{selected}
		{elementId}
		{componentElement}
		{parentComponentElement}
	/>

	<Move {allowDrop} {allowDrag} {elementId} {componentElement} />
{/if}

<span
	class="events_element"
	id="events_element_{elementId}"
	bind:this={eventsElement}
/>

<style>
	.events_element {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 0px;
		height: 0px;
		z-index: -99;
	}
</style>
