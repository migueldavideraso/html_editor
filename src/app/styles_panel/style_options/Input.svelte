<script lang="ts">
  export let onChange: (value: string) => void
  export let inputValue: string = ''
  export let label: string

  let restOfAttr = {}
  const repeatedAttr = ['onChange', 'inputValue', 'label']

  // The repeated attributes (export section with types above) are removed to avoid some boilerplate
  for (const key in $$props) {
    const value = $$props[key]

    if (repeatedAttr.some(v => v === key)) {
      continue
    }

    Object.assign(restOfAttr, { [key]: value })
  }
</script>

{#if !label}
  <input {...restOfAttr} on:input={evt => onChange(evt.currentTarget.value)} value={inputValue} />
{:else}
  <label class="input-container">
    {label}:
    <input {...restOfAttr} on:input={evt => onChange(evt.currentTarget.value)} value={inputValue} />
  </label>
{/if}

<style>
  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 0.78rem;
  }

  input {
    border-radius: 5px;
    padding: 10px 12.5px;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.15);
    max-width: 100% !important;
  }

  input::placeholder {
    opacity: 0.75;
  }
</style>
