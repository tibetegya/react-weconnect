import React from 'react';

function RegisterForm(props) {
    return(
        <div class="row justify-content-md-center">
            <div class="col-md-5">
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Enter Username</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter your Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                    </div>
                    <div className="row justify-content-md-center">
                        <button type="submit" className="btn btn-success col-8" style={{marginTop: '1rem', marginBottom: '10rem', marginLeft: 'auto', marginRight: 'auto', paddingTop: '.5rem'}}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;