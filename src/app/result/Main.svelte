<script>
  import { elementsChildrenState } from '../../global_state/sections'
  import Element from './Element.svelte'
  import { initHoverController } from './events_controller/hover_page_controller'

  let elementsOfFirstLevel = []

  elementsChildrenState.subscribe(state => {
    elementsOfFirstLevel = state['null'] || []
  })

  initHoverController()
</script>

<section class="page">
  {#each elementsOfFirstLevel as element (element.id)}
    <Element elementId={element.id} />
  {/each}
</section>

<style>
  .page {
    width: 100%;
    height: 100%;
    box-shadow: var(--box-shadow);
  }

  .page :global(.mask) {
    position: absolute;
    /* background-color: red; */
  }

  .page :global(.mask span) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    border-radius: 5px;
    background-size: 20px 20px;
    animation: hover_element__lines 2s linear infinite;
    background-color: rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.15) 75%,
      transparent 75%,
      transparent
    );

    border: 1.5px solid rgba(255, 255, 255, 0.75);
  }

  .page :global(.mask.brightness span) {
    border: 1.5px solid rgba(0, 0, 0, 0.75);
  }

  .page :global(.mask.hover span) {
    border: none;
  }

  @keyframes hover_element__lines {
    from {
      background-position: 20px 0;
    }
    to {
      background-position: 0 0;
    }
  }
</style>
