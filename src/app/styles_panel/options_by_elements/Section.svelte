<script lang="ts">
  import Shadow from '../style_options/box_shadow/Main.svelte'
  import Border from '../style_options/border/Main.svelte'
  import Corner from '../style_options/corner/Main.svelte'
  import Margin from '../style_options/Margin.svelte'
  import Padding from '../style_options/Padding.svelte'
  import Position from '../style_options/Position.svelte'
  import Overflow from '../style_options/Overflow.svelte'
  import FlexChildrenDisplay from '../style_options/FlexChildrenDisplay.svelte'
  import DefaultBoxStyles from '../style_options/DefaultBoxStyles.svelte'
  import CustomButtons from '../CustomButtons.svelte'

  import type { T_ChangeStyleKey, T_DeleteStyleKeys } from '@/types/style_functions'

  export let element = null

  export let changeStyleKey: T_ChangeStyleKey
  export let deleteStyleKeys: T_DeleteStyleKeys
</script>

<DefaultBoxStyles {element} {changeStyleKey} />

<FlexChildrenDisplay {element} {changeStyleKey} />

<Position {element} {changeStyleKey} />

<Border {element} {changeStyleKey} {deleteStyleKeys} />

<Shadow {element} {changeStyleKey} {deleteStyleKeys} />

<Corner {element} {changeStyleKey} {deleteStyleKeys} />

<Padding {element} {changeStyleKey} />

<Margin {element} {changeStyleKey} />

<Overflow {element} {changeStyleKey} />

<CustomButtons {element} />
