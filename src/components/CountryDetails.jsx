import React, { Component } from 'react';
//import countries from '../countries.json';
import { Route, Link } from 'react-router-dom';

class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountry();
  }

  loadCountry() {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    const country = this.props.countries.find((item) => item.cca3 === id);
    console.log(country);
    this.setState({
      country,
    });
  }

  render() {
    console.log(this.state.country);
    return (
      this.state.country && (
        <div className="col-7">
          <h1>{this.state.country.name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{this.state.country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {this.state.country.area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>
                      {this.state.country.borders.map((border) => {
                        return (
                          <Link
                            to={`/countries/${border}`}
                            className="list-group-item list-group-item-action"
                          >
                            {border}
                          </Link>
                        );
                      })}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    );
  }
}

export default CountryDetails;
