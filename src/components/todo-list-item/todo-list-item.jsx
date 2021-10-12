import { Component } from "react"

import "./todo-list-item.css"

export default class TodoListItem extends Component {
    onClickLabel = () => {
        this.setState(({done}) => {
            return { 
                done: !done 
            }
        })
    }

    render() {
        const { label, important, done, onClickDelete, onToggleImportant, onToggleDone } = this.props

        return (
            <span 
                className={
                    "todo-list-item" 
                    + (done ? " done" : "") 
                    + (important ? " important" : "")
                }
            >
                <span 
                    className="todo-list-item-label" 
                    onClick={onToggleDone}
                >
                    {label}
                </span>
        
                <button 
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation"/>
                </button>
        
                <button 
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onClickDelete}
                >
                    <i className="fa fa-trash"/>
                </button>
            </span>
        )
    }
}