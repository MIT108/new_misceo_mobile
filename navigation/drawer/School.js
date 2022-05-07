/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable quotes */
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "../../navigation"
import BottomTabNavigator from "../tab/School";

const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
  return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
        </Drawer.Navigator>

  );
}

export default DrawerNavigator;