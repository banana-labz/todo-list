<script>
	import {setContext} from "svelte"
	import {todoList, filter} from "../stores"
	
	import Header from "./Header.svelte"
	import TodoList from "./TodoList.svelte"
	import Add from "./Add.svelte"

	setContext("todo-list", todoList)
	setContext("filter", filter)
</script>

<Header/>
<TodoList/>
<Add/>