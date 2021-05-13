import {useState} from 'react';

const AddTodo = ({onAdd}) => {
    const [text, setText] = useState('');
    const [flag, setFlag] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please fill out todo')
            return
        }

        onAdd({text, flag});

        setText('');
        setFlag(false);
    }

    return (
        <form className="add-todo-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Todo</label>
                <input type="text" placeholder="add todo" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Set flag</label>
                <input type="checkbox" checked={flag} value={flag} onChange={(e) => setFlag(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Add todo" />
        </form>
    )
}

export default AddTodo;