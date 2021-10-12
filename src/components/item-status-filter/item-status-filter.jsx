export const ItemStatusFilter = ({ filter, onSelectFilter }) => (
    <div className="btn-group">
        {["All", "Active", "Done"].map((label, i) => (
            <button
                key={i}
                className={"btn " + (i === filter ? "btn-info" : "btn-outline-secondary")}
                onClick={() => onSelectFilter(i)}
            >
                {label}
            </button>
        ))}
    </div>
)