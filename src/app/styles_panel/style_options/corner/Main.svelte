
<script>

	import StylesButton from '../../StylesButton.svelte'
	import CornerInput from './CornerInput.svelte'

	export let element = {}

	export let changeStyleKey = () => {}
	export let deleteStyleKeys = () => {}

	let corner_type = 'None'

	if (element.styles['border-radius'] === 'none') {
		corner_type = 'None'
	}
	else if (element.styles['border-radius'] !== 'none') {
		corner_type = 'Corner'
	}
	else {
		corner_type = 'Custom Corners'
	}

	const onChangeCorner = (value) => {

		if (value === 'None') {

			deleteStyleKeys([
				'border-top-left-radius',
				'border-top-right-radius',
				'border-bottom-left-radius',
				'border-bottom-right-radius',
			])

			changeStyleKey('border-radius', 'none')
		}
		else if (value === 'Corner') {

			element.styles['border-radius'] = ''

			deleteStyleKeys([
				'border-top-left-radius',
				'border-top-right-radius',
				'border-bottom-left-radius',
				'border-bottom-right-radius',
			])
		}
		else {
			changeStyleKey('border-radius', 'none')
		}
	}

</script>


<StylesButton title="Corner" >

	<div class="input_group">

		<select
			bind:value={corner_type}
			on:change={e => onChangeCorner(e.target.value)}
		>
			<option>None</option>
			<option>Corner</option>
			<option>Custom Corners</option>
		</select>

	</div>

	{#if corner_type === 'Corner'}

		<CornerInput
			value={element.styles['border-radius']}
			onChange={(value) => changeStyleKey('border-radius', value)}
		/>

	{:else if corner_type === 'Custom Corners'}

		<section class="elements_grid">

			<CornerInput
				title="top left:"
				value={element.styles['border-top-left-radius']}
				onChange={(value) => changeStyleKey('border-top-left-radius', value)}
			/>

			<CornerInput
				title="top right:"
				value={element.styles['border-top-right-radius']}
				onChange={(value) => changeStyleKey('border-top-right-radius', value)}
			/>

			<CornerInput
				title="bottom left:"
				value={element.styles['border-bottom-left-radius']}
				onChange={(value) => changeStyleKey('border-bottom-left-radius', value)}
			/>

			<CornerInput
				title="bottom right:"
				value={element.styles['border-bottom-right-radius']}
				onChange={(value) => changeStyleKey('border-bottom-right-radius', value)}
			/>

		</section>

	{/if}

</StylesButton>


<style>

	.elements_grid :global(.input_group) {
		padding: 0px 10px 7.5px !important;
	}

	.elements_grid :global(.input_group:nth-child(1)) {
		border-top-left-radius: 10px;
	}

	.elements_grid :global(.input_group:nth-child(2)) {
		border-top-right-radius: 10px;
	}

	.elements_grid :global(.input_group:nth-child(3)) {
		border-bottom-left-radius: 10px;
	}

	.elements_grid :global(.input_group:nth-child(4)) {
		border-bottom-right-radius: 10px;
	}

</style>

