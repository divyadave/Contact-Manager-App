import { REGISTER_FAILED, REGISTER_LOADING, REGISTER_SUCCESS, CLEAR_AUTH_STATE } from "../../consts/actionTypes"
import axiosInstance from "../../helpers/axiosInterceptor"

export const clearAuthState = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUTH_STATE
    })
}

export default ({
    email,
    password,
    username,
    firstname: first_name,
    lastname: last_name,
  }) => dispatch => (onSuccess) => {
      dispatch({
          type: REGISTER_LOADING
      })
    axiosInstance.post('auth/register', {email, first_name, last_name, password, username}).then((res) =>{
        console.log('register', res)
    
    dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }),
    onSuccess(res.data)
}
   
    ).catch((error) => dispatch({
        type: REGISTER_FAILED,
        payload: error.response ? error.response.data : {error: 'Something went wrong'}
    })) 

  }
