/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import School from './navigation/drawer/School'
import Stacks from './navigation/stack/Stacks';


const Stack = createNativeStackNavigator()


const screenOptions = {
    headerShown: false,
}

  const InitialStack = () => {
    return (
      <Stack.Navigator  screenOptions={screenOptions} >
      <Stack.Screen name="SchoolDrawer" component={School} />
        <Stack.Screen name="Stacks" component={Stacks} />
      </Stack.Navigator>
    );
  }


export default InitialStack