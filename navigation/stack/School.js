/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';


import ListCourseScreen from '../../screens/school/class/ListCourseScreen';

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}


const SchoolStack = () => {

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="ListCourseScreen" component={ListCourseScreen} />
        </Stack.Navigator>
)}

export default SchoolStack