/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/authentication/LoginScreen'
import ChangePassword from '../screens/authentication/ChangePassword'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false
}


const AuthenticationStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AuthenticationStack