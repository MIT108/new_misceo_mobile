/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'

const Logo = ({page}) => {
  return (
    <View>
      <View style={{ alignItems: 'flex-end', margin: 10}}>
        <Image style={styles.image} source={require('../../../assets/images/logo.png')}/>
      </View>
      <Text style={styles.pageText}> { page }</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  pageText: {
    marginHorizontal: 15,
    fontSize: 30,
    fontWeight: '700',
    color: '#07338C'
  }
})