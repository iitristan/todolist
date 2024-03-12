  import React from 'react';
import ToDoItem from './ToDoItem'; // Assuming ToDoItem is in the same directory

const ToDoList = ({ todos, toggleToDo, deleteToDo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleToDo={toggleToDo}
          deleteToDo={deleteToDo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
