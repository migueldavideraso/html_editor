<script lang="ts">
  import type { I_Element } from '@/types/main'
  import '../color_picker.css'

  import { onMount } from 'svelte'
  import { createEditor, getTextByHtml } from './controller'

  export let element: I_Element
  export let changeElementKey: (key: string, value: string) => void = () => {}

  let editor = null
  let editorElement = null
  let textEditorElement = null
  let editorElementContainer = null

  onMount(() => {
    editorElementContainer = editorElement.parentElement

    editor = createEditor({ editorElementContainer, editorElement })
    editor.on('text-change', function (delta, oldDelta, source) {
      changeElementKey('text', getTextByHtml(textEditorElement.innerHTML))
    })

    textEditorElement = editorElementContainer.querySelector('.ql-editor')
    textEditorElement.className = `${element.id} ql-editor__class ql-blank`
    element.text && (textEditorElement.innerHTML = element.text)
  })

  $: if (editorElementContainer && element) {
    editorElementContainer.style.setProperty('--container_background', element.styles?.['background-color'])
  }

  const setColorPicker = () => {}
</script>

<section class="app--main_options_section">
  <div class="rich_text_container">
    <div bind:this={editorElement}>
      <!-- {@html element.text} -->
    </div>
  </div>
</section>

<style>
  .app--main_options_section {
    position: relative;
    padding: 5px !important;
  }

  .rich_text_container {
    height: 200px;
    --container_background: transparent;
  }

  .rich_text_container :global(.ql-toolbar) {
    border: none;
  }

  .rich_text_container :global(.ql-toolbar [type='button']),
  .rich_text_container :global(.ql-toolbar .ql-picker) {
    width: 25px;
  }

  .rich_text_container :global(.ql-toolbar .ql-size) {
    background-color: rgba(0, 0, 0, 0.1);
    width: 95px;
  }

  .rich_text_container :global(.ql-container) {
    background: var(--container_background);
    overflow: auto;
    height: 170px;
  }

  .rich_text_container :global(.ql-editor__class) {
    outline: none;
    cursor: text;
    width: 100%;
    height: 100%;
  }

  .rich_text_container :global(.ql-editor__class.ql-blank::before) {
    content: attr(data-placeholder);
    pointer-events: none;
    font-style: italic;
    position: absolute;
    left: 15px;
    right: 15px;
    color: rgba(0, 0, 0, 0.6);
  }

  .rich_text_container :global(.ql-color.color_picker),
  .rich_text_container :global(.ql-background.color_picker) {
    position: relative;
  }

  .rich_text_container :global(.ql-color.color_picker svg),
  .rich_text_container :global(.ql-background.color_picker svg) {
    position: absolute;
    top: 0px;
    left: 0px;
    --stroke: #444;
  }

  .rich_text_container :global(.ql-color.color_picker svg *) {
    stroke: var(--stroke);
  }

  .rich_text_container :global(.ql-color.color_picker .pickr),
  .rich_text_container :global(.ql-background.color_picker .pickr) {
    background: none;
    border: none;
    z-index: 1;
    --size: 100%;
  }

  .rich_text_container :global(.ql-color.color_picker .pickr button),
  .rich_text_container :global(.ql-background.color_picker .pickr button) {
    --pcr-color: transparent !important;
  }

  .rich_text_container :global(.ql-color.color_picker .pickr button::before),
  .rich_text_container :global(.ql-background.color_picker .pickr button::before) {
    background: none;
  }
</style>
