
<script>

	export let isOptionsShowing = false


</script>


<section class="header_section {isOptionsShowing ? 'show' : 'hide'}" >

	<span class="mask" />

	<img class="icon" src="./large_icon.png" alt="icon" />
	<div class="title">Default Title</div>

</section>


<style>

	.header_section {
		background-color: #ffffff;
		align-items: center;
		position: relative;
		white-space: pre;
		overflow: hidden;
		display: flex;
		left: 0px;
		width: 0px;
		padding: 0px;
		grid-gap: 10px;
		font-weight: 600;
		font-size: 1.2rem;
		border-radius: 10px;
		box-shadow: var(--box-shadow);
		animation: header_section_animation_hide 1s;
	}

	.header_section.show {
		width: 250px;
		padding: 10px;
		animation: header_section_animation_show 1s;
	}

	.mask {
		position: absolute;
		z-index: 1;
	}

	.header_section.hide .mask {
		background-color: #fff;
		top: 0px;
		left: 0px;
		opacity: 1;
		width: 100%;
		height: 100%;
		animation: mask_header_section_animation_hide 1s;
	}

	.icon {
		position: relative;
		margin: 0px;
		height: 25px;
	}

	@keyframes mask_header_section_animation_hide {
		0% {
			opacity: .1;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes header_section_animation_show {
		0% {
			width: 0px;
			padding: 0px;
		}
		100% {
			width: 250px;
		}
	}

	@keyframes header_section_animation_hide {
		0% {
			width: 250px;
			padding: 10px;
		}
		100% {
			width: 0px;
			padding: 0px;
		}
	}

</style>

