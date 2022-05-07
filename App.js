/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
import { NavigationContainer } from "@react-navigation/native"
import * as React from "react"
import InitialStack from "./navigation"

export default function App(){
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  )
}