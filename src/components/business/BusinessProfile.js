import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { isLoggedIn } from '../helpers/Utils';
import ReviewCard from './ReviewCard';
import Navbar from '../layout/Navbar'
import axios from 'axios'
import { ROOT_URL } from '../../App'
import {notify} from 'react-notify-toast';
import jwt_decode from 'jwt-decode';
import AddReview from './AddReview';
import AddBusiness from './AddBusiness';
import Profile from '../layout/Profile'
import { Button } from 'reactstrap';

/**
 *
 *
 * @class BusinessProfile
 * @extends {Component}
 */
class BusinessProfile extends Component {
constructor(props){
    super(props);
    this.state = {
      businessId: this.props.match.params.id,
      business: {},
      reviewsData: [],
      modalReview: false,
      modalBusiness: false,
      type: 'business',
      businessName:'',
      category: '',
      businessAddress: '',
      businessCity: '',
      businessCountry: '',
      description: '',
      title: '',
      body: ''

    }
    this.toggleReview = this.toggleReview.bind(this);
    this.toggleBusiness = this.toggleBusiness.bind(this);
}
toggleReview() {
  this.setState({
    modalReview: !this.state.modalReview
  });
}
toggleBusiness() {
  this.setState({
    modalBusiness: !this.state.modalBusiness
  });
}
componentDidMount(){

    //fetch business business and its review data when the page is rendered
    this.getBusinessData()
    this.getReviewsData()
}
actionButton = ()=>{
    //checks whether logged in user owns that particular business.

    let decodedUser = jwt_decode(localStorage.getItem('token')).user;
    let businessOwner = this.state.business.creator
    if (decodedUser === businessOwner){
      //renders edit and delete buttons if user owns business
      return(
            <div className="d-flex flex-row">
              <div><a className="nav-link" >
              <Button color="primary" onClick={this.toggleBusiness}>Edit</Button>
              </a></div>
              <div><a className="nav-link" >
              <button className="btn btn-danger my-2 my-sm-0 align-items-center"
              data-toggle="modal" data-target="#deleteModal">Delete</button>
              </a></div>
              </div>
      );
    }else if(decodedUser !== businessOwner){
      //renders add review button if user does not own business

      return(
            <a className="nav-link" >
            <Button color="success" onClick={this.toggleReview}>Add Review</Button>
            </a>
      )
    }
}
getBusinessData =()=>{
    //fetches business data

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.get(`${ROOT_URL}/businesses/${this.state.businessId}`, 
          {
              headers: {'Content-Type':'application/json' }
          })
          .then(res => {
                this.setState({
                  business: res.data,
                  businessName: res.data.business_name,
                  category: res.data.category,
                  businessAddress: res.data.location.split(' ')[0],
                  businessCity: res.data.location.split(' ')[1],
                  businessCountry: res.data.location.split(' ')[2],
                  description: res.data.profile
                })
          })
          .catch(error =>{
          }
          );
}
getReviewsData =()=>{
    //fetches all reviews for the business
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.get(`${ROOT_URL}/businesses/${this.state.businessId}/reviews`, 
          {
              headers: {'Content-Type':'application/json' }
          })
          .then(res => {
                this.setState({
                  reviewsData: res.data
                })
          })
          .catch(error =>{
            // login(this, error)
          });
}
mapReviews = ()=>{
    //maps each review to a card

    if(this.state.reviewsData.length >= 1){
    return (this.state.reviewsData.map(review =>
      <ReviewCard key={review.id} title={review.title} body={review.body}
             author={review.author} creationDate={review.creation_date}/>
      ));}else{
        return <div>This Business has no reviews</div>
      }
}
handleBusinessDelete = e =>{
    //maps each business to a card
    e.preventDefault();

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.delete(`${ROOT_URL}/businesses/${this.props.match.params.id}`, 
      {
          headers: {'Content-Type':'application/json' }
      })
      .then(res => {
            this.props.history.push('/home/delete-success')
      })
      .catch(error =>{
        this.props.history.push('/login')
      });
}

handleSubmit = e => {

  e.preventDefault();
  //check for empty fields before submitting
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

  // api call when submitting edited business data
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  axios.put(`${ROOT_URL}/businesses/${this.props.match.params.id}`, JSON.stringify(businessData),
    {
        headers: {'Content-Type':'application/json' }
    })
    .then(res => {
        this.toggleBusiness()
        this.componentDidMount()
        notify.show('Business Editted sucessfully', 'success')
    })
    .catch(error =>{
      this.props.history.push('/login')
    });

  }
}

handleSubmitReview = e => {
  e.preventDefault();
  //check for empty feilds before submitting
  if (this.state.title === '' || this.state.body === ''){
      notify.show('Add a review before submission', 'error')
  }
  else{
  const reviewData = {
    title :this.state.title,
    body : this.state.body
  }
  //post the submitted review
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  axios.post(`${ROOT_URL}/businesses/${this.state.businessId}/reviews`, JSON.stringify(reviewData), 
    {
        headers: {'Content-Type':'application/json' }
    })
    .then(res => {
        notify.show('Review Added sucessfully', 'success')
        this.toggleReview()
        this.componentDidMount()
    })
    .catch(error =>{
      notify.show('Review not Added', 'error')
    });
  }
}
handleInput = e => {
//assign input values to state as they are being typed
  this.setState({[e.target.name]: e.target.value})

  if(e.target.name === 'title'){
    if(e.target.value !==undefined && e.target.value.length > 50){
    notify.show('review title is too long', 'warning')
    e.target.value = e.target.value.slice(0, 50);
    }
  }
    if(e.target.name === 'body'){
      if(e.target.value !==undefined && e.target.value.length > 255){
      notify.show('review body is too long', 'warning')
      e.target.value = e.target.value.slice(0, 255);
      }
  }
}
render(){
        return (
          isLoggedIn()?
          <div>
            <Navbar history={this.props.history}/>
            {/* <Notifications options={{zIndex: 20000}}/> */}
        <Profile type={this.state.type} businessName={this.state.business.business_name} 
        location={this.state.business.location} category={this.state.business.category} actionButton={this.actionButton}/>
      <div className="container business-profile">
      <div className="row">
        <div className="col-md-12 " style={{marginBottom: '2rem'}}>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" >Reviews</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
        {this.mapReviews()}
        </div>
      </div>
      </div>

  <div className="modal fade" id="deleteModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Confirm business deletion</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button id='business-delete'onClick={this.handleBusinessDelete} type="button" className="btn btn-danger" data-dismiss="modal">Delete Business</button>
      </div>
    </div>
  </div>
</div>
<AddReview isOpen={this.state.modalReview} toggle={this.toggleReview} 
className={this.props.className} businessId={this.state.businessId}
handleInput={this.handleInput} handleSubmit={this.handleSubmitReview}/>

{/* CALL MODAL WHEN EDITTING BUSINESS*/ }
<AddBusiness isOpen={this.state.modalBusiness} toggle={this.toggleBusiness} business={this.state.business}
className={this.props.className} businessName={this.state.business.business_name} profile={this.state.business.profile}
category={this.state.business.category} location={this.state.business.location} handleInput={this.handleInput}
handleSubmit={this.handleSubmit} type="Edit" />

      </div>
      : <Redirect to={{pathname:'/login'}}/>
        );
}
}

export default BusinessProfile;
