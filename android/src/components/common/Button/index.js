import React, { useState } from 'react'
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../../assets/themes/colors'
import styles from './styles'


const Button = ({
  title,
  loading,
  disabled,
  primary,
  secondary,
  danger,
  ...props
}) => {
 
  const getBgColor = () => {
      if(disabled) {
          return colors.grey
      }
    if (danger) {
      return colors.danger;
    }
    if (primary) {
      return colors.primary;
    } 
    if(secondary) {
        return colors.secondary;
    }
    
  };
  return (
    <TouchableOpacity disabled={disabled} {...props} style={[
        styles.wrapper,
              {backgroundColor: getBgColor()},
      ]} > 
      <View style={[styles.loaderSection]}>
          {
              loading && (
                  <ActivityIndicator color={primary ? colors.secondary : colors.primary}></ActivityIndicator>
              )
          }
      { title && <Text style={{ color: disabled=== true ? 'black' : colors.white }}>{title}</Text>}

          </View> 
     
      </TouchableOpacity>

   
   
  );
};

export default Button;
