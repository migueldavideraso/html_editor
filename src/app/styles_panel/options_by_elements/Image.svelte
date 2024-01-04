<script lang="ts">
  import type { T_ChangeElementKey, T_ChangeStyleKey, T_DeleteStyleKeys } from '@/types/style_functions'
  import CustomButtons from '../CustomButtons.svelte'
  import DefaultBoxStyles from '../style_options/DefaultBoxStyles.svelte'
  import Details from '../style_options/Details.svelte'
  import FlexOptions from '../style_options/Flex.svelte'
  import Input from '../style_options/Input.svelte'
  import Margin from '../style_options/Margin.svelte'
  import Overflow from '../style_options/Overflow.svelte'
  import Padding from '../style_options/Padding.svelte'
  import Position from '../style_options/Position.svelte'
  import Border from '../style_options/border/Main.svelte'
  import Shadow from '../style_options/box_shadow/Main.svelte'
  import Corner from '../style_options/corner/Main.svelte'

  export let changeStyleKey: T_ChangeStyleKey
  export let deleteStyleKeys: T_DeleteStyleKeys
  export let element = null
  export let changeElementKey: T_ChangeElementKey

  const onChangeInput = (attrName: string, value: string | null) => {
    changeElementKey('attributes', { ...element.attributes, [attrName]: value })
  }
</script>

<DefaultBoxStyles {element} {changeStyleKey} showFill={false} />

<Position {element} {changeStyleKey} />

<Border {element} {changeStyleKey} {deleteStyleKeys} />

<Shadow {element} {changeStyleKey} {deleteStyleKeys} />

<Corner {element} {changeStyleKey} {deleteStyleKeys} />

<Padding {element} {changeStyleKey} />

<Margin {element} {changeStyleKey} />

<Overflow {element} {changeStyleKey} />

<FlexOptions {element} {changeStyleKey} />

<Details title="Attributes">
  <Input
    inputValue={element.attributes.src}
    onChange={srcValue => {
      onChangeInput('src', srcValue)
    }}
    placeholder="https://example.com"
    label="Url"
    type="url"
  />

  <Input
    inputValue={element.attributes.alt}
    onChange={altValue => {
      onChangeInput('alt', altValue)
    }}
    label="Alt"
    type="text"
  />

  <Input
    inputValue={element.attributes.title}
    onChange={titleValue => {
      onChangeInput('title', titleValue || null)
    }}
    label="Title"
    type="text"
  />
</Details>

<CustomButtons {element} />
