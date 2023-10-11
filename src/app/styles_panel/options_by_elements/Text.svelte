<script lang="ts">
  import DefaultTextStyles from '../style_options/DefaultTextStyles.svelte'

  import Margin from '../style_options/Margin.svelte'
  import Overflow from '../style_options/Overflow.svelte'
  import Padding from '../style_options/Padding.svelte'
  import Position from '../style_options/Position.svelte'
  import Border from '../style_options/border/Main.svelte'
  import Shadow from '../style_options/box_shadow/Main.svelte'
  import Corner from '../style_options/corner/Main.svelte'

  import type { T_ChangeElementKey, T_ChangeStyleKey, T_DeleteStyleKeys } from '@/types/style_functions'
  import CustomButtons from '../CustomButtons.svelte'

  export let element = null

  export let changeStyleKey: T_ChangeStyleKey
  export let deleteStyleKeys: T_DeleteStyleKeys
  export let changeElementKey: T_ChangeElementKey
</script>

<DefaultTextStyles {element} {changeStyleKey} {changeElementKey} />

<Position {element} {changeStyleKey} />

<Border {element} {changeStyleKey} {deleteStyleKeys} />

<Shadow {element} {changeStyleKey} {deleteStyleKeys} />

<Corner {element} {changeStyleKey} {deleteStyleKeys} />

<Padding {element} {changeStyleKey} />

<Margin {element} {changeStyleKey} />

<Overflow {element} {changeStyleKey} />

<CustomButtons {element} />

<style>
</style>
