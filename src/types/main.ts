

export const elementsTypes = [ 'app', 'section', 'grid', 'box', 'text', 'button' ] as const
export type T_Element_Type = typeof elementsTypes[number];


export const units = [ 'px', 'rem', '%' ] as const
export type T_Unit = typeof units[number];

export interface I_Element {

  id?: string
  name: string
  position?: number
  parent: string|null
  text?: string
  type: 'app'|'section'|'grid'|'box'|'text'

  styles: {
    [key: string]: string
  },
}


export interface I_New_Element_Data {
  name: string
  parent: null
  styles: {}
  type: T_Element_Type
}

export interface I_Elements_Table {
  [id: I_Element['id']]: I_Element
}

export interface I_Elements_By_Parent_Table {
  [id: I_Element['id']]: I_Element[]
}

export interface I_Elements_Changes {
  data: I_Element
  id: I_Element['id']
  type: 'create'|'update'|'delete'
}

export interface I_Elements_Changes_Table {
  [id: I_Element['id']]: I_Element[]
}


export type I_Elements_Styles = {
  [key in T_Element_Type]?: { [key: string]: string; };
} & { 
  'all'?: { [key: string]: string }
  'page'?: { [key: string]: string }
 }


