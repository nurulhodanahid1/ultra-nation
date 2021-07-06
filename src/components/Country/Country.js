import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const {name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country-container">
            <h2>Country name: {name}</h2>
            <img src={flag} alt={name} />
            <p><button onClick={()=>handleAddCountry(props.country)}>Add country</button></p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;