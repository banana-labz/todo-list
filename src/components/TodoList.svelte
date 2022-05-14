<script>
  import {getContext} from "svelte"
  import Item from "./Item.svelte"

  let todoList = getContext("todo-list")
</script>

<ul>
	{#each $todoList as item}
		<li>
      <Item {item}/>
    </li>
	{/each}
</ul>