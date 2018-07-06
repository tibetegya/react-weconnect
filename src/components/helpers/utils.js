
//logged in helper function.
export const isLoggedIn = ()=>{
    if(localStorage.getItem('token')){
        return true;
    }else{
        return false
    }

}
 const login = (obj, err) => {
    if(err.response.status === 401){
        obj.props.history.push('/login');
    }
}
export default login
