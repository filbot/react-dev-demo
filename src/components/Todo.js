const Todo = ({todo, onDelete}) => {
    return (
        <div className="todo-item">
            <div className="flag">{todo.flag ? '⚑' : ''}</div>
            <h3 className="todo">{todo.text}</h3>
            <div className="delete">X</div>
        </div>
    )
}

export default Todo;