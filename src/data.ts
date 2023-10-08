export const simpleProof = [
  {
    id: 'app',
    type: 'app',
    name: 'App',
    parent: null,
    position: 1,
    styles: {},
  },
  {
    id: 'section_01',
    type: 'section',
    name: 'Section',
    parent: 'app',
    position: 1,
    styles: {},
  },
]

export const elementsProof = [
  {
    id: 'app',
    type: 'app',
    name: 'App',
    parent: null,
    position: 1,
    styles: {},
  },
  {
    id: 'section_01',
    type: 'section',
    name: 'Section',
    parent: 'app',
    position: 1,
    styles: {},
  },
  {
    parent: 'section_01',
    id: 'box_01',
    type: 'box',
    name: 'Box',
    position: 1,
    styles: {},
  },
  {
    parent: 'section_01',
    id: 'grid_01',
    type: 'grid',
    name: 'Grid',
    position: 2,
    styles: {},
  },
  {
    parent: 'grid_01',
    id: 'box_02',
    type: 'box',
    name: 'Box',
    position: 1,
    styles: {},
  },
  {
    parent: 'grid_01',
    id: 'box_03',
    type: 'box',
    name: 'Box',
    position: 2,
    styles: {},
  },
]

export const cardsSections = [
  {
    id: 'app',
    type: 'app',
    name: 'App',
    parent: null,
    position: 1,
    styles: {},
  },
  {
    id: 'element_1',
    parent: 'app',
    type: 'section',
    name: 'Section 01',
    position: 1,
    styles: {
      'flex-direction': 'row',
    },
  },
  {
    id: 'element_1_1',
    parent: 'element_1',
    type: 'text',
    name: 'Text 01.01',
    text: '<p>Title</p>',
    position: 1,
    styles: {
      // 'font-weight': 'bold',
      // 'font-size': '1.2rem',
    },
  },
  {
    id: 'element_1_3',
    parent: 'element_1',
    type: 'text',
    name: 'Text 01.03',
    text: '<p>Title</p>',
    position: 2,
    styles: {
      // 'font-weight': 'bold',
      // 'font-size': '1.2rem',
    },
  },
  {
    id: 'element_2',
    parent: 'app',
    type: 'section',
    name: 'Section 02',
    position: 2,
    styles: {
      'margin-top': '10px',
      'margin-right': '0px',
      'margin-bottom': '0px',
      'margin-left': '0px',
      'padding-top': '10px',
      'padding-right': '10px',
      'padding-bottom': '10px',
      'padding-left': '10px',
      'justify-content': 'flex-end',
      'grid-gap': '10px',
      'flex-direction': 'row',
    },
  },
  {
    id: 'element_2_1',
    parent: 'element_2',
    type: 'button',
    name: 'Button 02.01',
    text: 'Button',
    position: 1,
    styles: {
      'box-shadow': '0px 5px 10px -3px rgba(0, 0, 0, .5)',
    },
  },
  {
    id: 'element_2_2',
    parent: 'element_2',
    type: 'button',
    name: 'Button 02.02',
    text: 'Button',
    position: 2,
    styles: {
      'box-shadow': '0px 5px 10px -3px rgba(0, 0, 0, .5)',
    },
  },
  {
    id: 'element_3',
    parent: 'app',
    type: 'section',
    name: 'Section 03',
    position: 3,
    styles: {
      'justify-content': 'space-between',
      margin: '10px 0px 0px 0px',
      'grid-gap': '10px',
      'flex-direction': 'row',
    },
  },
  {
    id: 'element_3_1',
    parent: 'element_3',
    type: 'section',
    name: 'Section 03.01',
    position: 1,
    styles: {
      width: '200px',
      'grid-gap': '10px',
      height: '200px',
      'border-radius': '5px',
      'box-shadow': '0px 5px 10px -3px rgba(0, 0, 0, .5)',
    },
  },
  {
    id: 'element_3_1_1',
    parent: 'element_3_1',
    type: 'section',
    name: 'Section 03.01.01',
    position: 1,
    styles: {
      'border-radius': '5px',
    },
  },
  {
    id: 'element_3_1_2',
    parent: 'element_3_1',
    type: 'section',
    name: 'Section 03.01.02',
    position: 2,
    styles: {
      flex: 'auto',
      'border-radius': '5px',
    },
  },
  {
    id: 'element_3_2',
    parent: 'element_3',
    type: 'section',
    name: 'Section 03.02',
    position: 2,
    styles: {
      flex: 'auto',
      'grid-gap': '10px',
      'border-radius': '5px',
      'flex-direction': 'column',
      'box-shadow': '0px 5px 10px -3px rgba(0, 0, 0, .5)',
    },
  },
  {
    id: 'element_3_2_1',
    parent: 'element_3_2',
    type: 'section',
    name: 'Section 03.02.01',
    position: 1,
    styles: {
      'border-radius': '5px',
    },
  },
  {
    id: 'element_3_2_2',
    parent: 'element_3_2',
    type: 'section',
    name: 'Section 03.02.02',
    position: 2,
    styles: {
      flex: 'auto',
      'border-radius': '5px',
    },
  },
]

export const hoverSections = [
  {
    id: 'app',
    type: 'app',
    name: 'App',
    parent: null,
    position: 1,
    styles: {},
  },
  {
    id: 'element_3',
    parent: 'app',
    type: 'section',
    name: 'Section 03',
    position: 3,
    styles: {
      'justify-content': 'center',
      margin: '10px 0px 0px 0px',
      'grid-gap': '10px',
    },
  },
  {
    id: 'element_3_1',
    parent: 'element_3',
    type: 'section',
    name: 'Section 03.01',
    position: 1,
    styles: {
      'grid-gap': '20px',
      height: '250px',
      'border-radius': '5px',
      'box-shadow': '0px 5px 10px -3px rgba(0, 0, 0, .5)',
    },
  },
  {
    id: 'element_3_1_3',
    parent: 'element_3_1',
    type: 'section',
    name: 'Section 03.01.01',
    position: 3,
    styles: {
      'border-radius': '5px',
    },
  },
  {
    id: 'element_3_1_1',
    parent: 'element_3_1',
    type: 'section',
    name: 'Section 03.01.01',
    position: 1,
    styles: {
      'border-radius': '5px',
    },
  },
  {
    id: 'element_3_1_2',
    parent: 'element_3_1',
    type: 'section',
    name: 'Section 03.01.02',
    position: 2,
    styles: {
      flex: 'auto',
      'border-radius': '5px',
    },
  },
]
