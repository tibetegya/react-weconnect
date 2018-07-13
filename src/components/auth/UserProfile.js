import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

import BusinessCard from '../business/BusinessCard';
import Navbar from '../layout/Navbar'
import axios from 'axios';
import { ROOT_URL } from '../../App'

import {notify} from 'react-notify-toast';
import { isLoggedIn } from '../helpers/Utils';
import AddBusiness from '../business/AddBusiness';
import Profile from '../layout/Profile'

/**
 *
 *
 * @class UserProfile
 * @extends {Component}
 */
class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      token: localStorage.getItem('token'),
      businessData: [],
      modal: false,
      type: 'user',
      businessName: '',
      category: '',
      businessAddress: '',
      businessCity: '',
      businessCountry: '',
      description: ''
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
  this.setState({
    user: this.props.match.params.name
  })
  this.getUserBusinesses()
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

  e.preventDefault();
  if (this.state.businessName.trim() === ''){
    notify.show('Business Name is missing', 'error')
  }else if (this.state.category === ''){
    notify.show('You must select a Category', 'error')
  }else if (this.state.businessCountry === ''){
    notify.show('You must select a Country', 'error')
  }else if (this.state.businessCity.trim() === ''){
    notify.show('City is missing', 'error')
  }else if (this.state.businessAddress.trim() === ''){
    notify.show('business Address is missing', 'error')
  }else if (this.state.description.trim() === ''){
    notify.show('Description is missing', 'error')
  }else{


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
      this.componentDidMount()
      notify.show('Business Added sucessfully', 'success')
    })
    .catch(error =>{
    });
  }
}
handleInput = e => {
//assign input values to state as they are being typed
  this.setState({[e.target.name]: e.target.value})
}
render(){
        return (
          isLoggedIn() ?
          <div>
            <Navbar history={this.props.history}/>
            {/* <Notifications options={{zIndex: 20000}}/> */}
            <Profile type={this.state.type} toggle={this.toggle} user={this.state.user}/>
          <div className="container user-profile">
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
            <AddBusiness type="Add"  isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} handleSubmit={this.handleSubmit} handleInput={this.handleInput}/>
      </div>
      </div>
      </div>
        : <Redirect to={{pathname:'/login'}}/>
      );
}
}
export default UserProfile;
