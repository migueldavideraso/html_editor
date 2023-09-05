
<script lang="ts">

import type { I_Element } from "@/types/main";

export let element: I_Element

</script>


<span class="{element.id}" id="{element.id}" >
	{@html element.text || ''}
	<slot />
</span>




<style>

</style>






