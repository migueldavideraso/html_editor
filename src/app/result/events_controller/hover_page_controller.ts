import { elementHoverState, elementHoverPositionState, dropState } from '@/global_state/move_element'

type T_Positions = { x: number; y: number }
type T_Children_Positions = { x: number; y: number; height: number; width: number; element: Element }

let verificationInterval = null
let unsubscribesFunctions = []

let currentElementId = null
let currentDOMElement: Element = null

let currentPosition: T_Positions
let childrensPositions: T_Children_Positions[] = []

const dropElementState = {
  element: null,
  position: '',
}

const getCurrentDropChild = () => {
  let element = null

  for (const { x, width, y, height, element: children } of childrensPositions) {
    if ((x + width < currentPosition.x && y < currentPosition.y) || y + height < currentPosition.y) {
      element = children
    }
  }

  let order = childrensPositions.map(obj => obj.element).indexOf(element)
  order = order + 2

  return {
    order,
    element,
  }
}

// ------------------------------------------------------------------------------------------------
// Setters

const setElementsChildrensPositons = () => {
  childrensPositions = []

  if (!currentDOMElement) {
    return
  }

  const children = Array.from(currentDOMElement.children).filter(el => el.querySelector('.events_element'))

  children.forEach(el => {
    const { x, y, width, height } = el.getBoundingClientRect()
    childrensPositions.push({ x, width, y, height, element: el })
  })
}

const setDropElementState = () => {
  const { element: childElement, order } = getCurrentDropChild()

  const element = childElement || currentDOMElement
  const position = childElement ? 'afterend' : 'afterbegin'

  if (dropElementState.element === element && dropElementState.position === position) {
    return
  }

  dropElementState.element = element
  dropElementState.position = position

  {
    const { dragElementId } = dropState.get() || {}

    dropState.set({
      dragElementId,
      order,
      dropElementId: currentElementId,
    })
  }

  removeDropElements()
  addDropElement()
}

const removeDropElements = () => {
  const beforeDropElements = [...document.body.querySelectorAll('[drop_element]')]

  beforeDropElements.forEach(element => {
    element.parentElement.removeChild(element)
  })
}

const addDropElement = () => {
  const dropElement = document.createElement('div')

  dropElement.innerHTML = `
			<div class="lines">
				Drop here
			</div>
		`

  dropElement.setAttribute('drop_element', '')
  dropElementState.element.insertAdjacentElement(dropElementState.position, dropElement)
}

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Interval of setting drop element

const initVerificationInterval = () => {
  if (verificationInterval) {
    return
  }

  verificationInterval = setInterval(() => {
    if (!currentElementId) {
      removeVerificationInterval()
      return
    }

    setDropElementState()
  }, 200)
}

const removeVerificationInterval = () => {
  if (!verificationInterval) {
    return
  }

  clearInterval(verificationInterval)
  removeDropElements()

  dropElementState.position = ''
  dropElementState.element = null
  verificationInterval = null
}

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Exports Functions

export const initHoverController = () => {
  const unsubscribeElementHoverPositionState = elementHoverPositionState.subscribe(position => {
    if (!position) {
      return
    }

    if (currentPosition?.x !== position.x || currentPosition?.y !== position.y) {
      currentPosition = position
      setElementsChildrensPositons()
    }
  })

  const unsubscribeElementHoverState = elementHoverState.subscribe(elementId => {
    if (!elementId) {
      currentElementId = null
      currentDOMElement = null

      return
    }

    const mask = document.getElementById(`events_element_${elementId}`)

    if (!mask) {
      elementHoverState.set(null)
    } else {
      currentElementId = elementId
      currentDOMElement = mask.parentElement
    }

    initVerificationInterval()
  })

  unsubscribesFunctions = [unsubscribeElementHoverPositionState, unsubscribeElementHoverState]
}

export const finishHoverController = () => {
  unsubscribesFunctions.forEach(fn => fn())
  unsubscribesFunctions = []
}

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------
