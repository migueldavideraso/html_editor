

import { allElementsStore } from '@/file_state/sections'
import { reduceGroup } from '@/helpers/main.ts'
import { writable, get } from 'svelte/store'




export const selectedSectionState = function () {

	const { subscribe, set } = writable(null)

	return {
		subscribe,
		set: (id) => {
			set(id)
		},
	}
}()



export const elementsChildrenState = function () {

	const { subscribe, set } = writable({})

	allElementsStore.subscribe(state => {
		set(
			reduceGroup(
				Object.values(state),
				'parent'
			)
		)
	})

	return {
		subscribe,
		get: () => get(elementsChildrenState),
	}
}()


export const getElementChildrenStore = function (elementId) {

	const { subscribe, set } = writable({})

	elementsChildrenState.subscribe(state => {

		const children = (
			(state[elementId] || [])
			.sort((a, b) => a.position > b.position ? 1 : -1)
		)

		set(children)
	})

	return {
		subscribe,
		get: () => get({ subscribe }),
	}
}

export const getElementDataStore = function (elementId) {

	const { subscribe, set } = writable({})

	allElementsStore.subscribe(state => {
		set(state[elementId] || {})
	})

	return {
		subscribe,
		get: () => get({ subscribe }),
	}
}

