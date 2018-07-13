import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as categoryData from '../../assets/categories.json';
import * as countryData from '../../assets/countries.json';


/**
 *
 *
 * @export
 * @param {*} props
 * @returns AddBusiness
 */
export default function AddBusiness (props){
  let countries = [].concat(countryData)
  let categories = [].concat(categoryData)

  let countryMap = countries.map((country, index) =>
    <option key={index} value={country.name}>{country.name}</option>
  )
  let categoryMap = categories.map((category, index) =>
    <option key={index} value={category.name}>{category.name}</option>
    )
        return(
            <div>
        <Modal isOpen={props.isOpen} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>{props.type} Business</ModalHeader>
          <ModalBody>
          <form onSubmit={props.handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label >Enter Business Name</label>
                    <input onChange={props.handleInput} 
                    name="businessName" type="text" className="form-control" 
                    id="businessInput" 
                    defaultValue={props.businessName} required/>
                  </div>
                  <div className="form-group" style={{marginBottom: '.6rem'}}>
                    <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" 
                    style={{}}>Choose Category</label>
                    <select onChange={props.handleInput} name="category" 
                    className="custom-select mr-sm-2" id="categorySelect"  
                    defaultValue={props.category}required>
                    {categoryMap}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Country</label>
                    <select onChange={props.handleInput} name="businessCountry" 
                    className="custom-select mr-sm-2" id="countrySelect"  
                    defaultValue={props.location !== undefined ? props.location.split(' ')[2] : ''} required>
                      {countryMap}
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">City</label>
                      <input onChange={props.handleInput} name="businessCity" type="text" 
                      className="form-control" id="inputCity" 
                      defaultValue={props.location !== undefined ? props.location.split(' ')[1] : ''} required/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputZip">Address</label>
                      <input onChange={props.handleInput} name="businessAddress" 
                      type="text" className="form-control" id="inputZip" 
                      defaultValue={props.location !== undefined ? props.location.split(' ')[0] : ''} required/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Add Description</label>
                    <textarea onChange={props.handleInput} 
                    name="description" className="form-control" id="businessText" 
                    rows={3} defaultValue={props.profile}    required/>
                  </div>
                </div>
              </div>
            </div>
          </form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={props.handleSubmit}>{props.type} Business</Button>
          </ModalFooter>
        </Modal>
      </div>
        );
}
