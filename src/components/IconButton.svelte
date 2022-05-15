<script>
  export let color, icon, onClick

  import Icon from "svelte-awesome"
</script>

<button
  class="icon-button"
  style="--color: {color}"
  on:click={onClick}
>
  <Icon data={icon}/>
</button>

<style>
  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 28px;
    border-radius: 4px;
    color: var(--color);
    border: 1px solid var(--color);
    background-color: transparent;
  }
</style>