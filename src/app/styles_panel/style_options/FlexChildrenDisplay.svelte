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

<StylesButton title="Display of child elements">
  <div class="input_group">
    <div class="title"> Direction: </div>

    <Select
      value={getStyleKey(element, 'flex-direction')}
      onChange={getChangeStyleHandler(elementStore, 'flex-direction')}
    >
      <Option value="row" text="row" />
      <Option value="row-reverse" text="row reverse" />
      <Option value="column" text="column" />
      <Option value="column-reverse" text="column reverse" />
    </Select>
  </div>

  <div class="input_group">
    <div class="title"> Gap: </div>

    <SizeInputs
      units={['px', '%', 'rem']}
      showOptionTypes={false}
      optionValue={getStyleKey(element, 'grid-gap')}
      onChange={getChangeStyleHandler(elementStore, 'grid-gap')}
    />
  </div>

  <div class="input_group">
    <div class="title"> Wrap: </div>

    <Select
      value={getStyleKey(element, 'flex-wrap')}
      onChange={getChangeStyleHandler(elementStore, 'flex-wrap')}
    >
      <Option value="unset" text="unset" />
      <Option value="nowrap" text="nowrap" />
      <Option value="wrap" text="wrap" />
      <Option value="wrap-reverse" text="wrap-reverse" />
    </Select>
  </div>

  <div class="input_group">
    <div class="title"> Align: </div>

    <Select
      value={getStyleKey(element, 'align-content')}
      onChange={getChangeStyleHandler(elementStore, 'align-content')}
    >
      <Option value="unset" text="unset" />
      <Option value="flex-start" text="start" />
      <Option value="center" text="center" />
      <Option value="flex-end" text="end" />
    </Select>
  </div>

  <div class="input_group">
    <div class="title"> Justify: </div>

    <Select
      value={getStyleKey(element, 'justify-content')}
      onChange={getChangeStyleHandler(elementStore, 'justify-content')}
    >
      <Option value="unset" text="unset" />
      <Option value="flex-start" text="start" />
      <Option value="center" text="center" />
      <Option value="flex-end" text="end" />
    </Select>
  </div>
</StylesButton>

<style>
  .input_group {
    justify-content: space-between;
  }

  .input_group div.title {
    margin: 0px;
  }
</style>
