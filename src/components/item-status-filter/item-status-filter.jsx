import { Component } from "react"

export default class ItemStatusFilter extends Component {
    render() {
        const { filter, onSelectFilter } = this.props
        
        return (
            <div className="btn-group">
                {["All", "Active", "Done"].map((label, i) => {
                    const btnClass = "btn" + (i === filter ? " btn-info" : " btn-outline-secondary")
                    return (
                        <button
                            key={i}
                            className={btnClass}
                            onClick={() => onSelectFilter(i)}
                        >
                            {label}
                        </button>
                    )
                })}
            </div>
        )
    }
}