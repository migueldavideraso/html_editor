<script lang="ts">
  import Icon from '@/app/components/Icon.svelte'

  export let title: string = 'Untitled'
</script>

<details class="select">
  <summary class="app--button select_header">
    <Icon iconName="chevron-right" class="icon" />
    {title}
  </summary>

  <section class="details-container app--options_section">
    <slot />
  </section>
</details>

<style>
  .select:hover {
    opacity: 1 !important;
  }

  .select > .details-container {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .select > .select_header:hover {
    opacity: 0.8;
  }

  .select > .select_header {
    font-size: 14px;
    line-height: normal;
    margin: 0 10px;
  }

  :global(.select > .select_header > .icon) {
    transition-duration: 0.5s;
    transition-property: transform;
  }

  :global(.select[open] > .select_header > .icon) {
    transform: rotate(90deg);
  }
</style>
