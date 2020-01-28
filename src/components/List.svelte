<script>
  import { users } from '../store.js'

  (async () => {
    const res = await fetch('/api/user')
    const json = await res.json()
    users.set(json)
  })()
</script>
<div>
  {#if $users && $users.length > 0}
    <ul>
      {#each $users as user}
        <li>{user}</li>
      {/each}
    </ul>
  {:else}
    <p>No users found</p>
  {/if}
</div>