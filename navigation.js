/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';

//splash screens
import SplashScreen from './screens/splash/WelcomeScreen'

//Authentication screen
import LoginScreen from './screens/authentication/LoginScreen'
import ChangePasswordScreen from './screens/authentication/ChangePasswordScreen'
import OTPScreen from './screens/authentication/OTPScreen';
import SendEmailScreen from './screens/authentication/SendEmailScreen';
import ListAccountScreen from './screens/school/ListAccountScreen';



const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}


const NavigationStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SendEmailScreen" screenOptions={screenOptions}>
            {/* Splash screens */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} />

            {/* Authentication screen */}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
            <Stack.Screen name="SendEmailScreen" component={SendEmailScreen} />
            <Stack.Screen name="ListAccountScreen" component={ListAccountScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default NavigationStack