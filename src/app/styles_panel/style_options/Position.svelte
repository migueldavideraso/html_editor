<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../StylesButton.svelte'
  import SizeInputs from '../components/SizeInputs.svelte'
  import Select from '../components/select/Select.svelte'
  import Option from '../components/select/Option.svelte'
  import { getChangeStyleHandler, getStyleKey } from '@/helpers/elements'
  import { getElementState } from '@/global_state/_element'

  export let element: I_Element

  const elementStore = getElementState(element.id)

</script>

<StylesButton title="Position">

  <Select
    value={getStyleKey(element, 'position')}
    onChange={getChangeStyleHandler(elementStore, 'position')}
  >
    <Option value="relative" text="Relative" />
    <Option value="absolute" text="Absolute" />
    <Option value="sticky" text="sticky" />
    <Option value="fixed" text="Fixed" />
  </Select>

  <section class="elements_grid">
    <div class="input_group">
      <div class="title"> top: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={getStyleKey(element, 'top')}
        onChange={getChangeStyleHandler(elementStore, 'top')}
      />
    </div>

    <div class="input_group">
      <div class="title"> bottom: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={getStyleKey(element, 'bottom')}
        onChange={getChangeStyleHandler(elementStore, 'bottom')}
      />
    </div>

    <div class="input_group">
      <div class="title"> left: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={getStyleKey(element, 'left')}
        onChange={getChangeStyleHandler(elementStore, 'left')}
      />
    </div>

    <div class="input_group">
      <div class="title"> right: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={getStyleKey(element, 'right')}
        onChange={getChangeStyleHandler(elementStore, 'right')}
      />
    </div>
  </section>
</StylesButton>

<style>
  .elements_grid {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
