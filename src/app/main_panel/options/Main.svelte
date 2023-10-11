<script>
  import ElemenentsTree from './ElementsTree.svelte'

  export let isOptionsShowing = true
</script>

<section class="options_section {isOptionsShowing ? 'show' : ''}">
  <div class="options_section_continer">
    <button class="app--button">
      <span class="fas fa-globe" /> Global Styles
    </button>

    <button class="app--button">
      <span class="fas fa-download" /> Export
    </button>

    <ElemenentsTree />
  </div>
</section>

<style>
  .options_section {
    background-color: #ffffff;
    overflow: hidden;
    height: inherit;
    flex: auto;
    left: 0px;
    width: 0px;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    animation: options_section_animation_hide 1s;
  }

  .options_section_continer {
    flex-direction: column;
    white-space: pre;
    overflow: auto;
    height: 100%;
    display: flex;
    grid-gap: 10px;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 0px 10px;
  }

  .options_section.show {
    width: 250px;
    padding: 15px 5px;
    animation: options_section_animation_show 1s;
  }

  @keyframes options_section_animation_show {
    0% {
      width: 0px;
      padding: 0px;
    }
    100% {
      width: 250px;
      padding: 15px 5px;
    }
  }

  @keyframes options_section_animation_hide {
    0% {
      width: 250px;
      padding: 15px 5px;
    }
    100% {
      width: 0px;
      padding: 0px;
    }
  }
</style>
