/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import LoginScreen from './screens/authentication/LoginScreen'
import ChangePasswordScreen from './screens/authentication/ChangePasswordScreen'
import OTPScreen from './screens/authentication/OTPScreen';


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}


const NavigationStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
            <Stack.Screen name="OTPScreen" component={OTPScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default NavigationStack