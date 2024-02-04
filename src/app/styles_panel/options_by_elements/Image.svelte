<script lang="ts">
  import type { I_Element } from '@/types/main'
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
  import { getElementState } from '@/global_state/_element'

  export let element: I_Element = null

  const elementStore = getElementState(element.id)

  const onChangeInput = (attrName: string, value: string|null) => {
    elementStore.changeAttribute(attrName, value)
  }
</script>

<DefaultBoxStyles {element} showFill={false} />

<Position {element} />

<Border {element} />

<Shadow {element} />

<Corner {element} />

<Padding {element} />

<Margin {element} />

<Overflow {element} />

<FlexOptions {element} />

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
