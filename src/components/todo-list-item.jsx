import "./todo-list-item.css"

export const TodoListItem = ({ label, important = false }) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
    
    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label" style={style}>
                {label}
            </span>
    
            <button className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>
    
            <button className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash"/>
            </button>
        </span>
    )
}