<script>
  import {getContext} from "svelte"

  let todoLabel = ""

  let todoList = getContext("todo-list")

  const handleAddTodo = () => {
    const id = Math.random().toString(36).substring(2, 9)
    const item = {id, label: todoLabel, important: false, done: false}
    $todoList = [...$todoList, item]
    todoLabel = ""
  }
</script>

<div>
  <input bind:value={todoLabel}/>
  <button on:click={handleAddTodo}>Add</button>
</div>