<script lang="ts">
  import Margin from '../style_options/Margin.svelte'
  import Padding from '../style_options/Padding.svelte'
  import Overflow from '../style_options/Overflow.svelte'
  import DefaultBoxStyles from '../style_options/DefaultBoxStyles.svelte'
  import type { T_ChangeStyleKey } from '@/types/style_functions'

  export let element = null
  export let changeStyleKey: T_ChangeStyleKey
</script>

<DefaultBoxStyles {element} {changeStyleKey} />

<Padding {element} {changeStyleKey} />

<Margin {element} {changeStyleKey} />

<Overflow {element} {changeStyleKey} />
