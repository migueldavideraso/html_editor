
<script lang="ts">

  import type { I_Element } from "@/types/main";

  export let element: I_Element

</script>


<div class="{element.id}" id="{element.id}" >
  <slot />
	<img src={element.attributes?.src} alt={element.attributes?.alt}>
</div>



<style>
  img {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
  }
</style>

