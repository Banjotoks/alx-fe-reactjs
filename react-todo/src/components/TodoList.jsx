import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const [Todos, setTodos] = useState([
    { id:1, text: 'Learn html and css', completed: false },
    { id:2, text: 'Go to the supermarket', completed: false },
    { id:3, text: 'Write some html and css', completed: false },
    { id:4, text: 'Cook and eat', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Todos.length+1, text, completed: false };
    setTodos([...Todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      Todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    );
  };

  const deleteTodo =(id) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
    <h1>TodoList</h1>
    <ul>
      {Todos.map((todo) =>
      <li
      key={todo.id}
      onClick={() => toggleTodo(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      >
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </li>
      )}
    </ul>
    <AddTodoForm addTodo={addTodo} />
      </div>
  );
}

export default TodoList