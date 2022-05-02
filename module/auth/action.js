/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable semi */

import axiosInstance from './../../helper/axiosInstance'
import {
    setUserData,
} from './../../helper/UserStorage'
import {
    URL
} from '@env'
import { Alert } from 'react-native';


export async function loginAction(userData) {
    let returns = [];
    try {
        const response = await axiosInstance.post(
            URL + 'login',
            userData
        );
        if(!!response.data.error){
            returns = {
                'error': response.data.error,
                'message': response.data.message
            }
        }else{
            returns = {
                'user': response.data.data,
                'message': response.data.message
            }
            setUserData(response.data)
        }

    } catch (error) {
        Alert.alert("Login action error : " + error.message)
    }

    return returns
}