import React, { useState } from 'react';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
  const [visited, setVisited] = useState(false)

  const handleVisited = () => {
    
    // methode 1
    // if (visited) {
    //   setVisited(false)
    // } else {
    //   setVisited(true)
    // }

    // Method 2
    // setVisited(visited ? false : true)

    // Method 3
    setVisited(!visited)

    // function er vitrore arekta function called
    handleVisitedCountries(country)
  }
  return (
    <div className={`country ${visited ? 'country-visited' : ''}`}>
      <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} style={{height: '50px', width: '50px'}}/>
        <h3>Name: {country.name.common}</h3>
        <p>Population: {country.population.population}</p>
        <p>Area: {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'}</p>
      </div>
      <div style={{display: 'flex', gap:'10px'}}>
        <button onClick={handleVisited}>
        {visited ? 'Visited' : "Not Visited"}
      </button>
      <button onClick={() => handleVisitedFlags(country.flags.flags.png)}>Add Visited Flag</button>
      </div>
    </div>
  );
};

export default Country;