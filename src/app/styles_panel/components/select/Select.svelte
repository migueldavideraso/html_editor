
<script lang="ts">

  export let value: string = ''
  export let onChange: (value: string) => void = () => {}

</script>

<select bind:value={value} on:change={e => onChange(e.currentTarget.value)}>
  <slot />
</select>