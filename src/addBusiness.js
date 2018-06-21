import React, { Component } from 'react';
import axios from 'axios';

import * as categoryData from './categories.json';
import * as countryData from './countries.json';
import Header from './components/header';
import Navbar from './components/navbar'

export default class AddBusiness extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwIjoxNTI5ODcwMzcxfQ.mEDUPdwK7NSc7DEigEvf2j2GI_XVSG8ku_S7qlVWkxQ',
            categories: categoryData,
            countries: countryData,
            businessName: '',
            category: '',
            location: '',
            businessCountry: '',
            businessCity: '',
            businessAddress: '',
            description: ''
        };
      }
      handleSubmit = e => {
        e.preventDefault();

        const userData = {
          business_name :this.state.businessName,
          category : this.state.category,
          location : this.state.businessAddress+' ,'+this.state.businessCity+' ,'+this.state.businessCountry,
          profile: this.state.description
        }
        console.log(userData)
        console.log(localStorage.getItem('token'))
        axios.post(`http://127.0.0.1:5000/api/v2/businesses`, JSON.stringify(userData), {
            headers: {'Content-Type':'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token') }
        })
          .then(res => {
                console.log(res);
          })
          .catch(error =>{
              console.log(error.response.data)
          });
        }
    handleInput = e => {
        console.log(this.state)
        this.setState({[e.target.name]: e.target.value})
    }
    // }
    render(){
        let countryArray = this.state.countries
        let categoryArray = this.state.categories
        return(
            <div>
              <Navbar/>
            <div className="container">
              <Header heading="Add your Business to WeConnect" text="Play in the big leagues by adding your business to WeConnect today"/>
              <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <form onSubmit={this.handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label >Enter Business Name</label>
                      <input onChange={this.handleInput} 
                      name="businessName" type="text" className="form-control" 
                      id="businessInput" placeholder="Add Business Name" />
                    </div>
                    <div className="form-group" style={{marginBottom: '.6rem'}}>
                      <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" 
                      style={{}}>Choose Category</label>
                      <select onChange={this.handleInput} name="category" 
                      className="custom-select mr-sm-2" id="categorySelect">
                      {categoryArray.map(category =>
                        <option key={category.name} value={category.name}>{category.name}</option>
                        )}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress2">Country</label>
                      <select onChange={this.handleInput} name="businessCountry" 
                      className="custom-select mr-sm-2" id="countrySelect">
                        {countryArray.map(country =>
                        <option key={country.code} value={country.name}>{country.name}</option>
                        )}
                      </select>
                    </div>
                    <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <input onChange={this.handleInput} name="businessCity" type="text" 
          className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputZip">Address</label>
          <input onChange={this.handleInput} name="businessAddress" 
          type="text" className="form-control" id="inputZip" />
        </div>
      </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Add Description</label>
                      <textarea onChange={this.handleInput} 
                      name="description" className="form-control" id="businessText" rows={3} defaultValue={""} />
                    </div>
                    <div className="container">
                      <div className="row justify-content-md-center">
                        <button type="submit" className="btn btn-success col-8" 
                        style={{marginTop: '1rem', marginBottom: '10rem', 
                        marginLeft: 'auto', marginRight: 'auto', 
                        paddingTop: '0.5rem'}}>Add Business</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
            </div>
            </div>
        );
    }
}
