/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import * as React from "react"
import { AuthProvider } from "./module/auth/action"
import NavigationStack from "./navigation"

export default function App(){
  return (
    <AuthProvider>
      <NavigationStack />
    </AuthProvider>
  )
}