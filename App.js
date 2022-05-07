/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
import { NavigationContainer } from "@react-navigation/native"
import * as React from "react"
import { AuthProvider } from "./module/auth/action"
import InitialStack from "./navigation"
import NavigationStack from "./navigation"
import DrawerNavigator from "./navigation/DrawerNavigator"
import AuthenticationStack from "./navigation/stack/Authentication"
import BottomTabNavigator from "./navigation/TabNavigator"

export default function App(){
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  )
}