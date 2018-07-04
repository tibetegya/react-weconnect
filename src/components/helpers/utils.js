
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

export const splitter = string =>{
    let stringArr = string.split(' ');
    if (stringArr.length >1){
        return {
            street:stringArr[0],
            city: stringArr[1],
            country: stringArr[2]
        }
    }else{
        return stringArr[0]
    }
}