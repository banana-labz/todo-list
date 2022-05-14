<script>
  import {getContext} from "svelte"
  import Item from "./Item.svelte"

  const todoList = getContext("todo-list")
  const pattern = getContext("filter")

  const filterTodoListByLabel = (list, pattern) => (
    pattern.length > 0 ? list.filter(({label}) => {
      const lcaseLabel = label.toLowerCase()
      const lcasePattern = pattern.toLowerCase()
      return lcaseLabel.search(lcasePattern) !== -1
    }) : list
  )

</script>

<ul>
	{#each filterTodoListByLabel($todoList, $pattern) as item}
		<li>
      <Item {item}/>
    </li>
	{/each}
</ul>