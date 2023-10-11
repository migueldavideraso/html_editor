import { writable } from 'svelte/store'

export const addElementModalState = (function () {
  const { subscribe, set } = writable({ isOpen: false })

  return {
    subscribe,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }
})()
