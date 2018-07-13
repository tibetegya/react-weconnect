import React, { Component } from 'react';
/**
 *
 *
 * @export
 * @param {*} props
 * @returns Jumbotron
 */
export default function Jumbotron (props){
    return(
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
                {props.children}
            </div>
      </div>
    );
}
