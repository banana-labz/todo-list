<script>
  import {getContext} from "svelte"

  let searchPattern = getContext("pattern")
</script>

<input bind:value={$searchPattern} placeholder="search"/>