/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable quotes */

import { AsyncStorage } from 'react-native';

export async function setUserData(value){
    try {
        const jsonValue = JSON.stringify(value.data)
        await AsyncStorage.setItem('@UserInfo', jsonValue)
        await AsyncStorage.setItem('@userToken', value.token)
    } catch (e) {
        console.log("error: " + e)
    }
    }

export async function  getUserData(){
    let value = null
    try {
        value = await AsyncStorage.getItem('@UserInfo')
    } catch (e) {
        console.log("error: " + e)
    }
    if (value !== null) {
        return value
    } else {
        return null
    }
}

export async function  getUserToken(){
    let value = null
    try {
    value = await AsyncStorage.getItem('@userToken')
    } catch (e) {
        console.log("error: " + e)
    }
    if (value !== null) {
        return value
    } else {
        return null
    }
}
