
<script lang="ts">

  import type { I_Element } from '@/types/main';

  import StylesButton from '../../StylesButton.svelte'
	import BorderInput from './BorderInput.svelte'

	export let element: I_Element

	export let deleteStyleKeys: (arr: string[]) => void = () => {}
  export let changeStyleKey:(key: string, value: string) => void = () => {}

  const customBorders = [ 'border-top', 'border-left', 'border-right', 'border-bottom' ]
	let border_type = 'None'

  if (customBorders.some(border => element.styles[border] && element.styles[border] !== 'none')) {
		border_type = 'Custom Borders'
  }
	else if (element.styles.border === 'none') {
		border_type = 'None'
	}
	else if (element.styles.border !== 'none') {
		border_type = 'Border'
	}

	const onChangeBorder = (value: string) => {

		if (value === 'None') {
			deleteStyleKeys(customBorders)
			changeStyleKey('border', 'none')
		}
		else if (value === 'Border') {
			deleteStyleKeys(customBorders)
			changeStyleKey('border', '1px solid #000000')
		}
		else if (value === 'Custom Borders') {
      changeStyleKey('border', 'none')
		}

    // This update the border input value
    border_type = ''
    setTimeout(() => {
      border_type = value
    }, 100)
	}


</script>


<StylesButton title="Border" >


	<div class="input_group">

		<select
			bind:value={border_type}
			on:change={e => onChangeBorder(e.currentTarget.value)}
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

