
import { elementHoverState, elementHoverPositionState } from '@/global_state/move_element'


let currentElementId = null
let currentDOMElement = null
let currentDropElement = null
let childrensPositions = []
let currentPosition = {}


const removeDropElements = () => {

	const beforeDropElement = currentDropElement && currentDropElement.parentElement.querySelector('[drop_element]')

	if (beforeDropElement) {
		currentDropElement = null
		beforeDropElement.parentElement.removeChild(beforeDropElement)
	}
}


const setElementsChildrensPositons = () => {

	childrensPositions = []

	if (!currentDOMElement) {
		return
	}

	const children = (
		Array.from(currentDOMElement.children)
		.filter(el => el.querySelector('.events_element'))
	)

	children.forEach(el => {
		const { x, y, width, height } = el.getBoundingClientRect()
		childrensPositions.push({ x, width, y, height, element: el })
	})
}


const getSideChildren = () => {

	if (!currentDOMElement) {
		removeDropElements()
		return
	}

	setElementsChildrensPositons()
}







const setDropElement = () => {

	let element = null

	for (const { x, width, y, height, element: children } of childrensPositions) {
		if (
			( x + width < currentPosition.x )
			||
			( y + height < currentPosition.y )
		) {
			element = children
		}
	}

	const _currentDropElement = element || currentDOMElement

	if (
		currentDropElement?.getElementId &&
		_currentDropElement?.getElementId &&
		currentDropElement.getElementId() === _currentDropElement.getElementId()
	) {
		return
	}

	const beforeDropElement = currentDropElement && currentDropElement.parentElement.querySelector('[drop_element]')

	if (beforeDropElement) {
		beforeDropElement.parentElement.removeChild(beforeDropElement)
	}

	currentDropElement = _currentDropElement

	const dropElement = document.createElement('div')

	dropElement.setAttribute('drop_element', '')

	if (element) {
		element.insertAdjacentElement('afterend', dropElement)
	}
	else {
		currentDOMElement.insertAdjacentElement('afterbegin', dropElement)
	}
}







export default () => {}




elementHoverPositionState.subscribe((position) => {

	if (!position) {
		return
	}

	if (currentPosition.x !== position.x || currentPosition.y !== position.y) {
		currentPosition = position
		getSideChildren()
	}
})


elementHoverState.subscribe((elementId) => {

	childrensPositions = []

	if (!elementId) {

		if (currentElementId) {
			// console.log(elementId)
			currentElementId = null
			currentDOMElement = null
		}
		else {
			removeDropElements()
		}

		return
	}

	const mask = document.getElementById(`events_mask_${elementId}`)

	if (!mask) {
		currentDOMElement = null
		elementHoverState.set(null)
	}
	else {
		currentElementId = elementId
		currentDOMElement = mask.parentElement

		setElementsChildrensPositons()
	}

	setDropElement()
})

