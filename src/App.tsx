import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StackNavegacion } from './Presentacion/Navegacion/Stack-Navegacion';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavegacion/>
    </NavigationContainer>
  )
}
