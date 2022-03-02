import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Login from '../screens/Login';
import SignUp from '../screens/Register';



function AuthNavigator() {
    const AuthStack = createStackNavigator();
    
    
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
        <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
        <AuthStack.Screen name="Register" component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}

export default AuthNavigator