import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import styles from '../styles'

function ImageComponent({src}) {
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const onLoadStart = () => {
    setIsLoading(true)
  }
  const onLoadEnd = () => {
    setIsLoading(false)
  }
  const onError = () => {
    setIsLoading(false)
    setError(true)
  }
  return (
   <View style={styles.imageContainer}>
     {
       loading && <Text style={styles.loading}>Loading Image....</Text>
     }
      <View>
      <Image onLoadEnd={onLoadEnd} onError={onError} onLoadStart={onLoadStart} style={styles.detailPhoto} source={{uri: src}}></Image>
     

      </View>
   </View>
  )
}

export default ImageComponent