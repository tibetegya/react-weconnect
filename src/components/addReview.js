import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import Navbar from './navbar'
import { ROOT_URL } from '../App';
import Notifications, {notify} from 'react-notify-toast';
import { Redirect } from 'react-router-dom'
import { isLoggedIn } from './utils';
export default class AddReview extends Component{
  constructor(props){
    super(props)
    this.state = {
      businessId : this.props.match.params.id,
      title: '',
      body: ''

    }
  }
  handleSubmit = e => {
    e.preventDefault();
    //check for empty feilds before submitting
    if (this.state.title === '' || this.state.body === ''){
        notify.show('Add add a review before submission', 'error')
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
        //redirect to business profile on successful addition of review
            this.props.history.push('/business-profile/'+this.state.businessId+'/review-success');
      })
      .catch(error =>{});
    }
    }
handleInput = e => {
  //update state with input data
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
        return(
          isLoggedIn() ?
        <div>
          <Notifications />
          <Navbar/>
            <div className="container">
              <Header heading="Add a Review"/>
              <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <form onSubmit={this.handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="reviewTitle">Review Title</label>
                      <input onChange={this.handleInput} name="title" type="text" 
                      className="form-control" id="reviewTitle" placeholder="Review Title" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="reviewBody">Add Description</label>
                      <textarea onChange={this.handleInput} name="body" 
                      className="form-control" id="reviewBody" rows={6} defaultValue={""} />
                    </div>
                    <div className="container">
                      <div className="row justify-content-md-center">
                        <button type="submit" className="btn btn-success col-8" 
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        marginTop: '1rem', marginBottom: '10rem', marginLeft: 'auto', 
                        marginRight: 'auto', paddingTop: '0.5rem'}}>Post Review</button>
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
