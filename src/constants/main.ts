import type { I_Element, T_Element_Type } from "@/types/main"

export const elementsType = [ 'app', 'section', 'grid', 'box', 'text', 'button', 'image' ] as const

export const units = [ 'px', 'rem', '%' ] as const

export const defaultComponentsData: {[id in T_Element_Type ]: I_Element} = {

	'app': {
		name: 'App',
		type: 'app',
		parent: null,
		styles: { },
	},

	'section': {
		name: 'Section',
		type: 'section',
		parent: null,
		styles: { },
	},

	'box': {
		name: 'Box',
		type: 'box',
		parent: null,
		styles: { },
	},

	'text': {
		text: '<p>Custom Text</p>',
		name: 'Text',
		type: 'text',
		parent: null,
		styles: { },
	},

	'grid': {
		name: 'Grid',
		type: 'grid',
		parent: null,
		styles: { },
	},

	'button': {
		text: 'Button Text',
		name: 'Button',
		type: 'button',
		parent: null,
		styles: { },
	},

	'image': {
		name: 'image',
		type: 'image',
    src: null,
		parent: null,
		styles: { },
	},
} as const