/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable quotes */
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./SchoolDrawerContent";

import BottomTabNavigator from "../tab/School";

const Drawer = createDrawerNavigator();


const screenOptions = {
  headerShown: false,
}

const DrawerNavigator = ({navigation}) => {
  return (
    <>
        <Drawer.Navigator 
        screenOptions={screenOptions} 
        drawerContent={props => <DrawerContent {...props} />}
        drawerActiveTintColor="07338C"
        >
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
        </Drawer.Navigator>
    </>

  );
}

export default DrawerNavigator;