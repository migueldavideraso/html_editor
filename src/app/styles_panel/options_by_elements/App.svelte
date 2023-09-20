
<script>

	import Border from '../style_options/border/Main.svelte'
	import Corner from '../style_options/corner/Main.svelte'
	import Margin from '../style_options/Margin.svelte'
	import Padding from '../style_options/Padding.svelte'
	import Position from '../style_options/Position.svelte'
	import Overflow from '../style_options/Overflow.svelte'
	import DefaultBoxStyles from '../style_options/DefaultBoxStyles.svelte'

	export let element = null

	export let changeStyleKey = () => {}

</script>


<DefaultBoxStyles
	{element}
	{changeStyleKey}
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
