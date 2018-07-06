import React, { Component } from 'react';

import Jumbotron from './jumbotron';
import Header from './../layout/header';
import Navbar from './../layout/navbar';
import Notifications, {notify} from 'react-notify-toast';
import shopify from "../../assets/shopify.svg"
import slack from "../../assets/slack.svg"
import kickstarter from "../../assets/kickstarter.svg"
import lyft from "../../assets/lyft.svg"

class Home extends Component {
componentDidMount(){
        //displays message for successful business deletion
        if(this.props.match.params.msg === 'delete-success'){
            notify.show('Business Deleted sucessfully', 'success')
        }

        //didplays message for successful login
        else if(this.props.match.params.msg === 'login-success'){
            notify.show('Sucessfully logged in', 'success', 1000)
        }
}
render(){
        let slogan = `WeConnect provides a platform that brings businesses and individuals together 
        And creates awareness for businesses through user reviews`
        return (
                <div>
                  {/* <Notifications options={{zIndex: 20000}}/> */}
                  <Navbar navClass="sticky-top shadow" page="home"/>
                  <Jumbotron>
                    <Header color="white" heading="WeConnect" text={slogan}/>
                  </Jumbotron>
                  <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center ">
                      <h4 className="fira" style={{color: '#8a9eb1'}}>Businesses already using WeConnect</h4>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center align-items-center">
                      <div className="col-2" style={{padding: '3rem'}}>
                        <img src={shopify} alt="..." />
                      </div>
                      <div className="col-2" style={{padding: '3rem'}}>
                        <img src={slack} alt="..." />
                      </div>
                      <div className="col-2" style={{padding: '3rem'}}>
                        <img src={kickstarter} alt="..." />
                      </div>
                      <div className="col-2" style={{padding: '5rem'}}>
                        <img src={lyft} alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
                  );
          }
}
export default Home;