import type { I_Element, T_Element_Type } from '@/types/main'

export const elementsType = ['app', 'section', 'grid', 'box', 'text', 'button', 'image'] as const

export const units = ['px', 'rem', '%'] as const

export const defaultComponentsData: { [id in T_Element_Type]: I_Element } = {
  app: {
    name: 'App',
    type: 'app',
    parent: null,
    styles: {},
    attributes: {},
  },

  section: {
    name: 'Section',
    type: 'section',
    parent: null,
    styles: {},
    attributes: {},
  },

  box: {
    name: 'Box',
    type: 'box',
    parent: null,
    styles: {},
    attributes: {},
  },

  text: {
    text: '<p>Custom Text</p>',
    name: 'Text',
    type: 'text',
    parent: null,
    styles: {},
    attributes: {},
  },

  grid: {
    name: 'Grid',
    type: 'grid',
    parent: null,
    styles: {},
    attributes: {},
  },

  button: {
    text: 'Button Text',
    name: 'Button',
    type: 'button',
    parent: null,
    styles: {},
    attributes: {},
  },

  image: {
    name: 'image',
    type: 'image',
    parent: null,
    styles: {
      width: '300px',
      height: '300px',
    },
    attributes: {
      alt: 'Initial image',
      src: '/default-img.png',
      title: null,
    },
  },
} as const
