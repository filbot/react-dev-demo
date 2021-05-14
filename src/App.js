import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ThemeProvider, useTheme} from './components/ThemeContext';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([]);
  const darkTheme = useTheme();

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchTodos();
      setTodos(dataFromServer);
    }
    getData();
  }, []);

  const fetchTodos = async () => {
    const resp = await fetch('http://localhost:3001/todos');
    const data = await resp.json();
    return data;
  }

  const fetchTodo = async (id) => {
    const resp = await fetch(`http://localhost:3001/todos/${id}`);
    const data = await resp.json();
    return data;
  }

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE'
    })
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleFlag = async (id) => {
    const todoToToggle = await fetchTodo(id);
    const updatedTodo = {...todoToToggle, flag: !todoToToggle.flag};
    const resp = await fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTodo)
    })
    const data = await resp.json();
    setTodos(todos.map((todo) => todo.id === id ? {...todo, flag: data.flag} : todo))
  }

  const addTodo = async (todo) => {
    const resp = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    const data = await resp.json();
    setTodos([...todos, data]);
  }

  return (
    <Router>
      <ThemeProvider>
        <div className={darkTheme ? "App dark" : "App"}>
          <Header toggleForm={() => setShowForm(!showForm)} />
          <Route path='/' exact render={(props) => (
            <>
              {showForm && <AddTodo onAdd={addTodo} />}
              {todos.length > 0 ? <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleFlag} /> : <div className="empty-todo-list">Nothing but time on your hands</div>}
            </>
          )} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
