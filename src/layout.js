import React, { Component } from 'react';

import Navbar from './components/navbar';

class Layout extends Component {
    render(props){
        return (
            <div className="container-fluid">
              <Navbar />
                {this.props.children}
            </div>
          );
    }
}


export default Layout;