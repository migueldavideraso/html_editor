<script lang="ts">
  import type { I_Element } from '@/types/main'
  import { setElement as setFileElement } from '@/file_state/sections'
  import Options from './options_by_elements/Options.svelte'

  export let element: I_Element

  let _element = null
  let showOptions = false

  $: if (_element?.id !== element?.id) {
    showOptions = false

    setTimeout(function () {
      _element = element
      showOptions = true
    }, 100)
  }

  const changeElementKey = (key: string, value: string) => {
    setFileElement(element.id, {
      ...element,
      [key]: value,
    })
  }

  const changeStyleKey = (key: string, value: string) => {
    setFileElement(element.id, {
      ...element,
      styles: {
        ...element.styles,
        [key]: value,
      },
    })
  }

  const deleteStyleKeys = (keys: string[]) => {
    element.styles = element.styles || {}

    keys.forEach(key => {
      delete element.styles[key]
    })

    setFileElement(element.id, {
      ...element,
      styles: element.styles,
    })
  }
</script>

<section class="styles_section">
  {#if showOptions}
    <Options {element} {changeStyleKey} {deleteStyleKeys} {changeElementKey} />
  {/if}
</section>

<style>
  .styles_section {
    flex-direction: column;
    height: inherit;
    overflow: auto;
    flex: auto;
    display: flex;
    grid-gap: 10px;
  }

  .styles_section :global(.elements_grid) {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2, 1fr);
  }

  .styles_section :global(.elements_grid .input_group) {
    align-items: flex-start;
    background: #c5c5c5;
    padding: 3px 5px;
    border-radius: 3px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 10%);
  }
</style>
