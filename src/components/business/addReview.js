import React, { Component } from 'react';
import axios from 'axios';
import { ROOT_URL } from '../../App';
import { notify } from 'react-notify-toast';
import { Redirect } from 'react-router-dom'
import { isLoggedIn } from './../helpers/utils';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class AddReview extends Component{
constructor(props){
    super(props)
    this.state = {
      businessId : this.props.businessId,
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
            console.log(this.state)
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
          <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}>Add Review</ModalHeader>
              <ModalBody>
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
                      </div>
                    </div>
                  </div>
                </form>
              </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.props.toggle}>Post Review</Button>
            </ModalFooter>
          </Modal>
          : <Redirect to={{pathname:'/login'}}/>

      );
}
}
