import React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Container from '../../components/common/Container'
import { SETTINGS } from '../../consts/routeNames'
import logoutUser from '../../context/actions/logoutUser'
import styles from './styles'
import { Icon } from 'react-native-elements';



function SideMenu({navigation, authDispatch}) {
    const handleLogout = () => {
        navigation.toggleDrawer();
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            {
                text: 'Cancel',
                onPress: () => {}
            },
            {
                text: 'Yes',
                onPress: () => {
                    logoutUser()(authDispatch)
                }
            }
        ])

    }
    const menuItems = [
        {
            icon: <Icon name="logout" type="material" color="#887700" ></Icon>,
            text: 'Logout',
            onPress: handleLogout
        },
        {
            icon: <Icon name="settings" type="ionicon" color="#887700" />,
            text: 'Settings',
            onPress: () => {
                navigation.navigate(SETTINGS)
            }
        }
    ]
  return (
   <SafeAreaView>
       <Container>
           <Image style={styles.logoImage} height={70} width={70} source={require('../../assets/images/logo.png')} />
               <View>
                   {
                   menuItems.map((menu) => (
                       <TouchableOpacity key={menu.text} style={styles.item} onPress={menu.onPress}>
                           <View  style={styles.item}>{menu.icon}</View>
                           <Text  style={styles.itemText}>{menu.text}</Text>
                       </TouchableOpacity>
                   ))
                   }
               </View>
       </Container>
   </SafeAreaView>
  )
}

export default SideMenu