import React, { Component } from 'react';

import Jumbotron from './jumbotron';
import Header from './header';
import Navbar from './navbar';

class Home extends Component {
    render(){
        let slogan = `WeConnect provides a platform that brings businesses and individuals together 
        And creates awareness for businesses through user reviews`
        return (
            <div>
                <Navbar navClass="sticky-top shadow" page="home"/>
        <Jumbotron>
            <Header color="white" heading="WeConnect" text={slogan}/>
        </Jumbotron>
        </div>
        );
    }
}
export default Home;