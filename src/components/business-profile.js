import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { isLoggedIn } from './utils';
import ReviewCard from './review';
import Navbar from './navbar'
import axios from 'axios'
import { ROOT_URL } from '../App'
import Notifications, {notify} from 'react-notify-toast';
import jwt_decode from 'jwt-decode';

class BusinessProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      businessId: this.props.match.params.id,
      business: {},
      reviewsData: []
    }
  }

  componentDidMount(){

    //fetch business business and its review data when the page is rendered
    this.getBusinessData()
    this.getReviewsData()

    //display a message on sucessful addition of a review
    if (this.props.match.params.msg === 'review-success'){
      notify.show('Review Added sucessfully', 'success')
    }
  }
  isOwner = ()=>{
    //checks whether logged in user owns that particular business.

    let decodedUser = jwt_decode(localStorage.getItem('token')).user;
    let businessOwner = this.state.business.creator
    if (decodedUser === businessOwner){
      //renders edit and delete buttons if user owns business
      return(
            <div className="d-flex flex-row">
              <div><a className="nav-link" href={"/edit-business/"+this.props.match.params.id}>
              <button className="btn btn-primary my-2 my-sm-0 align-items-center" 
              style={{fontSize: '1rem', padding: '.6rem 2rem'}}>Edit</button>
              </a></div>
              <div><a className="nav-link" >
              <button className="btn btn-danger my-2 my-sm-0 align-items-center" 
              style={{fontSize: '1rem', padding: '.6rem 1rem'}}
              data-toggle="modal" data-target="#deleteModal">Delete</button>
              </a></div>
              </div>
      );
    }else{
      //renders add review button if user does not own business
      return(
            <a className="nav-link" href={`/add-review/${this.state.businessId}`}>
            <button className="btn btn-success my-2 my-sm-0 align-items-center" 
            style={{fontSize: '1rem', padding: '.6rem'}}>Add review</button>
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
                  business: res.data
                })
          })
          .catch(error =>{});
  }
  getReviewsData =()=>{
    //fetches all reviews for the business
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        axios.get(`${ROOT_URL}/businesses/${this.state.businessId}/reviews`, 
          {
              headers: {'Content-Type':'application/json' }
          })
          .then(res => {
            console.log(res.data)
                this.setState({
                  reviewsData: res.data
                })
          })
          .catch(error =>{});
  }
  mapReviews = ()=>{
    //maps each review to a card
    if(this.state.reviewsData.length >= 1){
    return (this.state.reviewsData.map(review =>
      <ReviewCard key={review.title} title={review.title} body={review.body}
             author={review.author} creationDate={review.creation_date}/>
      ));}else{
        return <div>This Business has no reviews</div>
      }
  }
  handleBusinessDelete =() =>{
    //maps each business to a card
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.delete(`${ROOT_URL}/businesses/${this.props.match.params.id}`, 
      {
          headers: {'Content-Type':'application/json' }
      })
      .then(res => {
            this.props.history.push('/home/delete-success')
      })
      .catch(error =>{});
  }

  render(){
        return (
          isLoggedIn()?
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
                  <div className="business-title" style={{color: 'white', 
                  fontSize: '2rem', margin: '1rem 0 0 0'}}>
                  <span className="display-4 circular" 
                  style={{color: 'white', fontSize: '2rem'}}>{this.state.business.business_name}</span>
                  </div> 
                  <div className="row">
                    <div className="col">
                      <div className="business-location" 
                      style={{margin: '.5rem 0 0 0'}}>
                      <span className="circular" 
                      style={{color: 'white', fontSize: '1rem'}}>Location</span>
                      </div> 
                      <div className="business-location-text" 
                      style={{margin: '0rem 0 0 0'}}>
                      <span className="fira" 
                      style={{color: 'white', fontSize: '1rem'}}>{this.state.business.location}</span>
                      </div> 
                    </div>
                    <div className="col">
                      <div className="business-location" 
                      style={{margin: '.5rem 0 0 0'}}>
                      <span className="circular" 
                      style={{color: 'white', fontSize: '1rem'}}>Category</span>
                      </div> 
                      <div className="business-location-text" 
                      style={{margin: '0rem 0 0 0'}}>
                      <span className="dfira" style={{color: 'white', fontSize: '1rem'}}>{this.state.business.category}</span>
                      </div> 
                    </div>
                    <div className="w-100" />
                    <div className="col" style={{display: 'flex'}}>
                      {this.isOwner()}
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
        <button onClick={this.handleBusinessDelete} type="button" className="btn btn-danger" data-dismiss="modal">Delete Business</button>
      </div>
    </div>
  </div>
</div>


      </div>
      : <Redirect to={{pathname:'/login'}}/>
        );
    }
}

export default withRouter(BusinessProfile);