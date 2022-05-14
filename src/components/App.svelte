<script>
	import {setContext} from "svelte"
	import {todoList, filter} from "../stores"
	
	import TodoList from "./TodoList.svelte"
	import Add from "./Add.svelte"

	setContext("todo-list", todoList)
	setContext("filter", filter)
</script>

<TodoList/>
<Add/>