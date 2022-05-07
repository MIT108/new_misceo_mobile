/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable quotes */

import { AsyncStorage } from 'react-native';

export async function setUserData(value){
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@UserInfo', jsonValue)
    } catch (e) {
        console.log("error: " + e)
    }
}


export async function setUserToken(value){
    try {
        value = JSON.stringify(value)
        await AsyncStorage.setItem('@userToken', value)
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
        value = JSON.parse(value)
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


export async function  getUserEmail(){
    let value = null
    try {
    value = await AsyncStorage.getItem('@userInfo')
    } catch (e) {
        console.log("error: " + e)
    }
    if (value !== null) {
        return value
    } else {
        return null
    }
}
export async function  signedIn(){
    let value = null
    try {
        value = await AsyncStorage.getItem('@UserInfo')
    } catch (e) {
        console.log("error: " + e)
    }
    if (value !== null) {
        value = JSON.parse(value)
        return !!value
    } else {
        return null
    }
}

export async function  isVerified(){
    let value = null
    try {
        value = await AsyncStorage.getItem('@userToken')
    } catch (e) {
        console.log("error: " + e)
    }
    if (value !== null) {
        value = JSON.parse(value)
        return !!value
    } else {
        return null
    }
}


export async function  removeData(){
    await setUserData(null)
    await setUserToken(null)
}


