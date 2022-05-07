/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListPostScreen from "../../screens/school/class/course/ListPostScreen";
import ChatCallScreen from "../../screens/school/communication/ChatCallScreen";
import LiveChatScreen from "../../screens/school/class/course/LiveChatScreen";
import MarkScreen from "../../screens/school/class/course/MarkScreen";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Post" component={ListPostScreen} />
      <Tab.Screen name="Chat" component={ChatCallScreen} />
      <Tab.Screen name="Live" component={LiveChatScreen} />
      <Tab.Screen name="Mark" component={MarkScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;