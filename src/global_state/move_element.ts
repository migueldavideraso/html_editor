
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

  type T_Positions = { x: number, y: number }
	const { subscribe, set } = writable<T_Positions>(null)

	return {
		subscribe,
		set: (args: T_Positions) => {

      if (args == null) {
        set(null)
        return
      }

      const { x, y } = args
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
		set: (args: I_DropState) => {

      if (args == null) {
        set(null)
        return
      }

      const { dragElementId, dropElementId, order } = args
			set({ dragElementId, dropElementId, order })
		},
	}
}()


export const addElementState = function () {

	const { subscribe, set } = writable<{ component: I_Element}>(null)

	return {
		subscribe,
		get: () => get(addElementState),
		set: (args: { component: I_Element }) => {

      if (args == null) {
        set(null)
        return
      }

      const { component } = args
			set({ component })
		},
	}
}()
