import { allStylesStore } from '@/file_state/styles'

import type { I_Element, I_Elements_Styles } from '@/types/main'
import App from './elements/App.svelte'
import Box from './elements/Box.svelte'
import Button from './elements/Button.svelte'
import Grid from './elements/Grid.svelte'
import Section from './elements/Section.svelte'
import Text from './elements/Text.svelte'

const components = {
  section: Section,
  button: Button,
  grid: Grid,
  text: Text,
  box: Box,
  app: App,
}

export const getItemComponent = ({ element }) => {
  return components[element.type]
}

let allFileStyles: I_Elements_Styles

allStylesStore.subscribe(state => {
  allFileStyles = state
})

export const getStyles = (args: { element: I_Element }) => {
  const { element } = args

  if (element == null) {
    // console.error('Element is undefined')
    return
  }

  element.styles = element.styles || {}

  const allStylesStore = allFileStyles.all || {}
  const elementStyles = allFileStyles[element.type] || {}
  const styles = { ...allStylesStore, ...elementStyles, ...element.styles }

  return styles
}

export const getElementStyle = ({ element, styles }) => {
  if (element == null) {
    // console.error('Element is undefined')
    return
  }

  let result = ''

  for (const key in styles) {
    const value = styles[key]

    result += `\t ${key}: ${value};\n`
  }

  if (element.type === 'text') {
    return `<style> .${element.id} { \n ${result} } ${getTextStyles({ element })} </style>`
  }

  return `<style> .${element.id} { \n ${result} } </style>`
}

const getTextStyles = ({ element }) => {
  return `
		.${element.id} p {
			margin: 0px;
		}

		.${element.id} .align-right,
		.${element.id} .ql-align-right
		{
			text-align: right;
		}

		.${element.id} .align-center,
		.${element.id} .ql-align-center
		{
			text-align: center;
		}

		.${element.id} .align-justify,
		.${element.id} .ql-align-justify
		{
			text-align: justify;
		}

		.${element.id} .size-huge,
		.${element.id} .ql-size-huge
		{
			font-size: 2.5em;
		}

		.${element.id} .size-large,
		.${element.id} .ql-size-large
		{
			font-size: 1.5em;
		}

		.${element.id} .size-small,
		.${element.id} .ql-size-small
		{
			font-size: 0.75em;
		}
	`
}
