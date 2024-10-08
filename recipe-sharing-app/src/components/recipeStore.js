import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [
    {
      id: 1,
      title: 'Spaghetti',
      description: 'Delicious spaghetti with sauce.',
      ingredients: ['spaghetti', 'sauce', 'Paste'],
      cookingTime: 30,
    },
    {
      id: 2,
      title: 'Noodles',
      description: 'Quick and easy to cook.',
      ingredients: ['noodles', 'chilli', 'onions', 'chicken'],
      cookingTime: 10,
    },
    {
      id: 3,
      title: 'Rice',
      description: 'rice with stew.',
      ingredients: ['rice', 'stew', 'pepper'],
      cookingTime: 45,
    },
  ],
  searchTerm: '',
  filteredRecipes: [],
  ingredientFilter: '',  
  cookingTimeFilter: null,  
  favorites: [],
  recommendations: [],


  // Action to update the search term and filter recipes 
  setSearchTerm: (term) => set(state => {
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  }),

  // Action to filter recipes 
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
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

  // Actions for managing favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
