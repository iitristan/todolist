import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddToDoForm from './components/Form'; 
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleToDo = (id) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    }));
  };

  const deleteToDo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  function handleAddItem(newTodo) {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>To-Do List</h1>
        <p>Click on a to-do item to toggle its completion status</p>
      </header>
      <AddToDoForm addToDo={handleAddItem} />
      <ToDoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
    </div>
  );
};

export default App;
