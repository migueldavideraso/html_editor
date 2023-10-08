<script lang="ts">
  import { getElementChildrenStore, getElementDataStore, selectedSectionState } from '@/global_state/sections'
  import type { I_Element } from '@/types/main'

  export let elementId: I_Element['id'] = null
  export let showParentItem = () => {}

  let element: I_Element
  let children: I_Element[] = []

  getElementChildrenStore(elementId).subscribe(state => {
    children = state
  })

  getElementDataStore(elementId).subscribe(state => {
    element = state
  })

  let selected = false
  let allow_show_children = false

  selectedSectionState.subscribe(state => {
    if (!selected && state === elementId) {
      selected = true
      showParentItem()
      return
    }

    if (selected && state !== elementId) {
      selected = false
      return
    }
  })

  const select = () => {
    selectedSectionState.set(!selected ? element.id : null)
  }

  const showChildren = (allowShow: boolean) => {
    allow_show_children = allowShow || !allow_show_children
  }

  const _showParentItem = () => {
    showChildren(true)
    showParentItem()
  }
</script>

<div class="item {selected ? 'selected' : ''}">
  {#if children.length}
    <button class="arrow {allow_show_children ? 'open' : 'close'}" on:click={() => showChildren(false)}>
      <span class="fas fa-angle-right" />
    </button>
  {/if}

  <button class="section_name" on:click={select}>
    {element.name}
  </button>
</div>

{#if children.length}
  <div class="children {allow_show_children ? 'show' : 'hide'}">
    {#each children as element (element.id)}
      <svelte:self elementId={element.id} showParentItem={_showParentItem} />
    {/each}
  </div>
{/if}

<style>
  .item {
    align-items: center;
    width: fit-content;
    cursor: default;
    display: flex;
    grid-gap: 5px;
    font-size: 0.8rem;
    padding: 2.5px 10px;
    border-radius: 10px;
  }

  .item.selected {
    color: var(--primary-color);
    background: var(--primary-background);
  }

  .arrow {
    font-size: 1rem;
    font-weight: 900;
  }

  .arrow.open {
    transform: rotate(45deg);
  }

  .arrow:hover,
  .section_name:hover {
    opacity: 0.7;
  }

  .children {
    flex-direction: column;
    width: auto;
    grid-gap: 10px;
    margin-left: 20px;
  }

  .children.show {
    display: flex;
  }

  .children.hide {
    display: none;
  }
</style>
