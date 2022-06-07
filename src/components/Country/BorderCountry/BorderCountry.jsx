import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const BorderCountry = ({cca3, theme}) => {
  const [ name, setName ] = useState();
  const [ ccn3, setCcn3 ] = useState();

  useEffect(() => {
    const getCountry = async () => {
      const url = `https://restcountries.com/v3.1/alpha/${cca3}`;
      const response = await fetch(url);
      const data = await response.json();
      setName(data[0].name.common);
      setCcn3(data[0].ccn3);
    }
    getCountry();
  }, [cca3])

  return (
    < Link
      className={`link ${theme}`}
      to={`/countries/${name ? name.toLowerCase().replace(" ", "-") : ""}?ccn3=${ccn3}`}
      data-testid="borderCountry"
    >
        {name}
    </Link>
  )
}
