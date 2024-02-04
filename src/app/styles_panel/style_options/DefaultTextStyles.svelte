<script lang="ts">
  import type { I_Element } from '@/types/main'

  import TextEditor from '../components/text_editor/Main.svelte'
  import DefaultBoxStyles from './DefaultBoxStyles.svelte'
  import { getElementState } from '@/global_state/_element'

  export let element: I_Element

  const elementStore = getElementState(element.id)

</script>

<DefaultBoxStyles {element} />

<TextEditor {element} setText={elementStore.setText} />
