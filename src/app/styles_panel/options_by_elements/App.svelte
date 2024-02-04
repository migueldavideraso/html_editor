<script lang="ts">

  import type { I_Element } from '@/types/main'

  import { onDestroy } from 'svelte'
  import { getElementState } from '@/global_state/_element'

  import Margin from '../style_options/Margin.svelte'
  import Padding from '../style_options/Padding.svelte'
  import Overflow from '../style_options/Overflow.svelte'
  import DefaultBoxStyles from '../style_options/DefaultBoxStyles.svelte'

  export let elementId: I_Element['id']
  
  let element: I_Element
  const elementStore = getElementState(elementId)

  const unsubscribe = elementStore.subscribe((state) => {
    element = state.element
  })

  onDestroy(unsubscribe)

</script>

<DefaultBoxStyles {element} />

<Padding {element} />

<Margin {element} />

<Overflow {element} />
