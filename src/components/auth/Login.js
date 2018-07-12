import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../layout/Navbar'
import Header from '../layout/Header';
import { ROOT_URL } from '../../App'
import {notify} from 'react-notify-toast';

 class Login extends Component{

constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			token: '',
			emailForReset:'',
			newPassword :'',
			confirmNewPassword: ''
		};
}

handleSubmit = e => {
		e.preventDefault();
		//check for empty fields before submitting
		if (this.state.username === ''){
			notify.show('Username is missing', 'error')
		}else if (this.state.password === ''){
			notify.show('Password is missing', 'error')
		}
		else{

		const userData = {
			user_name :this.state.username,
			password : this.state.password
		}
		//api call to login endpoint
		axios.post(`${ROOT_URL}/auth/login`, JSON.stringify(userData), {
			headers: {'Content-Type':'application/json'}
		})
		  .then(res => {
			  //save token in state
				this.setState({
					token:res.data.token,
					isLoggedIn: true
				});
				//store token in localstorage
				localStorage.setItem('token', this.state.token)

				//redirect user to home page
				this.props.history.push('/home/login-success');
		  })
		  .catch(error =>{
			  //display error massage to user on failure to login
			notify.show(error.response.data.message, 'error')
		  })
		}
}
handleInput = e => {
		this.setState({[e.target.name]: e.target.value})
		//check for password confirmation
		if(e.target.name === 'confirmNewPassword'){
            if(this.state.newPassword === ''){
                e.target.value = ''
                notify.show('Input new password first', 'error')
            }else if (e.target.value === this.state.newPassword){
                notify.show('Password Cofirmed', 'success', 800)
            }else if (e.target.value.length > this.state.newPassword.length){
                notify.show('Password does not match', 'error')
			}
		}
}
handlePasswordReset = e =>{
		e.preventDefault();
		//check for empty feilds before password reset is submitted
		if (this.state.emailForReset === ''){
			notify.show('Email is missing', 'error')
		}else if (this.state.newPassword === ''){
			notify.show('Password is missing', 'error')
		}
		else{
			const resetData = {
				email :this.state.emailForReset,
				new_password : this.state.newPassword
			}
			//api call to password reset endpoint
			axios.post(`${ROOT_URL}/auth/reset-password`, JSON.stringify(resetData), {
				headers: {'Content-Type':'application/json'}
			})
			  .then(res => {
				  //display message on successful password reset
					notify.show(res.data.message, 'success')
			  })
			  .catch(error =>{

				//display message on failure of password reset
					notify.show(error.response.data.message, 'error')
			  })
		}

}
componentDidMount(){
		//display message upon sucessful registration
		// if(this.props.match.params.msg){
        //     notify.show('You are registered sucessfully', 'success')
        // }
}
render(){
	return(
		<div>
		{/* <Notifications options={{zIndex: 20000}} /> */}
			<Navbar page="userlogger"/>
				<div className="container">

					<Header heading="Log In To your Account"/>

				<div className="row justify-content-md-center">
					<div className="col-md-4">

				<form className='login' onSubmit={this.handleSubmit}>
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
				<a data-toggle="modal" data-target="#resetModal" href=""> Reset password</a>
			</div>
			</div>
			</div>
			</div>
			<div className="modal fade" id="resetModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="resetModalLabel">Reset Password</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">
						<div className="form-group">
							<label>Your Email address</label>
							<input onChange={this.handleInput} name="emailForReset" type="email"
									className="form-control" id="emailForReset" placeholder="current email" />
									</div>
							<div className="form-group">
							<label>New Password</label>
							<input onChange={this.handleInput} name="newPassword" type="password"
									className="form-control" id="newPassword" placeholder="new password" />
						</div>
						<div className="form-group">
							<label>Confirm</label>
							<input onChange={this.handleInput} name="confirmNewPassword" type="password"
									className="form-control" id="confirmNewPassword" placeholder="Confirm new password" />
						</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
							<button id="buttonForReset" onClick={this.handlePasswordReset} type="button" className="btn btn-primary" data-dismiss="modal" >Reset Password</button>
						</div>
					</div>
				</div>
				</div>
	</div>
	);
}
}
export default Login;
