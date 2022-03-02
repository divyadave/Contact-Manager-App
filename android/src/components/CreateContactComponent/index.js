import React from 'react'
import Button from '../common/Button'
import Container from '../common/Container'
import Input from '../common/Input'
import CountryPicker from 'react-native-country-picker-modal';
import styles from './styles';
import { View, Image, Text, Switch, TouchableOpacity } from 'react-native';
import { DEFAULT_IMAGE_URI } from '../../consts/general';
import colors from '../../assets/themes/colors';
import ImagePicker from '../common/ImagePicker';

function CreateContactComponent({onChangeText, sheetRef, localFile,
    openSheet, error, loading, form, toggleValueChange, onFileSelected, setForm, onSubmit}) {
      console.log('form', form)
   
  return (
      <View style={styles.container}>
          <Image source={{uri: localFile?.path || localFile || DEFAULT_IMAGE_URI}} style={styles.imageView}></Image>
          <TouchableOpacity onPress={openSheet}>
          <Text style={styles.chooseText}>Choose Image</Text>
          </TouchableOpacity>
    <Container>
        <Input label="First Name" placeholder="Enter First Name"value={form.firstName || ''} error={error?.first_name} onChangeText={(value) => {
         onChangeText({name: 'firstName', value: value})
        }}></Input>
        <Input label="Last Name" placeholder="Enter Last Name" value={form.lastName|| ''} error={error?.last_name} onChangeText={(value) => {
         onChangeText({name: 'lastName', value: value})
        }}></Input>
        <Input icon={
        <CountryPicker 
        withFilter
        withFlag
        countryCode={form.countryCode || undefined}
        withCountryNameButton={false}
        withCallingCode
        withCallingCodeButton
        withEmoji
        onSelect={(v) => {
            const phoneCode = v.callingCode[0];
            const cCode = v.cca2;
            setForm({...form, phoneCode: phoneCode, countryCode: cCode })
        }}
        
        
        ></CountryPicker>
        } iconPosition="left"  value={form.phoneNumber || ''} label="Phone Number" onChangeText={(value) => {
            onChangeText({name: 'phoneNumber', value: value})
           }} error={error?.phone_number}></Input>
             <View  style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
        <Text value={form.isFavorite} style={{fontSize: 17}}>Add To Favorites</Text>
        <Switch
        trackColor={{ false: "#767577", true: colors.primary }}
        thumbColor={form.isFavorite ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleValueChange}
        value={form.isFavorite}
      />
        </View>
        <Button title="Submit" disabled={loading} onPress={onSubmit} secondary></Button>
        <ImagePicker onFileSelected={onFileSelected} ref={sheetRef}></ImagePicker>
      
    </Container>
    </View>
  )
}

export default CreateContactComponent