
//logged in helper function.
export const isLoggedIn = ()=>{
    if(localStorage.getItem('token')){
        return true;
    }else{
        return false
    }

}