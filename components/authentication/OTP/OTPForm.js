/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import OTPField from 'react-native-otp-field';

const OTPForm = ({navigation}) => {
    const OTPFormSchema = Yup.object().shape({
        OTPCode: Yup.string().required('OTP Code is required'),
    })
    
  return (
    <View style={{ marginHorizontal: 20 }}>
        <View>
            <Text style={styles.heading}>Enter OTP</Text>
        </View>
        <View>
            <Text style={styles.text}>A 5 digit code has been sent to  ........@gmail.com</Text>
        </View>
        <Formik
        initialValues={{ OTPCode: '' }}
        onSubmit={values => {
            console.log(values)
            navigation.push("LoginScreen")
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
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>
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
    },

    button: isValid => ({
        backgroundColor: isValid ? '#07338C' : '#9ACAF7',
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

})