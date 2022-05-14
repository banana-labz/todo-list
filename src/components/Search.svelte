<script>
  import {getContext} from "svelte"

  let filter = getContext("filter")
</script>

<input bind:value={$filter} placeholder="search"/>