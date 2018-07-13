import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/layout/Home';
import Layout from './Layout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import BusinessProfile from './components/business/BusinessProfile';
import UserProfile from './components/auth/UserProfile';
import Results from './components/business/Results'
import Notifications from 'react-notify-toast'


export const ROOT_URL = 'https://weconnect-tibe.herokuapp.com/api/v2';
const Routes = () => (
  <Router>
    <div>
      <Route exact strict path={"/"} component={Home}/>
      <Route exact strict path={"/home"} component={Home}/>
      <Route exact strict path={"/home/:msg"} component={Home}/>
      <Route exact strict path={"/register"} component={Register}/>
      <Route exact strict path={"/login"} component={Login}/>
      <Route exact strict path={"/login/:msg"} component={Login}/>
      <Route exact strict path={"/results"} component={Results}/>
      <Route exact strict path={"/user-profile/:name"} component={UserProfile}/>
      <Route exact strict path={"/user-profile/:name/:msg"} component={UserProfile}/>
      <Route exact strict path={"/business-profile/:id"} component={BusinessProfile}/>
      <Route exact strict path={"/business-profile/:id/:msg"} component={BusinessProfile}/>
    </div>
  </Router>
)


class App extends Component {
  render() {
    return (
      <Layout>
        <Notifications options={{zIndex: 20000}}/>
        <Routes/>
        </Layout>
    );
  }
}

export default App;
