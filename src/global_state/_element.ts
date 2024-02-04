import type { I_Element } from "@/types/main"
import { writable } from "svelte/store"
import type { IElementStoreData, IElementsStoresById } from "./_types"


const elementsStoresById: IElementsStoresById = {}


export function initElementsStores (elements: I_Element[]) {
  elements.forEach((element) => {
    createElementStore(element)
  })
}

export function getElementState (elementId: I_Element['id']) {

  return elementsStoresById[elementId]
}


function createElementStore (element: I_Element) {

  const { subscribe, update } = writable<IElementStoreData>({
    element,
    isSelected: false,
  })

  function changeStyles (array: Array<[key: string, value: string]>) {
    update((state) => {
      array.forEach(([key, value]) => {
        state.element.styles[key] = value
      })
      return state
    })
  }

  function deleteStyles (array: string[]) {
    update((state) => {
      array.forEach((key) => {
        delete state.element.styles[key]
      })
      return state
    })
  }

  function changeAttribute (key: string, value: string) {
    update((state) => {
      state.element.attributes[key] = value
      return state
    })
  }

  const validKeys = [ 'parent', 'text' ] as const
  type ValidKey = (typeof validKeys)[number]

  function setKey (key: ValidKey, value: string) {
    update((state) => {
      state.element[key] = value
      return state
    })
  }

  const store = {
    subscribe,
    changeStyles,
    deleteStyles,
    changeAttribute,
    setText: (value: string) => setKey('text', value),
    setParent: (value: string) => setKey('parent', value),
  }

  elementsStoresById[element.id] = store

  return store
} 