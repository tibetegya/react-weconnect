import React from 'react';
import { withRouter } from 'react-router-dom'


function ReviewForm (props){
  return(
    <div className="modal fade" id="reviewModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-11">
            <form onSubmit={this.props.handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput2">Review Title</label>
                      <input onChange={this.handleInput} name="title" type="text" 
                      className="form-control" id="formGroupExampleInput2" placeholder="Review Title" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Add Description</label>
                      <textarea onChange={this.handleInput} name="body" 
                      className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <div className="container">
                      <div className="row justify-content-md-center">
                        <button type="submit" className="btn btn-success col-8" 
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        marginTop: '1rem', marginBottom: '2rem', marginLeft: 'auto', 
                        marginRight: 'auto', paddingTop: '0.5rem'}}>Post Review</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
  );
}
export default withRouter(ReviewForm);