<script>
  import {getContext} from "svelte"
  import {FilterOptions} from "../stores/filter"
  
  let searchPattern = getContext("pattern")
  let filter = getContext("filter")
</script>

<section class="search">
  <input
    bind:value={$searchPattern}
    placeholder="search"
    type="text"
    class="search-input"
  />
  <select class="search-select" bind:value={$filter}>
    {#each FilterOptions as filter}
      <option value={filter}>{filter}</option>
    {/each}
  </select>
</section>

<style>
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .search-input {
    height: 28px;
  }

  .search-select {
    width: 104px;
    height: 28px;
    background-color: transparent;
    border: 1px solid #CED4DA;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
  }
</style>