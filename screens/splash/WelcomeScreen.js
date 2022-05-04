/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <View style={styles.blueCircle}>

      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  blueCircle:{
    backgroundColor:"#a6b9da",
    width:"40%",
    height:"60%",
    borderBottomEndRadius:50,
    borderTopEndRadius:50,


  }
})