import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textColor: 'black',
            heading: 'Heading',
            text: ''


        };
      }
    componentWillMount =()=>{
        this.setState({
            textColor: this.props.color,
            heading: this.props.heading,
            text: this.props.text
        });
    }
    render(){

        return (
            <div className="main row">
                <div className="col-md-12" style={{textAlign: 'center', margin: '2rem 0 4rem 0'}}>
                    <h1 className=" circular " style={{color: this.state.textColor}}>{this.state.heading}</h1>
                    <p className="fira" style={{color: this.state.textColor}}>{this.state.text}</p>
                </div> 
          </div>
        );
    };
    
    }
    export default Header;