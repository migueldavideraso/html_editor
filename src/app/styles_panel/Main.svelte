<script lang="ts">
	import type { I_Element, I_Elements_Styles } from "@/types/main";

	import Header from "./Header.svelte";
	import Styles from "./Styles.svelte";

	import { allElementsStore } from "@/file_state/sections";
	import { allStylesStore } from "@/file_state/styles";
	import { selectedSectionState } from "@/global_state/sections";

	export let elementId: I_Element["id"] = null;
	export let wrapperElement = null;

	let allStyles: I_Elements_Styles = {};
	let element: I_Element;
	let panelElement = null;
	let isMinified = false;
	let elementsById = {};

	$: if (panelElement && elementId) {
		panelElement.style.display = "";
	} else if (panelElement) {
		panelElement.style.display = "none";
	}

	const setElement = () => {
		if (!elementId) {
			element = null;
			return;
		}

		if (!elementsById[elementId]) {
			element = null;
			return;
		}

		element = elementsById[elementId];
		element.styles = {
			...(allStyles.all || {}),
			...(allStyles[element.type] || {}),
			...(element.styles || {}),
		};
	};

	selectedSectionState.subscribe((state) => {
		elementId = state || null;
		setElement();
	});

	allStylesStore.subscribe((state) => {
		allStyles = state;
		setElement();
	});

	allElementsStore.subscribe((state) => {
		elementsById = state || {};
		setElement();
	});
</script>

<div class="styles_panel" bind:this={panelElement}>
	{#if panelElement}
		<Header {wrapperElement} {panelElement} {element} bind:isMinified />
	{/if}

	{#if element && !isMinified}
		<Styles {element} />
	{/if}
</div>

<style>
	.styles_panel {
		background-color: #ffffff;
		flex-direction: column;
    overflow: hidden;
		display: flex;
    flex: auto;
		width: 340px;
		z-index: 1;
		grid-gap: 10px;
    min-height: 400px;
		padding-bottom: 10px;
		border-radius: 7.5px;
		border: var(--main-border);
		box-shadow: var(--box-shadow);


		/* Disable Select ------------ */

		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		/* Disable Select ------------ */
	}
</style>
