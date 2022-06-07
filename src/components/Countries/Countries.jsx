import React, { useEffect, useState } from 'react'
import { Card } from "./Card/Card";
import { Filter } from './Filter/Filter';


import './Countries.css';

export const Countries = ({theme}) => {
  const [ countries, setCountries ] = useState([]);
  const [ filter, setFilter ] = useState("");

  const handleChange = (e) => {
    setFilter(e.target ? e.target.value : e.value);
  }

  useEffect(() => {
    const getCountries = async () => {
      const url = 'https://restcountries.com/v3.1/all';
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);

    }
    getCountries();
  }, [])

  return (
    <div>
      < Filter theme={theme} handleChange={handleChange} />
      <div className='countries'>
        {countries.length === 0 && (
            <div className={`countriesLoading ${theme} loader`}>Loading...</div>
          )}
        {countries.filter((country) => {
            return (country.name.common.toLowerCase().includes(filter.toLowerCase()) ||
                    country.region.toLowerCase().includes(filter.toLowerCase()))
        }).slice(0, 40).map((country) => {
          const { capital, flags, population, region, name } = country;

          const formatedPopulation = new Intl.NumberFormat("en-US").format(population);

          return (< Card
            key={country.cca2}
            ccn3={country.ccn3}
            name={name.common}
            capital={capital}
            flags={flags.png}
            population={formatedPopulation}
            region={region}
            theme={theme}
          />)
        })}
      </div>
    </div>
  )
}
