<script>
  let users = []
</script>
<div>
  {#if users.length > 0}
    <ul>
      {#each users as user}
        <li>{user}</li>
      {/each}
    </ul>
  {:else}
    <p>No users found</p>
  {/if}
</div>