import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useContext} from 'react';
import { HOME_NAVIGATOR } from '../consts/routeNames';
import { GlobalContext } from '../context/Provider';
import HomeNavigator from './HomeNavigator';
import SideMenu from './SideMenu';

const DrawerStack = createDrawerNavigator();

function DrawerNavigator() {
  const {authDispatch} = useContext(GlobalContext)
  const getDrawerContent = (navigation) => {
return <SideMenu navigation={navigation} authDispatch={authDispatch}></SideMenu>

  }

  return (
   
    <DrawerStack.Navigator drawerType="slide" drawerContent={({navigation}) => getDrawerContent(navigation)}>
        <DrawerStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></DrawerStack.Screen>
    </DrawerStack.Navigator>
    
  )
}

export default DrawerNavigator