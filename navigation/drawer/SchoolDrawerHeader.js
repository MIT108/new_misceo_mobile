/* eslint-disable prettier/prettier */
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import IconDrawer from '../../assets/Icons/align-left.png'
import Logo from '../../assets/images/logo.png'
const SchoolDrawerHeader = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
       <View>
          <TouchableOpacity
            onPress={()=>{
                navigation.openDrawer()
            }}
          >
            <Image source={IconDrawer} style={{ width: 40, height: 40 }} />
          </TouchableOpacity>
       </View>
       <View>
         <Text style={styles.text}>Course Name</Text>
       </View>
       <View>
          <TouchableOpacity
            onPress={()=>{
              Alert.alert("Welcome to misceo !!!!!!!!!")
            }}
          >
            <Image source={Logo} style={{ width: 40, height: 40 }} />
            
          </TouchableOpacity>
       </View>
    </View>
  )
}

export default SchoolDrawerHeader

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: 'white',
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        maxHeight: 60, 
        alignItems: 'center', 
        paddingHorizontal: 20
    },
    text:{
        fontSize: 24, 
        borderBottomWidth: 2, 
        borderColor: "#07338C", 
        color: "#07338C", 
        fontWeight: "700"
    }
})