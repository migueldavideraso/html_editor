<article class="custom-input-container">
  <label for="custom-input">Url</label>
  <input class="custom-input" type="url" placeholder="https://example.com" id="custom-input" />
</article>

<style>
  .custom-input-container {
    margin: 0 10px;
  }

  .custom-input-container > label {
    font-size: 0.78rem;
  }

  .custom-input-container .custom-input {
    background: transparent;
    display: flex;
    border-radius: 5px;
    padding: 10px 12.5px;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.15);
    width: 100%;
  }

  .custom-input-container .custom-input::placeholder {
    opacity: 0.75;
  }
</style>
