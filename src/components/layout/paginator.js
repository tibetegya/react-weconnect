import React, { Component } from 'react'

class Paginator extends Component {
disable =() =>{
        if(this.props.page ===1){
                return 'disabled'
        }else{
                return ''
        }
}
render(){
        let paginateLinks = [{name:'prev',page:this.props.prevPage},{name:'next',page:this.props.nextPage}]

  return (
    <nav aria-label="Page navigation example" style={{margin:'0 0 10rem 0'}}>
      <ul className="pagination justify-content-center">
     {paginateLinks.map(obj =>{
             console.log('obj', obj)
           return(  obj.page === null ?
                <li key={obj.name} className="page-item">
                <button className="page-link" href="" name={obj.name+'Page'}
                style={{color:'#E6E6E6'}}
                onClick={this.props.paginate} disabled>{obj.name}</button></li>
             :
      <li key={obj.name} className="page-item">
      <button className="page-link" href="" name={obj.name+'Page'}
      onClick={this.props.paginate} >{obj.name}</button></li>)
     }
     )}
      </ul>
    </nav>
  )
}
}
export default Paginator;