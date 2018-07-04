
import axios from 'axios';
import { ROOT_URL } from '../../App';
import { notify } from 'react-notify-toast';

let handleSubmit = (obj ,e) => {
    e.preventDefault();
    //check for empty feilds before submitting
    if (obj.state.title === '' || obj.state.body === ''){
        notify.show('Add add a review before submission', 'error')
    }
    else{
    const reviewData = {
      title :obj.state.title,
      body : obj.state.body
    }
    //post the submitted review
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    axios.post(`${ROOT_URL}/businesses/${obj.state.businessId}/reviews`, JSON.stringify(reviewData), 
      {
          headers: {'Content-Type':'application/json' }
      })
      .then(res => {
        //redirect to business profile on successful addition of review
            console.log(obj.state)
            obj.props.history.push('/business-profile/'+obj.state.businessId+'/review-success');
      })
      .catch(error =>{});
    }
}
let handleInput = (obj ,e)=> {
  //update state with input data
  obj.setState({[e.target.name]: e.target.value})

      if(e.target.name === 'title'){
        if(e.target.value !==undefined && e.target.value.length > 50){
        notify.show('review title is too long', 'warning')
        e.target.value = e.target.value.slice(0, 50);
        }
      }
        if(e.target.name === 'body'){
          if(e.target.value !==undefined && e.target.value.length > 255){
          notify.show('review body is too long', 'warning')
          e.target.value = e.target.value.slice(0, 255);
          }
      }
}

export default { handleInput, handleSubmit }