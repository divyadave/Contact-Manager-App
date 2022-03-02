import React, { useState } from 'react'
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../../assets/themes/colors'
import styles from './styles'


const Message = ({
  title,
  primary,
  danger,
  success,
  info,
  retry,
  retryFn,
  onDismiss,
  ...props
}) => {
const [userDismissed, setDismissed] = useState(false);
  const getBgColor = () => {
    if (danger) {
      return colors.danger;
    }
    if (primary) {
      return colors.primary;
    } 
    if(info) {
        return colors.accent;
    }
    if(success) {
        return colors.success
    }
  };
  return (
      <>
      {userDismissed ? null : (
    <TouchableOpacity {...props} style={[
        styles.wrapper,
              {backgroundColor: getBgColor()},
      ]} > 
      <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',

            }}>
                 <Text
              style={{
                color: colors.white,
              }}>
              {title}
            </Text>
                {retry && typeof onDismiss !== 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>
            )}
                   
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
     
      </TouchableOpacity>

   
   
  )}
  </>
  )
  
  
                }

export default Message;
