import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './home';
import Layout from './layout';
import Login from './login';
import Register from './register';
import Profile from './profile';
import UserProfile from './user-profile';
import AddReview from './addReview';
import AddBusiness from './addBusiness';
import Results from './results'

export const ROOT_URL = 'http://127.0.0.1:5000/api/v2';
const Routes = () => (
  <Router>
    <div>
      <Route exact strict path={"/"} component={Home}/>
      <Route exact strict path={"/home"} component={Home}/>
      <Route exact strict path={"/register"} component={Register}/>
      <Route exact strict path={"/login"} component={Login}/>
      <Route exact strict path={"/results"} component={Results}/>
      <Route exact strict path={"/user-profile"} component={UserProfile}/>
      <Route exact strict path={"/business-profile/:id"} component={Profile}/>
      <Route exact strict path={"/add-review"} component={AddReview}/>
      <Route exact strict path={"/add-business"} component={AddBusiness}/>
      <Route exact strict path={"/edit-business"} component={AddBusiness}/>
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
