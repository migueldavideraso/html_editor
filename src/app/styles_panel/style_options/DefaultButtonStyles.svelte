<script lang="ts">
  import type { I_Element } from '@/types/main'

  import ColorPicker from '../components/ColorPicker.svelte'
  import SizeInputs from '../components/SizeInputs.svelte'

  export let changeElementKey: (key: string, value: string) => void = () => {}

  export let changeStyleKey: (key: string, value: string) => void = () => {}
  export let element: I_Element
</script>

<section class="app--main_options_section">
  <section class="row">
    <span class="title"> Fill </span>
    <span class="title"> Width </span>
    <span class="title"> Height </span>
  </section>

  <section class="row">
    <ColorPicker color={element.styles['background-color']} onChange={value => changeStyleKey('background-color', value)} />

    <SizeInputs units={['px', '%', 'rem']} optionValue={element.styles.width || ''} onChange={value => changeStyleKey('width', value)} />

    <SizeInputs units={['px', '%', 'rem']} optionValue={element.styles.height || ''} onChange={value => changeStyleKey('height', value)} />
  </section>

  <section class="row">
    <span class="title"> Text </span>
  </section>

  <input class="text_input" value={element.text} on:input={e => changeElementKey('text', e.currentTarget.value)} />
</section>

<style>
  .app--main_options_section {
    padding: 2px 5px !important;
  }

  .title {
    justify-content: space-between;
    display: flex;
    margin: 0px !important;
  }

  .row {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 35px repeat(2, minmax(100px, 1fr));
  }

  .row :global(input.custom_input) {
    max-width: 100%;
  }

  .text_input {
    max-width: unset !important;
    width: 100%;
    margin-bottom: 5px;
    padding: 3.5px 7.5px !important;
  }
</style>
