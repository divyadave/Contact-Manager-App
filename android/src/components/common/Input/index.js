import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import colors from '../../../assets/themes/colors'
import styles from './styles'

/* function Input({onChangeText, icon, error, iconPosition, style, value, label}) {
  const [focused, setFocused] = useState()

  const getIconDirection = () => {
    if(icon && iconPosition) {
      if(iconPosition === 'left') {
        return 'row'
      }
      else if(iconPosition === 'right') {
        return 'row-reverse'
      } 
    }

  }
  const getBorderColor = () => {
   
    if(error) {
      return colors.danger
    }
    if(focused) {
      return colors.primary
    }
    else{
      return colors.grey
    }
  }
   
  return (
    <View style={styles.inputContainer}>
        {label && <Text style={{color: 'black'}}>{label}</Text>}
        <View style={[styles.wrapper, {flexDirection: getIconDirection(), borderColor: getBorderColor()}]}>
            <View style={{color: 'black'}}>{icon && icon}</View>
            <TextInput
        style={[styles.input, style]}
        onChangeText={onChangeText}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={()=> setFocused(false)}
      />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
    
    </View>
  )
} */

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}) => {
  
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }

    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={{color: 'black'}}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
