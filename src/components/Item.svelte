<script>
	export let item

  const {label, important, done} = item
</script>

<span class="todo-list-item">
  <span>{label}</span>
  <button>Done</button>
  <button>Important</button>
  <button>Delete</button>
</span>

<style>
  .todo-list-item {
    display: flex;
    flex-direction: row;
  }
</style>