


import { getUID } from '@/helpers/main'
import { setElement } from '@/file_state/sections'
import { getElementChildrenStore, getElementDataStore } from '@/global_state/sections'
import { addElementState, elementHoverState, elementHoverPositionState, dropState } from '@/global_state/move_element'





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
				position: index + 1,
			}
		)
	})
}



export const onDrop = (e) => {

	e.stopPropagation()
	e.preventDefault()

	const args = dropState.get()
	const dragElement = getDragElement(args.dragElementId)
	const oldParent = dragElement.parent

	setDragElementChildrenPosition({ args, oldParent })
	setDropElementChildrenPosition({ args, dragElement })


	// ------------------------------------------------------------------------------------------------
	// Clear stores data
	{

		elementHoverState.set(null)
		addElementState.set({})
		dropState.set({})
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


export const onDragOver = (e, elementId) => {

	e.preventDefault()
	e.stopPropagation()

	elementHoverState.set(elementId)
	elementHoverPositionState.set({ x: e.x, y: e.y })
}



const getDragElement = (dragElementId) => {

	if (dragElementId) {
		return getElementDataStore(dragElementId).get()
	}

	const { component } = addElementState.get()
	const element = {
		...component,
		parent: null,
		id: `${component.type}_${getUID(parseInt(Math.random() * 5) + 10)}`
	}

	return element
}






