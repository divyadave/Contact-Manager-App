import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../assets/themes/colors'
import { DEFAULT_IMAGE_URI } from '../../consts/general'
import { CONTACT_CREATE, CONTACT_DETAIL } from '../../consts/routeNames'
import Message from '../common/Message'
import styles from './styles'

function ContactsComponent({modalVisible,  sortBy, contactData, loading, setModalVisible}) {
 
    const {navigate} = useNavigation()
   
    const ListEmptyComponent = () => {
        return (
            <View style={{ paddingHorizontal: 10, paddingVertical: 10}}> 
                <Message info title="No contacts to show"></Message>
            </View>

        )

    }
    const renderItem = ({item}) => {
    console.log('item', item)
      const {contact_picture, first_name, last_name, phone_number, country_code} = item
       return (
           <TouchableOpacity style={styles.itemContainer} onPress={() => {
               navigate(CONTACT_DETAIL, {item})
           }}>
               <View style={styles.item}>
                   {
                       contact_picture ? (
                           <Image style={{width: 45, height: 45, borderRadius: 100}} source={{ uri: contact_picture}}></Image>
                       ) : (
                           <View style={{width: 45, height: 45, backgroundColor: colors.grey , borderRadius: 100, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                               <Text style={[styles.name, {textTransform: 'uppercase', color: colors.white}]}>{first_name[0]}</Text>
                               <Text style={[styles.name, {textTransform: 'uppercase', color: colors.white}]}>{last_name[0]}</Text>

                           </View>
                       )
                   }
                   <View style={{paddingLeft: 20}}>
                   <View style={{flexDirection: 'row'}}>
                       <Text style={styles.name}>{first_name}</Text>
                       <Text style={styles.name}>{last_name}</Text>
                   </View>
                   <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}`}</Text>
               </View>
               </View>
               <Icon size={15} type="antdesign" name="right" style={{paddingRight: 10, color: colors.grey}}></Icon>
             

           </TouchableOpacity>
       )
    }
  return (
  <>
    <View>
 
     {
         loading && (
         <View style={{paddingVertical: 20}}>
         <ActivityIndicator color={colors.primary} size="large"></ActivityIndicator>
         </View>
         )

     }
     {
          !loading && ( <View style={{paddingVertical: 10}}><FlatList renderItem={renderItem} data={  sortBy ? contactData.sort((a,b) => {
              if(sortBy === 'First Name') {
                  if(b.first_name > a.first_name) {
                      return -1
                  }
                  else {
                      return 1;
                  }
              }
              else if (sortBy === 'Last Name') {
                if(b.last_name > a.last_name) {
                    return -1
                }
                else {
                    return 1;
                }
            }
          }) :contactData} keyExtractor={(item) => item.id} ListEmptyComponent={ListEmptyComponent} ListFooterComponent={<View style={{height: 50}} ItemSperatorComponent={() => (
              <View style={{height: 1, backgroundColor: colors.grey}}></View>
          )}></View>}>
          </FlatList></View>)
     }
     
    </View>
    <TouchableOpacity style={styles.floatingActionButton} onPress={() => navigate(CONTACT_CREATE) }>
        <Icon name="plus" type="feather" size={21} color={colors.white}></Icon>

    </TouchableOpacity>
   </>
  
  )
}

export default ContactsComponent