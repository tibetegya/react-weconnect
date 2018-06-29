import React, { Component } from 'react';

import Search from './components/search'
import Navbar from './components/navbar'

export default class Results extends Component {

  render(){
        return (
            <div>
                <Navbar navClass="sticky-top shadow"/>
            <div className="container" style={{ marginTop: '4rem'}}>
                <Search/>
            </div>
            </div>
        );
    }
}