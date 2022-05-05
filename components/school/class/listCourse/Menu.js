/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Menu = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../../../../assets/Icons/statistics-svgrepo-com.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={require('../../../../assets/Icons/calendar.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon2} source={require('../../../../assets/Icons/rank1.png')} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text>
                Filter
            </Text>
            <View style={{ borderWidth: 1, flexDirection: 'row',  justifyContent: 'flex-end', alignItems: 'center'}}>
                <Image  style={styles.icon}  source={require('../../../../assets/Icons/filter.png')} />
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    icon:{
        width: 22,
        height: 22,
        marginRight: 30
    },
    icon2:{
        width: 29,
        height: 29,
    }
})