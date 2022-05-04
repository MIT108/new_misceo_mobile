/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from '../../components/authentication/mix/Logo'
import SendByEmail from '../../components/authentication/OTP/SendByEmail'
import { signedIn } from '../../helper/UserStorage'



const PAGE = 'Send OTP Code.'
const SendEmailScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
        <View>
            <Logo page={PAGE}></Logo>
        </View>
        <View>
            <SendByEmail navigation={navigation}/>
        </View>
    </View>
  )
}

export default SendEmailScreen

const styles = StyleSheet.create({})