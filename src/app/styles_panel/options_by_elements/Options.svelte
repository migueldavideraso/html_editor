<script lang="ts">
  import Section from '../options_by_elements/Section.svelte'
  import Image from '../options_by_elements/Image.svelte'
  import Text from '../options_by_elements/Text.svelte'
  import Grid from '../options_by_elements/Grid.svelte'
  import Box from '../options_by_elements/Box.svelte'
  import App from '../options_by_elements/App.svelte'
  import type { I_Element } from '@/types/main'
  import type { T_ChangeElementKey, T_ChangeStyleKey, T_DeleteStyleKeys } from '@/types/style_functions'

  export let changeStyleKey: T_ChangeStyleKey
  export let deleteStyleKeys: T_DeleteStyleKeys
  export let changeElementKey: T_ChangeElementKey

  export let element: I_Element
</script>

{#if element.type === 'app'}
  <App {element} {changeStyleKey} />
{:else if element.type === 'box'}
  <Box {element} {changeStyleKey} {deleteStyleKeys} />
{:else if element.type === 'grid'}
  <Grid {element} {changeStyleKey} {deleteStyleKeys} />
{:else if element.type === 'text'}
  <Text {element} {changeStyleKey} {deleteStyleKeys} {changeElementKey} />
{:else if element.type === 'section'}
  <Section {element} {changeStyleKey} {deleteStyleKeys} />
{:else if element.type === 'image'}
  <Image {element} {changeStyleKey} {deleteStyleKeys} />
{/if}
