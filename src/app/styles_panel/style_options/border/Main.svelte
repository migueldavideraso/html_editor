
<script>

	import StylesButton from '../../StylesButton.svelte'
	import BorderInput from './BorderInput.svelte'

	export let element = {}

	export let changeStyleKey = () => {}
	export let deleteStyleKeys = () => {}

	let border_type = 'None'


	if (element.styles.border === 'none') {
		border_type = 'None'
	}
	else if (element.styles.border !== 'none') {
		border_type = 'Border'
	}
	else {
		border_type = 'Custom Borders'
	}

	const onChangeBorder = (value) => {

		if (value === 'None') {

			deleteStyleKeys([
				'border-top',
				'border-left',
				'border-right',
				'border-bottom',
			])

			changeStyleKey('border', 'none')
		}
		else if (value === 'Border') {

			element.styles['border'] = ''

			deleteStyleKeys([
				'border-top',
				'border-left',
				'border-right',
				'border-bottom',
			])
		}
		else {
			changeStyleKey('border', 'none')
		}
	}


</script>


<StylesButton title="Border" >


	<div class="input_group">

		<select
			bind:value={border_type}
			on:change={e => onChangeBorder(e.target.value)}
		>
			<option>None</option>
			<option>Border</option>
			<option>Custom Borders</option>
		</select>

	</div>

	{#if border_type === 'Border'}
		<BorderInput
			value={element.styles.border}
			onChange={(value) => changeStyleKey('border', value)}
		/>
	{:else if border_type === 'Custom Borders'}

		<BorderInput
			title="top:"
			value={element.styles['border-top']}
			onChange={(value) => changeStyleKey('border-top', value)}
		/>

		<BorderInput
			title="bottom:"
			value={element.styles['border-bottom']}
			onChange={(value) => changeStyleKey('border-bottom', value)}
		/>

		<BorderInput
			title="left:"
			value={element.styles['border-left']}
			onChange={(value) => changeStyleKey('border-left', value)}
		/>

		<BorderInput
			title="right:"
			value={element.styles['border-right']}
			onChange={(value) => changeStyleKey('border-right', value)}
		/>
	{/if}

</StylesButton>


<style>

</style>

