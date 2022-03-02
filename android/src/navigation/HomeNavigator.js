import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { CONTACT_CREATE, CONTACT_DETAIL, CONTACT_LIST, SETTINGS } from '../consts/routeNames';
import ContactDetail from '../screens/Contact Detail';
import Contacts from '../screens/Contacts';
import CreateContact from '../screens/Create Contact';
import Settings from '../screens/Settings';





function HomeNavigator() {
    const HomeStack = createStackNavigator();
    
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
        <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
        <HomeStack.Screen name={CONTACT_CREATE} component={CreateContact}></HomeStack.Screen>
        <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
        <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

export default HomeNavigator