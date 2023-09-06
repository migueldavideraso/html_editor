
<script lang="ts">
  
  import type { I_Element } from '@/types/main';

	import StylesButton from '../StylesButton.svelte'

  export let changeStyleKey:(key: string, value: string) => void = () => {}
	export let element: I_Element

</script>


<StylesButton title="Overflow" >


	<section class="elements_grid">

		<div class="input_group">

			<div class="title">Overflow x</div>

			<select
				value={element.styles['overflow-x'] || 'visible'}
				on:change={(e) => changeStyleKey('overflow-x', e.currentTarget.value)}
			>
				<option value="visible" >Content will not be clipped</option>
				<option value="scroll" >Add scrollbars</option>
				<option value="auto" >Add scrollbars only when necessary</option>
				<option value="hidden">Hide overflow content</option>
			</select>

		</div>

		<div class="input_group">

			<div class="title">Overflow y</div>

			<select
				value={element.styles['overflow-y'] || 'visible'}
				on:change={(e) => changeStyleKey('overflow-y', e.currentTarget.value)}
			>
				<option value="visible" >Content will not be clipped</option>
				<option value="scroll" >Add scrollbars</option>
				<option value="auto" >Add scrollbars only when necessary</option>
				<option value="hidden">Hide overflow content</option>
			</select>

		</div>

	</section>



</StylesButton>


<style>

	.elements_grid {
		grid-template-columns: 1fr !important;
	}

</style>

