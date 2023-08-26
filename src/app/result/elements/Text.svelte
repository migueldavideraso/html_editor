
<script lang="ts">

	export let element = {}

</script>


<span class="{element.id}" id="{element.id}" >
	{@html element.text || ''}
	<slot />
</span>




<style>

</style>






