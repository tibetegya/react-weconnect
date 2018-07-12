import React, { Component } from 'react';
import axios from 'axios';
import { ROOT_URL } from '../../App';
import BusinessCard from './Business';
import Search from './Search'
import Navbar from '../layout/Navbar'
import Paginator from '../layout/Paginator';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchCategory: '',
          searchBusiness: '',
          searchLocation: '',
          searchLimit: 10,
          page: 1,
          prevPage: null,
          nextPage: null,
          businessData: [],
        };
    }
componentDidMount(){
    this.getBusinesses()
    }


getBusinesses(search={}){
    //initial api call to get businesses
    axios.get(`${ROOT_URL}/businesses`, {
        params: search,
        headers: {'Content-Type':'application/json','Authorization': 'Bearer '+localStorage.getItem('token') }
    })
    .then( res => {
            this.setState({
            businessData: res.data['businesses'],
            prevPage: res.data['prev_page'],
            nextPage: res.data['next_page']

        })
    })
    .catch(error =>{
        if(error.response.status === 401){
        //redirect to login if the token is expired/invalid
        this.props.history.push('/login');
        }
    });
}
handleSubmit = e => {
        e.preventDefault();
        this.submitData()
    }
submitData = ()=>{

        let searchParams = {}
          //check for existance of query strings and add them to search object
          if (this.state.searchBusiness !== ''){
            searchParams.q = this.state.searchBusiness
          }
          if (this.state.searchLocation !== '' && this.state.searchLocation !== 'country'){
            searchParams.location = this.state.searchLocation
          }
          if (this.state.searchCategory !== '' && this.state.searchCategory !== 'category'){
            searchParams.category = this.state.searchCategory
          }
          if (this.state.page !== 1){
            searchParams.page = this.state.page
          }
    this.getBusinesses(searchParams)

    }
handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    }
paginate = e =>{
      //handles pagination of businesses
     e.preventDefault()

    if(e.target.name === 'nextPage'){
        this.setState({page: this.state.nextPage})
      }else if(e.target.name === 'prevPage'){
          this.setState({page: this.state.prevPage})
      }
      this.submitData()
    }
render(){
        return (
            <div className="results">
                <Navbar navClass="sticky-top shadow"/>
            <div className="container" style={{ marginTop: '4rem'}}>
                <Search handleSubmit={this.handleSubmit} handleInput={this.handleInput}/>
            <div>
                <div >
                { this.state.businessData.map(business =>
            <BusinessCard 
            key={business.id} name={business.business_name} category={business.category}
            location={business.location} profile={business.profile} id={business.id}
            />
        )}
        </div>
        </div>
            <Paginator paginate={this.paginate} prevPage={this.state.prevPage}  nextPage={this.state.nextPage}/>
            </div>
            </div>
        );
}
}
