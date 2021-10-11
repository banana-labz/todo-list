import { render } from "react-dom"

import { Header } from "./components/header"
import { SearchPanel } from "./components/search-panel"
import { TodoList } from "./components/todo-list"
import { ItemStatusFilter } from "./components/item-status-filter"

import "./index.css"

const App = () => {

    const data = [
        {id: 1, label: "Wake up", important: true},
        {id: 2, label: "Work", important: false},
        {id: 3, label: "Die", important: false},
    ]

    return (
        <div className="todo-app">
            <Header undone={1} done={2}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={data}/>
        </div>
    )
}

render(<App/>, document.getElementById("root"))