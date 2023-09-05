
<script>

	import { addElementModalState } from '@/global_state/modals'
	import { setMoveController } from '@/helpers/move_element'

	export let isMinified = false
	export let panelElement = null

	let moveElement = null
	let wrapperElement = null

	$: if (moveElement && panelElement && !wrapperElement) {

		wrapperElement = document.getElementById('html_editor_app')

		setMoveController({
			moveElement,
			wrapperElement,
			element: panelElement,
		})
	}

</script>



<section class="header_section" bind:this={moveElement} >

	<span class="element_name" > Add Element </span>

	<span style="flex: auto;" />

	<button
		class="fas fa-{!isMinified ? 'minus' : 'window-maximize'} close"
		on:click={() => isMinified = !isMinified}
	/>

	<button
		class="fas fa-times close"
		on:click={() => addElementModalState.close()}
	/>

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
		background: rgba(0, 0, 0, .02);
		border: 2px solid rgba(255, 255, 255, 1);
	}

	.header_section .close {
		cursor: default;
		padding: 5px;
	}

	.header_section .element_name {
		cursor: default;
	}

	.header_section .element_name:hover, .header_section .close:hover {
		opacity: .8;
	}

  button {
    background-color: transparent;
    border: none;
    padding: 0px;
  }

</style>
