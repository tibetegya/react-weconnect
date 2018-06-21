import React, { Component } from 'react';


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token : '',
        }
    }
    render(){
        return (
            <div className="container-fluid">
                {this.props.children}
            </div>
          );
    }
}


export default Layout;