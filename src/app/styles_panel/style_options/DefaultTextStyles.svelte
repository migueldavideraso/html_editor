
<script lang="ts">

  import type { I_Element } from '@/types/main';

	import TextEditor from '../components/text_editor/Main.svelte'
	import DefaultBoxStyles from './DefaultBoxStyles.svelte'

	export let changeStyleKey = () => {}
	export let changeElementKey = () => {}

	export let element: I_Element

</script>

<DefaultBoxStyles
	{element}
	{changeStyleKey}
/>

<TextEditor
	{element}
	{changeElementKey}
/>
