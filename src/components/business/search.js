import React, { Component }from 'react';
import * as categoryData from '../../assets/categories.json';
import * as countryData from '../../assets/countries.json';
import { withRouter, Redirect } from "react-router-dom";
import { isLoggedIn } from './../helpers/utils';

class Search extends Component {
      constructor(props) {
          super(props);
          this.state = {
            token : '',
            countries: countryData,
            categories: categoryData
          }
        }
render(){
    let countryArray = this.state.countries
    let categoryArray = this.state.categories
    return(
      isLoggedIn() ?
        <div className="search-form">
        <form onSubmit={this.props.handleSubmit} >
          <div className="form-row align-items-top">
            <div className="col-md-6" style={{marginBottom: '.6rem'}}>
              <label className="sr-only" htmlFor="inlineFormInput">Name</label>
              <input onChange={this.props.handleInput} name="searchBusiness" type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Search for a Business..." />
            </div>

            <div className="col-md-2" style={{marginBottom: '.6rem'}}>
              <select onChange={this.props.handleInput} name="searchLocation" className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              {countryArray.map(country =>
      <option key={country.code} value={country.name}>{country.name}</option>
    )}
              </select>
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" style={{fontSize: '.8rem', fontWeight: 'bold', color: '#858585'}}>Search by Location</label>
            </div>

            <div className="col-md-2 " style={{marginBottom: '.6rem'}}>
              <select onChange={this.props.handleInput} name="searchCategory" className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              {categoryArray.map(category =>
                        <option key={category.name} value={category.name}>{category.name}</option>
                        )}
              </select>
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" style={{fontSize: '.8rem', fontWeight: 'bold', color: '#858585'}}>Search by Category</label>
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-success mb-2 col-12">Search</button>
            </div>
          </div>
        </form>
      </div>
      : <Redirect to={{pathname:'/login'}}/>
    );
}
}
export default withRouter(Search);