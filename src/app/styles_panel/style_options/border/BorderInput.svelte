
<script lang="ts">

	import SizeInputs from '../../components/SizeInputs.svelte'
	import ColorPicker from '../../components/ColorPicker.svelte'

	export let value: string = ''
	export let title: string = ''
	export let onChange: (value: string) => void = () => {}


	const border = value || ''
	const borderSections = border.split(' ')

	let size = borderSections[0]
	let style = borderSections[1]
	let color = borderSections.slice(2).join(' ') // The rgb color is separated by the split function

  const updateBorder = () => {
		onChange(size && style && color ? `${size} ${style} ${color}` : '')
	}

	const updateSize = (value: string) => {
		size = value
		updateBorder()
	}

	const updateStyle = (value: string) => {
		style = value
		updateBorder()
	}

	const updateColor = (value: string) => {
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
		on:change={(e) => updateStyle(e.currentTarget. value)}
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