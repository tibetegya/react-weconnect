import React from 'react';


function ReviewCard(props) {
    return(
        <div className="col centery">
        <div className="card col-md-6" style={{margin: '0 0 2rem 0'}}>
          <div className="card-body">
            <div className="col-12" style={{display: 'flex'}}>
              <img width={40} height={40} src="css/Images/avatar.png" alt="..." className="rounded-circle" />
              <div className="title" style={{margin: '0 0 0 1rem'}}>
                <h5 className="card-title circular">Sonia</h5>
                <h6 className="card-subtitle mb-2 text-muted">5 stars</h6>
              </div>
            </div>
            <div className="col-12">
              <p className="card-text">I liked Javas alot exeept for their expensive menu offering i think its better you go to Java House.</p>
              <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '.8rem'}}>2nd Fed 2018</h6>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ReviewCard;