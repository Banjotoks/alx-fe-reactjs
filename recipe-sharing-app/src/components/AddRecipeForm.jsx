import React, { useState } from 'react';
import useRecipeStore from './recipeStore';
const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentRecipeId, setCurrentRecipeId] = useState(null);
  
  

    const handleSubmit = (event) => {
      event.preventDefault();
      if (isEditing) {
        updateRecipe({ id: currentRecipeId, title, description });
        setIsEditing(false);
      } else {  
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
      </form>
    );
  };

  export default AddRecipeForm;