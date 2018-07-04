import React, { Component } from 'react';


export default class ReviewCard extends Component{
constructor(props){
    super(props)
    this.state ={
      title: '',
      body: '',
      author: '',
      creationDate: '',
      showCard: false
    }
}
componentWillMount(){
    if (this.props.title !== undefined){
      this.setState({
        title: this.props.title,
        body: this.props.body,
        author: this.props.author,
        creationDate: this.props.creationDate,
        showCard: true
      })
    }
    
}
render(){
  if (this.state.showCard){
    return(
        <div className="col centery">
        <div className="card col-md-6" style={{margin: '0 0 2rem 0'}}>
          <div className="card-body">
            <div className="col-12" style={{display: 'flex'}}>
              <div className="rounded-circle review-color" />
              <div className="title" style={{margin: '0 0 0 1rem'}}>
                <h5 className="card-title circular">{this.state.title}</h5>
              </div>
            </div>
            <div className="col-12">
              <p className="card-text" style={{margin: '0 0 1rem 2.5rem'}}>{this.state.body}</p>
              <div className="d-flex flex-row justify-content-end" style={{display: 'flex'}}>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '.8rem', paddingRight: '1rem'}}>By {this.state.author}</h6>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '.8rem'}}>{this.state.creationDate}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return null;
  }
}
}