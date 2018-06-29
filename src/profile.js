import React, { Component } from 'react';

import ReviewCard from './components/review';
import Navbar from './components/navbar'

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    console.log(this.props.match.params.id)
        return (
          <div>
            <Navbar/>
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
                  style={{color: 'white', fontSize: '2rem'}}>Cafe Javas</span>
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
                      style={{color: 'white', fontSize: '1rem'}}>Plot 4 Kamwokya,Kampala,Uganda</span>
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
                      <span className="dfira" style={{color: 'white', fontSize: '1rem'}}>Restaurant</span>
                      </div> 
                    </div>
                    <div className="w-100" />
                    <div className="col" style={{display: 'flex'}}>
                      <a className="nav-link" href="/add-review">
                      <button className="btn btn-success my-2 my-sm-0 align-items-center" 
                      style={{fontSize: '1rem', padding: '.6rem'}}>Add review</button>
                      </a>
                      <a className="nav-link" href="/edit-business">
                      <button className="btn btn-primary my-2 my-sm-0 align-items-center" 
                      style={{fontSize: '1rem', padding: '.6rem 2rem'}}>Edit</button>
                      </a>
                      <a className="nav-link" href="/home">
                      <button className="btn btn-danger my-2 my-sm-0 align-items-center" 
                      style={{fontSize: '1rem', padding: '.6rem 1rem'}}>Delete</button>
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
              <a className="nav-link active" >Reviews</a>
            </li>
          </ul>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
        <ReviewCard/>
        <ReviewCard/>
        </div>
      </div>
      </div>
      </div>
        );
    }
}