import React, { Component } from 'react';
import axios from 'axios';

import RegisterForm from './components/registerForm';
import Header from './components/header';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
    persons: []
    };
  }

  componentDidMount() {
    axios.post(`http://127.0.0.1:5000/api/v2/auth/register`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
    }
    render(){
        return (
              <div className="container">
                <Header/>
                <RegisterForm />
              </div>
          );
    }
}
