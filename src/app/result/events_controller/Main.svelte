
<script lang="ts">

	import { onMount } from 'svelte'
	import { selectedSectionState } from '@/global_state/sections'

	import Hover from './Hover.svelte'
	import Move from './Move.svelte'

	export let allowDrag = false
	export let allowDrop = false
	export let selected = false
	export let elementId = ''
	export let afterUpdateElement = () => {}


	let eventsElement = null
	let componentElement = null
	let parentComponentElement = null

	onMount(() => {

		componentElement = eventsElement.parentElement
		parentComponentElement = componentElement.parentElement

		componentElement.onclick = (e) => {
			e.stopPropagation()
			selectedSectionState.set(selected ? null : elementId)
		}
	})

</script>


{#if componentElement && parentComponentElement}

	<Hover
		bind:afterUpdateElement
		{selected}
		{elementId}
		{componentElement}
		{parentComponentElement}
	/>

	<Move
		{selected}
		{allowDrop}
		{allowDrag}
		{elementId}
		{componentElement}
	/>

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









