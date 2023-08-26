
<script>

	import SizeInputs from '../../components/SizeInputs.svelte'

	export let value = ''
	export let title = ''
	export let onChange = () => {}

</script>

<div class="input_group">

	{#if title}
		<div class="title"> {title} </div>
	{/if}

	<SizeInputs
		{onChange}
		showOptionTypes={false}
		optionValue={value || ''}
		units={[ 'px', '%', 'rem' ]}
	/>

</div>


<style>

	.title {
		min-width: 100%;
	}

	.input_group :global(input) {
		max-width: 50px !important;
	}

</style>