
<script lang="ts">

	import { onMount } from 'svelte'
	import { elementHoverState, dropState } from '@/global_state/move_element'
	import { onDrop, onDragLeave, onDragOver } from './move_controller.ts'

	export let elementId = null
	export let selected = false
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
			componentElement.ondragover = (e) => onDragOver(e, elementId)
			componentElement.ondragleave = (e) => onDragLeave(e)
			componentElement.ondrop = (e) => onDrop(e)
		}

		componentElement.ondragstart = (e) => {

			e.stopPropagation()
			addDragMask()

			componentElement.ondragover = (e) => {}
			dropState.set({ dragElementId: elementId })
		}


		componentElement.ondragend = (e) => {

			e.stopPropagation()
			e.preventDefault()

			elementHoverState.set(null)
			componentElement.ondragover = (e) => onDragOver(e)

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






