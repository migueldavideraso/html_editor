<script lang="ts">
  export let title: string = 'Untitled'
</script>

<details>
  <summary class="app--button">
    <i class="fas fa-angle-right" />
    {title}
  </summary>

  <section class="details-container app--options_section">
    <slot />
  </section>
</details>

<style>
  details:hover {
    opacity: 1 !important;
  }

  details > .details-container {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  details > summary:hover {
    opacity: 0.8;
  }

  details > summary {
    font-size: 14px;
    line-height: normal;
    margin: 0 10px;
  }

  details > summary > i {
    transition-duration: 0.5s;
    transition-property: transform;
  }

  details[open] > summary > i {
    transform: rotate(90deg);
  }
</style>
