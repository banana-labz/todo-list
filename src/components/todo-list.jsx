import { TodoListItem } from "./todo-list-item"
import "./todo-list.css"

export const TodoList = ({ todos }) => {
    return (
        <ul className="list-group todo-list">
        {todos.map(item => {
            const {id, ...props} = item
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem {...props}/>
                </li>
            )
        })}
        </ul>
    )
}