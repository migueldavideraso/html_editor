import type { IElementStore } from "@/global_state/_types";
import type { I_Element } from "@/types/main";

export function getStyleKey (element: I_Element, key: string) {
  return element.styles[key] || ''
}

export function getSetTextHandler (elementStore: IElementStore) {
  return (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
    elementStore.setText(e.currentTarget.value)
  }
}

export function getChangeStyleHandler (elementStore: IElementStore, key: string) {
  return (value: string) => {
    elementStore.changeStyles([ [key, value] ])
  }
}

export function getDeleteStyleHandler (elementStore: IElementStore, key: string) {
  return () => {
    elementStore.deleteStyles([ key ])
  }
}