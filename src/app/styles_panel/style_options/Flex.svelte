
<script lang="ts">

  import type { I_Element } from '@/types/main';

	import StylesButton from '../StylesButton.svelte'
	import SizeInputs from '../components/SizeInputs.svelte'

	export let changeStyleKey:(key: string, value: string) => void = () => {}
	export let element: I_Element

	let allowShow = false

	$: {

		const parentElement = document.getElementById(element.id).parentElement
		const parentElementDisplay = getComputedStyle(parentElement).display

		allowShow = parentElementDisplay === 'flex' || parentElementDisplay === 'inline-flex'
	}


</script>

<!-- This span allows the component still working even if the allowShow variable is false -->
<span style="display: none;" />

{#if allowShow}

	<StylesButton title="Flex Options" >

		<div class="input_group">

			<div class="title"> Basis: </div>

			<SizeInputs
				units={[ 'px', '%', 'rem' ]}
				optionsTypes={[ 'numeric', 'unset' ]}
				optionValue={element.styles['flex-basis'] || ''}
				onChange={(value) => changeStyleKey('flex-basis', value)}
			/>

		</div>

		<div class="input_group">

			<div class="title"> Grow: </div>

			<input
				on:change={e => changeStyleKey('flex-grow', e.currentTarget.value)}
				bind:value={element.styles['flex-grow']}
				min="0"
				type="number"
			/>

		</div>

		<div class="input_group">

			<div class="title"> Shrink: </div>

			<input
				on:change={e => changeStyleKey('flex-shrink', e.currentTarget.value)}
				bind:value={element.styles['flex-shrink']}
				min="0"
				type="number"
			/>

		</div>

	</StylesButton>

{/if}

<style>

	.input_group {
		justify-content: space-between;
	}

	.input_group div.title {
		margin: 0px;
	}

	.input_group input {
		max-width: 100px;
	}

</style>


