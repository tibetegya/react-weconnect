import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import { ROOT_URL } from '../App'
import Navbar from './navbar'

export default class Register extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            comfirmPassword: '',


        };
      }

    handleSubmit = e => {
        e.preventDefault();

        const userData = {
            user_name :this.state.username,
            email : this.state.email,
            password : this.state.password
        }

        axios.post(`${ROOT_URL}/auth/register`, JSON.stringify(userData), {
            headers: {'Content-Type':'application/json'}
        })
          .then(res => {
                console.log(res);
          })
          .catch(error =>{
              console.log(error.response.data)
          });
        }
    handleInput = e => {
        console.log(this.state)
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
    return(
        <div>
        <Navbar page="userlogger"/>

        <div className="container">
              <Header heading="Create Account" text="Join thousands more the are driving the change in 
              the industry Don't be left behind. The time is now"/>
        <div className="row justify-content-md-center">
            <div className="col-md-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Enter Username</label>
                        <input onChange={this.handleInput} name="username" type="text" 
                        className="form-control" id="formGroupExampleInput2" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter your Email Address</label>
                        <input onChange={this.handleInput} name="email" type="email" 
                        className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" 
                        className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={this.handleInput} name="password" type="password" 
                        className="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label >Confirm Password</label>
                        <input onChange={this.handleInput} name="comfirmPassword" type="password" 
                        className="form-control" id="cofirmInputPassword" placeholder="Confirm Password" />
                    </div>
                    <div className="row justify-content-md-center">
                        <button type="submit" className="btn btn-success col-8" 
                        style={{marginTop: '1rem', marginBottom: '10rem', marginLeft: 'auto', 
                        marginRight: 'auto', paddingTop: '.5rem'}}>Register</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    );
}
}

