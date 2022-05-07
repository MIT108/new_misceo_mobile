/* eslint-disable prettier/prettier */
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "../navigation"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from "./TabNavigator";
import SplashScreen from "../screens/splash/WelcomeScreen"

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator()

const screenOptions = {
    headerShown: false,
}



const DrawerNavigator = () => {
  return (
      <>
      
      <Drawer.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                <Drawer.Screen name="Home" component={TabNavigator} />
                <Drawer.Screen name="Contact" component={ContactStackNavigator} />
            </Drawer.Navigator>

        {/* <Stack.Navigator initialRouteName="SchoolIndexScreen" screenOptions={screenOptions}>
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            

        </Stack.Navigator> */}
      </>
  );
}

export default DrawerNavigator;