import React from 'react';


function ReviewCard(props) {
    return(
        <div className="col centery">
        <div className="card col-md-6" style={{margin: '0 0 2rem 0'}}>
          <div className="card-body">
            <div className="col-12" style={{display: 'flex'}}>
              <div width={40} height={40} className="rounded-circle review-color" />
              <div className="title" style={{margin: '0 0 0 1rem'}}>
                <h5 className="card-title circular">This business is one to watch out for</h5>
                <h6 className="card-subtitle mb-2 text-muted">Airtel Uganda</h6>
              </div>
            </div>
            <div className="col-12">
              <p className="card-text">I liked Javas alot exeept for their expensive menu offering i think its better you go to Java House.</p>
              <div className="d-flex flex-row justify-content-end" style={{display: 'flex'}}>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '.8rem', paddingRight: '1rem'}}>By Peterwade</h6>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '.8rem'}}>2nd Fed 2018</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ReviewCard;