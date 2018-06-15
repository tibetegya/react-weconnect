import React, { Component } from 'react';
import LoginForm from './components/loginForm';
import Header from './components/header';

class Login extends Component {
    render(props){
        return (
            <div className="container">
              <Header/>
              <LoginForm />
            </div>
          );
    }
}


export default Login;