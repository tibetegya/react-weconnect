import React, { Component }from 'react';
import axios from 'axios';

import { ROOT_URL } from '../App';
import BusinessCard from './business';
import * as categoryData from '../assets/categories.json';
import * as countryData from '../assets/countries.json';
import { withRouter } from "react-router-dom";
import { setTimeout } from 'timers';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token : '',
      countries: countryData,
      categories: categoryData,
      searchCategory: '',
      searchBusiness: '',
      searchLocation: '',
      searchLimit: 10,
      prevPage: null,
      nextPage:1,
      businessData: []

    };
  }
  componentWillMount(){

    if(localStorage.getItem('token')){
      this.setState({
        isLoggedIn: true,
        token: localStorage.getItem('token')
      })
  }

    setTimeout(()=> {if(this.state.isLoggedIn){
      axios.get(`${ROOT_URL}/businesses`, {
          headers: {'Content-Type':'application/json','Authorization': 'Bearer '+this.state.token }
      })
        .then(res => {
              // console.log(res);
              // console.log(res.data['businesses']);
              this.setState({businessData: res.data['businesses']})
        })
        .catch(error =>{
            console.log(error.response.data)
        });
      }else{
        this.props.history.push('/login');
      }
    },1)
  }

  componentDidMount = ()=>{
    
}
  handleSubmit = e => {
    e.preventDefault();

    let parameters = {
        q :this.state.searchBusiness,
        location : this.state.searchLocation,
        category: this.state.searchCategory
    }

    let searchParams = {}

      if (parameters.q !== ''){
        searchParams.q = parameters.q
        console.log(searchParams)
      }
      if (parameters.location !== ''){
        searchParams.location = parameters.location
        console.log(searchParams)
      }
      if (parameters.category !== ''){
        searchParams.category = parameters.category
        console.log(searchParams)
      }






    if(this.state.isLoggedIn){
    axios.get(`${ROOT_URL}/businesses`, {
      params: searchParams,
        headers: {'Content-Type':'application/json','Authorization': 'Bearer '+this.state.token }
    })
      .then(res => {
            // console.log(res);
            // console.log(res.data['businesses']);
            this.setState({businessData: res.data['businesses']})
      })
      .catch(error =>{
          console.log(error.response.data)
      });
    }else{
      this.props.history.push('/login');
    }
    }
handleInput = e => {
    // console.log(this.state)
    this.setState({[e.target.name]: e.target.value})
}
  render(){
    let countryArray = this.state.countries
    let categoryArray = this.state.categories
    console.log(this.state.businessData)
    return(
        <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row align-items-top">
            <div className="col-md-6" style={{marginBottom: '.6rem'}}>
              <label className="sr-only" htmlFor="inlineFormInput">Name</label>
              <input onChange={this.handleInput} name="searchBusiness" type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Search for a Business..." />
            </div>

            <div className="col-md-2" style={{marginBottom: '.6rem'}}>
              <select onChange={this.handleInput} name="searchLocation" className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              {countryArray.map(country =>
      <option key={country.code} value={country.name}>{country.name}</option>
    )}
              </select>
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" style={{fontSize: '.8rem', fontWeight: 'bold', color: '#858585'}}>Search by Location</label>
            </div>

            <div className="col-md-2 " style={{marginBottom: '.6rem'}}>
              <select onChange={this.handleInput} name="searchCategory" className="custom-select mr-sm-2" id="inlineFormCustomSelect">
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
        <div>
        { this.state.businessData.map(business =>
                        <BusinessCard key={business.id} name={business.business_name} category={business.category}
                              location={business.location} profile={business.profile} id={business.id}/>
                        )}
        </div>
      </div>
    );
}
}
export default withRouter(Search);