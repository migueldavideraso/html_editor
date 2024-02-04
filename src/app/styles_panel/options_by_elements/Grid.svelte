<script lang="ts">
  import Shadow from '../style_options/box_shadow/Main.svelte'
  import Border from '../style_options/border/Main.svelte'
  import Corner from '../style_options/corner/Main.svelte'
  import Margin from '../style_options/Margin.svelte'
  import Padding from '../style_options/Padding.svelte'
  import Position from '../style_options/Position.svelte'
  import Overflow from '../style_options/Overflow.svelte'
  import DefaultBoxStyles from '../style_options/DefaultBoxStyles.svelte'
  import CustomButtons from '../CustomButtons.svelte'
  import type { I_Element } from '@/types/main'

  export let element: I_Element = null

</script>

<DefaultBoxStyles {element} />

<Position {element} />

<Border {element} />

<Shadow {element} />

<Corner {element} />

<Padding {element} />

<Margin {element} />

<Overflow {element} />

<CustomButtons {element} />
