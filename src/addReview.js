import React, { Component } from 'react';
// import axios from 'axios';

import Header from './components/header';

export default class AddReview extends Component{
    render(){
        return(
            <div className="container">
              <Header/>
              <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-5">
            <form>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput2">Review Title</label>
                      <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Add Description</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <div className="container">
                      <div className="row justify-content-md-center">
                        <button type="submit" className="btn btn-success col-8" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', marginBottom: '10rem', marginLeft: 'auto', marginRight: 'auto', paddingTop: '0.5rem'}}><img style={{margin: '0 .5rem 0 0'}} width={13} height={13} src="css/Images/plus.svg" alt="..." />Post Review</button>
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
        );
    }
}
