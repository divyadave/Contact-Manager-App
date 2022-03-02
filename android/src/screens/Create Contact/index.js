import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';
import { CONTACT_LIST } from '../../consts/routeNames';
import createContact from '../../context/actions/createContact';
import { GlobalContext } from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';

const CreateContact = () => {
    const [form, setForm] = useState({})
    const {contactsDispatch, contactsData: {createContact: {data, loading, error}}} = useContext(GlobalContext)
    const {navigate, setOptions} = useNavigation()
    const sheetRef = useRef(null);
    const [localFile, setLocalFile] = useState(null);
    const [uploading, setIsUploading] = useState(false);
    const {params} = useRoute();
    

    useEffect(() => {
      if(params?.contact) {
        setOptions({title: 'Update contact'});
        const {
          first_name: firstName,
          phone_number: phoneNumber,
          last_name: lastName,
          is_favorite: isFavorite,
          country_code: countryCode,
        } = params?.contact;

        setForm(prev => {
          return {
            ...prev,
            firstName,
            lastName,
            isFavorite,
            phoneNumber,
            phoneCode: countryCode

          }
        })
        if (params?.contact?.contact_picture) {
          setLocalFile(params?.contact.contact_picture);
        }
      }
     

    }, [])

    
    const onChangeText = ({name, value}) => {
        setForm({...form, [name]: value})
    }

    const toggleValueChange = () => {
        setForm({...form, isFavorite: !form.isFavorite});
      };
    const onFileSelected = (images) => {
        closeSheet();
        console.log('IMAGES', images)
        setLocalFile(images)

    }
    const onSubmit = () => {
      if(localFile?.size) {
        setIsUploading(true)
        uploadImage(localFile)((url) => {
          setIsUploading(false)
          createContact({...form, contactPicture: url})(contactsDispatch)( () => {
            navigate(CONTACT_LIST)

        })

        })((err) => {
          setIsUploading(false)

        })

      } else {
        createContact(form)(contactsDispatch)( () => {
          navigate(CONTACT_LIST)

      })
      }
        
    }
    const closeSheet = () => {
        if (sheetRef.current) {
          sheetRef.current.close();
        }
      };
      const openSheet = () => {
        if (sheetRef.current) {
          sheetRef.current.open();
        }
      };
    return (
       <CreateContactComponent sheetRef={sheetRef}  onFileSelected={onFileSelected}  closeSheet={closeSheet}
       openSheet={openSheet} localFile={localFile} toggleValueChange={toggleValueChange} onChangeText={onChangeText} setForm={setForm} loading={loading || uploading} error={error} form={form} onSubmit={onSubmit}></CreateContactComponent>
    )
}
export default CreateContact;