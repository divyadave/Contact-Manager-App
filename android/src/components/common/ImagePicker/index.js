import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/themes/colors';
import styles from './styles';
import ImageCropper from 'react-native-image-crop-picker';

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
    const options = [
        {
            name: 'Take from camera',
            icon: <Icon name="camera" type="antdesign" color={colors.grey} size={21}></Icon>,
            onPress: () => {
                ImageCropper.openCamera({
                    width: 300,
                    height: 400,
                    cropping: true
                  }).then(images => {
                    onFileSelected(images);
                  });
            }
        },
        {
            name: 'Open from gallery',
            icon: <Icon name="image" type="feather" color={colors.grey} size={21}></Icon>,
            onPress: () => {
            ImageCropper.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true
                  }).then(images => {
                    onFileSelected(images);
                  });
                
            }  
        }
    ]
  return (
       <RBSheet
          ref={ref}
          height={300}
          openDuration={250}
          closeOnDragDown
          customStyles={{
            container: {
             borderBottomLeftRadius: 20,
             borderBottomRightRadius: 20
            }
          }}
        >
          <View  style={styles.optionsWrapper}>
              {
                  options.map(({name, icon, onPress}) => (

                    <TouchableOpacity onPress={onPress} style={styles.pickerOption} key={name}>
                        {icon}
                        <Text style={styles.text}>{name}</Text>

                    </TouchableOpacity>
                  ))
              }
          </View>
        </RBSheet>
 
  )
})

export default ImagePicker