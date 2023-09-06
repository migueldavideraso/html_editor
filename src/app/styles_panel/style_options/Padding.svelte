
<script lang="ts">
  
  import type { I_Element } from '@/types/main';

  import StylesButton from '../StylesButton.svelte'
	import SizeInputs from '../components/SizeInputs.svelte'

  export let changeStyleKey:(key: string, value: string) => void = () => {}
	export let element: I_Element

</script>

<StylesButton title="Padding" >

	<section class="elements_grid">

		<div class="input_group">

			<div class="title"> padding top: </div>

			<SizeInputs
				showOptionTypes={false}
				units={[ 'px', '%', 'rem' ]}
				optionValue={element.styles['padding-top'] || ''}
				onChange={(value) => changeStyleKey('padding-top', value)}
			/>

		</div>

		<div class="input_group">

			<div class="title"> padding bottom: </div>

			<SizeInputs
				showOptionTypes={false}
				units={[ 'px', '%', 'rem' ]}
				optionValue={element.styles['padding-bottom'] || ''}
				onChange={(value) => changeStyleKey('padding-bottom', value)}
			/>

		</div>

		<div class="input_group">

			<div class="title"> padding left: </div>

			<SizeInputs
				showOptionTypes={false}
				units={[ 'px', '%', 'rem' ]}
				optionValue={element.styles['padding-left'] || ''}
				onChange={(value) => changeStyleKey('padding-left', value)}
			/>

		</div>

		<div class="input_group">

			<div class="title"> padding right: </div>

			<SizeInputs
				showOptionTypes={false}
				units={[ 'px', '%', 'rem' ]}
				optionValue={element.styles['padding-right'] || ''}
				onChange={(value) => changeStyleKey('padding-right', value)}
			/>

		</div>

	</section>

</StylesButton>
