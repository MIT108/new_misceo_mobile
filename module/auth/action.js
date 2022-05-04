/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable semi */

import axiosInstance from './../../helper/axiosInstance'
import {
    getUserData,
    setUserData,
    setUserToken,
} from './../../helper/UserStorage'
import {
    URL
} from '@env'
import { Alert } from 'react-native';

console.log('====================================');
console.log(axiosInstance);
console.log('====================================');

export async function loginAction(userData) {
    let returns = [];
    console.log('====================================');
    console.log("login in");
    console.log('====================================');
    
    try {
        const response = await axiosInstance.post(
            URL + 'user/login',
            userData
        );
        console.log("ok");
        console.log('====================================');
        console.log(response);
        console.log('====================================');
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
        if (error.response.status) {
            returns = {
                'error': "connect to the internet",
                'message': "connect to the internet",
                'status': error.response.status
            }
            
        } else {
            if (error.response.status == 403) {
                setUserData(error.response.data.data.user)
            }
            returns = {
                'error': error.response.data.message,
                'message': error.response.data.message,
                'status': error.response.status
            }

        }
    }

    return returns
}


export async function sendOTPAction(email) {
    let returns
    
    try {
        const response = await axiosInstance.post(
            'send-otp',
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
    console.log(URL);
    
    try {
        const response = await axiosInstance.post(
            URL + 'verify-otp',
            OTPData
        );
        
        returns = {
            'message': response.data.message,
            'status': response.status
        }
        console.log(response.data)
        // setUserToken()

    } catch (error) {
        returns = {
            'message': error.response.data.message,
            'status': error.response.status
        }
        console.log('====================================');
        console.log(returns);
        console.log('====================================');
    }


    return returns
}