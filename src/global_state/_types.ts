import type { I_Element } from "@/types/main";
import type { Unsubscriber } from "svelte/store";


export interface IElementsStoresById {
  [id: I_Element['id']]: IElementStore
}

export interface IElementStore {
  setText: (value: string) => void
  setParent: (value: string) => void
  deleteStyles: (array: string[]) => void
  changeAttribute: (key: string, value: string) => void
  changeStyles: (stylesArray: Array<[key: string, value: string]>) => void
  subscribe: (callback: (state: IElementStoreData) => void) => Unsubscriber;
}

export interface IElementStoreData {
  element: I_Element,
  isSelected: boolean
}