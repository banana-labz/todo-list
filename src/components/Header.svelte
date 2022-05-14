<script>
  import {getContext} from "svelte"

  const todoList = getContext("todo-list")
  const done = $todoList.filter(item => item.done)
  
  const listLength = $todoList.length
  const doneLength = done.length
</script>

<div class="header">
  <h2>Todo List</h2>
  <p>{doneLength} done, {listLength - doneLength} to go</p>
</div>

<style>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>