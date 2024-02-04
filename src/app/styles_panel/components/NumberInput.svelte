<script lang="ts">

  export let value: string = ''
  export let onChange: (value: string) => void = () => {}
  export let min: number = 0

</script>

<input
  on:change={e => onChange(e.currentTarget.value)}
  bind:value={value}
  {min}
  type="number"
/>