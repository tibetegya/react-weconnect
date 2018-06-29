import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home';
import Layout from './layout';
import Login from './components/login';
import Register from './components/register';
import BusinessProfile from './components/business-profile';
import UserProfile from './components/user-profile';
import AddReview from './components/addReview';
import AddBusiness from './components/addBusiness';
import Results from './components/results'


export const ROOT_URL = process.env.HOST || 'http://127.0.0.1:5000/api/v2';
console.log(ROOT_URL)
const Routes = () => (
  <Router>
    <div>
      <Route exact strict path={"/"} component={Home}/>
      <Route exact strict path={"/home"} component={Home}/>
      <Route exact strict path={"/register"} component={Register}/>
      <Route exact strict path={"/login"} component={Login}/>
      <Route exact strict path={"/results"} component={Results}/>
      <Route exact strict path={"/user-profile/:name"} component={UserProfile}/>
      <Route exact strict path={"/business-profile/:id"} component={BusinessProfile}/>
      <Route exact strict path={"/add-review/:id"} component={AddReview}/>
      <Route exact strict path={"/add-business/:user"} component={AddBusiness}/>
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
