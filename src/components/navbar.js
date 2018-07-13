import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/style.css';
import logo from '../css/Images/logo.svg';

class Navbar extends Component {

render(){
    return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#4371DB'}}>
        <div className="container"> 
          <a className="navbar-brand circular" href="index.html">
            <img src={logo} width={40} height={40} className="d-inline-block align-center" alt='
            logo' style={{margin: '0 .5rem 0 0'}} />
            <span>WeConnect</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-md-auto align-items-center ">
              <li className="nav-item ">
                <a className="nav-link" href="business-profile.html">Businesses</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

    );
};

}
export default Navbar;