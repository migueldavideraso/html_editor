<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../StylesButton.svelte'
  import SizeInputs from '../components/SizeInputs.svelte'

  export let changeStyleKey: (key: string, value: string) => void = () => {}
  export let element: I_Element
</script>

<StylesButton title="Position">
  <select value={element.styles.position} on:change={e => changeStyleKey('position', e.currentTarget.value)}>
    <option value="relative"> Relative </option>
    <option value="absolute"> Absolute </option>
    <option value="sticky"> sticky </option>
    <option value="fixed"> Fixed </option>
  </select>

  <section class="elements_grid">
    <div class="input_group">
      <div class="title"> top: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={element.styles.top || ''}
        onChange={value => changeStyleKey('top', value)}
      />
    </div>

    <div class="input_group">
      <div class="title"> bottom: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={element.styles.bottom || ''}
        onChange={value => changeStyleKey('bottom', value)}
      />
    </div>

    <div class="input_group">
      <div class="title"> left: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={element.styles.left || ''}
        onChange={value => changeStyleKey('left', value)}
      />
    </div>

    <div class="input_group">
      <div class="title"> right: </div>

      <SizeInputs
        showOptionTypes={false}
        units={['px', '%', 'rem']}
        optionValue={element.styles.right || ''}
        onChange={value => changeStyleKey('right', value)}
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
