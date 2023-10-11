<script lang="ts">
  import { onMount } from 'svelte'
  import { elementHoverState, dropState } from '@/global_state/move_element'
  import { onDrop, onDragLeave, onDragOver } from './move_controller'
  import type { I_Element } from '@/types/main'

  export let elementId: I_Element['id'] = null
  export let allowDrag = false
  export let allowDrop = false
  export let componentElement = null

  let dragMaskElement = null

  onMount(() => {
    componentElement.getElementId = () => {
      return elementId
    }

    if (allowDrag) {
      componentElement.setAttribute('draggable', 'true')
    }

    if (allowDrop) {
      componentElement.ondragover = (e: DragEvent) => onDragOver(e, elementId)
      componentElement.ondragleave = (e: DragEvent) => onDragLeave(e)
      componentElement.ondrop = (e: DragEvent) => onDrop(e)
    }

    componentElement.ondragstart = (e: DragEvent) => {
      e.stopPropagation()
      addDragMask()

      componentElement.ondragover = () => {}
      dropState.set({ dragElementId: elementId })
    }

    componentElement.ondragend = (e: DragEvent) => {
      e.stopPropagation()
      e.preventDefault()

      elementHoverState.set(null)
      componentElement.ondragover = (e: DragEvent) => onDragOver(e, elementId)

      removeDragMask()
    }
  })

  const addDragMask = () => {
    dragMaskElement = document.createElement('div')
    dragMaskElement.className = 'drag_mask'
    dragMaskElement.innerHTML = 'Moving'

    componentElement.appendChild(dragMaskElement)
  }

  const removeDragMask = () => {
    dragMaskElement && dragMaskElement.parentElement.removeChild(dragMaskElement)
    dragMaskElement = null
  }
</script>
