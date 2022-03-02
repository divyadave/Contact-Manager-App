import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import { REGISTER } from '../../consts/routeNames';
import Message from '../common/Message';
import styles from './styles';

const LoginComponent = ({form, justSignedup, errors, error, loading, onChange, onSubmit}) => {
    const [show, setShow] = useState(true)
    const {navigate} = useNavigation()
    return (
       <Container>
           <Image source={require('../../assets/images/logo.png')} style={styles.logoImaage}></Image>
           <View>
            <Text style={styles.title}>Welcome to RNContacts</Text>
            <Text style={styles.subtitle}>Please Login In</Text>
            { error && error?.error && (<Message retry onDismiss={()=> {}} retryFn={() => { console.log('retry')}} title="Invalid message" info></Message> )}
            <View style={styles.form}>
               {justSignedup && (<Message onDismiss={()=> {}} info title="Account is created"></Message>)}
           <Input label="Name" placeholder="Enter Name" value={form.username} error={errors.username || error?.username?.[0]} onChangeText={(value) => {onChange({name: 'username', value})}}></Input>
           <Input secureTextEntry={show} value={form.password}  icon={<TouchableOpacity onPress={() => { setShow((prev) => !prev )}}>
            <Text style={{ color: 'black'}}>{ show ? 'Show': 'Hide'}</Text> 
            </TouchableOpacity>
            } 
            placeholder="Enter Password" 
            iconPosition="right" 
            label="Password" 
            error={errors.password || error?.password?.[0]} 
             onChangeText={(value) => {onChange({name: 'password', value})}}>
             </Input>
           <Button title="Submit" onPress={onSubmit} primary loading={loading} disabled={loading}></Button>
           <View style={styles.createSection}>
           <Text style={styles.infoText}>Need a account?</Text>
           <TouchableOpacity onPress={() => navigate(REGISTER)}>
               <Text style={styles.linkBtn}>Register</Text>
           </TouchableOpacity>
           </View>
           </View>
           </View>
       </Container>
    )
}
export default LoginComponent