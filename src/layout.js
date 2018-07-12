import React, { Component } from 'react';


function Layout(props) {
        return (
            <div className="container-fluid">
                {props.children}
            </div>
          );
    }



export default Layout;