const auth = (state, {type, payload}) => {
    switch(type) {
        case 'REGISTER_LOADING':
            return {
                ...state,
                loading: true
            }
      
        case 'REGISTER_FAILED': 
        return {
            ...state,
            loading: false,
            error: payload
        }
        case 'REGISTER_SUCCESS': 
        return {
            ...state,
            loading: false,
            data: payload
        }
        case 'LOGIN_LOADING':
            return {
                ...state,
                loading: true
            }
      
        case 'LOGIN_FAILED': 
        return {
            ...state,
            loading: false,
            error: payload
        }
        case 'LOGIN_SUCCESS': 
        return {
            ...state,
            loading: false,
            data: payload,
            isLoggedIn: true
        }
        case 'LOGOUT': 
        return {
            ...state,
            loading: false,
            data: null,
            isLoggedIn:false
        }
    
       case 'CLEAR_AUTH_STATE':
           return  {
               ...state,
               loading: false,
               data: null,
               error: null
           }
        
        default:
            return state;
    }

}
export default auth;