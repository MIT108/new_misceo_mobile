/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import React,{useContext, useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validators from 'email-validator'
import { Divider } from 'react-native-elements'
import { loginAction } from '../../../module/auth/action'
import { getUserData } from '../../../helper/UserStorage'


const LoginForm = ({navigation}) => {

    const [isChecked, setChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(4, 'Your password has to have at least 6 characters'),
    })



    return (
        <View>
        <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
            let userData = {
                email: values.email,
                password: values.password
            }
            setIsLoading(true);
            
            loginAction(userData).then((response) => {
                setIsLoading(false)
                    
                if(response.status == 403){
                    navigation.push("SendEmailScreen")
                }else if(response.status == 200){
                    navigation.push("ListAccountScreen")
                }else{
                    Alert.alert(response.message + response.status)
                }
            })

            
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
                            <Text>
                                87501
                            </Text>
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
                            <Image style={styles.icon} source={require('../../../assets/Icons/social-email.png')} />
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
                            <Image style={styles.icon} source={require('../../../assets/Icons/eye-slash.png')} />
                        </View>
                        {/* <View style={{ alignItems: 'center', margin: 20, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Text style={{ color: 'black' }}>Remember Me?</Text>
                            <TouchableOpacity
                            onPress={()=>{
                                setChecked(!isChecked)
                            }}
                            >
                            {
                                isChecked ? 
                                <Image style={styles.icons} source={ require('../../../assets/Icons/check-square.png') } />
                                :
                                <Image style={styles.icons} source={ require('../../../assets/Icons/ic_check_box_outline_blank_24px.png') } />
                            }
                                
                            </TouchableOpacity>
                        </View> */}
                        
                        <View style={styles.forgotten}>
                            <Text  style={{ color: 'black' }}>Forgotten password?</Text>
                            <TouchableOpacity onPress={()=>{
                                        navigation.push('ChangePasswordScreen')
                                    }} >
                                <Text style={{ color: '#6BB0F5' }}> Click here</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            !isLoading?
                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={()=>handleSubmit()}
                            disabled={isLoading}
                        >
                            <View>
                                <Text style={styles.buttonText}>Log In</Text>
                            </View>
                           
                        </Pressable>
                        :
                        <Pressable
                            style={styles.loading}
                            disabled={true}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.buttonText}>Loading...</Text>
                                <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-loading-user-interface-tanah-basah-glyph-tanah-basah.png' }} />
                            </View>
                           
                        </Pressable>
                        }
                        
                        {/* <View style={{ alignItems: 'center', margin: 20, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Divider width={1} orientation="vertical" />
                            <Text style={{ color: 'black' }}>Or proceed with</Text>
                            <Divider width={1} orientation="vertical" />
                        </View> */}
                    </View>
                </>
            )}
        </Formik>

        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 200,
    },

    inputField: {
        flexDirection: 'row',
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        color: 'black',
        padding: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        color: 'black',
    },
    forgotten:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginVertical: 30
    },

    button: (isValid) => ({
        backgroundColor: isValid ? '#07338C' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 6,
        height: 50,
    }),

    loading:{
        backgroundColor: '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 6,
        height: 50,
    },

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
    
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
})