
<script>

	import { onMount, onDestroy } from 'svelte'
	import { colorPickerSettings } from './settings'

	import Pickr from '@simonwep/pickr'

	import '@simonwep/pickr/dist/themes/classic.min.css'
	import './color_picker.css'

	export let color = null
	export let onChange = () => {}

	let picker = null
	let pickerElement = null

	onMount(() => {

		picker = Pickr.create({
			default: color,
			el: pickerElement,
			...colorPickerSettings,
		})

		picker.on('change', (color, source, instance) => {
			onChange(color.toHEXA().toString())
		})

		picker.on('cancel', instance => {
			picker.hide()
		})
	})

	onDestroy(() => {
		picker.destroyAndRemove()
	})


	$: if (picker && color) {
		picker.setColor(color)
	}

</script>



<div bind:this={pickerElement} />



<style>


</style>

