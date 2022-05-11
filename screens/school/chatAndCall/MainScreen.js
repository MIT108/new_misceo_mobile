/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from '../../../components/school/chatAndCall/main/Search'
import Contacts from '../../../components/school/chatAndCall/main/Contacts'

const MainScreen = () => {
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
        <Search />
        <Contacts />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})