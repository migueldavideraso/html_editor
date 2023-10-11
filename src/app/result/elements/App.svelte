<script lang="ts">
  import type { I_Element } from '@/types/main'

  export let element: I_Element
</script>

<section class="app {element.id}">
  <slot />
</section>

<style>
</style>
