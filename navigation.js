/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

//splash screens
import SplashScreen from './screens/splash/WelcomeScreen'

//Authentication screen
import LoginScreen from './screens/authentication/LoginScreen'
import ChangePasswordScreen from './screens/authentication/ChangePasswordScreen'
import OTPScreen from './screens/authentication/OTPScreen';
import SendEmailScreen from './screens/authentication/SendEmailScreen';
import ListAccountScreen from './screens/school/ListAccountScreen';

// courses screen
import ListCourseScreen from './screens/school/class/ListCourseScreen';
import { AuthContext, AuthProvider } from './module/auth/action';



const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false
}


const NavigationStack = () => {

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={screenOptions}>
            {/* Splash screens */}
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>

            {/* Authentication screen */}
            
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
                <Stack.Screen name="OTPScreen" component={OTPScreen} />
                <Stack.Screen name="SendEmailScreen" component={SendEmailScreen} />
                <Stack.Screen name="ListAccountScreen" component={ListAccountScreen} />
            </Stack.Group>

            {/* courses screens */}
            <Stack.Screen name="ListCourseScreen" component={ListCourseScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)}

export default NavigationStack