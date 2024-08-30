import React from 'react';
import useRecipeStore from './recipeStore';
import './SearchBar.css';
import useRecipeStore from './components/store/recipeStore';


const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      className='Search-bar'
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;