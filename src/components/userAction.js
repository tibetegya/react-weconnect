import React from 'react';

function UserAction(props){
    const formType = props.className
    let userName = <div className="form-group">
                        <label htmlFor="InputUserName">Username</label>
                        <input type="text" className="form-control" id="InputUsername" aria-describedby="textHelp" placeholder="Enter Username" />
                    </div>

    let password = <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
                    </div>

    let submitButton =  <div className="row justify-content-md-center">
                            <button type="submit" className="btn btn-dark col-8" style={{marginTop: '1rem', marginBottom: '10rem', marginLeft: 'auto', marginRight: 'auto', paddingTop: '0.5rem'}}>Login</button>
                        </div>
    let form;
    if (formType === 'login'){
    }

        return(
            <form>
                {userName}{password}{submitButton}
            </form>
        );
    }


export default UserAction;