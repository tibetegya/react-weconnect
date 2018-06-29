import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './components/navbar'
import Header from './components/header';
import { ROOT_URL } from './App'
import { withRouter } from "react-router-dom";

 class Login extends Component{

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			token: ''


		};
	  }

	handleSubmit = e => {
		e.preventDefault();

		const userData = {
			user_name :this.state.username,
			password : this.state.password
		}

		axios.post(`${ROOT_URL}/auth/login`, JSON.stringify(userData), {
			headers: {'Content-Type':'application/json'}
		})
		  .then(res => {
				console.log(res.data.token);
				this.setState({
					token:res.data.token,
					isLoggedIn: true
				});
				console.log('token is',this.state.token)
				localStorage.setItem('token', this.state.token)

				this.props.history.push('/home');
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

					<Header heading="Log In To your Account"/>

				<div className="row justify-content-md-center">
					<div className="col-md-4">

				<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>User Name</label>
							<input  onChange={this.handleInput} name="username" type="text"
							className="form-control" id="inputUsername" placeholder="Enter Username" />
						</div>

						<div className="form-group">
							<label>Password</label>
							<input onChange={this.handleInput} name="password" type="password"
									className="form-control" id="inputPassword" placeholder="Password" />
						</div>

						<div className="row justify-content-md-center">
							<button type="submit" className="btn btn-dark col-8"
							style={{marginTop: '1rem',marginBottom: '1rem',  marginLeft: 'auto',
									marginRight: 'auto', paddingTop: '0.5rem'}}>Login</button>
						</div>
			</form>
			<div className="flex justify-content-md-center">
				<span>In case you forgot the password </span>
				<a href="/reset-password"> Reset password</a>
			</div>
			</div>
			</div>
			</div>
	</div>);
	}
}
export default withRouter(Login);