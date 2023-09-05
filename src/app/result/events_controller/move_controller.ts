


import { getUID } from '@/helpers/main'
import { setElement } from '@/file_state/sections'
import { getElementChildrenStore, getElementDataStore } from '@/global_state/sections'
import { addElementState, elementHoverState, elementHoverPositionState, dropState } from '@/global_state/move_element'
import type { I_Element } from '@/types/main'





const setDropElementChildrenPosition = ({ args, dragElement }) => {

	const newChildrenOrder = []
	const children = (
		getElementChildrenStore(args.dropElementId)
		.get()
		.filter(obj => obj.id !== args.dragElementId)
	)

	let added = false

	dragElement.position = args.order

	children.forEach((element) => {

		if (element.position === args.order) {
			newChildrenOrder.push(dragElement)
			newChildrenOrder.push(element)
			added = true
		}
		else {
			newChildrenOrder.push(element)
		}
	})

	if (!added) {
		newChildrenOrder.push(dragElement)
	}

	newChildrenOrder.forEach((element, index) => {

		if (!args.dragElementId && element.id === dragElement.id) {

			setElement(
				element.id,
				{
					...element,
					position: index + 1,
					parent: args.dropElementId,
				}
			)

			return
		}

		setElement(
			element.id,
			{
        ...element,
				position: index + 1,
				parent: args.dropElementId,
			}
		)
	})
}


const setDragElementChildrenPosition = ({ oldParent, args }) => {

	const children = (
		getElementChildrenStore(oldParent)
		.get()
		.filter(obj => obj.id !== args.dragElementId)
	)

	children.forEach((element, index) => {

		setElement(
			element.id,
			{
        ...element,
				position: index + 1,
			}
		)
	})
}



export const onDrop = (e: DragEvent) => {

	e.stopPropagation()
	e.preventDefault()

	const args = dropState.get()

  if (args.dragElementId == null || args.dropElementId == null) {
    return
  }

  const dragElement = getDragElement(args.dragElementId)
	const oldParent = dragElement.parent

	setDragElementChildrenPosition({ args, oldParent })
	setDropElementChildrenPosition({ args, dragElement })

	// ------------------------------------------------------------------------------------------------
	// Clear stores data
	{

		elementHoverState.set(null)
		addElementState.set(null)
		dropState.set(null)
	}
	// ------------------------------------------------------------------------------------------------


	// ------------------------------------------------------------------------------------------------
	// Unlock hover event on old parent, that was locked by current hover drag element
	{
		const eventsElement = document.getElementById(`events_element_${oldParent}`)

		if (eventsElement && eventsElement?.parentElement?.__setLockMouseOver) {
			eventsElement.parentElement.__setLockMouseOver(false)
		}
	}
	// ------------------------------------------------------------------------------------------------
}


export const onDragLeave = (e) => {

	e.stopPropagation()
	e.preventDefault()

	elementHoverState.set(null)
}


export const onDragOver = (e: DragEvent, elementId: I_Element['id']) => {

	e.preventDefault()
	e.stopPropagation()

	elementHoverState.set(elementId)
	elementHoverPositionState.set({ x: e.x, y: e.y })
}



const getDragElement = (dragElementId: string) => {

	if (dragElementId) {
		return getElementDataStore(dragElementId).get()
	}

	const { component } = addElementState.get()
  const randomNum = (Math.random() * 5).toFixed(0)
  const randomLength = parseInt(randomNum) + 10
  const randomUID = getUID(randomLength)

	const element = {
		...component,
		parent: null,
		id: `${component.type}_${randomUID}`
	}

	return element
}






