
<script lang="ts">

  import type { I_Element } from "@/types/main";

  export let element: I_Element

</script>


<div class="{element.id}" id="{element.id}" >
	<slot />
</div>





