import React, { Component } from 'react';
/**
 *
 *
 * @class Header
 * @extends {Component}
 */
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
        //returns header component
        return (
            <div className="main row">
                <div className="col-md-12 d-flex flex-column align-items-center" style={{textAlign: 'center', margin: '2rem 0 4rem 0'}}>
                    <h1 className=" circular " style={{color: this.state.textColor}}>{this.state.heading}</h1>
                    <div>
                        <p className="fira" style={{color: this.state.textColor, maxWidth: '40rem'}}>{this.state.text}</p></div>
                </div> 
          </div>
        );
}
}
export default Header;
