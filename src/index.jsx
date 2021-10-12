import { Component } from "react"
import { render } from "react-dom"

import { Header } from "./components/header/header"
import { SearchPanel } from "./components/search-panel/search-panel"
import { TodoList } from "./components/todo-list/todo-list"
import { ItemStatusFilter } from "./components/item-status-filter/item-status-filter"

import AddItem  from "./components/add-item/add-item"

import "./index.css"

class App extends Component {
    /// Helper functions
    
    // finds index of array element with corresponding id
    findItemById = (array, id) => array.findIndex(el => el.id === id)
    // create todo-list-item
    createItem = label => {
        return {
            label,
            imprtant: false,
            done: false,
            id: Math.random().toString(36).substr(2, 9) 
            // not the most stable solution, but will do for current project :)
        }
    }
    // toggle property of object in array, index and property name
    toggleProperty = (array, id, prop) => {
        const copy = [ ...array ]
        const idx = this.findItemById(copy, id)
        copy[idx][prop] = !copy[idx][prop]
        return copy
    }
    // are active todo-list-items displayed
    isActiveDisplayed = filter => filter < 2
    // are inactive todo-list-items displayed
    isDoneDisplayed   = filter => filter % 2 === 0
    // returns todo list with filter and search applied
    getFilteredTodoList = (list, filter, searchPattern) => [ ...list ].filter(el => {
        const isSearched = searchPattern === "" 
        || el.label.toLowerCase().search(searchPattern.toLowerCase()) !== -1
        const isStatus = (el.done && this.isDoneDisplayed(filter)) 
        || (!el.done && this.isActiveDisplayed(filter))
        return isStatus && isSearched
    })
    ///
    state = {
        list: [
            this.createItem("Wake up"),
            this.createItem("Eat"),
            this.createItem("Work"),
            this.createItem("Sleep")
        ],
        // todo list items
        filter: 0, 
        // filter є Z, [0, 2] 
        // 0 -> all "todo"s
        // 1 -> active "todo"s
        // 2 -> inactive "todo"s
        searchPattern: "" 
        // search string 
    }
    /// handlers

    // delete todo list item by id
    deleteItem = id => {
        this.setState(({ list }) => {
            const copy = [ ...list ]
            copy.splice(this.findItemById(copy, id), 1)
            return { list: copy }
        })
    }
    // add new item to the end of the list
    addItem = label => {
        this.setState(({ list }) => {
            return { list: [ ...list, this.createItem(label) ] }
        })
    }
    // set "important" state of item to opposite
    toggleImportant = id => this.setState(({ list }) => {
        return { list: this.toggleProperty(list, id, "important") }
    })
    // set "done" state of item to opposite
    toggleDone = id => this.setState(({ list }) => {
        return { list: this.toggleProperty(list, id, "done") }
    })

    selectFilter = filter => this.setState({ filter: filter })
    setSearchPattern = str => this.setState({ searchPattern: str})
    ///
    render() {
        const { list, filter, searchPattern } = this.state
        const doneCount = list.filter(el => el.done).length

        return (
            <div className="todo-app">
                <Header undone={list.length - doneCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        searchPattern={searchPattern}
                        setSearchPattern={this.setSearchPattern}
                    />
                    <ItemStatusFilter 
                        filter={filter}
                        onSelectFilter={this.selectFilter}
                    />
                </div>
                <TodoList 
                    todos={this.getFilteredTodoList(list, filter, searchPattern)}
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