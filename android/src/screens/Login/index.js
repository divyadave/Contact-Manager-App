import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import LoginComponent from '../../components/Login'
import login from '../../context/actions/login'
import { GlobalContext } from '../../context/Provider'


const Login = () => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const [justSignedup, setSignUp] = useState(false)
    const {params} = useRoute()
    const {authDispatch, authData: {error, loading, data}} = useContext(GlobalContext)

    useEffect(() => {
        if(params?.data) {
            console.log('params', params)
            setSignUp(true)
            setForm({...form, username: params.data.username, password: params.data.password})

        }
    }, [params])

    const onChange = ({name, value}) => {
        setSignUp(false)
        setForm({...form, [name]: value})
    }


    const onSubmit = () => { 
        if(form.username && form.password) {
            console.log(form)
            login(form)(authDispatch)

        }
    }
    return (
       <LoginComponent form={form} justSignedup={justSignedup} loading={loading} onChange={onChange} onSubmit={onSubmit} errors={errors} error={error}></LoginComponent>
    )
}
export default Login