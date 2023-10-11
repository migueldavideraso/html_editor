<script lang="ts">
  import type { I_Element } from '@/types/main'

  export let element: I_Element
</script>

<section class={element.id} id={element.id}>
  <slot />

  <!-- <span class="id"> {element.id} </span> -->
</section>

<style>
  .id {
    place-content: center;
    background: #e5e5e5;
    position: absolute;
    display: grid;
    top: -5px;
    left: -5px;
    height: 1rem;
    padding: 5px 2px;
    font-size: 0.5rem;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
</style>
