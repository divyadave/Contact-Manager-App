import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../assets/themes/colors'
import { CONTACT_CREATE } from '../../consts/routeNames'
import { navigate } from '../../navigation/SideMenu/RootNavigator'
import Button from '../common/Button'
import ImageComponent from './ImageComponent'
import styles from './styles'

function ContactDetailComponent({contact}) {
  const {contact_picture, first_name, country_code, phone_number, last_name} = contact

  return (
      <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {
              contact_picture  && <ImageComponent src={contact_picture}></ImageComponent> 
            }
             <View style={styles.content}>
          <Text style={styles.names}>{first_name + ' ' + last_name}</Text>
        </View>
        <View style={styles.hrLine} />
        <View style={styles.topCallOptions}>
          <TouchableOpacity>
            <Icon type="material-community" name="message-text" color={colors.primary}
              size={27}></Icon>
               <Text style={styles.middleText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="material-community"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Video</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middleCallOptions}>
          <Icon
            type="ionicon"
            name="call-outline"
            color={colors.grey}
            size={27}
          />
          <View style={styles.phoneMobile}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="material-community"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Icon
              type="material-community"
              name="message-text"
              color={colors.primary}
              size={27}
              style={[styles.msgIcon]}
            />
          </View>
          </View>
          <Button title="Edit Contact" style={{alignSelf: 'flex-end', marginRight: 20, width: 200}} primary onPress={() => navigate(CONTACT_CREATE, {contact, editing: true} )}></Button>

          </View>
      </ScrollView>
    
  )
}

export default ContactDetailComponent