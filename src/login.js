import React, { Component } from 'react';
import axios from 'axios';

import LoginForm from './components/loginForm';
import Header from './components/header';

class Login extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:5000/api/v2/auth/login`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
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