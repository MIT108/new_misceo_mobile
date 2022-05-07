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

// courses screen
import ListCourseScreen from './screens/school/class/ListCourseScreen';
import SchoolIndexScreen from './screens/school/SchoolIndexScreen';
import ListAccountScreen from './screens/school/ListAccountScreen';
import { AuthContext, AuthProvider } from './module/auth/action';
import About from './screens/school/About';
import Contact from './screens/school/Contact';
import School from './navigation/drawer/School'
import AuthenticationStack from './navigation/stack/Authentication';


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