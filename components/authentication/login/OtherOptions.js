/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const OtherOptions = ({navigation}) => {
  return (
        <View>
            {/* <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../../../assets/Icons/facebook.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../../../assets/Icons/apple.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../../../assets/Icons/google-color.png')} />
                </TouchableOpacity>
            </View> */}
            <View style={styles.signupContainer}>
                <Text  style={{ color: 'black' }}>Dont't have an account?</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#6BB0F5' }}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default OtherOptions

const styles = StyleSheet.create({
    signupContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginVertical: 30
    },
    forgotten:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 30
    },

    icon: {
        width: 50,
        height: 50,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    iconContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 30,
        marginBottom: 20,
    },

})