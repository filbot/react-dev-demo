import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "text": "Learn react context",
      "flag": false
    },
    {
      "id": 2,
      "text": "Learn reduce in react",
      "flag": false
    },
    {
      "id": 3,
      "text": "Build out demo for interview",
      "flag": false
    },
    {
      "id": 4,
      "text": "Troll internet for e36 BMW",
      "flag": true
    },
    {
      "id": 5,
      "text": "Get hired and change the world",
      "flag": false
    }
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleFlag = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, flag: !todo.flag} : todo))
  }

  return (
    <div className="App">
      <Header />
      {todos.length > 0 ? <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleFlag} /> : 'Nothing but time on your hands'}
      <Footer />
    </div>
  );
}

export default App;
