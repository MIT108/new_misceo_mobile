/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import School from './navigation/drawer/School'
import AuthenticationStack from './navigation/stack/Authentication';
import SchoolStack from './navigation/stack/School';


const Stack = createNativeStackNavigator()


const screenOptions = {
    headerShown: false,
}

  const InitialStack = () => {
    return (
      <Stack.Navigator  screenOptions={screenOptions} >
        <Stack.Screen name="Authentication" component={AuthenticationStack} />
        <Stack.Screen name="SchoolDrawer" component={School} />
      </Stack.Navigator>
    );
  }


export default InitialStack