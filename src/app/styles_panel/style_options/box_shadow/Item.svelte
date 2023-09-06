
<script lang="ts">

	import SizeInputs from '../../components/SizeInputs.svelte'
	import ColorPicker from '../../components/ColorPicker.svelte'

	export let item: string = ''

	let args = item.split(' ')
	let xAxis = args[0]
	let yAxis = args[1]
	let blur = args[2]
	let spread = args[3]
	let inset = args[4]
	let color = args[5]

	$: {
		item = `${xAxis} ${yAxis} ${blur} ${spread} ${inset} ${color}`
	}

</script>

<div class="input_group">

	<SizeInputs
		units={[ 'px' ]}
		showOptionTypes={false}
		optionValue={xAxis}
		onChange={(value) => xAxis = value}
	/>

	<SizeInputs
		units={[ 'px' ]}
		showOptionTypes={false}
		optionValue={yAxis}
		onChange={(value) => yAxis = value}
	/>

	<SizeInputs
		units={[ 'px' ]}
		showOptionTypes={false}
		optionValue={blur}
		onChange={(value) => blur = value}
	/>

	<SizeInputs
		units={[ 'px' ]}
		showOptionTypes={false}
		optionValue={spread}
		onChange={(value) => spread = value}
	/>

	<select
		value={inset || ''}
		on:change={(e) => inset = e.currentTarget.value}
	>
		<option value="">outline</option>
		<option value="inset">inset</option>
	</select>

	<ColorPicker
		{color}
		onChange={(value) => color = value}
	/>

</div>


<style>
	
	.input_group :global(input){
		padding: 0px;
		max-width: 35px !important;
	}

	.input_group :global(select.units_select){
		display: none;
	}

	.input_group {
		justify-content: space-between;
	}

</style>