<script>
  import Icon from '../components/Icon.svelte'

  export let title = ''

  let isCollapsed = false

  const setCollapse = () => {
    isCollapsed = !isCollapsed
  }
</script>

<section class="styles_content">
  <button class="app--button" on:click={setCollapse}>
    <span class=" {isCollapsed ? 'collaped' : ''}">
      <Icon iconName="chevron-right" />
    </span>
    {title}
  </button>

  {#if isCollapsed}
    <section class="app--options_section">
      <slot />
    </section>
  {/if}
</section>

<style>
  .styles_content {
    flex-direction: column;
    display: flex;
  }

  .app--button {
    margin: 0px 10px;
  }

  .app--button span {
    transition: transform 0.3s linear;
  }

  .app--button span.collaped {
    transform: rotate(90deg);
  }

  .app--options_section {
    flex-direction: column;
    overflow: auto;
    display: flex;
    grid-gap: 7.5px;
  }
</style>
