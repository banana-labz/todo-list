<script>
  import {getContext} from "svelte"

  const todoList = getContext("todoList")
  
  const getDescriptionText = (todoList) => {
    const done = todoList.filter(item => item.done).length
    const total = todoList.length
    return `${done} done, ${total - done} to go`
  }
</script>

<div class="header">
  <h2>Todo List</h2>
  <p>{getDescriptionText($todoList)}</p>
</div>

<style>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>