
<script lang="ts">

	export let element = {}

</script>


<button class="{element.id}" id="{element.id}" >

	{#if element.text}
		{element.text}
	{/if}

	<slot />
</button>

