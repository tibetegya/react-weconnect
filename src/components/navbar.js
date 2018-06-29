import React, { Component } from 'react';

import logo from '../css/Images/logo.svg';
import SettingsButton from './settings'
import { LoginButton,  RegisterButton, SearchButton } from './buttons'
import { withRouter } from "react-router-dom";
import jwt_decode from 'jwt-decode';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        navClass: '',
        isLoggedIn: false,
        page: '',
        token: '',
        user: ''


    };
  }
  componentWillMount (){
    if(localStorage.getItem('token')){
      let decoded_user = jwt_decode(localStorage.getItem('token'));
      // console.log(decoded_user)
      this.setState({
        isLoggedIn: true,
        token: localStorage.getItem('token'),
        user: decoded_user.user
      });
    }else{
      this.setState({
        isLoggedIn: false,
        token: '',
        user: ''
      });
    }
    this.setState({
      navClass: this.props.navClass,
      page: this.props.page

    });
  }
  componentWillUnmount =()=>{
    this.setState({
      page: ''

    })
  }
  shouldComponentUpdate =()=>{
    return (localStorage.getItem('token') === null)
  }
render(){
  let navClassName = "navbar navbar-expand-lg navbar-dark "+this.state.navClass;
  const isLoggedIn = this.state.isLoggedIn;
    let button;
    let searchButton;

    if (isLoggedIn) {
      button = <SettingsButton user={this.state.user} logout={this.state}/>;
    } else {
      if (this.state.page === 'userlogger') {
        button = null;
      }else{
      button = [<LoginButton key={0}/>,<RegisterButton key={1}/>].map( btn => btn)
    }}

    if (this.state.page === 'home') {
      searchButton = <SearchButton/>;
      } else{
        searchButton = null;
      }

    return (
    <nav className={navClassName} style={{backgroundColor: '#4371DB'}}>
        <div className="container"> 
          <a className="navbar-brand circular" href="/home">
            <img src={logo} width={40} height={40} className="d-inline-block align-center" alt='
            logo' style={{margin: '0 .5rem 0 0'}} />
            <span>WeConnect</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-md-auto align-items-center ">
            {searchButton}{button}
            </ul>
          </div>
        </div>
      </nav>

    );
};

}
export default withRouter(Navbar);
