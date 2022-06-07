import React from 'react';
import Select from 'react-select'

import './SelectRegion.css';

const options = [
  { value: 'africa', label: 'Africa' },
  { value: 'america', label: 'America' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
]

export const SelectRegion = ({handleChange}) => {
  return (
    <div data-testid="selectRegion">
    < Select
      options={options}
      onChange={(e) => handleChange(e)}
      classNamePrefix='react-select'
      placeholder={<div className="select-placeholder-text">Select a region</div>}
    />
    </div>
  )
}
