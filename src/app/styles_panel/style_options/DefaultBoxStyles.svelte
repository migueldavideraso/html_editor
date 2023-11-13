<script lang="ts">
  import type { I_Element } from '@/types/main'

  import ColorPicker from '../components/ColorPicker.svelte'
  import SizeInputs from '../components/SizeInputs.svelte'

  export let changeStyleKey: (key: string, value: string) => void = () => {}
  export let element: I_Element
  export let showFill = true

</script>

<section class="app--main_options_section {showFill ? 'show-fill' : ''}">
  <section class="row">

    {#if showFill}
      <span class="title"> Fill </span>
    {/if}

    <span class="title"> Width </span>
    <span class="title"> Height </span>
  </section>

  <section class="row">

    {#if showFill}
      <ColorPicker color={element.styles['background-color']} onChange={value => changeStyleKey('background-color', value)} />
    {/if}

    <SizeInputs units={['px', '%', 'rem']} optionValue={element.styles.width || ''} onChange={value => changeStyleKey('width', value)} />

    <SizeInputs units={['px', '%', 'rem']} optionValue={element.styles.height || ''} onChange={value => changeStyleKey('height', value)} />
  </section>
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
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  .app--main_options_section.show-fill .row {
    grid-template-columns: 35px repeat(2, minmax(100px, 1fr));
  }

  .row :global(input.custom_input) {
    max-width: 100%;
  }
</style>
