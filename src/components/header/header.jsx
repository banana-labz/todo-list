import "./header.css"

export const Header = ({undone, done}) => (
    <div className="header d-flex">
        <h1 className="header">Todo list</h1>
        <h2>{done} down, {undone} to go</h2>
    </div>
)