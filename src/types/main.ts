

export interface I_Element {

  id: string
  name: string
  position: number
  parent: string|null
  type: 'app'|'section'|'grid'|'box'|'text'

  styles: {
    [key: string]: string|number
  },
}


export interface I_New_Element_Data {
  name: string
  parent: null
  styles: {}
  type: 'section'|'grid'|'box'|'text'|'button'
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



