import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import Message from '../../components/common/Message';
import { LOGIN } from '../../consts/routeNames';
import styles from './styles';

const RegisterComponent = ({form, errors, error, loading, onChange, onSubmit}) => {
    const [show, setShow] = useState(true)
    const {navigate} = useNavigation()
    return (
       <Container>
           <Image source={require('../../assets/images/logo.png')} style={styles.logoImaage}></Image>
           <View>
            <Text style={styles.title}>Welcome to RNContacts</Text>
            <Text style={styles.subtitle}>Create a free account</Text>
            { error?.error && (<Message retry retryFn={() => { console.log('retry')}} title={error?.error} danger></Message>)}
            <View style={styles.form}>
           <Input label="Name" placeholder="Enter Name" error={errors.username || error?.username?.[0]} onChangeText={(value) => {onChange({name: 'username', value})}}></Input>
           <Input label="First Name" placeholder="Enter First Name" error={errors.firstname || error?.firstname?.[0]}  onChangeText={(value) => {onChange({name: 'firstname', value})}}></Input>
           <Input label="Last Name" placeholder="Enter Last Name" error={errors.lastname || error?.lastname?.[0]}  onChangeText={(value) => {onChange({name: 'lastname', value})}}></Input>
           <Input label="Email" placeholder="Enter Email" error={errors.email || error?.email?.[0]}  onChangeText={(value) => { onChange({name: 'email', value})}}></Input>
           <Input secureTextEntry={show} error={errors.password || error?.password?.[0]}  icon={<TouchableOpacity onPress={() => { setShow((prev) => !prev )}}>
            <Text style={{ color: 'black'}}>{ show ? 'Show': 'Hide'}</Text> 
            </TouchableOpacity>
            }  onChangeText={(value) => {onChange({name: 'password', value})}}  placeholder="Enter Password" iconPosition="right" label="Password"></Input>
           <Button title="Submit" onPress={onSubmit} primary loading={loading} disabled={loading}></Button>
           <View style={styles.createSection}>
           <Text style={styles.infoText}>Have an account?</Text>
           <TouchableOpacity onPress={() => navigate(LOGIN)}>
               <Text style={styles.linkBtn}>Login</Text>
           </TouchableOpacity>
           </View>
           </View>
           </View>
       </Container>
    )
}
export default RegisterComponent