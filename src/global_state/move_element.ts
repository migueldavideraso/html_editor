
import { writable, get } from 'svelte/store'




export const elementHoverState = function () {

	const { subscribe, set } = writable(null)

	let currentId = null

	subscribe((state) => {
		currentId = state
	})

	return {
		subscribe,
		set: (id) => {
			currentId !== id  && set(id)
		},
	}
}()


export const elementHoverPositionState = function () {

	const { subscribe, set } = writable(null)

	return {
		subscribe,
		set: ({ x, y }) => {
			set({ x, y })
		},
	}
}()


export const dropState = function () {

	const { subscribe, set } = writable({})

	return {
		subscribe,
		get: () => get(dropState),
		set: ({ dragElementId, dropElementId, order }) => {
			set({ dragElementId, dropElementId, order })
		},
	}
}()


export const addElementState = function () {

	const { subscribe, set } = writable({})

	return {
		subscribe,
		get: () => get(addElementState),
		set: ({ component }) => {
			set({ component })
		},
	}
}()
