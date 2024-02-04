<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../StylesButton.svelte'
  import SizeInputs from '../components/SizeInputs.svelte'
  import NumberInput from '../components/NumberInput.svelte'
  import { getChangeStyleHandler, getStyleKey } from '@/helpers/elements'
  import { getElementState } from '@/global_state/_element'

  export let element: I_Element

  console.log(element)

  const elementStore = getElementState(element.id)
  let allowShow = false

  $: {
    const parentElement = document.getElementById(element.id).parentElement
    const parentElementDisplay = getComputedStyle(parentElement).display

    allowShow = parentElementDisplay === 'flex' || parentElementDisplay === 'inline-flex'

    console.log(parentElementDisplay)
  }
</script>

<!-- This span allows the component still working even if the allowShow variable is false -->
<span style="display: none;" />

{#if allowShow}
  <StylesButton title="Flex Options">
    <div class="input_group">
      <div class="title"> Basis: </div>

      <SizeInputs
        units={['px', '%', 'rem']}
        optionsTypes={['numeric', 'unset']}
        optionValue={getStyleKey(element, 'flex-basis') || ''}
        onChange={getChangeStyleHandler(elementStore, 'flex-basis')}
      />
    </div>

    <div class="input_group">

      <div class="title"> Grow: </div>

      <NumberInput
        onChange={getChangeStyleHandler(elementStore, 'flex-grow')}
        value={getStyleKey(element, 'flex-grow')}
      />

    </div>

    <div class="input_group">

      <div class="title"> Shrink: </div>

      <NumberInput
        onChange={getChangeStyleHandler(elementStore, 'flex-shrink')}
        value={getStyleKey(element, 'flex-shrink')}
      />

    </div>
  </StylesButton>
{/if}

<style>
  .input_group {
    justify-content: space-between;
  }

  .input_group div.title {
    margin: 0px;
  }

  .input_group :global(input) {
    max-width: 100px;
  }
</style>
