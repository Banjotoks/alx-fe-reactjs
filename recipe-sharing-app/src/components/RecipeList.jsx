import React, { useEffect, useState } from 'react'
import useRecipeStore from "./recipeStore";
import useRecipeStore from './store/recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);

    const [ingredientFilter, setIngredientFilter] = useState('');
    const [cookingTimeFilter, setCookingTimeFilter] = useState('');
  

    useEffect(() => {
        filterRecipes();
    }, [searchTerm, ingredientFilter, setCookingTimeFilter, filterRecipes]);

    return (
        <div>
         <input
        type="text"
        placeholder="Filter by ingredient..."
        value={ingredientFilter}
        onChange={(e) => setIngredientFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max cooking time (mins)"
        value={cookingTimeFilter}
        onChange={(e) => setCookingTimeFilter(e.target.value)}
      />
   
          {recipes.length > 0 ? (
            recipes.map(recipe => (
              <div key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
              </div>
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      );
    };


export default RecipeList;