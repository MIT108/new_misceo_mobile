/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const OtherOptions = ({navigation}) => {
  return (
        <View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/fluency/48/000000/facebook-new.png' }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/mac-os.png' }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} />
                </TouchableOpacity>
            </View>
            <View style={styles.forgotten}>
                <Text  style={{ color: 'black' }}>Forgotten password?</Text>
                <TouchableOpacity onPress={()=>{
                            navigation.push('ChangePasswordScreen')
                        }} >
                    <Text style={{ color: '#6BB0F5' }}> Click here</Text>
                </TouchableOpacity>
            </View>
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