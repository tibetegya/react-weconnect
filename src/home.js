import React, { Component } from 'react';

import Jumbotron from './components/jumbotron';
import ReviewCard from './components/review'

class Home extends Component {
    render(props){
        return (
        <div>
        <Jumbotron />
          <div className="row " style={{marginTop: '10rem 0 0 0'}}>
            <div className="col-md-12 ">
                <ReviewCard/>
                <ReviewCard/>
              <div className="w-100"/>
              <ReviewCard/>
              <ReviewCard/>
            </div>
          </div>
        </div>
        );
    }
}
export default Home;