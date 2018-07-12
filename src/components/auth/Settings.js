import React  from 'react';

function SettingsButton (props){
    return (
        <li className="nav-item" id='settings'>
        <div className="dropdown show">
            <a className=" nav-link btn btn-dark my-2 my-sm-0 dropdown-toggle" style={{paddingLeft:'1rem', paddingRight:'1rem'}}
            role="button" id="dropdownMenuLink" 
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Settings
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href={`/user-profile/${props.user}`}>My Profile</a>
            <a onClick={props.logoutUser} className="dropdown-item" >Logout</a>
            </div>
        </div>
        </li>
    );
}

export default SettingsButton;
