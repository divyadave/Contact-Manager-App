/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import AppNavContainer from './android/src/navigation';
import React from 'react'
import 'react-native-gesture-handler';
import GlobalProvider from './android/src/context/Provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';





function App() {
  return (
  <GlobalProvider>
  
  <AppNavContainer></AppNavContainer>
  
  </GlobalProvider>
 
  )
}

export default App;
