import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import colors from '../../assets/themes/colors'
import AppModal from '../common/AppModal'

function SettingsComponent({ modalVisible, prefArr, setModalVisible, settingOptions}) {
  
  return (
    <>
    
    <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} closeOnTouchOutside={false} modalBody={<View>
        {
         prefArr.map(({name, selected, onPress}) => (
             <TouchableOpacity onPress={onPress} key={name} style={{ flexDirection: 'row', paddingVertical: 5, alignItems: 'center'}}>
                 { selected && <Icon style={{fontSize: 10}} type="antdesign" name="check"></Icon>}
                 <Text  style={{fontSize: 17, paddingLeft: selected? 5 : 30}} >{name}</Text>
             </TouchableOpacity>

         ))
        }
    </View>} modalFooter={<></>} title="Sort By" setModalVisible={setModalVisible}></AppModal>
  <ScrollView style={{backgroundColor: colors.white}}>
      {
          settingOptions.map(({title, subTitle, onPress}, index) => (
              <TouchableOpacity key={title} onPress={onPress}>
                  <View style={{
                paddingHorizontal: 20,
                paddingBottom: 20,
                paddingTop: 20,
              }}>
                      <Text style={{fontSize: 17}}>{title}</Text>
                      {
                          subTitle && <Text style={{fontSize: 14, opacity: 0.5, paddingTop: 5}}>{subTitle}</Text>
                      }

                  </View>
              </TouchableOpacity>
          ))
      }
  </ScrollView>
  </>
  )
}

export default SettingsComponent