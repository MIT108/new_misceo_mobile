/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';


import MainScreen from '../../../screens/school/chatAndCall/MainScreen';

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}


const SchoolStack = () => {

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="ChatCallMainScreen" component={MainScreen} />
        </Stack.Navigator>
)}

export default SchoolStack