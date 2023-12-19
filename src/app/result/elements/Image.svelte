<script lang="ts">
  import type { I_Element } from '@/types/main'
  export let element: I_Element

  $: attr = element.attributes
</script>

<div class={element.id} id={element.id}>
  <slot />
  <!-- svelte-ignore a11y-missing-attribute -->
  <img {...attr} />
</div>

<style>
  img {
    width: -webkit-fill-available;
    height: -webkit-fill-available;
  }
</style>
