<script>
	import { deleteElement as deleteFileElement } from "@/file_state/sections";
	import { selectedSectionState } from "@/global_state/sections";

	export let element = {};
	// export let showAddButton = true
	// export let showMoveButton = true
	// export let showDeleteButton = true

	const deleteElement = () => {
		selectedSectionState.set(null);
		deleteFileElement(element.id);
	};
</script>

<section class="app--main_options_section">
	<button class="app_class--button" on:click={deleteElement}> Delete </button>
	<button class="app_class--button"> Duplicar </button>

	<button class="app_class--button"> Open Advanced Options </button>
</section>

<style>
	.app--main_options_section {
		flex-wrap: wrap;
		display: flex;
		grid-gap: 7px;
		padding: 7px !important;
	}

	.app_class--button {
		flex: auto;
	}
</style>
