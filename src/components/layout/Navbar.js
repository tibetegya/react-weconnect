import React, { Component } from 'react';

import logo from '../../css/Images/logo.svg';
import SettingsButton from '../auth/Settings'
import { LoginButton,  RegisterButton, BusinessesButton } from './Buttons'
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { ROOT_URL } from '../../App';
/**
 *
 *
 * @class Navbar
 * @extends {Component}
 */
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
    //decode token to get the user
    if(localStorage.getItem('token')){
      let decoded_user = jwt_decode(localStorage.getItem('token'));
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
logoutUser = e =>{
  e.preventDefault();

      //logout the user
      if(localStorage.getItem('token')){

      axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.token}`;
      axios.post(`${ROOT_URL}/auth/logout`, {
        headers: {'Content-Type':'application/json'}

    })
      .then( () => {
          //update the state on successful logout
            this.setState({
                token:'',
                isLoggedIn: false
            });
            //remove the token from localstorage and redirect to the home page
            localStorage.removeItem('token')
            this.props.history.push('/');
      }).catch( (error) =>{
        this.setState({
          token:'',
          isLoggedIn: false
      });
      //remove the token from localstorage and redirect to the home page
      localStorage.removeItem('token')
      this.props.history.push('/');
      })
      }else{
              //if no token exists redirect the user to login
          this.props.history.push('/login');
      }
}

render(){

    let navClassName = "navbar navbar-expand-lg navbar-dark "+this.state.navClass;
    const isLoggedIn = this.state.isLoggedIn;
      let button;
      // console.log(this.props)

    //conditional rendering of buttons when or not a user is logged in
    if (isLoggedIn) {
      button = <SettingsButton logoutUser={this.logoutUser} user={this.state.user} logout={this.state}/>;
    } else {
      if (this.state.page === 'userlogger') {
        button = null;
      }else{
      button = [<LoginButton key={0}/>,<RegisterButton key={1}/>].map( btn => btn)
    }}

    return (
      <nav className={navClassName} style={{backgroundColor: '#4371DB'}}>
        <div className="container"> 
          <a className="navbar-brand circular" href="/home">
            <img src={logo} width={40} height={40} className="d-inline-block align-center" alt='
            logo' style={{margin: '0 .5rem 0 0'}} />
            <span id='weconnect'>WeConnect</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-md-auto align-items-center ">
            <BusinessesButton/>{button}
            </ul>
          </div>
        </div>
      </nav>

    );
};

}
export default Navbar;
