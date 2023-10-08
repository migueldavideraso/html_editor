<script lang="ts">
  import { getUnitByStyleKey, getValueByStyleKey, isStyleValueNumeric } from '@/helpers/main'
  import type { T_Unit } from '@/types/main'

  export let onChange: (val: string) => void = () => {}
  export let showOptionTypes = true
  export let optionValue = ''
  export let units: T_Unit[] = ['px', 'rem', '%']
  export let optionsTypes = ['numeric', 'custom', 'unset', 'auto']

  const inputs: { [key: string]: HTMLInputElement | HTMLSelectElement } = {}

  let optionType = 'custom'

  if (optionValue === 'auto' || optionValue === 'unset') {
    optionType = optionValue
  } else if (isStyleValueNumeric(optionValue)) {
    optionType = 'numeric'
  }

  const changeInput = () => {
    onChange(`${inputs.value.value}${inputs.unit.value}`)
  }

  const onChangeOptionsSelect = value => {
    if (value === 'unset' || value === 'auto') {
      onChange(value)
      return
    }
  }
</script>

<section class="inputs_group">
  {#if optionType === 'numeric'}
    <input type="number" bind:this={inputs.value} on:input={() => changeInput()} value={parseFloat(getValueByStyleKey(optionValue))} />

    <select class="units_select" bind:this={inputs.unit} on:change={() => changeInput()} value={getUnitByStyleKey(optionValue) || 'px'}>
      {#each units as unit (unit)}
        <option value={unit}>{unit}</option>
      {/each}
    </select>
  {:else if optionType === 'custom'}
    <input class="custom_input" value={optionValue} on:input={e => onChange(e.currentTarget.value)} />
  {:else}
    <input value={optionValue} readonly />
  {/if}

  {#if showOptionTypes}
    <select class="options_select" bind:value={optionType} on:change={e => onChangeOptionsSelect(e.currentTarget.value)}>
      {#each optionsTypes as options (options)}
        <option>{options}</option>
      {/each}
    </select>
  {/if}
</section>

<style>
  section.inputs_group {
    align-items: center;
    display: flex;
    grid-gap: 2.5px;
  }

  input.custom_input {
    max-width: calc(100% - 22.5px) !important;
  }

  select.options_select {
    width: 20px;
  }

  select.units_select {
    width: 42.5px;
  }
</style>
