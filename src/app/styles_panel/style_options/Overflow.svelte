<script lang="ts">
  import type { I_Element } from '@/types/main'

  import StylesButton from '../StylesButton.svelte'
  import Option from '../components/select/Option.svelte'
  import Select from '../components/select/Select.svelte'
  import { getChangeStyleHandler, getStyleKey } from '@/helpers/elements'
  import { getElementState } from '@/global_state/_element'

  export let element: I_Element

  const elementStore = getElementState(element.id)

</script>

<StylesButton title="Overflow">
  <section class="elements_grid">
    <div class="input_group">
      <div class="title">Overflow x</div>

      <Select
        value={getStyleKey(element, 'overflow-x') || 'visible'}
        onChange={getChangeStyleHandler(elementStore, 'overflow-x')}
      >
        <Option value="visible" text="Content will not be clipped" />
        <Option value="scroll" text="Add scrollbars" />
        <Option value="auto" text="Add scrollbars only when necessary" />
        <Option value="hidden" text="Hide overflow content" />
      </Select>
    </div>

    <div class="input_group">
      <div class="title">Overflow y</div>

      <Select
        value={getStyleKey(element, 'overflow-y') || 'visible'}
        onChange={getChangeStyleHandler(elementStore, 'overflow-y')}
      >
        <Option value="visible" text="Content will not be clipped" />
        <Option value="scroll" text="Add scrollbars" />
        <Option value="auto" text="Add scrollbars only when necessary" />
        <Option value="hidden" text="Hide overflow content" />
      </Select>
    </div>
  </section>
</StylesButton>

<style>
  .elements_grid {
    grid-template-columns: 1fr !important;
  }
</style>
