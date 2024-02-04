<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../../StylesButton.svelte'
  import BorderInput from './BorderInput.svelte'
  import { getElementState } from '@/global_state/_element'
  import { getChangeStyleHandler, getStyleKey } from '@/helpers/elements'

  export let element: I_Element

  const elementStore = getElementState(element.id)

  const customBorders = ['border-top', 'border-left', 'border-right', 'border-bottom']
  let border_type = 'None'

  function existCustomBorder (border: string) {
    return element.styles[border] && element.styles[border] !== 'none'
  }

  if (customBorders.some(existCustomBorder)) {
    border_type = 'Custom Borders'
  } else if (element.styles.border === 'none') {
    border_type = 'None'
  } else if (element.styles.border !== 'none') {
    border_type = 'Border'
  }

  const onChangeBorder = (value: string) => {
    if (value === 'None') {
      elementStore.deleteStyles(customBorders)
      elementStore.changeStyles([['border', 'none']])
    } else if (value === 'Border') {
      elementStore.deleteStyles(customBorders)
      elementStore.changeStyles([['border', '1px solid #000000']])
    } else if (value === 'Custom Borders') {
      elementStore.changeStyles([['border', 'none']])
    }

    // This update the border input value
    border_type = ''
    setTimeout(() => {
      border_type = value
    }, 100)
  }
</script>

<StylesButton title="Border">
  <div class="input_group">
    <select
      bind:value={border_type}
      on:change={e => onChangeBorder(e.currentTarget.value)}
    >
      <option>None</option>
      <option>Border</option>
      <option>Custom Borders</option>
    </select>
  </div>

  {#if border_type === 'Border'}

    <BorderInput
      value={getStyleKey(element, 'border')}
      onChange={getChangeStyleHandler(elementStore, 'border')}
    />

  {:else if border_type === 'Custom Borders'}

    <BorderInput
      title="top:"
      value={getStyleKey(element, 'border-top')}
      onChange={getChangeStyleHandler(elementStore, 'border-top')}
    />

    <BorderInput
      title="bottom:"
      value={getStyleKey(element, 'border-bottom')}
      onChange={getChangeStyleHandler(elementStore, 'border-bottom')}
    />

    <BorderInput
      title="left:"
      value={getStyleKey(element, 'border-left')}
      onChange={getChangeStyleHandler(elementStore, 'border-left')}
    />

    <BorderInput
      title="right:"
      value={getStyleKey(element, 'border-right')}
      onChange={getChangeStyleHandler(elementStore, 'border-right')}
    />

  {/if}
</StylesButton>

<style>
</style>
