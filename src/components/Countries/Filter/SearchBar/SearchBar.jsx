import React from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

export const SearchBar = ({theme, handleChange}) => {
  return (
    <div className={`searchBar ${theme}`} data-testid="searchBar">
      < FaSearch className='searchIcon' />
      <input onChange={(e) => handleChange(e)} className={theme} type="text" placeholder='Search for a country...' />
    </div>
  )
}
