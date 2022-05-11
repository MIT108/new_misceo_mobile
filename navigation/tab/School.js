/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable semi */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListPostScreen from "../../screens/school/class/course/post/ListPostScreen";
import AddPostScreen from "../../screens/school/class/course/post/AddPostScreen";
import MainScreen from "../../screens/school/chatAndCall/MainScreen";
import LiveChatScreen from "../../screens/school/class/course/LiveChatScreen";
import MarkScreen from "../../screens/school/class/course/MarkScreen";
import SchoolDrawerHeader from '../drawer/SchoolDrawerHeader'
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Post from '../../assets/Icons/Post.png'
import Chat from '../../assets/Icons/chat.png'
import Live from '../../assets/Icons/live.png'
import Rank from '../../assets/Icons/rank.png'

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{ 
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#07338C',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 10
     }}
     onPress={onPress}
  >
    <View style={{ 
      width: 50,
      height: 50,
      borderRadius: 35,
      backgroundColor: '#07338C'
     }}>
      {children}
    </View>
  </TouchableOpacity>
)



const screenOptions = {
  headerShown: false,
  "tabBarShowLabel": false,
  "tabBarStyle": [
    {
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      backgroundColor: 'white',
      borderRadius: 15,
      height: 70,
      shadowColor: '#07338C',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 10
    }
  ]
}

const BottomTabNavigator = ({navigation}) => {
  return (
    <>
    <SchoolDrawerHeader navigation={navigation} />
    <Tab.Navigator
       screenOptions={screenOptions}
    >
      <Tab.Screen name="Post" component={ListPostScreen} 
      options={{ 
        tabBarIcon: ({focused})=>(
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
              source={Post}
              resizeMode='contain'
              style={{ 
                width: 25,
                height: 25,
                tintColor: focused ? '#07338C' : '#748c94'
               }}
            />
            <Text style={{ color: focused ? '#07338C' : '#748c94', fontSize: 12 }} >Home</Text>
          </View>
        )
       }} />
      <Tab.Screen name="ChatCallMainScreen" component={MainScreen} 
        options={{ 
        tabBarIcon: ({focused})=>(
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
              source={Chat}
              resizeMode='contain'
              style={{ 
                width: 25,
                height: 25,
                tintColor: focused ? '#07338C' : '#748c94'
               }}
            />
            <Text style={{ color: focused ? '#07338C' : '#748c94', fontSize: 12 }} >Chat</Text>
          </View>
        )
       }}
      />
      <Tab.Screen name="Add" component={AddPostScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <Image
             source={{ uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png' }}
             resizeMode='contain'
             style={{
               width: 30, 
               height: 30,
               tintColor: '#fff'
             }} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen name="Live" component={LiveChatScreen} 
        options={{ 
        tabBarIcon: ({focused})=>(
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
              source={Live}
              resizeMode='contain'
              style={{ 
                width: 25,
                height: 25,
                tintColor: focused ? '#07338C' : '#748c94'
               }}
            />
            <Text style={{ color: focused ? '#07338C' : '#748c94', fontSize: 12 }} >Live</Text>
          </View>
        )
       }}
      />
      <Tab.Screen name="Mark" component={MarkScreen} 
        options={{ 
        tabBarIcon: ({focused})=>(
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image 
              source={Rank}
              resizeMode='contain'
              style={{ 
                width: 25,
                height: 25,
                tintColor: focused ? '#07338C' : '#748c94'
               }}
            />
            <Text style={{ color: focused ? '#07338C' : '#748c94', fontSize: 12 }} >Rank</Text>
          </View>
        )
       }}
      />
    </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
  }

})

export default BottomTabNavigator;