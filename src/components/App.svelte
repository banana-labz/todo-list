<script>
  import {setContext} from "svelte"
  import todoList from "../stores/todoList"
  import pattern from "../stores/pattern"
  import filter from "../stores/filter"
  import Layout from "./Layout.svelte"
  import Header from "./Header.svelte"
  import Search from "./Search.svelte"
  import TodoList from "./TodoList.svelte"
  import Add from "./Add.svelte"

  setContext("todoList", todoList)
  setContext("pattern", pattern)
  setContext("filter", filter)
</script>

<Layout>
  <Header/>
  <Search/>
  <TodoList/>
  <Add/>
</Layout>