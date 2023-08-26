
<script lang="ts">

	import Card from './Card.svelte'

	const images = [
		'./perfil_1.jpg',
		'./perfil_2.jpg',
		'./perfil_3.jpg',
	]

	const cards = [...Array(3)].map((...args) => {
		return {
			id: args[1] + 1
		}
	})

	cards.forEach(obj => {
		obj.img_src = images[obj.id % 3]
	})

</script>


<div class="page">

	<section class="header">
		Mermejo
	</section>

	<section class="main_title">
		My Projects
	</section>

	<section class="cards_container">

		{#each cards as { img_src, id } (id)}
			<Card {img_src} />
		{/each}

	</section>

</div>


<style>

	.page {
		background: #eee;
		overflow: auto;
		width: 100%;
		height: 100vh;

		/*background: #1c1c22;*/
	}

	.header {
		background: #fff;
		position: sticky;
		top: 0px;
		z-index: 99;
		font-weight: 600;
		font-size: 1.1rem;
		padding: 15px 20px;

		/*color: #fff;*/
		/*background: #161a1e;*/
	}

	.cards_container {
		place-content: baseline;
		place-items: center;
		position: relative;
		/*background: #eee;*/
		/*height: inherit;*/
		/*overflow: auto;*/
		display: grid;
		/*flex: auto;*/
		grid-gap: 35px 20px;
		padding: 35px 20px 20px;
		grid-template-columns: repeat(auto-fill, minmax(min(100% - 20px, 255px), 1fr));

/*
		background: rgb(50, 50, 50);
		background: rgb(218,31,31);
		background: linear-gradient(7deg, rgba(218,31,31,1) 0%, rgba(222,176,109,1) 100%);
		background: #eee;*/



		place-content: center;
		background: #22242a;
		height: 220px;
		border-radius: 20px;
		margin: 20px 30px 0px;
		box-shadow: 0px 5px 10px 0px rgb(0 0 0 / 40%);
	}


	.main_title {
		margin: 20px;
		font-weight: 600;
		font-size: 1.75rem;
	}

</style>









