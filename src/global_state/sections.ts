

import type { I_Element, I_Elements_By_Parent_Table } from '@/types/main'
import { allElementsStore } from '../file_state/sections'
import { reduceGroup } from '../helpers/main'
import { writable, get } from 'svelte/store'




export const selectedSectionState = function () {

	const { subscribe, set } = writable<I_Element['id']>(null)

	return {
		subscribe,
		set: (id: I_Element['id']) => {
			set(id)
		},
	}
}()



export const elementsChildrenState = function () {

	const { subscribe, set } = writable<I_Elements_By_Parent_Table>({})

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


export const getElementChildrenStore = function (elementId: I_Element['id']) {

	const { subscribe, set } = writable<I_Element[]>([])

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

export const getElementDataStore = function (elementId: I_Element['id']) {

	const { subscribe, set } = writable<I_Element>(null)

	allElementsStore.subscribe(state => {
		set(state[elementId] || null)
	})

	return {
		subscribe,
		get: () => get({ subscribe }),
	}
}

