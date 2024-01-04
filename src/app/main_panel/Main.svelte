<script>
  import { addElementModalState } from '@/global_state/modals'
  import { setMoveController } from '@/helpers/move_element'

  import AddElementDropdown from '@/app/components/add_element/Main.svelte'
  import Icon from '../components/Icon.svelte'

  let moveElement = null
  let wrapperElement = null
  let isOptionsShowing = true

  $: if (moveElement && !wrapperElement) {
    wrapperElement = document.getElementById('html_editor_app')

    setMoveController({
      moveElement,
      wrapperElement,
      element: moveElement,
    })
  }
</script>

<AddElementDropdown />

<section class="global_panel {isOptionsShowing ? 'show' : 'hide'}" bind:this={moveElement}>
  {#if isOptionsShowing}
    <button title="Add Element" on:click={() => addElementModalState.open()}>
      <Icon iconName="plus" />
    </button>

    <button title="Sections">
      <Icon iconName="chart-dots-3" />
    </button>

    <button title="Global styles">
      <Icon iconName="world" />
    </button>

    <button title="Save desing"> Save desing </button>
  {/if}

  <button title={isOptionsShowing ? 'Hide' : 'Show'} on:click={() => (isOptionsShowing = !isOptionsShowing)}>
    {#if isOptionsShowing}
      <Icon iconName="eye-closed" />
    {:else}
      <Icon iconName="eye" />
    {/if}
  </button>
</section>

<style>
  .global_panel {
    background-color: #fafafa;
    justify-content: space-around;
    align-items: center;
    display: flex;
    height: auto;
    width: auto;
    grid-gap: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    z-index: var(--panel-z-index);
    border: 1px solid rgba(0, 0, 0, 0.15);

    /* Disable Select ------------ */

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* Disable Select ------------ */
  }

  .global_panel.show {
    min-width: min(200px, 100%);
  }

  button {
    background-color: #ffffff;
    place-content: center;
    white-space: pre;
    display: grid;
    border: none;
    padding: 10px;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    transition: transform 0.5s ease;
  }

  button:has(svg) {
    border-radius: 50%;
  }

  :global(.global_panel > button > svg) {
    height: 18px;
    width: 18px;
  }
</style>
