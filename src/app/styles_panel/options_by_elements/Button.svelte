
<script>

	import DefaultButtonStyles from '../style_options/DefaultButtonStyles.svelte'

	import Shadow from '../style_options/box_shadow/Main.svelte'
	import Border from '../style_options/border/Main.svelte'
	import Corner from '../style_options/corner/Main.svelte'
	import Margin from '../style_options/Margin.svelte'
	import Padding from '../style_options/Padding.svelte'
	import Position from '../style_options/Position.svelte'
	import Overflow from '../style_options/Overflow.svelte'

	import CustomButtons from '../CustomButtons.svelte'


	export let element = null

	export let changeStyleKey = () => {}
	export let deleteStyleKeys = () => {}
	export let changeElementKey = () => {}

</script>


<DefaultButtonStyles
	{element}
	{changeStyleKey}
	{changeElementKey}
/>


<Position
	{element}
	{changeStyleKey}
/>

<Border
	{element}
	{changeStyleKey}
	{deleteStyleKeys}
/>

<Shadow
	{element}
	{changeStyleKey}
	{deleteStyleKeys}
/>

<Corner
	{element}
	{changeStyleKey}
	{deleteStyleKeys}
/>

<Padding
	{element}
	{changeStyleKey}
/>

<Margin
	{element}
	{changeStyleKey}
/>

<Overflow
	{element}
	{changeStyleKey}
	{deleteStyleKeys}
/>

<CustomButtons
	{element}
/>



<style>

</style>


