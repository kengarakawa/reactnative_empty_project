
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './../components/Home';


const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />                
    </Stack.Navigator>
  )
}

export default RootStack