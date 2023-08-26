
<script>


	// import('./events_controller/main')
	import Element from './Element.svelte'
	import { elementsChildrenState } from '@/global_state/sections'
	import { initHoverController } from './events_controller/hover_page_controller'

	let pageElement = null
	let elementsOfFirstLevel = []

	elementsChildrenState.subscribe(state => {
		elementsOfFirstLevel = state[null] || []
	})


	initHoverController()

</script>


<section class="page" bind:this={pageElement} >

	{#each elementsOfFirstLevel as element (element.id)}
		<Element elementId={element.id} />
	{/each}

</section>


<style>

	.page {
		width: 100%;
		height: 100%;
		box-shadow:  var(--box-shadow);
	}

	.section_element {
		display: flex;
		background: #ebeaea;
		border-radius: 5px;
		padding: 10px 20px;
		margin: 15px 20px;
	}

	.selected {
		opacity: 1;
	}








	.page :global(.mask) {
		position: fixed;
		border-radius: 5px;
		/*animation: mask_animation .5s;*/
	}

	.page :global(.mask) {
		opacity: 1;
		background-size: 20px 20px;
		animation: hover_element__lines 2s linear infinite;
		background-color: rgba(0, 0, 0, .1);
		background-image: linear-gradient(
			45deg,
			rgba(255, 255, 255, 0.15) 25%,
			transparent 25%,
			transparent 50%,
			rgba(255, 255, 255, 0.15) 50%,
			rgba(255, 255, 255, 0.15) 75%,
			transparent 75%,
			transparent
		);

		border: 1.5px solid rgba(255, 255, 255, .75);
	}

	.page :global(.mask.brightness) {
		border: 1.5px solid rgba(0, 0, 0, .75);
	}

	.page :global(.mask.hover) {
		border: none;
	}

	@keyframes hover_element__lines {
		from {
			background-position: 20px 0;
		}
		to {
			background-position: 0 0;
		}
	}



</style>

