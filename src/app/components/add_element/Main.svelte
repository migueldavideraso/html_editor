<script>
  import { addElementModalState } from '@/global_state/modals'

  import Header from './Header.svelte'
  import Content from './Content.svelte'

  let isOpen = false
  let isMinified = false
  let panelElement = null

  addElementModalState.subscribe(state => {
    isOpen = state.isOpen
  })

  $: if (isOpen && panelElement) {
    panelElement.style.display = ''
  }

  $: if (!isOpen && panelElement) {
    panelElement.style.display = 'none'
  }
</script>

<section class="add_element_panel" bind:this={panelElement}>
  <Header {panelElement} bind:isMinified />

  {#if !isMinified}
    <div class="info"> Drag the element </div>

    <Content />
  {/if}
</section>

<style>
  .add_element_panel {
    background-color: #ffffff;
    flex-direction: column;
    overflow: hidden;
    position: fixed;
    display: flex;
    top: 75px;
    left: 30px;
    width: 300px;
    grid-gap: 10px;
    padding-bottom: 10px;
    border-radius: 7.5px;
    max-height: calc(100% - 40px);

    border: var(--main-border);
    z-index: var(--panel-z-index);
    box-shadow: var(--box-shadow);

    /* Disable Select ------------ */

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* Disable Select ------------ */
  }

  .info {
    font-style: italic;
    font-size: 0.8rem;
    margin: 0px 10px;
  }
</style>
