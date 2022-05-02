/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View style={{ backgroundColor: 'blue' }}>
        <Image source={require('../../../assets/images/loginBanner.png')} style={styles.banner}/>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    banner:{
        width: '100%',
        height: 320,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -280,
    }
})