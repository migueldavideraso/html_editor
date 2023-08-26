
<script>

	import { addElementModalState } from '@/global_state/modals'
	import { setMoveController } from '@/helpers/move_element'

	import AddElementDropdown from '@/app/components/add_element/Main.svelte'
	import Header from './Header.svelte'
	import Options from './options/Main.svelte'

	let moveElement = null
	let wrapperElement = null
	let isOptionsShowing = true

	$: if (moveElement && !wrapperElement) {

		wrapperElement = document.getElementById('html_editor_app')

		setMoveController({
			moveElement,
			wrapperElement,
			element: moveElement,
		})
	}


</script>


<AddElementDropdown />

<section class="global_panel {isOptionsShowing ? 'show' : 'hide'}" bind:this={moveElement} >

	{#if isOptionsShowing}

		<button
			class="circle fas fa-plus"
			title="Add Element"
			on:click={() => addElementModalState.open()}
		/>

		<button
			class="circle fas fa-diagram-project"
			title="Sections"
		/>

		<button
			class="circle fas fa-globe"
			title="Global styles"
		/>

		<button
			title="Save desing"
		>
			Save desing
		</button>

	{/if}

	<button
		class="circle fas fa-eye"
		title="Result"
		on:click={() => isOptionsShowing = !isOptionsShowing}
	/>

</section>

<style>

	.global_panel {
		background-color: #fafafa;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		display: flex;
		height: auto;
		width: auto;
		top: 10px;
		left: 20px;
		grid-gap: 10px;
		padding: 5px 10px;
		border-radius: 5px;
		z-index: var(--panel-z-index);
		border: 1px solid rgba(0, 0, 0, .15);


		/* Disable Select ------------ */

			-webkit-touch-callout: none;
			-webkit-user-select: none;
			-khtml-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;

		/* Disable Select ------------ */
	}

	.global_panel.show {
		min-width: min(200px, 100%);
	}

	button {
		background-color: #ffffff;
		place-content: center;
		white-space: pre;
		display: grid;
		border: none;
		padding: 10px;
		border-radius: 5px;
		box-shadow: var(--box-shadow);
		transition: transform .5s ease;
	}

	button.circle {
		width: 40px;
		padding: 0px;
		height: 40px;
		min-width: 40px;
		min-height: 40px;
		border-radius: 50%;
	}

	.show_hide_panel.show {
		transform: rotate(-180deg);
	}

</style>

