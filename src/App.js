import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './home';
import Layout from './layout';
import Login from './login';
import Register from './register';
import Profile from './profile';


const Routes = () => (
  <Router>
    <div>
      <Route exact strict path={"/"} component={Home}/>
      <Route exact strict path={"/home"} component={Home}/>
      <Route exact strict path={"/register"} component={Register}/>
      <Route exact strict path={"/login"} component={Login}/>
      <Route exact strict path={"/profile"} component={Profile}/>
    </div>
  </Router>
)


class App extends Component {
  render() {
    return (
      <Layout>
        <Routes/>
        </Layout>
    );
  }
}

export default App;
