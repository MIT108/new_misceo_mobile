/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Image, Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import Validators from 'email-validator'
import * as Yup from 'yup'
import { Divider } from 'react-native-elements'

const ChangePasswordForm = ({navigation}) => {
    const ChangePasswordSchema = Yup.object().shape({
        caption: Yup.string().required().min(4, 'Your caption should be at least 4 characters long'),
        password: Yup.string().required().min(8, 'Your password should be at least 8 characters long'),
        confirmPassword: Yup.string().required('The confirm Password is required'),
    })
    return (
        <Formik
            initialValues={{ caption: '', password: '', confirmPassword: ''}}
            onSubmit={values=>{
                console.log(values);
                navigation.push("OTPScreen")
            }}
            validationSchema={ChangePasswordSchema}
            validateOnMount={true}
        >
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
            <>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 15, margin: 10}}>Choose profile picture:</Text>
                        <View style={{ color: 'black', width: 50, alignItems: 'center'}}>
                            <Divider width={1} orientation="vertical" />
                        </View>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                        <Image style={styles.image} source={{ uri: 'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-user-interface-kiranshastry-solid-kiranshastry-1.png' }}/>
                        <TouchableOpacity onPress={()=>{
                            navigation.push('OTPScreen')
                        }} >
                        <Text style={{color: '#2947D9'}}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Account caption</Text>
                    <View style={[
                        styles.inputField,
                        {
                            // borderColor: Validators.validate(values.caption) ? 'green' : values.caption.length < 1 ? '#ccc' : 'red',
                            borderColor:  values.caption.length < 1 ? '#ccc'  : Validators.validate(values.caption) && values.caption.length >= 4 ? 'green' : 'red',
                        },
                        ]}>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor="#444"
                            placeholder="Enter your caption here..."
                            autoCapitalize="none"
                            keyboardType="default"
                            autoCorrect={false}
                            autoFocus={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={values.caption}
                        />
                    </View>
                    <Text style={styles.text}>Password</Text>
                    <View style={[
                        styles.inputField,
                        {
                            borderColor: values.password.length < 1 ? '#ccc' : values.password.length >= 6 ? 'green' : 'red',
                        },
                        ]}>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor="#444"
                            placeholder="********"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            textContentType="password"
                            keyboardType="default"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                    </View>
                    <Text style={styles.text}>Confirm password</Text>
                    <View style={[
                        styles.inputField,
                        {
                            borderColor: values.confirmPassword.length < 1 ? '#ccc' : values.confirmPassword === values.password ? 'green' : 'red',
                        },
                        ]}>
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor="#444"
                            placeholder="********"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            textContentType="password"
                            keyboardType="default"
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                        />
                    </View>
                    <Pressable
                        titleSize={20}
                        style={styles.button(isValid)}
                        onPress={handleSubmit}
                        disabled={!isValid}
                    >
                        <Text style={styles.buttonText}>Confirm</Text>
                    </Pressable>


                </View>
            </>
        )}

        </Formik>
    )
}

export default ChangePasswordForm

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
    },
    inputField: {
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FAFAFA',
        color: 'black',
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
    },

    button: isValid => ({
        backgroundColor: isValid ? '#07338C' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 6,
        marginVertical: 20,
        padding: 10,
        height: 50,
    }),

    buttonText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 20,
    },
    text:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginVertical: 20,
    },
    icons: {
        width: 15,
        height: 15,
        marginLeft: 10,
        resizeMode: 'contain'
    },
})