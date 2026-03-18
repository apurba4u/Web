import React, { use, useState } from 'react';
import Country from './Country';


const Countries = ({props}) => {
  const countriesData = use(props)
  const countries = countriesData.countries

  // Visited countries list
  const [visitedCountries, setVisitedCountries] = useState([])
  const handleVisitedCountries = (country) => {
    // state lift up
    // Ager jegulu chilo segulue ke amra copy korlam
    // last element take amra notun kore new array bosiye dilam
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }

  // Visited flags
  const [visitedFlags, setVisitedFlags] = useState([])
  const handleVisitedFlags = (flag) => {
    console.log(flag);
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlags)
  }
  return (
    <div>
      <h2>Total Countries = {countries.length}</h2>
      <h2>Visited Countries = {visitedCountries.length}</h2>
      <ol>
        {
          visitedCountries.map((elm) => <li key={elm.cca3.cca3}>{elm.name.common}</li>)
        }
      </ol>

      <h3>Visited Flags length: {visitedFlags.length}</h3>
      <div className='visited-flags-container'>
        {
          visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
        }
      </div>
      <div className='countries'>
        {
        countries.map(country => <Country 
          key={country.cca3.cca3}
          country={country}
          handleVisitedCountries={handleVisitedCountries}
        handleVisitedFlags={handleVisitedFlags}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;