/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

//splash screens
import SplashScreen from '../../screens/splash/WelcomeScreen'

//Authentication screen
import LoginScreen from '../../screens/authentication/LoginScreen'
import ChangePasswordScreen from '../../screens/authentication/ChangePasswordScreen'
import OTPScreen from '../../screens/authentication/OTPScreen';
import SendEmailScreen from '../../screens/authentication/SendEmailScreen';

import ListAccountScreen from '../../screens/school/ListAccountScreen';
// import ListCourseScreen from '../../screens/school/class/ListCourseScreen';
import SchoolStack from './modules/School'
import AuthenticationStack from './modules/Authentication'

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}


const Stacks = () => {

    return (
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={screenOptions}>
            <Stack.Screen name="AuthenticationStack" component={AuthenticationStack} />
            <Stack.Screen name="SchoolStack" component={SchoolStack} />
        </Stack.Navigator>
)}

export default Stacks