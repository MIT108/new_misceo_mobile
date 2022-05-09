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

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}


const AuthenticationStack = () => {

    return (
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
            <Stack.Screen name="SendEmailScreen" component={SendEmailScreen} />
            <Stack.Screen name="ListAccountScreen" component={ListAccountScreen} />
        </Stack.Navigator>
)}

export default AuthenticationStack