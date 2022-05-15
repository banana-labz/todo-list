<script>
	export let id, label, important, done

  import Delete from "svelte-awesome/icons/trashO"
  import Done from "svelte-awesome/icons/check"
  import Important from "svelte-awesome/icons/exclamation"

  import IconButton from "./IconButton.svelte"

</script>

<span class="todo-list-item">
  <span>{label}</span>
  <div class="todo-list-item-actions">
    <IconButton color="#17A2B8" icon={Important}/>
    <IconButton color="#28A745" icon={Done}/>
    <IconButton color="#DC3545" icon={Delete}/>
  </div>
</span>

<style>
  .todo-list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border: 1px solid #CED4DA;
    border-radius: 4px;
    padding: 4px;
  }

  .todo-list-item-actions {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }
</style>