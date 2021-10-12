import { Component } from "react"
import { render } from "react-dom"

import { Header } from "./components/header/header"
import { SearchPanel } from "./components/search-panel/search-panel"
import { TodoList } from "./components/todo-list/todo-list"

import AddItem  from "./components/add-item/add-item"
import ItemStatusFilter from "./components/item-status-filter/item-status-filter"

import "./index.css"


class App extends Component {
    /// Helper functions
    findItemById = (array, id) => array.findIndex(el => el.id === id)
    createItem = label => {
        return {
            label,
            imprtant: false,
            done: false,
            id: Math.random().toString(36).substr(2, 9) 
            // not the most stable solution :)
        }
    }
    toggleProperty = (array, id, prop) => {
        const copy = [ ...array ]
        const idx = this.findItemById(copy, id)
        copy[idx][prop] = !copy[idx][prop]
        return copy
    }
    ///
    state = {
        data: [
            this.createItem("Wake up"),
            this.createItem("Work"),
            this.createItem("Sleep")
        ]
    }

    /// handlers
    deleteItem = id => {
        this.setState(({ data }) => {
            const copy = [ ...data ]
            copy.splice(this.findItemById(copy, id), 1)
            return { data: copy }
        })
    }

    addItem = label => {
        this.setState(({ data }) => {
            return {
                data: [ ...data, this.createItem(label) ]
            }
        })
    }

    toggleImportant = id => {
        this.setState(({ data }) =>{
            return { data: this.toggleProperty(data, id, "important") }
        })
    }

    toggleDone = id => {
        this.setState(({ data }) =>{
            return { data: this.toggleProperty(data, id, "done") }
        })
    }
    ///
    render() {
        const { data } = this.state
        const doneCount = data.filter(el => el.done).length
        return (
            <div className="todo-app">
                <Header undone={data.length - doneCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList 
                    todos={this.state.data}
                    onClickDelete={this.deleteItem}
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone}
                />
                <AddItem onClickAdd={this.addItem}/>
            </div>
        )
    }
}

render(<App/>, document.getElementById("root"))