<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../../StylesButton.svelte'
  import CornerInput from './CornerInput.svelte'
  import { getElementState } from '@/global_state/_element'
  import { getChangeStyleHandler, getStyleKey } from '@/helpers/elements'

  export let element: I_Element

  const corners = ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius']
  const elementStore = getElementState(element.id)

  let corner_type = 'None'

  if (getStyleKey(element, 'border-radius') === 'none') {
    corner_type = 'None'
  } else if (getStyleKey(element, 'border-radius') !== 'none') {
    corner_type = 'Corner'
  } else {
    corner_type = 'Custom Corners'
  }

  const onChangeCorner = (value: string) => {

    if (value === 'None') {
      elementStore.deleteStyles(corners)
      elementStore.changeStyles([ ['border-radius', 'none'] ])
      return
    }
    
    if (value === 'Corner') {
      elementStore.changeStyles([ ['border-radius', ''] ])
      elementStore.deleteStyles(corners)
      return
    }

    elementStore.changeStyles([ ['border-radius', 'none'] ])
  }
</script>

<StylesButton title="Corner">
  <div class="input_group">
    <select bind:value={corner_type} on:change={e => onChangeCorner(e.currentTarget.value)}>
      <option>None</option>
      <option>Corner</option>
      <option>Custom Corners</option>
    </select>
  </div>

  {#if corner_type === 'Corner'}

    <CornerInput value={getStyleKey(element, 'border-radius')}
      onChange={getChangeStyleHandler(elementStore, 'border-radius')}
    />
  {:else if corner_type === 'Custom Corners'}

    <section class="elements_grid">

      <CornerInput
        title="top left:"
        value={getStyleKey(element, 'border-top-left-radius')}
        onChange={getChangeStyleHandler(elementStore, 'border-top-left-radius')}
      />

      <CornerInput
        title="top right:"
        value={getStyleKey(element, 'border-top-right-radius')}
        onChange={getChangeStyleHandler(elementStore, 'border-top-right-radius')}
      />

      <CornerInput
        title="bottom left:"
        value={getStyleKey(element, 'border-bottom-left-radius')}
        onChange={getChangeStyleHandler(elementStore, 'border-bottom-left-radius')}
      />

      <CornerInput
        title="bottom right:"
        value={getStyleKey(element, 'border-bottom-right-radius')}
        onChange={getChangeStyleHandler(elementStore, 'border-bottom-right-radius')}
      />
    </section>
  {/if}
</StylesButton>

<style>
  .elements_grid :global(.input_group) {
    padding: 0px 10px 7.5px !important;
  }

  .elements_grid :global(.input_group:nth-child(1)) {
    border-top-left-radius: 10px;
  }

  .elements_grid :global(.input_group:nth-child(2)) {
    border-top-right-radius: 10px;
  }

  .elements_grid :global(.input_group:nth-child(3)) {
    border-bottom-left-radius: 10px;
  }

  .elements_grid :global(.input_group:nth-child(4)) {
    border-bottom-right-radius: 10px;
  }
</style>
