
import type { I_Element } from '@/types/main'
import { writable, get } from 'svelte/store'




export const elementHoverState = function () {

	const { subscribe, set } = writable<I_Element['id']>(null)

	let currentId = null

	subscribe((state) => {
		currentId = state
	})

	return {
		subscribe,
		set: (id: I_Element['id']) => {
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

  interface I_DropState { dragElementId?: I_Element['id'], dropElementId?: I_Element['id'], order?: number }

	const { subscribe, set } = writable<I_DropState>(null)

	return {
		subscribe,
		get: () => get(dropState),
		set: ({ dragElementId, dropElementId, order }: I_DropState) => {
			set({ dragElementId, dropElementId, order })
		},
	}
}()


export const addElementState = function () {

	const { subscribe, set } = writable<{ component: I_Element}>(null)

	return {
		subscribe,
		get: () => get(addElementState),
		set: ({ component }) => {
			set({ component })
		},
	}
}()
