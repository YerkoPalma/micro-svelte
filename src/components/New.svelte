<script>
  import { users } from '../store.js'
  let form
  let name = ''

  async function onSubmit (event) {
    const formData = new FormData(form)
    let data = {}
    for (const d of formData.entries()) {
      data[d[0]] = d[1]
    }

    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    if (response.ok) {
      users.update(u => {
        u = [...u, formData.get('name')]
        return u
      })
      name = ''
    }
  }
</script>

<form bind:this={form} on:submit|preventDefault ={onSubmit}>
  <input bind:value={name} type="text" placeholder="Name" name="name" id="name"/>
  <button type="submit">Add</button>
</form>
