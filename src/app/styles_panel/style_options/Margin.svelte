<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../StylesButton.svelte'
  import SizeInputs from '../components/SizeInputs.svelte'

  import { getChangeStyleHandler, getStyleKey } from '@/helpers/elements'
  import { getElementState } from '@/global_state/_element'

  export let element: I_Element

  const elementStore = getElementState(element.id)

</script>

<StylesButton title="Margin">
  <section class="elements_grid">
    <div class="input_group">
      <div class="title"> margin top: </div>

      <SizeInputs
        units={['px', '%', 'rem']}
        optionsTypes={['numeric', 'unset', 'auto']}
        optionValue={getStyleKey(element, 'margin-top')}
        onChange={getChangeStyleHandler(elementStore, 'margin-top')}
      />
    </div>

    <div class="input_group">
      <div class="title"> margin bottom: </div>

      <SizeInputs
        units={['px', '%', 'rem']}
        optionsTypes={['numeric', 'unset', 'auto']}
        optionValue={getStyleKey(element, 'margin-bottom')}
        onChange={getChangeStyleHandler(elementStore, 'margin-bottom')}
      />
    </div>

    <div class="input_group">
      <div class="title"> margin left: </div>

      <SizeInputs
        units={['px', '%', 'rem']}
        optionsTypes={['numeric', 'unset', 'auto']}
        optionValue={getStyleKey(element, 'margin-left')}
        onChange={getChangeStyleHandler(elementStore, 'margin-left')}
      />
    </div>

    <div class="input_group">
      <div class="title"> margin right: </div>

      <SizeInputs
        units={['px', '%', 'rem']}
        optionsTypes={['numeric', 'unset', 'auto']}
        optionValue={getStyleKey(element, 'margin-right')}
        onChange={getChangeStyleHandler(elementStore, 'margin-right')}
      />
    </div>
  </section>
</StylesButton>

<style>
</style>
