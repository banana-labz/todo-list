<script>
	export let label, important, done, onDone, onImportant, onDelete
  import Delete from "svelte-awesome/icons/trashO"
  import Done from "svelte-awesome/icons/check"
  import Important from "svelte-awesome/icons/exclamation"
  import IconButton from "./IconButton.svelte"

  const getClass = (important, done) => {
    let result = ""
    if (important)
      result += " " + "important"
    if (done)
      result += " " + "done"
    return result
  }

</script>

<span class="todo-list-item">
  <span class={"todo-list-item-label" + getClass(important, done)}>{label}</span>
  <div class="todo-list-item-actions">
    <IconButton color="#17A2B8" icon={Important} on:click={onImportant}/>
    <IconButton color="#28A745" icon={Done} on:click={onDone}/>
    <IconButton color="#DC3545" icon={Delete} on:click={onDelete}/>
  </div>
</span>

<style>
  .todo-list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    outline: 1px solid #CED4DA;
    padding: 4px;
  }
  
  .todo-list-item-label {
    overflow: hidden;
  }

  .todo-list-item-actions {
    display: flex;
    flex-direction: row;
    gap: 4px;
  }

  .important {
    font-weight: bold;
  }

  .done {
    text-decoration: line-through;
  }
</style>