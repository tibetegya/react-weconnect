import React, { Component } from 'react';
import axios from 'axios';

import Header from './header';
import Navbar from './navbar'
import { ROOT_URL } from '../App';

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

    const reviewData = {
      title :this.state.title,
      body : this.state.body
    }
    console.log(reviewData)
    console.log(localStorage.getItem('token'))
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.post(`${ROOT_URL}/businesses/${this.state.businessId}/reviews`, JSON.stringify(reviewData), 
      {
          headers: {'Content-Type':'application/json' }
      })
      .then(res => {
            console.log(res);
            this.props.history.push('/business-profile/'+this.state.businessId);
      })
      .catch(error =>{
          console.log(error.response)
      });
    }
handleInput = e => {
    console.log(this.state)
    this.setState({[e.target.name]: e.target.value})
}
    render(){
        return(
        <div>
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
                      <label htmlFor="formGroupExampleInput2">Review Title</label>
                      <input onChange={this.handleInput} name="title" type="text" 
                      className="form-control" id="formGroupExampleInput2" placeholder="Review Title" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Add Description</label>
                      <textarea onChange={this.handleInput} name="body" 
                      className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
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
        );
    }
}
