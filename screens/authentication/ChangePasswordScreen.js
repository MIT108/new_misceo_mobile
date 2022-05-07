/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Logo from '../../components/authentication/mix/Logo'
import ChangePasswordForm from './../../components/authentication/changePassword/ChangePasswordForm'


const PAGE = 'Welcome \n aboard!'


const ChangePasswordScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <Logo page={PAGE}/>
      <ScrollView>
        <View style={{  margin: 20 }}>
          <View style={{ marginBottom: 20}}>
            <Text style={{ fontSize: 15, color: 'black'}}>We coordinate learning activities, in the field or at a distance, to enable learning to achieve their objectives. </Text>
          </View>
          <ChangePasswordForm navigation={navigation} />
          
                    
          <View style={{ flexDirection: 'row' , justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                <Text>Move ? </Text>
                <TouchableOpacity 
                    onPress={()=>{
                        navigation.push("ListAccountScreen")
                        }}
                >
                    <Text style={{ color: '#07338C' }}>Click here</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({})