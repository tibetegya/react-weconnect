import React from 'react';


export function LoginButton(props) {
    return (

        <li className="nav-item">
        <a className="nav-link" href="/register">
        <button className="btn btn-success my-2 my-sm-0">Register</button>
        </a>
    </li>
    );
  }

  export function RegisterButton(props) {
    return (
        <li className="nav-item">
        <a className="nav-link" href="/login">
        <button className="btn btn-outline-light my-2 my-sm-0" 
        style={{paddingRight: '1.3rem', paddingLeft: '1.3rem'}}>Login</button>
        </a>
        </li>
    );
  }

export function SearchButton(props) {
  return (
    <li className="nav-item" style={{marginRight: '2rem'}}>
    <a className="nav-link " href="/results">
    Businesses
    </a>
  </li>
);
}
