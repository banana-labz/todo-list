<script>
  import {getContext} from "svelte"
  import Item from "./Item.svelte"

  const todoList = getContext("todoList")
  const searchPattern = getContext("pattern")

  const filterTodoList = (list, pattern) => {
    if (pattern.length === 0) {
      return list
    }
    else {
      const lcasePattern = pattern.toLowerCase()
      return list.filter(({label}) => (
        label.toLowerCase().search(lcasePattern) !== -1
      ))
    }
  }

  const createDoneHandler = (id) => () => {
    $todoList = $todoList.map(item => (
      id === item.id ? {...item, done: !item.done} : item
    ))
  }
  const createImportantHandler = (id) => () => {
    $todoList = $todoList.map(item => (
      id === item.id ? {...item, important: !item.important} : item)
    )
  }
  const createRemoveHandler = (id) => () => {
    $todoList = $todoList.filter(item => id !== item.id)
  }
</script>

<ul class="todo-list">
	{#each filterTodoList($todoList, $searchPattern) as item}
		<li>
      <Item
        {...item}
        onDone={createDoneHandler(item.id)}
        onImportant={createImportantHandler(item.id)}
        onDelete={createRemoveHandler(item.id)}
      />
    </li>
	{/each}
</ul>

<style>
  .todo-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1px;
  }
</style>