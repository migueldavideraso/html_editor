
<script>

	import { componentsData } from './data'

	import Cell from './Cell.svelte'


</script>


<section class="content">

	<Cell title="Text" component={componentsData.text}>
		Custom Text
	</Cell>

	<Cell title="Box" component={componentsData.box}>
		<div class="component__box" />
	</Cell>

	<Cell title="Section" component={componentsData.section}>
		<div class="component__box component__section">
			<div class="component__child" />
			<div class="component__child" style="flex: auto;" />
		</div>
	</Cell>

	<Cell title="Grid" component={componentsData.grid}>
		<div class="component__box component__grid">
			<div class="component__child" />
			<div class="component__child" />
			<div class="component__child" />
			<div class="component__child" />
			<div class="component__child" />
		</div>
	</Cell>

</section>


<style>

	.content {
		display: grid;
		grid-gap: 10px;
		padding: 0px 10px;
		grid-template-columns: repeat(2, 1fr);
	}

	.component__box {
		background: #54525a;
		position: relative;
		width: 90px;
		height: 45px;
		padding: 3.5px;
		grid-gap: 3.5px;
		border-radius: 5px;
		border: 2px dashed black;
	}

	.component__section {
		flex-direction: column;
		display: flex;
		background: #a6a4ae;
	}

	.component__grid {
		place-content: baseline;
		background: #a6a4ae;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
	}

	.component__child {
		background: #54525a;
		padding: 5px;
		border-radius: 2px;
	}

</style>

