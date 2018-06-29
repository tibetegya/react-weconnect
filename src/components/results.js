import React, { Component } from 'react';

import Search from './search'
import Navbar from './navbar'

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