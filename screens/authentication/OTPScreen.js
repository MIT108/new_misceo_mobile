/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../components/authentication/mix/Logo'
import OTPForm from '../../components/authentication/OTP/OTPForm'

const OTPScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'white', height: '100%'}}>
        <Logo page="Verification" />
        <ScrollView>
            <View style={{ alignItems: 'center', marginVertical: 20}}>
                <Image source={require('../../assets/images/OTP.png')} style={styles.image} />
            </View>
            <View>
                <OTPForm navigation={navigation}/>
            </View>
        </ScrollView>
    </View>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
    image:{
        width: '80%',
        height: 200,
        resizeMode: 'contain',
    },
})