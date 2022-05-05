/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import OTPField from 'react-native-otp-field';
import { getUserData } from '../../../helper/UserStorage';
import { sendOTPCode } from '../../../module/auth/action';

const OTPForm = ({navigation}) => {
    
    const [email,setEmail] = useState(null)



    getUserData().then((response)=>{
        setEmail(response.email)
    })

    return (
        <>
            {
                email ? <Body navigation={navigation} email={email} /> : null
            }
        </>
    )
}

const Body = ({navigation, email}) => {
    const OTPFormSchema = Yup.object().shape({
        OTPCode: Yup.string().required('OTP Code is required'),
    })


    const [isLoading,setIsLoading] = useState(true)

    const sendOTP = (code, email) => {
        const  OTPData = {
            code: code,
            email: email
        }

        sendOTPCode(OTPData).then((response) => {
            setIsLoading(true)
            console.log(response);
            if (response.status == 200) {
                console.log('====================================');
                console.log(response);
                console.log('====================================');
            } else if (response.status == 422){
                Alert.alert("Either the code is wrong or it has expired")
            } else {
                Alert.alert("Connect to the server failed")
            }
        })


    }

    return (
        <View style={{ marginHorizontal: 30 }}>
            <View>
                <Text style={styles.heading}>Enter OTP</Text>
            </View>
            <View>
                <Text style={styles.text}>A 5 digit code has been sent to the email : <Text style={{ color: '#07338C' }}>{ email }</Text></Text>
            </View>
            <Formik
            initialValues={{ OTPCode: '' }}
            onSubmit={values => {
                setIsLoading(false)
                sendOTP(values.OTPCode, email)
            }}
            validationSchema={OTPFormSchema}
            validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <View style={styles.OTPContainer}>
                            <OTPField
                                length={5}
                                onChange={handleChange('OTPCode')}
                                onBlur={handleBlur('OTPCode')}
                                value={values.OTPCode}
                                textFieldStyle={styles.OTPField}
                            />
                        </View>
                        <View>
                            <Pressable
                                titleSize={20}
                                style={styles.button(isValid, isLoading)}
                                onPress={handleSubmit}
                                disabled={!isValid}
                            >
                                {
                                    isLoading ? 
                                    <View>
                                        <Text style={styles.buttonText}>Log In</Text>
                                    </View>
                                    :
                                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                        <Text style={styles.buttonText}>Loading...</Text>
                                        <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-loading-user-interface-tanah-basah-glyph-tanah-basah.png' }} />
                                    </View>
                                }
                            </Pressable>
                        </View>
                        <View>
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )

}

export default OTPForm

const styles = StyleSheet.create({
    heading: {
        marginVertical: 10,
        fontSize: 30,
        fontWeight: '700',
        color: '#07338C',
    },
    text: {
        color: 'black',
        fontSize: 15,
        marginVertical: 35,
        justifyContent: 'center',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
    },
    button: (isValid, isLoading) => ({
        backgroundColor: isValid && isLoading ? '#07338C' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 6,
        height: 50,
    }),

    buttonText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 20,
    },
    OTPContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    OTPField:{
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        color: 'black',
        fontSize: 25,
        height: 50,
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 10,
        resizeMode: 'contain'
    },
})