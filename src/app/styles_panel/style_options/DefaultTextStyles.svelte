
<script>

	import ColorPicker from '../components/ColorPicker.svelte'
	import SizeInputs from '../components/SizeInputs.svelte'
	import TextEditor from '../components/text_editor/Main.svelte'

	import DefaultBoxStyles from './DefaultBoxStyles.svelte'

	export let changeStyleKey = () => {}
	export let changeElementKey = () => {}

	export let element = {}

</script>


<DefaultBoxStyles
	{element}
	{changeStyleKey}
/>



<TextEditor
	{element}
	{changeElementKey}
/>


<style>

</style>

