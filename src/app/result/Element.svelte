
<script lang="ts">

	import { selectedSectionState, getElementChildrenStore, getElementDataStore } from '@/global_state/sections'
	import { afterUpdate, beforeUpdate, onMount } from 'svelte'
	import { getItemComponent, getElementStyle, getStyles } from './controller'
	import { getBrightness } from '@/helpers/main'

	import EventsController from './events_controller/Main.svelte'

	export let elementId = null

	let element = {}
	let children = []
	let selected = false
	let afterUpdateElement = () => {}

	getElementChildrenStore(elementId).subscribe(state => {
		children = state
	})

	getElementDataStore(elementId).subscribe(state => {
		element = state
	})

	afterUpdate(() => {
		afterUpdateElement(elementId)
	})

	const Component = getItemComponent({ element })

	selectedSectionState.subscribe(state => {

		if (state === elementId) {
			selected = true
			return
		}

		if (!state) {
			selected = null
			return
		}

		selected = false
	})

	$: styles = getStyles({ element })
	$: elementStyles = getElementStyle({ element, styles })

	$: allowDrag = element?.type !== 'app'
	$: allowDrop = element?.type !== 'text'
	$: allowCreateEventsController = Boolean(element?.type)


</script>

{@html elementStyles}

<Component {element} >

	{#if allowCreateEventsController }

		<EventsController
			bind:afterUpdateElement
			{selected}
			{elementId}
			{allowDrop}
			{allowDrag}
		/>

	{/if}


	{#if children?.length }

		{#each children as element (element.id)}
			<svelte:self elementId={element.id} />
		{/each}

	{/if}

</Component>

