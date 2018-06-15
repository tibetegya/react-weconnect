import React from 'react';

function Search(props) {
    return(
        <div className="search-form">
        <form method>
          <div className="form-row align-items-top">
            <div className="col-md-6" style={{marginBottom: '.6rem'}}>
              <label className="sr-only" htmlFor="inlineFormInput">Name</label>
              <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Search for a Business..." />
            </div>
            <div className="col-md-2" style={{marginBottom: '.6rem'}}>
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Kampala</option>
                <option value={1}>Wakiso</option>
                <option value={2}>Iganga</option>
                <option value={3}>Mbale</option>
                <option value={3}>Tororo</option>
                <option value={3}>Gulu</option>
                <option value={3}>Lira</option>
                <option value={3}>Koboko</option>
              </select>
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" style={{fontSize: '.8rem', fontWeight: 'bold', color: '#858585'}}>Search by Location</label>
            </div>
            <div className="col-md-2 " style={{marginBottom: '.6rem'}}>
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Restaurants</option>
                <option value={1}>Consulting</option>
                <option value={2}>Educational</option>
                <option value={3}>Real Estate</option>
                <option value={3}>Enginnering</option>
                <option value={3}>Accommodation</option>
                <option value={3}>Food Services</option>
                <option value={3}>Retail</option>
              </select>
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect" style={{fontSize: '.8rem', fontWeight: 'bold', color: '#858585'}}>Search by Category</label>
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-success mb-2 col-12">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
}
export default Search;