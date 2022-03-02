import axios from "../../helpers/axiosInterceptor"
import { GET_CONTACT_FAILED, GET_CONTACT_LOADING, GET_CONTACT_SUCCESS } from "../../consts/actionTypes"


export default () => (dispatch) => {
    dispatch({
        type: GET_CONTACT_LOADING
    })
  axios.get('/contacts/').then((res) => {
     
      dispatch({
          type: GET_CONTACT_SUCCESS,
          payload: res.data
      })
  }).catch((error) => 
  dispatch({
      type: GET_CONTACT_FAILED,
      payload: error?.response ? error?.response.data : {error: 'Something went wrong'}
  })) 
}