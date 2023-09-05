
import { writable, get } from 'svelte/store'
import { reduceUnit, reduceGroup } from '../helpers/main'
import type { I_Element, I_Elements_By_Parent_Table, I_Elements_Table } from '../types/main'


let changesData = {}

let elementsById: I_Elements_Table = {}
let elementsByParent: I_Elements_By_Parent_Table = {}


let previousChangesData = []
let subsequentChangesData = []


const defaultState: I_Element = {
  id: 'app',
  type: 'app',
  name: 'App',
  parent: null,
  position: 1,
  styles: {},
}


export const allElementsStore = function () {

  const currentVersion = JSON.parse(localStorage.getItem('html-editor-elements') || '{}')
  const { subscribe, set, update: updateStore } = writable<I_Elements_Table>(currentVersion || defaultState)

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

  console.log(previousChangesData)

	allElementsStore.update(id, {
		...oldData,
		...newData,
	})
}


export const deleteElement = (id) => {

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



const __deleteElement = (id) => {

	const element = elementsById[id]
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









// setInterval(() => {

// 	console.log(Object.values(changesData))

// }, 5000)


window.onkeydown = (e) => {

	if (e.keyCode === 90 && e.ctrlKey) {
		console.log("Ctrl+z")
		reverseState()
		return
	}

	if (e.keyCode === 89 && e.ctrlKey) {
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





