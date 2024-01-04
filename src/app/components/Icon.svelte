<script lang="ts">
  export let iconName: string = 'error-404'

  const attr = structuredClone($$props)
  const path = `../../icons/${iconName}.svg?raw` // "svg?raw" is a feature of Vite.js
  const source = import(/* @vite-ignore */ path).then(elm => {
    const { default: raw } = elm
    const parser = new DOMParser()
    const domElement = parser.parseFromString(raw, 'image/svg+xml')
    const svg = domElement.children[0]

    for (const key in attr) {
      if (attr[key] === 'class') {
        const svgClass = Array.from(svg.classList.values())
        const attrClass = attr[key].split(' ')

        svg.setAttribute('class', [...svgClass, ...attrClass].join(' '))
      }

      svg.setAttribute(key, attr[key])
    }

    return svg
  })
</script>

{#await source then svg}
  {@html svg.outerHTML}

  <style>
    svg {
      height: 16px;
      width: 16px;
      display: block;
    }
  </style>
{/await}
