import React, { Component } from 'react';
import axios from 'axios';
import Header from '../layout/Header';
import { ROOT_URL } from '../../App'
import Navbar from '../layout/Navbar'
import Notifications, {notify} from 'react-notify-toast';

 class Register extends Component{

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
        //check for empty fields
        if (this.state.username === ''){
			notify.show('Username is missing', 'error')
		}else if (this.state.email === ''){
			notify.show('Email is missing', 'error')
        }
        else if (this.state.password === ''){
			notify.show('Password is missing', 'error')
		}
		else{


        const userData = {
            user_name :this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        //api call t the user registration endpoint.
        axios.post(`${ROOT_URL}/auth/register`, JSON.stringify(userData), {
            headers: {'Content-Type':'application/json'}
        })
          .then(res => {
              //redirect to the login page upon successfull registration
                this.props.history.push('/login/success');
          })
          .catch(error =>{
          });
        }
}
handleInput = e => {

        //update state as user inputs data
        this.setState({[e.target.name]: e.target.value})

        //check for password confirmation
        if(e.target.name === 'comfirmPassword'){
            if(this.state.password === ''){
                e.target.value = ''
                notify.show('Input the password first', 'error')
            }else if (e.target.value === this.state.password){
                notify.show('Password Cofirmed', 'success')
            }else if (e.target.value.length > this.state.password.length){
                notify.show('Password does not match', 'error')
            }
        }
}

render(){
    return(
        <div>
             {/* <Notifications /> */}
        <Navbar page="userlogger"/>

        <div className="container">
              <Header heading="Create Account" text="Join thousands more that are driving the change in 
              the industry Don't be left behind. The time is now"/>
        <div className="row justify-content-md-center">
            <div className="col-md-5">
                <form onSubmit={this.handleSubmit} className="needs-validation register">
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Enter Username</label>
                        <input onChange={this.handleInput} name="username" type="text"
                        className="form-control" id="formGroupExampleInput2" placeholder="Username" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter your Email Address</label>
                        <input onChange={this.handleInput} name="email" type="email"
                        className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" 
                        className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={this.handleInput} name="password" type="password"
                        className="form-control" id="inputPassword" placeholder="Password" required/>
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
export default Register;
