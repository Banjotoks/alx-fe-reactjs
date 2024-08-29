import React from 'react';
import useRecipeStore from './recipeStore';
import './searchBar.css';

const searchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      className='search-bar'
      placeholder="search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default searchBar;