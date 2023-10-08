<script lang="ts">
  import { getElementChildrenStore, getElementDataStore, selectedSectionState } from '@/global_state/sections'
  import { afterUpdate } from 'svelte'
  import { getElementStyle, getItemComponent, getStyles } from './controller'

  import type { I_Element } from '@/types/main'
  import EventsController from './events_controller/Main.svelte'

  export let elementId: I_Element['id'] = null

  let element: I_Element
  let children: I_Element[] = []
  let selected = false

  let afterUpdateElement: (elementId: I_Element['id']) => {}

  getElementChildrenStore(elementId).subscribe(state => {
    children = state
  })

  getElementDataStore(elementId).subscribe(state => {
    element = state
  })

  afterUpdate(() => {
    if (typeof afterUpdateElement === 'function') {
      afterUpdateElement(elementId)
    }
  })

  const Component = getItemComponent({ element })

  selectedSectionState.subscribe(state => {
    if (state === elementId) {
      selected = true
      return
    }

    if (!state) {
      selected = null
      return
    }

    selected = false
  })

  $: styles = getStyles({ element })
  $: elementStyles = getElementStyle({ element, styles })

  $: allowDrag = element?.type !== 'app'
  $: allowDrop = element?.type !== 'text'
  $: allowCreateEventsController = Boolean(element?.type)
</script>

{@html elementStyles}

<Component {element}>
  {#if allowCreateEventsController}
    <EventsController bind:afterUpdateElement {selected} {elementId} {allowDrop} {allowDrag} />
  {/if}

  {#if children?.length}
    {#each children as element (element.id)}
      <svelte:self elementId={element.id} />
    {/each}
  {/if}
</Component>
