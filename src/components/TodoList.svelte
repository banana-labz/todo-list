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
</script>

<ul>
	{#each filterTodoList($todoList, $searchPattern) as item}
		<li>
      <Item {...item}/>
    </li>
	{/each}
</ul>