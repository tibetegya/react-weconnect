import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'

import BusinessCard from '../business/business';
import Navbar from '../layout/navbar'
import axios from 'axios';
import { ROOT_URL } from '../../App'

import Notifications, {notify} from 'react-notify-toast';
import { isLoggedIn } from '../helpers/utils';
import AddBusiness from '../business/addBusiness';
import Profile from '../layout/profile'

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.match.params.name,
      token: localStorage.getItem('token'),
      businessData: [],
      modal: false,
      type: 'user',
      businessName: '',
      category: '',
      businessAddress: '',
      businessCity: '',
      businessCountry: '',
      description: '',
      update: true
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

componentWillMount(){
  this.getUserBusinesses()
}
componentDidMount(){
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
handleSubmit = e => {

  console.log(' state',this.state)
  e.preventDefault();

  const businessData = {
    business_name :this.state.businessName,
    category : this.state.category,
    location : this.state.businessAddress+' '+this.state.businessCity+' '+this.state.businessCountry,
    profile: this.state.description
  }

    //api call when adding a business for the first time

  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  axios.post(`${ROOT_URL}/businesses`, JSON.stringify(businessData),
    {
        headers: {'Content-Type':'application/json' }
    })
    .then(res => {
      this.toggle()
      notify.show('Business Added sucessfully', 'success')
    })
    .catch(error =>{
    });
  }

handleInput = e => {
  console.log(' state',this.state)
//assign input values to state as they are being typed
  this.setState({[e.target.name]: e.target.value})
}
render(){
  console.log(this.state.modal)
        return (
          isLoggedIn() ?
          <div>
            <Navbar/>
            <Notifications />
            <Profile type={this.state.type} toggle={this.toggle} user={this.state.user}/>
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
            <AddBusiness isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} handleSubmit={this.handleSubmit} handleInput={this.handleInput}/>
      </div>
      </div>
      </div>
        : <Redirect to={{pathname:'/login'}}/>
      );
}
}
export default withRouter(UserProfile);
