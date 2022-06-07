import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { BorderCountry } from './BorderCountry/BorderCountry';

import './Country.css';

export const Country = ({theme}) => {
  const [ country, setCountry ] = useState();
  const [ searchParams ] = useSearchParams();

  const ccn3 = searchParams.get("ccn3")
  const location = useLocation();


  useEffect(() => {
    const getCountry = async () => {
      const url = `https://restcountries.com/v3.1/alpha/${ccn3}`;
      const response = await fetch(url);
      const data = await response.json();
      setCountry(data[0]);
    }
    getCountry();
  }, [location.pathname, ccn3])


  return (
    <div className={`country ${theme}`} data-testid="country">
      < Link className={`link ${theme}`} to="/">
        < BiLeftArrowAlt />
        Back
      </Link>
      <div className="countryCard">
      {!country && (
            <div className={`countriesLoading loader ${theme}`}>Loading...</div>
          )}
        { country && (
        <>
          <img className='countryFlag' src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          <div className="countryInfo">
            <h2>{country.name.official}</h2>
            <div className="infoList">
              <ul>
                <li><strong>Native Name:</strong> {Object.values(country.name.nativeName)[0].official}</li>
                <li><strong>Population:</strong> {country.population ? new Intl.NumberFormat("en-US").format(country.population) : "Unknown"}</li>
                <li><strong>Region:</strong> {country.region}</li>
                <li><strong>Sub Region:</strong> {country.subregion}</li>
                <li><strong>Capital:</strong> {country.capital ? country.capital[0] : "Unknown"}</li>
              </ul>
              <ul>
                <li><strong>Top Level Domain:</strong> {country.tld[0]}</li>
                <li><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies)[0].name : "Unknown"}</li>
                <li><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</li>
              </ul>
            </div>
            <h3>Border Country</h3>
            <div className="borderCountry">
              {country.borders && country.borders.length > 0 ?
                country.borders.map((cca3, index) => {
                   return < BorderCountry key={index} cca3={cca3} theme={theme} />
                })
                : ""
              }
            </div>
          </div>
        </>
        )}
      </div>
    </div>
  )
}
