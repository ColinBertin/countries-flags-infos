import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

export const Card = ({ capital, flags, population, region, name, theme, ccn3 }) => {


  return (
      < Link className={`link ${theme}`} to={`/countries/country=${name ? name.toLowerCase().replace(" ", "-") : ""}?ccn3=${ccn3}`} data-testid="card">
        <div className={`card ${theme}`}>
          <img src={flags} alt={`Flag of ${name}`} />
          <div className="info">
            <h2>{name}</h2>
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Region:</strong> {region}</p>
            <p><strong>Capital:</strong> {capital}</p>
          </div>
        </div>
      </Link>
  )
}
