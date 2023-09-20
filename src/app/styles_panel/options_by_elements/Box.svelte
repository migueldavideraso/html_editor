
<script>

	import Border from '../style_options/border/Main.svelte'
	import Shadow from '../style_options/box_shadow/Main.svelte'
	import Corner from '../style_options/corner/Main.svelte'
	import Margin from '../style_options/Margin.svelte'
	import Padding from '../style_options/Padding.svelte'
	import Position from '../style_options/Position.svelte'
	import Overflow from '../style_options/Overflow.svelte'
	import DefaultBoxStyles from '../style_options/DefaultBoxStyles.svelte'
	import FlexOptions from '../style_options/Flex.svelte'

	import CustomButtons from '../CustomButtons.svelte'


	export let element = null

	export let changeStyleKey = () => {}
	export let deleteStyleKeys = () => {}

</script>


<DefaultBoxStyles
	{element}
	{changeStyleKey}
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
/>

<FlexOptions
	{element}
	{changeStyleKey}
/>

<CustomButtons
	{element}
/>


