import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigtor';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider'
import React, { useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import colors from '../assets/themes/colors';
import {navigationRef} from './SideMenu/RootNavigator'


const AppNavContainer = () => {
  
  const {authData: {isLoggedIn}} = useContext(GlobalContext)
  const [isAuthenticated, setAuthentication] = useState(false)
  const [authLoaded, setAuthLoaded] = useState(false);
  

  const getUser = async() => {
    
    const user = await AsyncStorage.getItem("user")
    if(user) {
      setAuthLoaded(true)
      setAuthentication(true)
    }
    else {
      setAuthLoaded(true)
      setAuthentication(false)
    }
  }
  useEffect(() => {
    getUser();

  }, [isLoggedIn])
  
    return (
      <>
     {
        authLoaded ? (
          <NavigationContainer ref={navigationRef}>
          {isLoggedIn || isAuthenticated ? <DrawerNavigator></DrawerNavigator> : <AuthNavigator></AuthNavigator>} 
  
          </NavigationContainer>
        

        ) :  (
          <ActivityIndicator></ActivityIndicator>
        )
      }
      </>
       
      )
      

}
export default AppNavContainer