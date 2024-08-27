import React, { useEffect } from 'react'
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filterRecipes = useRecipeStore((state) => state.deleteRecipe);
    const searchTerm = useRecipeStore((state) => state.searchTerm);

    useEffect(() => {
        ilterRecipes();
    }, [searchTerm, filterRecipes]);

    return (
        <div>
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