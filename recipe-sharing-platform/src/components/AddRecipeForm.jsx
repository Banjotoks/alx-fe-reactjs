import { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    const ingredientsList = ingredients.split('\n').filter((item) => item.trim() !== '');
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please enter at least two ingredients';
    }

    if (!instructions.trim()) {
      newErrors.instructions = 'Preparation steps are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newRecipe = {
      id: Math.random(),
      title,
      ingredients: ingredients.split('\n'),
      instructions,
    };

    onAddRecipe(newRecipe);

    setTitle('');
    setIngredients('');
    setInstructions('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Recipe</h2>
      
    
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">

        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          placeholder="Enter ingredients, one per line"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>


      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="6"
          placeholder="Enter preparation steps"
        />
        {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add Recipe
        </button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
