<script lang="ts">
  import { addElementState, elementHoverState } from '@/global_state/move_element'
  import type { I_Element } from '@/types/main'
  import { onMount } from 'svelte'

  export let title = ''
  export let component: I_Element

  let cellMaskElement = null

  onMount(() => {
    cellMaskElement.setAttribute('draggable', 'true')

    cellMaskElement.ondragstart = (e: MouseEvent) => {
      e.stopPropagation()

      cellMaskElement.ondragover = () => {}
      addElementState.set({ component })
    }

    cellMaskElement.ondragend = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()

      elementHoverState.set(null)
    }
  })
</script>

<div class="cell">
  <span class="add_element_mask" draggable="true" bind:this={cellMaskElement} />

  <section class="box">
    <slot />
  </section>

  <section class="title"> {title} </section>
</div>

<style>
  .cell {
    flex-direction: column;
    position: relative;
    background: #eee;
    overflow: hidden;
    display: flex;
    height: 75px;
    grid-gap: 5px;
    padding: 2.5px 10px;
  }

  .cell .add_element_mask {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 999;
  }

  .cell .box {
    place-content: center;
    display: grid;
    flex: auto;
  }

  .cell .title {
    place-content: center;
    display: grid;
    height: 15px;
    font-size: 12px;
    letter-spacing: 0.95px;
  }
</style>
