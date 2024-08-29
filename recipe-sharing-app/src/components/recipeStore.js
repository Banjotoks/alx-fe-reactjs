import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to update the search term and filter recipes based on it
  setSearchTerm: (term) => set(state => {
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  }),

  // Action to filter recipes based on the current search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      (state.ingredientFilter ? recipe.ingredients.includes(state.ingredientFilter) : true) &&
      (state.cookingTimeFilter ? recipe.cookingTime <= state.cookingTimeFilter : true)
      

    )
  })),

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Action to delete a recipe
  deleteRecipe: (id) => set(state => {
    const recipes = state.recipes.filter(recipe => recipe.id !== id);
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes, filteredRecipes };
  }),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => {
    const recipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes, filteredRecipes };
  }),

  // Action to set all recipes at once
  setRecipes: (recipes) => set(state => {
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes, filteredRecipes };
  }),
}));

export default useRecipeStore;
