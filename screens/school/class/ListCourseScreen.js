/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/school/class/listCourse/Header'
import Menu from '../../../components/school/class/listCourse/Menu'
import Course from '../../../components/school/class/listCourse/Course'

const ListCourseScreen = () => {
  return (
    <View style={{ backgroundColor: 'white', minHeight: '100%', padding: 20}}>
      <View>
        <Header />
      </View>
      <View style={{ marginVertical: 30 }}>
        <Menu />
      </View>
      <ScrollView >
        <Course />
        <Course />
        <Course />
        <Course />
      </ScrollView>
    </View>
  )
}

export default ListCourseScreen

const styles = StyleSheet.create({})