import React from 'react';

function LoginForm(props) {

    return(
        <div className="row justify-content-md-center">
            <div className="col-md-4">
        <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Keep me Logged In</label>
                </div>
                <div className="row justify-content-md-center">
                    <button type="submit" className="btn btn-dark col-8" style={{marginTop: '1rem', marginBottom: '10rem', marginLeft: 'auto', marginRight: 'auto', paddingTop: '0.5rem'}}>Login</button>
                </div>
    </form>
    </div>
    </div>);
    }

export default LoginForm;