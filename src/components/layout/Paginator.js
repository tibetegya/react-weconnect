import React from 'react'
/**
 *
 *
 * @param {*} props
 * @returns Paginator
 */
function Paginator (props) {
        let paginateLinks = [{name:'prev',page:props.prevPage},{name:'next',page:props.nextPage}]

  return (
    <nav aria-label="Page navigation example" style={{margin:'0 0 10rem 0'}}>
      <ul className="pagination justify-content-center">
     {paginateLinks.map(obj =>{
           return(  obj.page === null ?
                <li key={obj.name} className="page-item">
                <button className="page-link" href="" name={obj.name+'Page'}
                style={{color:'#E6E6E6'}}
                onClick={props.paginate} disabled>{obj.name}</button></li>
             :
      <li key={obj.name} className="page-item">
      <button className="page-link" href="" name={obj.name+'Page'}
      onClick={props.paginate} >{obj.name}</button></li>)
     }
     )}
      </ul>
    </nav>
  )
}

export default Paginator;
