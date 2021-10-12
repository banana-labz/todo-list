import { Component } from "react"
import "./add-item.css"

export default class AddItem extends Component {

    state = {
        label: ""
    }

    onLabelChange = event => {
        this.setState({
            label: event.target.value
        })
    }

    render() {
        const { onClickAdd } = this.props
        return (
            <form 
                className="add-item d-flex"
                onSubmit={event => {
                    event.preventDefault()
                    onClickAdd(this.state.label)
                    this.setState({
                        label: ""
                    })
                }}
            >
                <input 
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="Do something"
                    value={this.state.label}
                />
                <button className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        )
    }
}