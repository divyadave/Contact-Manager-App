import AsyncStorage from "@react-native-async-storage/async-storage"
import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "../../consts/actionTypes"
import axiosInstance from "../../helpers/axiosInterceptor"

export default ({
    password,
    username,
   
  }) => dispatch => {
      dispatch({
          type: LOGIN_LOADING
      })
     
    axiosInstance.post('auth/login', {password, username}).then((res) =>    
    {
        console.log('login', res)
        AsyncStorage.setItem("token", res.data.token)
        AsyncStorage.setItem("user", JSON.stringify(res.data.user))
        dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    })}).catch((error) => 
    dispatch({
        type: LOGIN_FAILED,
        payload: error?.response ? error?.response.data : {error: 'Something went wrong'}
    })) 

  }
