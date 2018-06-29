import React, { Component } from 'react';

import ReviewCard from './components/review';
import Navbar from './components/navbar'

export default class UserProfile extends Component {

  render(){
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

                      <div className="business-title" style={{color: 'white', fontSize: '2rem', 
                      margin: '1rem 0 0 0'}}>
                      <span className="display-4 circular" style={{color: 'white', 
                      fontSize: '2rem'}}>Peter Wade</span>
                      </div>

                      <div className="row">
                        <div style={{display: 'flex'}}>
                          <a className="nav-link" href="/add-business">
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
                  <a className="nav-link active" >My Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " >My Businesses</a>
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