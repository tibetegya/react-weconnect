import React, { Component } from 'react';
import { Button } from 'reactstrap';

 function Profile (props){
    let type = ()  => {
            if(props.type === 'user'){
                return(
                    <div className="col-md-6">

                      <div className="business-title user-profile" style={{color: 'white', fontSize: '2rem', 
                      margin: '1rem 0 0 0'}}>
                      <span className="display-4 circular" style={{color: 'white', 
                      fontSize: '2rem'}}>{props.user}</span>
                      </div>

                      <div className="row">
                        <div style={{display: 'flex'}}>
                          <a className="nav-link" >

                          <Button color="success" onClick={props.toggle}>Add a business</Button>
                          </a>
                          </div>
                      </div>

                    </div>
                );
            }else if(props.type === 'business'){
                return(
                    <div className="col-md-6">
                  <div className="business-title business-profile" style={{color: 'white', 
                  fontSize: '2rem', margin: '1rem 0 0 0'}}>
                  <span className="display-4 circular" 
                  style={{color: 'white', fontSize: '2rem'}}>{props.businessName}</span>
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
                      style={{color: 'white', fontSize: '1rem'}}>{props.location}</span>
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
                      <span className="dfira" style={{color: 'white', fontSize: '1rem'}}>{props.category}</span>
                      </div> 
                    </div>
                    <div className="w-100" />
                    <div className="col" style={{display: 'flex'}}>
                      {props.actionButton()}
                    </div>
                  </div>
                </div>
                );
            }
    }
    return(
        <div className="jumbotron jumbotron-fluid block-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{marginBottom: '3rem'}}>
              <div className="row align-items-center">
                <div className="col-md-2 "><div className="business-logo" style={{margin: '1rem 0 0 0'}} /></div> 
                {type()}
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
}

export default Profile