
import { writable } from 'svelte/store'
import { reduceUnit, reduceGroup } from '@/helpers/main'


let changesData = {}

let elementsById = {}
let elementsByParent = {}


let previousChangesData = []
let subsequentChangesData = []




export const allElementsStore = function () {

  const currentVersion = JSON.parse(localStorage.getItem('html-editor-elements') || '{}')
	const { subscribe, set, update } = writable(currentVersion)

	return {

		subscribe,

		update (id, section) {
			update(state => {

				const oldData = state[section.id] || {}

				state[section.id] = {
					...oldData,
					...section,
				}

				return state
			})
		},

		delete (id) {

			update((state) => {
				delete state[id]
				return state
			})
		},

		set (arr) {
			set(reduceUnit(arr, 'id'))
		},
	}
}()



allElementsStore.subscribe(state => {

  console.log(state)
  localStorage.setItem('html-editor-elements', JSON.stringify(state))

  elementsById = state
	elementsByParent = reduceGroup(Object.values(state), 'parent')
})




export const setElement = (id, newData) => {

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









setInterval(() => {

	console.log(Object.values(changesData))

}, 5000)


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

	subsequentChangesData.push(item)

}





