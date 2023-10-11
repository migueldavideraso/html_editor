<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../StylesButton.svelte'
  import SizeInputs from '../components/SizeInputs.svelte'

  export let changeStyleKey: (key: string, value: string) => void = () => {}
  export let element: I_Element
</script>

<StylesButton title="Display of child elements">
  <div class="input_group">
    <div class="title"> Direction: </div>

    <select bind:value={element.styles['flex-direction']} on:change={e => changeStyleKey('flex-direction', e.currentTarget.value)}>
      <option value="row"> row </option>
      <option value="row-reverse"> row reverse </option>
      <option value="column"> column </option>
      <option value="column-reverse"> column reverse </option>
    </select>
  </div>

  <div class="input_group">
    <div class="title"> Gap: </div>

    <SizeInputs
      units={['px', '%', 'rem']}
      showOptionTypes={false}
      optionValue={element.styles['grid-gap'] || ''}
      onChange={value => changeStyleKey('grid-gap', value)}
    />
  </div>

  <div class="input_group">
    <div class="title"> Wrap: </div>

    <select bind:value={element.styles['flex-wrap']} on:change={e => changeStyleKey('flex-wrap', e.currentTarget.value)}>
      <option value="unset"> unset </option>
      <option value="nowrap"> nowrap </option>
      <option value="wrap"> wrap </option>
      <option value="wrap-reverse"> wrap-reverse </option>
    </select>
  </div>

  <div class="input_group">
    <div class="title"> Align: </div>

    <select bind:value={element.styles['align-content']} on:change={e => changeStyleKey('align-content', e.currentTarget.value)}>
      <option value="unset"> unset </option>
      <option value="flex-start"> start </option>
      <option value="center"> center </option>
      <option value="flex-end"> end </option>
    </select>
  </div>

  <div class="input_group">
    <div class="title"> Justify: </div>

    <select bind:value={element.styles['justify-content']} on:change={e => changeStyleKey('justify-content', e.currentTarget.value)}>
      <option value="unset"> unset </option>
      <option value="flex-start"> start </option>
      <option value="center"> center </option>
      <option value="flex-end"> end </option>
    </select>
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
