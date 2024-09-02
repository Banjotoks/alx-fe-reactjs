import React, { useState } from 'react'

function AddTodoForm({ addTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleSumbit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    };

  return (
    <form onSubmit={handleSumbit}>
        <input 
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Add a new todo'
        />
        <button type='submit'>AddTodoForm</button>
    </form>
   
  );
}

export default AddTodoForm