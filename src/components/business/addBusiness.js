import React, { Component } from 'react';
import * as categoryData from '../../assets/categories.json';
import * as countryData from '../../assets/countries.json';
import { Redirect } from 'react-router-dom'
import { isLoggedIn } from './../helpers/utils';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class AddBusiness extends Component{
constructor(props) {
        super(props);
        this.state = {
            categories: categoryData,
            countries: countryData,

        };
}
showType = () =>{
  //shows the type of form either editting or adding a business

  if(this.props.business){
  return 'Edit'
  }else{
  return 'Add'
  }
  }
render(){
        let countryArray = this.state.countries
        let categoryArray = this.state.categories


  // console.log('addbusinees state',this.state)
        return(
          isLoggedIn() ?
            <div>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>{this.showType()} Business</ModalHeader>
          <ModalBody>
          <form onSubmit={this.props.handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label >Enter Business Name</label>
                    <input onChange={this.props.handleInput} 
                    name="businessName" type="text" className="form-control" 
                    id="businessInput" 
                    defaultValue={this.props.businessName} required/>
                  </div>
                  <div className="form-group" style={{marginBottom: '.6rem'}}>
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" 
                    style={{}}>Choose Category</label>
                    <select onChange={this.props.handleInput} name="category" 
                    className="custom-select mr-sm-2" id="categorySelect"  
                    defaultValue={this.props.category}required>
                    {categoryArray.map(category =>
                      <option key={category.name} value={category.name}>{category.name}</option>
                      )}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Country</label>
                    <select onChange={this.props.handleInput} name="businessCountry" 
                    className="custom-select mr-sm-2" id="countrySelect"  
                    defaultValue={this.props.location !== undefined ? this.props.location.split(' ')[2] : ''} required>
                      {countryArray.map(country =>
                      <option key={country.code} value={country.name}>{country.name}</option>
                      )}
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">City</label>
                      <input onChange={this.props.handleInput} name="businessCity" type="text" 
                      className="form-control" id="inputCity" 
                      defaultValue={this.props.location !== undefined ? this.props.location.split(' ')[1] : ''} required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputZip">Address</label>
                      <input onChange={this.props.handleInput} name="businessAddress" 
                      type="text" className="form-control" id="inputZip" 
                      defaultValue={this.props.location !== undefined ? this.props.location.split(' ')[0] : ''} required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Add Description</label>
                    <textarea onChange={this.props.handleInput} 
                    name="description" className="form-control" id="businessText" 
                    rows={3} defaultValue={this.props.profile}    required/>
                  </div>
                </div>
              </div>
            </div>
          </form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.props.handleSubmit}>{this.showType()} Business</Button>
          </ModalFooter>
        </Modal>
      </div>
          : <Redirect to={{pathname:'/login'}}/>
        );
}
}
