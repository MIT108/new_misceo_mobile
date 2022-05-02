/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validators from 'email-validator'
import { Divider } from 'react-native-elements'
import { loginAction } from './../../../module/auth/action'


const LoginForm = ({navigation}) => {

    const onLogin = async(email, password) => {
        const  userData = {
            email: email,
            password: password
        }

        loginAction(userData).then((response) => {
            if (!!response.error) {
                Alert.alert(response.message)
            }else{
                Alert.alert(response.message)
            }
        })

    }

    

    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(4, 'Your password has to have at least 6 characters'),
    })

    return (
        <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
            onLogin(values.email, values.password)
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
        >
            {({handleChange, handleBlur, handleSubmit,values, isValid})=>(
                <>
                    <View style={styles.wrapper}>
                        <Text style={styles.text}>Email</Text>
                        <View style={[
                            styles.inputField,
                            {
                                borderColor: Validators.validate(values.email) ? 'green' : values.email.length < 1 ? '#ccc' : 'red',
                            },
                            ]}>
                            <TextInput
                                style={styles.textInput}
                                placeholderTextColor="#444"
                                placeholder="e.g. example@site.com"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <Text style={styles.text}>Password</Text>
                        <View style={[
                            styles.inputField,
                            {
                                borderColor: values.password.length < 1 ? '#ccc' : values.password.length >= 4 ? 'green' : 'red',
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
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={{ alignItems: 'center', margin: 20, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{ color: 'black' }}>Remember Me?</Text>
                            <TouchableOpacity>
                                <Image style={styles.icons} source={{ uri: 'https://img.icons8.com/ultraviolet/40/000000/checked-checkbox--v1.png' }} />
                            </TouchableOpacity>
                        </View>
                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>
                        
                        <View style={{ alignItems: 'center', margin: 20, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Divider width={1} orientation="vertical" />
                            <Text style={{ color: 'black' }}>Or proceed with</Text>
                            <Divider width={1} orientation="vertical" />
                        </View>
                    </View>
                </>
            )}
        </Formik>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 200,
    },

    inputField: {
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        color: 'black',
        padding: 5,
        borderWidth: 1,
    },
    textInput: {
        color: 'black',
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
    text:{
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginBottom: 10,
    },
    icons: {
        width: 15,
        height: 15,
        marginLeft: 10,
        resizeMode: 'contain'
    },
})