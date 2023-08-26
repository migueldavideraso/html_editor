

import Section from './options_by_elements/Section.svelte'
import Button from './options_by_elements/Button.svelte'
import Text from './options_by_elements/Text.svelte'
import Grid from './options_by_elements/Grid.svelte'
import Box from './options_by_elements/Box.svelte'
import App from './options_by_elements/App.svelte'


const options = {
	box: Box,
	text: Text,
	grid: Grid,
	button: Button,
	section: Section,
	app: App,
}


export const getOptions = (element) => {

	return options[element?.type] || null
}
