<script lang="ts">
  import DefaultTextStyles from '../style_options/DefaultTextStyles.svelte'
  import Margin from '../style_options/Margin.svelte'
  import Overflow from '../style_options/Overflow.svelte'
  import Padding from '../style_options/Padding.svelte'
  import Position from '../style_options/Position.svelte'
  import Border from '../style_options/border/Main.svelte'
  import Shadow from '../style_options/box_shadow/Main.svelte'
  import Corner from '../style_options/corner/Main.svelte'
  import CustomButtons from '../CustomButtons.svelte'
  import type { I_Element } from '@/types/main'

  export let element: I_Element = null

</script>

<DefaultTextStyles {element} />

<Position {element} />

<Border {element} />

<Shadow {element} />

<Corner {element} />

<Padding {element} />

<Margin {element} />

<Overflow {element} />

<CustomButtons {element} />

<style>
</style>
