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


const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}


const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={SchoolIndexScreen} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    );
  }
  
  const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }

// const NavigationStack = () => {

//     return (
//     <NavigationContainer>
//         <Stack.Navigator initialRouteName="SchoolIndexScreen" screenOptions={screenOptions}>
//             {/* Splash screens */}
//             <Stack.Screen name="SplashScreen" component={SplashScreen}/>

//             {/* Authentication screen */}
            
//             <Stack.Group screenOptions={{ presentation: 'modal' }}>
//                 <Stack.Screen name="LoginScreen" component={LoginScreen} />
//                 <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
//                 <Stack.Screen name="OTPScreen" component={OTPScreen} />
//                 <Stack.Screen name="SendEmailScreen" component={SendEmailScreen} />
//                 <Stack.Screen name="ListAccountScreen" component={ListAccountScreen} />
//             </Stack.Group>

//             {/* courses screens */}
//             {/* <Stack.Screen name="SchoolIndexScreen" component={SchoolIndexScreen} /> */}
//             <Stack.Screen name="ListCourseScreen" component={ListCourseScreen} />


            
//             {/* <Stack.Screen name="About" component={About} /> */}
            
//         </Stack.Navigator>
//     </NavigationContainer>
// )}

export { MainStackNavigator, ContactStackNavigator }