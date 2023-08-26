
<script>

	import SizeInputs from '../../components/SizeInputs.svelte'
	import ColorPicker from '../../components/ColorPicker.svelte'

	export let value = ''
	export let title = ''
	export let onChange = () => {}


	const border = value || ''
	const borderSections = border.split(' ')

	let size = borderSections[0]
	let style = borderSections[1]
	let color = borderSections[2]

	const updateBorder = () => {
		onChange(size && style && color ? `${size} ${style} ${color}` : '')
	}

	const updateSize = (value) => {
		size = value
		updateBorder()
	}

	const updateStyle = (value) => {
		style = value
		updateBorder()
	}

	const updateColor = (value) => {
		color = value
		updateBorder()
	}

</script>

{#if title}
	<div class="title"> {title} </div>
{/if}

<div class="input_group">

	<SizeInputs
		units={[ 'px' ]}
		showOptionTypes={false}
		optionValue={size || ''}
		onChange={(value) => updateSize(value)}
	/>

	<select
		value={style || ''}
		on:change={(e) => updateStyle(e.target. value)}
	>
		<option>solid</option>
		<option>dashed</option>
		<option>dotted</option>
		<option>double</option>
		<option>groove</option>
		<option>inset</option>
		<option>outset</option>
	</select>

	<ColorPicker
		{color}
		onChange={(value) => updateColor(value)}
	/>

</div>