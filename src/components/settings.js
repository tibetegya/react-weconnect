import React, { Component } from 'react';
import axios from 'axios';
import { ROOT_URL } from '../App';
import { withRouter } from 'react-router-dom'

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
        // console.log(localStorage.getItem('token'))
        // console.log(this.state.token)

        if(localStorage.getItem('token')){

        axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.token}`;
        axios.post(`${ROOT_URL}/auth/logout`, {
          headers: {'Content-Type':'application/json'}

      })
        .then( () => {
              this.setState({
                  token:'',
                  isLoggedIn: false
              });
              localStorage.removeItem('token')
              this.props.history.replace('/home');
        }).catch( (error) =>{

            console.log(error)
            // localStorage.removeItem('token')
        })
            }else{
            this.props.history.push('/login');
        }
      }
      render(){
        //   console.log(this.state)
    return (
        <li className="nav-item">
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
    );
  }
}
export default withRouter(SettingsButton);