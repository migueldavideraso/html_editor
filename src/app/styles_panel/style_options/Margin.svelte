

<script>

	import StylesButton from '../StylesButton.svelte'
	import SizeInputs from '../components/SizeInputs.svelte'

	export let element = {}
	export let changeStyleKey = () => {}


</script>


<StylesButton title="Margin" >

	<section class="elements_grid">

		<div class="input_group">

			<div class="title"> margin top: </div>

			<SizeInputs
				units={[ 'px', '%', 'rem' ]}
				optionsTypes={[ 'numeric', 'unset', 'auto' ]}
				optionValue={element.styles['margin-top'] || ''}
				onChange={(value) => changeStyleKey('margin-top', value)}
			/>

		</div>



		<div class="input_group">

			<div class="title"> margin bottom: </div>

			<SizeInputs
				units={[ 'px', '%', 'rem' ]}
				optionsTypes={[ 'numeric', 'unset', 'auto' ]}
				optionValue={element.styles['margin-bottom'] || ''}
				onChange={(value) => changeStyleKey('margin-bottom', value)}
			/>

		</div>



		<div class="input_group">

			<div class="title"> margin left: </div>

			<SizeInputs
				units={[ 'px', '%', 'rem' ]}
				optionsTypes={[ 'numeric', 'unset', 'auto' ]}
				optionValue={element.styles['margin-left'] || ''}
				onChange={(value) => changeStyleKey('margin-left', value)}
			/>

		</div>



		<div class="input_group">

			<div class="title"> margin right: </div>

			<SizeInputs
				units={[ 'px', '%', 'rem' ]}
				optionsTypes={[ 'numeric', 'unset', 'auto' ]}
				optionValue={element.styles['margin-right'] || ''}
				onChange={(value) => changeStyleKey('margin-right', value)}
			/>

		</div>


	</section>


</StylesButton>


<style>

</style>


