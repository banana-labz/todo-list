<script>
  import {getContext} from "svelte"

  let todoLabel = ""

  let todoList = getContext("todoList")

  const handleAddTodo = () => {
    if (todoLabel.length > 0) {
     const id = Math.random().toString(36).substring(2, 9)
      const item = {id, label: todoLabel, important: false, done: false}
      $todoList = [...$todoList, item]
      todoLabel = ""
    }
  }
</script>

<section class="add-todo">
  <input bind:value={todoLabel}/>
  <button on:click={handleAddTodo} class="add-todo-button">Add</button>
</section>

<style>
  .add-todo {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  .add-todo-button {
    width: 200px;
  }
</style>