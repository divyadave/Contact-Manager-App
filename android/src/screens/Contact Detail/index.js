import { useRoute } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';
import ContactDetailComponent from '../../components/ContactDetailComponent';

const ContactDetail = () => {
    const {params: {item}} = useRoute();
    console.log('ITEM', item)
    return (
       <ContactDetailComponent contact={item}></ContactDetailComponent>
    )
}
export default ContactDetail;