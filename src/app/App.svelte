<script lang="ts">
  import MainPanel from './main_panel/Main.svelte'
  import Result from './result/Main.svelte'
  import StylesPanel from './styles_panel/Main.svelte'

  let wrapperElement = null
</script>

<div class="html-editor-container">
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
  .html-editor-container {
    overflow: hidden;
    display: grid;
    height: 100%;
    border-radius: 5px;
    grid-template-columns: 1fr auto;
    border: 1px solid rgb(172, 173, 188);
  }

  .html-editor-container > main,
  .html-editor-container > aside {
    height: 100%;
  }

  .html-editor-container > aside {
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

</style>
