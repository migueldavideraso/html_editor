<script lang="ts">
  import type { I_Element } from '@/types/main'

  export let element: I_Element
</script>

<button class={element.id} id={element.id}>
  {#if element.text}
    {element.text}
  {/if}

  <slot />
</button>
