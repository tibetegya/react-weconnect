import React from 'react';
import { isLoggedIn } from '../helpers/Utils';

/**
 *
 *
 * @export
 * @param {*} props
 * @returns RegisterButton
 */
export function RegisterButton(props) {
  //returns a register button
    return (

        <li className="nav-item">
        <a className="nav-link" href="/register">
        <button className="btn btn-success my-2 my-sm-0">Register</button>
        </a>
    </li>
    );
}

/**
 *
 *
 * @export
 * @param {*} props
 * @returns LoginButton
 */
export function LoginButton(props) {
    //returns a login button
    return (
        <li className="nav-item login-button">
        <a className="nav-link" href="/login">
        <button className="btn btn-outline-light my-2 my-sm-0" 
        style={{paddingRight: '1.3rem', paddingLeft: '1.3rem'}}>Login</button>
        </a>
        </li>
    );
}

/**
 *
 *
 * @export
 * @param {*} props
 * @returns BuBusinessesButton
 */
export function BusinessesButton(props) {
  //returns  businesses link
  return (
    isLoggedIn()?
    <li className="nav-item" style={{marginRight: '2rem'}}>
    <a className="nav-link " href="/results">
    Businesses
    </a>
  </li>
  : null
);
}
