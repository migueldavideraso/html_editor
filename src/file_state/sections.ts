
import { get, writable } from 'svelte/store'
import { reduceGroup, reduceUnit } from '../helpers/main'
import type { I_Element, I_Elements_By_Parent_Table, I_Elements_Table } from '../types/main'


let changesData = {}

let elementsById: I_Elements_Table = {}
let elementsByParent: I_Elements_By_Parent_Table = {}


let previousChangesData = []
let subsequentChangesData = []


const defaultState: I_Elements_Table = {
  app : {
    id: 'app',
    type: 'app',
    name: 'Page',
    parent: null,
    position: 1,
    styles: {
			'overflow': 'auto',
			'width': '100%',
			'height': '100%',
			'padding-top': '10px',
			'padding-left': '10px',
			'padding-right': '10px',
			'padding-bottom': '10px',
			'background-color': 'rgba(255, 255, 255, 1)',
    },
  }
}


export const allElementsStore = function () {

  const currentVersion = JSON.parse(localStorage.getItem('html-editor-elements') || '{}')
  const { subscribe, set, update: updateStore } = writable<I_Elements_Table>(defaultState)
  // const { subscribe, set, update: updateStore } = writable<I_Elements_Table>(elementsHashTable)

  console.log(defaultState)
  console.log(currentVersion)


  return {

    get: () => get(allElementsStore),

		subscribe,

		update (id: I_Element['id'], element: I_Element) {
			updateStore(state => {

				const oldData = state[id] || {}

				state[element.id] = {
					...oldData,
					...element,
				}

				return state
			})
		},

		delete (id: I_Element['id']) {

			updateStore((state) => {
				delete state[id]
				return state
			})
		},

		set (newElements: I_Element[]) {

      const elementsHashTable = reduceUnit(newElements, 'id')

      set(elementsHashTable)
		},
	}
}()



allElementsStore.subscribe(state => {

  if (Object.values(state).length == 0) {
    return
  }


  const stringState = JSON.stringify(state)

  localStorage.setItem('html-editor-elements', stringState)

  elementsById = state
	elementsByParent = reduceGroup(Object.values(state), 'parent')
})




export const setElement = (id: I_Element['id'], newData: I_Element) => {

	const oldData = elementsById[id]
	const changeType = oldData ? 'update' : 'create'

	changesData[id] = {
		id,
		type: changeType,
		data: {
			...(changesData[id]?.data || {}),
			...newData,
		},
	}

	previousChangesData.push({
		id,
		newData: { ...newData },
		beforeData: oldData,
		type: changeType,
	})

	allElementsStore.update(id, {
		...oldData,
		...newData,
	})
}


export const deleteElement = (id: I_Element['id']) => {

	const element = elementsById[id]
	const children = elementsByParent[id] || []

	previousChangesData.push({
		id,
		element,
		children,
		type: 'delete',
	})

	__deleteElement(id)
}



const __deleteElement = (id: I_Element['id']) => {

	const children = elementsByParent[id] || []

	changesData[id] = {
		id,
		type: 'delete',
	}

	allElementsStore.delete(id)

	children.forEach(child => {
		deleteElement(child.id)
	})
}


// const __setElement = (_element) => {

// 	const oldData = elementsById[id]
// 	const changeType = oldData ? 'update' : 'create'

// 	changesData[id] = {
// 		id,
// 		type: changeType,
// 		data: {
// 			...(changesData[id]?.data || {}),
// 			...newData,
// 		},
// 	}

// 	previousChangesData.push({
// 		id,
// 		newData: { ...newData },
// 		beforeData: oldData,
// 		type: changeType,
// 	})

// 	allElementsStore.update(id, {
// 		...oldData,
// 		...newData,
// 	})
// }




window.onkeydown = (e: KeyboardEvent) => {

	if (e.key === 'z' && e.ctrlKey) {
		console.log("Ctrl+z")
		reverseState()
		return
	}

	if (e.key === 'y' && e.ctrlKey) {
		console.log("Ctrl+y")
		return
	}
}



const reverseState = () => {

	if (!previousChangesData.length) {
		return
	}

	const item = previousChangesData.pop()

  setElement(item.id, item.beforeData);

  console.log(item)

	subsequentChangesData.push(item)

}





