import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Route
            path="/countries/:id"
            render={(navigationProps) => (
              <CountryDetails countries={countries} {...navigationProps} />
            )}
            exact
          />
        </div>
      </div>
    </div>
  );
}

export default App;
