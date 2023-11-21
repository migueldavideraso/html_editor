<script lang="ts">
  import type { I_Element } from '@/types/main'
  import { elementHoverState, allowShowMaskState } from '@/global_state/move_element'
  import { getBrightness } from '@/helpers/main'
  import { onMount, onDestroy } from 'svelte'

  export let parentComponentElement = null
  export let componentElement = null
  export let selected = false
  export let elementId = ''

  export let afterUpdateElement: (elementId: I_Element['id']) => void

  let lockMouseOver = false
  let allowShowMask = true
  let isMouseOver = false
  let brightness = false
  let maskElement = null

  let currentState = 'hide' // or show

  $: if (currentState === 'show' && !allowShowMask) {
    maskElement.style.display = 'none'
  }

  $: if (currentState === 'show' && allowShowMask) {
    maskElement.style.display = ''
  }

  // ------------------------------------------------------
  // Main Methods

  const showMask = () => {
    if (maskElement && allowShowMask) {
      currentState = 'show'
      maskElement.style.display = ''
    }
  }

  const hideMask = () => {
    if (maskElement) {
      currentState = 'hide'
      maskElement.style.display = 'none'
    }
  }

  const setMaskPosition = () => {
    if (!maskElement) {
      return
    }

    const initialSize = 10
    // const { width, height, x, y } = componentElement.getBoundingClientRect()
    const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = componentElement

    const size = initialSize
    const position = initialSize / 2

    maskElement.style.height = `${offsetHeight + size}px`
    maskElement.style.width = `${offsetWidth + size}px`
    maskElement.style.left = `${offsetLeft - position}px`
    maskElement.style.top = `${offsetTop - position}px`
  }

  // ------------------------------------------------------

  onDestroy(() => {
    maskElement.parentElement.removeChild(maskElement)
  })

  onMount(() => {
    // ------------------------------------------------------
    // Create Mask

    const maskId = `events_mask_${elementId}`

    if (document.getElementById(maskId)) {
      return
    }

    maskElement = document.createElement('div')
    maskElement.innerHTML = '<span></span>'
    maskElement.className = 'mask'
    maskElement.id = maskId

    componentElement.insertAdjacentElement('beforebegin', maskElement)

    hideMask()

    // ------------------------------------------------------

    setMaskPosition()
  })

  window.addEventListener('resize', () => {
    setMaskPosition()
  })

  document.addEventListener(
    'scroll',
    () => {
      setMaskPosition()
    },
    true,
  )

  $: if (isMouseOver) {
    setMaskPosition()
  }

  $: if (parentComponentElement) {
    parentComponentElement.onscroll = () => {
      setMaskPosition()
    }
  }

  $: if (afterUpdateElement) {
    afterUpdateElement = () => {
      setMaskPosition()
    }
  }

  // ------------------------------------------------------------------------------
  // set brightness according parent element styles

  $: if (selected || isMouseOver) {
    const styles = getComputedStyle(parentComponentElement)

    brightness = getBrightness(styles['background-color'] || styles['background']) > 125
  }
  // ------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------
  // Show or hide mask and add hover class
  $: {
    if (isMouseOver || selected) {
      showMask()
    } else {
      hideMask()
    }
  }
  // ------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------
  // set brightness class according parent element styles
  $: {
    if (brightness) {
      maskElement && maskElement.classList.add('brightness')
    } else {
      maskElement && maskElement.classList.remove('brightness')
    }
  }
  // ------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------
  // set hover class if it is not selected
  $: {
    if (isMouseOver && !selected) {
      maskElement && maskElement.classList.add('hover')
    } else {
      maskElement && maskElement.classList.remove('hover')
    }
  }
  // ------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------
  // set component hover events and methods

  $: if (componentElement) {
    componentElement.__setLockMouseOver = (val: boolean) => {
      lockMouseOver = val
    }

    componentElement.setLockMouseOver = (val: boolean) => {
      isMouseOver = Boolean(val)
      lockMouseOver = !val

      if (componentElement.parentElement.setLockMouseOver) {
        componentElement.parentElement.setLockMouseOver(isMouseOver)
      }
    }

    componentElement.onmouseover = () => {
      if (lockMouseOver) {
        return
      }

      isMouseOver = true

      if (componentElement.parentElement.setLockMouseOver) {
        componentElement.parentElement.setLockMouseOver(false)
      }
    }

    componentElement.onmouseleave = () => {
      isMouseOver = false

      if (componentElement.parentElement.setLockMouseOver) {
        componentElement.parentElement.setLockMouseOver(true)
      }
    }
  }

  // ------------------------------------------------------------------------------

  elementHoverState.subscribe(elementId => {
    allowShowMask = !elementId
  })

  allowShowMaskState.subscribe(state => {
    allowShowMask = state
  })
</script>
