import React, { Component } from 'react';
import axios from 'axios';
import { ROOT_URL } from '../../App';
import { withRouter } from 'react-router-dom'
import {isLoggedIn} from '../helpers/utils'

class SettingsButton extends Component {

constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: this.props.logout.isLoggedIn,
            token: this.props.logout.token,
            user: this.props.user


        };
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
        }).catch( (error) =>{})
            }else{
                //if no token exists redirect the user to login
            this.props.history.push('/login');
        }
}
render(){
    return (
        isLoggedIn()?
        <li className="nav-item" id='settings'>
        <div className="dropdown show">
            <a className=" nav-link btn btn-dark my-2 my-sm-0 dropdown-toggle" style={{paddingLeft:'1rem', paddingRight:'1rem'}}
            role="button" id="dropdownMenuLink" 
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Settings
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href={`/user-profile/${this.state.user}`}>My Profile</a>
            <a onClick={this.logoutUser} className="dropdown-item" >Logout</a>
            </div>
        </div>
        </li>
        :null
    );
}
}
export default withRouter(SettingsButton);