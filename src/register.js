import React, { Component } from 'react';

import RegisterForm from './components/registerForm';
import Header from './components/header';

class Register extends Component {
    render(props){
        return (
              <div className="container">
                <Header/>
                <RegisterForm />
              </div>
          );
    }
}


export default Register;