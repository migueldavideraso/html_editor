<script lang="ts">
  import MainPanel from './main_panel/Main.svelte'
  import Result from './result/Main.svelte'
  import StylesPanel from './styles_panel/Main.svelte'

  let wrapperElement = null
</script>

<div class="main_container">
  <main class="container_app" id="html_editor_app" bind:this={wrapperElement}>
    <Result />
  </main>

  <aside>
    <MainPanel />

    {#if wrapperElement}
      <StylesPanel {wrapperElement} />
    {/if}
  </aside>
</div>

<style>
  .main_container {
    overflow: hidden;
    display: grid;
    height: 100%;
    border-radius: 5px;
    grid-template-columns: 1fr auto;
    border: 1px solid rgb(172, 173, 188);
  }

  .main_container > main,
  .main_container > aside {
    height: 100%;
  }

  .main_container > aside {
    border-left-style: solid;
    flex-direction: column;
    overflow-y: auto;
    display: flex;
    z-index: 1;
    gap: 10px;
    padding: 10px;
    min-width: 360px;
    background: #eaebf2;
    border-left-width: 1px;
    border-left-color: rgb(172, 173, 188);
  }

  .container_app {
    justify-content: center;
    background: #e6e7ee;
    align-items: center;
    position: relative;
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    color: rgba(0, 0, 0, 0.8);
  }

  .main_container :global(.app--button) {
    justify-content: flex-start;
    background: transparent;
    align-items: center;
    display: flex;
    grid-gap: 5px;
    border-radius: 5px;
    padding: 10px 12.5px;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  .main_container :global(.app--button:hover) {
    opacity: 0.8;
  }

  .main_container :global(.app--options_section) {
    position: relative;
    padding: 10px;
    min-height: 30px;
    margin: 0px 20px;
    border-radius: 0px 0px 5px 5px;
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-top: none;
  }

  .main_container :global(.app--main_options_section) {
    padding: 10px;
    margin: 0px 10px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  .main_container :global(.app--main_options_section .main_title),
  .main_container :global(.app--options_section .main_title) {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0px -5px -10px;
  }

  .main_container :global(.app--main_options_section .title),
  .main_container :global(.app--options_section .title) {
    font-size: 0.78rem;
    margin-bottom: -10px;
  }

  .main_container :global(.app--main_options_section .input_group),
  .main_container :global(.app--options_section .input_group) {
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    grid-gap: 5px;
  }

  .main_container :global(.app--main_options_section textarea),
  .main_container :global(.app--main_options_section select),
  .main_container :global(.app--main_options_section input),
  .main_container :global(.app--options_section textarea),
  .main_container :global(.app--options_section select),
  .main_container :global(.app--options_section input) {
    border: none;
    padding: 2px;
    font-size: 0.8rem;
    border-radius: 3px;
    color: rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 3px rgb(0 0 0 / 20%);
  }

  .main_container :global(.app--main_options_section textarea),
  .main_container :global(.app--options_section textarea) {
    font-family: inherit;
    resize: vertical;
    width: 100%;
    height: 25px;
    padding: 5px;
    max-width: 100%;
    min-height: 25px;
  }

  .main_container :global(.app--main_options_section input),
  .main_container :global(.app--options_section input) {
    max-width: 55px;
  }

  .main_container :global(.app--main_options_section input[type='number']),
  .main_container :global(.app--options_section input[type='number']) {
    text-align: right;
  }
</style>
