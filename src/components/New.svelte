<script>
  let form

  async function onSubmit (event) {
    const formData = new FormData(form)

    const response = await fetch('/api/user', {
      method: 'POST',
      body: formData
    })
  }
</script>

<form bind:this={form} on:submit|preventDefault ={onSubmit}>
  <input type="text" placeholder="User name..."/>
  <button type="submit">Add</button>
</form>
