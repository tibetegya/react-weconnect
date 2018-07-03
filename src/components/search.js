import React, { Component }from 'react';
import axios from 'axios';

import { ROOT_URL } from '../App';
import BusinessCard from './business';
import * as categoryData from '../assets/categories.json';
import * as countryData from '../assets/countries.json';
import { withRouter, Redirect } from "react-router-dom";
import { setTimeout } from 'timers';
import { isLoggedIn } from './utils';

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
      page: null,
      prevPage: null,
      nextPage: null,
      businessData: [],
      pageLinks : []

    };
  }
  componentWillMount(){
    //update state if a token exists
    if(localStorage.getItem('token')){
      this.setState({
        isLoggedIn: true,
        token: localStorage.getItem('token')
      })
  }

    setTimeout(()=> {
      //api call to get businesses
      axios.get(`${ROOT_URL}/businesses`, {
          headers: {'Content-Type':'application/json','Authorization': 'Bearer '+this.state.token }
      })
        .then(res => {
              this.setState({
                businessData: res.data['businesses'],
                prevPage: res.data['prev_page'],
                nextPage: res.data['next_page']

            })
            //add pagination links
            let pageLinks = []
            if (this.state.prevPage !== null){
              pageLinks.push(<li key='prev' className="page-item" ><a className="page-link" href=""  name='prevPage' onClick={this.paginate} page={this.state.prevPage}>previous</a></li>)
            }
            if (this.state.nextPage !== null){
              pageLinks.push(<li key='next' className="page-item"><a className="page-link" href=""  onClick={this.paginate} name={this.state.nextPage}>next</a></li>)
            }
          this.setState({pageLinks:pageLinks})
        })
        .catch(error =>{
          if(error.response.status === 401){
            //redirect to login if the token is expired/invalid
            this.props.history.push('/login');
          }
        });
    },1)


  }

  componentDidMount = ()=>{
}
  handleSubmit = e => {
    e.preventDefault();
    this.submitData()
  }

  submitData = ()=>{
    let parameters = {
        q :this.state.searchBusiness,
        location : this.state.searchLocation,
        category: this.state.searchCategory,
        page : this.state.page
    }

    let searchParams = {}
      //check for existance of query strings and add them to search object
      if (parameters.q !== ''){
        searchParams.q = parameters.q
      }
      if (parameters.location !== ''){
        searchParams.location = parameters.location
      }
      if (parameters.category !== ''){
        searchParams.category = parameters.category
      }
      if (parameters.page !== null){
        searchParams.page = parameters.page
      }

      //api call to the search businesses endpoint
    axios.get(`${ROOT_URL}/businesses`, {
      params: searchParams,
        headers: {'Content-Type':'application/json','Authorization': 'Bearer '+this.state.token }
    })
      .then(res => {
            this.setState({businessData: res.data['businesses']})
      })
      .catch(error =>{
        console.log(error.response.data)
      });

    }
handleInput = e => {
    this.setState({[e.target.name]: e.target.value})
}

paginate = e =>{
  //handles pagination of businesses
 e.preventDefault()
 console.log(e.target.name)
 this.setState({page: e.target.name})
 this.submitData()
}
  render(){
    let countryArray = this.state.countries
    let categoryArray = this.state.categories
    return(
      isLoggedIn() ?
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
        <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
  {this.state.pageLinks.map(link => link)}
  </ul>
</nav>

      </div>
      : <Redirect to={{pathname:'/login'}}/>
    );
}
}
export default withRouter(Search);