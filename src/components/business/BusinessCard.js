import React, { Component } from 'react';

/**
 *
 *
 * @export
 * @class BusinessCard
 * @extends {Component}
 */
export default class BusinessCard extends Component {
constructor(props) {
    super(props);
    this.state = {
      hasData: false,
      name: '',
      category: '',
      profile: '',
      location: ''

    };
}
componentWillMount =()=>{
    this.setState({
      hasData: ()=>{
        //checks if props has business name
        if(this.props.name !== ''){
          return true
        }else{return false}
      },
      name: this.props.name,
      id: this.props.id,
      category: this.props.category,
      profile: this.props.profile,
      location: this.props.location
    });
}
render(){
    return(
      <div className="col centery businessCard">
        <div className="card col-md-6" style={{margin: '0 0 2rem 0'}}>
          <div className="card-body">
            <div className="col-12" style={{display: 'flex'}}>
              <div width={40} height={40} className="rounded-circle business-color" />
              <div className="title" style={{margin: '0 0 0 1rem'}}>
                <h5 className="card-title circular">
                  <a href={`/business-profile/${this.state.id}`} 
                  style={{textDecoration:'none', color: '#333'}}> {this.state.name}
                  </a>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.state.category}</h6>
              </div>
            </div>
            <div className="col-12">
              <p className="card-text">{this.state.profile}</p>
              <h6 className="card-subtitle mb-2 text-muted" 
              style={{fontSize: '.8rem'}}>{this.state.location}
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
}
}
