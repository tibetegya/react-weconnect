import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'

import BusinessCard from './business';
import Navbar from './navbar'
import axios from 'axios';
import { ROOT_URL } from '../App'

import Notifications, {notify} from 'react-notify-toast';
import { isLoggedIn } from './utils';

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.match.params.name,
      token: localStorage.getItem('token'),
      businessData: []
    }
  }
componentWillMount(){
  this.getUserBusinesses()
}

componentDidMount(){

  //display message on successful business addition
if (this.props.match.params.msg === 'success'){
  notify.show('Business Added sucessfully', 'success')
}
}
getUserBusinesses = ()=>{
  //get the businesses created by a user
  axios.get(`${ROOT_URL}/businesses`, {
    params:{
      creator:'creator'
    },
    headers: {'Content-Type':'application/json','Authorization': 'Bearer '+this.state.token  }
})
  .then(res => {
        this.setState({businessData: res.data['businesses']})
  })
  .catch(error =>{});
}
mapBusinesses = ()=>{

  //if there are businesses in state map them to a business card
  if(this.state.businessData.length >= 1){
  return (this.state.businessData.map(business =>
    <BusinessCard key={business.id} name={business.business_name} category={business.category}
          location={business.location} profile={business.profile} id={business.id}/>
    ));}else{
      return <div>You currently have no businesses</div>
    }
}
  render(){
        return (
          isLoggedIn() ?
          <div>
            <Navbar/>
            <Notifications />
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-12" style={{marginBottom: '3rem'}}>
                  <div className="row align-items-center">
                    <div className="col-md-2 "><div className="business-logo" style={{margin: '1rem 0 0 0'}} /></div> 
                    <div className="col-md-6">

                      <div className="business-title" style={{color: 'white', fontSize: '2rem', 
                      margin: '1rem 0 0 0'}}>
                      <span className="display-4 circular" style={{color: 'white', 
                      fontSize: '2rem'}}>{this.state.user}</span>
                      </div>

                      <div className="row">
                        <div style={{display: 'flex'}}>
                          <a className="nav-link" href={"/add-business/"+this.props.match.params.name}>
                          <button className="btn btn-success my-2 my-sm-0 align-items-center" 
                          style={{fontSize: '1rem', padding: '.6rem'}}>Add a business</button>
                          </a>
                          </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>

          <div className="container">
          <div className="row">
            <div className="col-md-12 " style={{marginBottom: '2rem'}}>
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link active" >My Businesses</a>
                </li>
              </ul>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">
            {this.mapBusinesses() }
            </div>
      </div>
      </div>
      </div>
        : <Redirect to={{pathname:'/login'}}/>
      );
    }
}
export default withRouter(UserProfile);
