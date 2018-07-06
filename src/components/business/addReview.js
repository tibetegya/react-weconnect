import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function AddReview (props){
        return(
          <Modal isOpen={props.isOpen} toggle={props.toggle} className={props.className}>
            <ModalHeader toggle={props.toggle}>Add Review</ModalHeader>
              <ModalBody>
                <form className='addsReview'onSubmit={props.handleSubmit}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="reviewTitle">Review Title</label>
                          <input onChange={props.handleInput} name="title" type="text" 
                          className="form-control" id="reviewTitle" placeholder="Review Title" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="reviewBody">Add Description</label>
                          <textarea onChange={props.handleInput} name="body" 
                          className="form-control" id="reviewBody" rows={6} defaultValue={""} />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </ModalBody>
            <ModalFooter>
              <Button onClick={props.handleSubmit} color="success">Post Review</Button>
            </ModalFooter>
          </Modal>

      );
}

