import { elementHoverState, elementHoverPositionState } from '@/global_state/move_element'
import type { I_Element } from '@/types/main'

type T_HTMLElement = HTMLElement & { getElementId?: () => I_Element['id']; parentElement: T_HTMLElement }
type T_positions = { x: number; y: number; width?: number; height?: number; element?: T_HTMLElement }

let currentElementId: I_Element['id'] = null
let currentDOMElement: T_HTMLElement = null
let currentDropElement: T_HTMLElement = null
let childrensPositions: T_positions[] = []
let currentPosition: T_positions

const removeDropElements = () => {
  const beforeDropElement = currentDropElement && currentDropElement.parentElement.querySelector('[drop_element]')

  if (beforeDropElement) {
    currentDropElement = null
    beforeDropElement.parentElement.removeChild(beforeDropElement)
  }
}

const setElementsChildrensPositons = () => {
  childrensPositions = []

  console.log(childrensPositions)

  if (!currentDOMElement) {
    return
  }

  const children = Array.from(currentDOMElement.children).filter(el => el.querySelector('.events_element'))

  children.forEach((el: T_HTMLElement) => {
    console.log(el)
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
  let element: T_HTMLElement = null

  for (const { x, width, y, height, element: children } of childrensPositions) {
    if (x + width < currentPosition.x || y + height < currentPosition.y) {
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
  } else {
    currentDOMElement.insertAdjacentElement('afterbegin', dropElement)
  }
}

export default () => {}

elementHoverPositionState.subscribe(position => {
  if (!position) {
    return
  }

  if (currentPosition.x !== position.x || currentPosition.y !== position.y) {
    currentPosition = position
    getSideChildren()
  }
})

elementHoverState.subscribe(elementId => {
  childrensPositions = []

  if (!elementId) {
    if (currentElementId) {
      // console.log(elementId)
      currentElementId = null
      currentDOMElement = null
    } else {
      removeDropElements()
    }

    return
  }

  const mask = document.getElementById(`events_mask_${elementId}`)

  if (!mask) {
    currentDOMElement = null
    elementHoverState.set(null)
  } else {
    currentElementId = elementId
    currentDOMElement = mask.parentElement

    setElementsChildrensPositons()
  }

  setDropElement()
})
