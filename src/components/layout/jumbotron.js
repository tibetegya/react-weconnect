import React, { Component } from 'react';

export default class Jumbotron extends Component {
render(){
    return(
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
                {this.props.children}
            </div>
      </div>
    );
}
}