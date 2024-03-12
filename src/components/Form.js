import React, { useState } from 'react';

const AddToDoForm = ({ addToDo }) => {
  const [text, setText] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!text) return; // Do not add empty to-do items
    
    const newToDo = {
      quantity, id: Date.now(),
      text,
      isDone: false };
      console.log(text);

      setText('');
      setQuantity(1);
      addToDo(newToDo);
    };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
    <div className="form-group">
      Quantity:
      <select>
        {Array.from({ length: 20 }, (_, i) => i+1).map(num=><option key={num} value={num}>{num}</option>)}
      </select>
    </div>
    <div className="form-group">
      <input
        type="text"
        value={text} // Laman ng input field or placeholder pero inputtable
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task"
        required // Ensures the input field is required
      />
    </div>
    <button type="submit">Add</button>
  </form>
  );
};

export default AddToDoForm;
