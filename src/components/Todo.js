const Todo = ({todo, onDelete, onToggle}) => {
    return (
        <div className="todo-item">
            <div className="delete" onClick={() => onDelete(todo.id)}>✖︎</div>
            <h3 className="todo" onDoubleClick={() => onToggle(todo.id)}>{todo.text}</h3>
            <div className="flag">{todo.flag ? '⚑' : ''}</div>
        </div>
    )
}

export default Todo;