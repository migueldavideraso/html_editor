<script lang="ts">
	import { deleteElement as deleteFileElement } from "@/file_state/sections";
    import { allowShowMaskState } from "@/global_state/move_element";
	import { selectedSectionState } from "@/global_state/sections";
  import type { I_Element } from "@/types/main";

	export let element: I_Element
	// export let showAddButton = true
	// export let showMoveButton = true
	// export let showDeleteButton = true

  let allowShowMask = true

	const deleteElement = () => {
		selectedSectionState.set(null);
		deleteFileElement(element.id);
	};

  allowShowMaskState.subscribe(state => {
    allowShowMask = state
  })

</script>

<section class="app--main_options_section">

  <div class="switch-mask-visibility">
    <input type="checkbox" checked={allowShowMask} on:change={() => allowShowMaskState.toogle()} />
    Switch mask visibility
  </div>

  <button class="app_class--button" on:click={deleteElement}> Delete </button>
	<button class="app_class--button"> Duplicate </button>

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

  .switch-mask-visibility {
    align-items: center;
    display: flex;
    gap: 5px;
    width: 100%;
    font-size: .8rem;
    font-weight: 600;
  }

</style>
