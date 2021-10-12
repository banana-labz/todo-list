import TodoListItem from "../todo-list-item/todo-list-item"
import "./todo-list.css"

export const TodoList = ({ todos, onClickDelete, onToggleImportant, onToggleDone }) => {
    return (
        <ul className="list-group todo-list">
        {todos.map(item => {
            const {id, ...props} = item
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem 
                        {...props}
                        onClickDelete={() => onClickDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}
                    />
                </li>
            )
        })}
        </ul>
    )
}