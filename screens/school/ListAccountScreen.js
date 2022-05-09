/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/school/listAccount/Header'
import { getUserData, getUserToken } from '../../helper/UserStorage'

const ListAccountScreen = ({navigation}) => {
  
  getUserData().then((response) => {
    if(!!response){
      getUserToken().then((response) => {
        if (!!response) {
          console.log("Screen ok");
        }else{
          navigation.push("LoginScreen")
        }
      })
    }else{
      navigation.push("LoginScreen")
    }
})
    return (
      <View style={{ padding: 20, backgroundColor: 'white', height: '100%' }}>
        <View>
          <Header navigation={navigation} />
        </View>
      </View>
    )
}

export default ListAccountScreen

const styles = StyleSheet.create({})