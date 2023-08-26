
<script>

	import { onMount } from 'svelte'

	export let parentElement = null

	let droptDownElement = null
	let isOpen = false


	onMount(() => {

		close()

		parentElement.onclick = () => {
			open()
		}
	})

	function close () {
		isOpen = false
		droptDownElement.style.display = 'none'
	}

	function open () {

		isOpen = true
		droptDownElement.style.display = ''

		const { left, top } = getPosition()

		droptDownElement.style.left = `${left}px`
		droptDownElement.style.top = `${top}px`
	}

	function getPosition () {

		const { width: pageWidth, height: pageHeight } = window.document.body.getBoundingClientRect()
		const { width: elementWidth, height: elementHeight } = droptDownElement.getBoundingClientRect()
		const { x, y, width, height } = parentElement.getBoundingClientRect()

		return {
			left: calcLeft({ pageWidth, elementWidth, x, width }),
			top: calcTop({ pageHeight, elementHeight, y, height }),
		}
	}

	function calcLeft ({ pageWidth, elementWidth, x, width }) {

		let left = x + (width / 2) - (elementWidth / 2)

		if (pageWidth < left + elementWidth) {
			left = pageWidth - elementWidth - 5
		}

		if (left < 0) {
			left = 5
		}

		return left
	}

	function calcTop ({ pageHeight, elementHeight, y, height }) {

		let top = y + height + 2.5

		if (pageHeight < top + elementHeight) {
			top = y - elementHeight - 2.5
		}

		if (top < 0) {
			top = 5
		}

		return top
	}

</script>


<section
	class="dropdown"
	bind:this={droptDownElement}
>

	<div class="controllers">
		<span class="fas fa-times" on:click={close} />
	</div>

	<div class="item"> Flex Section </div>

	<div class="item"> Box </div>

	<div class="item"> Button </div>

	<div class="item"> Text </div>

</section>



<style>

	.dropdown {
		background-color: #ffffff;
		position: fixed;
		min-width: 150px;
		border-radius: 5px;
		border: var(--main-border);
		padding: 5px 7.5px 10px 5px;
		box-shadow: var(--box-shadow);
		animation: dropdown_animation .5s;
	}

	@keyframes dropdown_animation {
		0% {
			opacity: .5;
		}
		100% {
			opacity: 1;
		}
	}

	.controllers {
		justify-content: flex-end;
		display: flex;
	}

	.item {
		cursor: default;
		padding: 0px 5px;
		font-size: .8rem;
		margin-top: 2.5px;
	}

	.item:hover {
		background: rgba(0, 0, 0, .1);
	}

</style>

