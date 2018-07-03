import React, { Component } from 'react';
import axios from 'axios';

import * as categoryData from '../assets/categories.json';
import * as countryData from '../assets/countries.json';
import Header from './header';
import Navbar from './navbar'
import { Redirect } from 'react-router-dom'
import { isLoggedIn } from './utils';

export default class AddBusiness extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token : '',
            categories: categoryData,
            countries: countryData,
            businessName: '',
            category: '',
            location: '',
            businessCountry: '',
            businessCity: '',
            businessAddress: '',
            description: '',
            busnessEditId: null,
            businessEditDetails: {}
        };
      }
      handleSubmit = e => {
        e.preventDefault();

        const businessData = {
          business_name :this.state.businessName,
          category : this.state.category,
          location : this.state.businessAddress+', '+this.state.businessCity+', '+this.state.businessCountry,
          profile: this.state.description
        }

        if(this.props.match.params.id){
        // api call when submitting edited business data

          axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.put(`http://127.0.0.1:5000/api/v2/businesses/${this.props.match.params.id}`, JSON.stringify(businessData),
          {
              headers: {'Content-Type':'application/json' }
          })
          .then(res => {
                this.props.history.push('/business-profile/'+this.props.match.params.id+'/edit-success');
          })
          .catch(error =>{});

        }else{
          //api call when adding a business for the first time

        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.post(`http://127.0.0.1:5000/api/v2/businesses`, JSON.stringify(businessData),
          {
              headers: {'Content-Type':'application/json' }
          })
          .then(res => {
                this.props.history.push('/user-profile/'+this.props.match.params.user+'/success');
          })
          .catch(error =>{
          });
        }
    }
    handleInput = e => {
      //assign input values to state as they are being typed

        this.setState({[e.target.name]: e.target.value})
    }
 showType = () =>{
  //shows the type of form either editting or adding a business

  if(this.props.match.params.id){
    return 'Edit'
  }else{
    return 'Add'
  }
}
componentDidMount(){
  if(this.props.match.params.id){
    this.setState({ 
      busnessEditId: this.props.match.params.id
    })
    //api call for pre-populating the business edit form
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.get(`http://127.0.0.1:5000/api/v2/businesses/${this.props.match.params.id}`,
          {
              headers: {'Content-Type':'application/json' }
          })
          .then(res => {
                this.setState({ businessEditDetails: res.data,
                  businessName: res.data.business_name,
                  category: res.data.category,
                  location: res.data.location,
                  businessCountry: res.data.location.split(',')[2],
                  businessCity: res.data.location.split(', ')[1],
                  businessAddress: res.data.location.split(', ')[0],
                  description: res.data.profile,
                })
                document.getElementById('businessInput').value = this.state.businessEditDetails.business_name
                document.getElementById('categorySelect').value = this.state.businessEditDetails.category

                document.getElementById('countrySelect').value = this.state.businessEditDetails.location.split(',')[2]
                document.getElementById('inputCity').value = this.state.businessEditDetails.location.split(',')[1]
                document.getElementById('inputZip').value = this.state.businessEditDetails.location.split(',')[0]
                document.getElementById('businessText').value = this.state.businessEditDetails.profile

          })
          .catch(error =>{});
  }

}
    render(){
        let countryArray = this.state.countries
        let categoryArray = this.state.categories
        return(
          isLoggedIn() ?
          <div id="biz" className='addbiz'>
            <Navbar/>
            <div className="container">
              <Header 
              heading={this.showType()+' your Business'}
              text="Play in the big leagues by adding your business to WeConnect today"/>
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
                              id="businessInput" placeholder="Add Business Name"  required/>
                            </div>
                            <div className="form-group" style={{marginBottom: '.6rem'}}>
                              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" 
                              style={{}}>Choose Category</label>
                              <select onChange={this.handleInput} name="category" 
                              className="custom-select mr-sm-2" id="categorySelect"  required>
                              {categoryArray.map(category =>
                                <option key={category.name} value={category.name}>{category.name}</option>
                                )}
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="inputAddress2">Country</label>
                              <select onChange={this.handleInput} name="businessCountry" 
                              className="custom-select mr-sm-2" id="countrySelect"  required>
                                {countryArray.map(country =>
                                <option key={country.code} value={country.name}>{country.name}</option>
                                )}
                              </select>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input onChange={this.handleInput} name="businessCity" type="text" 
                                className="form-control" id="inputCity"  required/>
                              </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputZip">Address</label>
                                <input onChange={this.handleInput} name="businessAddress" 
                                type="text" className="form-control" id="inputZip"  required/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea1">Add Description</label>
                              <textarea onChange={this.handleInput} 
                              name="description" className="form-control" id="businessText" rows={3} defaultValue={""}   required/>
                            </div>
                            <div className="container">
                              <div className="row justify-content-md-center">
                                <button type="submit" className="btn btn-success col-8" 
                                style={{marginTop: '1rem', marginBottom: '10rem', 
                                marginLeft: 'auto', marginRight: 'auto', 
                                paddingTop: '0.5rem'}}>{this.showType()} Business</button>
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
          : <Redirect to={{pathname:'/login'}}/>
        );
    }
}
