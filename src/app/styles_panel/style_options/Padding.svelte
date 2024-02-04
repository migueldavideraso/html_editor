<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../StylesButton.svelte'
  import SizeInputs from '../components/SizeInputs.svelte'

  import { getChangeStyleHandler, getStyleKey } from '@/helpers/elements'
  import { getElementState } from '@/global_state/_element'

  export let element: I_Element

  const elementStore = getElementState(element.id)

</script>

<StylesButton title="Padding">
  <section class="elements_grid">
    <div class="input_group">
      <div class="title"> padding top: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={getStyleKey(element, 'padding-top')}
        onChange={getChangeStyleHandler(elementStore, 'padding-top')}
      />
    </div>

    <div class="input_group">
      <div class="title"> padding bottom: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={getStyleKey(element, 'padding-bottom')}
        onChange={getChangeStyleHandler(elementStore, 'padding-bottom')}
      />
    </div>

    <div class="input_group">
      <div class="title"> padding left: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={getStyleKey(element, 'padding-left')}
        onChange={getChangeStyleHandler(elementStore, 'padding-left')}
      />
    </div>

    <div class="input_group">
      <div class="title"> padding right: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={getStyleKey(element, 'padding-right')}
        onChange={getChangeStyleHandler(elementStore, 'padding-right')}
      />
    </div>
  </section>
</StylesButton>
