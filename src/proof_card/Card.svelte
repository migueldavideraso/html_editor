
<script lang="ts">

	export let img_src = ''


</script>


<div class="card">

	<div class="img_box">

		<!-- <div class="text_icon"> 1 </div> -->
		<img src={img_src}>

	</div>

	<section class="content">

		<section class="title">
			My first project
		</section>

		<section class="info">
			<b>Collaborators:</b> 4
		</section>

		<section class="info">
			<b>Templates:</b> 4
		</section>

		<section class="info controllers">
			<button class="fas fa-info app_class--button btn-icon circle"/>
			<button class="fas fa-arrow-right app_class--button btn-icon circle"/>
		</section>

	</section>

</div>

<style>

	.card {
		flex-direction: column;
		position: relative;
		--background: #fff;
		display: flex;
		width: 100%;
		height: 150px;
		border-radius: 20px;
		color: rgba(0, 0, 0, .8);
		background: var(--background);
		transition: height 0.5s, width 0.5s;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);


		/*animation: card_animation 1s infinite;*/


		/*color: #fff;*/
		/*--background: #26282a;*/
		/*box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);*/
	}

	@keyframes card_animation {
		0% {
			transform: scale(1.0);
		}
		50% {
			z-index: 999;
			transform: scale(1.05);
		}
		100% {
			transform: scale(1.0);
		}
	}

	.card:hover {
		animation: none;
		z-index: 999;
		height:  250px;
	}

	.img_box {
		place-content: center;
		position: absolute;
		overflow: hidden;
		display: grid;
		left: 50%;
		width: 125px;
		height: 125px;
		border-radius: 20px;
		bottom: calc(100% - 100px);
		transform: translateX(-50%);
		background: var(--background);
		transition: height 0.5s, width 0.5s;

		background: #101012;
		border: 2px solid #fff;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
	}

	.img_box img, .img_box .text_icon {
		width: 165px;
		/*border-radius: 20px;*/
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	}

	.img_box > .text_icon{
		/*border: 1px solid rgba(255, 255, 255, .75);*/
	}


	.text_icon {
		place-content: center;
		background: #242730;
		display: grid;
		color: #fff;
		height: 125px;
		font-size: 50px;
		font-weight: 600;
	}

	.card:hover .img_box, .card:hover .text_icon {
		width: 165px;
		height: 165px;
	}

	.content {
		flex-direction: column;
		display: flex;
		/*height: inherit;*/
		flex: auto;
		width: 100%;
		grid-gap: 5px;
		margin-top: 100px;
		padding: 10px 20px;
	}

	.title {
		font-weight: 600;
		font-size: 1.1rem;
		margin-bottom: 5px;
	}

	.info {
		display: none;
		opacity: 0;
		font-size: 0.8rem;
		margin-left: 10px;
	}

	.card:hover .info {
		opacity: 0;
		display: block;
		animation: info_animation .75s;
		animation-delay: .1s;
		animation-fill-mode: forwards;  
	}

	@keyframes info_animation {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.controllers {
		justify-content: flex-end;
		align-items: center;
		grid-gap: 10px;
	}


	.card:hover .controllers {
		display: flex;
		opacity: 0;
	}

	.controllers button {
		background: #4e4d5a;
		border: none;
		color: #ffffff;
		--size: 35px;
		box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 30%);
	}

</style>


