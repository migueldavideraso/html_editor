<script lang="ts">
  import type { I_Element } from '@/types/main'

  import TextEditor from '../components/text_editor/Main.svelte'
  import DefaultBoxStyles from './DefaultBoxStyles.svelte'
  import type { T_ChangeElementKey, T_ChangeStyleKey } from '@/types/style_functions'

  export let changeStyleKey: T_ChangeStyleKey
  export let changeElementKey: T_ChangeElementKey

  export let element: I_Element
</script>

<DefaultBoxStyles {element} {changeStyleKey} />

<TextEditor {element} {changeElementKey} />
