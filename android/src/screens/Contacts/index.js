import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Container from '../../components/common/Container'
import ContactsComponent from '../../components/ContactsComponent'
import contact from '../../context/actions/contact'
import { GlobalContext } from '../../context/Provider'

function Contacts() {
  const [sortBy, setSortBy] = React.useState(null);
  const [modalVisible, setModalVisible] = useState(false)
  const {contactsData: { getContact: {data, loading}}, contactsDispatch} = useContext(GlobalContext)

  const getSettings = async() => {
    const sortPref = await AsyncStorage.getItem('sortBy')
    if(sortPref) {
      setSortBy(sortPref);
    }
  }

  useEffect(() => {
    contact()(contactsDispatch)

  }, [])

 useFocusEffect(
    React.useCallback(() => {
      getSettings();
      return () => {};
    }, []),
  );
  
  return (
    
    <ContactsComponent sortBy={sortBy} contactData={data} loading={loading} modalVisible={modalVisible}
    setModalVisible={setModalVisible}></ContactsComponent>
  )
}

export default Contacts