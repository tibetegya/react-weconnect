import React, { Component } from 'react';
import './css/bootstrap.css';
import './css/style.css';
import Navbar from './components/navbar';
import UserAction from './components/userAction';

class User extends Component {
    render(props){
        return (
            <div className="container-fluid">
            <Navbar />
            <div className="container">
              <div className="main row">
                <div className="col-md-12">
                  <div className="row justify-content-md-center circular " style={{margin: '2rem 0 4rem 0'}}>
                    <h1>Log In To your Account</h1>
                  </div>
                  <div className="row justify-content-md-center">
                    <div className="col-md-4">
                      <UserAction name='login'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
    }
}


export default User;