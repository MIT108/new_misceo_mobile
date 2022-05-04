/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import Logo from '../../components/authentication/mix/Logo'
import LoginForm from '../../components/authentication/login/LoginForm'
import Banner from '../../components/authentication/login/Banner'
import OtherOptions from '../../components/authentication/login/OtherOptions'
import { isVerified, signedIn } from '../../helper/UserStorage'

const PAGE = 'Login.'

const LoginScreen = ({navigation}) => {
    signedIn().then((response) => {
        if (response == true) {
            isVerified().then((data) => {
                if (data == true) {
                    navigation.push("ListAccountScreen")
                }else{
                    navigation.push("SendEmailScreen")
                }
            })
        }else{
            navigation.push("LoginScreen")
        }
    })


    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
            <Logo page={PAGE}/>
            <Banner />
            <ScrollView>
                <View style={{ marginHorizontal: 20 }}>
                    <LoginForm navigation={navigation} />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <OtherOptions navigation={navigation} />
                </View>
            </ScrollView>
        </View>
    )
}


export default LoginScreen

const styles = StyleSheet.create({})