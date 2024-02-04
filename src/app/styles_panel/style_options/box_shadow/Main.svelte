<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../../StylesButton.svelte'
  import Item from './Item.svelte'
  import { getElementState } from '@/global_state/_element'

  export let element: I_Element

  const elementStore = getElementState(element.id)
  const boxShadow = element?.styles?.['box-shadow']

  let items = boxShadow ? boxShadow.split(',') : []

  const addItem = () => {
    items = [...items, '0px 0px 2px 0px  #00000055']
  }

  $: if (items.length) {
    const value = items.join(',')
    elementStore.changeStyles([['box-shadow', value]])
  } else {
    elementStore.deleteStyles(['box-shadow'])
  }
</script>

<StylesButton title="Shadow">
  <button class="app_class--button btn-icon fas fa-plus" on:click={addItem} />

  {#if items.length}
    <div class="input_group header">
      <span> xAxis </span>
      <span> yAxis </span>
      <span> blur </span>
      <span> spread </span>
      <span class="type"> type </span>
      <span> color </span>
    </div>
  {/if}

  {#each items as item}
    <Item bind:item />
  {/each}
</StylesButton>

<style>
  button.app_class--button {
    margin-left: auto;
    --size: 25px;
  }

  .header.input_group {
    justify-content: space-between;
    font-size: 0.8rem;
  }

  .header.input_group span {
    text-align: center;
  }

  .header.input_group span.type {
    min-width: 50px;
  }
</style>
