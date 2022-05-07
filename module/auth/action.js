/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable semi */

import axiosInstance from './../../helper/axiosInstance'
import {
    getUserData,
    removeData,
    setUserData,
    setUserToken,
} from './../../helper/UserStorage'
import {
    URL
} from '@env'
import { Alert } from 'react-native';


export async function loginAction(userData) {
    let returns = [];
    
    try {
        
        const response = await axiosInstance.post(
            URL + 'user/login',
            userData
        );
        console.log("user is ok");
        // if(!!response.data.error){
        //     returns = {
        //         'error': response.data.error,
        //         'message': response.data.message
        //     }
        // }else{
        //     returns = {
        //         'user': response.data.data,
        //         'message': response.data.message
        //     }
        //     setUserData(response.data)
        // }

    } catch (error) {
        console.log(error);
        if (error.response.status == 500 || error.response.status == 0) {
            returns = {
                'message': "connect to the internet",
                'status': error.response.status
            }
        } else {
            if (error.response.status == 403) {
                setUserData(error.response.data.data.user)
                returns = {
                    'message': error.response.data.message,
                    'status': error.response.status
                }
            }else if (error.response.status == 422) {
                setUserData("error.response.data.data.user")
                // removeData()
                
                returns = {
                    'message': error.response.data.message,
                    'status': error.response.status
                }

            }

        }
    }

    return returns
}


export async function sendOTPAction(email) {
    let returns

    
    try {
        const response = await axiosInstance.post(
            URL + 'send-otp',
            email
        );
        
        returns = {
            'message': response.data.message,
            'status': response.status
        }

    } catch (error) {
        returns = {
            'message': error.response.data.message,
            'status': error.response.status
        }
    }
    
    return returns
}


export async function sendOTPCode(OTPData) {
    let returns
    
    try {
        const response = await axiosInstance.post(
            URL + 'verify-otp',
            OTPData
        );
        
        returns = {
            'message': response.data.message,
            'status': response.status
        }
        setUserData(response.data.data.user)
        setUserToken(response.data.data.token)

    } catch (error) {
        returns = {
            'message': error.response.data.message,
            'status': error.response.status
        }
    }


    return returns
}
