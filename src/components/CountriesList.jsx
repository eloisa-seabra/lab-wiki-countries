import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div className="col-5">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              to={`/countries/${country.cca3}`}
              className="list-group-item list-group-item-action"
            >
              {country.flag} {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
