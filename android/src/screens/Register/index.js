import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import RegisterComponent from '../../components/Register';
import env from '../../config/env';
import { LOGIN } from '../../consts/routeNames';
import register,{ clearAuthState }  from '../../context/actions/register';
import { GlobalContext } from '../../context/Provider';
import axiosInstance from '../../helpers/axiosInterceptor';


const SignUp = () => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const {navigate} = useNavigation()
    const {authDispatch, authData: {error, loading, data}} = useContext(GlobalContext)
    

    useFocusEffect(
        React.useCallback(() => {
          return () => {
              if(data || error) {
                  clearAuthState()(authDispatch)
              }
          }
          
        }, [data, error])
      );
      
    
    const onChange = ({name, value}) => {
        setForm({...form, [name]: value})
        if(value !== '') {
            if(name === 'password') {
                if(value.length < 6) {
                    setErrors(prevState => {
                        return {...prevState, [name]: 'Minium 6 characters is required' }
                    })

                }
                else {
                    setErrors(prevState => {
                        return {...prevState, [name]: null }
                    })
                }
            }
            else {
                setErrors(prevState => {
                    return {...prevState, [name]: null }
                })

            }
          
        }
        else {
            setErrors(prevState => {
                return {...prevState, [name]: 'This field is required'}
            })

        }
    
    }
    const onSubmit = () => {
        console.log('Submit clicked', form)
        if(!form.username) {
            setErrors(prevState => {
                return {...prevState, username: 'Please fill the required field'}
            })
        }
        if(!form.firstname) {
            setErrors(prevState => {
                return {...prevState, firstname: 'Please fill the required field'}
            })
        }
        if(!form.lastname) {
            setErrors(prevState => {
                return {...prevState, lastname: 'Please fill the required field'}
            })
        }
        if(!form.email) {
            setErrors(prevState => {
                return {...prevState, email: 'Please fill the required field'}
            })
        }
        if(!form.password) {
            setErrors(prevState => {
                return {...prevState, password: 'Please fill the required field'}
            })
        }
        console.log('errors', Object.values(errors))
        if (
            Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)
          )
        {
           
            register(form)(authDispatch)((response) => {
                navigate(LOGIN,{data: response})
            })
        }

    }
    return (
        <RegisterComponent errors={errors} error={error} loading={loading} form={form} onChange={onChange} onSubmit={onSubmit} ></RegisterComponent>
    )
}
export default SignUp;