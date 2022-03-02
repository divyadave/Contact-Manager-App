import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import env from '../config/env'
import { LOGOUT } from '../consts/routeNames'
import { navigate } from '../navigation/SideMenu/RootNavigator'


let headers = {}


const axiosInstance = axios.create({
    baseURL: env.BACKEND_URL,
    headers
})



axiosInstance.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        console.log('token', token)
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/* axiosInstance.interceptors.response.use((response) => {
    new Promise((resolve, reject) => {
        resolve(response);
    }),
    (error) => {
        if(!error.response) {
            return new Promise((resolve, reject) => {
                reject(error)
            })
        }
        if(error.response === 403 ) {
            navigate(LOGOUT, {tokenExpired: true})

        }
        else {
            return new Promise((resolve, reject) => {
                reject(error)
            })

        }
    }

}) */

export default axiosInstance;