import React from 'react';
import Search from './search'

function Jumbotron(props) {
    return(
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12" style={{marginBottom: '3rem'}}>
              <h1 className="display-4 circular" style={{textAlign: 'center', color: 'white', fontSize: '3rem'}}>WeConnect</h1>
              <p className="lead" style={{textAlign: 'center', fontSize: '1rem', color: 'white'}}>WeConnect provides a platform that brings businesses and individuals together 
                <br /> And creates awareness for businesses through user reviews</p>
                <Search />
            </div>
          </div>
        </div>
      </div>
    );
}
export default Jumbotron;