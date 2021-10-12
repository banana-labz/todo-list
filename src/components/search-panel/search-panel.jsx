import "./search-panel.css"

export const SearchPanel = ({ searchPattern, setSearchPattern }) => <input
    type="text"
    placeholder="search"
    className="form-control search-input"
    value={searchPattern}
    onChange={ev => setSearchPattern(ev.target.value)}
/>