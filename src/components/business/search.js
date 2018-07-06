import React, { Component }from 'react';
import * as categoryData from '../../assets/categories.json';
import * as countryData from '../../assets/countries.json';

function Search (props) {

  let countries = [].concat(countryData)
  let categories = [].concat(categoryData)
    let countryMap = countries.map((country, index) =>
      <option key={index} value={country.name}>{country.name}</option>
    )
    let categoryMap = categories.map((category, index) =>
      <option key={index} value={category.name}>{category.name}</option>
      )
    return(
        <div className="search-form">
        <form onSubmit={props.handleSubmit} >
          <div className="form-row align-items-top">
            <div className="col-md-6" style={{marginBottom: '.6rem'}}>
              <label className="sr-only" htmlFor="inlineFormInput">Name</label>
              <input onChange={props.handleInput} name="searchBusiness" type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Search for a Business..." />
            </div>

            <div className="col-md-2" style={{marginBottom: '.6rem'}}>
              <select onChange={props.handleInput} name="searchLocation" className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              {countryMap}
              </select>
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" style={{fontSize: '.8rem', fontWeight: 'bold', color: '#858585'}}>Search by Location</label>
            </div>

            <div className="col-md-2 " style={{marginBottom: '.6rem'}}>
              <select onChange={props.handleInput} name="searchCategory" className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              {categoryMap}
              </select>
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" style={{fontSize: '.8rem', fontWeight: 'bold', color: '#858585'}}>Search by Category</label>
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-success mb-2 col-12">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Search;