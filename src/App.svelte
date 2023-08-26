
<script lang="ts">

	import App from './app/App.svelte'
	import ProofCard from './proof_card/Main.svelte'
	import { allElementsStore } from '@/file_state/sections'
	import { cardsSections, elementsProof, simpleProof } from './data'


	allElementsStore.set(cardsSections.slice(0, 1))

</script>


<App />
<!-- <ProofCard /> -->




