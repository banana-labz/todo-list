<script>
  export let color, icon
  import Icon from "svelte-awesome"
</script>

<button {...$$restProps} class="icon-button" style="--color: {color}" on:click>
  <Icon data={icon}/>
</button>

<style>
  .icon-button {
    width: 32px;
    color: var(--color);
    border: 1px solid var(--color);
  }
</style>