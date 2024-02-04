<script lang="ts">
  import type { I_Element } from '@/types/main'
  import App from '../options_by_elements/App.svelte'
  import Box from '../options_by_elements/Box.svelte'
  import Grid from '../options_by_elements/Grid.svelte'
  import Image from '../options_by_elements/Image.svelte'
  import Section from '../options_by_elements/Section.svelte'
  import Text from '../options_by_elements/Text.svelte'

  export let element: I_Element
</script>

{#if element.type === 'app'}
  <App elementId={element.id} />
{:else if element.type === 'box'}
  <Box {element} />
{:else if element.type === 'grid'}
  <Grid {element} />
{:else if element.type === 'text'}
  <Text {element} />
{:else if element.type === 'section'}
  <Section {element} />
{:else if element.type === 'image'}
  <Image {element} />
{/if}
