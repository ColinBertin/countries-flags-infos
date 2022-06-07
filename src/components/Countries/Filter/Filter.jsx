import React from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { SelectRegion } from './SelectRegion/SelectRegion';

import './Filter.css';

export const Filter = ({theme, handleChange}) => {
  return (
    <div className='filter'>
      < SearchBar theme={theme} handleChange={handleChange} />
      < SelectRegion handleChange={handleChange} />
    </div>
  )
}
